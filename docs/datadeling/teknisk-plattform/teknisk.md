---
title: Tekniske detaljer om IntArk-plattformen
---

## Gravitee API Management

IntArk bruker open source versjonen av [Gravitee API
management](https://gravitee.io). Vi kjører kun komponenten som heter *API
management*, ikke *Access Management* eller *Alert Engine*. Fra starten av 2022
kjører vi versjon 3.

Ved hjelp av *rolling upgrades* vil Gravitee oppgraderes uten nedetid for *API
gateway*. Det betyr at integrasjoner ikke vil merke noe til oppgraderingene,
selv om brukergrensesnittet vil kunne trenge noe nedetid.

For redundans kjører vi 2 eller 3 av alle containere som Gravitee bruker.

Gravitee ble valgt som API manager og API gateway i IntArk fordi det er en av
få systemer som støtter distribuert tilgangsstyring av API-er, slik at du kan
bestemme hvem som skal kunne administrere og hat tilgang til ditt API, og ikke
alle hos institusjonen. I tillegg er den open source og har mindre lock in enn
andre produkter.

Det er per i dag ikke støtte for å sette opp lokale API gateways. Dette vil
kunne komme i fremtiden, etter målbildet i referansearkitekturen som IntArk
baserer seg på.


## RabbitMQ

IntArk bruker [RabbitMQ](https://www.rabbitmq.com/) for å håndtere
meldingskøer. 

Vi bruker primært AMQPS-protokollen for å sende og motta meldinger.

De fleste trenger ikke tilgang til RabbitMQ direkte, men bruker det via
[Selvbetjeningsportalen for RabbitMQ](/docs/datadeling/teknisk-plattform/brom).
Hver applikasjon opprettet i selvbetjeningsportalen blir registrert som en
bruker i RabbitMQ, som du også kan logge på med. Brukernavn og passord finner
du i selvbetjeningsportalen. Ta kontakt hvis din institusjon trenger egne
brukere med andre rettigheter.

RabbitMQ kjører som et cluster med 3 noder. Du må ta høyde for at en av nodene
kan være nede. Det anbefales å bruke HA-mode i produksjon. TODO: Eller Quorum?

RabbitMQ har ingen direkte kobling med Gravitee, annet enn at de kjører på den
samme infrastrukturen, og brukes av de samme datatilbydere og konsumenter.
Dette er to helt uavhengige produkter, og blir blant annet oppgradert uavhengig
av hverandre.


## Infrastrukturen

IntArk sin tekniske plattform kjører på en Kubernetes-distribusjon som er
installert i [NREC](https://nrec.no), i osl-sonen.


### OKD OpenShift Kubernetes

[OKD](https://okd.io) er "The Community Distribution of Kubernetes that powers
[Red Hat OpenShift](https://www.openshift.com)", og er upstream-versjonen av
OpenShift. Det blir i dagligtale ofte omtalt som *OpenShift*.

IntArk-plattformen har egne clustre som kjører på NREC i osl-sonen. De er 
installert med *ovs-multitenant SDN plugin*, og hvert prosjekt (namespace) er 
nettverksmessig isolert.

Hver institusjon som bruker IntArk-plattformen har hvert sitt prosjekt hvor
Gravitee, RabbitMQ og BROM kjører.

Oppgraderinger av OKD er basert på blue-green-metodikk. Det vil si at 
oppgraderinger skjer ved å installere nytt cluster med nyeste versjon av
alle komponenter, og deretter flytte applikasjonene fra et cluster til et
annet. Dette betyr at alle tjenester vil bytte IP-adresse ved oppgraderinger.


### Lastbalanserer

Det står en lastbalanserer i forkant som sender trafikk til riktig cluster.
Denne har samme IP-adresse for alle, og bruker [Server Name Indication
(SNI)](https://en.wikipedia.org/wiki/Server_Name_Indication) for å route
trafikken til riktig sted. I web-verdenen har dette vært standard lenge og man
behøver vanligvis ikke tenke på dette. Når man skal koble til en meldingskø må
man derimot ofte spesifisere at man skal bruke SNI.


![Tekniske komponenter i IntArk-plattformen](/datadeling/img/intark-komponenter.png)


### IP-ranges

IntArk sin tekniske plattform kjører i regionen *osl* til NREC. Hvis du ønsker
å lage brannmurregler som ikke trenger hyppige oppdateringer anbefaler vi å
åpne for alle subnettene til NREC. Se [NREC sin oversikt hvilke nettverk de
bruker](https://iaas.readthedocs.io/team/installation/ip.html).


Vi anbefaler **ikke** å sperre ned til spesifikke IP-adresser, fordi:

1. IntArk-installasjonene bytter cluster ved oppgraderinger
2. Tjenester kan bytte IP-adresse
3. Cluster utvides fortløpende med nye servere


Ulempen ved å åpne for alle subnettene til NREC, eller til et spesifikt
cluster, er at de deles av andre institusjoner. Hvis du har API med strenge
krav til brannmurregler anbefaler vi at du kjører dette via en
http-proxy-server som krever brukernavn og passord.
