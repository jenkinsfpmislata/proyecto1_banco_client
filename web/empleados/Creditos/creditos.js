app.controller('CreditosCtrl', function($scope, $http, $routeParams, $location){
   $scope.credito = {};
   
    $scope.creditoInsert = function() {
        $http.post("/proyecto1_banco_server/api/Credito/"+$routeParams.id, $scope.credito).success(function(){
             $location.path("/CuentasBancarias");
        });
    };
});