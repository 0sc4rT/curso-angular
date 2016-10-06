'use strict';

angular.module('uiApp')
  .filter('myFilter', function () {
    return function (input, param) {
      if (param === 'm') 
        return input.toLowerCase();
      else if (param === 'M')
        return input.toUpperCase();
      return input;
    };
  });
