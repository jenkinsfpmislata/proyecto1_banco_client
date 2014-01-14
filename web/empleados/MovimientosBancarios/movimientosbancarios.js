var app = angular.module("app", []);

///////////////// Controladores //////////////////////////////

app.controller('MovimientosBancariosReadAllCtrl', function($scope, $http) {
    $scope.movimientosBancarios = null;

    $http.get("http://localhost:8084/Banco/jsp/movimientobancariojson/MovimientosBancarios.json.jsp").success(function(result) {
        $scope.movimientosBancarios = result;
    });
});

app.controller("MovimientosBancariosReadCtrl", function($scope, $http) {
    $scope.movimientosBancarios = null;
    var parametros = getQueryStringParameters();

    $http.get("http://localhost:8084/Banco/jsp/movimientobancariojson/MovimientoBancario.json.jsp?id=" + parametros.id).success(function(r) {
        $scope.movimientosBancarios = r;
    });
});

app.controller('MovimientosBancariosDeleteCtrl', function($scope, $http) {
    $scope.movimientosBancarios = null;
    $http.get("http://localhost:8084/Banco/jsp/movimientobancariojson/DeleteMovimiento.json.jsp?id=" + idEntidadBancaria).success(function() {
        $http.get("http://localhost:8084/Banco/jsp/movimientobancariojson/MovimientosBancarios.json.jsp").success(function(result) {
            $scope.movimientosBancarios = result;
        });
    });
});


app.controller('MovimientosBancariosInsertCtrl', function($scope, $http) {
    $scope.movimientosBancarios = null;
    $http.get("http://localhost:8084/Banco/jsp/movimientobancariojson/InsertMovimiento.json.jsp").success(function() {
        $http.get("http://localhost:8084/Banco/jsp/movimientobancariojson/MovimientosBancarios.json.jsp").success(function(result) {
            $scope.movimientosBancarios = result;
        });
    });
});

app.controller('MovimientosBancariosUpdateCtrl', function($scope, $http) {
    $scope.movimientosBancarios = null;
    $http.get("http://localhost:8084/Banco/jsp/movimientobancariojson/UpdateMovimiento.json.jsp").success(function() {
        $http.get("http://localhost:8084/Banco/jsp/movimientobancariojson/MovimientosBancarios.json.jsp").success(function(result) {
            $scope.movimientosBancarios = result;
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
};