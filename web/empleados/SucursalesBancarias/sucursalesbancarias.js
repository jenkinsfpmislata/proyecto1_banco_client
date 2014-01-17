///////////////// Controladores //////////////////////////////

app.controller('SucursalesBancariasReadAllCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    $http.get("/Banco/api/SucursalesBancarias/").success(function(result) {
        $scope.sucursalesBancarias = result;
    });
//    $http.get("/proyecto1_banco_servidor/api/SucursalesBancarias/").success(function(result) {
//        $scope.sucursalesBancarias = result;
//    });
});

app.controller("SucursalesBancariasReadCtrl", function($scope, $http) {
    $scope.sucursalesBancarias = null;
    var parametros = getQueryStringParameters();
    $http.get("/Banco/api/SucursalBancaria/" + parametros.id).success(function(r) {
        $scope.sucursalesBancarias = r;
    });
//    $http.get("/proyecto1_banco_servidor/api/SucursalBancaria/" + parametros.id).success(function(r) {
//        $scope.sucursalesBancarias = r;
//    });
});

app.controller('SucursalesBancariasDeleteCtrl', function($scope, $http, $routeParams) {
    $scope.sucursalesBancarias = null;
    var id = $routeParams.id;
    $http.delete("/Banco/api/SucursalBancaria/" + id).success(function() {
        $http.get("/Banco/api/SucursalesBancarias/").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    });
//    $http.delete("/proyecto1_banco_servidor/api/SucursalBancaria/" + id).success(function() {
//        $http.get("/proyecto1_banco_servidor/api/SucursalesBancarias/").success(function(result) {
//            $scope.sucursalesBancarias = result;
//        });
//    });
});


app.controller('SucursalesBancariasInsertCtrl', function($scope, $http, $location) {
    $scope.sucursalBancaria = null;
    $scope.title = "Add";

    $scope.insertSucursalBancaria = function() {
        $http.post("/Banco/api/SucursalBancaria/", $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
//        $http.post("/proyecto1_banco_servidor/api/SucursalBancaria/", $scope.sucursalBancaria).success(function(result) {
//            $scope.sucursalBancaria = result;
//        });
        $location.path("/SucursalesBancarias");
    };

    $scope.inicio = function() {
        $scope.insertSucursalBancaria();
    };
});

app.controller('SucursalesBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.sucursalBancaria = null;
    $scope.title = "Edit ";

    $scope.readSucursalBancaria = function() {
        $http.get("/Banco/api/SucursalBancaria/" + $routeParams.id).success(function(result) {
            $scope.sucursalBancaria = result;
        });
//        $http.get("/proyecto1_banco_servidor/api/SucursalBancaria/" + $routeParams.id).success(function(result) {
//            $scope.sucursalBancaria = result;
//        });
    };

    $scope.updateSucursalBancaria = function() {
        $http.put("/Banco/api/SucursalBancaria/"
                + $routeParams.id, $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
//        $http.put("/proyecto1_banco_servidor/api/SucursalBancaria/"
//                + $routeParams.id, $scope.sucursalBancaria).success(function(result) {
//            $scope.sucursalBancaria = result;
//        });
        $location.path("/SucursalesBancarias");
    };

    $scope.readSucursalBancaria();

    $scope.inicio2 = function() {
        $scope.updateSucursalBancaria();
    };
});