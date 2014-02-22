var app = angular.module("app", []);

app.controller('LoginCtrl', function($scope, $http) {
    $scope.login = null;
    $scope.usuario=null;
    $scope.logeo = function() {
        $http.post("/proyecto1_banco_server/api/Session", $scope.login).success(function(result) {        
            window.location = "../cliente/index.html";
        }).error(function(error) {
            alert("Error al introducir el usuario o la contraseña");
        });
    };
    
    $scope.getLogin=function($http){
        $http.get("/proyecto1_banco_server/api/Session").succes(function(result){
            $scope.usuario=result;
        });
        
    };
    
    $scope.logout=function(){
        
    }
});
