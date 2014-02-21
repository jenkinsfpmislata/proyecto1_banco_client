
///////////////// Controladores //////////////////////////////

app.controller('MovimientosBancariosReadAllCtrl', function($scope, $http) {
    $scope.movimientosBancarios = null;
    $scope.nombre = null;
    //http://localhost:8084
    $http.get("/proyecto1_banco_server/api/MovimientosBancarios").success(function(result) {
        $scope.movimientosBancarios = result;
    });

    $scope.read = function() {
        $http.get("/proyecto1_banco_server/api/MovimientoBancario/" + $scope.nombre).success(function(r) {
            $scope.movimientosBancarios = r;
        });
        $location.path("/MovimientosBancarios");
    };
});

app.controller('MovimientosBancariosDeleteCtrl', function($scope, $http, $routeParams, $location) {
    var id = $routeParams.id;
    //http://localhost:8084
    $http.delete("/proyecto1_banco_server/api/MovimientoBancario/" + id).success(function() {
        $location.path("/MovimientosBancarios");
    }).error(function(data,status) {
        switch (status) {
                case 400 :
                    data='Bad Request';
                break;
                case 500 :
                    data='Internal Server Error';
                break;
                default:
                    data='Could not perform this request';
                    break;
            }
                $scope.ListaMensajes = [{datos: status , mensaje: data}];
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

    //==========================================================================/
    $scope.cuentaBancaria;

    $http.get("/proyecto1_banco_server/api/CuentaBancaria/id/" + $routeParams.idCuentaBancaria).success(function(result) {
        $scope.cuentaBancaria = result;
    });

    $scope.insertMovimientoBancario = function() {
        $scope.movimientoBancario.cuentaBancaria = $scope.cuentaBancaria;
        $http.post("/proyecto1_banco_server/api/MovimientoBancario/" + $routeParams.idCuentaBancaria, $scope.movimientoBancario).success(function(result) {
            $scope.ListaMensajes = [];
            $scope.movimientoBancario = result;
            $location.path("/CuentaBancaria/" + $routeParams.idCuentaBancaria + "/MovimientosBancarios");
        }).error(function(data,status) {
            switch (status) {
                case 400 :
                    data='Bad Request';
                break;
                case 500 :
                    data='Internal Server Error';
                break;
                default:
                    data='Could not perform this request';
                    break;
            }
                $scope.ListaMensajes = [{datos: status , mensaje: data}];
            $location.path("/MovimientosBancariosInsert/" + $routeParams.idCuentaBancaria);
        });

    };
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

    $http.get("/proyecto1_banco_server/api/MovimientoBancario/" + $routeParams.id).success(function(r) {
        $scope.movimientoBancario = r;
        $http.get("/proyecto1_banco_server/api/CuentasBancarias").success(function(result) {
            $scope.cuentasBancarias = result;
        });

        $scope.updateMovimientoBancario = function() {
            //http://localhost:8084
            $http.put("/proyecto1_banco_server/api/MovimientoBancario/"
                    + $routeParams.id, $scope.movimientoBancario).success(function(result) {
                $scope.ListaMensajes = [];
                $scope.movimientoBancario = result;
                $location.path("/MovimientosBancarios");
            }).error(function(data,status) {
                switch (status) {
                case 400 :
                    data='Bad Request';
                break;
                case 500 :
                    data='Internal Server Error';
                break;
                default:
                    data='Could not perform this request';
                    break;
            }
                $scope.ListaMensajes = [{datos: status , mensaje: data}];
                $location.path("/MovimientosBancariosUpdate/" + $routeParams.idCuentaBancaria);
            });

        };
    });
});

app.controller('MovimientosPorCuenta', function($scope, $http, $routeParams) {
    var idCuentaBancaria = $routeParams.idCuentaBancaria;
    $scope.cuentaBancaria = null;
    $scope.movimientosBancarios = null;

    $http.get("/proyecto1_banco_server/api/CuentaBancaria/id/" + idCuentaBancaria).success(function(r) {
        $scope.ListaMensajes = [];
        $scope.cuentaBancaria = r;
        $http.get("/proyecto1_banco_server/api/CuentaBancaria/" + $scope.cuentaBancaria.idCuentaBancaria + "/MovimientosBancarios").success(function(result) {
            $scope.ListaMensajes = [];
            $scope.movimientosBancarios = result;
        }).error(function(data,status) {
            switch (status) {
                case 400 :
                    data='Bad Request';
                break;
                case 500 :
                    data='Internal Server Error';
                break;
            }
                $scope.ListaMensajes = [{datos: status , mensaje: data}];
        });
    }).error(function(data,status) {
        switch (status) {
                case 400 :
                    data='Bad Request';
                break;
                case 500 :
                    data='Internal Server Error';
                break;
            }
                $scope.ListaMensajes = [{datos: status , mensaje: data}];
    });
});
