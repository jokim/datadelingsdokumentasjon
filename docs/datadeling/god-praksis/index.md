---
slug: /datadeling/god-praksis/
title: God praksis i fellestjenesten for Datadeling
---

Gode praksiser og andre anbefalinger i bruken av fellestjenesten for
Datadeling.

Anbefalingene baserer seg på overordnede føringer, som referansearkitekturen
for datadeling i kunnskapssektoren, og hva som er utbredt teknologi i dag. Ny
teknologi kan gjøre at data kan deles på enda mer hensiktsmessige måter, som
vil føre til at anbefalinger på dette området vil bli oppdaterte. Sikt er
avhengig av tilbakemeldinger fra institusjonene for å holde dette best
oppdatert.


## Integrasjonsmønster

IntArk anbefaler noen integrasjonsmønstre. Hva du velger er veldig avhengig av dine behov.

For system-til-system-integrasjoner:

* Sanntidsoppdatert provisjonering: [Hendelsesbasert provisjonering](/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert)
* For tjenester som ikke ønsker egenlagring: [Backend for frontend](/docs/datadeling/god-praksis/integrasjonsmonster/datalager)
* For små tjenester med lave krav til oppdaterte data: [Fullstendig synkronisering](/docs/datadeling/god-praksis/integrasjonsmonster/gammeldags-batch)

## Utforming av API

Anbefalinger rundt API.

* [Design av API](/docs/datadeling/god-praksis/api-design)
* [Anbefalt bruk av Web Services](/docs/datadeling/god-praksis/bruk-av-webservice)
* TODO: Autentiseringsanbefalinger (headers, basic, oauth2 etc)
* TODO: Sikkerhet best practice (personvern, begrense endepunkt, caching, utlevering av data)

## Bruk av meldingskø

* [Hvordan designe dine notifikasjoner](/docs/datadeling/god-praksis/notifikasjonsdesign)
* TBD: Event streaming?

## Datakvalitet

* [Generelt om god datakvalitet](/docs/datadeling/god-praksis/datakvalitet)
* TODO: Informasjonsforvaltning
