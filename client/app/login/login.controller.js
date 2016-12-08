'use strict';

angular.module('uiApp')
  .controller('LoginCtrl', LoginController);

LoginController.$inject = ['Usuario', '$state'];

function LoginController(Usuario, $state) {
    var vm = this;
    //vm.userName = '';
    //vm.password = '';
    vm.login = login;    

    function activate() {
    }

    function close() {
    }

    function login() {
      vm.promise = Usuario.get(
        {
          user: vm.userName,
          pass: vm.password
        }
      );
      vm.promise.then(function(response) {
        console.log(response);
        if (response.user) {
          if (response.pass) {
            $state.go('categorias');
          } else {
            //console.log('La contraseña no es correcta')
            alert('La contraseña no es correcta');
          }
        } else {
          //console.log('El usuario no es correcto')
          alert('El usuario no es correcto');
        }
      }, function (reason) {
        console.log(reason);
      });
    }
}