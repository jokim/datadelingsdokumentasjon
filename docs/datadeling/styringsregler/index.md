---
description: "Oversikt over styringsreglene til UH:IntArk.\n\n\nFor \xE5 v\xE6re i\
  \ henhold til UH:IntArk er det styringsreglene du **m\xE5** f\xF8lge."
slug: /datadeling/styringsregler/
title: Styringsreglene til UH:IntArk
---

# Styringsreglene til UH:IntArk

Oversikt over styringsreglene til UH:IntArk.


For å være i henhold til UH:IntArk er det styringsreglene du **må** følge.

Formålet med styringsreglene for UH-IntArk er å oppsummere de viktigste implikasjonene og kravene fra [formålet til UH-IntArk](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/hva-er/styringsreglene-kategorisering.html), [integrasjonsprinsippene](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/prinsippene/samlet.html) og [referansearkitekturen for datadeling](https://unit-norge.github.io/unit-ra/main/B%c3%b8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%c3%b8yere%20utdanning%20og%20forsking.html). Styringsreglene er altså minimumskravene institusjoner som bruker UH-IntArk må oppfylle for å etterleve UH-IntArk – følger du styringsreglene så følger du UH-IntArk. Det forventes allikevel at institusjoner som bruker UH-IntArk setter seg inn i alle relevante dokumenter og tilstreber å følge alle intensjonene og anbefalingene i disse – se [docs.uninett.no](https://docs.uninett.no/)   for oversikt.


Gevinstene med styringsreglene er mer kostnadseffektiv og endringsdyktig datadeling hos hver institusjon, og sektoren som helhet, ved at alle aktører følger de samme kjørereglene for datadeling.


Styringsreglene forvaltes av Sikt i henhold til sektorens tjenestestyringsmodell, med involvering av institusjonene i sektoren. Det må forventes at styringsreglene endres over tid basert på erfaringer fra bruk av UH-IntArk, utviklingen i teknologiplattformen for fellestjenesten, endringer i nasjonale føringer for datadeling, utviklingen i beste praksis for integrasjoner, endringer i markedet, osv. 


Styringsreglene gjelder for datadeling mellom tjenester lokalt hos institusjonene, mellom institusjoner i sektoren, og med andre aktører utenfor sektoren. Styringsreglene er ikke gjeldende for hva du gjør internt i en IT-tjeneste.


Styringsreglene er gruppert i følgende temaer:


 


# 1 Styringsregler for: tilgjengeliggjøring av data


Data skal være lett å finne og ta i bruk, for å enkelt kunne gjenbrukes. Sektoren har en [teknisk datadelingsplattform](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/teknisk-plattform/) som hjelper deg med dette, men du må også overholde styringsreglene nedenfor for en enklere datadeling for alle. Dette gjelder primært for datatilbydere.


Se [brukerdokumentasjonen](https://docs.uninett.no/) for hjelp og anbefalinger relatert til styringsreglene.




| **Nr**

 | **Styringsregel**

 | **Begrunnelse**

 |
| **1.1**

 | Kildedata skal tilgjengeliggjøres gjennom et API, hvis datakonsumenter har behov og hjemmel for dem. 

 | Skal vi bli bedre på digitalisering må data være lett tilgjengelig, både for interne og eksterne datakonsumenter.

 |
| **1.2**

 | Kildedata skal tilgjengeliggjøres gjennom API som følger [prinsippene for løse koblinger](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/begreper/los-kobling.html), og være konsument-uavhengig.

 | Verden endrer seg, og det må være enkelt å kunne bytte ut enkelttjenester og -systemer fortløpende. Løse koblinger reduserer lock-in til spesifikke leverandører eller tjenester. Dette følger [DigDirs prinsipp 5 Opplysningene som de er](https://www.digdir.no/datadeling/prinsipp-5-opplysningene-som-de-er/2086).

 |
| **1.3**

 | API skal publiseres i [institusjonens API-katalog](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/teknisk-plattform/oversikt.html).

 | En samlet oversikt gjør det enklere for datakonsumenter å finne frem til institusjonens data, og for institusjonen gir det bedre oversikt over hvilke data som deles med hvem. 

 |
| **1.4**

 | API og notifikasjoner skal være dokumenterte og ha publiserte kontaktpunkter. Dokumentasjonen skal være lesbar både for maskiner og mennesker, der [minimumskravet er bruk av OpenAPI (swagger)](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/api-design/) for API,


og for notifikasjoner [CloudEvents og IntArks videre føringer](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/notifikasjonsdesign/).

 | Det må være enkelt for datakonsumenter og utviklere å ta i bruk et API.

 |
| **1.5**

 | API som tilbyr kildedata skal ha tilstrekkelig oppetid og responstid til å støtte forventet anvendelse og last. Institusjonen vurderer hva som er godt nok.

 | Datakonsumenter må kunne stole på at data er tilgjengelige, skal de kunne brukes.

 |
| **1.6**

 | Integrasjoner skal følge [UH-IntArks anbefalte integrasjonsmønstre](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/integrasjonsmonster/). Ønsker om nye integrasjonsmønstre meldes inn til forvaltningsorganet.

 | Velprøvde, gjenkjennelige og dokumenterte integrasjonsmønstre gjør det enklere å dele på integrasjoner og kompetanse.

 |
| **1.7**

 | Like kildedata - på tvers av institusjoner - skal struktureres og tilgjengeliggjøres   for konsumenter på lik måte, enten gjennom et felles API eller identiske API-er.

 | Datakonsumenter må kunne hente tilsvarende data fra sektoren med minst mulig spesialtilpasninger per institusjon. Hvert avvik gir mere kostnader.

 |
| **1.8**

 | Det skal tilbys[notifikasjoner om endringer i kildedataene](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/integrasjonsmonster/hendelsesbasert/) hvis rask provisjonering gir bedre brukeropplevelse i de konsumerende tjenestene.  

 | Sluttbrukere forventer at IT-tjenester bare fungerer, umiddelbart, og ønsker ikke å "vente til neste morgen". I tillegg er dette en mindre systemkrevende integrasjon for store datasett, sammenlignet med komplette overføringer av alle data.

 |
| **1.9**

 | API skal bare tilby data de er autoritative for  .

 | Å tilby data som andre er ansvarlige for gjør det vanskeligere for konsumenter å finne frem til riktige kildedata. Du bør heller referere eller henvise til autoritativt kildesystem.

 |
| **1.10**

 | Forretningslogikken til en integrasjon bør i utgangspunktet ligge hos konsumenten, eventuelt i mikrotjenesten mellom datatilbyder og konsument.

 | IntArk synliggjør kostnaden med forretningslogikk, spesielt ulikhetene ved gjenbruk. Ved å plassere forretningslogikk i integrasjonen , unngår du at kompleksitet lekker inn til datatilbyders løsning. Dette følger også [DigDirs prinsipp 5 Opplysningene som de er](https://www.digdir.no/datadeling/prinsipp-5-opplysningene-som-de-er/2086).

 |


 


# 2 Styringsregler for: informasjonsforvaltning


Det holder ikke bare å gjøre data tilgjengelige for å oppnå gevinstene med god datadeling. Du trenger også god datakvalitet for å oppnå gjenbruk, og at dette forvaltes fortløpende.


For mer informasjon, se blant annet [Veileder for orden i eget hus](https://data.norge.no/guide/veileder-orden-i-eget-hus/), [anbefalinger for god datakvalitet](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/datakvalitet/), [sektorens API-kataloger](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/teknisk-plattform/oversikt.html), Felles datakatalog [data.norge.no](https://data.norge.no/), og [anbefalte roller og ansvar i UH-IntArk (spesielt rollen «dataforvalter»)](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/hva-er/roller/).


 




| **Nr**

 | **Styringsregel**

 | **Begrunnelse**

 |
| **2.1**

 | Kildedata skal beskrives semantisk iht. [DCAT-AP-NO](https://data.norge.no/specification/dcat-ap-no/) og [IntArks videre føringer](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/god-praksis/datakvalitet/datasett/). Beskrivelsen skal publiseres i institusjonens API-katalog. Bruk begreper og semantikk som er definert innen kildedataenes domene.

 | En samlet oversikt over alle kildedata gjør det enklere for datakonsumenter å finne frem til riktige data, og institusjonen unngår duplisering av data.


En sektoriell datakatalog er under planlegging, så beskrivelser av datasett vil på sikt flyttes.


TODO: Lenk til eksempel.

 |
| **2.2**

 | Kildedata skal ha god datakvalitet, altså at de er korrekte, komplette, oppdaterte, og konsistente, og har evnen til å støtte de informasjonsformål de brukes til ([Se definisjon fra datakatalog](https://data.norge.no/concepts/0321e3b5-984a-4406-a312-90c4edf37c52)en).

 | Data med dårlig kvalitet vil føre til mindre gjenbruk, og mer lokale avvik.

 |
| **2.3**

 | Kildedata skal rettes av tilbyder, i kildesystemet, og ikke i konsumerende tjeneste eller underveis i mellomvare. Feil i data skal meldes til tilbyder.

 | Det er en mer effektiv ressursbruk å rette feil i kilden, enn at hver enkelt datakonsument skal gjøre samme rettingene. Hvis en konsument retter på kildedata, har du i praksis skapt et nytt, uoffisielt kildesystem.


Det er tillatt å *endre* på kildedata for å støtte spesifikke bruksområder, for eksempel i «ytre API», men rettinger av feil skal fremdeles gjøres hos kilden.

 |


 


# 3 Styringsregler for: bruk av data


UH-IntArk legger til rette for datakonsumenter, men det er også noen regler konsumentene må følge.




| **Nr**

 | **Styringsregel**

 | **Begrunnelse**

 |
| **3.1**

 | Datakonsumenter skal hente data fra kildesystemet, og ikke gjennom andre tjenester. Unntaket er fellestjenester for sammenstilte data , og mellomvare som caching- og proxy-tjenester.

 | Institusjonen har bedre oversikt og kontroll over egne data hvis alle henter data fra kilden, og ikke via andre konsumenter. For eksempel når det er viktig at data slettes. Et annet eksempel er at en konsument kan ha gjennomført egen datavask, og filtrert bort data som ikke er interessant for denne konsumenten.

 |


 


# 4 Styringsregler for: IT-sikkerhet og tilgangsstyring


Institusjonene trenger å ha oversikt og kontroll over hvem som har tilgang til deres data.


Se også de [tekniske retningslinjene](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/teknisk-plattform/oversikt.html) for mer detaljer om sikring av tjenester og integrasjoner.




| **Nr**

 | **Styringsregel**

 | **Begrunnelse**

 |
| **4.1**

 | Tilganger til kildedata skal registreres og kontrolleres i institusjonens API manager

 | Institusjonen har bedre oversikt og kontroll på hvem som har tilgang til hvilke av deres data, hvis alle tilganger er samlet ett sted. API manager gir verktøy for oversikt og innsikt.

 |


# 5 Styringsregler for: organisering


Institusjonene styrer selv hvordan de organiserer seg relatert til datadeling, men de må oppfylle noen funksjonelle behov for å overholde UH-IntArk. Vi *anbefaler* likevel at institusjonene tar i bruk de [anbefalte rollene fra referansearkitekturen for deling av data i høyere utdanning og forsking](https://unit-norge.github.io/unit-ra/main/B%C3%B8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%C3%B8yere%20utdanning%20og%20forsking.html#_roller_og_ansvar_for_informasjonsforvaltning). Se også [UH-IntArk sin anbefaling relatert til rollene](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/hva-er/roller/).


 




| **Nr**

 | **Styringsregel**

 | **Begrunnelse**

 |
| **5.1**

 | Deltakende institusjoner skal ha et kontaktpunkt, for bistand til institusjonens integrasjoner. Kontaktpunktet må også være tilgjengelig for aktører fra utenfor institusjonen.

 | Det må være enkelt å integrere, og datatilbydere og konsumenter må kunne få hjelp om de trenger det. Ofte handler bistanden om å kunne henvise til riktig person eller rolle i organisasjonen.

 |
| **5.2**

 | Ansvaret for konkrete kildedata skal være tydelig definert. Alle kildedata må eies av noen ved institusjonen.  

 | Vi trenger en ryddig håndtering av kildedata. Bruk gjerne referansearkitekturen sin [anbefalte rolle: «dataforvalter»](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/hva-er/roller/).

 |
| **5.3**

 | Integrasjoner bør eies og finansieres av den som ønsker å integrere; altså den tjeneste som vil bedre sin kvalitet og/eller tilby rikere funksjonalitet.

 | Dette følger [DigDirs føringer ved deling av data](https://www.digdir.no/digitalisering-og-samordning/prinsipp-5-opplysningene-som-de-er/2086), der  «Tilbyder deler opplysningene slik de forvalter dem».


Et feilplassert eierskap vil kunne føre til feil prioriteringer av integrasjonen.

 |


 


# 6 Styringsregler for: annet




| **Nr**

 | **Styringsregel**

 | **Begrunnelse**

 |
| **6.1**

 | IT-tjenester som anskaffes eller utvikles skal følge UH-IntArk, inkludert tjenester levert av eksterne leverandører. Hvis en tjeneste i utgangspunktet ikke følger UH-IntArk må kostnadene for å gjøre den IntArk-kompatibel tas med i evalueringen.

 | Alle kildedata trenger å enkelt kunne tilgjengeliggjøres, hvis vi skal oppnå gevinster ved deling og gjenbruk av data. Verden og behovene endrer seg, så selv om du ikke ser behovet for deling i dag, vil det fort bli et behov senere. Vi trenger ikke flere siloer og lock-in-situasjoner.

 |
| **6.2**

 | Integrasjoner skal bruke nasjonale og sektorielle felleskomponenter, der det finnes. Hvis felleskomponenten ikke dekker behovet, skal du ha dialog med eieren av denne komponenten før alternative løsninger vurderes.

 | Det er mer effektiv bruk av ressurser å gjenbruke det som allerede er implementert. Vår sektor har enkelte behov som ikke nødvendigvis kan løses nasjonalt, men det er hensiktsmessig å i alle fall gi fellestjenesten en sjanse før du eventuelt finner opp nye hjul selv.

 |
| **6.3**

 | Unntak fra arkitekturen må besluttes basert på kost/nytte-vurderinger i et livsløpsperspektiv. Beslutningen må være sporbar. Unntaket må ivareta UH-IntArks formål og kan ikke bryte med kravet om å tilgjengeliggjøre kildedata, jf. styringsregel nr. 1.1. Unntak bør meldes tilbake til Sikt, for å gi lærdom for videreutvikling av arkitekturen

 | Hensikten med UH-IntArk er å gjøre det *enklere* å integrere i sektoren, men sektoren er veldig heterogen, og verden er ikke perfekt. I enkeltsituasjoner vil det være mer hensiktsmessig å godta et unntak, typisk i prioriteringen av kostnader, men det er viktig da å tenke på kostnadene i et større perspektiv – hvilke ulemper vil det gi for institusjonen senere?

 |
