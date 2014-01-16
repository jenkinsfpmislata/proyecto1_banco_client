
///////////////// Controladores //////////////////////////////

app.controller('EntidadesBancariasReadAllCtrl', function($scope, $http) {
    $scope.entidadesBancarias = null;

    $http.get("http://localhost:8084/Banco/api/EntidadesBancarias").success(function(result) {
        $scope.entidadesBancarias = result;
    });

});


app.controller("EntidadesBancariasReadCtrl", function($scope, $http, $routeParams) {
    $scope.entidadBancaria = null;
    var id = $routeParams.id;

    $http.get("http://localhost:8084/Banco/api/EntidadBancaria/"+id).success(function(r) {
        $scope.entidadBancaria = r;
    });
    
    $scope.inicio = function(){
        
    };
});

app.controller('EntidadesBancariasDeleteCtrl', function($scope, $http, $routeParams) {
    $scope.entidadesBancarias = null;
    var id = $routeParams.id;
    $http.delete("http://localhost:8084/Banco/api/EntidadBancaria/" + id).success(function() {
        $http.get("http://localhost:8084/Banco/api/EntidadesBancarias/").success(function(result) {
            $scope.entidadesBancarias = result;
        });
    });
});


app.controller('EntidadesBancariasInsertCtrl', function($scope, $http, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Add";
 
 $scope.insertEntidadBancaria = function() {

        $http.post("http://localhost:8084/Banco/api/EntidadBancaria/",$scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/EntidadesBancarias");
    };
    
        $scope.inicio = function() {
        $scope.insertEntidadBancaria();
    };

});

app.controller('EntidadesBancariasUpdateCtrl', function($scope, $http) {
    $scope.entidadesBancarias = null;
    var parametros = getQueryStringParameters();
    $http.put("http://localhost:8084/Banco/api/EntidadBancaria/" + parametros.id).success(function() {
        $http.get("http://localhost:8084/Banco/api/EntidadesBancarias/").success(function(result) {
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

app.controller("entityAddCtrl", function($scope, $http, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Add";

    $scope.insertEntidadBancaria = function() {

        $http.post("/proyecto2_bank_server/api/EntidadBancaria/", $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/Entity");
    };

    $scope.buttonOK = function() {
        $scope.insertEntidadBancaria();
    };

});