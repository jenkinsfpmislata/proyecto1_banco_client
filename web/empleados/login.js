var app = angular.module("app", []);

app.controller('LoginCtrl', function($scope, $http) {
    $scope.login = null;
    $scope.logeo = function() {
//        if($scope.login.username === "root" && $scope.login.password === "root" || 
//                $scope.login.username === "pepe" && $scope.login.password === "pepe"){
        $http.post("/proyecto1_banco_server/api/Session", $scope.login).success(function(result) {
            window.location = "index.html";
//         });
//      }else{
//          alert("Error al introducir el usuario o la contraseña");
//      }
        }, function(error) {
            alert("Error al introducir el usuario o la contraseña");
        });
    };
});
