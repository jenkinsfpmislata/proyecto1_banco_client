var app = angular.module("app", []);

///////////////// Controladores //////////////////////////////

app.controller('CuentasBancariasReadAllCtrl', function($scope, $http) {
    $scope.cuentasBancarias = null;

    $http.get("http://localhost:8084/Banco/CuentasBancarias.json.jsp").success(function(result) {
        $scope.cuentasBancarias = result;
    });
});

app.controller("CuentasBancariasReadCtrl", function($scope, $http) {
    $scope.cuentasBancarias = null;
    var parametros = getQueryStringParameters();

    $http.get("http://localhost:8084/Banco/CuentaBancaria.json.jsp?id=" + parametros.id).success(function(r) {
        $scope.cuentasBancarias = r;
    });
});

app.controller('CuentasBancariasDeleteCtrl', function($scope, $http) {
    $scope.cuentasBancarias = null;
    $http.get("http://localhost:8084/Banco/DeleteCuenta.json.jsp?id=" + idEntidadBancaria).success(function() {
        $http.get("http://localhost:8084/Banco/CuentasBancarias.json.jsp").success(function(result) {
            $scope.cuentasBancarias = result;
        });
    });
});


app.controller('CuentasBancariasInsertCtrl', function($scope, $http) {
    $scope.cuentasBancarias = null;
    $http.get("http://localhost:8084/Banco/InsertCuenta.json.jsp").success(function() {
        $http.get("http://localhost:8084/Banco/CuentasBancarias.json.jsp").success(function(result) {
            $scope.cuentasBancarias = result;
        });
    });
});

app.controller('CuentasBancariasUpdateCtrl', function($scope, $http) {
    $scope.cuentasBancarias = null;
    $http.get("http://localhost:8084/Banco/UpdateCuenta.json.jsp").success(function() {
        $http.get("http://localhost:8084/Banco/CuentasBancarias.json.jsp").success(function(result) {
            $scope.cuentasBancarias = result;
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