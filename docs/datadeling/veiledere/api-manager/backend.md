---
description: "For av API gatewayen skal kunne snakke med APIet p\xE5 backend-serveren\
  \ m\xE5 API-gatewayen som oftest autentisere seg."
title: Konfigurere backend
---

# Konfigurere backend

For av API gatewayen skal kunne snakke med APIet på backend-serveren må API-gatewayen som oftest autentisere seg.


 


 


For å konfigurere hvordan API Gatewayen skal koble seg til APIet i bak-kant gjør man det under "Backend services endpoint"


Naviger til ditt API, deretter Proxy, Endpoints (under Backend services" og trykk på tannhjulet


![](/datadeling/img/image-20200925142430-1.png)


 


Om du har flere backend-servere som skal ha ulik konfigurasjon er det også mulig. Bruk da tannhjuet som står etter det aktuelle backend-serveren eller opprett flere grupper.


 


 


### Autentisering med API-nøkkel eller brukernavn/passord


API-nøkkel eller brukernavn/passord legges som oftest inn som HTTP-header


 


![](/datadeling/img/image-20200925143000-3.png)


Trykk på det lysegra +tegnet for å legge til en header. Fyll inn hva headeren heter og verdien (nøkkelen). Er det en annen gravitee-installasjon i bak-kant vil det f.eks. være slik:


 


![](/datadeling/img/image-20200925143832-4.png)


Andre systemer kaller ofte headeren noe annet, f.ekss bare "X-API-Key"


Ved bruk av"Basic auth" autentiserer man med brukernavn/passord. Navnet på headeren er Authorization og inneholder teksten Basic + mellomrom + brukernavn/passord. Brukernavnet og passordet legges inn som en base64-encodet streng, skilt med : (kolon).


Det finnes mange verktøy for å skifte mellom vanlig tekst og base64, i linux kan man f.eks. bruke følgende kommando i en terminalvindu:



```

echo -n brukernavn:passord | base64
```

Man kan sjekke at det ble riktig ved å bruke :



```

echo YnJ1a2VybmF2bjpwYXNzb3JkCg== | base64 -d
```

For dette eksempelet vil det se slik ut i Gravitee:


![](/datadeling/img/image-20200925145447-5.png)


 


### Få alle requests fra samme IP-adresse


 


Gravitee er installert på en kubernetes-kluster. De kan derfor kjøre på hvilken som helst  server i clusteret og clusteret kan endre seg (utvides/erstattes). I tillegg kjører vi alltid med minst 2 gateway-er for å unngå nedetid. API Gatewayen vil derfor kunne ha forskjellig ip-adresser. Mange backend-servicer ligger på sperrede nett eller åpner kun for enkelt-IP-adresser. For å slippe å eksponere backend-services mer enn nødvendig kan man konfigurere et API til å bruke en HTTP-proxy. Requesten vil da først gå til proxy-serveren og proxy-serveren ruter deretter requesten til riktig server. For backend-serveren ser det ut som requesten kom fra ip-adressen til proxy-serveren.


For å kunne gjøre dette må man ha en proxy-server. Denne bør være sikret slik at ikke alle kan bruke denne, f.eks. kan den sikres med brukernavn og passord, og kun tillate din bruker å kontakte den aktuelle backend-serveren.


 


Proxy-konfigurasjon gjøres ogå under HTTP-konfiguration. Huk av for HTTP proxy og fyll inn nødvedig informasjon


![](/datadeling/img/image-20200925151029-6.png)


### Token-basert


Ved token-basert autentisering menes som oftest autentisering med Java web tokens (JWTs). Disse er oftest kort-levede og må generesres med jevne mellomrom, f.eks. hver time eller hvert ti-ende minutt. De kan også være for engangsbruk. Som oftest må man lage et  en-gangs-token, kontakte en Authorization Server med dette en-gangs-tokenet og man får tilbake et token som er gyldig i en kort stund.


Dette er for komplisert til å kunne konfigurere her. Dette gjøres ved hjelp av policies eller et annet API.


Dette høres komplisert ut, men er både sikkert og fleksibelt.


[Se egen veiledning](/docs/datadeling/veiledere/api-manager/jwt-mot-backend)


 


### Sertifikater


 


Gateway-en kan autentisere seg med klient-sertifikat. Dette er (som token-basert autentisering) mye sikrere enn ved bruk av API-nøkkel eller brukernavn/passord. Konfigureres under




SSL - Client Authentication
[TODO-\> teste dette]
Fyll inn type sertificat (PKCS#12,PFX, Java key store/PEM-sertifikat/nøkkel-par) samt lim inn sertifikat-fila (eller path til denne om den er gjort tilgjengelig på filsystemet til API gateway-en) og evt. passord
 
### Timeouts


Hvis man opplever problemer med at koblingen mellom gravitee og endepunktet får en timeout så kan man øke timeouten satt i gravitee ved å endre på feltene du ser i bildet under


![Illustrasjon over hvor man setter timeout verdiene i gravitee](/datadeling/img/2021-11-19-13.33.01-api-qa.intark.uh-it.no-b0f451af01f7.jpg)