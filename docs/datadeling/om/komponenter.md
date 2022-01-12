---
slug: /datadeling/om/komponenter/
title: Komponentene i IntArk
---

IntArk inneholder noen komponenter som bidrar til å oppfylle behovene. Dette
dokumentet er en funksjonell beskrivelse av komponentene - se tekniske detaljer
på sidene om [teknisk plattform](/docs/datadeling/teknisk-plattform).


## Sentral oversikt over data - API-katalog

Institusjonen trenger oversikt over sine API og data, og trenger derfor en
API-katalog.

En API-katalog må blant annet støtte:

- Datatilbyder kan registrere sitt API i en sentral katalog
- Datatilbyder kan beskrive sitt API og sine data i en sentral katalog
- At konsumenter kan selv lete etter relevante API


## Sentral kontroll på datadeling - API manager

En institusjon må ha kontroll på hvem som har tilgang til hvilke data. Dette
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
kildedata til konsumenter - IntArk har valgt å bruke integrasjonsmønsteret
"hendelsesbasert provisjonering" for å dekke dette behovet, for tjeneste som
ikke støtter JIT-provisjonering, og landet på tynne meldinger (eNotifikasjoner)
for hendelser. Dette krever bruk av en meldingskø.

Produsenten skal ikke trenger å forholde seg til hvilke konsumenter som
abonnerer på meldingene. Dette tar meldingskøen seg av.

For å gjøre hendelsesbasert provisjonering enklere, må IntArk tilby en
sentralisert meldingskø som datatilbydere kan publisere til, og konsumenter
abonnere på meldinger fra.

Meldingskøen må oppfyller behovene:

* Datatilbydere kan sende notifikasjoner - tynne meldinger - til meldingskøen.
* Konsumenter kan abonnere og lytte på meldinger fra de produsentene de ønsker.
* Datatilbydere må selv kunne registrere sin tjeneste
* Konsumenter må selv kunne lete etter relevante tjenester med meldinger
* Konsumenter må selv kunne søke om tilgang til meldinger fra en tjeneste
* Datatilbydere må kunne godkjenne/avslå søknad om tilgang til sine meldinger
fra konsumenter.


TODO: rydd opp i resten


# Meldingskø (MQ) for sanntidsoppdatering

TODO: Skriv om frå UiO til å kunne gjelde for UH-sektoren. Flytt ut tekniske detaljar til området under [Teknisk plattform](/docs/datadeling/teknisk-plattform).

UiO har en [meldingskø-tjeneste (MQ) for sanntidsoppdatering](https://mq.uio.no/). Tjenester kan poste notifikasjoner om endringer til køen, og konsumenter (tjenester som bruker kildedata fra systemene) kan lytte til køen for å få vite om det når masterdata blir endret. Når masterdata i et system som poster til køen blir endret, vil alle tjenestene som deler disse dataene kunne oppdatere sin informasjon samtidig, forutsatt at de lytter på meldingskøen.


Tjenesten varsler når informasjonsobjekter endrer seg, og en konsument kan selv velge hvilke objekter den vil lytte på. F.eks. kan man få beskjed hvis en person bytter telefonnummer eller bostedsadresse.




### Hvem kan benytte tjenesten?


Publisering til meldingskøen er for tiden tilgjengelig for tjenesteeiere ved UiO. Lytting kan også gjøres av eksterne, for eksempel leverandører eller andre UH-aktører som bruker UiO-data. Meldingskøen er for tiden ikke åpen for at andre aktører i UH-sektoren kan publisere sine endringer.


Meldingskøen er enn så lenge bare tilgjengelig innenfor 129.240.0.0/16.


### Forutsetninger


For å kunne lytte på en meldingskø, må man ha en meldingskø-klient. En utvikler kan enkelt bygge en slik klient av standardkomponenter, og siden protokollene er åpne, betyr det ingenting hvilket programmeringsspråk som brukes. Meldingskø-klienten må konfigurere til hvilke køer den skal lytte på eller skrive til, og hvilke meta-data som skal benyttes.


Vi har et bibliotek over tidligere utviklede klienter, som i stor grad kan gjenbrukes. 


Når man registrerer seg som bruker av meldingskø-tjenesten, må man oppgi en epostadresse. Hit sendes brukernavn og passord, og gjennom årlig passordskifte vil man vite om kontaktinformasjonen eller tjeneste ennå er i bruk. Brukernavn og passord kreves kun for å kunne varsle om utviding av tjenestetilbudet, eventuell nedetid, samt ha kontroll over hvilke køer som kan avvikles fordi ingen lenger bruker dem.


MQ har i dag ikke tilgangsstyrings-/tilgangskontrollregime for å håndtere informasjonsbærende notifikasjoner. Ta kontakt dersom dette er et behov.


### Beskrivelse av tjenesten


Notifikasjonen en konsument får, inneholder bare meta-informasjon om hvilke attributter som er endret, samt en peker til informasjonsobjektet. Tilgangskontroll skjer først når konsument forsøker å aksessere informasjonsobjektet. Det går altså ingen informasjon som krever konfidensialitet gjennom tjenesten.

