
///////////////// Controladores //////////////////////////////

app.controller('EntidadesBancariasReadAllCtrl', function($scope, $http) {
    $scope.entidadesBancarias = null;
    $scope.nombre = null;
    //http://localhost:8084
    $http.get("/proyecto1_banco_server/api/EntidadesBancarias").success(function(result) {
        $scope.entidadesBancarias = result;
    });

    $scope.read = function() {
        $http.get("/proyecto1_banco_server/api/EntidadBancaria/" + $scope.nombre).success(function(r) {
            $scope.entidadesBancarias = r;
        });
    };
});

app.controller('EntidadesBancariasDeleteCtrl', function($scope, $http, $routeParams, $location) {

    var id = $routeParams.id;
    //http://localhost:8084
    $http.delete("/proyecto1_banco_server/api/EntidadBancaria/" + id).success(function() {
        $scope.ListaMensajes = [];
    }).error(function() {
        $scope.ListaMensajes = [{datos: "Error : ", mensaje: "No se ha podido efectuar su peticion."}];
    });
    $location.path("/EntidadesBancarias");
});


app.controller('EntidadesBancariasInsertCtrl', function($scope, $http, $location) {

    $scope.tipoEntidades = [{
            valor: "BANCO",
            nombre: "Bank"
        }, {
            valor: "CAJAAHORRO",
            nombre: "Thrift"
        }, {
            valor: "COOPERATIVACREDITO",
            nombre: "Credit union"
        }, {
            valor: "ESTFINANCIERO",
            nombre: "Credit institution"
        }];
    $scope.entidadBancaria = {};
    $scope.entidadBancaria.tipo = $scope.tipoEntidades[0].valor;

    $scope.insertEntidadBancaria = function() {
        //http://localhost:8084
        $http.post("/proyecto1_banco_server/api/EntidadBancaria/", $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
            $scope.ListaMensajes = [];
            $location.path("/EntidadesBancarias");
        }).error(function(data, status) {
            switch (status) {
                case 400 :
                    data='Bad Request';
                break;
                case 500 :
                    data='Internal Server Error';
                break;
                default:
                    data='Could not perform this request';
                    break;
            }
                $scope.ListaMensajes = [{datos: status , mensaje: data}];
                $location.path("/EntidadesBancariasInsert/");
        });

    };
});

app.controller('EntidadesBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.tipoEntidades = [{
            valor: "BANCO",
            nombre: "Bank"
        }, {
            valor: "CAJAAHORRO",
            nombre: "Thrift"
        }, {
            valor: "COOPERATIVACREDITO",
            nombre: "Credit union"
        }, {
            valor: "ESTFINANCIERO",
            nombre: "Credit institution"
        }];
    $scope.entidadBancaria = {};
    $scope.entidadBancaria.tipo = $scope.tipoEntidades[0].valor;

    $scope.updateEntidadBancaria = function() {
        $http.put("/proyecto1_banco_server/api/EntidadBancaria/"
                + $routeParams.id, $scope.entidadBancaria).success(function(result) {
            $scope.entidadBancaria = result;
            $location.path("/EntidadesBancarias");
        }).error(function(data, status) {
                switch (status) {
                case 400 :
                    data='Bad Request';
                break;
                case 500 :
                    data='Internal Server Error';
                break;
                default:
                    data='Could not perform this request';
                    break;
            }
                $scope.ListaMensajes = [{datos: status , mensaje: data}];
                $location.path("/EntidadesBancariasUpdate/"+ $routeParams.id);
        });
    };
    $http.get("/proyecto1_banco_server/api/EntidadBancaria/id/" + $routeParams.id).success(function(r) {
        $scope.entidadBancaria = r;
    });
});
