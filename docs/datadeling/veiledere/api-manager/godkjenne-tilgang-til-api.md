---
description: Hvordan du som produsent, eller dataeier, kan gi tilgang til ditt API.
title: Godkjenne tilgang til API
---

# Godkjenne tilgang til API

Hvordan du som produsent, eller dataeier, kan gi tilgang til ditt API.


### Typisk arbeidsflyt


Hvordan Gravitee fungerer rundt tilganger:


* Alle vanlige brukere kan definere applikasjoner.
* En applikasjon kan be om tilgang til en plan.
* Systemeier godkjenner eller underkjenner tilgang til planen


### Noen har bedt om tilgang


Når noen ber om tilgang blir alle eiere av APIet varslet, både i applikasjonen ved at det kommer en blå ring rundt menyen ![Bildet kan inneholde: hvit, svart, tekst, skrift, logo.](/datadeling/img/image-20201001192438-2.png)


og på e-post:


[![](/datadeling/img/image-20201001192458-3.png)](/datadeling/img/image-20201001192458-3.png)


 


Det å håndere en tilgangsforespørsel er en en oppgave eller Task. Når du er innlogget i Gravitee, trykk på menyen (person-ikonet) øverst til høyre og velg Tasks ![](/datadeling/img/image-20201001192703-4.png)


 


Der vil du se alle request. Trykk på den du vil behandle. Om tilgangen skal godkjennes klikke ACCEPT. Du har mulighet til å bestemme hvor lenge tilgangen skal gjelde ved å sette fra- og til-dato. (Fra- og til-dato kan endres i etterkant)


[![](/datadeling/img/image-20201001193240-1.png)](/datadeling/img/image-20201001193240-1.png)


 


Om du ikke vil godkjenne tilgangen klikk på REJECT:


[![](/datadeling/img/image-20201001193405-2.png)](/datadeling/img/image-20201001193405-2.png)


 


Du kan skrive en beskjed som blir sendt til konsumenten.


Etter at tilgang er godkjent eller undetkjent blir det sendt en automatisk generert e-post til eier av applikajsonen. Om det er en plan med API-nøkkel kan en av eierne av applikasjonen logge inn og hente API-nøkkelen. Du trenger i utgangpunktet ikke sende API-nøkkelen til søker, nøkkelen er hemmelg og skal uansett ikke sendes i klartekst.


 


### Se tilganger som er gitt


Under Subscription på siden til APIet er det en oversikt over hvilke applikasjoner som abonnerer på ditt API


[![](/datadeling/img/image-20201001193544-3.png)](/datadeling/img/image-20201001193544-3.png)

## Relatert innhold
Lenke til API manager finnes på denne siden: