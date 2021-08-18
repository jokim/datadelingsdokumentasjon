---
description: "Fors\xF8k p\xE5 \xE5 kategorisere all [oppramsinga av alle muligheter\
  \ for styringsreglar](/docs/datadeling/hva-er/styringsreglene-brainstorming)."
title: Styringsreglene i IntArk
---

# Styringsreglene i IntArk

Forsøk på å kategorisere all [oppramsinga av alle muligheter for styringsreglar](/docs/datadeling/hva-er/styringsreglene-brainstorming).

## Overordna plassering


Korleis heng det heile saman?


1. **Målbildet:**
	* [Referansearkitektur for deling av data i høyere utdanning og forsking](https://unit-norge.github.io/unit-ra/main/B%C3%B8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%C3%B8yere%20utdanning%20og%20forsking.html). (Ein referansearkitektur er "en veiledning til utforming av arkitekturer og løsninger, utfra erfaring eller som **målbilde**" - [ref DigDir](https://www.digdir.no/nasjonal-arkitektur/referansearkitekturer/2131)). Denne setter krav til kva IntArk må støtte.
2. Realiseringa, implementasjonen eller operasjonaliseringa:
	* "**Rammeverket**" (det vi ikkje skal starte med) (TODO: Er det dette som er IntArk?)
		+ Styringsregler - Overordna føringar du **må** følge for å følge IntArk. Desse er prøvd utbrodert lenger ned.
		+ Anbefalingar, gode praksiser og retningslinjer - Anbefalingar og anna du anbefalast å følge, for å få meir verdi ut av IntArk. Du **må** ikkje følge dette for å vere IntArk-kompatibel.
			- Retningslinjer gir uttrykk for hva vi anser som god praksis på nåværende tidspunkt. Faglige retningslinjer er i prinsippet anbefalinger og råd, og skal bygge på god, oppdatert faglig kunnskap. Retningslinjene er ment som et hjelpemiddel ved de avveininger tjenesteytere må gjøre for å oppnå forsvarlighet og god kvalitet i tjenesten.
			
			
			Retningslinjer er ikke bindende, men kan langt på vei være styrende for de valg som skal tas. Om du velger løsninger som i vesentlig grad avviker fra retningslinjene, bør du dokumentere dette og være forberedt på å begrunne ditt valg, og gi tilbakemelding til oss så vi får mulighet til å justere våre retningslinjer. (fritt omskreve etter [Helsebiblioteket si beskriving](https://www.helsebiblioteket.no/retningslinjer/lar/3-metode-i-retningslinjearbeidet/3.1-hva-er-faglige))
	* **Teknisk plattform** - verktøy som hjelper deg å følge IntArk.


![Bildet kan inneholde: rektangel, skråningen, font, materiell eiendom, elektrisk blå.](/datadeling/img/skjermbilde-2021-06-15-132909.png)


## Kategorisering


TODO: Jobb vidare med forsøk 4 og lag noko eg kan sende ut.


 


 


### Kategorisering, forsøk 1


Brainstorming til korleis kategorisere:


* Generelle styringsreglar?
* Om teknisk platform?
* Om forvaltinga?
* Om roller og ansvar?
* Om informasjonsforvalting, vs. integrasjon?
* Institusjonelt versus sektorielt?
* Per rolle?


### Kategorisering, forsøk 2


* Etter ansvar
	+ Datatilbyder, dvs. Tjenesteeier (TODO: eller tjenesteansvarlig eller dataforvalter?) er ansvarlig for å dele sine kildedata på en generell, funksjonell og gjenbrukbar måte - løse koblinger. Mer konkret betyr dette:
		- Tjenesteeier plikter å tilby sine kildedata i et API. API-et må følge åpne standarder der det finnest, eventuelt bransjestandarder, og ikke ha tilpasninger som begrenser bruken til bare noen datakonsumenter.
		- Tjenesteeier er den som "sitter nærmest" dataene TODO
		- Datatilbyder bør støte utsending av notifikasjoner for sine kildedata, når rask provisjonering gir økt verdi for institusjonen, og sektoren.
	+ Datakonsument kan kreve tilgang til kildedata, når dette har eg kildesystem. Tjenesteeier må betale for dette - TODO
		- Datakonsument er selv ansvarlig for evt. tilpasninger av dataene. Dette er ikke datatilbyders ansvar.
		- Datakonsument er pliktig til å hente data fra kildesystemet, og ikke via andre tjenester. Unntaket er proxy-tjenester, som katalog-tjenester.


TODO: fortsett utbroderinga!


### Kategorisering, forsøk 3


Basert på Einar si oppsummering. TODO: Kan vi sei at det 10-siders dokumentet er "alle styringsreglane"? Dvs. burde vi heller oppdatert det dokumentet med nye konklusjonar, og fjerna resten, og så har vi "IntArk sine styringsreglar" (eller eit betre namn)?


* Generelle føringar (TODO: alt som ikkje kan plasserast i dei andre?)
* Føringar for dei ulike rollene og deira ansvar - ei konkretisering av rollene frå ref.ark og deira ansvar, relatert til operasjonaliseringa i IntArk. Dvs. følger ref.ark, men meir i detalj, og med fleire roller som ikkje er del av ref.ark.
	+ Tjenesteeier sine styringsreglar:
	+ Dataeier (dataforvalter frå ref.ark, så bør truleg bruke den) sine styringsreglar:
		- Kartlegge eigne data som er kjelde for (orden i eget hus)
		- Semantisk betydning (orden i eget hus, del 2?)
		- Livsløpsforvaltninga
		- TODO: administrere tilgangar, og ha oversikt?
	+ Prosesseier (ta bort?)
	+ Anskaffer
	+ Innkjøper
	+ Styringsreglar for leverandørar (TODO: kalle det noko anna for eksterne?)
	+ Utviklarar i sektoren sine styringsreglar:
		- Følge IntArk sine prinsipper og praksiser
		- At avvik vert dokumenert og sporbart
		- Samarbeid med fagpersonar om korrekt semantikk og innhald
	+ Kontrollør
	+ Strategisk råd (TODO: same som koordinerende aktør i ref.ark?)
	+ Prioriteringsråd
* Føringar/krav til teknisk plattform
	+ Føringar for API manager
		- Td: når skal API manager brukast, og når skal Feide (OIDC) brukast?
* Føringar for integrasjonsarbeidet - td. utforming av API, notifikasjonar
* Føringar for prosessane, spesielt unntakshandtering.


### Kategorisering, forsøk 4


Angriper frå annan vinkel: Rydder opp i punkta, og slår dei som er like saman, så eg får redusert dei. Med håp om at dei vert få nok til å kunne ha dei samla, utan behov for så mykje meir kategorisering.


1. IntArk skal følge referansearkitekturen for datadeling i UHF. Generelt. TODO: ref.ark er eit målbilde, så klarer ikkje følge alt med ein gang.
	* IntArk teknisk plattform skal støtte referansearkitekturen, for å støtte samhandling i UHF.
2. Datatilbyder er ansvarleg for å tilby sine kildedata gjennom eit API.
	* API-et må vere generelt, og helst bruke standarder der det finnes, evt bransestandardar. Mest mulig løse koblinger!
	* I dag er Web Service eit krav, men dette inkluderer alt frå REST og GraphQL til XMLRPC og SOAP.
	* Datatilbyder er ikkje ansvarleg for hensyn til enkelt-konsumentar (skreddersøm). API skal kunne brukast av alle.
		+ TODO: Kva med brukernære API, som ref.ark. har inkludert?
	* Tenesta bør tilby notifikasjonar som seier frå om endringar, ved behov, td. dersom det bidreg til betre brukaroppleving.
		+ Datatilbyder må beskrive kva sin tjeneste sender av notifikasjoner. TODO: kan vi konkretisere kva vi vil ha her? For API kan vi lene oss på swagger (openAPI), men har vi noko for enotifikasjonar eller likande?
	* Eiers ansvar (TODO: dataeier og eier av konsumenten?) at integrasjonsgrensesnittet er laust kobla til bakanforliggande system.
	* Dataeier ansvarleg for god nok oppetid og responstid, etter behova.
	* API-eier har autonomi, så lenge IntArk overholdes
		+ Datatilbyder står fritt til å gjere arbeidet selv eller sette det bort til tredjepart (som kan vere intern eller kommersiell).
	* Dataeier er ansvarlig for å forklare hvordan dataene skal tolkes (semtantikk). (TODO: Kva betyr dette? *Det er foretrukket at dataens semantikk blir i størst mulig grad bevart, men om konsument benytter dataene i en kontekst som endrer dataens semantiske innhold, står konsument ansvarlig for dataens innhold i sin tjeneste.*)
	* Tjenesteeier har et ansvar for at egnetjenester og anskaffelser ikke går på bekostning avandre tjenesteeiere, slik at det totalt ikke blir høyere kostnader for virksomheten eller sektoren sett under ett.
	* Tjenesteeier må sørge for at data kan avprovisjoneres fra IT-tjenesten i tråd med lovverk og reguleringer. Dersom ikke annen lovgivning kommer inn, har brukeren rett til å bli glemt.
	* Hver IT-tjeneste og dennes integrasjoner skal ha publiserte kontaktpunkter.
3. Datatilbyder ansvarleg for å dokumentere/kategorisere kva data systemet er autoritativt for (unngå å kjøpe inn to system som genererer tilsvarande data).
4. Ansvaret for en integrasjon ligger hos den som ønsker å integrere; altså den tjeneste som vil bedre sin kvalitet og/eller tilby rikere funksjonalitet. TODO: Utbroder/diskuter?
5. Datatilbyder skal registrere sine data i felles tjenesteregister for data (TODO: datakatalog? tjenestekatalog? data.norge.no?). (TODO: Kva med dataporten?)
6. Dataeier er ansvarlig for tilgangsstyringen til sine data.
7. Alle tjenester skal registreres og dokumenteres
8. Dataeier ansvarleg for datakvaliteten - at delte data er komplette, riktig formatert, og maskinlesbart.
9. Konsumenter kan kreve tilgang til data, og kan melde behov
10. TODO: Flett inn frå "orden i eget hus"
11. TODO: Flett inn frå "verktøykasse for deling av data"
12. Data skal hentast frå kildesystemet, og ikke gjennom andre tenester. Unntaket er proxy-tenester, og katalog-tenester. Unntak også for fremmednøklar.
	* Datatilbyder og konsument snakker direkte med hverandre.
	* Som hovedregel skal en tjeneste bare tilby data den er autoritativ for
		+ Der en IT-tjeneste tilbyr informasjonsobjekter hvor attributter er hentet fra en annen autoritativ kilde, skal autoritativ kilde være en del av informasjonen.
		+ Data skal endres/vaskes i autoritativ kilde og ikke i konsumerende system eller underveis i mellomvare som f.eks. aggregerte datalager eller service busser.
13. Konsument er ansvarleg for evt. tilpassingar.
14. Kildeystem skal ha en API-eier
15. Vi deler opp tjenester etter **domener**. For grunnleggende domener (sentrale prosesser, td. admin og forvalting) har tjenester enkelte styringsgregler:
	* Løse koblinger - generelle API
	* Domeneansvarlig (? TODO) definerer sine begreper for sitt domene. (TODO: sjekk ut om det er riktig forstått, eller om det framleis er begrepseier)
	* TODO: Dette punktet kan føre til at vi må justere på mange andre reglar.
	* For brukernære domener har tjenester andre styringsregler:
		+ Skal støtte meir spesifikk brukernær kontekst, så datasett og API skal vere **spesifikke** og skreddersydd til brukskonteksten.
		+ TODO: treng vi skille på kildedata frå grunnleggande domener, versus dei brukarnære? Sekundær bruk, og td "relabeling".
	* TODO: Flett inn føringane frå Data mesh-konseptet?
		+ TODO: Er IntArk-plattformen eitt domene - så forsking og andre domener kan ha sin eigen plattform? Eller skal plattformen gjelde for alt?
			- Kva med Feide (Dataporten) si rolle?
			- TODO: Flette inn noko frå KUDAF, rundt korleis finne fram til data?
16. Tilganger skal registreres
	* Tilgangskontroll skal gjøres gjennom brukervenlig selvbetjeningsløsning. Dette så eier kan selv gi tilgang, uten tekniske IT-kunnskaper.
17. Datatilbydere og konsumenter skal/bør følge IntArk sine anbefalte notifikasjonsmønster.
18. **Unntak frå IntArk** er ok, så lenge det er tatt eit bevisst valg (kost-nytte-vurdering). Regelen om å tilby kjeldedata gjeld likevel uansett.
	* Kost-nytte-vurderinga må vere sporbar.
	* IntArk-forvaltinga treng tilbakemelding om unntak, så vi har mulighet for å revidere IntArk-rammeverket.
	* *Avvik er tillatt, så lenge det følger IntArks formål. Dette med tanke på sektoren eller institusjonen som helhet, og ikke det som er mest hensiktsmessig for den enkelte tjeneste.*
		+ *Unntaket er kravet om å tilgjengeliggjøre autoritative data, så lenge andre har behov for de.*
	* *Kost/nytte sees i livsløpet til en tjeneste, og ip ersptkiv av sektoren som helhet. TODO: Dataeier ansvarlig?*
	* *Avvik skal vurderes aktivt TODO: Dataeier ansvarlig?*
	* *TODO: Begrunnelse for avvik dokumenteres, hvor da? Sentralt? Hos institusjonen? Lokalt?*
	* For unntak skal det være et sporbart vedtak, og unntak skal livsløps håndteres.
	* *TODO: Avvik gir lærdom for videreutviklingen av arkitekturen. Noko reglar rundt dette?*
	* Der data underlagt lovgivning flyttes mellom IT-tjenester uten å benytte virksomhetsegen API Manager, skal integrasjonen underlegges unntakshåndtering.
19. Tilgang til data skal styrast gjennom API manager / API gateway. Så institusjonen får oversikt over sine data.
20. Bruk **løse koblinger**! Med det meinast at API skal settast opp mest mogeleg generelt, eller bruke bransjestandardar om finnast. Formålet er å gjere det enklare å endre i ulike endra, uavhengig av kvarandre. (Tjenesteorientert og endringsdyktighet) "API skal være generelle og uavhengig av konsumenter"
21. Tenester som ikkje støtter IntArk fullt ut kan få seg ein mikroteneste foran for å ta seg av dette. Så konsumentane berre treng å forholde seg til IntArk.
	* Forretningslogikk skal då ligge i mikroteneste.
	* Behovet styrer eierskap av mikrotjenesta.
22. Arkitekturen skal endrast i takt med brukarbehova i sektoren.
23. Erfaringer fra integrasjonsarbeid skal deles med IntArk, så vi får revidert og oppdatert IntArk. Dette gjeld spesielt unntakshandtering. (Brukerorientert)
24. TODO (sentral aktør) er ansvarlig for brukergrensesnitt som er brukervenlige og kan brukes av dataeiere uten IT-kunnskaper.
25. Gjenbruk tjenester, og innfør fellestjenester. Når det unngå dobbeltarbeid.
26. Konsumenten er i utgangspunktet ansvarlig for å selv flette sammen data fra flere tilbydere, men hvis flere konsumenter har samme behov bør det vurderes som en fellestjeneste.
	* Er frivillig for konsumenter å ta i bruk slike fellestjenester. Konsumenten skal kunne snakke direkte med produsenten i stedet.
	* Sei noko om Unit (SIKT?) eller Uninett vert ansvarlig for å skaffe/utvikle slike tenester der det er behov for det? Dvs dersom ingen andre tek eit slikt eigarskap.
	* TODO: Kven eig slike fellestenester? Kan vi sei noko om det? Skille på sektorielt og institusjonelt?
	* TODO: Kallast tjenestebuss i prinsippa, men er kanskje eit uheldig namneval?
	* Fellestenester skal behovsprøves.
	* Eigen DBA mellom "tjenestebuss" mot produsent og konsument. TODO: Høyr med IT-jurist om dette. Har vi dokumentert noko rundt dette?
27. Du skal få hjelp og veiledning i ditt integrasjonsarbeide.
	* TODO: Uninett er ansvarlig for ett felles kontaktpunkt for alt relatert til integrasjoner, og skal kunne hjelpe deg på riktig vei. (Primært organisatorisk hjelp, ikkje nødvendigvis teknisk)
	* TODO: Sei noko om kontaktpunkt hos institusjonane? At nokon er ansvarlege, og skal kunne hjelpe andre, og eksterne, hos seg?
	* TODO: Uninett er ansvarlig for å tilgjengeliggjøre veiledninger og annen dokumentasjon om IntArk og holde den oppdatert.
28. TODO: Sei noko om når API manager skal brukast, versus Dataporten. Einar sitt forslag seier: "API Managers er for IT-tjenester som skal hente data fra andre IT-tjenester. [...] Der en bruker gjennom brukerhandlinger samtykker til atIT-tjenester henter brukers egne data på sine vegne,skal Feide/ID-porten benyttes."
	* Der en bruker i en gitt IT-tjeneste kan hente eller levere virksomhetens data til en annen IT-tjeneste, skal Feide benyttesog trafikkenbør rutes gjennom virksomhetsegen API Manager til sluttjeneste.
29. Standardisering


	* Administrasjons- og støtteprosessar skal standardiserast mest mogeleg i sektoren - like arbeisprosesser og felles begrep.
	
	
		+ Desse informasjonsdomene skal gjelde for heile sektoren - altså definisjonen av prosessar og begreper. (Data er likevel lokalt og institusjonelt, naturlegvis)
	* Lærings- og forskningsprosesser har sterk grad av institusjonelt selvstyre (skal fremme innovasjon, gjennom ulike arbeidsprosesser).
	
	
		+ Desse knyttast til "en brukskontekst med et tilhørende informasjonsdomene".
		
		
		+ TODO: Er likevel ønskeleg å kunne dele dette på tvers, sjølv om det er institusjonell sjølvråderett. Seier ref.ark noko meir om dette vidare?
30. TODO: Skulle gjerne sagt noko om ytre API, men stod ikkje så mykje om det i ref.ark endå..


	* Her  bør vi nok ha ein del reglar, for å unngå misforståingar. Burde diskutert i prosjektet...
31. TODO: Flett inn frå FAIR-prinsippene - ["FAIR Guiding Principles for scientific data management and stewardship"](https://www.go-fair.org/fair-principles/)


32. Konsumenter skal ikke vaske data, men si fra til kilden om datkvalitet


33. IT-tjenester som anskaffes må også følge IntArk, også eksterne




#### Anna eg ikkje fekk plassert


1. Eskalering og prioriteringsråd. TODO: Truleg UiO-spesifikt, og ikkje relevant for andre institusjonar. Formålet er at institusjonen må kunne prioritere kva tenester som skal forbetrast. Eskaleringsnivå kan vere noko slikt, men det er opp til institusjonen.
	* TODO: Eskalering på sektorielt nivå? HAr vi noko felles styring/prioritering av alle tenester?
	* Tre typar eskalering:
		1. Fleretjenesteeierehar behov for de samme integrasjonsressursene
		2. Tjenesteeier ønsker å integrere, men har ikke mulighet til å finansiere (hele) integrasjonen over egne budsjetter
		3. En systemeier tilbyr ikke sine data i tråd med integrasjonsarkitekturen, og uenighet med andre systemeiere medfører en eskalering.
2. Anskaffelser av IT-tjenester må også følge IntArk, og blant annet ivareta brukernes behov (Brukerorientert) og bruke løse koblinger (Tjenesteorientert og endringsdyktighet)
3. Ved innføringar og endringar av integrasjonar skal det gjerast fagleg vurdering om løysinga følger prinsippet om lause koblingar.
	* Ved innkjøp må det takast med i vurderinga. Om tenesta ikkje støtter IntArk må det påreknast kostnadar for å utvikle det.
4. Tjenesteporteføljen (TODO: Service portfolio? Skal vi endre til API manager, eller kva gjer vi med denne i prosjektet?) skal ha oppdaterte opplysnigner om sektorens tjenester. TODO: Dataeier ansvarlig for å registrere sin tjeneste i tjenesteporteføljen? Konsument-eier ansvarlig for å registrere sin konsumerende tjenestet i SP?
	* Eier skal dokumentere/registrere/lenke opp følgende i tjenesteporteføljen:
	
	
		+ Hvem er ansvarlig, og hvem forvalter tjenesten
		
		
		+ Hvilke kontaktpunkter skal benyttes
		+ Kontrakter, som SLA og databehandleravtale
		+ Integrasjonsgrensesnitt, autoritative data og deres kategorier og betydning
		+ Eier har ansvar for at grensesnitt er registrert i institusjonens API-katalog
5. Datatilbyder og konsument trenger en databehandleravtale når du skille de institusjonelle grensene. TODO: I utgangspunktet treng ein mellom partane, men Uninett kan kanskje ha noko mellom der for å forenkle? Høyr med IT-jurist?