jshero.koans.add({

  id: "parameter",

  title: "Parameter",

  lesson: 'Jetzt lernen wir Funktionen mit Parametern kennen. Mit <pre><code>var gebe = function(eingabe) {<br>  return eingabe;<br>};</code></pre>' +
    'definieren wir eine Funktion, die den übergebenen Parameter <code>eingabe</code> einfach wieder zurückgibt. ' +
    'Parameter sind Variablen. Sie stehen in der runden Klammer und benötigen nicht das Schlüsselwort <code>var</code> zu ihrer Deklaration. ' +
    'Mit <pre><code>var ergebnis = gebe("Apfel");</code></pre>' +
    'wird die Funktion mit dem Argument <code>"Apfel"</code> aufgerufen. Jetzt wird unsere zuvor definierte Funktion ' +
    'ausgeführt. Dabei wird zunächst das Argument <code>"Apfel"</code> dem Parameter <code>eingabe</code> zugewiesen. <code>eingabe</code> hat jetzt den ' +
    'Wert <code>"Apfel"</code>. In der einzigen Codezeile der Funktion wird nun die Variable <code>eingabe</code> mit der ' +
    '<code>return</code>-Anweisung zurückgegeben. Diese Rückgabe wird der Variablen <code>ergebnis</code> zugewiesen. <code>ergebnis</code> hat ' +
    'dann auch den Wert <code>"Apfel"</code>.',
        
  task: 'Schreibe eine Funktion <code>echo</code>, die ebenfalls den übergebenen Parameter wieder zurückgibt.',

  beforeTests: function() {
    if (typeof echo !== "undefined") {
      echo = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof echo === 'function';
      var msg;
      if (ok) {
        msg = '<code>echo</code> ist eine Funktion.';
      } else {
        msg = '<code>echo</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var result = echo.length;
      var ok = result === 1;
      var msg;
      if (ok) {
        msg = '<code>echo</code> hat genau 1 Parameter.';
      } else {
        msg = '<code>echo</code> hat nicht 1, sondern ' + result + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var ok, msg, e;
      try {
        var result = echo('Hallo Welt!');
        ok = result === "Hallo Welt!";
        if (ok) {
          msg = '<code>echo("Hallo Welt!")</code> gibt <code>"Hallo Welt!"</code> zurück.';
        } else {
          msg = '<code>echo("Hallo Welt!")</code> gibt nicht <code>"Hallo Welt!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>echo("Hallo Welt!")</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    },
    
    function() {
      var ok, msg, e;
      try {
        var result = echo('Franz');
        ok = result === "Franz";
        if (ok) {
          msg = '<code>echo("Franz")</code> gibt <code>"Franz"</code> zurück.';
        } else {
          msg = '<code>echo("Franz")</code> gibt nicht <code>"Franz"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>echo("Franz")</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    }
  ]

});
