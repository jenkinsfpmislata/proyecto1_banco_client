
///////////////// Controladores //////////////////////////////

app.controller('MovimientosBancariosReadAllCtrl', function($scope, $http) {
    $scope.movimientosBancarios = null;
    $scope.nombre = null;
             //http://localhost:8084
    $http.get("/proyecto1_banco_servidor/api/MovimientosBancarios").success(function(result) {
        $scope.movimientosBancarios = result;
    });
    
    $scope.read = function(){
    $http.get("/proyecto1_banco_servidor/api/MovimientoBancario/"+$scope.nombre).success(function(r) {
        $scope.movimientosBancarios = r;
        }); 
    };
});
             
app.controller('MovimientosBancariosDeleteCtrl', function($scope, $http, $routeParams, $location) {
    var id = $routeParams.id;
                //http://localhost:8084
    $http.delete("/proyecto1_banco_servidor/api/MovimientoBancario/" + id).success(function() {
        $location.path("/MovimientosBancarios");
    });
});

            
app.controller('MovimientosBancariosInsertCtrl', function($scope, $http, $location) {
    $scope.movimientoBancario = null;

    $scope.insertMovimientoBancario = function() {
                  //http://localhost:8084
        $http.post("/proyecto1_banco_servidor/api/MovimientoBancario/", $scope.movimientoBancario).success(function(result) {
            $scope.movimientoBancario = result;
        });
        $location.path("/MovimientosBancarios");
    };
});
            
app.controller('MovimientosBancariosUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.movimientoBancario = null;

    $scope.updateMovimientoBancario = function() {
                 //http://localhost:8084
        $http.put("/proyecto1_banco_servidor/api/EntidadBancaria/"
                + $routeParams.id, $scope.movimientoBancario).success(function(result) {
            $scope.movimientoBancario = result;
        });
        $location.path("/MovimientosBancarios");
    };
    $http.get("/proyecto1_banco_servidor/api/MovimientoBancario/"+$routeParams.id).success(function(r) {
    $scope.movimientoBancario = r;
    }); 
});
