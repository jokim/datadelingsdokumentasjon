---
description: Hvordan du registrerer din tjeneste i Selvbetjeningsportalen for RabbitMQ
  for meldingsutsending.
title: Registrer din tjeneste for meldingsutsending
---

# Registrer din tjeneste for meldingsutsending

Hvordan du registrerer din tjeneste i Selvbetjeningsportalen for RabbitMQ for meldingsutsending.

1. Gå til din institusjons selvbetjeningsportal for RabbitMQ.![Bildet kan inneholde: produkt, rektangel, gest, font, linje.](/datadeling/img/brom-intro.png)
	* Dersom institusjonen din har BROM, er tjenesten tilgjengelig på https://brom-\<institusjon\>.intark.uh-it.no. For eksempel https://brom-uio.intark.uh-it.no.
2. Velg "Opprett ny applikasjon"  

![Bildet kan inneholde: font, skjermbilde.](/datadeling/img/brom-oversikt.png)
3. Legg inn detaljer om tjenesten. Velg et godt beskrivende navn, da dette blir synlig for andre som leter etter tjeneste å abonnere på notifikasjoner fra. Legg merke til at tjenesten sitt navn får et prefix basert på hva du velger som formål (feks *system-production-my\_service*).  

![](/datadeling/img/brom-create-application.png)
4. Hvis din tjeneste produserer notifikasjoner, må du registrere dette ved å velge "Registrer notifikasjonskilde":  

![](/datadeling/img/brom-register-notification-source.png)
5. Du blir bedt om å legge inn dokumentasjon om notifikasjonene til din tjeneste. Dette vises frem for konsumenter som ønsker å abonnere på din tjenestes meldinger, og er nyttig for at de kan handtere og tolke dine notifikasjoner riktig. Legg gjerne inn lenker til ekstern dokumentasjon, hvis det er beskrevet andre steder.
6. Når dette er gjort, har din institusjons RabbitMQ-instans opprettet det som trengs for å publisere notifikasjoner:  

 - En *virtual host* som er navngitt etter navnet på tjenesten/applikasjonen (feks *system-production-my\_service*)  

 - Et *exchange* med navn basert på tjenesten/applikasjonen (feks *outgoing\_system-production-my\_service*)  

  

 For mer informasjon om hvordan RabbitMQ fungerer, se [dokumentasjonen](https://www.rabbitmq.com/documentation.html).
7. Hent ut tilkoblingsdetaljene for din tjeneste, så kan du publisere notifikasjoner til alle dine abonnenter. Notifikasjonene du sender ut vil havne i abonnentene sine meldingskøer i RabbitMQ. Fremgangsmåte for å publisere notifikasjoner finner du  under "Publisering av notifikasjoner" -\> "Hvordan publisere notifikasjoner":  

![](/datadeling/img/brom-publish-messages.png)