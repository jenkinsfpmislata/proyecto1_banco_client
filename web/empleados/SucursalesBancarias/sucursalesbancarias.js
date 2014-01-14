var app = angular.module("app", []);

///////////////// Controladores //////////////////////////////

app.controller('SucursalesBancariasReadAllCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;

    $http.get("http://localhost:8084/Banco/jsp/sucursalbancariajson/SucursalesBancarias.json.jsp").success(function(result) {
        $scope.sucursalesBancarias = result;
    });
});

app.controller("SucursalesBancariasReadCtrl", function($scope, $http) {
    $scope.sucursalesBancarias = null;
    var parametros = getQueryStringParameters();

    $http.get("http://localhost:8084/Banco/jsp/sucursalbancariajson/SucursalBancaria.json.jsp?id=" + parametros.id).success(function(r) {
        $scope.sucursalesBancarias = r;
    });
});

app.controller('SucursalesBancariasDeleteCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    $http.get("http://localhost:8084/Banco/jsp/sucursalbancariajson/DeleteSucursales.json.jsp?id=" + idEntidadBancaria).success(function() {
        $http.get("http://localhost:8084/Banco/jsp/sucursalbancariajson/SucursalesBancarias.json.jsp").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    });
});


app.controller('SucursalesBancariasInsertCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    $http.get("http://localhost:8084/Banco/jsp/sucursalbancariajson/InsertSucursales.json.jsp").success(function() {
        $http.get("http://localhost:8084/Banco/jsp/sucursalbancariajson/SucursalesBancarias.json.jsp").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    });
});

app.controller('SucursalesBancariasUpdateCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    $http.get("http://localhost:8084/Banco/jsp/sucursalbancariajson/UpdateSucursales.json.jsp").success(function() {
        $http.get("http://localhost:8084/Banco/jsp/sucursalbancariajson/SucursalesBancarias.json.jsp").success(function(result) {
            $scope.sucursalesBancarias = result;
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