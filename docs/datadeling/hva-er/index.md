---
description: "Her finner du informasjon om hva universitets- og h\xF8gskolesektoren\
  \ sin integrasjonsarkitektur - UH:IntArk - er for noe."
slug: /datadeling/hva-er/
title: Hva er UH:IntArk (eller Datadelingsplattformen)
---

# Hva er UH:IntArk (eller Datadelingsplattformen)

Her finner du informasjon om hva universitets- og høgskolesektoren sin integrasjonsarkitektur - UH:IntArk - er for noe.

## Hva er UH:IntArk?


UH:IntArk er et sett med prinsipper, retningslinjer og anbefalinger for hvordan data skal gjøres tilgjengelig, og hvordan integrasjoner skal fungere i universitets- og høgskolesektoren. UH:IntArk gjelder både internt hos institusjoner, mellom institusjoner, og mot eksterne utenfor sektoren. Merk at UH:IntArk ikke bare handler om integrasjonene, men også om informasjonsforvaltningen.


 


[ TODO: Kort video som introduserer UH:IntArk ]


 


UH:IntArk er som trafikkreglene: IntArk setter krav til bilen, veien og hvordan du kjører, men du bestemmer selv hvilken bil og vei du kjører. I trafikken har du også støtteverktøy, for eksempel trafikklys og kollektivtransport, som hjelper deg å nå ditt mål - disse er i ulik grad valgfrie å bruke. UH-sektoren er som ett land - du må forholde deg til våre kjøreregler om du skal inn til oss, men vi ønsker å samkjøre oss med hvordan resten av verden gjør det.


## Hvorfor UH:IntArk?


Digitaliseringen krever mer datadeling og flere integrasjoner. En felles integrasjonsarkitektur i universitets- og høgskolesektoren gjør det enklere å dele data, både internt og mellom institusjoner.


UH:IntArk fokuserer på det som gir mest verdi for UH-sektoren som helhet. Hensikten er at forskjellige institusjoner, eller enheter internt hos en institusjon, kan gjøre endringer uavhengig av hverandre. Løsninger vil kunne samhandle uavhengig av leverandør og lokasjon. Prinsippene bidrar til at sektoren henger med i utviklingen og kan tilby tidsriktige løsninger av høy kvalitet.


## Hvordan henger UH:IntArk sammen?


TODO: Et nytt forsøk på å forklare IntArk:


1. **Målbildet:**
	* [Referansearkitektur for deling av data i høyere utdanning og forsking](https://unit-norge.github.io/unit-ra/main/B%C3%B8ker/Referansearkitektur%20for%20deling%20av%20data%20i%20h%C3%B8yere%20utdanning%20og%20forsking.html). (Ein referansearkitektur er "en veiledning til utforming av arkitekturer og løsninger, utfra erfaring eller som **målbilde**" - [ref DigDir](https://www.digdir.no/nasjonal-arkitektur/referansearkitekturer/2131)). Denne setter krav til kva IntArk må støtte.
2. Realiseringa, implementasjonen eller operasjonaliseringa:
	* "**Rammeverket**" (det vi ikkje skal starte med) (TODO: Er det dette som er IntArk?)
		+ **Styringsregler** - Overordna føringar du **må** følge for å følge IntArk. Desse er prøvd utbrodert lenger ned.
		+ **Anbefalingar, gode praksiser og retningslinjer** - Anbefalingar og anna du anbefalast å følge, for å få meir verdi ut av IntArk. Du **må** ikkje følge dette for å vere IntArk-kompatibel.
			- Retningslinjer gir uttrykk for hva vi anser som god praksis på nåværende tidspunkt. Faglige retningslinjer er i prinsippet anbefalinger og råd, og skal bygge på god, oppdatert faglig kunnskap. Retningslinjene er ment som et hjelpemiddel ved de avveininger tjenesteytere må gjøre for å oppnå forsvarlighet og god kvalitet i tjenesten.
			
			
			Retningslinjer er ikke bindende, men kan langt på vei være styrende for de valg som skal tas. Om du velger løsninger som i vesentlig grad avviker fra retningslinjene, bør du dokumentere dette og være forberedt på å begrunne ditt valg, og gi tilbakemelding til oss så vi får mulighet til å justere våre retningslinjer. (fritt omskreve etter [Helsebiblioteket si beskriving](https://www.helsebiblioteket.no/retningslinjer/lar/3-metode-i-retningslinjearbeidet/3.1-hva-er-faglige))
	* **Teknisk plattform** - verktøy som hjelper deg å følge IntArk.


![Bildet kan inneholde: rektangel, skråningen, font, materiell eiendom, elektrisk blå.](/datadeling/img/skjermbilde-2021-06-15-132909.png)


## Elementene i UH:IntArk


TODO: Endre dette når referansearkitekturen er på plass.


[![Elementene i IntArk: Øverst er førende (prinsipper og styringsmodell), som er realisert i neste nivå, som inneholder prosesser, retningslinjer og gode praksiser. Det nederste nivået er de tekniske elementene, som RabbitMQ og Gravitee, som støtter opp modellen.](/datadeling/img/intark-elementene.svg)](/datadeling/img/intark-elementene.svg)


En forklaring til de forskjellige nivåene i UH:IntArk:


1. **Førende - kjernen av UH:IntArk** (gul boks): Her finner du alt som resten av UH:IntArk bygger opp rundt, som [integrasjonsprinsippene](/docs/datadeling/prinsippene) og [styringsmodellen](/docs/datadeling/om/styringsmodellen) som ligger til grunn for resten.
2. **Funksjonelt** (blå boks): Dette nivået er realiseringen av UH:IntArk. Her finner du [prosessene](/docs/datadeling/hva-er/prosessene), [komponentene](/docs/datadeling/hva-er/komponenter) og [gode praksiser og anbefalinger](/docs/datadeling/god-praksis).
3. **Teknisk** (grønn boks): For å kunne ta i bruk UH:IntArk effektivt, tilbyr vi en [teknisk plattform](/docs/datadeling/teknisk-plattform) og andre tekniske verktøy for å gjøre datadeling enklere. Hvilke verktøy vi tilbyr vil endre seg mer etterhvert som verden og gode praksiser forandrer seg.


UH:IntArk **defineres** i forretningsnivået, **realiseres** i funksjonelt nivå, og **støttes opp** av teknisk nivå.


Se mer om [elementene i UH:IntArk](/docs/datadeling/hva-er/elementene), og [begrepene brukt i UH:IntArk](/docs/datadeling/begreper/).


## Mer informasjon


* [Om UH:IntArk](/docs/datadeling/om) gir mer bakgrunnsdetaljer om integrasjonsarkitekturen, inkludert føringer for rammeverket.
* [Referansearkitekturen for Datadeling](/docs/datadeling/om/referansearkitektur), som rammeverket bygger på.
* [Bakgrunnen for UH:IntArk](/docs/datadeling/om/bakgrunn) gir historikken til integrasjonsarkitekturen.
* [Styringsmodellen til UH:IntArk](/docs/datadeling/om/styringsmodellen) beskriver modellen som ligger bak oppsettet av UH:IntArk.