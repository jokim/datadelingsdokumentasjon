---
slug: /datadeling/hva-er/roller/
title: Rollene i IntArk
---

De fleste av rollene i IntArk kommer fra
[referansearkitekturen](https://unit-norge.github.io/unit-ra/main/B%C3%B8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%C3%B8yere%20utdanning%20og%20forsking.html#_roller_og_ansvar_for_informasjonsforvaltning).
Se også [styringsreglene](/docs/datadeling/styringsregler) for hva rollene har
ansvar for.


## IntArk-koordinator

Hver institusjon som innfører IntArk har sin lokale IntArk-koordinator, som tar
seg av dialogen med Sikt. Under innføringen av IntArk er det denne personen
Sikt forholder seg til.

IntArk-koordinatoren må sikre at institusjonen innfører IntArk på en
hensiktsmessig måte, blant annet ved:

- Relevante interessenter blir holdt informert (blant annet dataforvaltere,
  tjenesteeiere, utviklere og anskaffere).
- Intern dokumentasjon blir oppdatert.
- Se til at datatilbydere og konsumenter får tilganger i den tekniske
  plattformen.
- Holde Sikt oppdatert på innføringen av IntArk.
- Koordinere opplæringstilbudet fra Sikt internt hos institusjonen.
- Melde tilbake til Sikt om mangler og behov.


## Datatilbyder

En *datatilbyder* er en person, tjeneste eller enhet som har ansvar for data
som er brukbare for andre - dvs. kildedata.

I IntArk er datatilbyderens primære ansvar at dataene blir gjort tilgjengelige,
uavhengig av hvem som er konsument. Datatilbyder må også følge IntArks
styringsregler, og bør også se på anbefalingene rundt effektiv datadeling.

I den tekniske plattformen skal datatilbydere publisere sine API, og registrere
sin publisering av notifikasjoner.


## Konsument

En person, enhet eller tjeneste som trenger å hente data fra et kildesystem.
Husk at du kan både være datatilbyder og konsument - dette avhenger av hvilke
data du ser på.

I IntArk er konsumenten pliktig å hente data direkte fra kildesystemet, og å
rapportere om feil i data til datatilbyder. Konsumenten må også selv håndtere
systemspesifikke tilpasninger av dataene.

I den tekniske plattformen må konsumenter registrere sin tjeneste for å kunne
søke om tilgang til datatilbydere sine API, og kunne abonnere på deres
notifikasjoner.


## Tjenesteeier og tjenesteansvarlig

Tjenesteeier er den organisasjon/virksomhet/enhet som eier en tjeneste.
Tjenesteansvarlig er den som har det operative ansvaret for tjenesten. Disse
rollene kommer fra referansearkitekturen. Disse rollene kan fylles av samme
person.

I IntArk er tjenesteeier ansvarlig for at tjenestens data er tilgjengelig for
andre, og at den følger referansearkitekturens og IntArks føringer.
Tjenesteansvarlig har ansvar for at tjenesten følger IntArk, for eksempel i
videreutvikling.


## Dataforvalter

Dataforvalter er den enhet/person som har ansvaret for å administrere dataene
for en datatilbyder.

Dataforvalter sikrer datakvaliteten, dvs:

+ At data er komplette
+ At data er maskinlesbare
+ At data er riktig formaterte


## Se også

* [Begrepsbruk](/docs/datadeling/begreper)
* [Rollene i referansearkitekturen](https://unit-norge.github.io/unit-ra/main/B%C3%B8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%C3%B8yere%20utdanning%20og%20forsking.html#_roller_og_ansvar_for_informasjonsforvaltning)
* [Styringsreglene](/docs/datadeling/styringsregler) - her står det hva som må
følges
