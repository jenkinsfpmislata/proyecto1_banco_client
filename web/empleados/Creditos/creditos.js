app.controller('CreditosCtrl', function($scope, $http, $routeParams, $location){
   $scope.credito = {};
   $scope.ListaMensajes = [];
    $scope.creditoInsert = function() {
        $http.post("/proyecto1_banco_server/api/Credito/"+$routeParams.id, $scope.credito).success(function(){
             $location.path("/CuentasBancarias");
        }).error(function(data,status){           
            if (status == 400) {
                data = 'Bad Request';
            }else{
                data = 'Este usuario tiene deudas';
            }
            $scope.ListaMensajes=[{datos: status, mensaje: data}];
        });
    };
});