---
title: Konsekvenser med IntArk
---

Innføring av en integrasjonsarkitektur påvirker organisasjonen. Her er en
oversikt over konsekvensene med IntArk.

Konsekvensene varierer utfra dagens situasjon hos institusjonen.


## Økonomiske konsekvenser

IntArk inneholder føringer som setter andre krav til IT-systemer. Dette vil
kunne føre til kostnader både ved tilpasning av eksisterende systemer, og nye
systemer får krav til mer funksjonalitet.

Kostnadene vil være større i innføringsfasen, men vil på sikt føre til at
integrasjoner blir enklere, og dermed billigere, å implementere. Det bør
påregnes noe kostnad til opplæring ved innføring.

IntArk krever ikke at alle systemer må følge IntArk fullt ut fra starten av.
[Prinsippet om kost-nytte](/docs/datadeling/prinsippene/fleksibel) følges. Noen
systemer vil kanskje aldri bli oppgradert for IntArk.

Det vil også være en fordeling av kostnaden ved drift og forvaltning av
Datadelingsplattformen.

Vi forventer mer digitalisering av kunnskapssektoren, og et behov for mye mer
datadeling. Den totale kostnaden rundt datadeling vil derfor gå opp, men med
IntArk blir utgiftene brukt mer effektivt.


## Organisatoriske konsekvenser

IntArk inneholder noen prosesser og roller som hver institusjon må ta til seg.
Det er spesielt rollene rundt informasjonsforvaltningen som vil kunne føre til
endringer hos institusjonen. Institusjonene bestemmer selv hvordan de innfører
IntArk i sin organisasjon, men det er enklare å få ut gevinstene fra IntArk ved
å innføre det slik det er anbefalt.

Opplæring vil også kunne være nødvendig.


## Konsekvenser for tjenester

Hvis en tjeneste inneholder data som er brukbare for andre, blir den som er
ansvarlige for tjenesten eller dataene i tjenestene også ansvarlig for at
dataene gjøres tilgjengelige.

Dette vil kunne ha økonomiske konsekvenser, og påvirker prioriteringene for
videreutvikling av tjenesten.


## Konsekvenser for utvikling

Utviklere av tjenester må følge IntArks føringer. Hvis du utvikler en tjeneste
med data som er brukbare for andre, må du:

* Implementere et API for å tilgjengeliggjøre de data som systemet er
kildesystem for, og publisere dette i API manager. API-et bør følge
bransjestandarder der det finnes, eventuelt designes generelt og så uavhengig
av systemtekniske detaljer som mulig.

* Implementere utsending av notifikasjoner ved endringer i data i systemet, og
sende disse til en meldingskø.


Kildesystemet er ikke ansvarlig for hvordan konsumenter tar i bruk API-et, og
skal i utgangspunktet ikke lage konsumentspesifikke integrasjoner. Dette er
konsumentens ansvar.

Hvis du utvikler en tjeneste som konsumerer data fra andre kildesystem:

* Den konsumerende tjenesten må selv integrere mot API-et, og eventuelt
meldingskøen.

* Den konsumerende tjenesten må selv ta seg av forretningslogikk som er
spesifikk i egen tjeneste. Dette er ikke kildeystemets ansvar. For "brukernære
tjenester" kan kildesystemet ta seg av forretningslogikk tilknyttet prosessen,
men ikke tilpasset din tjeneste.


## Konsekvenser for anskaffelser/innkjøp

Du som anskaffer tjenester må være klar over føringene fra IntArk. I hovedsak:

* Sikre at tjenester som kjøpes inn følger grunntankene bak IntArk. Det må være
enkelt å få tilgang til kildedataene, spesielt uten å låse oss til en
leverandør. Vi ønsker spesielt å unngå "lock in"-situasjoner der en innkjøpt
tjeneste blir kostbar å bytte ut eller endre på senere.

* Føringene fra IntArk må beskrives i anskaffelser.

* Føringene fra IntArk må vektlegges i valget av løsning.


Til hjelp i vurderingene er det laget en
[anskaffelsesveiledning](/docs/datadeling/veiledere/annet/anskaffelse).
