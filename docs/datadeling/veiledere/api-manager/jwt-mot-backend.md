---
description: "Hvordan du kan skjule JWT-autentisering i Gravitee, for eksempel for\
  \ Maskinporten, uten at hver API-eier trenger f\xE5 tilgang til n\xF8kkelen."
title: Backend-autentisering med JWTs
---

# Backend-autentisering med JWTs

Hvordan du kan skjule JWT-autentisering i Gravitee, for eksempel for Maskinporten, uten at hver API-eier trenger få tilgang til nøkkelen.


## Bakgrunn


Flere APIer hos andre institusjoner, bl.a. DFØ, krever autentisering med maskinporten. Andre API kan kreve autentisering med andre Authorization servers. Som oftest er det best om applikasjonen får tilgang og autentiserer direkte mot Authorization serveren, men noen ganger kan de være hensiktsmessig å autentisere api gateway mot api gateway


 


DFØ har satt opp APIene sine i maskinporten slik at man er nødt til å bruke virksomhetssertifikatet til autentisering. Med mange integrasjoner og andre applikasjoner som skal ha tilgang til disse APIene blir dette sertifikatet lagret mange steder om hver applikasjon skal autentisere selv. For å begrense antall stedet sertifikatet ligger blir denne autentiseringen utført i Gravitee.


### Lage JWT i gravitee


Bruk policy "Generate JWT" for å lage en JWT. Denne kan brukes videre, f.eks. i policy-en "Add header" eller "HTTP Callout".


Generate JWT:


[![](/datadeling/img/image-20200928103116-1.png)](/datadeling/img/image-20200928103116-1.png)


 


Det er mange felt som må fylles inn, hvilke som brukes er litt forskjellig i ulike authorizasjon servere Disse er verdt å merke seg:


* Om sertifikatet er lagret på filsystemet (ta kontakt med intark-drift for dette), velg "The content of the private key is provided by reading a PKCS12/JKS/PEM file from file system" under "Key resolver". Path til riktig mappe skrives inn i "Private key / Secret key / key store path". Hvis ikke velg "The content of the private key/secret is provided inline" og lim denne inn i "Private key / Secret key / key store path" lenger ned
* Passordet til private nøkkelen blir vist i klartekst. Vær nøye og begrens hvem som har tilgang til APIet
* Om du har lastet opp sertifikatet til Authorization serveren skriv inn IDen på nøkkelen i feltet kid. Hvis det er virksomhetsertifikat, ikke fyll inn feltet "kid", men velg "Add a certificate chain as axn X5C attribute" i "Certificate chain"
* Du kan legge på så mange ekstra Claims som du vil


### Bruke JWT til autentisering og motta bearer-token


Gjøres med HTTP Callout. Leg inn URL til autentiserings-endepunktet du skal bruke og evt. headere/parametre. Legg ved JWTen som akkurat ble laget vded å bruke Expression Language-notasjon: ${context.attributes['jwt.generated']}


F.eks. for å bruke mo maskinporten må du legge ved følgende data: grant\_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${context.attributes['jwt.generated']}


### Legge ved token


For å legge på bearer-token mottatt med HTTP Callaout-policyes: i "Transform Headers"-policy, klikk på + under add, fyll inn Authorization som Name og som value: Bearer {#context.attributes['token']}


### Eksempel: Maskinporten som API


I vår Gravitee har vi registrert maskinporten (p.t. versjon 2 test-løsningen) som et API.


* APIet er ikke publisert
* Sikret med API nøkkel og sperret til IP
* backend server endpoint er for test: https://ver2.maskinporten.no/token


Det er satt opp med følgende policies:


* IP Filtering. NRECs ip-adresser er hvitelistet
* Cache. bruker parameteret scope som key og application som scope og 3599 (sekunder) som max varighet på cachede objekter. Policyen henter svar fra cache kun når http-metoden er GET.
* Generate JWT - denne genererer JWT-fila som vi bruker for å autentisere mot maskinporten. iss (issuer) og scope hentes som parametre, resten av feltene er hardkodet
* assign content - legger på requesten ihht. oauth2-standard og med JWT som akkurat er generert som assertion
* Transform parameters. Fjerner parameterne iss og scope
* Transform headers. legger til encoding
* Override HTTP method. Endrer til POST


APIet er også satt opp med en cache-ressurs.


 


I tilegg er applikasjonene registrert i samarbeidsportalen. Foreløpig er det registrert 1 applikasjon med 4 scopes. ApplikasjonsIDen herfra er det som blir brukt som paramteret *iss* (for Issuer). Dette er også registrert hos DFØ.


Virksomhetsertifikatet  er opprettet som en secret i openshift-prsjektet og mountet som katalogen /certs på både api-manager og gateway-podene. På denne måten trenger vi kun registrere path til fila i api-et. Det er ikke nødvendig, man kan og lime inn base64-encoded virksomhetsertifikat rett in i policy-en.


### Bruk


API-ene som bruker dette for autentisering har 2 ekstra policies:


* HTTP Callout. Denne gjør en callout til maskinportenAPIet som er registrert hos oss med http metode GET og parametre for riktig scope og riktig issuer og headeren X-Gravitee-Api-Key for å få tilgang.
* Transform headers. Legger på headeren Authorization med verdien 'Bearer' og jwt-tokenet som maskinporten returnerer.


I tillegg er disse registrert som applikasjoner i API manager. Disse har fått tilgang til maskinporten-APIet og api-nøkkelen er registrert i HTTP callout-policy-en


### Bruksanvisning


* For å registrere et API med maskinporten-autentisering må den registreres som en applikasjon og be om tilgang til maskinporten PAIet. Når tilgangen er godkjent brukes API-nøkkelen i http callout-policy-en
* På siden for å administrere API-et, velg design (Palett-ikonet) og dra policy "HTTP Callout" til midten. Fyll inn
	+ scope: request
	+ HTTP Method: GET (Kan også være POST, da blir det generert nytt token hver gang. Det skap unødvenig belasning på maskinporten og er tregt, men er kjekt ifm feilsøking)
	+ URL: https://gw-XXX.intark.uh-it.no/maskinporten-test/v2?iss=**\<ISSUER\>**&scope=**\<SCOPE\>** (issuer finner du i samarbeidsportalen)
	+ Legg til Header X-Gravitee-Api-Key Verdien er API-nøkkelen fra forrige punkt
	+ LEgg til Context variabel men navn Token og value {#jsonPath(#calloutResponse.content, '$.access\_token')}
* Dra så policy Transform Header inn i midten. Under Add/update headers, leg til en med navn Authorization og verdi Bearer {#context.attributes['token']}