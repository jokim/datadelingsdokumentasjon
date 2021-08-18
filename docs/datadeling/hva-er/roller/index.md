---
description: "En oversikt over rollene som brukes i IntArk.\n\n\nTODO: Denne oversikten\
  \ vil bli justert, n\xE5r referansearkitekturen for datadeling i UHF-sektoren er\
  \ klar."
slug: /datadeling/hva-er/roller/
title: Rollene i UH:IntArk
---

# Rollene i UH:IntArk

En oversikt over rollene som brukes i IntArk.


TODO: Denne oversikten vil bli justert, når referansearkitekturen for datadeling i UHF-sektoren er klar.


## IntArk-koordinator


Hver institusjon som innfører IntArk har sin lokale IntArk-koordinator, som tar seg av dialogen med Datadelingsprosjektet. Dette er en midlertidig rolle, under innføringen, for å sikre en god innføring av IntArk. IntArk-koordinatoren er ansvarlig for at institusjonen gjør det som er nødvendig for å innføre IntArk.


## Tilbyder


En tilbyder av autoritative data. Kan være person, enhet eller IT-tjeneste, avhengig av konteksten.


Andre navn på rollen: dataeier og API-eier.


Merk at du kan både være tilbyder og konsument, avhengig av hvilke data du ser på.


### Plikter og rettigheter


* Tilbyder plikter å tilgjengeliggjøre sine autoritative data for andre som trenger det hos institusjonen. Foretrukket teknologi er Web Services.
* Tilbyder har ansvar for datakvaliteten i sine autoritative data, blant annet:
	+ At data er komplette
	+ At data er maskinlesbare
	+ At data er riktig formaterte
* Tilbyder plikter **ikke** å gjøre spesialtilpasninger til konsumentene, men tilby data generelt.


## Konsument


En person, enhet eller system som trenger å hente data fra kildesystem.


Merk at du kan både være tilbyder og konsument, avhengig av hvilke data du ser på.


### Plikter og rettigheter


* Konsumenter henter data direkte fra autoritativt kildesystem.
* Konsumenter bør ikke endre på data fra autoritative kildesystem. Hvis det er feil i data, skal det rettes opp i kilden.


## Forvaltningsrådet


TBD: Denne rollen er ikke bestemt, men er en mulig rolle. Avventer at referansearkitektur og forvaltningsmodell kommer på plass.


Øverste organ i UH:IntArk, som "eier av UH:IntArk".


* Avklarer og beslutter retningslinjer og styringsregler relatert til IntArk, etter hvert som uavklarte spørsmål aktualiseres.
* Koordinerer og prioriterer integrasjoner som skal utvikles i fellesskap for alle involverte.
* Forvaltningsrådet rapporterer til Unit.


## Institusjonsansvarlig


Hver enkelt institusjon har en person som er ansvarlig for at UH:IntArk følges. Institusjonsansvarlig står fritt til å plassere resterende roller og funksjoner i sin institusjon.


### Roller hos institusjonen


* **Dataeiere**, som er ansvarlige for sine kildesystem, og at de oppfyllere kravene i IntArk. Eksempelvis at data blir tilgjengeliggjort. Dataeier er også ansvarlig for tilgangsadministrasjonen til sine API.
* **Konsumenter**, som er alle som henter data fra kildesystemene.
* **Anskaffere**. Disse er ansvarlige for at IntArk følges også ved anskaffelser av IT-tjenester fra tredjeparter.


## Se også


* [Begrepsbruk](/docs/datadeling/begreper)