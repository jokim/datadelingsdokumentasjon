---
description: "Integrasjoner skal benytte l\xF8se koblinger."
slug: /datadeling/prinsippene/tjenesteorientert/
title: Tjenesteorientert
---

# Tjenesteorientert

Integrasjoner skal benytte løse koblinger.

Integrasjonsgrensesnitt skal utformes slik at tjenester og bakenforliggende systemer kan flyttes og byttes ut uten at konsumenter av tjenesten må gjøre endringer i sin ende, og omvendt.


At to entiteter er løst koblet betyr at de to entitetene samhandler, men man kan endre den ene komponenten uten at dette medfører at man må gjøre endringer i den andre. Det omvendte av løse koblinger er tette koblinger, og disse fordrer at det gjøres endringer, ofte kostbare, i begge entiteter. Ofte må begge byttes om den ene byttes.


Løse og tette koblinger er teoretiske tilstander. I praksis vil det være grader av løs kobling. Løse koblinger er det mest grunnleggende verktøyet man har for å gjøre integrasjoner endringsdyktige.


### Konsekvens


* Prinsippet om løse koblinger legger føringer på hvilken programvare vi skal anskaffe, samt hvordan vi organiserer arbeidet med integrasjon.
* Ved alle innføringer og endringer av integrasjoner skal det gjøres en faglig vurdering av om ønsket løsning er i henhold til prinsippet om løse koblinger.
* Det er eiers ansvar at integrasjonsgrensesnittet er løst koblet til bakenforliggende system, slik at dette kan endres med minst mulig forstyrrelse for konsumentene av tjenestens data.


### Se også


* Dette prinsippet følger [Digitaliseringsdirektoratets arkitekturprinsipp 5.7: Ta hensyn til anerkjente designprinsipper for tjenesteorientert arkitektur, slik som løse koplinger, modularisering, standardiserte tjenestekontrakter med videre](https://www.digdir.no/digitalisering-og-samordning/prinsipp-5-del-og-gjenbruk-losninger/1062).