(function() {

jshero.koans.add({

  id: 'for2',

  title: 'Schleifen und Arrays',

  lesson: '<code>for</code>-Schleifen eignen sich besonders gut zum Durchlaufen von Arrays. Die folgende Funktion filtert aus einem Array diejenigen Elemente heraus, die größer gleich 10 sind. ' +
    'Die gefilterten Werte werden als Array zurückgegeben:' +
    '<pre><code>var filter = function(in) {<br>' +
    '  var out = [];<br>' +
    '  for (var i = 1; i < in.length; i++) {<br>' +
    '    if (in[i] >= 10) {<br>' +
    '      out.push(in[i]);<br>' +
    '    }<br>' +
    '  }<br>' +
    '  return out;<br>' +
    '};</code></pre>',
        
  task: 'Schreibe eine Funktion <code>mean</code>, die ein Array gefüllt mit Zahlen entgegennimmt und den Mittelwert dieser Zahlen zurückgibt. ' +
    'Tipp: Um den Mittelwert von n Zahlen zu berechnen, mußt du die Zahlen aufaddieren und die erhaltene Summe durch n teilen. ' +
    '<code>mean([1, 4])</code> sollte <code>(1 + 4)/2 = 2.5</code> ergeben.',

  beforeTests: function() {
    if (typeof mean !== "undefined") {
      mean = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof mean === 'function';
      var msg;
      if (ok) {
        msg = '<code>mean</code> ist eine Funktion.';
      } else {
        msg = '<code>mean</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = mean.length === 1;
      var msg;
      if (ok) {
        msg = '<code>mean</code> hat 1 Parameter.';
      } else {
        msg = '<code>mean</code> hat nicht 1, sondern ' + mean.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg, e;
      try {
        var result = mean([0]);
        ok = result === 0;
        if (ok) {
          msg = '<code>mean([0])</code> gibt <code>0</code> zurück.';
        } else {
          msg = '<code>mean([0])</code> gibt nicht <code>0</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([0])</code>.';
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
        var result = mean([1, 2]);
        ok = result === 1.5;
        if (ok) {
          msg = '<code>mean([1, 2])</code> gibt <code>1.5</code> zurück.';
        } else {
          msg = '<code>mean([1, 2])</code> gibt nicht <code>1.5</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([1, 2])</code>.';
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
        var result = mean([1, 4, 10, 85]);
        ok = result === 25;
        if (ok) {
          msg = '<code>mean([1, 4, 10, 85])</code> gibt <code>25</code> zurück.';
        } else {
          msg = '<code>mean([1, 4, 10, 85])</code> gibt nicht <code>25</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>mean([1, 4, 10, 85])</code>.';
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

})();
