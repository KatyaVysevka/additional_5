module.exports = function check(str, bracketsConfig) {
  // your solution
  var dept = [];
  var chars = str.split('');
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];

    if (isBracketsClose(char) && dept.length != 0) {
      var d = dept.pop();
      if (char != d) {
        dept.push(d);
      } else {
        continue;
      }
    }

    var closeSymbol = calcCloseBracketBySymbol(char);
    if (closeSymbol != null) {
      dept.push(closeSymbol);
    } else {
      // close bracket
      if (dept.length == 0 || dept.pop() != char) {
        return false;
      }
    }
  }

  return dept.length == 0;

  function calcCloseBracketBySymbol(symbol) {
    for (var q = 0; q < bracketsConfig.length; q++) {
      var brackets = bracketsConfig[q];
      if (symbol == brackets[0]) {
        return brackets[1];
      }
    }

    return null;
  }

  function isBracketsClose(symbol) {
    for (var q = 0; q < bracketsConfig.length; q++) {
      var brackets = bracketsConfig[q];
      if (symbol == brackets[1]) {
        return true;
      }
    }

    return false;
  }
}
