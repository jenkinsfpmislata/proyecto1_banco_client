var app = angular.module("app", []);

///////////////// Controladores //////////////////////////////

app.controller('CuentasBancariasReadAllCtrl', function($scope, $http) {
    $scope.entidadesBancarias = null;

    $http.get("http://localhost:8084/Banco/api/CuentasBancarias/").success(function(result) {
        $scope.entidadesBancarias = result;
    });
});

app.controller("CuentasBancariasReadCtrl", function($scope, $http) {
    $scope.entidadBancaria = null;
    var parametros = getQueryStringParameters();

    $http.get("http://localhost:8084/Banco/api/CuentaBancaria/" + parametros.id).success(function(r) {
        $scope.entidadBancaria = r;
    });
});

app.controller('CuentasBancariasDeleteCtrl', function($scope, $http) {
    var parametros = getQueryStringParameters();
    $scope.entidadesBancarias = null;
    $http.delete("http://localhost:8084/Banco/api/CuentaBancaria/" + parametros.id).success(function() {
        $http.get("http://localhost:8084/Banco/api/CuentasBancarias/").success(function(result) {
            $scope.entidadesBancarias = result;
        });
    });
});


app.controller('CuentasBancariasInsertCtrl', function($scope, $http) {
    $scope.entidadesBancarias = null;
    $http.post("http://localhost:8084/Banco/api/CuentaBancaria/").success(function() {
        $http.get("http://localhost:8084/Banco/api/CuentasBancarias/").success(function(result) {
            $scope.entidadesBancarias = result;
        });
    });
});

app.controller('CuentasBancariasUpdateCtrl', function($scope, $http) {
    $scope.entidadesBancarias = null;
    var parametros = getQueryStringParameters();
    $http.put("http://localhost:8084/Banco/api/CuentaBancaria/" + parametros.id).success(function() {
        $http.get("http://localhost:8084/Banco/api/CuentasBancarias/").success(function(result) {
            $scope.entidadesBancarias = result;
        });
    });
});