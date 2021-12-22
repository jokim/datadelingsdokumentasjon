---
description: "Tekniske detaljer om bruk og oppsett av meldingsk\xF8.\n\n\nTODO: Oppdater\
  \ dette med Brom sine detaljer, og skriv om fr\xE5 UiO til bruk for UH-sektoren."
title: "Bruk av meldingsk\xF8"
---

# Bruk av meldingskø

Tekniske detaljer om bruk og oppsett av meldingskø.


TODO: Oppdater dette med Brom sine detaljer, og skriv om frå UiO til bruk for UH-sektoren.


## Hurtigstart


For de utålmodige:


1. Logg på [Selvbetjeningsportalen for RabbitMQ](/docs/datadeling/teknisk-plattform/brom), både om du skal registrere en tilbyder, eller be om tilgang. Se [instans-oversikten for lenker hos din institusjons](/docs/datadeling/teknisk-plattform/oversikt).
2. Hent ut tilkoblingsdetaljer til RabbitMQ frå selvbetjeningsportalen.
	* Anbefalt meldingsprotokoll: [AMQP 0.9.1](http://www.amqp.org/specification/0-9-1/amqp-org-download) på port 5671 (TLS)


Se [kode-eksempler](/docs/datadeling/kode/):


* Hvordan sende notifikasjoner (datatilbyder):  [publisering\_simpel.py](/datadeling/publisering_simpel.py)
* Hvordan motta notifikasjoner (konsument): [konsument\_simpel.py](/datadeling/konsument_simpel.py)


## Kjøreregler


Videre får du info om hvordan vi bruker [AMQP 0.9.1](http://www.amqp.org/specification/0-9-1/amqp-org-download) i IntArk. Se [RabbitMQ sin beskrivelse av begrepene](http://www.rabbitmq.com/tutorials/amqp-concepts.html) for mer utdypende informasjon.


### Vhosts


En *virtuell host,* eller *vhost*, er RabbitMQ sin måte å skille prosjekt eller tjenester fra hverandre. Alle entiteter - kø, binding og exchange - vil ligge i *én* *vhost*.


Formatet til *vhosts* likner på en filstruktur:



```

/no/\<HOST\>/\<PROSJEKT\>/[TEST|STAGING|PILOT]
```

For UiO, for eksempel, bruker vi primært bare en *vhost*:



```

/no/uio/integration

```

Testing, staging og annet skiller vi ut i egne *vhosts, for eksempel:*



```

/no/uio/integration/test

```

### Brukere



For å lese og skrive til meldingskøen, trenger du en *brukrr* i meldingskøen med de rette tilgangene. Vi skiller mellom brukere for avsendere (*publishers*) og mottakere (*consumers*). Avsendere skal ikke ha tilgang til køer, og mottakere skal ikke kunne skrive til *exchange-*entiteter. Mottakere har tilgang til å opprette køer og knytte dem til *exchange-*entiteter.


### Exchange


En *exchange* er et "postkontor" som en avsender sender notifikasjoner til. Notifikasjonene distribuerest (router) videre derfra, til de forskjellige *køene* som vil ha den relevante notifikasjonen.


På UiO bruker vi primært bare *en* exchange, "*ex\_messages"*, for **alle** avsendere. Denne ruter notifikasjonar med metoden ***Topic Exchange***.




### Kø


En kø (*queue)* er *én* konsument sin samling av notifikasjoner, eller hvilke typer notifikasjonar den vil ha (se *Binding*).  *RabbitMQ* videredistribuerer (router) de notifikasjonene køen vil ha. Konsumenten abonnerer da på denne køen.


Navnet til køene starter på "*q\_"*, og bør inneholde navnet på mottakeren eller tjenesten som bruker den. For eksempel "*q\_ad\_microservice"* eller "q\_cerebrum".


### Binding


Hver kø settes opp med hvilke typer notifikasjoner den vil ha - køen må være bundet (bound) til en *exchange* med en eller flere nøkler. For *topic exchange*, som "*ex\_messages"* er, går knytningen mot *topic.*


Administratorbrukeren i RabbitMQ setter opp dette for forhåndsdefinerte køer, rett etter at køen er opprettet. Mottaker kan også selv definere køen, men må da ha lesetilgang til *ex\_messages* og skrivetilgang til køen den vil binde.


For eksempel kan køen *q\_ad\_microservice* binde seg til *ex\_messages* med nøkkelen "*cerebrum.event.account.*"*. Dette gjør at alle notifikasjoner med topic som starter med *"cerebrum.event.account."* vil dukke opp i *q\_ad\_microservice*.


### Topic


Når *topic exchange* brukaes for å distribuere (route) notifikasjoner fra *exchange* til riktig kø*,* må avsender markere hver notifikasjon med en *message routing key (topic)*. RabbitMQ vil se på *topic* og videresende (*route*) notifikasjonen til de køene som har binding mot samme *topic.*


Strukturen til *message routing key (topic)*:


```

`kilde`.`type`.`objekt`.`hendelse`

```

der:







| kilde: | Navnet til avsenderen, for eksempel "cerebrum" |
| type: | Typen melding, for eksempel "event" |
| objekt: | Vanligvis hva entitetstype notifikasjonen/hendelsen gjelder for, for eksempel "account", "person", "group" eller "employee" |
| hendelse: | Hva har skjedd, for eksempel "add", "delete" eller "modify" |


## Notifikasjoner


hva finner du av innhold i notifikasjonene? Etter UiO sin integrasjonsarkitektur skal notifikasjoner være **tynne**, som betyr at de skal primært brukes til å informere om at **noe** har skjedd, for en gitt entitet, men forteller deg **ikke** mer om entiteten. Dette må du få ved å spørre kildesystemet.


Det er opp til hver tjeneste å definere formatet på notifikasjonene sine. Dette skal vere dokumentert hos hvert API, på [api.uio.no](https://api.uio.no).


For eksempel bruker Cerebrum og SAPUiO et notifikasjonsformat som er inspirert av [SCIM](http://www.simplecloud.info/) sitt [utkast til standard på et meldingsformat](https://tools.ietf.org/html/draft-hunt-idevent-scim-00), der vi bruker versjonen med minimalt med informasjon. Et eksempel på hvordan ei melding vil se ut, **omtrent**:



```

{
  // token identifier (unik id for meldingen)
  "jti": "4d3559ec67504aaba65d40b0363faad8",
  // endringer
  "eventUris": [
    "urn:ietf:params:event:SCIM:create"
  ],
  // timestamp
  "iat": 1458496404,
  // issuer
  "iss": "https://cerebrum-uio.uio.no",
  // audience (spreads/kontekst) - gjør det enklere å forkaste meldinger du ikke er interessert i
  "aud": [
   "AD\_account",
   "exchange\_acc@uio.no",
   "LDAP\_account"
  ],
  // URL til entitet (GET)
 **"sub": "https://cerebrum-ws.uio.no/v1/accounts/1234",**
  // Parametre til event - her: hvilke attributter hos objektet som er påviret - gjør det enklere å forkaste meldinger du ikke er interessert i
  "urn:ietf:params:event:SCIM:create":{
    "attributes":["id","name","userName","password","emails"],
  }
}

```

 


Andre system, som FS og TP, bruker et format som er avledet fra [JWT](https://jwt.io)-standarden. Et eksempel på en notifikasjon fra FS om at en person er oppdatert (routing key er i dette tilfelle *no.uio.fs.FS-prod.personer.update*)



```

{"sub": "personer/56154",
 "iss": "FS-prod",
 "iat": "1582344412462",
 "operation": "update",
 "jti": "35380ac0-247d-44b3-9be3-2f2dded049ee",
 "person\_id": "56154"}
```

Det kan og være lurt å ta en avgjørelse om hvordan du skal referere til ressurser i kildesystem. For eksempel er vi bundet til et spesielt domene i dette tilfellet:



```

{"sub": "https://api-waygate.uio.no/eksempeltjeneste/5"}
```

Mens følgende ikke er bundet til en spesifikk maskin:



```

{"sub": "/5",
 "iss": "eksempeltjeneste"}

```

Det smame kan du oppnå med en mer formalisert URN:



```

{"sub": "urn:eksempeltjeneste:5"}
```

I de to siste eksemplene har vi ikke inkludert informasjon om *hvor* en ressurs er lokalisert. Når du henter ressursen må du da velge å slå opp maskinnavnet. Erfaringsmessig letter dette arbeidet med å flytte tjenester mellom forskjellige miljø.


For nyutviklede system, bør du vurdere å bruke standariserte format, for eksempel [CloudEvents](https://cloudevents.io/).


## Mer info


* [RabbitMQ sin offisielle side](http://www.rabbitmq.com/)
* [Tutorials og kodeeksempler frå RabbitMQ](http://www.rabbitmq.com/getstarted.html)
* [RabbitMQ sin beskrivelse av begrepene i AMQP](http://www.rabbitmq.com/tutorials/amqp-concepts.html)
* Beskrivelse av meldingsprotokollen [AMQP 0.9.1](http://www.amqp.org/specification/0-9-1/amqp-org-download)
* [Meldingsformatet til SCIM](https://tools.ietf.org/html/draft-hunt-idevent-scim-00), som er utgangspunktet for mange av meldingene, som igjen baserer seg på [JWT](https://jwt.io/) ([RFC 7519](https://tools.ietf.org/html/rfc7519))