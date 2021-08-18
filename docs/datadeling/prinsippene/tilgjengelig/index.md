---
description: "Autoritative data skal tilbys gjennom \xE5pne grensesnitt."
slug: /datadeling/prinsippene/tilgjengelig/
title: Tilgjengelig
---

# Tilgjengelig

Autoritative data skal tilbys gjennom åpne grensesnitt.

Eier har ansvar for at data som flere har behov for tilgjengeliggjøres for virksomheten. "Åpne grensesnitt" betyr her at det skal velges en bransjestandard og leverandøruavhengig teknologi. For tiden er Web Services det teknologisk foretrukne valget av grensesnitt.


Eier er også ansvarlig for at delte data er komplette og riktig formatert, og at oppetid og responstid er tilpasset behovet.


Eier er ansvarlig for å tilgjengeliggjøre sine autoritative data når det finnes planer for bruk av disse, men ikke fra dag én. Fra dag én skal det derimot være dokumentert hvilke grove kategorier av data systemet er autoritativt for, slik at man unngår å komme i en situasjon hvor det anskaffes et annet system som produserer til forveksling like data.


### Konsekvens


* Det er eiers plikt å tilgjengeliggjøre sine data, og foretrukket teknologi er Web Service. Kommer ikke systemet med egne API-er, eller disse er ufullstendige, må anskaffer påregne kostnader for å få utviklet Web Service.
* Eier er ansvarlig for dataenes kvalitative innhold. Delte data må kunne behandles maskinelt, det er derfor essensielt at datakvaliteten er pålitelig. Dette betyr at det stilles krav til eier om at data er komplett og riktig formatert.
* Eier er ansvarlig for at å sørge for et nivå av tilgjengelighet som er tilpasset behovet. Dette betyr at det stilles krav til eier om responstid og oppetid.
* Eier er ikke pliktig til å lage ferdige, spesialtilpassede uttrekk med henhold til konsumentens ønsker, men er ansvarlig for å tilby alle delte data i funksjonelle uttrekk.
* Eier står fritt til å gjøre arbeidet selv eller sette det bort til tredjepart. Tredjepart kan både være interne ressurser i sektoren og kommersielle aktører.
* Tjenester og systemer skal kun tilby data de er autoritative for. Unntaket for dette er typiske nøkler eller ID-er man benytter for å kunne identifisere entiteter (f.eks, fødselsnumre, brukernavn, gruppe-ID-er, mm.).
* Eier er ansvarlig for å forklare hvordan dataene skal tolkes med tanke på til innhold (semantikk, semantiske metadata) i sitt system. Det er foretrukket at dataens semantikk blir i størst mulig grad bevart, men om konsument benytter dataene i en kontekst som endrer dataens semantiske innhold, står konsument ansvarlig for dataens innhold i sin tjeneste.


### Se også


* Dette prinsippet følger [Digitaliseringsdirektoratets arkitekturprinsipp 4: Del og gjenbruk data](https://www.digdir.no/digitalisering-og-samordning/prinsipp-4-del-og-gjenbruk-data/1061), spesielt:
	+ Prinsipp 4.2: Tilby data i tråd med regjeringens «[Retningslinjer ved tilgjengeliggjøring av offentlige data](https://www.regjeringen.no/no/dokumenter/retningslinjer-ved-tilgjengeliggjoring-av-offentlige-data/id2536870/)».
	+ Prinsipp 4.3: Gjenbruk data fra autoritative kilder. Bruk kopier kun der det er nødvendig, og sørg for at disse er oppdaterte.
	+ Prinsipp 4.5: Unngå innlåsing av data i systemer med egne formater.