---
description: UH:IntArk bruker Gravitee som API manager og API gateway.
image: /prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/img/gravitee-logo.png
pictureAlt: 'Bildet kan inneholde: skrift, logo, symbol, sirkel, grafikk.'
title: Gravitee
---

# Gravitee

UH:IntArk bruker Gravitee som API manager og API gateway.

## Hva er Gravitee?


Gravitee er en open source plattform for å administrere og bruke dine API. Gravitee ble valgt som API manager og API gateway fordi det er en av få systemer som støtter distribuert tilgangsstyring av API-er, slik at du kan bestemme hvem som skal kunne administrere et gitt API.


Gravitee settes opp sentralt og driftes av de som forvalter Datadelingsplattformen. Det jobbes med en mer distribuert modell, for eksempel støtte for lokale API gateways.


TODO: Sei noko om korleis Gravitee er bygd opp - det med komponentane som køyrer uavhengig av kvarandre og kommuniserer med kvarandre.


## Gravitee som API manager


TODO


## Gravitee som API gateway


Gravitee har egne komponenter som brukes som gateways. Disse kommuniserer med manager-komponenten, og kan plasseres uavhengig av manager-komponenten, og kan til og med plasseres i AWS. TODO: Lenke til meir detaljar. TODO: Flytt dette til teknisk dokument?


Som oftest brukes samme gateway foran flere API. En API Gateway er rent teknisk en smart HTTP-proxy: Gateway mottar en request, sjekker om du har lov til å kontakte dette API-et og sender requesten videre til riktig API.


Annen funksjonalitet som gateway-komponentene støtter er TODO caching?


## Se også


* [Gravitee sine egne nettsider](https://www.gravitee.io/)
* [Gravitee sin dokumentasjon](https://docs.gravitee.io/)
* IntArk sin definisjon av API manager og API gateway TODO