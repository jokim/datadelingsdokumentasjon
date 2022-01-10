---
author:
- Einar Jerpseth
title: Provisjonering
---

# Provisjonering

Programvare som bygger en brukerkonto/-profil under første innlogging kalles gjerne *just in time provisjonering* (JIT).

For moderne tjenester benyttes gjerne teknologier som billetteknologier, f. eks. OpenID Connect (OIDC) og SAML. Informasjonen programvaren trenger for bygge brukerprofilen ligger i billetten (adgangstegnet) fra innloggingstjenesten (FEIDE o.l.), i tillegg kan informasjon i billetten brukes for å finne mer informasjon om identiteten/entiteten i et oppslagsverk, f.eks. en web service. Til dette kan tjenesten f.eks. benytte teknologien OAuth.

Integrasjonsmessig kan JIT virke fordelaktig, men også her er det fallgruver. F.eks. skjer det ofte at JIT-tjenester bare bygger en veldig tynn profil, og at brukeren manuelt må registrere resten av sine data. Det er ofte svært begrenset med informasjon som ligger i en billett.

Ofte benyttes flere provisjoneringsmetoder i samme IT-tjeneste, f.eks. at rapportdata synkroniseres batch, mens brukerdata (f.eks. adresse eller telefonnummer) oppdateres umiddelbart (når det skiftes i en tjeneste til alle affekterte tjenester). For eldre typer teknologi, det vi gerne kaller legacy-teknologier, benyttes gjerne katalogtjenester som AD eller LDAP i stedet.
