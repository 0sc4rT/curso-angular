'use strict';

angular.module('uiApp')
  .service('Validation', function ($q, $resource) {

    var resource = $resource('/api/datas/:user/:pass', 
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
      var user = $q.defer();
      resource.get({
        user: params.user,
        pass: params.pass
      }).$promise.then(function(response){
        user.resolve(response)
      }, function(error){
        user.reject(error);
      });
      console.log(">>>", params);
      console.log(">>>", user.promise);
      return user.promise;
    }

    return {
      get: get
    };
  });
