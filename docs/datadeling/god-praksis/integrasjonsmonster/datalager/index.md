---
description: "Integrasjonsm\xF8nsteret der et API brukes som backend for en frontend-tjeneste.\n\
  \n\nTBD: Eitt eller to forskjellige m\xF8nster, avhengig av referansearkitektur\
  \ og vidare diskusjonar."
slug: /datadeling/god-praksis/integrasjonsmonster/datalager/
title: API som datalager
---

# API som datalager

Integrasjonsmønsteret der et API brukes som backend for en frontend-tjeneste.


TBD: Eitt eller to forskjellige mønster, avhengig av referansearkitektur og vidare diskusjonar.

Dette er et integrasjonsmønster for å gjøre presentasjonstjenester enklere, og blir muliggjort ved at IT-tjenestene følger en felles integrasjonsarkitektur.


TODO: Skriv...


TODO: Ny figur


​


![](/datadeling/img/datalager.png)
Isteden for å flytte data fra Kilde til sine interne datalager så kommuniserer tjenesten med Kilde i sanntid ved behov.

​


Vanlig flyt:


1. Sluttbruker tar i bruk en tjeneste
2. Tjenesten (konsumenten) henter relevant data fra et kildesystem sitt API
3. Kildesystemet autentiserer konsument og sluttbruker, direkte eller via tredjepart
4. Kildesystemet tilgangskontrollerer konsument og sluttbruker
5. Kildesystemet returnerer svaret
6. Tjenesten sammenstiller data og viser det fram til sluttbrukeren


Merk at beskrivelsen over er forenklet, blant annet ved at Oauth2-detaljer ikke er med.


Den samme flyten vil også gjelde når sluttbrukeren gjør endringer på data.


TODO TBD: Relatert til dette nemner referansearkitekturen at helsesektoren meiner at det er best å ha eigne systemspesifikke API per type klient her (td. mobil, web etc). Fordelen er å kunne gjere endringar i eitt API utan å påvirke dei andre typane klientar. For meg skurrer det - kan ikkje slikt løysast med versjonering av API-et, og krav om at eldre versjonar må oppgraderast frå etter ein maks-periode? Bør diskuterast - mulig eg har misforstått.


## Når bør dette brukes?


Dette mønsteret kan passe for IT-tjenester som er frontendtjenester, for eksempel portalsider på nett som skal samle informasjon fra forskjellige kilder.


Når du ønsker å gjenbruke oppdaterte data i en tjeneste, uten å måtte duplisere alle data.


Eksempler på tjenester:


* Nettportal for studenter, der studenten logger på og får oversikt over sine detaljer, for eksempel informasjon om sine emner (fra FS), undervisningstider (fra kalendersystemet), sine eksamener (fra LMS-system som Canvas), hvor alt dette skjer (fra rombookingssystemet) og sine pensumlister.


## Fordeler


* Sluttbrukerne får ferskere data.
* Konsumenten får det enklere, ved å slippe å forholde seg til eget datalager, provisjonering og alt som følger med. For eksempel å slippe å rydde i gamle data.


## Ulemper


* Setter høyere krav til ytelse og responstid for API-et. Sluttbrukere har ofte lav toleranse for ventetid. Caching bør vurderes.
* Ressursbruken vil variere veldig avhengig av målgruppen. For eksempel vil studenttjenester ha veldig høy belastning ved studiestart, men veldig liten aktivitet på nattestid.


## Fallgruver


* Konsument må kommunisere med tilbyder om forventninger om last, så tilbyder har mulighet for å skalere opp ved behov.
* Konsument bør hente data direkte fra kildesystemet og ikke fra et mellomsystem. Dette kompliserer systemlandskapet, og kan skape utfordringer når data ikke er korrekte i alle systemer.


## Se også


* TODO: Referansearkitekturen?


TODO: Gammel:


## Kildesystem som datalager


### Modulære applikasjoner


Integrasjonsarkitekturen legger også opp til mer modulære tjenester som er satt sammen av ulike applikasjoner (eller deler av applikasjoner). Under *Provisjonering* beskrives en dataflyt mellom to applikasjoner fordi konsumenten skal agere på endringer i produsentens data. Man kan tenke seg scenarier der man ikke anser tjenester eller applikasjoner som så separate, men heller at applikasjoner *sammen* utgjør en tjeneste.


![](/datadeling/img/datalager.png)
Isteden for å flytte data fra Kilde til sine interne datalager så kommuniserer tjenesten med Kilde i sanntid ved behov.

Et eksempel på en produsent som vil være attraktiv for mange tjenester er e-posttjenesten. Ved å integrere e-posttjensten i f.eks. læringsplattformen får studenter en bedre og mer innholdsrik arbeidsflate. LMS-et kan benytte e-post- og kalendertjenesten for meldinger mellom studenter og forelesere, eller kollokvie- og undervisningsgrupper. Mer tradisjonell integrasjon ved å kopiere data vil gi dårligere brukeropplevelse og kompleksitetsproblemer ved en eventuell synkronisering mellom LMS-et og e-posttjenesten.
