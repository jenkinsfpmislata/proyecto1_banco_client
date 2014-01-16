var app = angular.module("app", []);

///////////////// Controladores //////////////////////////////

app.controller('SucursalesBancariasReadAllCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;

    $http.get("http://localhost:8084/Banco/api/SucursalesBancarias/").success(function(result) {
        $scope.sucursalesBancarias = result;
    });
});

app.controller("SucursalesBancariasReadCtrl", function($scope, $http) {
    $scope.sucursalesBancarias = null;
    var parametros = getQueryStringParameters();

    $http.get("http://localhost:8084/Banco/api/SucursalBancaria/" + parametros.id).success(function(r) {
        $scope.sucursalesBancarias = r;
    });
});

app.controller('SucursalesBancariasDeleteCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    var parametros = getQueryStringParameters();
    $http.delete("http://localhost:8084/Banco/api/SucursalBancaria/" + parametros.id).success(function() {
        $http.get("http://localhost:8084/Banco/api/SucursalesBancarias/").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    });
});


app.controller('SucursalesBancariasInsertCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    $http.post("http://localhost:8084/Banco/api/SucursalBancaria/").success(function() {
        $http.get("http://localhost:8084/Banco/api/SucursalesBancarias/").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    });
});

app.controller('SucursalesBancariasUpdateCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    var parametros = getQueryStringParameters();
    $http.put("http://localhost:8084/Banco/api/SucursalBancaria/"+parametros.id).success(function() {
        $http.get("http://localhost:8084/Banco/api/SucursalesBancarias/").success(function(result) {
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