'use strict';

angular.module('uiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('edit-category', {
        url: '/edit-category',
        templateUrl: 'app/categorias/edit-category/edit-category.html',
        controller: 'EditCategoryCtrl'
      });
  });
