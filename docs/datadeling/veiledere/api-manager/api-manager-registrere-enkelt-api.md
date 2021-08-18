---
description: "Oppskrift for hvordan man registrerer et enkelt API i Gravitee. I tillegg\
  \ til \xE5 registrere API m\xE5 man opprette en eller flere planer."
title: Registrere et enkelt API
---

# Registrere et enkelt API

Oppskrift for hvordan man registrerer et enkelt API i Gravitee. I tillegg til å registrere API må man opprette en eller flere planer.

Logg inn i API manager og gå på siden for API. For å kunne registrere API her må man ha rollen API Publisher. Kontakt adminstrator ved din enhet om du ikke har denne rollen.


Gå først til oversikten over API ved å enten klikke på administration i menyen oppe til høyre eller APIs i menyen til venstre. Klikk så på  +-tegnet. Om du ikke ser dette har du ikke tilgang til å registrere API.


 


![](/datadeling/img/image-20200924095643-2.png)


 


På neste side kan man velge om man vil importere API definisjonen eller opprette fra bunn av. Om man har en eksport av APIet fra en annen Gravitee-installasjon eller har en API-definisjon i Open API-format/Swagger-fil kan men bruke denne. Dette gjør registreringen mye raskene, men man må som oftest endre eller rette opp litt i etterkant.


I denne rettledningen oppretter vi APIet fra bunn av ved å trykke på den blå pilen.


 


Fyll så inn Navn, versjonsnummer, beskrivelse og context-path for APIet. Et beskrivende navn og bra beskrivelse vil gjøre APIet mye mer nyttig for andre.


context-path vil være en del av URL-en til APIet. Eksempelet over til for UiOs gateway være tilgjengelig på URLen https://gw-uio.intark.uh-it.no/my-first-echo-api


Mek at disse patth-ene er en begrenset ressurs. Om man f.eks. registrerer et utviklings-API under /personer , vil ikke ha mulighet til å registrere test-miljø under /personer/test. Da kan det være bedre å bruke f.eks. /personer/utv/v1


 


![](/datadeling/img/image-20200924102426-3.png)


 


 


På neste side skriv inn URL til backend. Om API-et er åpent for alle er dette alt som trengs, om API gateway må autentisere seg konfigurere vi dette etterpå.


![](/datadeling/img/image-20200924114923-2.png)


 


På neste side kan man opprette en plan om man vil. Man kan utsette oppretting av planer ved å velge SKIP. I denne veiviseren er det kun mulig å opprette åpne planer eller planer som bruker API-nøkler. Vil man bruke OAuth 2 og/eller JWTs for autentisering må disse opprettes etterpå


Her er et eksempel på en enkel plan. Den gir lese-tilgang til alle ressurser i APIet om man har en API-nøkkel. Siden dette er et echo-API er det ikke nødvendig å ha noe sikring. For å gjøre APIet helt åpent, velg Keyless (Public). For å kunne se hvem som bruker et API, men alle kan få tilgang kan man velge "auto-subscribe"


Under Path Authorization kan man hvite-liste eller svarte-liste tilgang til ressurser. For denne planen har vi valgt at alle kan kjøre oppslag ( GET http-verb ) for alle ressurser/"under-URLer" (/)


![](/datadeling/img/image-20200924132314-3.png)


 


På neste side kan man laste opp dokumentasjon. Dette kan være html-sider (med f.eks. overordnet dokumentasjon) eller OpenAPI/swagger filer ( brukes ofte som teknisk dokumentasjon). Det er også mulig å importere dokumentasjon fra nett (åpne web-sider eller git-repositories) eller skrive dokumentasjon direkte etter at APIet er opprettet.


![](/datadeling/img/image-20200924133645-4.png)


 


På siste side kan de velge om du vil opprette APIet uten å starte det, eller opprette og starte


Etter å ha gått gjennom veiviseren for å opprette API må man gjerne gjøre litt mer arbeid før APIet er helt klart til bruk.


Les mer om hvordan


* [Opprette flere planer](/docs/datadeling/veiledere/api-manager/opprette-plan)
* [Autentisering mot backend](/docs/datadeling/veiledere/api-manager/backend)
* [Legge policyes på API](/docs/datadeling/veiledere/api-manager/legge-pa-enkel-policy)
* [Legge til flere mottakere av e-post](/docs/datadeling/veiledere/api-manager/varsling-for-api-eiere)