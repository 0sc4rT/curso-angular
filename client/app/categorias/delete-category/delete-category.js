'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('delete-category', {
        url: '/delete-category',
        templateUrl: 'app/categorias/delete-category/delete-category.html',
        controller: 'DeleteCategoryCtrl'
      });
  });
