---
title: Konsekvenser med IntArk
---

Innføring av en integrasjonsarkitektur påvirker organisasjonen. Her er en oversikt over konsekvensene med IntArk.


Konsekvensene varierer utfra dagens situasjon hos institusjonen.

## Økonomiske konsekvenser


IntArk inneholder føringer som setter andre krav til IT-systemer. Dette vil kunne føre til kostnader både ved tilpasning av eksisterende systemer, og nye systemer får krav til mer funksjonalitet.


Kostnadene vil være større i innføringsfasen, men vil på sikt føre til at integrasjoner blir enklere, og dermed billigere, å implementere. Det bør påregnes noe kostnad til opplæring ved innføring.


Merk at IntArk ikke krever at alle systemer må følge IntArk helt ut fra starten av. [Prinsippet om kost-nytte](/docs/datadeling/prinsippene/fleksibel) følges. Noen systemer vil kanskje aldri bli oppgradert for IntArk.


Det vil også være en fordeling av kostnaden ved drift og forvaltning av Datadelingsplattformen.


TBD: På lengre sikt **kan** IntArk kunne føre til at hver institusjon får reduserte kostnader **per integrasjon**, og med det får integrert mer, men det kan også være at kostnadene ikke går ned, men at gevinsten blir at sektoren blir mer fleksibel og endringsdyktig, og dermed mer brukerkorientert. Dette er avhengig av forvaltningen til IntArk, og hvilke mål som blir prioritert.


## Organisatoriske konsekvenser


IntArk definerer noen roller, og gir de plikter og ansvar. Disse rollene må plasseres ut i institusjonen, og folk må bevisstgjøres føringene.


Opplæring vil kunne være nødvendig.


*Det er mulig at institusjonen vil trenge et prioriteringsråd, avhengig av hva som blir konkludert i Datadelingsprosjektet (TODO: oppdater når forvaltningen er på plass)*


## Konsekvenser for kildesystemer


Ansvarlige for systemer som inneholder data som er brukbare for andre blir pliktige til å:


* Tilby og gi tilgang til sine data gjennom API manager
* Tilby notifikasjoner om endringer, om mulig, gjennom en meldingskø


Dette vil kunne ha økonomiske konsekvenser, og påvirker prioriteringene for videreutvikling av systemet.


## Konsekvenser for utvikling


Utviklere av tjenester må følge IntArk sine føringer. Hvis du utvikler et kildesystem, dvs. et system som inneholder data som er brukbare for andre, må du:


* Implementere et API for å tilgjengeliggjøre de data som systemet er kildesystem for, og publisere dette i API manager. API-et bør følge bransjestandarder der det finnes, eventuelt designes generelt og så uavhengig av systemtekniske detaljer som mulig.
* Implementere utsending av notifikasjoner ved endringer i data i systemet, og sende disse til en meldingskø.


Merk at kildesystemet ikke er ansvarlig for hvordan konsumenter tar i bruk API-et, og skal i utgangspunktet ikke lage konsumentspesifikke integrasjoner. Dette er konsumentens ansvar.


Hvis du utvikler et system som trenger data fra andre systemer - et konsumerende system:


* Det konsumerende systemet må selv integrere mot API-et og eventuelt meldingskøen.
* Det konsumerende systemet må selv ta seg av forretningslogikk som er spesifikk i eget system. Dette er ikke kildeystemets ansvar.


## Konsekvenser for anskaffelser/innkjøp


De som anskaffer systemer og tjenester må være klar over føringene fra IntArk. I hovedsak:


* Sikre at tjenester som kjøpes inn følger arkitekturprinsippene. Tjenester må kunne være lette å integrere med. Vi ønsker spesielt å unngå "lock in"-situasjoner, der en innkjøpt tjeneste blir kostbar å bytte ut eller endre på senere.
* Føringene fra IntArk må beskrives i anskaffelser.
* Føringene fra IntArk må vektlegges i valget av løsning.


Til hjelp i vurderingene er det laget en [anskaffelsesveiledning](/docs/datadeling/veiledere/annet/anskaffelse).


TODO: Nevne noe om opplæring.
