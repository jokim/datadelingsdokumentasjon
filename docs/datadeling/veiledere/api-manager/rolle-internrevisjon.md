---
description: "Tilganger i Gravitee styres med roller og kommer levert med noen f\xE5\
  \ standard roller. De holder for de fleste tilfeller, men det er ogs\xE5 mulig \xE5\
  \ opprette egne roller om det er behov for det"
title: Egne roller i Gravitee (f.eks. for innsyn)
---

# Egne roller i Gravitee (f.eks. for innsyn)

Tilganger i Gravitee styres med roller og kommer levert med noen få standard roller. De holder for de fleste tilfeller, men det er også mulig å opprette egne roller om det er behov for det

## Bakgrunn


Et typisk eksempel på en rolle det ofte er behov for , men som kke kommer med stardard, er rolle for de som behøver innsyn i APIer og dataflyt, men som ikke behøver å kunne endre på eksisterende APIer og appliasjoner. Eksempel: intern-revisjon, it-sikkerhet.


## Administrasjon av roller


Administratorer kan gå på "Administration", "Settings" og "Roles" (under User Management)


[Se denne siden om hvordan man kan tildele roller](/docs/datadeling/veiledere/api-manager/rettigheter-og-roller-i-api-manager)


## Eksempel på rolle for revisjon


For å lage noe som er bra nok for å revidere ordentlig må man lage roller i alle scopes: management (web-grensesnttet hvor vi er nå), portal (API gallery), API og applikasjon


Start med å trykke på "add a new role" under Management. Skriv inn navn og beskrivelse av rollen og huk av leserettigheter sliksom vist under. Enkleste er å trykke på øverste avkryssingsboken og deretter fjerne de som ikke behøves, (Alert og message)


Gjør deretter tilsvarende for Portal, API og Application


![Bildet kan inneholde: azure, rektangel, gjøre, skjermbilde, programvare.](/datadeling/img/rolle-1.png)


![Bildet kan inneholde: rektangel, gjøre, parallell, skjermbilde, antall.](/datadeling/img/rolle-2.png)


![Bildet kan inneholde: rektangel, gjøre, skjermbilde, parallell, programvare.](/datadeling/img/rolle-3.png)


![Bildet kan inneholde: rektangel, gjøre, parallell, skjermbilde, teknologi.](/datadeling/img/rolle-4.png)


## Tildele rettigheter


For at en revisons-rolle skal funger m den ha tilgang til alle APIer. Tildeling av roller gjøres via grupper og gruppemedlemskap, og kan f.eks. slik som nedenfor. Det som er forskjellig fra andre grupper er at men huker av for "Associate automatically to every new API" og "Associate automatically to every new application"


Som oftest har man startet med API-management før denne rollen er opprettet, så administrator må i tillegg klikke på "Associate to existing APIs" og "Associate to existing applications"


![Bildet kan inneholde: rektangel, operativsystem, gjøre, skjermbilde, programvare.](/datadeling/img/rolle-5.png)