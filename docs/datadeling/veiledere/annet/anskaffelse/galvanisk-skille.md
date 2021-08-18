---
author:
- Einar Jerpseth
title: Galvanisk skille
---

# Galvanisk skille

Det typiske eksemplet på en tjeneste med et galvanisk skille er en webapplikasjon, som f.eks. StudentWeb eller HR-portalen. Sikkerhetsmessig er galvanisk skille viktig. Dette da skillet medfører at settet med handlinger brukerne kan utføre er begrenset. Dette gjør tjenesten stabil og vanskelig å bryte seg inn i - da må man finne et sikkerhetshull i programkoden


* Applikasjoner med galvanisk skille, og som bruker FEIDE (eller annen SAML eller OIDC), gjør det er enkelt å samarbeide på tvers av institusjoner.
* Applikasjoner med galvanisk skille er nesten utelukkende generalist tjenester, brukermassene er store og antall operasjoner som skal utføres er standardiserte og begrensede
* Programvare som benytter innlogging i OS (typisk Kerberos og/eller LDAP) er det vanskelig å samarbeide om på tvers av virksomheter. Det er omfattende og man kan ikke få det fra tredjepart. Skifte av leverandør er nesten umulig.