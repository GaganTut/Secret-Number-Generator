'use strict';
module.exports = function(){
  function createNumber() {
    return Math.floor((Math.random() * 1000000) + 1);
  }
  var _number = createNumber();

  function generateNumber() {
    return _number;
  }

  return generateNumber;
  };
