---
description: "I stedet for \xE5 registrere et API fra bunnen av kan du importere det\
  \ fra en fil eksportert fra en annen Gravitee-installasjon, eller definert i\
  \ Open Api Specification (tidligere swagger)."
title: Importer API-oppsett fra fil
---

# Importer API-oppsett fra fil

I stedet for å registrere et API fra bunnen av kan du importere det fra en fil eksportert fra en annen Gravitee-installasjon, eller definert i Open Api Specification (tidligere Swagger).

${resource:toc title=[Innholdsfortegnelse:]}

### Importere API

Trykk på pluss-tegnet på siden for APIs for å opprette et nytt API.

I stedet for å trykke på pilen for å lage API-et fra scratch, velg heller "Import". Her kan du enten velge å importere konfigurasjon fra en fil med "import file", eller fra en link med "Import from link". Velg type og lim inn URL til definisjonen. Velg hva du vil importere. Som oftest vil man ikke importere Subscriptions, men det er ofte tidsbesparende å importere planer. Der er lurt å gå gjennom disse før man oppretter API-et for å slett de du ikke trenger i det nye API-et.

Klikk på "IMPORT" for å fullføre.

[![Lag nytt API](/datadeling/img/image-20200928121338-1.png)](/datadeling/img/image-20200928121338-1.png)

API-definisjoner som er eksportert fra andre Gravitee-installasjoner blir gjerne importert korrekt. Open API/Swagger-filer må som oftest redigeres litt i etterkant.

Det viktigste er å fikse Entrypoint og sjekke at Backend er konfigurert riktig. Velg Proxy i den venstre sidemenyen, og deretter Entrypoints for å endre entrypoint. Ofte er dette /api/v1 eller lignende når man importerer fra Open API-definisjoner, og man vil gi et beskrivende navn.

Under Proxy og Endpoints, sjekk at URLen til backend er riktig. Autentisering mot backend er ofte ikke satt opp. Følge [denne veilederen](https://www.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/backend.html) for mer detaljert beskrivelse av oppsett for backend.
