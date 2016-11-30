'use strict';

angular.module('uiApp')
  .controller('DeleteCategoryCtrl', DeleteCategoryCtrl);

DeleteCategoryCtrl.$inject = ['$uibModalInstance', 'Categoria', 'data'];

  function DeleteCategoryCtrl($uibModalInstance, Categoria, data) {
    var vm = this;
    vm.remove = remove;
    vm.close = close;

    function close() {
      $uibModalInstance.close();
    }

    function remove() {
      vm.promise = Categoria.removeCategory(
        {
          key: data.categoria,
          id: data.id
        }
      );
      vm.promise.then(function(response) {
        $uibModalInstance.close(response);
      });
    }
  }