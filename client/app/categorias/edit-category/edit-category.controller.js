'use strict';

angular.module('uiApp')
  .controller('EditCategoryCtrl', EditCategoryCtrl);

  EditCategoryCtrl.$inject = ['$uibModalInstance', 'Categoria', 'data'];

  function EditCategoryCtrl($uibModalInstance, Categoria, data) {
    var vm = this;
    vm.saveChanges = saveChanges;
    vm.close = close;

    activate();

    function activate() {
      vm.selected = data;
    }

    function close() {
      $uibModalInstance.close()
    }

    function saveChanges() {
      vm.promise = Categoria.updateCategory(
        {
          key: data.categoria,
          id: data.id
        },
        vm.selected
      );
      vm.promise.then(function(response) {
        $uibModalInstance.close(response);
      });
    }
  }

/*
angular
    .module('uiApp')
    .controller('AngularEditController', AngularEditController);

  AngularEditController.$inject = ['$moment', '$uibModalInstance', 'Course', 'data'];

  function AngularEditController($moment, $uibModalInstance, Course, data) {
    var vm = this;
    vm.openDateSelector = openDateSelector;
    vm.saveChanges = saveChanges;
    vm.isDateOpened = false;
    vm.dateOptions = {
      maxDate: new Date()
    };
    vm.dateFormat = 'dd-MM-yyyy'
    vm.close = close;

    activate();

    function activate() {
      data.birthDateObject = $moment(data.birthDate, 'DD-MM-YYYY').toDate();
      console.log('received', data);
      vm.selected = data;
    }

    function close() {
      $uibModalInstance.close()
    }

    function openDateSelector() {
      vm.isDateOpened = true;
    }

    function saveChanges() {
      vm.selected.birthDate = $moment(data.birthDateObject).format('DD-MM-YYYY');
      vm.promise = Course.update(
        vm.selected,
        {
          id: 'angular',
          student: data.id
        }
      );
      vm.promise.then(function(response) {
        console.log("response");
        console.log(response);
        $uibModalInstance.close(response);
      });
    }
  }*/