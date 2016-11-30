'use strict';

angular.module('uiApp')
  .service('Usuario', function ($q, $resource) {
    var resource = $resource('/api/usuarios/:user/:pass',
      {
        user: '@user',
        pass: '@pass'
      },
      {
        'get': {
          method: 'GET'
        }
      });

    function get(params) {
      var usuario = $q.defer();
      resource.get({
        user: params.user,
        pass: params.pass
      }).$promise.then(function (response) {
        usuario.resolve(response)
      }, function (error) {
        usuario.reject(error);
      });
      return usuario.promise;
    }

    return {
      get: get
    };
  });
