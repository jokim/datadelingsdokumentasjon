---
author:
- Einar Jerpseth
title: Provisjonering
---

# Provisjonering

Programvare som bygger en brukerkonto/-profil under første innlogging kalles gjerne *just in time provisjonering*(JIT).


For moderne tjenester benyttes gjerne teknologier som billetteknologier som OpenID Connect (OIDC) og SAML (informasjonen programvaren trenger for bygge brukerprofilen ligger i billetten(adgangstegnet) fra innloggingstjenesten (som FEIDE), eller informasjon i billetten brukes for å finne mer informasjon om identiteten/entiteten i et oppslagsverk, f.eks. en web service. Til dette kan tjenesten f.eks. benytte teknologien Oauth.


Integrasjonsmessig kan JIT synes fordelsaktig, men også her er det fallgruver. F.eks. er det ikke sjelden at JIT tjenester bare bygger en veldig tynn profil, og at brukeren manuelt må registrere resten av sine data. Det er ofte svært begrenset med informasjon som ligger i en billett.


Det er ikke sjelden at flere provisjoneringsmetoder benyttes i samme IT-tjeneste, f.eks. at rapportdata synkroniseres batch, mens brukerdata (f.eks. adresse eller telefonnummer) oppdateres umiddelbart (når det skiftes i en tjeneste til alle affekterte tjenester). For eldre typer teknologi, det vi gerne kaller legacy-teknologier, benyttes gjerne katalogtjenester som AD eller LDAP i stedet.