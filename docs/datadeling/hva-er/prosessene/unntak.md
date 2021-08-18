---
description: "Unntak skal gj\xF8res etter en helhetlig kost/nytte vurdering, og ikke\
  \ kost/nytte for den enkelte tjeneste/systemeier. Institusjonen m\xE5 ha oversikt\
  \ over hvilken informasjon som flyter mellom IT-tjenester for \xE5 oppfylle lovp\xE5\
  lagte krav. Derunder skal en person f\xE5 vite all informasjon vi har om denne personen\
  \ i alle v\xE5re IT-tjenester. Man m\xE5 ta h\xF8yde for dette n\xE5r man beregner\
  \ merkostnaden av\_ unntak.\n\n\nTBD: Er referansearkitektur og forvaltning konkretisert\
  \ nok til \xE5 kunne beskrive dette? Kva er krava, lokalt og sentralt?"
title: "Unntaksh\xE5ndtering i UH:IntArk"
---

# Unntakshåndtering i UH:IntArk

Unntak skal gjøres etter en helhetlig kost/nytte vurdering, og ikke kost/nytte for den enkelte tjeneste/systemeier. Institusjonen må ha oversikt over hvilken informasjon som flyter mellom IT-tjenester for å oppfylle lovpålagte krav. Derunder skal en person få vite all informasjon vi har om denne personen i alle våre IT-tjenester. Man må ta høyde for dette når man beregner merkostnaden av  unntak.


TBD: Er referansearkitektur og forvaltning konkretisert nok til å kunne beskrive dette? Kva er krava, lokalt og sentralt?

## Unntak må dokumenteres og begrunnes


Systemeier er ansvarlig for unntak. Disse skal begrunnes og dokumenteres.


TODO: Oppdateres i Datadelingsprosjektet, da det muligens bør forvaltes sentralt: Vedtak og dokumentasjon skal lenkes opp fra tjenesteportefølje, hvilket i skrivende stund vil si [Veikartet](https://www.uio.no/for-ansatte/nettverk-moter/los-enhetene/administrativ-it/veikart/). Om kort tid vil unntak legges inn under [personvern-tjenesten](https://www.uio.no/for-ansatte/arbeidsstotte/personvern/meir-om-personvern/personopplysninger/). Dette selv om dataene i integrasjonen ikke skulle være underlagt personvernlovgivning. Unntak vil således være underlagt samme livssyklushåndtering og revisjon som personopplysninger.


Det skal være et vedtak per integrasjon og det skal spesifiseres hvilke type data, hvilke lovgivninger dataene er underlagt, og hvorvidt det er behov og på plass en databehandleravtale.


## Typiske unntakssituasjoner


Det vil være situasjoner hvor det ikke synes hensiktsmessig å integrere gjennom integrasjonsarkitekturens komponenter. Eksempler på unntak:


* Der en systemeier overfører data mellom egne tjenester fordi dette er effektivt eller en ferdig levert integrasjon fra leverandør. (Eksempelvis fra fagsystsem til datavarehus)
* Der tjenestene er laget for å hente fra gitte veletablerte katalogtjenester, som LDAP, AD eller Azure, og ikke lar seg mate med data gjennom API
* Der systemeier integrerer punkt mot punkt med en tredjepart der overføringer er leverandørtilpasset eller på et spesialisert format. (Eks: AltInn eller Lånekassen)