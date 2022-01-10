---
description: "Hvordan du som konsument kan s\xF8ke om tilgang til et API i Gravitee."
title: "F\xE5 tilgang til et API"
---

# Få tilgang til et API

Hvordan du som konsument kan søke om tilgang til et API i Gravitee.


### Logg inn


Gå til [API manager (URL-er)](/docs/datadeling/teknisk-plattform/oversikt) og trykk på LOGIN øverst til høyre. Det kommer opp et pop-up-vindu. Om innloggingsvinduet ikke dukker opp sjekk om du har sperret for pop-up-vinduer


[![](/datadeling/img/image-20200915143652-1.png)](/datadeling/img/image-20200915143652-1.png)


### Opprette en enkel applikasjon


Enkle applikasjoner som autentiserer seg ved hjelp av en API-nøkkel. Dette passer for  datadeling internt på en institusjon og for utvikling. API-nøkkel kalles noen ganger for Developer key. API-nøkkelen skal behandles som et passord, det må derfor ikke være tilgjengelig for uvedkomne, verken når det blir oppbevart eller når det blir kopiert.


 


Opprett en applikasjon ved å velge Applications og trykke på det store pluss-tegnet..


[![](/datadeling/img/image-20200915210106-1.png)](/datadeling/img/image-20200915210106-1.png)


Skriv inn navn og beskrivelse. Det er viktig at det brukes et godt og beskrivende navn og en go beskrivelse. Ta gjerne med lenke til innlogginsside og dokumentasjon i beskrivelsen.


  

Skriv inn type om du vil, eller «skip» (blir da «simple»)  

Velg APIer du vil abonnere på om du vet det nå, eller «skip» for å abonnere på APIer senere


 


[![Bildet kan inneholde: tekst, skrift, skjermbilde, programvare, linje.](/datadeling/img/image-20200915145345-4.png)](/datadeling/img/image-20200915145345-4.png)


  

Trykk på "Create the application" Applikasjonen er nå registrert i API Manager og du kan søke om tilgang til APIer me denne applikasjonen. Du kan og gi rettigheter til dine kollegaer slik at flere kan søke om tilganger, hente ut API-nøkler, se gjennom tilganger og feilsøke.


### Opprett applikasjon som kan abbonnere på JWT og OAuth2-planer


Samme fremgansgsåte som for enkel applikasjon, men i tilegg på client\_id registreres. Denne er ofte autogenerert av OAuth 2 autorisasjon-serveren og du kan kopiere den derfra


I tilegg er det lurt å registrere riktig type applikasjone (om det er annet enn Simple )


Du kan bruke en av:


* Browser (Angular, React, ...)
* Web (Java, .Net, ...)
* Native (iOS, Android, ...)
* Backend-to-Backend


(TODO: se på [OpenID Connect Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html). )


### Søke om tilgang etter at man har opprettet en applikasjon


Samme applikasjon kan gjerne abonnere på flere API, og flere planer for samme API


 


Søk om eller let etter APIet som du vil abonnere på i portalen / API gallery


[![API portal](/datadeling/img/image-20200915150147-1.png)](/datadeling/img/image-20200915150147-1.png)


 


Velg API og deretter ønsket plan, søk om tilgang ved å trykke på Subscribe


Sjekk at riktig applikasjon er valgt og endre om det ikke er det. Skriv inn en kommentar md forklaring til hvordor du vil ha tilgang. Om det har vært møter, sak, bestilling e.l. i forbindelese med integrasjoenen legg gjerne ved referans til dette, og gjerne en e-postadresse (f.eks. til e-post-liste) som du kan kontaktes på. Trykk til slutt på Subscribe en gang til og forespørselen blir sendt til dataeier for godkjenning.


![](/datadeling/img/image-20200915150346-2.png)


![](/datadeling/img/image-20200915150835-3.png)


 


### Legge til flere eiere for en applikasjon


Gå til applikasjonen du vil legge til eller fjerne eiere eller brukere fra, og deretter på Members


![Bildet kan inneholde: rektangel, font, linje, skjermbilde, programvare.](/datadeling/img/image-20210426164906.png)


Trykk på det ble +-tegnet for å legge til bruker. Søk om riktig person, velg om brukeren skal være eier (owner) eller bare se applikasjonen (user) og velg Add  

Eiere kan søke om tilgang til API-er på vegne av applikasjonen og hente ut API-nøkler


### Finne API-nøkkel


Etter at tilgang er innvilget kan du se på siden med subscription for din applikasjon, og velge det riktige API-et


![](/datadeling/img/image-20200915151605-4.png)


 


![](/datadeling/img/image-20200915151631-5.png)


Herfra kan du kopiere API-nøkkelen over krypterte forbindelser. Pass på at ingen uvedkommende kan lese nøkkelen der den blir lagret. Om API-nøkkelen er gammel, kan ha kommet på avveie eller du vil bytte den av andre grunner, velg "renew API key". Det blir da laget en ny du kan skifte til. Den gamle vil fortsette å være gyldig i 2 timer til, deretter vil den gå ut.
