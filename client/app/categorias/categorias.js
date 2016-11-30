'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categorias', {
        url: '/categorias',
        templateUrl: 'app/categorias/categorias.html',
        controller: 'CategoriasCtrl',
        controllerAs: 'Categorias'
      });
  });
