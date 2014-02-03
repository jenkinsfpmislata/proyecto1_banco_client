
///////////////// Controladores //////////////////////////////

app.controller('MovimientosBancariosReadAllCtrl', function($scope, $http) {
    $scope.movimientosBancarios = null;
    $scope.nombre = null;
    //http://localhost:8084
    $http.get("/proyecto1_banco_servidor/api/MovimientosBancarios").success(function(result) {
        $scope.movimientosBancarios = result;
    });

    $scope.read = function() {
        $http.get("/proyecto1_banco_servidor/api/MovimientoBancario/" + $scope.nombre).success(function(r) {
            $scope.movimientosBancarios = r;
        });
        $location.path("/MovimientosBancarios");
    };
});

app.controller('MovimientosBancariosDeleteCtrl', function($scope, $http, $routeParams, $location) {
    var id = $routeParams.id;
    //http://localhost:8084
    $http.delete("/proyecto1_banco_servidor/api/MovimientoBancario/" + id).success(function() {
        $location.path("/MovimientosBancarios");
    });
});


app.controller('MovimientosBancariosInsertCtrl', function($scope, $http, $location, $routeParams) {
    $scope.tipoMovimientos = [{
            valor: "Debe",
            nombre: "Debe"
        }, {
            valor: "Haber",
            nombre: "Haber"
        }];
    $scope.movimientoBancario = {};
    $scope.movimientoBancario.tipoMovimientoBancario = $scope.tipoMovimientos[0].valor;

    $scope.cuentasBancarias;
    $scope.insertMovimientoBancario = function() {
        $http.post("/proyecto1_banco_servidor/api/MovimientoBancario/"+$routeParams.idCuentaBancaria, $scope.movimientoBancario).success(function(result) {
            $scope.movimientoBancario = result;
        });
        $location.path("/CuentaBancaria/"+$routeParams.idCuentaBancaria+"/MovimientosBancarios");
    };

    $http.get("/proyecto1_banco_servidor/api/CuentasBancarias").success(function(result) {
        $scope.cuentasBancarias = result;
    });
});

app.controller('MovimientosBancariosUpdateCtrl', function($scope, $http, $routeParams, $location) {
$scope.tipoMovimientos = [{
            valor: "Debe",
            nombre: "Debe"
        }, {
            valor: "Haber",
            nombre: "Haber"
        }];
    $scope.movimientoBancario = {};
    $scope.movimientoBancario.tipoMovimientoBancario = $scope.tipoMovimientos[0].valor;
    $scope.cuentasBancarias;

    $http.get("/proyecto1_banco_servidor/api/MovimientoBancario/" + $routeParams.id).success(function(r) {
        $scope.movimientoBancario = r;
            $http.get("/proyecto1_banco_servidor/api/CuentasBancarias").success(function(result) {
                $scope.cuentasBancarias = result;
        });

        $scope.updateMovimientoBancario = function() {
            //http://localhost:8084
            $http.put("/proyecto1_banco_servidor/api/MovimientoBancario/"
                    + $routeParams.id, $scope.movimientoBancario).success(function(result) {
                $scope.movimientoBancario = result;
            });
            $location.path("/MovimientosBancarios");
        };
    });
});

app.controller('MovimientosPorCuenta', function($scope, $http, $routeParams) {
    var idCuentaBancaria = $routeParams.idCuentaBancaria;
    $scope.cuentaBancaria = null;
    $scope.movimientosBancarios = null;

    $http.get("/proyecto1_banco_servidor/api/CuentaBancaria/id/"+idCuentaBancaria).success(function(r) {
        $scope.cuentaBancaria = r;
        $http.get("/proyecto1_banco_servidor/api/CuentaBancaria/"+$scope.cuentaBancaria.idCuentaBancaria+"/MovimientosBancarios").success(function(result) {
            $scope.movimientosBancarios = result;
        });
    });
});
