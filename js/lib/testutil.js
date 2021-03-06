if (typeof jshero === "undefined") {
  var jshero = {};
}

'use strict';

/** ------------- copied and adpated from escape-html/index.js
 *  BEGIN ------------- */

/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}

/** ------------- copied and adpated from escape-html/index.js
 *  END ------------- */


/**
 * Contains frequently used test cases.
 */
jshero.testutil = (function() {

  /**
   * Example usage:
   *
   * jshero.testutil.assert_de_isFunction('a')
   *
   * We expect a function named "a".
   */
  var assert_de_isFunction = function(f_name) {
      var ok = typeof eval(f_name) === 'function';
      var msg;
      if (ok) {
        msg = '<code>' + f_name + '</code> ist eine Funktion.';
      } else {
        msg = '<code>' + f_name + '</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    };

    /**
     * We expect that calling the function name f_name
     * with the call f_call (e.g. 'f()' or 'f("Hallo")')
     * returns the value expectedReturnValue
     */
    var assert_de_functionReturns = function(f_name, f_call, expectedReturnValue) {
      var ok, msg, e;
      try {
        var result = eval(f_call);
        ok = result === expectedReturnValue;
        if (ok) {
          msg = '<code>' + f_call + '</code> gibt <code>"' + expectedReturnValue + '"</code> zurück.';
        } else {
          msg = '<code>' + f_call + '</code> gibt nicht <code>"' + expectedReturnValue + '"</code>, sondern <code>' + escapeHtml(JSON.stringify(result)) + '</code> zurück.';
        }
      } catch(exc) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>' + f_call + '</code>.';
        e = exc;
      }
      return {
        ok: ok,
        msg: msg,
        e: e
      };
    };

    /**
     * Bei der Variable v müssen wir noch mitgeben wie sie heißt (name)
     */
    var assert_de_variableDefined = function(v, name) {
      var ok = typeof v !== 'undefined';
      var msg;
      if (ok) {
        msg = '<code>' + name + '</code> hat einen Wert.';
      } else {
        msg = '<code>' + name + '</code> hat keinen Wert.';
      }
      return {
        ok: ok,
        msg: msg
      };
    };

    /**
     * Prüfen, ob eine Variable einen Wert hat
     */
    var assert_de_variableHasValue = function(v, name, expValue) {
      var ok = begruessung === expValue;
      var msg;
      if (ok) {
        msg = '<code>' + name + '</code> hat den Wert <code>' + escapeHtml(JSON.stringify(v)) + '</code>.';
      } else {
        msg = '<code>' + name + '</code> hat nicht den Wert <code>"' + expValue + '"</code>, sondern den Wert <code>' + escapeHtml(JSON.stringify(v)) + '</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  return {
    assert_de_isFunction: assert_de_isFunction,
    assert_de_functionReturns: assert_de_functionReturns,
    assert_de_variableDefined: assert_de_variableDefined,
    assert_de_variableHasValue: assert_de_variableHasValue
  };

})();
