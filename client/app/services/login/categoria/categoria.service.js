'use strict';

angular.module('uiApp')
  .service('Categoria', function ($q, $resource) {
    var resource = $resource('/api/categorias/:key/:id',
      {
        key: '@key',
        id: '@id'
      },
      {
        'get': {
          method: 'GET'
        },
        'put': {
          method: 'PUT'
        }
      });

    function getCategory(key) {
      var category = $q.defer();
      resource.get({ key: key }).$promise.then(function (response) {
        category.resolve(response);
      }, function (error) {
        category.reject(error);
      });
      console.log(category.promise);
      return category.promise;
    }

    function updateCategory(params, data) {
      var category = $q.defer();
      resource.put({
        key: params.key,
        id: params.id
      }, data).$promise.then(function (response) {
        category.resolve(response)
      }, function (error) {
        category.reject(error);
      });
      return category.promise;
    }

    function removeCategory(params) {
      var category = $q.defer();
      resource.get({
        key: params.key,
        id: params.id
      }).$promise.then(function (response) {
        category.resolve(response)
      }, function (error) {
        category.reject(error);
      });
      return category.promise;
    }

    return {
      getCategory: getCategory,
      updateCategory: updateCategory,
      removeCategory: removeCategory
    };
  });

