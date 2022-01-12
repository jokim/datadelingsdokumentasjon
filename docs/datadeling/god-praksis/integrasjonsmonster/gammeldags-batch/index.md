---
slug: /datadeling/god-praksis/integrasjonsmonster/gammeldags-batch/
title: Gammeldags fullstendig provisjonering
---

Detaljer om integrasjonsmønsteret "fullstendig provisjonering".

Dette er muligens det simpleste integrasjonsmønsteret som i noen tilfeller kan anbefales som integrasjonsmønster i IntArk. Styrken til mønsteret er at det er enkelt, og derfor relativt rimelig å utvikle, og kan derfor vurderes for enkle, mindre tjenester.


TODO: Figur


TODO: Skriv...


Kort oppsummert er flyten i integrasjonsmønsteret:


1. Hent ut *alle* data fra kildesystemets API
2. Overskriv alle data i konsumenten


En slik fullstendig provisjonering vil vere både tid- og ressurskrevende, så i praksis blir slike integrasjoner ofte bare kjørt en gang om natta.


Optimalisering kan gjøres, for eksempel:


* Konsumenten, eller en konnektor, kan sammeligne data mellom konsument og tilbyder, for å redusere mengden data som må oppdateres hos konsumenten.
* Tilbyderen kan ha muligheter for å filtrere ut data som hentes ut. For eksempel å bare hente ut data som har blitt endret siden forrige synkronisering. Dette vil kunne betraktelig redusere mengden data som må behandles, men du vil måtte sikre at utdatere/slettet data også blir slettet hos konsumenten.


Eksempler på tjenester som bruker dette integrasjonsmønsteret:


* Gamle systemer som er vurdert til å være for kostbare å oppgradere, uten at det gir nok gevinst. Dette følger prinsippet [Fleksibel: kost/nyttevurderinger kan legitimere avvik](/docs/datadeling/prinsippene/fleksibel).
* Gamle systemer som står på vent for oppgradering eller videreutvikling.
* Rapporteringstjenester med høy toleranse for utdaterte data.


## Når bør dette brukes?


Dette mønsteret bør vanligvis ikke brukes, men kan vurderes for mindre tjenester som ikke har behov for oppdaterte data.


Mønsteret gjelder system-til-system-integrasjoner, altså der sluttbrukeren ikke er direkte involvert.


## Fordeler


* Ofte det enkleste og rimeligste alternativet å utvikle.


## Ulemper


* Passer best for system-til-system-integrasjoner.
* Fullstendige provisjoneringer tar tid, så du vil få forsinkelser. Sluttbrukere har ofte forvetninger om at tjenester skal vere klare umiddelbart.
* Fullstendige provisjeringer er ressurskrevende, spesielt for kildesystemet, og ved store datamengder.
* Har du veldig mange konsumenter vil det sette høyere krav til ytelsen hos tilbyderen. Dette kan kompenseres ved for eksempel caching i API manager.


## Fallgruver


* Integrerer via et standard API, og ikke ta snarveier om filer. Eldre kildesystemer har ofte brukt dette mønsteret, men basert seg på å produserer egne filer med relevante data, ofte skreddersydd per konsument. Dette frarådes, da det reduserer muligheten for gjenbruk, og du får sikkerhetsutfordringer rundt fildeling og opprydning. Selv med dette mønsteret må data deles gjennom et standard API.
* Opprydding vil kunne skape utfordringer, spesielt ved uthenting av subsett fra kildesystemet.


## Se også


* [Hendelsesbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert/)
* Krav til tilbyder [TODO lenke]
* Krav til konsument [TODO lenke]
* [Utforming av API](/docs/datadeling/god-praksis/api-design)


TODO: Gammel:


## Enkel, fullstendig oppdatering


En fullstendig oppdatering av et system, der du henter ut alle data fra kildesystemet, sammenligner disse, og oppdaterer din tjeneste relevante, endrede data.


Dette er en enklere form for integrasjon, som krever mindre utviklingsressurser å sette opp, men som er tregere og mer ressurskrevende å kjøre, sammenlignet med en hendelsesbasert oppdatering. Dette er likevel noen ganger en fornuftig måte å integrere, hvis du har små, enklere tjenester med lave behov for oppdaterte data. TODO.


Merk at denne typen integrasjon kan være krevende for kildesystem som har mange data. Å hente ut "alt" fra et API kan både ta tid, og redusere ytelsen til API-et for andre. Dette er derfor vanligvis ikke et anbefalt integrasjonsmønster, selv om det er hensiktsmessig i enkelte tilfeller.
