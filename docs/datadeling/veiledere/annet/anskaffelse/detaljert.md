---
description: "Som systemeier, prosjektleder, innkj\xF8per og\_applikasjonsforvalter\
  \ er det flere aspekter ved integrasjonsarktitekturen man b\xF8r tenke\_gjennom\
  \ f\xF8r produkt eller leverand\xF8r velges. Her diskuteres punkter ved integrasjoner\
  \ som er verdt \xE5 ta med seg."
title: Vurderinger ved anskaffelse av IT-tjenester og -systemer
---

# Vurderinger ved anskaffelse av IT-tjenester og -systemer

Som systemeier, prosjektleder, innkjøper og applikasjonsforvalter er det flere aspekter ved integrasjonsarktitekturen man bør tenke gjennom før produkt eller leverandør velges. Her diskuteres punkter ved integrasjoner som er verdt å ta med seg.


## Moderne og gammeldags programvare


Det viktigste først: Når man kjøper ferdig programvare, såkalt hyllevare, må man fall aldri for fristelsen for å kjøpe tjenester for å tilpasse programvaren til organisasjonen. Dette er alltid det dyreste valget. Disse tilpasningene vil medføre store merkostnader ved hver endring. Tilpass i stedet organisasjonens prosesser etter programvaren.


Når du som systemeier anskaffer programvare, så er det gjerne programvare en bruker, et menneske, skal sitte å jobbe i. Med integrasjonsøyne er det da i hovedsak fire forhold som må vurderes:


### 1. Provisjonering


At programvaren på forhånd får informasjon om sine brukere (eller andre ressurser, som rom). Nesten alle kjøpte webapplikasjoner med brukerinnlogging havner i denne kategorien, sammen med andre, som FS eller adgangskortsystemet. Vi er opptatt av om tjenesten kan oppdateres i sanntid eller ikke. Her snakker vi da om den kan få eller avgi informasjon fra/til andre IT-tjenester kontinuerlig eller periodisk. Periodisk (typisk oppdatering en gang i døgnet) kaller vi for batch. Provisjonering kan også skje manuelt ved at man taster inn navn, adresse eller lignende


[Les mer om provisjonering her.](/docs/datadeling/veiledere/annet/anskaffelse/provisjonering)


Programvare som bygger en brukerkonto/-profil under første innlogging kalles gjerne "just in time provisjonering" (JIT). For moderne tjenester benyttes gjerne teknologier som billetteknologier som OpenID Connect (OIDC) og SAML. Informasjonen programvaren trenger for bygge brukerprofilen ligger i billetten (adgangstegnet) fra innloggingstjenesten (som FEIDE), eller informasjon i billetten brukes for å finne mer informasjon om identiteten/entiteten i et oppslagsverk, f.eks. en web service. Til dette kan tjenesten f.eks. benytte teknologien Oauth.


Integrasjonsmessig kan JIT synes fordelsaktig, men også her er det fallgruver. For eksempel er det ikke sjelden at JIT-tjenester bare bygger en veldig tynn profil, og at brukeren manuelt må registrere resten av sine data. Det er ofte svært begrenset med informasjon som ligger i en billett. Det er ikke sjelden at flere provisjoneringsmetoder benyttes i samme IT-tjeneste, som at rapportdata synkroniseres batch, mens brukerdata (som adresse eller telefonnummer) oppdateres umiddelbart (når det skiftes i en tjeneste til alle affekterte tjenester). For eldre typer teknologi, det vi gjerne kaller legacy-teknologier, benyttes gjerne katalogtjenester som AD eller LDAP i stedet.


### 2. Integrasjonsteknologi


Filoverføringer og databasespørringer vil hovedsak alltid regnes som gammeldags ("legacy"), men web service er ikke nok i seg selv. Vanligvis foretrekker vi en retning innen web services som kalles RESTful. Denne retning har sin styrke i å være intuitiv, men kan lete seg frem til data man trenger, og behøver liten eller ingen kunnskap om kommandoord eller argumenter.


TODO: Oppdater dette etter at "utforming av API" er klar.


[Les mer om integrasjonsteknologi](/docs/datadeling/veiledere/annet/anskaffelse/integrasjonsteknologi)


### 3. Galvanisk skille


Et tredje kriterie man kan rette seg etter for å bedømme hvor moderne en IT-tjeneste/programvare er, er om man gjør en innlogging i operativsystemet, eller i applikasjonen. Det om operativsystemet vet hvem du er eller ikke, kaller vi et galvanisk skille.


Forenklet sagt: Styr unna tjenester som gjør innlogging i operativsystemet.


[Les mer om galvanisk skille](/docs/datadeling/veiledere/annet/anskaffelse/galvanisk-skille)


### 4. Trelagsarkitektur


Trelagsarkitektur innbærer at man kan benytte (helst valgfri) funksjonalitet fra en IT-tjeneste i en annen, f.eks. For Ansatte eller Mine Studier.


[Les mer om trelagsarkitektur](/docs/datadeling/veiledere/annet/anskaffelse/trelagsarkitektur)


Oppsummert så gir dette en matrise med noen stikkord som kan si oss noe om hvor moderne en applikasjon er, spesielt med henhold til om den er tenkt for store brukermasser med homogene behov. De fleste applikasjoner har trekk fra både raden 'Moderne' og raden 'Gammeldags'




|  | Provisjonert | API | Autentisering | Applikasjons-


oppbygning

 |
| --- | --- | --- | --- | --- |
| Moderne | Sanntidsoppdatering | RESTful WS og meldingskø | SAML / OIDC / Oauth | Løst koblet trelagsarkitektur (med hendelser) |
| Gammeldags | Batch (eller manuell) | SOAP, filoverføring, systembruker, SQL, RSS, "REST-rpc" | Benytter katalogtjenester som AD og LDAP til autentisering og/eller autorisasjon | To lagsarkitektur, eller programvare med tette koblinger |


## Web Service for Dummies


Web Services (WS) er en type API (integrasjonsgrensesnitt). Det er noe programvare benytter for å sende informasjon mellom seg (og ikke direkte mellom bruker og programvare). Vi som driver med integrasjonsarkitektur liker altså WS. WS er de facto standard for utveksling av informasjon på internett i dag, og tilbyr det nyeste innen sikkerhet og funksjonalitet.


Som nevnt er web service en sekkebetegnelse. Så når man vurderer programvare er det ikke nok at leverandøren forsikrer at programvaren har web services. Det kan ennå være mange hindringer i veien: Lisenser, dokumentasjon, spesialkompetanse, proprietære formater osv. Vi ser stadig WS-er utformet i politisk øyemed. Selgeren reklamerer med WS, men den viser seg å bare være pynt for å sikre et salg.


[Les mer om Web Services](/docs/datadeling/veiledere/annet/anskaffelse/webservicefordummies)
## Sanntidsoppdatering



Det finnes flere sanntidsteknologier, men den vi har valgt i UH:IntArk bruker Meldingskø (MQ). Illustrasjonen under viser informasjonsflyten. Teknisk implementasjon krever langt flere komponenter.



![](/datadeling/img/ia-diamond.jpg)
En hendelse skjer i kildesystemet (produsent). Produsenten sender en melding til meldingskøen. Der lagres den i en kø spesiell for hver konsument. I meldingen er det en internettadresse til hvor informasjonsobjektet er å finne i en WS. Konsumenten har en liten klient som lytter på meldingskøen. Konsumenten avgjør om meldingen har relevans for seg. Den henter meldingen og går og finner informasjonsobjektet i WS. Den sjekker så med sin eksisterende informasjon om hva som er endret og oppdaterer egen informasjon.


Med meldingskø kan mange konsumenter få den samme meldingen. Alle som har en meldingskø kan få oppdatert sine data umiddelbart, når data endres i datakilden. Meldingskøen holder (for hver kø) på meldingen til køens konsument har hentet meldingen. Verdien til meldingskøer er altså lett å se: Alle IT-tjenester (som benytter tjenesten) vil ha konsistente data umiddelbart.


[Les mer om sanntidsoppdatering](/docs/datadeling/veiledere/annet/anskaffelse/sanntidsoppdatering)


## Masterdata, delte data og verdikjeder


Et spørsmål som reiser seg når man forteller om meldingskø er om ikke da man kan skifte sine data i et hvilket som helst system, og så skal dette reflekteres i alle. Svaret på dette er at denne kompleksiteten klarer vi ikke håndtere. Derimot kan man gjøre det fra et hvilket som helst presentasjonslag (som mobil-app eller nettleser) så lenge de benytter samme datalager i bakkant. For å klare håndtere kompleksiteten må en IT-tjeneste være autoritativ. Det er en bestemmelse som gjøres utenfor IT. Man bestemmer at dersom data ikke er like i to datakilder, er det den ene kilden som gjelder (uavhengig av hvor data var endret sist).


Hvilke datakilder som er autoritative for hvilke data kan variere, men det må være bestemt på forhånd. De data en IT-tjeneste er autoritative for, kalles autoritative data. Man skal helst hente data fra autoritativ kilde, men dersom dette ikke er hensiktsmessig, skal dataene ikke endres på veien. Typiske eksempler er programvare som henter data fra katalogtjenester som AD og LDAP. TBD: Her er Feide også ein tredjepart, som i system-til-system-integrasjonar er fraråda, men for sluttbrukarintegrasjonar bør vi kanskje omformulere oss.


Ved anskaffelser må det være tydelig på forhånd hvilke data tjenesten som anskaffes skal være autoritativ for, og hvilke data som skal hentes fra andre kilder. De fleste IT-tjenester har langt mer autoritative data enn det andre konsumentene har behov for. Ofte benyttes derfor termen masterdata om de data tjenesten er autoritativ for og deler med andre tjenester. Men hva man deler fra dag én, og hva som skal deles i fremtiden, er ikke alltid så lett å forutsi.


[Les mer om masterdata og verdikjeder](/docs/datadeling/veiledere/annet/anskaffelse/masterdata-verdikjeder)


## Retrofit


Hva om min foretrukne skytjeneste eller programvare ikke har MQ og RESTful services? Hva om den snakker SOAP og RSS? Benytter systembruker? I en del tilfelle kan du få noen til å lage en mikrotjeneste som oversetter. Vi gjør iblant grep for å få gammel teknologi til å fungere med ny teknologi. Et slikt grep kalles en retrofit. Dette gjør at vi har et større utvalg av IT-tjenester å velge mellom, men husk at en slik retrofit har en kostnad, både i utvikling og videre drift og forvaltning.