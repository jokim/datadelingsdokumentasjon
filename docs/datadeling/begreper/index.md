---
description: "Forklaringer og utdypninger av terminologi og begreper brukt i UH:IntArk\
  \ og Datadelingsplattformen. Oversikten inkluderer ogs\xE5 begreper brukt andre\
  \ steder, og hvordan de relateres til UH:IntArk, for \xE5 unng\xE5 misforst\xE5\
  elser.\n\n\n*TBD: Begrepsbruken m\xE5 samk\xF8yrast i prosjektet, s\xE5 vi er einige\
  \ om kva begrep vi bruker og ikkje, og at vi er einige.*\n\n\n*TODO: Lag ei eiga\
  \ side som introduserer dei viktigaste begrepa vi bruker i IntArk. Til d\xF8mes\
  \ Notifikasjon og Konnektor.*\n\n\n*TODO: Samk\xF8yr med [data.norge.no](https://data.norge.no).*"
slug: /datadeling/begreper/
title: Begreper i UH:IntArk
---

# Begreper i UH:IntArk

Forklaringer og utdypninger av terminologi og begreper brukt i UH:IntArk og Datadelingsplattformen. Oversikten inkluderer også begreper brukt andre steder, og hvordan de relateres til UH:IntArk, for å unngå misforståelser.


*TBD: Begrepsbruken må samkøyrast i prosjektet, så vi er einige om kva begrep vi bruker og ikkje, og at vi er einige.*


*TODO: Lag ei eiga side som introduserer dei viktigaste begrepa vi bruker i IntArk. Til dømes Notifikasjon og Konnektor.*


*TODO: Samkøyr med [data.norge.no](https://data.norge.no).*

| Begrep | Forklaring |
| --- | --- |
| Provisjonere | Å "kopiere" data fra et kildesystem til et endesystem, og holde dette fortløpende oppdatert. Mange systemer har behov for å provisjoneres, for eksempel med alle brukerkontoer som skal ha tilgang.


Begrepet Integrasjon brukes som regel om å koble sammen tjenester, mens provisjonering er det å flytte data.


Alternativt kan et system bli oppdatert med informasjon ved behov, ved såkalt *Just In Time provisjonering (JIT)*. Et siste alternativ er systemer som ikke kan integrere, og du må legge inn data manuelt.


Teknisk sett kan provisjonering foregå gjennom eOppslag, og bli hendelsesbasert ved bruk av eNotifikasjon. Eldre systemer integrerer ofte ved overføring av store, tunge filer, som har en del ulemper.


TODO: Vurder å opprette eiga side for slike begrep som treng lengre forklaringar, med oppsummering her i oversikten.


Se også: Integrasjon, Just In Time provisjonering

 |
| Produsent | Se: Tilbyder |
| Tilbyder | Rollen til en tjeneste som tilbyr data. I utgangspunktet er tilbyderen autoritativt kildesystem for data som tilbys. Avhengig av konteksten, kan dette også være snakk om en person, gruppe eller enhet.


Se også: Autoritativt kildesystem

 |
| Konsument | Rollen til en tjeneste eller system som ønsker å motta data fra en tilbyder. Avhengig av kontekst, kan dette også være snakk om en person, gruppe, enhet, utvikler eller sluttbruker. |
| Tjenesteportefølje | En oversikt over tjenester. Denne er sentral i prinsippet om Oversiktlig. Også kalt Service Portfolio.


Tjenesteportefølje (SP - Service Portfolio) er opprinnelig et oppslagsverk definert i [ITIL](http://wiki.en.it-processmaps.com/index.php/Service_Portfolio_Management#Service_Portfolio) for planlagte, aktive og nedlagte tjenester i virksomheten.


TODO: Kva bør den inkludere. Lenke til noko? TBD: Korleis forholder vi oss til dette i UH:IntArk?

 |
| Datadelingsplattformen | TODO: Er dette den tekniske plattformen, eller også integrasjonsarkitekturen? TBD


Se også: UH:IntArk.

 |
| UH:IntArk | TODO: Vert dette namnet på integrasjonsarkitekturen, eller vert det "Datadelingsplattformen"? TBD


Se også: Datadelingsplattformen.

 |
| Konnektor | En tjeneste som integrerer mellom to systemer som ikke kan integreres direkte. Ofte gjøres dette med mikrotjenester. Konnektorer inneholder ofte forretningslogikk.


Konnektorer bør følge UH:IntArk, ved at de blant annet bruker åpne grensesnitt, har så løse koblinger som mulig, og at forretningslogikk og målsystem-spesifikke hensyn ikke legges i produserende system. Se mer under prinsippet [Tjenesteorientert](/docs/datadeling/prinsippene/tjenesteorientert/).


TBD: Noen mener at en direkte-integrasjon også er en "konnektor". Hva mener vi? Har det noen verdi å kunne skille mellom systemer som integrerer direkte, og mikrotjenester el.l. som står mellom de?

 |
| Connector | Se: Konnektor |
| Målsystem | Rollen til et system, når det **henter** data fra et kildesystem.


Se også: Konsument.

 |
| Endesystem | Se: Målsystem, Konsument. |
| Autoritativt kildesystem | Rollen til et system som institusjonen har bestemt skal være kildesystemet for spesifikke dataelementer.


Se også: Tilbyder.

 |
| Kildesystem | Se: Autoritativt kildesystem. |
| System | Et IT-system. I denne konteksten brukes begrepet "system" for teknisk nivå, mens "tjeneste" brukes i brukersammenheng. Definisjonen er vag og brukes forskjellig, så begrepet bør unngås.


TBD: Samsvarer det med bruk i referanseakritektur og andre stader?


TODO: Sjå om vi bruker dette riktig overalt. Spiller det egentlig nokon rolle?


Se også: Tjeneste.

 |
| Tjeneste | En tjeneste er noe som tilbyr funksjonalitet for noen. Tjenesten kan tilbys av et system, eller i samspillet mellom flere system.


Se også: System.

 |
| Institusjonsansvarlig | Rollen til den som er ansvarlig for at sin institusjon følger UH:IntArk. Dette kan for eksempel være IT-direktør/IT-leder.


TODO: Lenk til rolleoversikten i UH:IntArk.

 |
| API | Application Programming Interface: Maskinlesbart grensesnitt for en tjeneste eller system. UH:IntArk setter noen føringer og anbefalinger for hvordan API til kildesystem skal fungere, for eksempel at vi bruker *Web Service*.


Se blant annet [utforming av API](/docs/datadeling/god-praksis/api-design).


Se også: Web Service

 |
| Anskaffer | Rollen til en person eller enhet som jobber med anskaffelse/innkjøp av IT-systemer og IT-tjenester. UH:IntArk setter føringer som anskaffere bør forholde seg til, slik at innkjøpte systemer også kan integrere. Merk at også systemer som ikke skal integreres i dag, vil kunne ha nytte av det i fremtiden. Se samlesiden for anskaffere - TODO.

 |
| Innkjøper | Se: Anskaffer |
| Prioriteringsråd | Prioriteringsrådet er en gruppe mennesker som skal prioritere mellom utviklingsbehovet til integrasjoner, der integrasjonene vil kreve de samme ressursene eller på vegne av UiOs samlede gjennomføringsevne eller endringskapasitet. Rådet skal også være et eskaleringsnivå for tjenesteeiere som ikke får dekket behov de har mot en datakilde.


TODO: Oppdater utfrå referansearkitekturen.

 |
| Sikker Datadeling | En tjeneste for å håndtere avtaler om tilganger til data. I tjenesten kan du som dataeier ha oversikt over hvem som har tilgang til hva i dine systemer, og du kan opprette, fornye og avvikle tilganger til data.


Se også: API Manager

 |
| Access Manager | Begrep brukt på et foreldet konsept. TBD: Fjerne, eller trengs det referanse til?


Se: Sikker Datadeling, API Manager

 |
| Notifikasjon | Vi bruker begrepet i IntArk om **tynne meldinger** som sendes til og fra meldingskøen, primært i integrasjonsmønsteret [hendelsesbasert oppdatering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert).


Se [eget dokument som beskriver notifikasjoner i mer detalj](/docs/datadeling/begreper/notifikasjon).


TODO: Sei noko om relasjonen itl eNotifikasjon. TBD: Oppdater utfrå kva referansearkitekturen seier.

 |
| API manager | En tjeneste som gir dataeiere kontroll over tilganger til sine API, og konsumenter mulighet for å få tilgang. API manager er et system som realiserer de funksjonelle


TBD: API manager vil bli mer definert i prosjekt Datadeling. TODO: lenk til ferdig beskrivelse av ideell API manager.


Se også: Sikker Datadeling

 |
| API-katalog | En tjeneste som gir deg oversikt over alle API-er for en institusjon. I praksis inneholder ofte en API Manager også ein API-katalog.


Se også: API Manager, Datakatalog

 |
| Datatilbyder | Se: Tilbyder |
| Datakonsument | Se: Konsument |
| API gateway | En tjeneste som tar seg av selve tilgangskontrollen til API på systemnivå. Hvem som skal ha tilgang styres i API manager, og API gateway overholder dette.


Dette begrepet har forskjellige definisjoner. TODO


TODO: oppdater når referanseakritektur er klar.

 |
| Applikasjon | En applikasjon er vanligvis definert som en samling programvare som tilbyr *tjenester*.


Gravitee bruker begrepet for entiteter som får tilgang til API, altså konsumentene. En applikasjon har en eier, og kan bli gitt tilganger. Du søker om tilganger til API via applikasjonen du registrerer.


Se også: Konsument.

 |
| Application | Se: Applikasjon |
| Authorization server | En rolle i Oauth 2-protokollen, som tar seg av tilgangskontroll.


Se: Autorisasjonstjeneste

 |
| Meldingskø | En tjeneste for å behandle meldinger og sikre at disse meldingene blir distribuert videre til tjenester som abonnerer på valgt type melding. For tiden brukes systemet [RabbitMQ i UH:IntArk](/docs/datadeling/teknisk-plattform/rabbitmq).


Merk: I IntArk-sammenheng snakker vi bare om meldingskø som tjenesten som behandler notifikasjoner og andre meldinger som skal bruker **mellom tjenester**. IntArk sier ingenting om meldingskøer som brukes internt i systemer.


Se også: [Notifikasjon](/docs/datadeling/begreper/notifikasjon)

 |
| API portal | Se: API-katalog |
| Felleskomponent | Med felleskomponent mener vi her en tjeneste eller et system som brukes av flere institusjoner i UH-sektoren. Dette kan være en nasjonal felleskomponent, som ID-porten, men det kan også være sektorspesifikke systemer, som Felles Studentsystem.


Noen felleskomponenter tilbyr felles API for alle konsumenter, mens andre tilbyr ett eget endepunkt per institusjon. Vi definerer det likevel som en felleskomponent, så lenge grensesnittet er det samme, uten lokale variasjoner. TODO: Kva er toleransen her? Etter mi meining er det ikkje lenger ein felleskomponent dersom utviklarar må legge inn spesialtilpassingar ved lesing per instans, men det er gjerne for strengt til dømes for Rapid Identity som vil kunne tilby ulike API per instans. I IntArk-samanheng trur eg vi ønsker å skille på når det er enkelt å ha felles integrasjonar og ikkje.

 |
| Autentiseringstjeneste | En tjeneste som kan autentisere sluttbrukeren og/eller systemet som ønsker å konsumere data.


I Oauth2 blir autentiseringstjenesten spesifisert i mer detalj.

 |
| Datakatalog | En oversikt over alle data, spesielt kildedata, som er tilgjengelig, og hvordan du kan få tilgang til dette.


TODO: Se DigDirs "Orden i eget hus" for mer krav.


En datakatalog kan være en API-katalog, men det kan også være to uavhengige tjenester som kan relatere til hverandre.


Se også: API-katalog.

 |
| Autorisasjonstjeneste | En tjeneste som tar seg av tilgangskontrollen ved uthenting av data fra API.


I Oauth2 er dette en rolle som er spesifisert i detalj, og der du som tjeneste eller sluttbruker får utsted en nøkkel (token) du kan bruke for å hente ut data.

 |
| Nøkkelutsteder | Se: Autorisasjonstjeneste |
| Event streaming | Se: Hendelsesstrømming |
| Hendelsesstrømming | Når du behandler mange meldinger under ett, kalles dette gjerne hendelsesstrømming.


Se også: Meldingskø, Notifikasjoner

 |
| Galvanisk skille | Opprinnelig et elektronikk-begrep, men som er tatt inn for å beskrive tjenester som har et strengt skille mellom innlogging i applikasjonen og ikke i operativsystemet. Det er da et "galvanisk skille", så innloggingshemmeligheter er isolert til applikasjonen. Et eksempel er webapplikasjoner som bruker Feide-pålogging.


Se mer informasjon under [forvaltningsveilederen](/docs/datadeling/veiledere/annet/anskaffelse/galvanisk-skille).

 |
| Retrofit | Retrofit handler om å forlenge levetiden til gammel teknologi ved å legge på ny teknologi utenpå. I UH:IntArk-sammenheng handler dette som oftest om å lage egne mikrotjenester som oversetter og forenkler integrasjon med et gammelt system, slik at den kan bli IntArk-kompatibelt.


Se mer informasjon under [forvaltning](/docs/datadeling/malgrupper/anskaffer/).

 |
| Masterdata | Se: Autoritativt kildesystem |
| Web Service | Web Service (WS) er en type API (integrasjonsgrensesnitt), som er den vanligste måten å dele data på internett i dag. WS er en sekkebetegnelse, som inneholder blant annet RESTfulle API.


[IntArk anbefaler bruk av webservice for API](/docs/datadeling/god-praksis/bruk-av-webservice).


Se også: API

 |
| RESTful | TODO skriv


TODO: Lenk til dokument under god-praksis..

 |
| Åpent grensesnitt | Et åpent grensesnitt er et grensesnitt som alle skal kunne utvikle integrasjoner mot, i motsetning til proprietære, lukkede grensesnitt.


Åpent grensesnitt er et krav i UH:IntArk, og følger integrasjonsprinsippet om [Tilgjengelighet: Autoritative data skal tilbys gjennom åpne grensesnitt](/docs/datadeling/prinsippene/tilgjengelig). Grensenitt som er bransjestandard foretrekkes ofte, siden det reduserer faren for lock in.

 |
| Orkestrering | Systemer og tjenester som samspiller ved hjelp av at en sentral tjeneste styrer dem. Dette skjer på samme måte som en dirigent leder et orkester.


Se også: Synkron-todo

 |
| Autorisasjon | Autorisasjon er prosessen med å bestemme om en autentisert entitet er berettiget å få en tilgang. Dette betyr at en tjeneste verifiserer, vha. regler som er satt for tjenesten, om entiteten skal gis en tilgang eller ikke. Tilgang kan for eksempel være om entiteten skal slippes inn i tjenesten, om de skal få ekstra funksjonalitet i tjenesten eller endret utseende på tjenesten. Tjenester som sjekker tilganger bedriver *tilgangskontroll.* |
| Autoritativ | Autoritativ refererer til hvem som bestemmer (autoritær). I IntArk-sammenheng er dette hvilket system eller tjeneste som er en autoritær kilde for data.


Se: Autoritativt kildesystem

 |
| Integrasjon | Det å integrere tjenester i konteksten IT og arkitektur er det å påse at tjenester kommuniserer. Dette kan foregå som en dialog mellom tjenestene eller som monolog fra en tjeneste til en annen. Hensikten er å sikre at data blir kjent i de tjenester som trenger dem.


Begrepet integrasjon brukes om selve den tekniske kommunikasjonen, mens begrepet *datadeling* er bredere og inkluderer også det utenfor det tekniske, for eksempel datakvalitet, ansvarsplassering og informasjonsforvaltning. TBD: Blir dette riktig?


Se også: Datadeling

 |
| Datadeling | Datadeling handler om alt som må til for at du skal kunne dele data mellom tjenester, prosesser og mennesker.


Vi følger [Digitaliseringsdirektoratets definisjon av datadeling](https://doc.difi.no/nasjonal-arkitektur/nab_arkitekturlandskap_segmentarkitektur_datadeling/#_hva_er_datadeling):


*Datadeling handler om å forsyne forretningsprosesser og dataanalyse med nødvendig datagrunnlag.*



*De fleste aktører sitter på begge sider i dette bildet, og må kunne både dele og innhente data og hendelser. I beskrivelsene skilles det likevel gjerne på rollene som* tilbyder *og* konsument*.*




*Begrepet datadeling er ut fra dette å oppfatte som kortform for **deling og innhenting av data og hendelser**.*



Se også: Integrasjon

 |
| Just In Time provisjonering | Just In Time (JIT) provisjonering er *provisjonering* som gjøres i øyeblikket de provisjonerte dataene trengs. Et eksempel kan være at man slår opp informasjon om en bruker når vedkommende logger inn.


Se også: Provisjonering

 |
| Masterdata Management | Masterdata Management (MDM) bestemmer hvilke system/tjeneste som er ansvarlig (*autoritativ*) for hvilke data. MDM omfatter også dataenes semantikk, som vil si hva dataene betyr ut fra gitt kontekst, og videre dataens kvalitet: Hvilken grad av feil og mangler er tolerert?


TODO: Lenke til meir info.


Se også: Autoritativt kildesystem

 |
| Mikrotjeneste | En liten webservice som er spesialisert til å gjøre én ting. [Mer om Micro Services](/docs/datadeling/begreper/mikrotjeneste). Mikrotjenester som brukes i IntArk-sammenheng kalles for en konnektor.


Se også: Konnektor

 |
| Micro Service | Se: Mikrotjeneste |
| Return On Investment | Return On Investment (ROI): Et begrep om hva man får for en investering. I IntArk-sammenheng er ROI ofte vesentlig for å vurdere om en tjeneste skal oppgraderes for å kunne integreres med, eller om det skal vere et unntak. Dette fra [prinsippet Fleksibel](/docs/datadeling/prinsippene/fleksibel).

 |
| Single Point of Contact | Single Point of Contact (SPoC): Ett felles kontaktpunkt. For UH:IntArk har vi et felles kontaktpunkt for å hjelpe deg på vei med din datadeling. SPoC er en organisatorisk tjeneste, eller funksjon, ikke f.eks. en e-postliste. Dette fra [prinsippet Veiledet](/docs/datadeling/prinsippene/veiledet).


TBD: skal vi ha det i UH:IntArk?

 |
| Spørring | Handlingen å ta kontakt med et API for å be om data. Fra engelsk "request".


Se også: Uttrekk

 |
| Teknisk gjeld | Teknisk gjeld er et abstrakt begrep som handler om endringer som må gjøres i en applikasjon for å få denne til å følge gjeldende regler, ønsket funksjonalitet og fleksibilitet, og etterkomme retningslinjer. Teknisk gjeld øker typisk gjennom en applikasjons levetid, med mindre teknisk gjeld adresseres. Økende teknisk gjeld medfører økt *time-to-market* og synkende return-on-investment. |
| Tjenestebuss | Tjenestebuss (ESB): Konseptuelt en motorvei for data i virksomheten. Rent praktisk er dette en samling tjenester som sentraliserer integrasjon.


ESB kan realiseres på ulike vis, og med ulik grad av sentralisering. I UH:IntArk er ESB et behovsprøvd støttesystem og **ikke** den sentrale aktøren i arkitekturen. Dette grunnet utfordringer med forvaltning, ansvar og omfang.


TODO: Lenk til bakgrunnsdokument om vurderingen av ESB. Styringsmodell.


Se også: Teknisk plattform

 |
| Enterprise Service Bus | Enterprise Service Bus (ESB) er engelsk begrep for tjenestebuss.


Se: Tjenestebuss

 |
| Teknisk plattform | TODO: IntArk sin tekniske plattform er verktøy for å hjelpe deg med å dele data enklere.


TBD: Samme som "Datadelingsplattformen"?


Se også: TODO

 |
| Time to Market | Time To Market (TTM): Et begrep om tiden det tar å lansere funksjonalitet. En mer fleksibel arkitektur, med for eksempel løsere koblinger, gir kortere TTM. |
| Uttrekk | Resultatet man får etter en *spørring* mot en *webservice.*


Se også: Spørring

 |
| Datakvalitet | Kvaliteten på data. God kvalitet er vesentlig for å kunne gjenbruke data, og med det ha en god og effektiv datadeling. Dataeier er ansvarlig for god datakvalitet for sine autoritative data. Noen kriterier til datakvalitet:

* At data er komplette
* At data er maskinlesbare
* At data er riktig formaterte
* At data er oppdaterte
 |
| Tilstandsløs | TODO: Jo legger til |
| Idempotent håndtering | TODO: Jo legger til


Hvis et kall mot et endepunkt i et API er garantert å gi samme resultat ved gjentagende kall, er det idempotent. Dette er sentralt i hendingsbasert provisjonering.

 |
| API-eier | TODO: Skal denne rolla brukast? Kven er API-eier? Tjenesteeier? |