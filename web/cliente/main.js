app.controller('MainCtrl', function($scope, $http) {

    $scope.cuentaBancaria = null;
    $scope.movimientosBancarios = null;

    $http.get("/proyecto1_banco_server/api/CuentaBancaria/id/1").success(function(result) {
        $scope.cuentaBancaria = result;
    });


    $http.get("/proyecto1_banco_server/api/CuentaBancaria/1/MovimientosBancarios").success(function(r) {
        $scope.movimientosBancarios = r;

    });

});