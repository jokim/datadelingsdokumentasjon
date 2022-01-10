---
description: "Hver institusjon kan stort sett bruke datadelingsplattformen slik de\
  \ selv \xF8nsker, men UH:IntArk setter noen f\xF8ringer. Dette er gjort for \xE5\
  \ prim\xE6rt samkj\xF8re bruken, slik at det blir enklere \xE5 dele data p\xE5 tvers\
  \ av sektoren, og eksternt."
title: "F\xF8ringer for bruk av teknisk plattform i UH:IntArk"
---

# Føringer for bruk av teknisk plattform i UH:IntArk

Hver institusjon kan stort sett bruke datadelingsplattformen slik de selv ønsker, men UH:IntArk setter noen føringer. Dette er primært gjort for å samkjøre bruken, slik at det blir enklere å dele data på tvers av sektoren, og eksternt.

## For API manager


* For API som brukes av andre i sektoren, må/bør hver institusjon sette den opp på lik måte som de andre. Enkleste måten å gjøre dette på, er å sette opp API-et ved å laste ned en fil med standard-oppset. Se oversikten over felles API-er.
* TODO


## For meldingskø


* Du bør bruke Selvbetjeningsportalen for RabbitMQ for å sette opp meldingshåndtering for tjenester. Bare bruk RabbitMQ direkte hvis du har konkrete behov som selvbetjeningsportalen ikke kan løse. Primært sikrer dette at oppsettet av notifikasjoner følger standarden og gjøres likt for alle tjenester i sektoren.