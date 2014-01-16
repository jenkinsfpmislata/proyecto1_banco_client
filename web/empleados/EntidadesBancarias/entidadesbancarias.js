
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

app.controller('EntidadesBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.entidadBancaria = null;
    $scope.title = "Edit ";
    
    $scope.readEntidadBancaria = function() {
        $http.get("http://localhost:8084/Banco/api/EntidadBancaria/"+ $routeParams.id).success(function(result) {
            $scope.entidadBancaria = result;
        });
    };
   
    $scope.updateEntidadBancaria = function() {
        $http.put("http://localhost:8084/Banco/api/EntidadBancaria/"
                + $routeParams.id,$scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
        });
        $location.path("/EntidadesBancarias");
    };
    $scope.readEntidadBancaria();
    
    $scope.inicio2 = function() {
        $scope.updateEntidadBancaria();
    };
});