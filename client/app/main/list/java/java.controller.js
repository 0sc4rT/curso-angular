'use strict';

angular.module('uiApp')
  .controller('JavaCtrl', function () {
    var vm = this;
    vm.myData = [
      {  
        name: "Pedro",
        age: 25
      },
      {
        name: "Ana",
        age: 26
      }
    ];
  });
