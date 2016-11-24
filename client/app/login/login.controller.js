'use strict';

angular.module('uiApp')
  .controller('LoginCtrl', LoginController);

LoginController.$inject = ['Validation'];

function LoginController(Validation) {
    var vm = this;
    vm.userName = '';
    vm.password = '';
    vm.login = login;    

    function activate() {
    }

    function close() {
    }

    function login() {
      console.log(vm.userName);
      console.log(vm.password);
      vm.promise = Validation.get(
        {
          user: vm.userName,
          pass: vm.password
        }
      );
      vm.promise.then(function(response) {
        console.log("response");
        if (response.id) {
          console.log(response.id);
        } else {
          console.log("El usuario o la contraseña no son correctos!!");
        }
      });
    }
}