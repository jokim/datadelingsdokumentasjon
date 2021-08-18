---
author:
- Einar Jerpseth
title: Trelagsarkitektur
---

# Trelagsarkitektur

* Presentasjonslaget, der dataene vises og arbeides med, gjør ikke annet enn å vise informasjonen og ta i mot input. Eksempelvis kan man tenke seg bankens lånekalkulator, som tar hensyn til takst, inntekt, egenkapital, alder osv., og uavhengig om du benytter en mobilapp, nettleser eller annet, så sendes tallene inn til den samme bakenforliggende tjenesten for utregning. Svaret sendes så tilbake til brukeren for videre prosessering (f.eks. 'Godta tilbudet')
 ![](/datadeling/img/3-lags-arkitektur.jpg)


* Det at presentasjonslaget ikke kan skrive til vilkårlige felter i databasen gjør at man har kontroll over endringer. Hendelsene (som er nødvendige for sanntidsoppdateringer) fanges opp i det logiske laget. Man må ikke ha noe som sammenligner i flere databasetabeller om det er gjort endringer og om disse er gjort samtidig osv.
* Det at klienten bare kan gjøre definerte, standariserte oppgaver mot databasen gjør programvaren mer stabilt
* Begrepet 'trelagsarkitketur' er benyttet av forskjellige teknologier og betyr da ikke nødvendigvis det samme. Vi kaller det vi etterspør for 'løst koblet trelagsarkitektur' (dette i kontrast til f.eks. modellen MVC som er 'tett koblet trelagsarkitektur').