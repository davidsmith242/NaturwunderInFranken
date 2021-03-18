<template>
  <div class="impresssum">
    <h2 class="my-4">Impressum</h2>
    <h3>Herausgeber:</h3> 
    <p>
      Frank Schröpfer <br>
      Anemonenweg 7<br>
      97846 Partenstein
    </p>
    
    <h3>Kontakt:</h3> 
    <p>
      Telefon: +4993554421 <br>
      E-Mail: <a href="mailto:frank@schroepfer-net.de">frank@schroepfer-net.de</a><br><br>

      Autor, Layout, Satz und Gestaltung / Herausgeber<br>
      Frank Schröpfer, Partenstein / Eigenverlag
    </p>
    <h3>Über den Autor</h3>
    <p>
      Frank Schröpfer ist in Lohr a. Main geboren und seit seiner Kindheit im Spessart unterwegs. Er ist verheiratet und hat zwei Kinder. 
      Bereits mit 15 Jahren unternahm er mit Freunden und seinem ersten Fotoapparat mehrtägige Wanderungen durch seine Heimat, später auch durch andere Länder. »Durch das Draußensein ist meine Liebe zur Natur entstanden, die einen festen Platz in meinem Herzen einnimmt.« So beschreibt Frank Schröpfer seine Grundeinstellung.
    </p>
    <p>
      Er sieht sich als Naturbeobachter, den seine Leidenschaft oft mit dem Rucksack hinaus in die Natur treibt. 
      Im Laufe der Jahre ist so einiges an Bild- und Textmaterial entstanden, das er schrittweise in einzelnen Buchprojekten vorstellt. 
      Der gelernte Elektrotechniker arbeitet seit über 30 Jahren bei Bosch Rexroth.
    </p>
    <p>
      Zu seinen Plänen sagt er: „Es gibt noch vieles, was ich gerne fotografieren und aufschreiben würde. 
      Ich möchte mit meiner Arbeit für mehr Naturschutz werben und hoffe, dass viele meine Bücher lesen und dadurch den Schätzen unserer Heimat einen 
      höheren Wert beimessen.«
    </p>
    <h3>Copyright</h3>
    <p>
      ©{{year}}, Frank Schröpfer, Partenstein<br>
      Alle Rechte der Verbreitung, wie Nachdruck oder Einspeicherung und Rückgewinnung in Datenverarbeitungsanlagen aller Art, 
      sind vorbehalten.
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
