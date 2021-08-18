---
description: "TODO: Dette er forel\xF8pig kun et forslag\n\n\nInformasjonen som er\
  \ lagret i ulike systemer og som er tilgjengelige f.eks. bak API er ofte nyttig\
  \ for mange andre. De b\xF8r f\xE5 tilgang til denne informasjonen. Samtidig m\xE5\
  \ vi sikre at informasjon som er fortrolig eller sensitiv ikke kommer p\xE5 avveie.\n\
  \n\nDet er derfor viktig \xE5 ha rutiner for hvem som skal f\xE5 og ikke f\xE5 tilgang\
  \ til informasjon og data."
title: Forvaltning av tilganger til API
---

# Forvaltning av tilganger til API

TODO: Dette er foreløpig kun et forslag


Informasjonen som er lagret i ulike systemer og som er tilgjengelige f.eks. bak API er ofte nyttig for mange andre. De bør få tilgang til denne informasjonen. Samtidig må vi sikre at informasjon som er fortrolig eller sensitiv ikke kommer på avveie.


Det er derfor viktig å ha rutiner for hvem som skal få og ikke få tilgang til informasjon og data.

TODO: Dette er foreløpig kun et forslag


 


 


${resource:toc title=[Innholdsfortegnelse:]}
I API manager spør man om tilgang ved å opprette en applikasjon, og søker om å abonnere på en plan for et API som er gjort tilgjengelig. For deg som skal behandle disse søknadene og avgjøre om applikasjoner skal få tilgang eller ikke er det en fordel om rutiner og vilkår er klargjort på forhånd.


Det er derfor lurt å kartlegge, dokumentere og gjerne merke APIer og planer med hvilken kategori informasjonen bak APIet gir tilgang til.


## Åpne data


Informasjon som *kan* eller *skal* være tilgjengelig for alle uten særskilte tilgangsrettigheter. Tilgang til å lese disse kan gis til alle og bør i størst mulig grad være helt åpne, slik at alle kan bruke APIet uten autentisering.


Fordele ved å tilby åpne data helt tilgjengelige:


* Enklere for 3dje-parter, bidrar til økt bruk


Ulemper ved å tilby åpne data for alle uten autentisering:


* Økt last på APIer uten forvarsel. Dette kan løse ved å legge kvoter og/eller rate-limiting på åpen plan, og  tilby tilgang med API-nøkkel for systemer som har avtalt dette


 


Andre grunner til å ikke ha åpne data tilgjengelige for alle uten authentisering kan være:


* informasjonen ligger lagret i flere systemen, men dette systemer er ikke masterdatakilde.
* 


Søknader på tilgang til API/planer med åpne data godkjennes uten videre krav


Merk at selv om noe av denne informasjonen skal være *tilgjengelig* for alle, skal likevel informasjonens integritet sikres ved at kun riktige applikasjoner har tilgang til å *endre* informasjonen.


## Tilgang til persondata ~~hjemlet i lov~~ (bedre å skrive system-til-system?)


Applikasjoner / systemer  som behandler *personvopplysninger* faller innunder personopplysningsloven og personvernforordningen. Alle behandler må ha formåls og hjemmelsvurdering, samt ha gjennomført risiko og sårbarhetsanalyse før behandlingen finner sted. For systemer som driftes av eksterne må det i tillegg være skrevet databehandleravtale og for utenlandske (under)leverandører overføringsgrunnlag.


Før man gir tilgang til APIer med personopplysninger må data-eier vurdere om det er greit at det gis tilgang til APIet og personopplysningene.


Rent praktisk gjøres det ved at opplysninger om dette (f.eks. link til webside eller referanse-numre i arkivsystem) legges ved søknaden. Når man registrerer API bør planer som gir tilgang til persondata [kreve kommentar og en kort beskjed om krav til referanse](/docs/datadeling/veiledere/api-manager/opprette-plan)


Data-eier sjekker at opplysningene er oppdaterte og i orden før tilgang blir gitt.


## TBD: Tilgang til APIer basert på samtykke


 


Det er mulig å sette opp API slik at hver enkelt person som bruker en tjeneste må interaktivt autentisere og godkjenne at tjenesten får tilgang til sine data (ofte kalt brukersentrisk datadeling) Data-eier setter opp APIene slik at de kun gir ut informasjon til tilhører personen som godkjenner.


Tilgang til data må uansett godkjennes av data-eier (samme krav til persondata som over?)


## Data med begrenset tilgang


Informasjon som ikke skal være åpen og som ikke er regnet som fortrolig havner gjerne i denne mellomkategorien. Tilgang på data i denne kategorien kan deles med både både eksterne og interne etter en konkret vurdering. Søknad om tilgang til disse APIene/planen må inneholde en begrunnelse og/eller beskrivelse av hva dataene skal brukes til. Er det personopplysninger må informasjon om formål/hjemmelsvurdering etc. være lagt ved i tillegg (se forrige punkt). Applikasjonen må ha et godt navn og beskrivelse 


Data-eier må bestemme på forhånd om det er nok med holder å skrive i søknaden i kommentar-feltet i gravitee eller om det må opprettes sak i ticket-system e.l. Dette dokumenteres på første siden med doumentasjon som legges sammen med APIet


Alt. 1) Begrunnelse for tilgang gis i kommentar til søknad om abonnement. Har det vært relevant kommunikasjon rundt tilgang legges referanse til dette med i API manager, enten av konsument når denne ber om tilgang eller som beskjed som data-eier skriver når tilgang godkjennes /


Alt 2) Det opprettes sak i ticket-system/saksbehandligsystem. Om det er behov for mer informasjon fra søker legges den inn i saken. Det samm gjelder lenker til referater fra møter, bestillinger og avtaler lagres om nødveldig. Ved søknad om eller behandling av om tilgang til API manger oppgis alle referanser til saker i kommantar når søknaden godkjenes


Det er selvfølgelig mulig å bruke en blanding, f.eks. alt1 om dataeier har bestilt integrasjon eller om det er intern søker og alt2 ellers


## Fortrolige data


Dette enformasjon  som institusjonen er pålagt å begrense tilgangen til i lov, forskrift, avtaler, reglementer og annet regelverk. Dette tilsvarer graden **fortrolig** i den offentlige Beskyttelsesinstruksen.


~~Tilgang på data i denne kategorien kan deles med både både eksterne og interne. /~~ Tilgang på data i denne kategorien kan kun gis til interne


APIer som tilbyr data som faller innunder graden fortrolig må beskyttes ekstra, helst med assymetrisk nøkkel / OAuth2 eller tilsvarende. Om det ikke er mulig ~~må~~ kan det f.eks. brukes IP-filter i tillegg.