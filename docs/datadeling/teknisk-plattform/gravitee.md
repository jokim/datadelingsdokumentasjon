---
image: /prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/img/gravitee-logo.png
title: Gravitee
---

IntArk bruker Gravitee som API manager og API gateway.

## Hva er Gravitee?

Gravitee er en open source plattform for å håndtere dine API. Den inneholder
brukergrensesnitt som kan brukes av både datatilbydere og konsumenter, og
endepunt for integrasjoner. Gravitee var det produktet som var best egnet til å
dekke IntArk sine behov for en enklere og bedre datadeling.

Gravitee kan deles i to komponenter: *API manager* er brukergrensesnittet der
institusjonen forvalter API og tilganger til data, mens *API gateway* håndterer
tilgangskontrollen til API.

og alle tjenester må hente data via API gateway.

## Gravitee som API manager

Gravitee sin API manager er brukergrensesnittet der du administrerer både dine
API og dine tilganger til andres API. Som datatilbyder setter du opp ditt API i
Gravitee. Når dette er gjort, blir ditt API publisert i en API-katalog. Som
konsument kan du da lete etter API og søke om tilgang til det. Hvis
datatilbyder godkjenner din søknad, vil du kunne hente ut dataene.

Noen funksjoner Gravitee sin API manager gir deg:

* Datatilbydere kan publisere sine API
* Datatilbydere kan sette opp egne innstillinger for sine API, for eksempel
caching
* Datatilbydere kan behandle søknader om tilgang til sine data
* Datatilbydere får oversikt over hvem som har tilgang til hvilke av sine data
* Datatilbydere kan se aktiviteten til sitt API, for eksempel hvem som belaster
det mest, og på hvilke tidspunkt
* Datatilbydere kan avslutte en konsuments tilgang, for eksempel ved misbruk
* Konsumenter kan se tilgjengelige API i institusjonens API-katalog
* Konsumenter kan se dokumentasjonen til et API
* Konsumenter kan søke om tilgang til data i et API
* Konsumenter kan, etter godkjent tilgang, hente ut en API-nøkkel for å hente
ut dataene
* Konsumenter kan få oversikt over sin aktivitet hos de ulike API-ene, for
eksempel på hvilke tidspunkt det ble sendt feilmeldinger


## Gravitee som API gateway

Gravitee har egne komponenter som brukes som gateways. Disse styres av hva som
er satt opp i API manager, men gateways kjører uavhengig av API manager. All
datadeling må gå gjennom Gravitee sin API gateway.

Som oftest brukes samme gateway foran flere API. En API Gateway er rent teknisk
en smart HTTP-proxy: Gateway mottar en request, sjekker om du har lov til å
kontakte dette API-et og sender requesten videre til riktig API.

Gravitee sin API gateway har også annen funksjonalitet, for eksempel caching.
Dette styres av hva du stiller inn i API manager. Selv om Gravitee sin API
gateway støtter avanserte omskrivninger av data som overføres, så anbefaler vi
at dette styres mest mulig av API-et selv, for å redusere avhengigheten til
Gravitee.

En fordel med å bruke en API gateway, er at API-et selv kan overlate en del av
tilgangskontrollen til Gravitee. Gravitee gis en bred tilgang til API-et, og så
blir det API gateway som autentiserer hver konsument og sjekker at de skal ha
tilgang, før gatewayen ber om data fra API-et på vegne av konsumenten.

API gateway har noen begrensninger i sin tilgangskontroll: den kan bare sjekke
hva som er satt opp i API manager, og styrer primært etter *path* i RESTfulle
API. Tjenester som trenger mer fingranulert tilgangskontroll må håndtere dette
selv, men kan la API gateway håndtere autentiseringen og den mer grovkornete
tilgangskontrollen.


## Konsepter i Gravitee

Gravitee bruker noen konsepter som er nyttige å forklare: 

* Et **API** er en datatilbyders tjeneste.
* En **Application** er en konsuments tjeneste. Når du søker om tilgang til et
API, må du registrere din *application* som tilgangen knyttes til.
* En **Plan** er et sett rettigheter og innstillinger (policies) for et API.
For eksempel kan et API ha en plan som bare gir lesetilgang til enkelte data
(styrt av path), og en annen plan som også gir skrivetilgang. En plan kan også
sette på ekstra headers eller rate-limiting.

Et API kan ha en eller flere planer, og en applikasjon **abonnerer** på planer.
En applikasjon kan abonnere på flere planer, fra ett eller flere API, som er
det som styrer hva konsumenten får tilgang til.

![Sammenhengen mellom API og planer](/datadeling/img/planer-og-api.png)

### Eksempel på bruk av Plans

En datatilbyder kan være *Felles Studentsystem*. Tjenesteier hos institusjonen
registrerer FS som et API, og oppretter noen *Plans*:

- Lesetilgang til EVU
- Lesetilgang til studenter
- Lesetilgang til undervisning
- Skrivetilgang til personer

Tjenesteeier for en eksamenstjeneste ser dette, og søker om tilgang til planen
som gir lesetilgang til studentene. Tjenesteeier for institusjonens IAM-løsning
(IGA) ønsker tilgang til å oppdatere personer i FS, og søker om skrivetilgang
til personer.

Hvis en ny tjeneste dukker opp, som trenger andre tilganger enn det som er satt
opp, kan API-et utvides med flere planer. Hvis en ekstern leverandør ønsker
tilgang til personopplysninger, må tjenesteeier vurdere om lesetilgangen til
studenter gir tilgang til for mye data, og kan opprette en ny Plan som bare gir
tilgang til akkurat de dataene leverandøren trenger. Det siste er riktignok
avhengig av hvor godt API-et er designet.


## Se også

* [Gravitee sine egne nettsider](https://www.gravitee.io/)
* [Gravitee sin dokumentasjon](https://docs.gravitee.io/)
* [IntArk sin definisjon av API manager og API
gateway](/docs/datadeling/om/komponenter)
* [Veileder for å registrere et
API](/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api)
* [Veileder for å opprette en
Plan](/docs/datadeling/veiledere/api-manager/opprette-plan)
* [Alle veiledere](/docs/datadeling/veiledere/)
