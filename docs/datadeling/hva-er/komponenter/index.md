---
slug: /datadeling/hva-er/komponenter/
title: Komponentene i IntArk
---

IntArk inneholder noen komponenter som bidrar til å oppfylle behovene. Støttetjenestene baserer seg blant annet på integrasjonsprinsippene.


Videre beskrives funksjonaliteten til disse komponentene. For mer tekniske detaljer om de konkrete systemene som er valgt, se egne sider om [de tekniske komponentene](/docs/datadeling/teknisk-plattform) som implementerer funksjonene beskrevet her. TODO: Vert det vanskelegare å dele det opp slik?

## Sentral oversikt over datadeling - API manager


En institusjon må ha kontroll på hvem som har tilgang til hvilke data.


For å oppfylle dette kravet, har vi behov for en tjeneste som skal gi denne oversikten:


* API manager, som gir
* API gateway, for tilgangskontroll
* API-katalog, for publisering og beskrivelse av API-er


Dette kan vere en eller flere tjenester.


Konsumenter må enkelt kunne finne frem til data, og må kunne enkelt skaffe seg tilgang.


Dette dekkes av en API-katalog, med funksjonaliteten:


* Produsenter må kunne tilgjengeliggjøre og beskrive sine API
* Konsumenter må kunne finne fram til tligjengelige API
* Konsumenter må kunne søke om tilgang tli API


TODO: Figur


TODO: Utvide med kva leveransen om API manager kjem fram til.


 


## Kontroll over data - API gateway


Tilgang til data må være på plass. TODO: meir innhald


API med data som ikke kan være åpent tilgjengelig må være tilgangsstyrt. Dette bør styres av en *API gateway*.


TODO: Funksjonalitet TODO Skriv meir frå funksjonell side. Dette vert fort teknisk.


* Et API må av en API gateway
* API gateway skal respektere de tilgangene som er tildelt av en API manager
* API gateway må ha *trust* med API manager


## Meldingskø


For å gjøre hendelsesbaserte oppdateringer enklere, tilbyr IntArk en sentralisert meldingskø som produsenter kan publisere notifikasjoner i.


Meldingskøen oppfyller behovene:


* Produsenter kan sende notifikasjoner - tynne meldinger - til meldingskøen.
* Konsumenter kan abonnere og lytte på meldinger fra de produsentene de ønsker.


Produsenten skal ikke trenger å forholde seg til hvilke konsumenter som abonnerer på meldingene. Dette tar meldingskøen seg av.


TODO: Figur
