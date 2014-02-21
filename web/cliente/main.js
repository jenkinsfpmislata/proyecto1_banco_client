app.controller('MainCtrl', function($scope, $http) {
    
    $scope.cuentaBancaria = null;
    $scope.movimientosBancarios = null;
    $scope.usuario=null;
    
    $http.get("/proyecto1_banco_server/api/Session").success(function(result) {
        $scope.usuario = result;
        
    });
    
    /*$http.get("/proyecto1_banco_server/api/CuentaBancaria/id/1").success(function(result) {
        $scope.cuentaBancaria = result;
    });*/

    $http.get("/proyecto1_banco_server/api/CuentaBancaria/"+$scope.usuario+"/MovimientosBancarios").success(function(r) {
        $scope.movimientosBancarios = r;

    });

});