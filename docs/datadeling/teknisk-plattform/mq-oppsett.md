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
* Hvortan motta notifikasjoner (konsument): [konsument\_simpel.py](/datadeling/konsument_simpel.py)


## Kjøreregler


Videre får du info om hvordan vi bruker [AMQP 0.9.1](http://www.amqp.org/specification/0-9-1/amqp-org-download) i IntArk. Se [RabbitMQ si beskriving av begrepa](http://www.rabbitmq.com/tutorials/amqp-concepts.html) for mer utdypende informasjon.


### Vhosts


En *virtuell host,* eller *vhost*, er RabbitMQ sin måte å skilje prosjekt eller tenester frå kvarandre. Alle entiteter - kø, binding og exchange - vil ligge i *éin* *vhost*.


Formatet til *vhosts* liknar på ein filstruktur:



```

/no/\<HOST\>/\<PROSJEKT\>/[TEST|STAGING|PILOT]
```

For UiO, for eksempel, bruker vi primært berre ein *vhost*:



```

/no/uio/integration

```

Testing, staging og anna skiljer vi ut i eigne *vhosts, til dømes:*



```

/no/uio/integration/test

```

### Brukarar



For å lese og skrive til meldingskøa, treng du ein *brukar* i meldingskøa med dei rette tilgangane. Vi skiljer mellom brukarar for avsendarar (*publishers*) og mottakarar (*consumers*). Avsendarar skal ikkje ha tilgang til køer, og mottakarar skal ikkje kunne skrive til *exchange-*entiteter. Mottakarar har tilgang til å opprette køer og knytte dei til *exchange-*entiteter.


### Exchange


Ein *exchange* er eit "postkontor" som ein avsendar sender notifikasjonar til. Notifikasjonane distribuerast (router) vidare derfra, til dei forskjellige *køene* som vil ha den relevante notifkasjonen.


På UiO bruker vi primært berre *ein* exchange, "*ex\_messages"*, for **alle** avsendarar. Denne ruter notifikasjonar med metoden ***Topic Exchange***.




### Kø


Ei kø (*queue)* er *éin* konsument si samling av notifikasjonar, eller kva type notifikasjonar den vil ha (sjå *Binding*).  *RabbitMQ* vidaredistribuerer (router) dei notifikasjonane køa vil ha. Konsumenten abonnerer då på denne køa.


Navnet til køene starter på "*q\_"*, og bør inneholde navnet på mottakaren eller tenesten som bruker den. Til dømes "*q\_ad\_microservice"* eller "q\_cerebrum".


### Binding


Kvar kø settast opp med kva type notifikasjonar den vil ha - køa må vere bunden (bound) til ein *exchange* med ein eller fleire nøklar. For *topic exchange*, som "*ex\_messages"* er, går knyttinga mot *topic.*


Administratorbrukaren i RabbitMQ set opp dette for forhåndsdefinerte køer, rett etter at køa er oppretta. Mottakar kan også sjølv definere køa, men må då ha lesetilgang til *ex\_messages* og skrivetilgang til køa den vil binde.


Til dømes kan køa *q\_ad\_microservice* binde seg til *ex\_messages* med nøkkelen "*cerebrum.event.account.*"*. Dette gjer at alle notifikasjonar med topic som starter med *"cerebrum.event.account."* vil dukke opp i *q\_ad\_microservice*.


### Topic


Når *topic exchange* brukast for å distribuere (route) notifikasjonar frå *exchange* til riktig kø*,* må avsendar markere kvar notifikasjon med ein *message routing key (topic)*. RabbitMQ vil sjå på *topic* og vidaresende (*route*) notifikasjonen til dei køene som har binding mot samme *topic.*


Strukturen til *message routing key (topic)*:


```

`kilde`.`type`.`objekt`.`hending`

```

der:







| kilde: | Namnet til avsendaren, til dømes "cerebrum" |
| type: | Typen melding, til dømes "event" |
| objekt: | Vanlegvis kva entitetstype notifikasjonen/hendinga gjeld for, til dømes "account", "person", "group" eller "employee" |
| hending: | Kva har skjedd, til dømes "add", "delete" eller "modify" |


## Notifikasjonar


Kva finn du av innhald i notifikasjonane? Etter UiO sin integrasjonsarkitektur skal notifikasjonar vere **tynne**, som betyr at dei skal primært brukast til å informere om at **noko** har skjedd, for ein gitt entitet, men fortel deg **ikkje** meir om entiteten. Dette må du få ved å spørre kjeldesystemet.


Det er opp til kvar teneste å definere formatet på notifikasjonane sine. Dette skal vere dokumentert hos kvart API, på [api.uio.no](https://api.uio.no).


Til dømes bruker Cerebrum og SAPUiO eit notifikasjonssformat som er inspirert av [SCIM](http://www.simplecloud.info/) sitt [utkast til standard på eit meldingsformat](https://tools.ietf.org/html/draft-hunt-idevent-scim-00), der vi bruker versjonen med minimalt med informasjon. Døme på korleis ei melding vil sjå ut, **omtrent**:



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
  // audience (spreads/kontekst) - gjer det enklare å forkaste meldingar du ikkje er interessert i
  "aud": [
   "AD\_account",
   "exchange\_acc@uio.no",
   "LDAP\_account"
  ],
  // URL til entitet (GET)
 **"sub": "https://cerebrum-ws.uio.no/v1/accounts/1234",**
  // Parametre til event - her: kva attributtar hos objektet som er påvirka - gjer det enklare å forkaste meldingar du ikkje er interessert i
  "urn:ietf:params:event:SCIM:create":{
    "attributes":["id","name","userName","password","emails"],
  }
}

```

 


Andre system, som FS og TP brukar, eit format som er avleda frå [JWT](https://jwt.io)-standarden. Eit døme på ein notifikasjon frå FS om at ein person er oppdatert (routing key er i dette tilfelle *no.uio.fs.FS-prod.personer.update*)



```

{"sub": "personer/56154",
 "iss": "FS-prod",
 "iat": "1582344412462",
 "operation": "update",
 "jti": "35380ac0-247d-44b3-9be3-2f2dded049ee",
 "person\_id": "56154"}
```

Det kan og vere lurt å ta ei avgjersle om korleis du skal referere til ressursar i kjeldesystem. Til dømes er me bunden til eit spesielt domene i dette tilfellet:



```

{"sub": "https://api-waygate.uio.no/eksempeltjeneste/5"}
```

Mens føljande ikkje er bunden til ei spesifikk maskin:



```

{"sub": "/5",
 "iss": "eksempeltjeneste"}

```

Det same kan du oppnå med ein meir formalisert URN:



```

{"sub": "urn:eksempeltjeneste:5"}
```

I dei to siste døma har me ikkje inkludert informasjon om *kor* ei ressurs er lokalisert. Når du hentar ressursen må du då velje å slå opp maskinnavnet. Erfaringsmessig lettar dette arbeidet med å flytte tenester mellom forskjellige miljø.


For nyutvikla system, bør du vurdera å bruka standariserte format, til dømes [CloudEvents](https://cloudevents.io/).


## Meir info


* [RabbitMQ si offisielle side](http://www.rabbitmq.com/)
* [Tutorials og kodedømer frå RabbitMQ](http://www.rabbitmq.com/getstarted.html)
* [RabbitMQ si beskriving av begrepa i AMQP](http://www.rabbitmq.com/tutorials/amqp-concepts.html)
* Beskrivelse av meldingsprotokollen [AMQP 0.9.1](http://www.amqp.org/specification/0-9-1/amqp-org-download)
* [Meldingsformatet til SCIM](https://tools.ietf.org/html/draft-hunt-idevent-scim-00), som er utgangspunktet for mange av meldingene, som igjen baserer seg på [JWT](https://jwt.io/) ([RFC 7519](https://tools.ietf.org/html/rfc7519))