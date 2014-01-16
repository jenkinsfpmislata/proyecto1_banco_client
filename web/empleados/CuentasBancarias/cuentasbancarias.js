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

///////////////////// Funciones ////////////////////////
function getQueryStringParameters() {
    var queryString = window.location.search.substr(1); //El substr(1) es para quitarel "?" del principio;
    var parejaParametros = queryString.split('&');

    var parametros = {};

    if (parejaParametros !== "") {
        for (var i = 0; i < parejaParametros.length; ++i)
        {
            var parejaParametro = parejaParametros[i].split('=');
            if (parejaParametro.length === 2) {
                var nombre = parejaParametro[0];
                var valor = decodeURIComponent(parejaParametro[1].replace(/\+/g, " "));
                parametros[nombre] = valor;
            }
        }
    }
    return parametros;
}
;