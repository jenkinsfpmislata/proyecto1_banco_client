
///////////////// Controladores //////////////////////////////

app.controller('EntidadesBancariasReadAllCtrl', function($scope, $http) {
    $scope.entidadesBancarias = null;

    $http.get("/Banco/api/EntidadesBancarias").success(function(result) {
        $scope.entidadesBancarias = result;
    });
//    $http.get("/proyecto1_banco_servidor/api/EntidadesBancarias").success(function(result) {
//        $scope.entidadesBancarias = result;
//    });

});


app.controller("EntidadesBancariasReadCtrl", function($scope, $http, $routeParams) {
    $scope.entidadBancaria = null;
    var id = $routeParams.id;

    $http.get("/Banco/api/EntidadBancaria/"+id).success(function(r) {
        $scope.entidadBancaria = r;
    });
//    $http.get("/proyecto1_banco_servidor/api/EntidadBancaria/"+id).success(function(r) {
//        $scope.entidadBancaria = r;
//    });
    $scope.inicio = function(){
        
    };
});

app.controller('EntidadesBancariasDeleteCtrl', function($scope, $http, $routeParams) {
    $scope.entidadesBancarias = null;
    var id = $routeParams.id;
    $http.delete("/Banco/api/EntidadBancaria/" + id).success(function() {
        $http.get("/Banco/api/EntidadesBancarias/").success(function(result) {
            $scope.entidadesBancarias = result;
        });
    });
//    $http.delete("/proyecto1_banco_servidor/api/EntidadBancaria/" + id).success(function() {
//        $http.get("/proyecto1_banco_servidor/api/EntidadesBancarias/").success(function(result) {
//            $scope.entidadesBancarias = result;
//        });
//    });
});


app.controller('EntidadesBancariasInsertCtrl', function($scope, $http, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Add";
 
 $scope.insertEntidadBancaria = function() {

        $http.post("/Banco/api/EntidadBancaria/",$scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
//        $http.post("/proyecto1_banco_servidor/api/EntidadBancaria/",$scope.entidadBancaria).success(function(result) {
//            $scope.entidadBancaria = result;
//        });
        $location.path("/EntidadesBancarias");
    };
    
        $scope.inicio = function() {
        $scope.insertEntidadBancaria();
    };

});

app.controller('EntidadesBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Edit ";
    
    $scope.readEntidadBancaria = function() {
        $http.get("/Banco/api/EntidadBancaria/"+ $routeParams.id).success(function(result) {
            $scope.entidadBancaria = result;
        });
//        $http.get("/proyecto1_banco_servidor/api/EntidadBancaria/"+ $routeParams.id).success(function(result) {
//            $scope.entidadBancaria = result;
//        });
    };
   
    $scope.updateEntidadBancaria = function() {
        $http.put("/Banco/api/EntidadBancaria/"
                + $routeParams.id,$scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
//        $http.put("/proyecto1_banco_servidor/api/EntidadBancaria/"
//                + $routeParams.id,$scope.entidadBancaria).success(function(result) {
//            $scope.entidadBancaria = result;
//        });
        $location.path("/EntidadesBancarias");
    };
    $scope.readEntidadBancaria();
    
    $scope.inicio2 = function() {
        $scope.updateEntidadBancaria();
    };
});