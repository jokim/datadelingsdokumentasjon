---
description: Forklaring av konsepter som brukes i Gravitee.
title: Hvordan vi bruker Gravitee som API manager
---

# Hvordan vi bruker Gravitee som API manager

Forklaring av konsepter som brukes i Gravitee.

I Gravitee er Application, Plan og API sentrale begrep:


* **API** er tilbyderen
* **Application** er konsumenten
* **Plan** er et sett rettigheter og policies for et API


Et API kan ha en eller flere planer, og en applikasjon **abonnerer** på planer. En applikasjon kan abonnere på flere planer, fra ett eller flere API, som er det som styrer hva konsumenten får tilgang til.


![Bildet kan inneholde: gul, linje, tekst, diagram, parallell.](/datadeling/img/planer-og-api.png)


### Plans


En Plan inneholder hva du får tilgang til for et API. Det vanligste er å styre hvilke endepunkter du skal få tilgang til. Du kan også legge til policies i en plan, for eksempel sette på ekstra headers, eller rate-limiting.


## Se også


* [Veileder for å registrere et API](/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api)
* [Veileder for å opprette en Plan](/docs/datadeling/veiledere/api-manager/opprette-plan)
* Alle veiledere for API manager
* [Gravitee sin egen dokumentasjon](https://docs.gravitee.io/)