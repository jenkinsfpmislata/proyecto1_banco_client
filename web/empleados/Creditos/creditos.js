app.controller('CreditosCtrl', function($scope, $http, $routeParams, $location){
   $scope.credito = {};
   
    $scope.creditoInsert = function() {
        $http.post("/proyecto1_banco_server/api/Credito/"+$routeParams.id, $scope.credito).success(function(){
             $scope.listaMensajes = [];
             $location.path("/CuentasBancarias");
        }).error(function(data,status){
            if (status == 400) {
                data = 'Bad Request';
            }else{
                data = 'Could not perform this request';
            }
            $scope.listaMensajes=[{datos: status, mensaje: data}];
        });
    };
});