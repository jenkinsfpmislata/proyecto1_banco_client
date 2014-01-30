///////////////// Controladores //////////////////////////////

app.controller('SucursalesBancariasReadAllCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    $scope.nombre = null;
    //http://localhost:8084
    $http.get("/proyecto1_banco_servidor/api/SucursalesBancarias/").success(function(result) {
        $scope.sucursalesBancarias = result;
    });
    $scope.read = function() {
        $http.get("/proyecto1_banco_servidor/api/SucursalBancaria/" + $scope.nombre).success(function(r) {
            $scope.sucursalesBancarias = r;
        });
    };
});

app.controller("SucursalesBancariasReadCtrl", function($scope, $http, $routeParams) {
    $scope.sucursalesBancarias = null;
    var id = $routeParams.id;
    $http.get("/proyecto1_banco_servidor/api/SucursalBancaria/id/" + id).success(function(r) {
        $scope.sucursalesBancarias = r;
    });
});

app.controller('SucursalesBancariasDeleteCtrl', function($scope, $http, $routeParams, $location) {
    $scope.sucursalesBancarias = null;
    var id = $routeParams.id;
    //http://localhost:8084
    $http.delete("/proyecto1_banco_servidor/api/SucursalBancaria/" + id).success(function() {
        $location.path("/SucursalesBancarias");
    });
});


app.controller('SucursalesBancariasInsertCtrl', function($scope, $http, $location) {
    $scope.entidadesBancarias;
    $scope.sucursalBancaria = null;

    $http.get("/proyecto1_banco_servidor/api/EntidadesBancarias").success(function(result) {
        $scope.entidadesBancarias = result;
    });


    $scope.insertSucursalBancaria = function() {
        
        $http.post("/proyecto1_banco_servidor/api/SucursalBancaria/",$scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/SucursalesBancarias");
    };
});

app.controller('SucursalesBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.sucursalBancaria = null;
    $scope.sucursalesBancarias = null;

    $scope.updateSucursalBancaria = function() {
        //http://localhost:8084
        $http.put("/proyecto1_banco_servidor/api/SucursalBancaria/"
                + $routeParams.id, $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/SucursalesBancarias");
    };

    $http.get("/proyecto1_banco_servidor/api/SucursalBancaria/id/" + $routeParams.id).success(function(r) {
        $scope.sucursalesBancarias = r;
    });
});

app.controller('SucursalesPorEntidad', function($scope, $http, $routeParams) {
    var idEntidad = $routeParams.idEntidad;
    $scope.entidadBancaria = null;
    $scope.sucursalesBancarias = null;

    $http.get("/proyecto1_banco_servidor/api/EntidadBancaria/id/" + idEntidad).success(function(r) {
        $scope.entidadBancaria = r;
        $http.get("/proyecto1_banco_servidor/api/EntidadBancaria/" + $scope.entidadBancaria.idEntidad + "/SucursalesBancarias").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    });


});