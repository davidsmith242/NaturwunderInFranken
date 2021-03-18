<template>
  <div class="agb">
    <h2 class="my-4">Allgemeine Geschäftsbedingungen (AGB)</h2> 
    <p>
      Meine Bücher und Verlagsprodukte bestellen Sie bitte über die Mailadresse: <a href="mailto:frank@schroepfer-net.de">frank@schroepfer-net.de</a> 
    </p>
    
    <h3>Versandkosten Deutschland</h3> 
    <p>
      <ul>
        <li>Ab einem Warenwert von 50,00 EUR erfolgt die Lieferung porto- und verpackungskostenfrei an alle Postanschriften in der Bundesrepublik Deutschland.</li>
        <li>Liegt der Wert der Bestellung unter einem Warenwert von 50,00 EUR, wird eine Pauschale von 4 EUR für Porto und Verpackung berechnet.</li>
        <li>Beim Kauf von ausschließlich E-Books: kostenfreie Lieferung.</li>
      </ul>
    </p>
    <h3>Versandkosten Deutschland</h3> 
    <p>
      mit der Lieferung erhalten Sie eine Rechnung
    </p>

    <h3>Vertragsschluss</h3> 
    <p>
      Mit ihrer Bestellung per Mail geben Sie verbindlich ihre Absicht auf Abschluss eines Kaufvertrages unter Einbeziehung dieser AGB ab. 
Gleichzeitig nehme ich Ihre Bestellung durch die Mitteilung über die Auslieferung bzw. Lieferung der Ware an. 
Es steht mir frei Angebote ohne Angabe von Gründen abzulehnen.
    </p>

    <h3>Lieferung</h3> 
    <p>
      Die Lieferung erfolgt an die von Ihnen angegebene Adresse. Eine Rechnung liegt der Lieferung bei.
    </p>
  </div>
</template>
<script>

export default {
  name: 'Impressum',
  data() {
    return {
    }
  },
  computed: {
    year: function () {
      return new Date().getFullYear()
    }
  },
}
</script>
