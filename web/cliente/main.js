app.controller('MainCtrl', function($scope, $http) {

    $scope.cuentaBancaria = null;
    $scope.movimientosBancarios = null;

    /*$http.get("/proyecto1_banco_servidor/api/CuentaBancaria/id/1").success(function(r) {
     $scope.cuentaBancaria = r;
     $http.get("/proyecto1_banco_servidor/api/CuentaBancaria/" + $scope.cuentaBancaria.idCuentaBancaria + "/MovimientosBancarios").success(function(result) {
     $scope.movimientosBancarios = result;
     });
     });*/

    $http.get("/CuentaBancaria/1/MovimientosBancarios").success(function(r) {
        $scope.movimientosBancarios = r;
        
    });
    
    
});