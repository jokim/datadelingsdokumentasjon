---
description: "Et av IntArk sine verkt\xF8y for \xE5 st\xF8tte integrasjonsutviklingen\
  \ er \xE5 bruke RabbitMQ som meldingsk\xF8."
image: /prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/img/rabbitmq-logo.png
pictureAlt: "Bildet kan inneholde: oransje, tekst, r\xF8d, fargerikhet, linje."
title: RabbitMQ
---

# RabbitMQ

Et av IntArk sine verktøy for å støtte integrasjonsutviklingen er å bruke RabbitMQ som meldingskø.

## Hva er RabbitMQ?


RabbitMQ er en tjeneste for å håndtere meldinger. Systemet ble valgt i IntArk fordi det følger [IntArk sine prinsipper](/docs/datadeling/prinsippene), spesielt med god støtte for åpne standarder i stedet for sine egne, proprietære løsninger.


Vi bruker protokollen AMQP for notifikasjoner, men RabbitMQ støtter også andre protokoller for meldingsutveksling.


RabbitMQ er primært satt opp for å støtte integrasjonsmønsteret [hendelsesbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert), med [notifikasjoner (tynne meldinger)](/docs/datadeling/god-praksis/notifikasjonsdesign), men kan også brukes for andre typer meldinger og integrasjoner.


## Hvordan bruker jeg RabbitMQ?


Vi anbefaler å bruke [Selvbetjeningsportalen for RabbitMQ](/docs/datadeling/teknisk-plattform/brom) heller enn å bruke RabbitMQ direkte. RabbitMQ krever god teknisk innsikt, så vi har utviklet et eget grensesnitt i IntArk for å gjøre forvaltningen av meldinger mye enklere.


RabbitMQ har et eget grensesnitt, som primært brukes av teknikere og driftere. Se [oversikt over teknisk plattform](/docs/datadeling/teknisk-plattform/oversikt) for URL.


## Tekniske detaljer


TODO: Lage egen side med mer tekniske detaljer, td. "routing topologi", tilkoblingsdetaljer, og forklaring til begrepene som brukes. (Hent fra uio:intark)


## Lenker


* [Selvbetjeningsportalen for RabbitMQ](/docs/datadeling/teknisk-plattform/brom)
* [RabbitMQ sine egne nettsider](https://www.rabbitmq.com/)
* [RabbitMQ sine tutorials for publisering og konsumering av meldinger](https://www.rabbitmq.com/getstarted.html)
* [Teknisk oppsett av meldingskøer](/docs/datadeling/teknisk-plattform/mq-oppsett)
* [Integrasjonsmønsteret hendelsebasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert)