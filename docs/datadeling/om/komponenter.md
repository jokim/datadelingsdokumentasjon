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




# Meldingskø (MQ) for sanntidsoppdatering

TODO: Skriv om frå UiO til å kunne gjelde for UH-sektoren. Flytt ut tekniske detaljar til området under [Teknisk plattform](/docs/datadeling/teknisk-plattform).

UiO har en [meldingskø-tjeneste (MQ) for sanntidsoppdatering](https://mq.uio.no/). Tjenester kan poste notifikasjoner om endringer til køen, og konsumenter (tjenester som bruker kildedata fra systemene) kan lytte til køen for å få vite om det når masterdata blir endret. Når masterdata i et system som poster til køen blir endret, vil alle tjenestene som deler disse dataene kunne oppdatere sin informasjon samtidig, forutsatt at de lytter på meldingskøen.


Tjenesten varsler når informasjonsobjekter endrer seg, og en konsument kan selv velge hvilke objekter den vil lytte på. F.eks. kan man få beskjed hvis en person bytter telefonnummer eller bostedsadresse.




### Hvem kan benytte tjenesten?


Publisering til meldingskøen er for tiden tilgjengelig for tjenesteeiere ved UiO. Lytting kan også gjøres av eksterne, for eksempel leverandører eller andre UH-aktører som bruker UiO-data. Meldingskøen er for tiden ikke åpen for at andre aktører i UH-sektoren kan publisere sine endringer.


Meldingskøen er enn så lenge bare tilgjengelig innenfor 129.240.0.0/16.


### Forutsetninger


For å kunne lytte på en meldingskø, må man ha en meldingskø-klient. En utvikler kan enkelt bygge en slik klient av standardkomponenter, og siden protokollene er åpne, betyr det ingenting hvilket programmeringsspråk som brukes. Meldingskø-klienten må konfigurere til hvilke køer den skal lytte på eller skrive til, og hvilke meta-data som skal benyttes.


Vi har et bibliotek over tidligere utviklede klienter, som i stor grad kan gjenbrukes. 


Når man registrerer seg som bruker av meldingskø-tjenesten, må man oppgi en epostadresse. Hit sendes brukernavn og passord, og gjennom årlig passordskifte vil man vite om kontaktinformasjonen eller tjeneste ennå er i bruk. Brukernavn og passord kreves kun for å kunne varsle om utviding av tjenestetilbudet, eventuell nedetid, samt ha kontroll over hvilke køer som kan avvikles fordi ingen lenger bruker dem.


MQ har i dag ikke tilgangsstyrings-/tilgangskontrollregime for å håndtere informasjonsbærende notifikasjoner. Ta kontakt dersom dette er et behov.


### Beskrivelse av tjenesten


Notifikasjonen en konsument får, inneholder bare meta-informasjon om hvilke attributter som er endret, samt en peker til informasjonsobjektet. Tilgangskontroll skjer først når konsument forsøker å aksessere informasjonsobjektet. Det går altså ingen informasjon som krever konfidensialitet gjennom tjenesten.

