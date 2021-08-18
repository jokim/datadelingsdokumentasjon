---
description: "Om responsen fra et API inneholder informasjon som er beskyttelsesverdig\
  \ og som ikke alle konsumenter trenger kan man legge p\xE5 en enkel policy som fjerner\
  \ felt fra responsen.\n\n\nOm der er et eget-utviklet API er det bedre \xE5 endre\
  \ i APIet. Og selv om man ikke kan endre p\xE5 et API: er det\_ behov for st\xF8\
  rre endringer i responsen til et API er det oftest bedre \xE5 gj\xF8re dette utenfor\
  \ API manageren, feks. ved \xE5 ha en liten mikrotjeneste mellom API manager og\
  \ backend-APIet.\n\n\nMen mindre endringer, f.eks. for \xE5 fjerne enkelte felt,\
  \ er policy-en\_ JSON to JSON transformation en rask og enkel m\xE5te \xE5 filtere\
  \ bort innhold man vil beskytte"
title: Filtrere bort innhold i responsen fra et API
---

# Filtrere bort innhold i responsen fra et API

Om responsen fra et API inneholder informasjon som er beskyttelsesverdig og som ikke alle konsumenter trenger kan man legge på en enkel policy som fjerner felt fra responsen.


Om der er et eget-utviklet API er det bedre å endre i APIet. Og selv om man ikke kan endre på et API: er det  behov for større endringer i responsen til et API er det oftest bedre å gjøre dette utenfor API manageren, feks. ved å ha en liten mikrotjeneste mellom API manager og backend-APIet.


Men mindre endringer, f.eks. for å fjerne enkelte felt, er policy-en  JSON to JSON transformation en rask og enkel måte å filtere bort innhold man vil beskytte

Legg på policy-en JSON to JSON transformation. Om filtreringen skal gjelde alle som benytter APIet, [legg på policy som beskrevet her.](/docs/datadeling/veiledere/api-manager/legge-pa-enkel-policy)


Om filtreringen skal gjelde en enkel plan, slik at man kan ha en plan som gir all informasjon i svaret og en annen plan som kun gir åpen informasjon i svar, legg på policy-en i siste siden i veiviseren for å opprette/endre plan.


I nedtrekksmenyen hvor det står "Choose a policy", velg JSON to JSON transformation og trykk ADD


![Legge policy på plan i gravitee](/datadeling/img/image-20210126164247-1.png)  

 


 


![json to json policy](/datadeling/img/image-20210126175724-2.png)


I Scope, velg RESPONSE.


I feltet for JOLT Spesification spesifiserer du hva som skal endres i JSONen.


Denne policy-en benytter [open source-prosjektet JOLT](https://github.com/bazaarvoice/jolt)


Det finnes en [web-side hvor man kan teste dette her](http://jolt-demo.appspot.com)


 


 


Eksempel 1 på en respons fra et API



```

{
  "ansatt": {
    "id": "00102099",
    "brukerident": null,
    "dfoBrukerident": null,
    "eksternIdent": null,
    "fornavn": "Kjell-Arne",
    "etternavn": "Testesen",
    "fnr": "29078729585",
    "annenId": [
      null
    ],
    "fdato": "1987-07-29"
  }
}
```

For å fjerne nøkkelel "fnr" og dens verdi konfigurer vi policy-en slik:

```

[
  {
    "operation": "remove",
    "spec": {
      "ansatt": {
        "fnr": ""
      }
    }
  }
]
```

 


Kaller man APIet etter at denne policy-en er lagt på, vil man få denne responsen



```

{
  "ansatt": {
    "id": "00102099",
    "brukerident": null,
    "dfoBrukerident": null,
    "eksternIdent": null,
    "fornavn": "Kjell-Arne",
    "etternavn": "Testesen",
    "annenId": [
      null
    ],
    "fdato": "1987-07-29"
  }
}
```

 


Mange APIer gir enkelt-svar tilbake som et enkelt objekt, men kall som finner flere objekter gir tilbake en liste med objekter. For å filtrere bort fnr fra denne:


Eksempel 2



```

{
  "ansatt": [
    {
      "id": "00102099",
      "brukerident": null,
      "dfoBrukerident": null,
      "eksternIdent": null,
      "fornavn": "Kjell-Arne",
      "etternavn": "Testesen",
      "annenId": [
        null
      ],
      "fdato": "1987-07-29"
    },
    {
      "id": "00100982",
      "brukerident": null,
      "fornavn": "Martin",
      "etternavn": "Martinsen",
      "fnr": "23456789",
      "fdato": "1973-11-06"
    }
  ]
}
```

kan følgende spesifisering benyttes:



```

[
  {
    "operation": "remove",
    "spec": {
      "ansatt": {
        "*": {
          "fnr": ""
        },
        "fnr": ""
      }
    }
  }
]
```

Den vil fungere både på det første og andre eksemplet


 


Eksempel 3


Noen ganger vil man kun returnere svar ut i fra en verdi i svaret. Gitt at APIet gir følgende respons:



```

{
  "id": "5001234",
  "navn": "Ola Nordmann",
  "info": "Informasjon som noen ganger er unntatt offentligheten",
  "unntattOff": "False"
}

```

 


og vi vil returnere denn responen, men ikke om feltet "unntattOff" er "True"


Denne JOLT-spesifikasjonen vil kun tillate svar der hvor  svaret er False



```

[
  {
    "operation": "shift",
    "spec": {
      "unntattOff": {
        "False": {
          "@2": ""
        }
      }
    }
  }
]
```

Om responsen fra APIet er som følger



```

{
  "id": "5001234",
  "navn": "Ola Nordmann",
  "info": "Dette er hemmelig",
  "unntattOff": "True"
}
```

vil svaret fra Gravitee med denne policy-en på planen/APIet være



```

null
```

 


Merk at slik som vi har laget JOLT-spesifikasjonen så tar vi med svaret om UnntattOff er False. Om det har verdien "Nei" eller er tomt vil det ikke bli tatt med. Det er og mulig å erstatte inholdet med en tom verdi om UnntattOff er True, og returnere svar om det har en hvilken som helst annen verdi (eller ingen verdi), men da risikerer man i returnere svar som ikke skulle vært med om  UnntattOff ved feil eller kodeendring er tomt, får verdien "Ja" eller endret stor/liten bokstav til TRUE eller true.


Merk at denne ikke vil returnere svar om nøkkelen "unntattOff" mangler helt.


 



```

[
  {
    "operation": "shift",
    "spec": {
      "unntattOff": {
        "true": {
          "": ""
        },
        "*": { "@2": "" }
      }
    }
  }
]
```

 


Eksempel med default-verdi


Om en nøkkel kun er med når det har en verdi vil ikke dette eksempele fungere. Feks. om "unntattOff" kun er med i svaret om det har verdien "true" eller om det kun er med om noen eksplisitt har valgt "true" eller "false". I disse tilfelene vil ingen av konfigurasjonene i dette eksempelet fungere. Det man kan gjøre er å sette en default-verdi først, og deretter shift-operasjonen:


 



```

[
  {
    "operation": "default",
    "spec": {
      "unntattOff": "false"
    }
  },
  {
    "operation": "shift",
    "spec": {
      "unntattOff": {
        "true": {
          "": ""
        },
        "*": { "@2": "" }
      }
    }
  }
]
```

Merk at nøkkel/verdien som blir lagt til vil bli med i svaret som går til mottakeren


Eksemplene over vil (i likhet med eksempel 1) ikke fungere om man får liste med svar. For slike tilfeller kan man bruke:


 



```

[
  {
    "operation": "shift",
    "spec": {
      "unntattOff": {
        "false": {
          "@2": ""
        }
      },
      "*": {
        "unntattOff": {
          "false": {
            "@2": ""
          }
        }
      }
    }
  }
]
```

 


For å sette inn defeult-verdier i en array må det spesifiseres at det er en array ved å legge på [] i slutten av navnet.


f eks.



```

{
  "ressurser": 
 [
  {
   "id": "5001234",  
   "navn": "Kari Nordmann",  
   "info": "Informasjon  er unntatt offentligheten",  
   "unntattOff": "True"
  },
  {
   "id": "5001235",
   "navn": "Ola Nordmann",
   "info": "Informasjon som ikke er unntatt offentligheten"
  }
 ]
}
```

 


Bruk


 



```

[
    {
    "operation": "default",
    "spec": {
      "ressurser[]":{
        "*":{
          "unntattOff": "false"
        }
      }
    }
  },
  {
    "operation": "shift",
    "spec": {
      "ressurser":{
        "*": {
          "unntattOff": {
            "false": {
              "@2": "ressurser"
            }
          }
        }
      }
    }
  }
]
```