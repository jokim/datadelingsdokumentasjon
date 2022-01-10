WebDAV - Innhold i Andre veiledere



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



| [Navn](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/annet/?sort-by=name&invert=true) | [Størrelse](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/annet/?sort-by=content-length) | [Sist endret](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/annet/?sort-by=last-modified) |
| --- | --- | --- |
| [anskaffelse](https://www-dav.usit.uio.no/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/veiledere/annet/anskaffelse/ "Mappe") |  | 
 5. jan. 2021
  |