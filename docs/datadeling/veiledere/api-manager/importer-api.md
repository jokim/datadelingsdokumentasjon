---
description: "I stedet for \xE5 registrere et API fra bunnen av kan du importere et\
  \ API fra en fil eksportert fra en annen Gravitee-installasjon, eller definert i\
  \ Open Api Specification (tidligere swagger)."
title: Importer API-oppsett fra fil
---

# Importer API-oppsett fra fil

I stedet for å registrere et API fra bunnen av kan du importere et API fra en fil eksportert fra en annen Gravitee-installasjon, eller definert i Open Api Specification (tidligere swagger).

{$resource:toc}


### Importere API


Trykk på + på API-siden for å opprette API


I stedet for å trykke på pilen for å lage fra scratch, velg *browse* for å velge filen som skal importeres, eller klikk på Import from link , velg type og lim inn URL til definisjonen. Velg hva du vil importere. Du vil som oftest ikke importere Subscriptions, men det er ofte tidsbesparende å importere planer, men gå gjennom disse og slett de du ikke vil ha


Klikk på Import for å importere


[![](/datadeling/img/image-20200928121338-1.png)](/datadeling/img/image-20200928121338-1.png)


 


API-definisjoner som er eksportert fra andre Gravitee-installasjoner blir som oftest importert korrekt. Open API/Swagger-filer må som oftest ha litt håndspåleggelse i etterkant.


Det viktigste å fikse er entrypoint og sjekke at backend er riktig. Velg Proxy og Entrypoints for å endre entrypoint. Ofte er dette /api/v1 eller lignende når man importerer fra Open API-definisjoner og man vil gi et beskrivende navn.


Under Proxy og Endpoints , sjekk at URLen til backend er riktig. [Autentisering mot backend](/docs/datadeling/veiledere/api-manager/backend) er ofte ikke satt opp.