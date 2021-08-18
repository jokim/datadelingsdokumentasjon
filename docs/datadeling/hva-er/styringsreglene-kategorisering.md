---
description: "Oversikt over alle styringsreglene i UH:IntArk.\n\n\n*TODO: Dette er\
  \ per n\xE5 et arbeidsdokument, under diskusjon. Tidlegare arbeid: [oppramsinga\
  \ av alle muligheter for styringsreglar](/docs/datadeling/hva-er/styringsreglene-brainstorming),\
  \ og [gamalt fors\xF8k p\xE5 kategorisering](/docs/datadeling/hva-er/styringsreglene-kategorisering-gammel).*"
title: Styringsreglene i UH:IntArk
---

# Styringsreglene i UH:IntArk

Oversikt over alle styringsreglene i UH:IntArk.


*TODO: Dette er per nå et arbeidsdokument, under diskusjon. Tidlegare arbeid: [oppramsinga av alle muligheter for styringsreglar](/docs/datadeling/hva-er/styringsreglene-brainstorming), og [gamalt forsøk på kategorisering](/docs/datadeling/hva-er/styringsreglene-kategorisering-gammel).*


## Hva er styringsregler i UH:IntArk?


*Styringsreglene er* **kravene du må oppfylle for å følge UH:IntArk**. De holdes overordnet nok for å gi lokal fleksibilitet, samtidig som de er mer konkrete og derfor enklere å forholde seg til enn [integrasjonsprinsippene](/docs/datadeling/prinsippene) og [referansearkitektur for datadeling](/docs/datadeling/om/referansearkitektur). Følger du disse styringsreglene følger du UH:IntArk.


## Kategorisering


Styringsreglene er delt opp i kategoriene:


1. **Arkitekturen:** Føringer for hvordan UH:IntArk skal fungere.
2. **Ansvarsplassering**: Føringer rundt hvem som har ansvar for hva, både integrasjons- og informasjonsforvaltningsmessig.
3. **Hvordan integrere:** Føringer for hvordan integrasjoner skal fungere.
4. **Teknisk plattform**: Føringer for den [tekniske plattformen](/docs/datadeling/teknisk-plattform).
5. TODO: **Prosesser**?


## Styringsreglene


### 1. Arkitekturen


1. UH:IntArks formål er å gjøre datadeling enklere, mer kostnadseffektivt og endringsdyktig for sektoren. UH:IntArk fokuserer på hva som er best for UH-sektoren og institusjonene som helhet, selv om dette vil kunne være til ulempe for enkelte tjenester.
2. UH:IntArk skal følge [integrasjonsprinsippene](/docs/datadeling/prinsippene).
3. UH:IntArk skal være i tråd med målbildet i [referansearkitekturen for datadeling for høyere utdanning og forskning](/docs/datadeling/om/referansearkitektur).
4. UH:IntArk skal videreutvikles av TBD. Arkitekturen skal endres i takt med brukerbehovene i sektoren.
5. Unntak fra arkitekturen er tillatt, på alle nivå, så lenge det følger IntArks formål. Det er likevel et ufravikelig krav at kildedata må kunne tilbys konsumenter med hjemmel (TODO: i alle fall jobbe for det? ha ein plan for det?). Unntak må besluttes, og beslutningen må være sporbar. Unntak bør meldes tilbake til TBD, for å gi lærdom for videreutvikling av arkitekturen.
6. Alle som følger UH:IntArk må følge disse styringsreglene. TODO: Eller kan vi påstå at alle UH-institusjonar (og evt forsking) må følge (noko av) dette?


### 2. Ansvarsplassering


1. Tjenesteeier(TODO: sjekk med ref.ark) er ansvarlig for å tilby sin tjenestes kildedata for alle konsumenter hos institusjonen, i sektoren og utenfor, som har behov og hjemmel til de.
2. Tjenesteeier er ansvarlig for at tjenestens kildedata har god nok datakvalitet - komplette, riktig formaterte, og maskinlesbare - og at de er semantisk beskrevet, kategorisert og registert i felles tjenesteregister for data (TODO: vår eigen, eller data.norge.no?)
3. Tjenesteeier er ansvarlig for at tjenestens API er dokumentert og har god nok oppetid og responstid.
4. Tjenesteeier har autonomi, så lenge UH:IntArk overholdes, og står blant annet fritt til å sette bort integrasjonsarbeid til tredjepart (både internt og til kommersiell aktør).
5. Tjenesteeier er i utgangspunktet ansvarlig for unntak for sin tjeneste, men beslutningen kan eskaleres. Unntak skal med i tjenestens livsløpshåndtering. Kost-nytte sees i perspektivet av livsløpet til tjenesten, og fokuserer på sektoren eller institusjonen som helhet og ikke det som er mest hensiktsmessig for den enkelte tjeneste. Selv om det kan være billigere for tjenesten å ikke tilby sine kildedata, kan det likevel gi mer gevinst for institusjonen/sektoren.
6. Tjenesteeier er ansvarlig for at egne tjenester og anskaffelser ikke går på bekostning av andre tjenesteeiere, slik at det totalt ikke blir høyere kostnader for virksomheten eller sektoren sett under ett.
7. Ansvaret for en integrasjon ligger hos den som ønsker å integrere; altså den tjeneste som vil bedre sin kvalitet og/eller tilby rikere funksjonalitet. TODO: Utbroder/diskuter - og er denne unødvendig?
8. Tjenesteeier er ansvarlig for at data kan slettes, i tråd med lovverk og reguleringer. Dersom ikke annen lovgivning kommer inn, har brukeren rett til å bli glemt.
9. Datatilbyder (TODO: sjekk ref.ark-rolla) er ansvarlig for tilgangsstyringen til sine data.
10. Konsument kan kreve tilgang til kildedata, og kan melde behov til TBD.
11. TODO: Sei noko om sentral aktør/koordinerende aktør sitt ansvar?
	* Vert TBD ansvarlig for å skaffe/utvikle tenester for samanstilde data, ved behov og ingen tek eit slikt eigarskap?
12. TODO: Sentral/koordinerende aktør er ansvarlig for at institusjoene får hjelp og veiledning i sitt integrasjonsarbeide. Institusjonene skal ha et felles kontaktpunkt for alt relatert til integrasjoner, som minimum skal kunne henvise til riktig sted for å få svar.
	* TODO: Sei noko om kontaktpunkt hos institusjonane? At nokon er ansvarlege, og skal kunne hjelpe andre, og eksterne, hos seg?
13. Anskaffere og innkjøper er ansvarlige for at også IT-tjenester som anskaffes følger UH:IntArk. Dette inkluderer tjenester levert av eksterne leverandører. Hvis en tjeneste ikke følger UH:IntArk må kostnadene for å gjøre den IntArk-kompatibel tas med i evalueringen.


### 3. Hvordan integrere


1. API skal bruke mest mulig løse koblinger. Bruk åpne standarder der det finnes, eventuelt bransjestandarder, eventuelt Web Service (TODO: Lag lenke til side som beskriver dagens anbefalte standarder). API skal være uavhengig av spesifikke konsumenter. Datatilbyder er ikke ansvarlig for å tilby data som er spesifikke for enkelte konsumenter (skreddersøm). (TODO: Kva seier vi om ytre API og bruksnære domener?)
2. API skal være dokumentert, der OpenAPI (swagger) er minimumskravet, og ha publiserte kontaktpunkter.
3. Kildedata skal være semantisk beskrevet. (TODO: kan vi konkretisere, td lenke til standard?)
4. Hvis kildedata brukes i tjenester der rask provisjonering bidrar til bedre brukeropplevelse, bør (skal?) tjeneste tilby notifikasjoner for å si fra om endringer i kildedataene. Datatilbyder må beskrive hva tjenesten sender av notifikasjoner (TODO: Konkretiser, eller lenk til, kva som må/bør beskrivast).
5. Det er foretrukket at dataens semantikk blir i størst mulig grad bevart, men om konsument benytter dataene i en kontekst som endrer dataens semantiske innhold, står konsument ansvarlig for dataens innhold i sin tjeneste. (TODO: omskrive?)
6. Kildedata skal hentes fra kildesystemet, og ikke gjennom andre tjenester. Unntaket er proxy-tenester, for eksempel katalog-tenester og API manager. Dette impliserer at datatilbyder og konsument bør snakke direkte med hverandre.
7. Tjenester skal i utgangspunktet bare tilby data den er autoritativ for (kildesystem). Unntaket er fremmednøkler, for å referere til data i andre tjenester. Hvis en tjeneste tilbyr data fra andre kilder, skal autoritativ kilde være en del av informasjonen.
8. Kildedata skal bare endres (vaskes) i kildesystemet, og ikke i konsumerende tjeneste eller underveis i mellomvare som f.eks. aggregerte datalager eller service busser. Feil i data skal meldes til datatilbyder.
9. Tilganger skal registreres, slik at institusjonen har oversikt og kontroll over alle tilganger til sine data. Dette impliserer at alle tilganger registreres i institusjonenes API manager, og ingen data bør flyte utenom denne.
10. Der data underlagt lovgivning flyttes mellom tjenester uten å benytte virksomhetens API Manager, skal integrasjonen underlegges unntakshåndtering.
11. Integrasjoner bør følge [UH:IntArk sine anbefalte integrasjonsmønster](/docs/datadeling/god-praksis/integrasjonsmonster). Unntak fra disse bør meldes til de som forvalter UH:IntArk, slik at de kan vurderes som nye mønstre.
12. Sektorielle kildedata, dvs. data fra tjenester som brukes av flere i sektoren, skal ha likt oppsett hos institusjonene. Dette for å sikre at API kan enklere gjenbrukes av konsumenter som (TODO: Dette kan endrast med neste generasjon API manager?). Tilganger styres likevel av hver enkelt institusjon.
13. Hvis en tjeneste som ikke støtter UH:IntArk får implementert en mikroteneste foran for å ta seg av dette, er tjenesten da IntArk-kompatibel. Forretningslogikk skal/bør da ligge i mikrotenesten, og ikke i tjenesten. Eierskap av mikrotjenesten styres av behovet for integrasjonen.
14. TODO: Datatilbydere og konsumenter skal følge de mer tekniske føringene rundt API manager. (TODO: Lenke. Dette er til dømes føringer rundt korleis Plans bør sjå ut, og kva ein bør og ikkje bør gjere rundt manipulering av endepunkt og data)
15. Hvis flere konsumenter har samme behov for å flette data fra flere kilder, kan det vurderes som en *tjeneste for sammenstilte data*, hvis det unngår dobbeltarbeid. Fellestenester skal behovsprøves. Konsumenter skal likevel ha mulighet til å snakke direkte med kildesystemene.
	* TODO: Eigen DBA mellom "tjenestebuss" mot produsent og konsument. Høyr med IT-jurist om dette. Har vi dokumentert noko rundt dette?


### 4. Teknisk plattform


1. TODO: Kva er forholdet mellom API manager og Dataporten (Feide)? Frå Einar sitt forslag: "API Managers er for IT-tjenester som skal hente data fra andre IT-tjenester. [...] Der en bruker gjennom brukerhandlinger samtykker til at IT-tjenester henter brukers egne data på sine vegne, skal Feide/ID-porten benyttes. [...] Der en bruker i en gitt IT-tjeneste kan hente eller levere virksomhetens data til en annen IT-tjeneste, skal Feide benyttes og trafikken bør rutes gjennom virksomhetens egen API Manager til sluttjeneste."
2. Tilgangskontroll til data skal gjøres gjennom et brukervenlig selvbetjeningsløsning. Tjenesteier skal selv kunne forvalte tilganger til sine kildedata, uten tekniske IT-kunnskaper. Dette gjelder både API og meldinger (notifikasjoner).
3. TODO: Konkretisere noko om at API manager er valfri, så lenge institusjonen følger samme standardar og evt. protokollar for vidare samarbeid om API og konsumentar på tvers av sektoren?
4. Teknisk plattform må kunne utvides med ny funksjonalitet og verktøy etterhvert som nye behov dukker opp. Tjenester skal behovsprøves.
5. Teknisk plattform skal vere dokumentert og ha veiledninger for å enkelt kunne ta i bruk.



 


### TODO: Punkt for vurdering


1. TODO: Flett inn frå "orden i eget hus"?
2. TODO: Flett inn frå "verktøykasse for deling av data"?
3. TODO: Sjå over og evt. flett inn frå FAIR-prinsippene - ["FAIR Guiding Principles for scientific data management and stewardship"](https://www.go-fair.org/fair-principles/)
4. TODO: Flett inn frå KUDAF, td. rundt korleis finne fram til data, og meir konkret rundt semantikk og domener?
5. TODO: Korleis bør vi forholde styringsreglane etter **domener** som innførast i referansearkitekturen?
	* For **grunnleggende** domener (sentrale prosesser, td. admin og forvalting) har tjenester enkelte styringsregler:
		+ Løse koblinger - generelle API
		+ Domeneansvarlig (? TODO) definerer sine begreper for sitt domene. (TODO: sjekk ut om det er riktig forstått, eller om det framleis er begrepseier)
	* Brukernære domener har tjenester andre styringsregler:
		+ Skal støtte meir spesifikk brukernær kontekst, så datasett og API skal vere **spesifikke** og skreddersydd til brukskonteksten.
		+ TODO: treng vi skille på kildedata frå grunnleggande domener, versus dei brukarnære? Sekundær bruk, og td "relabeling".
	* TODO: Er IntArk-plattformen eitt domene - så forsking og andre domener kan ha sin eigen plattform? Eller skal plattformen gjelde for alt?
		+ Kva med Feide (Dataporten) si rolle?
6. Bør sei noko om ytre API, men stod ikkje så mykje om det i ref.ark endå. Her burde vi sagt noko, for å unngå misforståingar. Må diskutere i prosjektet.


7. Prosesser og begreper knyttet til administrasjon og støtteprosesser skal standardiseres mest mulig i sektoren, mens lærings- og forskningsprosesser har sterk grad av institusjonelt selvstyre. (TODO: diskuter! Er også ønskeleg å kunne dele dette på tvers, sjølv om det er institusjonell sjølvråderett. Seier ref.ark noko meir om dette vidare?)


8. Eskalering og prioriteringsråd? Truleg UiO-spesifikt, og ikkje relevant for andre institusjonar? Formålet er at institusjonen må kunne prioritere kva tenester som skal forbetrast. Eskaleringsnivå kan vere noko slikt, men det er opp til institusjonen. Eller treng vi noko sektorielt?
	* Tre typar eskalering:
		1. Flere tjenesteeiere har behov for de samme integrasjonsressursene
		2. Tjenesteeier ønsker å integrere, men har ikke mulighet til å finansiere (hele) integrasjonen over egne budsjetter
		3. En tjenesteeier tilbyr ikke sine kildedata i tråd med UH:IntArk, og uenighet medfører en eskalering.
9. Ved innføringar og endringar av integrasjonar skal det gjerast fagleg vurdering om løysinga følger prinsippet om lause koblingar.
10. Tjenesteporteføljen (TODO: Service portfolio? Skal vi endre til API manager, eller kva gjer vi med denne i prosjektet?) skal ha oppdaterte opplysnigner om sektorens tjenester. TODO: Dataeier ansvarlig for å registrere sin tjeneste i tjenesteporteføljen? Konsument-eier ansvarlig for å registrere sin konsumerende tjenestet i SP?
	* Eier skal dokumentere/registrere/lenke opp følgende i tjenesteporteføljen:
	
	
		+ Hvem er ansvarlig, og hvem forvalter tjenesten
		
		
		+ Hvilke kontaktpunkter skal benyttes
		+ Kontrakter, som SLA og databehandleravtale
		+ Integrasjonsgrensesnitt, autoritative data og deres kategorier og betydning
		+ Eier har ansvar for at grensesnitt er registrert i institusjonens API-katalog
11. Datatilbyder og konsument trenger en databehandleravtale når du skille de institusjonelle grensene. TODO: I utgangspunktet treng ein mellom partane, men Uninett kan kanskje ha noko mellom der for å forenkle? Høyr med IT-jurist?