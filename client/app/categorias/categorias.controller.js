'use strict';

angular.module('uiApp')
  .controller('CategoriasCtrl', 
  function (NgTableParams, Categoria, dialogs, $rootScope) {
    var vm = this;
    vm.categoria = 'computadoras';
    vm.editCategory = editCategory;
    vm.deleteCategory = deleteCategory;
    vm.toComputers = toComputers;
    vm.toCells = toCells;

    toComputers()

    function toComputers() {
      vm.categoria = 'computadoras';
      activate();
    }

    function toCells() {
      vm.categoria = 'celulares';
      activate();
    }

    function activate() {
      vm.tableParams = new NgTableParams({}, {
        counts: [],
        filterDelay: 0,
        getData: getData
      });
    }

    function getData() {
      return Categoria.getCategory(vm.categoria).then(function(response) {
        return response.productos;
      });
    }

    function editCategory(data) {
      data.categoria = vm.categoria;
      var options = {
        size: 'md',
        animation: true
      };
      var dialog = dialogs.create (
        'app/categorias/edit-category/edit-category.html',  //template url
        'EditCategoryCtrl',                                 //dialog controller
        data,                                               //data available as a "data" service in the controller
        options,                                            //Options for the dialog with the addition of copy: false|true which will copy the data instead of passing reference
        'EditCategory');                                    //controllerAs reference
      dialog.result.then(function(s) {             
        activate();
      });
    }

    function deleteCategory(data) {
      data.categoria = vm.categoria;
      var options = {
        size: 'sm',
        animation: true
      };
      var dialog = dialogs.create (
        'app/categorias/delete-category/delete-category.html',  //template url
        'DeleteCategoryCtrl',                                   //dialog controller
        data,                                                   //data available as a "data" service in the controller
        options,                                                //Options for the dialog with the addition of copy: false|true which will copy the data instead of passing reference
        'DeleteCategory');                                      //controllerAs reference
      dialog.result.then(function(s) {             
        activate();
      });
    }
  });
