---
description: "Hvordan du kan cache responser i Gravitee, for \xE5 redusere belastningen\
  \ mot API-et ditt."
title: Caching i gravitee
---

# Caching i gravitee

Hvordan du kan cache responser i Gravitee, for å redusere belastningen mot API-et ditt.


 


For å sette på caching må man opprette en eller flere cache-ressuser, og deretter legge på en policy som benytter denne


### Opprette en cache-ressurs


[![](/datadeling/img/image-20201021141543-1.png)](/datadeling/img/image-20201021141543-1.png)


 


Naviger til APIet hvor du skal konfigurere cache. Velg Design og deretter Resources. Trykk på +-tegnet for å opprette. Fyll inn navn og vel Caching resource som Type.


Man blir bedt om å skrive inn navn 2 steder. De første feltet er hva cachen blir hetende når man ser på ressurser. Det andre navnet brukes å policy-en. Bruk gjerne samme navn begge steder.


"Time to idle" er hvor lenge et svar blir cachet uten at det blir spurt på


"Time to live" er hvor lenge et svar blir cachet uavhengig av om det blir spurt på eller ikke


"Max entries on heap" er hvor mange svar som kan bli lagret i denne cachen


[![](/datadeling/img/image-20201021145429-2.png)](/datadeling/img/image-20201021145429-2.png)


 


### Opprett cache policy


Gå til design -\> policy og legg cache-policy ved å "dra" den inn på riktig path.


Fyll inn


* cache name (dvs. navn nr. 2 om du brukte forskjellige navn på ressursen og cachen i forrige steg)
* Key. Dette er det viktigste valget, se nedenfor. Som oftest er dette et elelr flere parametre
* Time to live. Kan være lavere enn i det som ble valgt for cache-ressursen i forrige steg
* max entries


Cachen lagres som en key-values-store , dvs. en nøkkel gir et svar. Key kan f.eks. være et parameter. For å bruke parameteret status skriv inn

```

{#request.params['status']}
```

Da vil svare blir cachen med key lik verdien til parameteret, f.eks. sold, available eller en tom streng. Merk at om det er flere parametre som er mulig å bruke kan det bli tull. Det kan unngås ved å bruke en kombinasjon av parametre, f.eks.

```

{#request.params['status']}-{#request.params['tags']}
```

for å bruke kombinasjonen av de 2 parameterne status og tags
 
Expression Language-uttrykk
{#request.params['status']} er et eksemple på et Expression Language-uttrykk. De er basert på Spring Exression Language (SpEL) og blir brukt som variable i API Manager.
For å lese mer om disse se [offisiell dokumentasjon fra leverandøren.](https://offisiell dokumentasjon fra leverandøren.)