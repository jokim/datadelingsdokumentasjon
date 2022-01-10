---
description: Hjelp til oppsett av Felles Studentsystem sitt FS-API.
title: Felles Studentsystem - FS-API
---

# Felles Studentsystem - FS-API

Hjelp til oppsett av Felles Studentsystem sitt FS-API.

## Om API-et


Felles Studentsystem er en fellestjeneste i sektoren. Hver institusjon har sin instans, men FS leverer et felles REST API for alle institusjoner, der hver institusjon får ut **sine studiedata**.


Se [fellesstudentsystem.no](https://www.fellesstudentsystem.no/) for mer informasjon om tjenesten. Se mer [detaljer om FS API](https://www.fellesstudentsystem.no/dokumentasjon/brukerdok/fswebservice/fs-api/).


## Standardoppsett


FS API er en fellestjeneste, og må/bør derfor settes opp likt hos alle institusjoner. Du kan sette dette opp ved å laste inn fil med standardoppsett:


**TODO.json**


## Hvordan sette opp API-et


1. Last ned standardoppsettet over, og opprett tjenesten i API manager. Se [veileder for å registrere en tjeneste i API manager via fil](/docs/datadeling/veiledere/api-manager/importer-api).
2. Registrer FS som tjeneste i *Selvbetjeningsportalen for RabbitMQ* (se [veileder for å registrere tjenesten](/docs/datadeling/veiledere/meldingsk%C3%B8/opprett-tjeneste)). Hent ut tilkoblingsdetaljene som det blir opplyst om.
3. Du som er lokal tjenesteeier for FS må be FS sentralt om tilgangsdata. Vanligvis gjøres dette ved å sende en e-post til TODO@fellesstudentsystem.no med:
	1. Be om å få API-nøkkel som gir full tilgang til din institusjons data i FS API.
	2. Send med tilkoblingsdetaljene for publisering av notifikasjoner. Passordet bør sendes på andre måter enn via e-post.
4. Når du har fått API-nøkkel for FS, må du legge den inn i API manager. (TODO: Lag veileder for dette?)
	1. Logg på API manager
	2. Gå til FS-API-et
	3. Gå til siden "meta" TODO
	4. Legg inn API-nøkkel i feltet **value**, der name-feltet heter "API-key".


API-et og meldingshåndtering er nå satt opp.


For å verifisere at API-et fungerer:


1. Opprett din egen klient (applikasjon) i API manager, om du ikke har dette allerede
2. Be om tilgang til API-et
3. Godkjenn tilgangen til API-et. Du har nå fått en egen API-nøkkel for din klient.
4. Bruk klientens API-nøkkel, og sjekk at du får hentet ut data:
	* 
	```
	
	curl --include -H "X-Gravitee-Api-Key: API-nøkkel" https://gw-**INSTANS**.intark.uh-it.no/**fs**/emner/
	
	```
	
	* Hvis du får tilbake noe som starter med "HTTP 200" og en JSON-formatert liste med ulike emner, betyr det at oppsettet i API manager er ok.