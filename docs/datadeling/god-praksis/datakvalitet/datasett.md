---
slug: /datadeling/god-praksis/datakvalitet/datasett/
title: Beskrivelser av datasett
---

Kildedata må beskrives. Her beskrives hvordan du gjør dette i fellestjenesten.

Vi anbefaler å følge de nasjonale standardene,
[DCAT-AP-NO](https://data.norge.no/guide/veileder-beskrivelse-av-datasett/)
versjon 2, for å beskrive kildedata. Se [Felles datakatalog sin veileder for
beskrivelser av
datasett](https://data.norge.no/guide/veileder-beskrivelse-av-datasett/) for en
innføring.

Den nasjonale standarden har oversikt over hvilke felt som er påkrevd,
anbefalte og valgfrie i beskrivelsen av datasett. I fellestjenesten anbefaler
vi spesielt:

* Hvis kildedataen er autoritative, skal feltet `dqvno:isAuthoritative` brukes.
(I DCAT-AP-NO er dett bare valgfritt).


<!-- TODO: Lisensiering: Vi bør alltid sei noko om lisensiering. Spesielt for
åpne data, men også for andre data, sidan dei bør kunne delast. HAr vi ein
passande default-lisens å henvise til, for meir begrensa data? Til dømes
https://data.norge.no/nlod/no/ -->


## Hvordan beskrive datasett i fellestjenesten?

Dagens API-katalog støtter ikke DCAT sine filformat ut av boksen. Vi anbefaler
derfor å bruke tjenester som data.norge.no, og lenke til denne fra
API-katalogen. Datasett kan også beskrives i et vanlig, enkelt dokument på
API-ets dokumentasjonsområde i API-katalogen.
