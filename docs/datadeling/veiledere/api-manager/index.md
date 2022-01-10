WebDAV - Innhold i API manager



 var showHoverThumbnailInFinder = function(element) {
 var img = $(element).children('img.hover-preview');
 img.show();

 // Make image position itself correctly inside container, and not expand downwards:
 var imageContainerHeight = $(element).offsetParent().height();
 var currentImagePosition = $(element).position().top;
 var spaceAvailableForImage = imageContainerHeight - currentImagePosition;
 img.css({
 top: spaceAvailableForImage \< (img.height() - 10) ?
 currentImagePosition - (img.height() - spaceAvailableForImage) :
 currentImagePosition
 });
 };
 var hideHoverThumbnailInFinder = function(element) {
 $(element).children('img.hover-preview').hide();
 };



| [Navn](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/?sort-by=name&invert=true) | [Størrelse](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/?sort-by=content-length) | [Sist endret](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/?sort-by=last-modified) |
| --- | --- | --- |
| 
[2021-11-19-13.33.01-api-qa.intark.uh-it.no-b0f451af01f7.jpg
 ![](/datadeling/img/2021-11-19-13.33.01-api-qa.intark.uh-it.no-b0f451af01f7.jpg?vrtx=thumbnail)](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/2021-11-19-13.33.01-api-qa.intark.uh-it.no-b0f451af01f7.jpg "Bilde") | 
 59,2 KB
  | 
 19. nov. 2021
  |
| 
[api-manager-be-om-tilgang.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/api-manager-be-om-tilgang.html "Artikkel")  | 
 7 KB
  | 
 6. des. 2021
  |
| 
[api-manager-registrere-enkelt-api.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/api-manager-registrere-enkelt-api.html "Artikkel")  | 
 5,3 KB
  | 
 5. juli 2021
  |
| 
[api-tilganger.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/api-tilganger.html "Artikkel")  | 
 9,1 KB
  | 
 8. nov. 2021
  |
| 
[backend.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/backend.html "Artikkel")  | 
 6,3 KB
  | 
 19. nov. 2021
  |
| 
[caching-gravitee.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/caching-gravitee.html "Artikkel")  | 
 3,4 KB
  | 
 1. juli 2021
  |
| 
[filtrere-innhold-json.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/filtrere-innhold-json.html "Artikkel")  | 
 9,3 KB
  | 
 17. aug. 2021
  |
| 
[godkjenne-tilgang-til-api.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/godkjenne-tilgang-til-api.html "Artikkel")  | 
 3,8 KB
  | 
 11. aug. 2021
  |
| 
[importer-api.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/importer-api.html "Artikkel")  | 
 2 KB
  | 
 28. juni 2021
  |
| 
[jwt-mot-backend.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/jwt-mot-backend.html "Artikkel")  | 
 7,6 KB
  | 
 28. juni 2021
  |
| 
[legge-pa-enkel-policy.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/legge-pa-enkel-policy.html "Artikkel")  | 
 2,1 KB
  | 
 25. juni 2021
  |
| 
[maskinporten-autentisering.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/maskinporten-autentisering.html "Artikkel")  | 
 7,1 KB
  | 
 2. juli 2021
  |
| 
[opprette-plan.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/opprette-plan.html "Artikkel")  | 
 8,5 KB
  | 
 23. juni 2021
  |
| 
[rettigheter-og-roller-i-api-manager.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/rettigheter-og-roller-i-api-manager.html "Artikkel")  | 
 4,9 KB
  | 
 23. juni 2021
  |
| 
[rolle-internrevisjon.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/rolle-internrevisjon.html "Artikkel")  | 
 3,6 KB
  | 
 18. aug. 2021
  |
| 
[se-bruk-av-api.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/se-bruk-av-api.html "Artikkel")  | 
 1 KB
  | 
 2. juli 2021
  |
| 
[varsling-for-api-eiere.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/api-manager/varsling-for-api-eiere.html "Artikkel")  | 
 2,2 KB
  | 
 2. juli 2021
  |