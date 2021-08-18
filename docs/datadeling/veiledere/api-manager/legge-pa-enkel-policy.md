---
description: "I Gravitee API manager kan man legge p\xE5 ekstra funksjonalitet p\xE5\
  \ APIet. Dette kan v\xE6re ekstra tilgangkontroll, validering eller endring av requests.\
  \ Dette legges p\xE5 som policies.\n\n\nDet er mulig \xE5 legge policy p\xE5 hele\
  \ API, enkelt-planer eller enkelt paths / ressurser. Det vanligste er \xE5 legge\
  \ p\xE5 hele API"
title: "Legge p\xE5 en enkel policy (IP filter)"
---

# Legge på en enkel policy (IP filter)

I Gravitee API manager kan man legge på ekstra funksjonalitet på APIet. Dette kan være ekstra tilgangkontroll, validering eller endring av requests. Dette legges på som policies.


Det er mulig å legge policy på hele API, enkelt-planer eller enkelt paths / ressurser. Det vanligste er å legge på hele API

For å legge på en policy på et helt API:


Naviger til ditt API deretter klikk på Design. Du havner nå på "under-fanen"  Policy


For å legge på en policy må du dra den inn under "/"


 


I eksempelet over drar vi "IP filter" inn under "/"-pathen. Deretter klikker vi på "IP filter" og legger til den eller de IP-adressene / subnettene vi vil gi tilgang. Husk å trykke "save".


Det er mulig å legge på veldig mange policies, men det anbefales å ha så få som mulig.


Policies blir utført en og en. For å endre på rekkefølgen de blir utført kan man dra de til den plasseringen som passer. Det er fullt mulig å legge på samme policy flere ganger


 


 


Om en policy skal gjelde for en path kan man legge til en path ved å trykke på +-tegnet. Skriv inn path-en man vil legge til. Velg så denne før man drar inn policy


 


For å legge på policy til en plan gjør man det en annen side. Noen policy-es er lagt opp til at man skal legge på per plan, f.eks. hvite-lister, rate-limiting og autentisering (API key, JWT eller OAUTH) For disse  konfigurerer du policiene når du oppretter planen. I tillegg kan man legge på policy på siste side av veiviserer for planer.