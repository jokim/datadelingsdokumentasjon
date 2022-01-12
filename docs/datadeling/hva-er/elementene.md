---
title: Elementene i IntArk
---

Oversikt og beskrivelse av de ulike elementene som IntArk består av.


TBD: Er referansearkitekturen klar nok til at dette kan beskrives?

Du kan se på IntArk på flere nivåer:


1. Forretningsnivået, der alt som handler om virksomheten, forretningsprosesser og organiseringen. Det er her du finner de mer overordnede føringene, som endres sjeldnere.
2. Funksjonelt nivå, som handler om hvordan IntArk realiseres. Dette baserer seg i stor grad på *god praksis*, og vil kunne endres etterhvert som verden er i endring.
3. Teknisk nivå, som handler om de tekniske komponentene som er satt opp for å **støtte** IntArk.


Elementene IntArk består av:


* Forretningslaget:
	+ [**Integrasjonsprinsippene**](/docs/datadeling/prinsippene). Disse er vedtatt av sektoren, og er ryggraden i arkitekturen. Resten av IntArk baserer seg på disse prinsippene.
	+ **Selve integrasjonsarkitekturen**, eller modellen
	+ Retningslinjer, som er mer konkrete føringer, som er vedtatt av sektoren.
		- TODO: Valget med å bruke webservices.
	+ Prosessene til IntArk:
		- Prosessene for forvaltningen av IntArk
		- Prosessene i utføringen av IntArk.
* Funksjonelt lag:
	+ [Funksjonelle komponenter](/docs/datadeling/hva-er/komponenter), som IntArk trenger for å oppfylle behov ved integrasjon.
	+ Integrasjonsmønster, som beskriver hvordan integrasjoner bør fungere i sektoren, basert på *god praksis*.
	+ [Unntakshåndtering](/docs/datadeling/hva-er/prosessene/unntak). Integrasjoner må kost/nytte-vurderes, og unntak er tillatt, så lenge det er tatt et bevisst valg av sektoren eller institusjonen.
* Teknisk lag:
	+ Tekniske komponenter, som er en teknisk implementering av de funksjonelle komponentene. De tekniske løsningene vil kunne endre seg. Dette kalles Datadelingsplattformen.
