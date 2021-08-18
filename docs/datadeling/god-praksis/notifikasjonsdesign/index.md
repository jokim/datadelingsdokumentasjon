---
description: "TODO: Legg inn forklaringar, erfaringar og anna god praksis rundt notifikasjonar\n\
  \n\nTBD: Er dette riktig, eller blir det endra p\xE5 etter referansearkitekturen?"
slug: /datadeling/god-praksis/notifikasjonsdesign/
title: Hvordan designe dine notifikasjoner
---

# Hvordan designe dine notifikasjoner

TODO: Legg inn forklaringar, erfaringar og anna god praksis rundt notifikasjonar


TBD: Er dette riktig, eller blir det endra på etter referansearkitekturen?

Med "notifikasjoner" mener vi her "tynne meldinger" som går via en meldingskø. Se mer i [begrepsoversikten](/docs/datadeling/begreper). Disse notifikasjonene brukes i hovedsak i integrasjonsmønsteret [hendelsesbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert).


## Anbefalt standard


Hver tilbyder står selv fritt til å velge format på sine notifikasjoner, men i IntArk anbefaler vi bruk av standarden [CloudEvent](https://cloudevents.io/). Dette fordi det er system- og leverandøruavhengig standard som kan brukes av alle, og inneholder mange av de samme slutningene som vi har erfart i IntArk.


Merk at også notifikasjoner bør følge samme prinsippene som [utforming av API](/docs/datadeling/god-praksis/api-design): Vi fraråder å lage egne notifikasjoner som er skreddersydde for spesifikke konsumenter, men lage notifikasjoner som er generelle og standardiserte nok til å kunne brukes av alle som ønsker det.


### Forskjeller i IntArk


I IntArk har vi noen erfaringer som vi anbefaler at blir tatt hensyn til:


* TODO: Framtidigie hendingar? anna frå cloudevents? Sjekk kva som vart landa i OrgReg, og legg ut dømer!


## Hva bør en notifikasjon inneholde?


Meningen med en notifikasjon er å fortelle konsumenter at noe har skjedd i kildesystemet, slik at de kan vurdere om de skal gjøre noe. Ved at tilbyder selv sier i fra, slipper tilbyder at hver enkelt konsument jevnlig spør etter om noe nytt har skjedd siden sist.


Notifikasjonen trenger som minimum å fortelle konsumentene:


* Hvilket system, instans eller API dette gjelder. Så konsumenten vet hvor data skal hentes fra.
* Hvilken entitet eller endepunkt endringen gjelder for.


Det er også en fordel at notifikasjonen også forteller konsumentene:


* Hvilken type endring det er snakk om. Er det for eksempel oppretting, endring eller sletting av en entitet?
* Hvilket tidspunkt gjelder endringen for
* Hvilke attributter som blir påvirket. Dette gjør det enklere for konsumenter å filtrere bort endringer som ikke er relevante for de.


Mye av denne ekstra informasjonen er detaljer som konsumenten kan bruke for å redusere antal oppslag som må gjøres. Det er med andre ord optimalisering.


### Framtidige hendelser


I noen tilfeller vil en endring ikke kunne være gydlig før etter et tidspunkt fram i tid. Et eksempel på dette er at en saksbehandler oppretter en ny ansatt som ikke skal starte før neste uke.


Tilbyderen må sende ut notifikasjon om dette på tidspunktet registreringen skjedde. Tilbyderen har **ikke** ansvar for å sende ut noen notifikasjon på tidspunktet slike endringer trer i kraft - dette må konsumenten selv ta ansvar for. Bakgrunnen for dette er at det er ulikt hvordan konsumentene forholder seg til dette - et IGA-system vil for eksempel kunne ha behov for å registrere den ansatte en dag før tidspunktetn, mens et rapporteringssystem kanskje vil ha med nye data uavhengig av starttidspunkt.


TODO: Skriv bedre.


## Eksempler


Eksempel på hvordan en notifikasjon som bruker CloudEvents-standarden:



```

{
    "specversion" : "1.0",
    "type" : "no.uio.cerebrum.account.create",
    "source" : "https://cerebrum-uio.uio.no",
    "subject" : "https://cerebrum-uio.uio.no/api/v2/accounts/123456",
    "id" : "4d3559ec67504aaba65d40b0363faad8",
    "time" : "2020-10-29T09:01:14Z",
}
```

Dette eksempelet er en typisk "tynn melding", som forteller deg at en brukerkonto har blitt opprettet, men ikke stort mer. For å vite mer om brukerkontoen må du snakke med API-et som subject-feltet lenker til.


Eksempel på en enklere melding:



```

accounts/123456
```

## Hvorfor tynne meldinger?


Tynne meldinger gir en enklere flyt for provisjoneringsløsninger, som er fokus på status her og nå. Meldingen er tynne for å redusere for eksempel mengden personopplysninger. Det unngår også at konsumenter blir forvirret og anser innholdet i meldingen som kildedata - meldingen kan nemlig være forsinket og vil derfor kunne inneholde utdaterte data.


## Se også


* TODO: Eget integrasjonsmønster for event streaming?
* [Integrasjonsmønsteret hendelsesbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert), som bruker notifikasjoner
* TODO: Detaljer om meldingskø, td routing topologi