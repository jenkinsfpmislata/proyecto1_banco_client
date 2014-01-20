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

app.controller('SucursalesBancariasDeleteCtrl', function($scope, $http, $routeParams) {
    $scope.sucursalesBancarias = null;
    var id = $routeParams.id;
    $http.delete("http://localhost:8084/Banco/api/SucursalBancaria/" + id).success(function() {
        $http.get("http://localhost:8084/Banco/api/SucursalesBancarias/").success(function(result) {
            $scope.sucursalesBancarias = result;
        });
    });
});


app.controller('SucursalesBancariasInsertCtrl', function($scope, $http, $location) {
    $scope.sucursalBancaria = null;

    $scope.insertSucursalBancaria = function() {

        $http.post("http://localhost:8084/Banco/api/SucursalBancaria/", $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/SucursalesBancarias");
    };
});

app.controller('SucursalesBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.sucursalBancaria = null;

    $scope.updateSucursalBancaria = function() {
        $http.put("http://localhost:8084/Banco/api/SucursalBancaria/"
                + $routeParams.id, $scope.sucursalBancaria).success(function(result) {
            $scope.sucursalBancaria = result;
        });
        $location.path("/SucursalesBancarias");
    };

});