var app = angular.module("app", []);

app.controller('LoginCtrl', function($scope, $http) {
    $scope.login = null;
    $scope.logeo = function() {
        if ($scope.login.username === "root") {
         $http.post("/proyecto1_banco_servidor/api/Session", $scope.login).success(function(result) {
          window.location="index.html";
        }); 
        }else{
          alert("Nombre de usuario o login incorrecto"); 
        };
    };
});