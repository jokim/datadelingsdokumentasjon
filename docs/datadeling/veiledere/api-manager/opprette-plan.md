---
description: "En plan kan sees p\xE5 som et sett med rettigheter til et API\n\n\n\
  Det kan v\xE6re rettigheter for hvilke paths man har lov til \xE5 bruke, om man\
  \ har bare lese-rettigheter eller b\xE5de lese og skrive-rettigheter eller hvor\
  \ ofte du har lov til \xE5 sp\xF8rre mot APIet"
title: Opprette plan
---

# Opprette plan

En plan kan sees på som et sett med rettigheter til et API


Det kan være rettigheter for hvilke paths man har lov til å bruke, om man har bare lese-rettigheter eller både lese og skrive-rettigheter eller hvor ofte du har lov til å spørre mot APIet


### Opprette plan


Under API definisjonen, Gå til Poral og Plans. Lag ny plan ved å trykke på det blå +-tegnet


Du blir så tatt gjennom veiviseren for å opprette / endre en plan. I eksemplene under lager vi planer for [test-APIet petstore](https://petstore3.swagger.io/) 


 


![](/datadeling/img/image-20200928124644-1.png)


 


### Opprette plan med mange rettigheter


På første siden fyll inn navn og en beskrivelse.


Det er noen andre valg:


* Auto validate subscription betyr at alle som ber om tilgang får det automatisk (men i motsetning til en åpen plan må de registrere applikasjonen).
* Skru på "Consumer must provide a comment" om du vil kreve at det blir skrevet en kommentar for å få spurt om tilgang.
* I tekst-feltet "Custom messae to display to consumer"  er det mlig å legge inn en kort,egen tekst hvor man f.eks. ber om spesifikk informasjon.
* Under Characteristics kan man legge inn noen stikkord for å beskrive planen, f.eks. "åpne data" om planen kun gir tilgang til det, "read only" om kun leserettigheter, "read/write" om planen gir tilgang til å legge inn datai APIet o.l.


![](/datadeling/img/image-20200928150931-1.png)


 


På neste side velger man hvilken metode (om noen) APIet skal være sikret med.


Man kan velge å ha det helt åpent (public/keyless), bruke API-nøkkel, JWT eller  OAuth 2.


I dette eksempelet brukes API nøkkel. Man kan velge å sende API-nøkkelen med videre til backend. (ikke valgt her, headeren med api-nøkkel blir derfor ikke fjernet )


 


 


![](/datadeling/img/image-20200928152040-3.png)


I neste skjermbilde kan man velge å legge restriksjoner på hva man får lov til å gjøre med denne planen. [Se lenger ned for eksempler](#restrictions)


  

 


 


 


På siste side kan man legge på policy-er på enkelt-planer. Det anbeflaes ikke om man kan unngå det. , men noen ganger er det nødvendig. Prøv i så fall å ha så få som mulig her. Det er bare å velge policy, klikke på add og konfigurere denne. Om man legger på flere blir den neste lagt til på slutten. Man kan ikke endre rekkefølge i etterkant slik som når man endrer på policyer for hele APIet


For å lagre planen, trykk på SAVE her


![](/datadeling/img/image-20200928155158-6.png)


Planer blir først opprettet i Staging-området. Der er da ikke mulig å abbonnere på dem. På denne måten kan man opprette planer og dobbeltsjekke at de ble riktige før man publiserer de. Når du oppretter en plan før den er publisert vil du derfor ikke se den, klikk på "Staging" for å se planer om ikke er publisert


![](/datadeling/img/image-20200928155423-7.png)


For å gjøre en plan tilgjengelig klikk på den lille skyen med oppover-pil. ![](/datadeling/img/image-20200928155734-8.png) Den er nå tilgjengelig i portalen og applikasjoner kan spørre om tilgang. Det  er fremdeles ikke ,ulig å bruke planen, , klikk på deploy for å dytte ut konfigurasjonen av denne planen til gateway-en


For å endre en planklikk på blyanten. Man må gå gjennomhele veisiseren på nytt, men trenger kun å endre det som skal endres.


### Avslutte planer


For å gjøre en plan utilgjengeli for nye abonneneter gjør man dem Deprecated. Eksisterende abonenter vil fortsette å fungere (TODO: sjekke om epost for å bytte blir sendt), men nye applikasjoner som vil bruke APIet må velge et annen plan. Ved å lukke planen vil eksisterende abonnement slutte å fungere


 


 


### Opprette plan med få rettigheter og begrensning av bruk


 


Trykk på + på siden for planer for å opprette ny plan


Fyll inn navn, beskrivelse og velg autentisering-methode på de 2 første sidene


 


#### Hvitelisting


På side 3 (Restrictions), huk av for Path Authorization. I dette eksempel bruker vi fremdeles Pet Store-APIet, og vi vil bare tillatte å lese informasjon om kjæledyr. For å oppnå dette hvitelister vi en path. Trykk på "+ Add" under whitelist for å lage en ny  og fyll inn path pattern og tillate methoder. F.eks. /pet/** som path og huke av for GET for å gi lese-rettigheter til  kjæledyr


![](/datadeling/img/image-20200930180731-1.png)


 


Du kan legge på så mange path pattern i hvitelist som du vil. Når du har lagt inn en eller flere hviteliste(r) vil alle andre paths være svartelistet. Tilsvarende til alle endre være godkjente om du svartelister en eller flere path-er.


Det fungerer ikke å kombinere svartlister og hvitelister (TODO: teste at det er slik) Om begge typer er definert vil kun hvitelistene fungere (TODO: test)


 


Methods som blir brukt her blir også kalt HTTP verbs


Path patterns som blir brukt er [Ant Path Patterns](http://ant.apache.org/). Du fungerer slik:


* ? betyr et tegn (men ikke / )
* * betyr null eller flere tegn (men ikke / )
* ** betyr null eller flere mappe-segmenter


Om du vil vite mer om Ant Patterns er [denne veiledningen god,](https://confluence.atlassian.com/fisheye/pattern-matching-guide-960155410.html) det finnes også [offisiell dokumentasjon](http://ant.apache.org/manual/dirtasks.html#patterns)


 


#### Svartelisting


I dette eksempelet har man lov til å bruke APIet aå mye man vil og man har tilgang til alle ressuser bortsett fra å slette ordre. Det er gjort ved å svarteliste pathen /store/order med http-methoden (HTTPS verb) DELETE. Om man vil svarteliste all tilgang til ordre huker man av alle.


 


![](/datadeling/img/image-20201001130341-3.png)


 


 


 


 


#### Rate-Limiting


I tillegg til å begrense hvilke ressurser som er tilgengelig via APIet kan man også begrense hvor ofte en konsument kan kontakte et API. Det gjøres med Rate-limiting eller kvoter (Quota) Kvoter er mest brukt for APIer hvor man betaler for. Rate-limiting brukes også ofte på betal-APIer hvor det er mindre begrensninger jo mer man betaler. Rate-limiting kan også brukes for å beskytte et API om backend-serveren har ytelsesproblemer.


Skjermskudd av eksempel hvor man tillater 2 requests per minutt:


![](/datadeling/img/image-20201001125524-1.png)