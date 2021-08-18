---
title: Styringsreglene i IntArk
---

# Styringsreglene i IntArk

## Brainstorming


Prøver ramse opp alle styringsreglar før eg prøver å kategorisere dei:


* Dataeier er ansvarleg for å tilby API
* Dataeier er ikkje ansvarleg for skreddersøm
* Konsument er ansvarleg for evt. tilpassingar
* Data skal hentast frå kildesystemet, og ikke gjennom andre tenester. Unntaket er proxy-tenester, og katalog-tenester.
	+ TODO: Gjeld framleis reglane om eksterne nøklar?
* Alle tenester skal tilby sine data gjennom eit API.
	+ API-et skal vere generelt, og helst bruke standarder der det finnes. Mest mulig løse koblinger!
* Alle tenester bør tilby notifikasjonar som seier frå om endringar. Dette bidreg til betre brukaroppleving.
* Alle tenester skal/bør følge IntArk sine notifikasjonsmønster
* Unntak frå IntArk er lov, så lenge det er tatt eit bevisst valg (kost-nytte-vurdering)
* Eskalering og prioriteringsråd. TODO: Truleg UiO-spesifikt, og ikkje relevant for andre institusjonar. Formålet er at institusjonen må kunne prioritere kva tenester som skal forbetrast. Eskaleringsnivå kan vere noko slikt, men det er opp til institusjonen.
	+ TODO: Eskalering på sektorielt nivå? HAr vi noko felles styring/prioritering av alle tenester?
* Tenester som ikkje støtter IntArk fullt ut kan få seg ein mikroteneste foran for å ta seg av dette. Så konsumentane berre treng å forholde seg til IntArk.
* Alt gjennom API manager / API gateway.
* Forretningslogikk ligg hos konsumenten, eller mikrotenesta.
	+ TODO: Kva med forretningslogikken hos dataeier? Td. i FS? Korleis nyansere?
	+ Spesialtilpasninger samlet i mikrotjenesten. TODO: i motsetnad til i produserande tjeneste, eller også i motsetnad til konsumerande teneste?
* Behov styrer eierskap av mikrotjeneste (frå HKF sin presentasjon). TODO: Utdjupe denne. Er det ein styringsregel? Dekker den også den konsumerande tenesta, eller gjeld den berre dei gangane vi treng ei mikroteneste?


Ved gjennomgang av prinsippa:


* Arkitekturen skal endrast i takt med brukarbehova i sektoren (TODO: Er dette del av prinsippet Brukerorientert, eller er det ein styringsregel?)
* Anskaffelser av IT-tjenester må også følge IntArk, og blant annet ivareta brukernes behov (Brukerorientert) og bruke løse koblinger (Tjenesteorientert og endringsdyktighet)
* TODO: Prioriteringsråd? Kan vi sei noko om det? Og ligg det noko over det igjen? (Brukerorientert)
* TODO: Erfaringer skal deles. Kan vi sei noko om det? (Brukerorientert)
* Bruk løse koblinger! Med det meinast at API skal settast opp mest mogeleg generelt, eller bruke bransjestandardar om finnast. Formålet er å gjere det enklare å endre i ulike endra, uavhengig av kvarandre. (Tjenesteorientert og endringsdyktighet)
* Ved innføringar og endringar av integrasjonar skal det gjerast fagleg vurdering om løysinga følger prinsippet om lause koblingar.
* Eiers ansvar (TODO: dataeier og eier av konsumenten?) at integrasjonsgrensesnittet er laust kobla til bakanforliggande system.
* Autoritative data skal tilbys gjennom åpne grensesnitt (dvs. bransjestandard, leverandøruavhengig - lause koblingar? - dagens *anbefaling* er Web Service) (TODO: Er dette del av prinsippet Tilgjengelig, eller er det ein styringsregel?)
* Dataeier (?) ansvarleg/pliktig for å tilgjengeleggjere data andre i verksemda har behov for.
	+ Ved innkjøp må det takast med i vurderinga. Om tenesta ikkje støtter IntArk må det påreknast kostnadar for å utvikle det.
* Dataeier ansvarleg for datakvaliteten - at delte data er komplette, riktig formatert, og maskinlesbart.
* Dataeier ansvarleg for god nok oppetid og responstid, etter behova.
* Dataeier ansvarleg for å dokumentere/kategorisere kva data systemet er autoritativt for (unngå å kjøpe inn to system som genererer tilsvarande data).
* Dataeier er berre ansvarleg for generelt API med funksjonelle uttrekk, men er ikkje ansvarleg for spesialtilpassa uttrekk for enkelt-konsumentar. Dette er konsumentane sitt ansvar. (TODO: Kva med brukernære API, som ref.ark. har inkludert?) (TODO: Har vi noko rundt kva vi gjer om mange konsumentar har samme behovet - har vi styringsregel rundt "tjenester for sammenstilte data"?)
* Eier (?) står fritt til å gjere arbeidet selv eller sette det bort til tredjepart (som kan vere intern eller kommersiell).
* En tjeneste skal kun tilbyd data de er autoritative for. (Unntak er nøkler/id-er for å lenke til entiteter i andre tjenester, som fnr, brukernavn, gruppe-id etc).
* Dataeier er ansvarlig for å forklare hvordan dataene skal tolkes (semtantikk). (TODO: Kva betyr dette? *Det er foretrukket at dataens semantikk blir i størst mulig grad bevart, men om konsument benytter dataene i en kontekst som endrer dataens semantiske innhold, står konsument ansvarlig for dataens innhold i sin tjeneste.*)
* Alle tjenester skal registreres og dokumenteres (TODO: Er dette del av prinsippet Oversiktlig, eller er det ein styringsregel?)
* Tjenesteporteføljen (TODO: Service portfolio? Skal vi endre til API manager, eller kva gjer vi med denne i prosjektet?) skal ha oppdaterte opplysnigner om sektorens tjenester. TODO: Dataeier ansvarlig for å registrere sin tjeneste i tjenesteporteføljen? Konsument-eier ansvarlig for å registrere sin konsumerende tjenestet i SP?
* Dataeier skal registrere sine data i felles tjenesteregister for data (TODO: datakatalog? tjenestekatalog? data.norge.no?). (TODO: Kva med dataporten?)
* Eier skal dokumentere/registrere/lenke opp følgende i tjenesteporteføljen:


	+ Hvem er ansvarlig, og hvem forvalter tjenesten
	
	
	+ Hvilke kontaktpunkter skal benyttes
	+ Kontrakter, som SLA og databehandleravtale
	+ Integrasjonsgrensesnitt, autoritative data og deres kategorier og betydning
	+ Eier har ansvar for at grensesnitt er registrert i institusjonens API-katalog
* Tilganger skal registreres (TODO: Er dette del av prinsippet Etterrettelig, eller er det ein styringsregel?)
* Dataeier er ansvarlig for tilgangsstyringen til sine data.
* Tilgangskontroll skal gjøres gjennom brukervenlig selvbetjeningsløsning. Dette så eier kan selv gi tilgang, uten tekniske IT-kunnskaper.
* TODO er ansvarlig for brukergrensesnitt som er brukervenlige og kan brukes av dataeiere uten IT-kunnskaper.
* TODO: Sammenstilte data? Er Unit (SIKT?) eller Uninett ansvarlig for å skaffe/utvikle slike tenester der det er behov for det?
* Avvik er tillatt, så lenge det følger IntArks formål (TODO: Er dette del av prinsippet Fleksibel, eller er det ein styringsregel?). Dette med tanke på sektoren eller institusjonen som helhet, og ikke det som er mest hensiktsmessig for den enkelte tjeneste.
	+ Unntaket er kravet om å tilgjengeliggjøre autoritative data, så lenge andre har behov for de.
* Kost/nytte sees i livsløpet til en tjeneste, og ip ersptkiv av sektoren som helhet. TODO: Dataeier ansvarlig?
* Avvik skal vurderes aktivt TODO: Dataeier ansvarlig?
* TODO: Begrunnelse for avvik dokumenteres, hvor da? Sentralt? Hos institusjonen? Lokalt?
* TODO: Avvik gir lærdom for videreutviklingen av arkitekturen. Noko reglar rundt dette?
* Gjenbruk tjenester, og innfør fellestjenester. Unngår dobbeltarbeid. (TODO: Er dette del av prinsippet Effektiv, eller er det ein styringsregel?)
* TODO: Dataeier og konsument snakker direkte med hverandre (Er dette kanskje ikkje ein styringsregel, men meir ein del av styringsmodellen?)
* Konsumenten er i utgangspunktet ansvarlig for å selv flette sammen data fra flere tilbydere, men hvis flere konsumenter har samme behov bør det vurderes som en fellestjeneste.
	+ Er frivillig for konsumenter å ta i bruk slike fellestjenester. Konsumenten skal kunne snakke direkte med produsenten i stedet.
	+ TODO: Kven eig slike fellestenester? Kan vi sei noko om det? Skille på sektorielt og institusjonelt?
	+ TODO: Kallast tjenestebuss i prinsippa, men er kanskje eit uheldig namneval?
	+ Fellestenester skal behovsprøves.
	+ Eigen DBA mellom "tjenestebuss" mot produsent og konsument. TODO: Høyr med IT-jurist om dette. Har vi dokumentert noko rundt dette?
* TODO: Dataeier og konsument trenger en databehandleravtale - når? Når du skiller de institusjonelle grensene? Kan vi hjelpe/forenkle noko rundt dette?
* Du skal få hjelp og veiledning i ditt integrasjonsarbeide. (TODO: Gjere om dette til ein styringsregel - kjem frå prinisippet Veiledet).
	+ TODO: Uninett er ansvarlig for ett felles kontaktpunkt for alt relatert til integrasjoner, og skal kunne hjelpe deg på riktig vei. (Primært organisatorisk
	+ hjelp, ikkje nødvendigvis teknisk)
	+ TODO: Sei noko om kontaktpunkt hos institusjonane? At nokon er ansvarlege, og skal kunne hjelpe andre, og eksterne, hos seg?
	+ TODO: Uninett er ansvarlig for å tilgjengeliggjøre veiledninger og annen dokumentasjon om IntArk og holde den oppdatert.


Frå HKF sin presentasjon:


* Regler:
	+ Hvordan
	+ Hvem er ansvarlig


Frå Einar sin foreslåtte arkitektur:


* Tjenesteeier har et ansvar for at egnetjenester og anskaffelser ikke går på bekostning avandre tjenesteeiere, slik at det totalt ikke blir høyere kostnader for virksomheten eller sektoren sett under ett.
* TODO: Sei noko om når API manager skal brukast, versus Dataporten. Einar sitt forslag seier: "API Managers er for IT-tjenester som skal hente data fra andre IT-tjenester. [...] Der en bruker gjennom brukerhandlinger samtykker til atIT-tjenester henter brukers egne data på sine vegne,skal Feide/ID-porten benyttes."
	+ Der en bruker i en gitt IT-tjeneste kan hente eller levere virksomhetens data til en annen IT-tjeneste, skal Feide benyttesog trafikkenbør rutes gjennom virksomhetsegenAPI Manager til sluttjeneste.
* Der data underlagt lovgivning flyttes mellom IT-tjenester uten å benytte virksomhetsegen API Manager, skal integrasjonen underlegges unntakshåndtering.
* For unntak skal det være et sporbart vedtak, og unntak skal livsløps håndteres.
* Tjenesteeier må sørge for at data kan avprovisjoneres fra IT-tjenesten i tråd med lovverk og reguleringer. Dersom ikke annen lovgivning kommer inn, har brukeren rett til å bli glemt.
* Eskalering: TODO er det noko vi bør ha med? Tre typar:
	1. Fleretjenesteeierehar behov for de samme integrasjonsressursene
	2. Tjenesteeier ønsker å integrere, men har ikke mulighet til å finansiere (hele) integrasjonen over egne budsjetter
	3. En systemeier tilbyr ikke sine data i tråd med integrasjonsarkitekturen, og uenighet med andre systemeiere medfører en eskalering.
* Unntakshåndteringa (TODO: er ein prosess, så er kanskje unødvendig å ha i styringreglane?)
* Det skal alltid foreligge en databehandleravtale når data underlagt lovgivning krysser en organisasjonsgrense (org.nr).
* Ansvaret for en integrasjonligger hos den som ønsker å integrere; altså den tjeneste som vil bedre sin kvalitet og/eller tilby rikere funksjonalitet.
* Som hovedregel skal en tjeneste bare tilby data den er autoritativ for
	+ Der en IT-tjeneste tilbyr informasjonsobjekter hvor attributter er hentet fra en annen autoritativ kilde, skal autoritativ kilde være en del av informasjonen.
	+ Data skal endres/vaskes i autoritativ kilde og ikke i konsumerende system eller underveis i mellomvare som f.eks. aggregerte datalager eller service busser.
* Hver IT-tjeneste og dennes integrasjoner skal ha publiserte kontaktpunkter.


### Frå Unit Referansearkitektur (utleda av)


* IntArk skal følge referansearkitekturen for datadeling i UHF. Generelt. TODO: ref.ark er eit målbilde, så klarer ikkje følge alt med ein gang.
	+ IntArk teknisk plattform skal støtte referansearkitekturen, for å støtte samhandling i UHF.
* TODO: I "Tekniske behov som ønskes løst gjennom bruk av en referansearkitektur" står det mykje som bør adresserast vidare. Ikkje nødvendigvis i styringsreglane, men i alle fall i "dokumentasjonen".
* Domeneansvarlig (? TODO) definerer sine begreper for sitt domene. (TODO: sjekk ut om det er riktig forstått, eller om det framleis er begrepseier)
* For grunnleggende domener (sentrale prosesser, td. admin og forvalting) har tjenester enkelte styringsgregler:
	+ Løse koblinger - generelle API
	+
* For brukernære domener har tjenester andre styringsregler:
	+ Skal støtte meir spesifikk brukernær kontekst, så datasett og API skal vere **spesifikke** og skreddersydd til brukskonteksten (TODO: riktig forstått? Kva kan vi då sei om kildesystem td - vert det ny kilde om det hentast frå grunnleggande domener?)
	+ TODO: treng vi skille på kildedata frå grunnleggande domener, versus dei brukarnære? Sekundær bruk, og td "relabeling".
* TODO: Frå Data mesh-konseptet:
	+ Plattform ikkje viktig, men standardiseringa
	+ TODO: Er IntArk-plattformen eitt domene - så forsking og andre domener kan ha sin eigen plattform?
		- Passer inn med Dataporten - kan brukast for bruksnære domener, mens intark-plattformen brukast for "grunnleggande" domene(r).
		- TODO: Korleis løyser vi då å finne fram til data? KUDAF kanskje?
	+ "serving over ingesting" - deling over innhenting
	
	
	+ "discovering and using over extracting and loading" - finne og bruke over uthenting og utlasting (?)
	
	
	+ "Publishing events as streams over flowing data around via centralized pipelines" - distribuert publisering over sentralisert styring (?)
	
	
	+ "Ecosystem of data products over centralized data platform" - dvs slutt med ESB
*  


Standardisering


	+ Administrasjons- og støtteprosessar skal standardiserast mest mogeleg i sektoren - like arbeisprosesser og felles begrep.
	
	
		- Desse informasjonsdomene skal gjelde for heile sektoren - altså definisjonen av prosessar og begreper. (Data er likevel lokalt og institusjonelt, naturlegvis)
	+ Lærings- og forskningsprosesser har sterk grad av institusjonelt selvstyre (skal fremme innovasjon, gjennom ulike arbeidsprosesser).
	
	
		- Desse knyttast til "en brukskontekst med et tilhørende informasjonsdomene".
		
		
		- TODO: Er likevel ønskeleg å kunne dele dette på tvers, sjølv om det er institusjonell sjølvråderett. Seier ref.ark noko meir om dette vidare?
* Sei noko om "orden i eget hus"? Og kanskje noko i tråd med "verktøykasse for deling av data"?


* TODO: Sei noko om punkt 2.8 si oppdeling av domena? Kan kanskje konkretisere litt her?


* Datatilbyder må beskrive kva sin tjeneste sender av notifikasjoner (" Notifikasjonskatalog som gir et overblikk over hvilke datatilbydere som publiserer notifikasjoner om endring i datagrunnlag. "). TODO: kan vi konkretisere kva vi vil ha her? For API kan vi lene oss på swagger (openAPI), men har vi noko for enotifikasjonar eller likande?


* Prosessflyten frå ref.ark... TODO: må følgast? Kan vi konkretisere noko her, eller dekker intark-prosessane dette?


* Noko om å bruke felles datakatalog. Kan vi kreve at den brukast?


* TODO: Skulle gjerne sagt noko om ytre API, men stod ikkje så mykje endå..


	+ Her  bør vi nok ha ein del reglar, for å unngå misforståingar. Burde diskutert i prosjektet...
* TODO: Eskalering til "koordinerende aktør"?


* TODO: FAIR-prinsippene - dekkast dei i IntArk? ["FAIR Guiding Principles for scientific data management and stewardship"](https://www.go-fair.org/fair-principles/) for deling av data.




## Tidlegare arbeid


Frå Datadelingsprosjektet i 2020:


 


| "Styringsregel" (eller kva det no er) | Plassering I referansearkitekturen | Plassering I konkretiseringen | Heidis kommentar |
| --- | --- | --- | --- |
| Kildeystem skal ha en API-eier | Vi legger dette I rollen Tjeneste-eier |  |  |
| API-eier skal tilgjengeliggjøre sine data |  |  | Jeg tenker at dette hører mest innunder "orden I eget hus" som er over referansearkitekturen |
| API-eier er ansvarlig for datakvaliteten | Vi legger dette I rollen Dataforvalter |  |  |
| API skal være generelle og uavhengig av konsumenter | For API I virksomhetssentriske domener, ligger dette I "retningslinjer" |  | Dette er noe vi går vekk fra I alle fall I brukernære API |
| Integrasjoner skal bruke så løse koblinger som mulig | Prinsipper |  |  |
| Evt forretningslogikk i konnektor, ikke kilden | Prinsippet om løse koblinger |  | I arbeidsgruppen med notifikasjoner har vi endret dette til å si at forretningslogikk skal isoleres til den domenen der det hører hjemme. Dette kan være I avsender/kilden (ref. use case med "aktiv student") og det kan være hos mottaker/konnektor (ref. det å vite at navneendring fører til ny epost) |
| Gjenbruk tjenester, og innfør nye fellestjenester (sammenslåtte data) | Prinsipper   |  |  |
| API-eier har autonomi, så lenge IntArk overholdes | Roller (tjenesteeier) |  |  |
| Konsumenter kan kreve tilgang til data, og kan melde behov | Roller (konsument defineret av Digdir) |  |  |
| Behov og prioriteringer kan eskaleres til Prioriteringrådet | Styringsmodellen |  |  |
| API-eier er ansvarlig for datakvaliteten | Roller (Dataforvalter) |  |  |
| Data skal hentes fra kildesystemet og ikke andre tjeneter | Prinsipper |  | forvaltningsregel for plattformen |
| Eierskap av konnektorer styres etter den som har mest behov | Roller (tjenesteeier) |  | Jeg har tolket dette til å bety at man utnevner tjenesteeier ut fra hvem som har størst behov |
| IntArks integrasjonsmønster skal i utgangspunktet følges | NA |  | Usikker på hva dette betyr I praksis |
| IT-ttjester som anskaffes må også følge IntArk, også eksterne | NA |  | Referansearkitektur er kilde til anskaffelseskrav |
| Bruk Webservice, helst «restfullt» prinsipper | Prinsipper |  |  |
| Bruk standarder, evt bransjestandarder, evt lag åpent grensesnitt | Prinsipper |  |  |
| Konsumenter skal ikke vaske data, men si fra til kilden om datkvalitet |  |  |  |
| Kost/nytte-vurderinger kan legitimere avvik |  |  |  |