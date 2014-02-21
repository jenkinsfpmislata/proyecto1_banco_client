///////////////// Controladores //////////////////////////////

app.controller('SucursalesBancariasReadAllCtrl', function($scope, $http) {
    $scope.sucursalesBancarias = null;
    $scope.nombre = null;
    //http://localhost:8084
    $http.get("/proyecto1_banco_server/api/SucursalesBancarias/").success(function(result) {
        $scope.sucursalesBancarias = result;
    });
    $scope.read = function() {
        $http.get("/proyecto1_banco_server/api/SucursalBancaria/" + $scope.nombre).success(function(r) {
            $scope.sucursalesBancarias = r;
        });
    };
});

app.controller("SucursalesBancariasReadCtrl", function($scope, $http, $routeParams) {
    $scope.sucursalesBancarias = null;
    var id = $routeParams.id;
    $http.get("/proyecto1_banco_server/api/SucursalBancaria/id/" + id).success(function(r) {
        $scope.sucursalesBancarias = r;
    });
});

app.controller('SucursalesBancariasDeleteCtrl', function($scope, $http, $routeParams, $location) {
    $scope.sucursalesBancarias = null;
    var id = $routeParams.id;
    //http://localhost:8084
    $http.delete("/proyecto1_banco_server/api/SucursalBancaria/" + id).success(function() {
        $scope.ListaMensajes = [];
        $location.path("/SucursalesBancarias");
    }).error(function(data,status) {
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
    });
});


app.controller('SucursalesBancariasInsertCtrl', function($scope, $http, $location, $routeParams) {
    $scope.entidadesBancarias;
    $scope.sucursalBancaria = null;

    $http.get("/proyecto1_banco_server/api/EntidadesBancarias").success(function(result) {
        $scope.entidadesBancarias = result;
    });


    $scope.insertSucursalBancaria = function() {
        $http.post("/proyecto1_banco_server/api/SucursalBancaria/" + $routeParams.id, $scope.sucursalBancaria).success(function(result) {
            $scope.ListaMensajes = [];
            $scope.sucursalBancaria = result;
            $location.path("/EntidadBancaria/" + $routeParams.id + "/SucursalesBancarias");
        }).error(function(data,status) {
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
            $location.path("/SucursalesBancariasInsert/" + $routeParams.id)
        });

    };
});

app.controller('SucursalesBancariasUpdateCtrl', function($scope, $http, $routeParams, $location) {
    $scope.sucursalBancaria = null;
    $scope.sucursalesBancarias = null;

    $scope.updateSucursalBancaria = function() {
        //http://localhost:8084
        $http.put("/proyecto1_banco_server/api/SucursalBancaria/"
                + $routeParams.id, $scope.sucursalBancaria).success(function(result) {
            $scope.ListaMensajes = [];
            $scope.sucursalBancaria = result;
            $location.path("/SucursalesBancarias");
        }).error(function(data,status) {
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
                $location.path("/SucursalesBancariasUpdate/" + $routeParams.id)
        });

    };

    $http.get("/proyecto1_banco_server/api/SucursalBancaria/id/" + $routeParams.id).success(function(r) {
        $scope.sucursalesBancarias = r;
    });
});

app.controller('SucursalesPorEntidad', function($scope, $http, $routeParams) {
    var idEntidad = $routeParams.idEntidad;
    $scope.entidadBancaria = null;
    $scope.sucursalesBancarias = null;

    $http.get("/proyecto1_banco_server/api/EntidadBancaria/id/" + idEntidad).success(function(r) {
        $scope.ListaMensajes = [];
        $scope.entidadBancaria = r;
        $http.get("/proyecto1_banco_server/api/EntidadBancaria/" + $scope.entidadBancaria.idEntidad + "/SucursalesBancarias").success(function(result) {
            $scope.ListaMensajes = [];
            $scope.sucursalesBancarias = result;
        }).error(function(data,status) {
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
            });
    }).error(function(data,status) {
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
            });
});
