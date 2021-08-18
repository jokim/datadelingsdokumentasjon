---
description: "I Gravitee API manager finnes det ferdig opprettede roller. Det er ogs\xE5\
  \ mulig \xE5 opprette egne roller"
title: Rettigheter, roller og grupper i API Manager
---

# Rettigheter, roller og grupper i API Manager

I Gravitee API manager finnes det ferdig opprettede roller. Det er også mulig å opprette egne roller

Roller i API Managemnt kan gi rettighheter til enten management, portale, et API eller en applikasjon
 

 


### Roller for API Management


Det er 3 roller som kommer med per default:


* Admin
* API\_PUBLISHER
* USER


Alle som logger inn får rollen user om de ikke har fått andre roler ekspisitt. Med denne rollen kan du registrere applikasjoner og be om tilgang til APIene man ser. Andres APIer og applikasjone får man ikke sett med mindre det er tildelt rettgiheter til å se dem


Admin-rollen gir alle rettigheter i clusteret og kun de som absolutt trenger det bør få denne. Den mest vanlige oppgaven til en administrator er å tildele rollen API\_publisher til de som trenger denne.


API\_publisher er en rolle som gir tilgang til å registrere API i API Manager. Kontakt administrator ved din institusjon for å få denne rollen.


 


### Tildele roller


For å tildele en bruker en rolle må brukeren ha vært logget inn i API Management minst en gang.


For å tildele en management-rolle kan det gjøres på en av to måter: enten


* Gå til settings -\> roles og trykk på personer-ikonet til rollen som skal tildeles. Klikk på plusstegnet nede til høyre, søk deretter opp og velg personen, trykk Add
*   Gå til settings -\> Users. Søk opp personen og klikk på denne. Velg rolle, f.eks. endre fra USER til API\_PUBLISHER som "Management role"


### Roller i et API eller en applikasjon


For API finnes det 4 ferdige roller:


* OWNER
* PRIMARY\_OWNER
* REVIEWER
* USER


Og for applikasjon:


* OWNER
* PRIMARY\_OWNER
* USER


Man får rollen primary owner på alle APIer eller applikasjoner man oppretter selv. Alle APIer eller applikasjoner må ha en primary owner.


Owner og Primary owner har alle rettighetene til et API. Det er de som godkjenner tilgang. Tilsvarende for applikasjoner, alle med rollen owner og primary owner kan søke om tilgang til API. For utvikler-team hvor flere personer utvikler de samme APIene og / eller applikasjonene kan det være lurt å opprett en gruppe og gi owner-rollen til denne. Det gjør fremtidig vedlikehold lettere, da man legger til eller fjerner medlemmene fra en gruppe i stedet for å gå inn på hver enkelt API/applikasjon.


### Tildele rettigheter på et API eller en applikasjonen for enkeltbruker


En eier kan tildele rettigheter til en person eller en gruppe. Naviger til det akutelle APIet eller applikasjonen, gå til Memebers under "User and group access".


Trykk på + tegnet, søk opp riktig bruker, velg rolle og trykk på ADD


![](/datadeling/img/image-20201030150117-1.png)


 


### Grupper


Det er også mulig å opprette grupper i API manager. Det kanf.eks. være en gruppe for et utviklerteam. Man må være administrator for å opprette en gruppe, men administror kan gjøre en eller flere medlemmer til eier


#### Bruksanvisning for å opprett en gruppe


Gå til Setting -\> Groups og trykk på +-tegnet


![](/datadeling/img/image-20201001150026-1.png)


 


Skriv inn navn på gruppa. Trykk på +-tegnet nede til høre for å legge til medlemmer.


Om du oppretter en gruppe på vegne av andre vil man typisk legge til den som vil ha gruppe, legger til den personen og velger at de skal være group admin. Personen som skal bruke gruppa kan da gjøre endre endringer, slik som å legge til flere medlemmer eller knytte gruppe til APIer eller applikasjoner. Huk av for "Allows invitation via user search" slik at gruppe-administratoren kan legge til medlemmer på en enkel måte.


System-administratorere bør også vurdere om "Allows invitation via user search" og "Allows the group admin to change the application role" skal være valgt eller ikke