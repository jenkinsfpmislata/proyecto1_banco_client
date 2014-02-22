app.controller('MainCtrl', function($scope, $http) {
    $scope.cuentaBancaria = null;
    $scope.movimientosBancarios = null;
    $scope.usuario = null;
    $id = null;

    $http.get("/proyecto1_banco_server/api/Session").success(function(result) {
        $scope.usuario = result;
        $id = $scope.usuario.idUsuario;
    });

    $http.get("/proyecto1_banco_server/api/CuentaBancaria/id/" + $id).success(function(res) {
        $scope.cuentaBancaria = res;
    });

    $http.get("/proyecto1_banco_server/api/CuentaBancaria/" + $id + "/MovimientosBancarios").success(function(r) {
        $scope.movimientosBancarios = r;
    });

});

/*app.controller('MainCtrl', function($scope, $http) {
 $scope.cuentaBancaria = null;
 $scope.movimientosBancarios = null;
 $scope.usuario = null;
 $id = null;
 
 $http.get("/proyecto1_banco_server/api/Session").success(function(result) {
 $scope.usuario = result;
 $id=$scope.usuario.idUsuario;
 });
 
 $http.get("/proyecto1_banco_server/api/CuentaBancaria/id/1").success(function(res) {
 $scope.cuentaBancaria = res;
 });
 
 $http.get("/proyecto1_banco_server/api/CuentaBancaria/1/MovimientosBancarios").success(function(r) {
 $scope.movimientosBancarios = r;
 });
 
 });*/
