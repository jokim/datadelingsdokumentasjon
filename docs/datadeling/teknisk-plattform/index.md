---
description: "Teknisk plattform hjelper deg med integrasjonsarbeidet, og utvides ved\
  \ behov. Verkt\xF8yene bygger p\xE5 de [funksjonelle komponentene i UH:IntArk](/docs/datadeling/hva-er/komponenter)."
slug: /datadeling/teknisk-plattform/
title: UH:IntArk sin tekniske plattform
---

# UH:IntArk sin tekniske plattform

Teknisk plattform hjelper deg med integrasjonsarbeidet, og utvides ved behov. Verktøyene bygger på de [funksjonelle komponentene i UH:IntArk](/docs/datadeling/hva-er/komponenter).



<div class="vrtx-row">
 <div class="vrtx-box">
<h2>API Manager</h2>  <div class="vrtx-box-picture">
   <a href="/docs/datadeling/teknisk-plattform/gravitee">   <img src="/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/img/gravitee-logo.png" alt="Bildet kan inneholde: tekst, logo, skrift, symbol, sirkel." />
   </a>
  </div>
 <div class="vrtx-box-content">
<p><strong>Administrasjon av dine API og tilganger</strong></p>
<p>Vi bruker <a href="/docs/datadeling/teknisk-plattform/gravitee">Gravitee</a> som API Manager, og hver institusjon får sin egen, isolerte Gravitee-instans.</p>
<p>Mer detaljer om API manager:</p>
<ul>
<li><a href="/docs/datadeling/teknisk-plattform/api-plan-applikasjon">Hvordan vi bruker Gravitee</a></li>
<li><a href="/docs/datadeling/teknisk-plattform/teknisk">Tekniske detaljer</a></li>
</ul>
<p><a href="/docs/datadeling/veiledere">Veiledere for API manager</a>:</p>
<ul>
<li><a href="/docs/datadeling/veiledere/innforing">Veileder for å komme i gang med IntArk</a></li>
<li><a href="/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api">Veileder for å registrere et API</a></li>
<li><a href="/docs/datadeling/veiledere/api-manager/api-manager-be-om-tilgang">Veileder for å søke om tilgang til API</a></li>
</ul>

</div>
 </div>
 <div class="vrtx-box">
<h2>API Gateway</h2>  <div class="vrtx-box-picture">
   <img src="/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/img/gravitee-logo.png" alt="Bildet kan inneholde: tekst, logo, skrift, symbol, sirkel." />
  </div>
 <div class="vrtx-box-content">
<p><strong>Tilgangskontroll for dine API</strong></p>
<p>API gateway er en proxy for ditt API, som brukes for tilgangskontroll og logging. API gateway styres av API manager.</p>
<p>Vi bruker <a href="/docs/datadeling/teknisk-plattform/gravitee">Gravitee</a> som API Gateway.</p>
<ul>
<li><a href="/docs/datadeling/teknisk-plattform/oversikt">Tilkoblingsdetaljer</a></li>
</ul>

</div>
 </div>
</div>

<div class="vrtx-row">
 <div class="vrtx-box">
<h2>Selvbetjeningsportal for RabbitMQ</h2>  <div class="vrtx-box-picture">
   <a href="/docs/datadeling/teknisk-plattform/brom">   <img src="/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/teknisk-plattform/figurer/brom.svg" alt="Logo for BROM er laget av Freepik fra www.flaticon.com" />
   </a>
  </div>
 <div class="vrtx-box-content">
<p><strong>Administrasjon av tilgang til dine meldinger</strong></p>
<p>En enkel selvbetjening foran RabbitMQ, så datatilbydere og konsumenter kan selv forvalte sine tilganger til notifikasjoner.</p>
<ul>
<li><a href="/docs/datadeling/teknisk-plattform/brom">Mer detaljer om Selvbetjeningsportalen for RabbitMQ</a></li>
<li><a href="/docs/datadeling/veiledere/meldingsk%C3%B8/opprett-tjeneste">Veileder for å registrere din tjeneste i selvbetjeningsportalen</a></li>
</ul>

</div>
 </div>
 <div class="vrtx-box">
<h2>Meldingskø</h2>  <div class="vrtx-box-picture">
   <a href="/docs/datadeling/teknisk-plattform/rabbitmq">   <img src="/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/img/rabbitmq-logo.png" alt="Bildet kan inneholde: oransje, tekst, rød, fargerikhet, linje." />
   </a>
  </div>
 <div class="vrtx-box-content">
<p><strong>Håndtering av dine meldinger</strong></p>
<p>RabbitMQ ser til at meldinger, spesielt <a href="/docs/datadeling/begreper/notifikasjon">notifikasjoner</a>, leveres mellom tjenester. Dette brukes blant annet i integrasjonsmønsteret <a href="/docs/datadeling/god-praksis/integrasjonsmonster/hendelsesbasert">hendelsesbasert provisjonering</a>.</p>
<p>Bruk helst <a href="/docs/datadeling/teknisk-plattform/brom">Selvbetjeningsportalen for RabbitMQ</a> for å administrere dine tjenester og tilganger, da RabbitMQ krever mer teknisk innsikt å bruke.</p>
<ul>
<li><a href="/docs/datadeling/teknisk-plattform/oversikt">Tilkoblingsdetaljer</a></li>
</ul>

</div>
 </div>
</div>

<div class="vrtx-row">
 <div class="vrtx-box">
<h2>Konnektorer</h2> <div class="vrtx-box-content">
<p>Jo flere som følger UH:IntArk for sine integrasjoner, jo mer IntArk-kompatible konnektorer kan gjenbrukes av andre. Se <a href="/docs/datadeling/kode">kodeeksempler</a> og <a href="/docs/datadeling/erfaringer">erfaringsdelingen</a>.</p>

</div>
 </div>
</div>

