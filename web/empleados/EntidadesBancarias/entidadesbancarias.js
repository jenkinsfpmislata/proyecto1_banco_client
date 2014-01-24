
///////////////// Controladores //////////////////////////////

app.controller('EntidadesBancariasReadAllCtrl', function($scope, $http) {
    $scope.entidadesBancarias = null;
             //http://localhost:8084
    $http.get("/proyecto1_banco_servidor/api/EntidadesBancarias").success(function(result) {
        $scope.entidadesBancarias = result;
    });
});

             
app.controller("EntidadesBancariasReadCtrl", function($scope, $http, $routeParams) {
    $scope.entidadBancaria = null;
    var id = $routeParams.id;
             //http://localhost:8084
    $http.get("/proyecto1_banco_servidor/api/EntidadBancaria/" + id).success(function(r) {
        $scope.entidadBancaria = r;
    });
});
             
app.controller('EntidadesBancariasDeleteCtrl', function($scope, $http, $routeParams, $location) {
    var id = $routeParams.id;
                //http://localhost:8084
    $http.delete("/proyecto1_banco_servidor/api/EntidadBancaria/" + id).success(function() {
        $location.path("/EntidadesBancarias");
    });
});

            
app.controller('EntidadesBancariasInsertCtrl', function($scope, $http, $location) {
    $scope.entidadBancaria = null;

    $scope.insertEntidadBancaria = function() {
                  //http://localhost:8084
        $http.post("/proyecto1_banco_servidor/api/EntidadBancaria/", $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/EntidadesBancarias");
    };
});
            
app.controller('EntidadesBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.entidadBancaria = null;

    $scope.updateEntidadBancaria = function() {
                 //http://localhost:8084
        $http.put("/proyecto1_banco_servidor/api/EntidadBancaria/"
                + $routeParams.id, $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/EntidadesBancarias");
    };
    $http.get("/proyecto1_banco_servidor/api/EntidadBancaria/"+$routeParams.id).success(function(r) {
    $scope.entidadBancaria = r;
    }); 
});
