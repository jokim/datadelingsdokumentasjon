---
description: Oversikt over tjenester og tilkoblinger i IntArks tekniske plattform.
title: Oversikt over den tekniske plattformen
---

# Oversikt over den tekniske plattformen

Oversikt over tjenester og tilkoblinger i IntArks tekniske plattform.

## Per institusjon




| Institusjon | API manager | API gateway | Meldingskø | Selvbetjening for meldinger |
| --- | --- | --- | --- | --- |
| NTNU | <https://api-ntnu.intark.uh-it.no> | <https://gw-ntnu.intark.uh-it.no> | amqps://mq-ntnu.intark.uh-it.no | <https://brom-ntnu.intark.uh-it.no/> |
| UNIT | <https://api-unit.intark.uh-it.no> | <https://gw-unit.intark.uh-it.no> | amqps://mq-unit.intark.uh-it.no |  |
| Universitetet i Bergen | <https://api-uib.intark.uh-it.no> | <https://gw-uib.intark.uh-it.no> | amqps://mq-uib.intark.uh-it.no | <https://brom-uib.intark.uh-it.no/> |
| Universitetet i Oslo | <https://api-uio.intark.uh-it.no> | <https://gw-uio.intark.uh-it.no> | amqps://mq-uio.intark.uh-it.no | <https://brom-uio.intark.uh-it.no/> |
| Universitetet i Tromø | <https://api-uit.intark.uh-it.no> | <https://gw-uit.intark.uh-it.no> | amqps://mq-uit.intark.uh-it.no | <https://brom-uit.intark.uh-it.no/> |
| OsloMet | <https://api-oslomet.intark.uh-it.no> | <https://gw-oslomet.intark.uh-it.no> | amqps://mq-oslomet.intark.uh-it.no | <https://brom-oslomet.intark.uh-it.no/> |
| HiMolde | <https://api-himolde.intark.uh-it.no> | <https://gw-himolde.intark.uh-it.no> | amqps://mq-himolde.intark.uh-it.no | <https://brom-himolde.intark.uh-it.no/> |


## RabbitMQ


* Protokoll: AMQPS (AMQP med kryptering)
* Port: 5671
* TLS med SNI er påkrevd
* URL for brukergrensesnittet er på formen "https://mq-mgmt-INSTITUSJON.CLUSTERFARGE-apps.intark.uh-it.no/", der INSTITUSJON er for eksempel "uio", "ntnu", "oslomet" eller "himolde", og CLUSTERFARGE er for eksempel "yellow" eller "blue", avhengig av hvilket cluster instansen kjører på. Instansen vil bytte cluster ved oppgraderinger, så dette vil endres.


## Gravitee


* HTTPS er påkrevd


## Annet


* Se mer detaljer i [teknisk detaljer om IntArk-plattformen](/docs/datadeling/teknisk-plattform/teknisk).
* Teknisk plattform kjører i NREC. Se [oversikt over NREC sine subnett](https://iaas.readthedocs.io/team/installation/ip.html).