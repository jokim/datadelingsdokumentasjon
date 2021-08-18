---
description: "Kode for \xE5 hjelpe deg i gang med IntArk."
slug: /datadeling/kode/
title: Kode for UH:IntArk
---

# Kode for UH:IntArk

Kode for å hjelpe deg i gang med IntArk.

## Enkle eksempler


* [Enkel publisering av notifikasjoner for meldingskø (python)](/datadeling/publisering_simpel.py)
* [Enkel konsumering av notifikasjoner fra meldingskø (python)](/datadeling/konsument_simpel.py)
* TODO: Legge til kodedømer for andre språk?
* [Se også RabbitMQ sine mer generelle introduksjoner, for ulike programmeringsspråk](https://www.rabbitmq.com/getstarted.html)


## Eksisterende tjenester


Lenker til kode fra eksisterene IntArk-kompatible tjenester:


* **Canvas-integrasjon** - En hendelsesbasert oppdatering av Canvas basert på notifikasjoner og data fra Felles Studentsystem, SAP og IGA. Denne er i bruk på UiO.
	+ Kode TODO flytt ut til github eller anna utanfor uio bitbucket
	+ [Designdokument for Canvas-integrasjonen](https://www.usit.uio.no/om/organisasjon/bnt/usitint/faglig/designdokumenter/designdokument-canvas-ms.html) - en overordnet forklaring på hva integrasjonen gjør.
* **TOFH** - motor for å ta imot IntArk-notifikasjoner og reagere på disse. Denne brukes som en sentral komponent i flere mikrotjenester. Koden er skrevet i python.
	+ [Kode for TOFH i UiB sin gitlab](https://git.app.uib.no/it-bott-integrasjoner/tofh)
* **Kalenderdata** - en tjeneste som oppdaterer studenters og fagpersoners Exchange-kalendre med studieelementer, basert på notifikasjoner og data fra Felles Studentsystem og TP. Denne er i bruk på UiO, og jobbes med å innføres hos de andre i BOTT.
	+ Kode TODO flytt ut til github eller anna utanfor uio bitbucket
	+ [Designdokument for Kalenderdata](https://www.usit.uio.no/om/organisasjon/bnt/usitint/faglig/designdokumenter/designdokument-kada.html) - en overordnet forklaring på hva integrasjonen gjør.
* **AD MicroService (ADMS)** - enkel powershell-daemon som lytter til notifikasjoner og API fra IGA for å provisjonere Active Directory.
	+ Kode TODO flytt ut til github eller anna utanfor uio bitbucket
	+ [Designdokument for ADMS](https://www.usit.uio.no/om/organisasjon/bnt/usitint/faglig/designdokumenter/designdokument-ad-microservice.html)


## Andre lenker


* [Oversikt over BOTT-INTs integrasjoner for 2020-2021](https://www.bott-samarbeidet.no/fagsamarbeid/it-bott/prosjekter/it-bott-integrasjoner/integrasjoner/). Disse er laget på bestilling av prosjekt BOTT Økonomi og lønn, og et krav er at de skal følge IntArk.
* TODO Andre institusjonar sin oversikt? NTNU? UiB? UiT? Andre?
* TODO Lenke til hurtigstart (som gir oversikt over hostname, port, etc for api gw og mq)