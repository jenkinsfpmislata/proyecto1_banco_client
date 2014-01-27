///////////////// Controladores //////////////////////////////

app.controller('CuentasBancariasReadAllCtrl', function($scope, $http) {
    $scope.cuentasBancarias = null;

    $http.get("/proyecto1_banco_servidor/api/CuentasBancarias").success(function(result) {
        $scope.cuentasBancarias = result;
    });

    $scope.mostrarCuentas = function() {
        $http.get("/proyecto1_banco_servidor/api/CuentasBancarias").success(function(result) {
            $scope.cuentasBancarias = result;
        });
        $location.path("/CuentasBancarias");
    };
});

app.controller("CuentasBancariasReadCtrl", function($scope, $http) {
    $scope.cuentaBancaria = null;
    var parametros = getQueryStringParameters();

    $http.get("/proyecto1_banco_servidor/api/CuentaBancaria/" + parametros.id).success(function(r) {
        $scope.cuentaBancaria = r;
    });
});


app.controller('CuentasBancariasDeleteCtrl', function($scope, $http, $routeParams, $location) {
    $scope.cuentasBancarias = null;
    var id = $routeParams.id;
    $http.delete("/proyecto1_banco_servidor/api/CuentaBancaria/" + id).success(function() {
        $location.path("/CuentasBancarias");
    });
});

app.controller('CuentasBancariasInsertCtrl', function($scope, $http, $location) {
    $scope.cuentaBancaria = null;
    $scope.insertCuentaBancaria = function() {
        $http.post("/proyecto1_banco_servidor/api/CuentaBancaria/", $scope.cuentaBancaria).success(function(result) {
            $scope.cuentaBancaria = result;
        });
        $location.path("/CuentasBancarias");
    };
    //$http.get("/proyecto1_banco_servidor/api/CuentasBancarias").success(function(result) {
    //    $scope.cuentaBancaria = result;
    //});
});

app.controller('CuentasBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.cuentaBancaria = null;
    $http.get("/proyecto1_banco_servidor/api/CuentaBancaria/" + $routeParams.id).success(function(r) {
        $scope.cuentaBancaria = r;
    });

    $scope.updateCuentaBancaria = function() {
        $http.put("/proyecto1_banco_servidor/api/CuentaBancaria/"
                + $routeParams.id, $scope.cuentaBancaria).success(function(result) {
            $scope.cuentaBancaria = result;
        });
        $location.path("/CuentasBancarias");
    };
});