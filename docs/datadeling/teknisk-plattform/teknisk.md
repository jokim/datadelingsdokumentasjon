---
description: "Vi bruker i dag [Gravitee](https://gravitee.io) API Management som API\
  \ manager og [RabbitMQ](https://rabbitmq.com) for meldingsk\xF8. Begge kj\xF8rer\
  \ p\xE5 en kubernetes-distribusjon [OKD](https://okd.io) som er installert i [NREC](https://nrec.no)."
pictureAlt: "Bildet kan inneholde: produkt, rektangel, skrift, parallell, skr\xE5\
  ningen."
title: Tekniske detaljer om IntArk-plattformen
---

# Tekniske detaljer om IntArk-plattformen

Vi bruker i dag [Gravitee](https://gravitee.io) API Management som API manager og [RabbitMQ](https://rabbitmq.com) for meldingskø. Begge kjører på en kubernetes-distribusjon [OKD](https://okd.io) som er installert i [NREC](https://nrec.no).


## Gravitee API Management


Vi bruker open source versjonen av [Gravitee API management.](https://gravitee.io) Vi kjører kun komponenten som heter *API management*, ikke *Access Management* eller *Alert Engine*.


Per idag bruker vi versjon 1, og oppgraderer til siste underversjon omtrent en gang i måneden. Ved hjelp av *rolling upgrades* kan vi oppgradere helt uten nedetid for *API gateway*.


Alle containere som brukes av Gravitee kjører det 2 eller 3 av for å få redundans.


## RabbitMQ


RabbitMQ kjører versjon 3.8.6, og vi benytter i hovedsak AMQPS-protokollen for å sende og motta meldinger. De fleste trenger ikke tilgang til RabbitMQ direkte, men bruker det via [Selvbetjeningsportalen for RabbitMQ](/docs/datadeling/teknisk-plattform/brom).


For å få tilgang til RabbitMQ sitt management-grensesnitt kan du kontakte integrasjon@uio.no for å få opprettet en bruker og tildelt nødvendige rettigheter.


RabbitMQ kjører som et cluster med 3 noder. Du må ta høyde for at en av nodene kan være nede, det anbefales å bruke HA-mode i produksjon.


## Kobling mellom API manager og meldingkø


API manager og meldingskø har ingen direkte kobling seg imellom. De kan derfor byttes ut uavhengig av hverandre. De snakker derimot med de samme systemene.


## OKD


OKD står for "The Community Distribution of Kubernetes that powers [Red Hat OpenShift",](https://www.openshift.com) og er upstream-versjonen av Openshift. Det blir i dagligtale ofte omtalt som Openshift.


IntArk-plattforman har egne clustre som kjører på NREC i osl-sonen. Per oktober 2020 brukes versjon 3.11 av OKD, men vi planlegger oppgradere til versjon 4.7 i løpet av sommeren 2021. De er installert med ovs-multitenant SDN plugin, og hvert prosjekt (namespace) er nettverksmessig isolert.


Hver institusjon som bruker IntArk-plattformen har hvert sitt prosjekt hvor Gravitee og RabbitMQ kjører.


Oppgraderinger av OKD er for versjon 3 basert på blue-green-metodikk. Det vil si at oppgraderinger skjer ved å installere nytt cluster med nyeste versjon av alle komponenter, og deretter flytte applikasjonene fra et cluster til et annet. Dette betyr at alle tjenester vil bytte IP-adresse ved oppgraderinger.


## Lastbalanserer


Det står en lastbalanserer i forkant som sender trafikk til riktig cluster. Denne har samme IP-adresse for alle, og bruker [SNI (Server Name Indication)](https://en.wikipedia.org/wiki/Server_Name_Indication) for å route trafikken til riktig sted. I web-verdenen har dette vært standard lenge og man behøver ikke tenke på dette. Når man skal koble til en meldingskø må man derimot ofte spesifisere at man skal bruke SNI.


![Tekniske komponenter i IntArk-plattformen](/datadeling/img/intark-komponenter.png)


## IP-ranges


IntArk sin tekniske plattform kjører i regionen *osl* til NREC. Hvis du ønsker å lage brannmurregler som ikke trenger hyppige oppdateringer anbefaler vi å åpne for alle subnettene til NREC. Se [NREC sin oversikt hvilke nettverk de bruker](https://iaas.readthedocs.io/team/installation/ip.html).


Vi anbefaler **ikke** å sperre ned til spesifikke IP-adresser, fordi:


1. IntArk-installasjonene bytter cluster ved oppgraderinger
2. Tjenester kan bytte IP-adresse
3. Cluster utvides fortløpende med nye servere


Ulempen ved å åpne for alle subnettene til NREC, eller til et spesifikt cluster, er at de deles av andre institusjoner. Hvis du har API med strenge krav til brannmurregler anbefaler vi at du kjører dette via en http-proxy-server som krever brukernavn og passord.