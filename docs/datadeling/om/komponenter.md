---
slug: /datadeling/om/komponenter/
title: Komponentene i fellestjenesten for datadeling
---

En funksjonell, overordnet beskrivelse av komponentene som fellestjenesten for
datadeling består av. Se sidene om [teknisk
plattform](/docs/datadeling/teknisk-plattform) for mer detaljer om hvordan
komponentene er implementert.


## Sentral oversikt over data - API-katalog

Institusjonen trenger oversikt over sine API og data, og trenger derfor en
API-katalog. Denne skal både hjelpe institusjonen å ha kontroll og oversikt
over sine data, men skal også hjelpe konsumenter med å finne frem til data.

En API-katalog må blant annet støtte:

- Datatilbyder kan registrere sitt API i en sentral katalog
- Datatilbyder kan beskrive sitt API og sine data i en sentral katalog
- At konsumenter kan selv lete etter relevante API


## Sentral kontroll på datadeling - API manager

Institusjonen må ha kontroll på hvem som har tilgang til hvilke data. Dette
gjelder spesielt data med personopplysninger.

For å oppfylle dette kravet, har vi behov for en tjeneste med funksjonaliteten:

- Sentral oversikt over hvem som har tilgang til hvilke API og data
- Konsument kan selv søke om tilgang til data fra et API
- Datatilbyder kan godkjenne/avslå søknad om tilgang til sine data
- Datatilbyder har oversikt over hvem som har tilgang til sine data
- Datatilbyder kan trekke tilbake tilgang til sine data


## Kontroll over data - API gateway

Tjenester som tilbyr data må ha sikringer på plass for å sikre at bare de som
har blitt autorisert får tilgang til disse dataene. Dette kan oppfylles av en
*API gateway*, som står mellom datatilbyders API og konsumenten - en proxy med
tilgangskontroll.

API gateway må oppfylle behovene:

* API gateway må sperre tilgang til API og data hvis dette ikke er godkjendt i
API manager.
* API gateway må gi tilgang til API og data når API manager sier dette er
greit.
* API gateway må logge hvem som har hentet ut hvilke data fra et API.


## Meldingskø

Sluttbrukerne har en forventning om at tjenester er oppdaterte med relevante
data, og at en ikke trenger å for eksempel "vente til neste morgen" før
endringer er trådd i kraft. Dette gir behov for en mer effektiv overføring av
kildedata til konsumenter - fellestjenesten anbefaler integrasjonsmønsteret
"hendelsesbasert provisjonering" for å dekke dette behovet. Dette krever bruk
av en meldingskø.

Produsenten skal ikke trenger å forholde seg til hvilke konsumenter som
abonnerer på meldingene. Dette tar meldingskøen seg av.

For å gjøre hendelsesbasert provisjonering enklere, må IntArk tilby en
sentralisert meldingskø som datatilbydere kan publisere til, og konsumenter
abonnere på meldinger fra.

Meldingskøen må oppfyller behovene:

* Datatilbydere kan registere sin tjeneste som produsent av notifikasjoner.
* Datatilbydere kan sende notifikasjoner - tynne meldinger - til meldingskøen.
* Konsumenter kan abonnere og lytte på meldinger fra de produsentene de ønsker.
* Konsumenter må selv kunne lete etter relevante tjenester med meldinger
* Konsumenter må selv kunne søke om tilgang til meldinger fra en tjeneste
* Datatilbydere må kunne godkjenne/avslå søknad om tilgang til sine meldinger
fra konsumenter.
