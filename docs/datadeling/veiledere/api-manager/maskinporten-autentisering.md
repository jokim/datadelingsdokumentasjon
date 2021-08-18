---
description: "[Under utvikling: Anbefalingen vil endre seg, etter erfaringer med BOTT:\xD8\
  L i 2021]\n\n\nHvordan kan du sette opp autentisering av ditt API via Maskinporten,\
  \ n\xE5r du trenger \xE5 snakke med API utenfor din organisasjon."
title: 'Konfigurere autentisering via maskinporten '
---

# Konfigurere autentisering via maskinporten 

[Under utvikling: Anbefalingen vil endre seg, etter erfaringer med BOTT:ØL i 2021]


Hvordan kan du sette opp autentisering av ditt API via Maskinporten, når du trenger å snakke med API utenfor din organisasjon.


### Bakgrunn


Maskinporten kan brukes til sikker autentisering mot API på tvers av organisasjoner.


Når man bruker maskinporten autentiserer man seg først mot maskinporten med et sertifikat. Som svar får man et aksess token, som igjen brukes til autorisasjon i API Gatewayen


### Forutsetninger


Det forutsettes at organisajsonen din er registrert som bruker av maskinporten og har fått opprettet et prefix.


 


### Registrer API i Maskinporten


Først må APIet registreres i maskinporten. Da opprettes det et scope . Et scope kan brukes til å gi tilganger til ressurser i et eller flere API. Det anbefales å ikke bruke samme scope for å gi tilgang til ulike API.


I tillegg må de organisasjonene som skal få tilgang til APIet bli gitt tilgang. Dette kan gjøres både før og etter at APIet er registrert i API Gateway


 


### Registrer APIet


Om det ikke allerede er registrert. Om det ikke er gjort allerede er det [veiledning her.](/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api) Kom tilbake til dette siden når det skal opprettes planer


 


Opprett plan med sikret med JWT


Et aksess token er en type token som kalles Java Web Token, forkortet JWT ( uttales jot eller jåt.)


Opprett en ny plan ved å gå til APIet, velg Plans og trykk på +-tegnet


![webside for å opprette planer](/datadeling/img/image-20200928124644-1.png)


Skriv inn navn og en beskrivelse av planen. Gå til neste side


På siden for secutiry vegl JWT som security type


 


![](/datadeling/img/image-20201012173900-1.png)


 


I menyen for **Signature** la RS256 være valgt (det er eneste som støttes av maskinporten p.t.)


I menyen **JWKS Resolver**, velg JWKS\_URL


I **Resolver parameter** skriv eller lim inn URL hvor API Gatewayen kan finne maskinportens offentiig sertifikat. I produksjon er dette https://maskinporten.no/jwk , i test er det https://ver2.maskinporten.no/jwk eller https://ver1.maskinporten.no/jwk , alt etter hvilket test-miljø man benytter


Om du vil kunne bruke informasjon fra tokenet til flere sjekker og / eller i policy-er, huk av for **Extract JWT Claims**.


Det er god praksis å sjekke autorisasjonen som er gitt både i API-gateway og i selve APIet. Med mindre du ikke stoler på APIet eller det er for testing, lar du **Propagate Authorization Header** være huket av. Aksess-tokenet blir da sendt til backend-APIet, og samme eller mer grundig sjekk av tokenet foretas der. Det vil og forhindre urettmessig tilgang til APIet dersom man spør backend-APIet direkte uten å gå via gateway-en


**User claim** fungerer ikke p.t. med maskinporten


**Additional selection rules.** Her kan det bli litt komplisert. Har kan man legge inn flere regler for å være sikker på at riktig plan blir valgt. Om APIet kun skal brukes av et scope kan du legge inn en sjekk av scope her. Er man sikker på at tokenet kun vil inneholde dette scopet, bruk f.eks.



```

#context.attributes['jwt'].claims['scope'] matches '^org:test$'
```

om man vil tillate at tokenet har andre scope i tilegg til det som gir tilgang til ditt API kan man bruke



```

#context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test(\\s[a-z:\\s])?$'
```

 


Et litt mer avansert eksempel, man har et API hvor man kan bli tildelt enten lese og skriverettigheter, eller kun skirve eller kun lese-rettighet


Da kan man ha en plan for åde lese og skrive-tilgang med denne ekstra regelen



```

#context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test(\\s[a-z:\\s])?$' && #context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test.write(\\s[a-z:\\s])?$'
```

on for kun skirvetilgang:



```

#context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test.write(\\s[a-z:\\s])?$'
```

og kun lese-tilgang



```

#context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test(\\s[a-z:\\s])?$'
```

 


Merk at i dette eksempelet betyr rekkefølgen noe. Planen som krever 2 scope må være først i lista over tilgjengelige planer. På siden med oversikt over planer kan rekkefølgen endres


 


Sjekke for flere grants


Det kan være tilfeller hvor man vil ha en plan per organisasjon. Den anbefales ikke om det er mange organisasjone som skal ha tilgang, men det er mulig og om det er et endelig lite antall er det overkommelig. For å legge inn reglel som slår inn om det er riktig organisasjonsnumer og riktig scope:



```

#context.attributes['jwt'].claims['consumer']['ID'] == '0192:987654321' && #context.attributes['jwt'].claims['scope'] matches '^([a-z:\\s]\\s)?org:test(\\s[a-z:\\s])?$'
```

 


Når alt er fyllt inn, trykk next.


For å legge inn rate-limit, kvoter, svartlisting, hvitelisting eller policy, , se [veiledningen for planer](/docs/datadeling/veiledere/api-manager/opprette-plan)


Husk å publisere planen før den kan brukes


 


### Registrere applikasjon


For at en applikasjon skal kunne bruke APIet må applikasjonen registreres både i maskinporten og i Gravitee. Først må applikasjonen registreres som en integrasjon i maskinporten og så må den [registreres i Gravitee](/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang) med den client\_id som ble tildelt i maskinporten. Deretter kan applikasjonen søke om tilgang til riktig plan og API. Når tilgang er tildelt kan APIet benyttes, man bruker ikke API-nøkkel og trenger ikke hente ut denne.