---
description: "Beskrivelse av hva vi i IntArk kaller \"notifikasjon\".\n\n\nTBD: Vert\
  \ dette riktig? Passer det med eNotifikasjon, eller er de noko anna? B\xF8r vi kalle\
  \ det noko anna, td. tynne meldingar?"
title: Notifikasjon
---

# Notifikasjon

Beskrivelse av hva vi i IntArk kaller "notifikasjon".


TBD: Vert dette riktig? Passer det med eNotifikasjon, eller er de noko anna? Bør vi kalle det noko anna, td. tynne meldingar?

En "notifikasjon" er en *tynn melding* som sendes ut av kildesystemet når kildedata endres, og brukes primært i [hendelsesbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert). Notifikasjonen skal kunne bli mottatt av konsumenter, så de kan vurdere om de skal reagere på endringen. IntArk bruker en meldingskø for å hjelpe kildesystemet med å sikre at notifikasjonen når fram til alle konsumenter, uten at tilbyderen trenger å forholde seg til alle konsumentene.


Produsenter er ansvarlige for å produsere notifikasjoner for endringer i sine autoritative data, som kan fås ut av produsenten sitt API.


## Se også


* Integrasjonsmønsteret [hendelsesbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert), som er den primære bruken for notifikasjoner.
* [Hvordan designe dine notifikasjoner](/docs/datadeling/god-praksis/notifikasjonsdesign)