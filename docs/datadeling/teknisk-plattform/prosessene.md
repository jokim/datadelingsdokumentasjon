---
description: "M\xE5 svare ut:\n\n\nKva m\xE5 Uninett gjere? Kva m\xE5 USIT gjere?\
  \ Kva kan/m\xE5 institusjonane gjere?"
title: Prosessene for teknisk plattform
---

# Prosessene for teknisk plattform

Må svare ut:


Kva må Uninett gjere? Kva må USIT gjere? Kva kan/må institusjonane gjere?

TODO: Fyll ut


Teknisk plattform skal dekke prosessene beskrevet i referansearkitekturen for datadeling i UHF-sektoren:


![](/datadeling/img/arch-datautveksling.png)


TODO:![](/datadeling/img/todo-prosesser.png)


## Prosessane


Use case: IAM-prosjektet skal sette opp integrasjon mellom FS og RI for HiMolde.


### API manager


Sette opp FS API:


1. Dataeier må sikre at det juridiske er på plass. Uninett kan bistå med maler og rådgiving.
2. Registrere API
	1. Studieadministrasjonen (tjenesteeier/datatilbyder/dataeier/dataforvalter) får tilkoblingsinformasjon frå FS (Unit). Treng evt dialog om oppsett.
		* Generelt: Dataeier har dialog med leverandør av tjenesten, og får tilkoblingsinformasjon frå tenesteleverandøren.
		* Kven: Dataeier **bør** gjere dette (kan delegerast internt), men USIT/Uninett kan bistå med det tekniske, så lenge dataeier har dialog med FS (Unit) om å godkjenne at vi får tilgang til passord etc.
	2. HiMolde sin Studieadm (dataeier) registrerer FS API i Gravitee.
		* Generelt: Dataeier konfigurerer og publiserer API-et i Gravitee.
		* Kven: Dataeier kan gjere det (kan delegerast internt), men USIT/Uninett kan gjere det på vegne.
		* Kommentar: Vi ønsker at planer settast opp likast mulig mellom institusjonane, for å sikre at integrasjonar treng minst mogeleg tilpassingar. Homogenisering av planer for kjende API, slik som FS. Kan enten gjerast ved bistand, eventuelt legge ut maler/templates for kjende API som institusjonen kan bruke, inkl. veileder.
3. Registrere datakonsument (application)
	1. Tjenesteier for RI hos HiMolde registrerer application i Gravitee.
		* Kven: Teknisk sett kan alle med Feide-konto kan logge på og registrere, om institusjonen har tillatt det. Kan truleg gjerast av RI sjølv, men det er praktiske ulemper med det. Er truleg også uryddig ansvar? Kunne hende at Uninett kunne registrert applikasjonen, som tjenesteleverandør av RI. Bør diskuterast. Hos UiO seier vi at tenesteeigar som skal registrere og eige applikasjonen, då det virker ryddigast. Fordeler og ulemper - gir td. tilgang til å feilsøke.
	2. Tjenesteeier for RI hos HiMolde ber om tilgang tli FS API
		* Generelt: Tjenesteeier/datakonsument ber om tilgang til API
		* Kven: Dataeier (kan delegerast internt). Sjå punktet over, tilsvarande.
		* Kommentar: Søknad bør ha god beskriving eller referanse.
	3. HiMolde sin Studieadm (dataeier) godkjenner tilgangen i Gravitee.
		* Generelt:
		* Kven: Dette bør/må vere dataeier, i alle fall ansvaret. Juridisk sett. Ønsker ikkje delegere, for å tvinge eit eierskap tli tilgangsoversikt.
		* Kommentar: Avtaler må på plass først, og evt. ROS-analyse og andre formaliteter. TODO: Lenk til dokumentasjonen/veileder.
	4. HiMolde sender API-nøkkel til Uninett IAM.
		* Generelt:
		* Kven: Hvis delegert til Uninett faller det bort, sidan det går internt.
		* Kommentar: Nøkkel må sendast på sikker måte.


(Mulig Gravitee Cockpit kan forenkle oppsettet av FS-API, men tilgangar må framleis styrast hos institusjonen)


### RabbitMQ


BROM er på samme måte som API manager.


1. Tenesteeier må registrere datatilbyders system i BROM (kallast applikasjon i BROM)
	* Fyll inn dokumentasjon etc
	* (Dette påvirker RabbitMQ direkte - setter opp ein vhost ferdig satt opp)
2. Tenesteeier/datatilbyder registrerer i BROM at systemet sitt publiserer notifikasjoner.
3. Delegere tilgang til application i BROM til teknikarar, så dei kan hente hemmeligheter etc. og sette opp notifikasjonsutsendinga mot riktig punkt.
4. Teknikarar må sette opp tjenesten til å koble til rabbitmq
5. Konsumentar må opprette sin applikasjon i BROM
6. Konsumentar må abonnere (søke) på applikasjonen til datatilbyder (frå punkt 1)
7. Tjenesteeier må akseptere abonnementet til konsument, i BROM.
	* (Dette setter opp overføringa frå datatilbyder til konsument)
8. Konsument henter ut tilkoblingsdetaljer i BROM for applikasjonstilgangen
	* Må sendast på sikker måte.


BROM bruker dataporten-grupper for tilgang (ad hoc). Ikkje så optimalt.


Bør truleg ikkje gje nokon tligang tli RabbitMQ direkte. Bruk BROM. Tvinger folk tli riktig oppsett.