WebDAV - Innhold i Meldingskø



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



| [Navn](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/meldingsk%C3%B8/?sort-by=name&invert=true) | [Størrelse](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/meldingsk%C3%B8/?sort-by=content-length) | [Sist endret](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/meldingsk%C3%B8/?sort-by=last-modified) |
| --- | --- | --- |
| 
[brom-create-application.png
 ![](/datadeling/img/brom-create-application.png?vrtx=thumbnail)](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/meldingsk%C3%B8/brom-create-application.png "Bilde") | 
 46 KB
  | 
 20. mai 2021
  |
| 
[brom-publish-messages.png
 ![](/datadeling/img/brom-publish-messages.png?vrtx=thumbnail)](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/meldingsk%C3%B8/brom-publish-messages.png "Bilde") | 
 180 KB
  | 
 20. mai 2021
  |
| 
[brom-register-notification-source.png
 ![](/datadeling/img/brom-register-notification-source.png?vrtx=thumbnail)](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/meldingsk%C3%B8/brom-register-notification-source.png "Bilde") | 
 100,6 KB
  | 
 20. mai 2021
  |
| 
[opprett-tjeneste.html](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/meldingsk%C3%B8/opprett-tjeneste.html "Artikkel")  | 
 3,4 KB
  | 
 26. juni 2021
  |