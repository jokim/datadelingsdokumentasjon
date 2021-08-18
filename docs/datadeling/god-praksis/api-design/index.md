---
description: Anbefalinger rundt utforming av API.
slug: /datadeling/god-praksis/api-design/
title: API-design
---

# API-design

Anbefalinger rundt utforming av API.

Jobber du med en tjeneste med data som andre vil kunne ha nytte av? I så fall trenger tjenesten din et API.


## Prinsipper for godt API design


TBD: Høyr med Heidi om desse. Kva vart det landa på?


Utformingen av API må følge [integrasjonsprinsippene](/docs/datadeling/prinsippene), som blant annet sier at du bør ha et åpent gresesnitt og det bør være så løst koblet som mulig.


Overordnet valg av typen API:


1. Finnes det en API-standard for datasettet du skal tilby? Prioriter å bruke denne! Standardisering gjør det enklere å bytte systemer, på begge sider av integrasjonen.
2. Bruk bransjestandarder, der det finnes. For eksempel bruk av RESTfult eller GraphQL. Se mer om IntArks anbefaling om [Web services](/docs/datadeling/god-praksis/bruk-av-webservice).
3. Finnes det lignende data i andre kildesystemer? Det bør i så fall først avklares hvilken tjeneste som er kildesystem for hvilke data.
4. Bruk lignende semantikk som i tilsvarende datasett andre steder, hvis mulig. Du anbefales å gjenbruke eksisterende datasett fra [data.norge.no](https://data.norge.no). Hvis det ikke finnes, kan du med fordel publisere eget definert datasett der.


Hva [integrasjonsprinsippene](/docs/datadeling/prinsippene) har å si når du skal designe et API:


* **Brukerorientert**: Ha i bakhodet at brukernes behov kan endre seg raskt, og at vi også derfor bør kunne endre oss raskt. Endringsdyktighet kan fort være viktigere enn for eksempel hvor effektiv en integrasjon er.
* **Tjenesteorientert**: Bruk så løse koblinger som mulig, som vil si å gjøre det så enkelt som mulig å bytte ut tjenester på begge sider av en integrasjon. For eksempel:
	+ Bruk API-standarder, hvis det finnes
	+ Bruk bransjestandarder, for eksempel RESTful
	+ Hold API-et på funksjonelt nivå, og unngå systemspesifikke detaljer.
	+ Bruk felles semantikk, hvis det finnes.
	+ Unngå skreddersøm for en enkelt tjeneste. TBD: Korleis er dette i samanheng med eHelse si anbefaling om eitt API per type teneste (nettside, mobil etc)?
* **Tilgjengelig**: Lag et åpent grensesnitt, som vil si at spesifikasjonen av ditt API må være fritt tilgjengelig og leverandøruavhengig. Motsetningen er proprietære grensesnitt som bare enkelte leverandører kan integrere mot, som reduserer fleksibiliteten til sektoren.
* **Oversiktlig**: Registrer ditt API i din institusjons API-katalog, og dokumenter den. IntArk anbefaler som minimum å følge [OpenAPI-spesifikasjonen](https://www.openapis.org/) (swagger).
* **Etterrettelig:** Konsumenter må snakke med ditt API via din institusjons API gateway. Dette gjør at institusjonen får samlet oversikt over dataflyt, og har kontroll og kan for eksempel sperre tilganger ved behov.
* **Fleksibel**: Unntak fra prinsipper og anbefalinger er tillatt, men må begrunnes. Det kan for eksempel bli vurdert å ikke være hensiktsmessig å utvikle et nytt API hvis en liten tjeneste har et proprietært API som fungerer greit nok. Vurderingen må gjøres med hensyn på institusjonen og sektoren som helhet.
* **Effektiv**: Noen datasett kan være ønskelig å kombinere for mange konsumenter. Det kan da være nyttig å lage et knutepunkt, eller tjenestebuss, som sammenstiller disse dataene.
* TODO:
	+ Kor står det om å snakke direkte med kilden?
	+ Kor står det om ansvarsplassering?


Andre hensyn du bør ta:


* Hold API på funksjonelt nivå så langt det er mulig. Unngå for eksempel å eksponere interne systemdetaljer i API-et, for eksempel hvilke databasetabeller du må snakke med. Konsumenter ønsker å fokusere på dataene, uten å måtte ha kunnskap om interne detaljer i systemet ditt.
* TODO: Si noe om semantikk og begrepsbruk.


Andre krav til et API:


* Registrer ditt API i din institusjons API-katalog.
* API-et må være dokumentert. Minimumskravet er at det er dokumentert etter [OpenAPI-spesifikasjonen](https://www.openapis.org/) (typisk i swagger-dokumentasjon), som bør ligge i eller lenkes til fra API-katalogen.
* TBD: Si noe om krav til dokumentasjon av datasett? Har vi noe å lene oss på, for eksempel standarder å følge?


Andre tips:


* Snakk med konsumentene! Det er lett å gå i fella å inkludere systemspesifikke detaljer i API-et ditt, så det kan vere nyttig å ha en dialog med **flere** konsumenter, og komme frem til noen felles begreper på funksjonelt nivå. Hjelpespørsmål:
	+ Hva er konsumenten interessert i å vite om?
	+ Trenger konsumenten egentlig å vite om detalj X?
	+ Kan det forenkles?
* Det er ikke enkelt å lage et godt API-design. Du bør ofte ta noen iterasjoner før du har et API som er generelt og fungerer godt for alle konsumenter, og som følger IntArk sine behov.


TODO: Inkludere noko om begrepsansvarleg?


TODO: Nemne versjonering. Sei noko om krav til levetid for gamle versjonar - lenke til vedtak? TODO


## Områder


* Hvordan bygge endepunkter
* god praksis, td unngå verb, alltid flertall, REST
* 


## Semantikk


TBD: Frå heidi?


## Sjekkliste for API


Hvis du designer et API:


* Er API-et på funksjonelt nok nivå?
* Følger API-et prinsippene til RESTful?
* Inneholder API teknisk terminologi som egentlig burde vært systeminterne?
* Trenger konsumenter å kjenne til datamodellen?


 


 


TODO: Sei noko rundt å skille ut personinformasjon frå andre data. Så det vert enklare å tilgangsstyre. Til dømes å kunne dele ut emner, utan å måtte eksponere studentane.