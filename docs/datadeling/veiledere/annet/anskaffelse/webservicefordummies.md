---
author:
- Einar Jerpseth
title: Web Services for Dummies
---

# Web Services for Dummies

Vi vet ikke hvilke tjenester vi trenger i fremtiden, men vi ser at endringstakten øker, og IT-tjenester blir stadig mer integrert. Det er derfor viktig å tenke på fremtidige kostnader, dvs. at i ROS- og kost/nytte-analyser bør man legge inn et godt sikringsmonn for at IT-tjenesten skal ha endringsevne. Man skal kunne endre, sågar skifte ut, programvaren uten at dette utløser store kostnader, heller ikke i andre deler av virksomheten.


Tidligere har vi gjort programvarevalg som har gjort bytte av programvare veldig kostbart, f.eks. programvare for arkiv, lønn, regnskap, integrasjon, og studentsystem. I noen IT-tjenester med mange integrasjoner knyttet til seg, har vi vært i en *lock in* situasjon, som gjør at i praksis kan ikke programvaren skiftes ut. Kostnadene ved skifte er for store. Illustrasjonen under viser hvordan programvaren BAS leverer data til 8 forskjellige konsumenter (mottagere av data). Hvis man byttet ut programvaren BAS, ville det utløse endringer (og dermed kostnader) i alle disse konsumentene. Og alle måtte skifte til samme tid.


![](/datadeling/img/old-push.jpg)


For Cerebrum i dag har vi ikke 8 konsumenter, som i tegningen, men 50+. Alle disse får (har fått) sine egne spesialtilpassende uttrekk (datasett). Ingenting kan gjenbrukes. Hvis det derimot hadde vært et API mellom BAS og konsumentene, kunne hver konsument hentet de data det trengte, og selv tilpasset det sitt format, kunne man endret skiftet ut hele BAS uten at dette betød endinger for noen av konsumentene.


![](/datadeling/img/ny-bas.jpg)




Mellom BAS (produsent/kildesystem) ser vi det er kommet et API. Dette er tegnet inn med en hvit og en svart side. Den hvite siden, den konsumentene snakker med (de vet ikke om den svarte siden), behøver ikke endres. Den svarte siden kan hente (eller levere) data til flere kildesystemer. Hvilke behøver ikke konsumenten vite om. Heller ikke om den svarte siden benytter SQL, snakker med leverandørens egen (prorietære) WS, eller annet. Slik kan man sømløst og over en tidsperiode bytte ut BAS-programvaren, uten at dette medfører planlegging, prioritering og koordinering med konsumentene.


Det er ikke alltid leverandørens WS tilbyr de data man ønsker seg (det har vi fersk erfaring med), og opp mot store skyleverandører kan det være umulig å få dette implementert som en liten kunde. Derfor er det mange vurderinger som må gjøres mht. API når IT-tjenester anskaffes. Den aller viktigste er: Skal man bygge, eller ha muligheten til å bygge, en egen WS? Nå virker dette kanskje som en uoverkommelig stor oppgave, men det finnes mange rammeverk i dag som gjør dette arbeidet veldig overkommelig. Det avhenger naturligvis om man bare skal tilby data, eller hvor rik funksjonalitet man ønsker tilby. Man kan kombinere: Lage en selvutviklet WS for dataene mange konsumenter benytter, og benytte leverandørens for få konsumenter med spesielle behov. Dette er vist i illustrasjonen under.


![](/datadeling/img/ws-kjope-bygge.jpg)


 


Videre: Dersom IT-tjenesten kommer fra leverandør med et WS API som tilfredsstiller de ønsker vi har til utforming, kan man vurdere noen andre muligheter:


* Kan man lisens og utviklingsmessig beholde (og endre) leverandørens API, selv om man bytter ut leverandørens bakenforliggende programvare?
* Skal man vente med å bygge en egen WS til man er i en situasjon hvor man skal skifte bakenforliggende programvare, og da bygge den selvlagde slik at det på den hvite siden ser ut som leverandørens? Altså slik at konsumentene ikke merker at man legger skifter API?