---
description: "Unng\xE5 dobbeltarbeid ved \xE5 gjenbruke tjenester og innf\xF8re fellestjenester."
slug: /datadeling/prinsippene/effektiv/
title: Effektiv
---

# Effektiv

Unngå dobbeltarbeid ved å gjenbruke tjenester og innføre fellestjenester.

Sektoren og institusjonen bør gjenbruke tjenester, og vurdere innføring av nye tjenester for å forenkle integrasjonsarbeidet.


*TBD: Vi bør diskutere kva vi gjer med dette prinsippet. Referansearkitekturen svarer kanskje delvis ut bakgrunnen for dette prinsippet, ved å definere rollene "domeneansvarlig" og "begrepseier". Vil desse rollene kunne svare ut behovet for sammenstilte data? Bør vurderast, og deretter oppdatere dette prinsippet.*


IntArk har en distribuert styringsmodell, der konsumenter og tilbydere i utgangspunktet skal snakke direkte med hverandre. Arkitekturen gir samtidig *konsumenten* ansvaret for å flette sammen data fra flere tilbydere. Noen ganger er det mer hensiktsmessig å tilby data på vegne av flere tilbydere i en tjeneste.


Det kan være nyttig å tilby fellestjenester for sammenstilte data som mange konsumenter har behov for, eller for å hjelpe små konsumerende tjenester med kompliserte operasjoner eller uttrekk.


Merk at selv om en fellestjeneste tilbys, betyr det ikke at konsumenter bør pålegges å bruke denne tjenesten.


Et eksempel på en sammensatt spørring er "Gi meg alle personer hos institusjonen". Svaret involverer gjerne data fra Felles Studentsystem, HR-system og eventuelt andre personregister, for eksempel for gjester. Det kan fort bli lite kostnadseffektivt både teknisk og administrativt at hver konsument må gjøre mer eller mindre overlappende integrasjoner.


TBD: Korleis vert ansvaret for slike sentraliserte tjenester? Korleis heng det saman med "teknisk plattform"?


De sentraliserte tjenestene kalles ofte et "knutepunkt", eller en konseptuell "tjenestebuss". Merk at det i IntArk ikke er snakk om et spesifikt tjenestebuss-system - arkitekturen legger seg ikke opp i om dette støttes av ett eller flere tjenester.


* Vert dei ein del av drifta av den tekniske plattformen?
* Bør vi sei noko om dette på sektorielt nivå? Det inkluderer noko rundt det juridiske også.


### Konsekvens


* TBD: *Teknisk plattform? Tjenestebuss?*
* Tjenestebuss skal benyttes for gjenbruk, for  eksempel "Gi meg alle personer hos institusjonen".
* Tjenestebuss skal benyttes ved forenkling, som for eksempel kan være at når data (som passord) skal være konsistente gjennom flere systemer, er det tjenestebussen som holder orden på hvor data finnes og varsler om eller distribuerer endringer; tjenestene vet ikke om hverandre, de forholder seg kun til tjenestebussen.
* TBD: Unit er ansvarlig for en sentral tjenestebuss, men hver enkelt institusjon kan ha sin egen, sentrale tjenestebuss. Eller heiter det "teknisk plattform"?
* Sammensatte uttrekk skal behovsprøves. Det er nærmest et uendelig antall kombinasjoner av sammensatte data, så behov dikterer hva som blir prioritert.
* Tjenestebussen vil ha egne databehandleravtaler mot produsenter og konsumenter. Idet en databehandleravtale er inngått mellom tjenestebussen og en produsent, så vil tjenestebussen forvalte de data som inngår på vegne av produsenten. At en konsument klarer seg med en databehandleravtale mot tjenestebussen, som gjenbruker sine dataavtaler mot bakenforliggende parter, er altså både gjenbruk og forenkling.


### Se også


* Dette prinsippet følger [Digitaliseringsdirektoratets arkitekturprinsipp 5: Del og gjenbruk løsninger](https://www.digdir.no/digitalisering-og-samordning/prinsipp-5-del-og-gjenbruk-losninger/1062).
* TBD: Lenke til hvordan melde inn behov for sentraliserte tjenester, for eksempel for sammenstilte data.