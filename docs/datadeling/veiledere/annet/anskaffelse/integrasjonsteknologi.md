---
title: Integrasjonsteknologi
---

# Integrasjonsteknologi

Generelt deles WS i to hovedklasser: REST og SOAP. Det kan være moderne applikasjoner som benytter SOAP, og til bruk "innad i sin egen verden" har SOAP sine fordeler.


Mellom IT-tjenester derimot, ansees det for å være legacy. SOAP er lite intuitivt, ofte proprietært, har høy inngangsterskel og liten gjenbruksverdi. [Heller ikke REST er uten lyter, og dette har vi samlet i eget dokument](/docs/datadeling/veiledere/annet/anskaffelse/webservicefordummies).


Forøvrig hører det til unntakene at WS utløser sanntidsoppdateringer av seg selv. Til dette kreves annen teknologi. I UH:IntArk benytter vi meldingskø (MQ).