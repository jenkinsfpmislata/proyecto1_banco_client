var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "main.html",
                controller: "MainCtrl"
            })
            
            .when("/EntidadesBancarias/", {
                templateUrl: "EntidadesBancarias/search.html",
                controller: "EntidadesBancariasReadAllCtrl"
            })
            
            .when("/EntidadesBancariasDelete/:id", {
                templateUrl:"EntidadesBancarias/search.html",
                controller: "EntidadesBancariasDeleteCtrl"
            })

            .when("/EntidadesBancariasInsert/", {
                templateUrl:"EntidadesBancarias/FormAddEntity.html",
                controller: "EntidadesBancariasInsertCtrl"
            })
            
            .when("/EntidadesBancariasUpdate/:id", {
                templateUrl:"EntidadesBancarias/FormUpdateEntity.html",
                controller: "EntidadesBancariasUpdateCtrl"
            })
            
            .when("/SucursalesBancarias/", {
                templateUrl: "SucursalesBancarias/search.html",
                controller: "SucursalesBancariasReadAllCtrl"
            })
            
             .when("/SucursalesBancariasInsert/", {
                templateUrl:"SucursalesBancarias/FormAddBranch.html",
                controller: "SucursalesBancariasInsertCtrl"
            })
            
            .when("/SucursalesBancariasDelete/:id", {
                templateUrl:"SucursalesBancarias/search.html",
                controller: "SucursalesBancariasDeleteCtrl"
            })
            
            .when("/SucursalesBancariasUpdate/:id", {
                templateUrl:"SucursalesBancarias/FormUpdateBranch.html",
                controller: "SucursalesBancariasUpdateCtrl"
            })
            
            .when("/SucursalesDeEntidad/:nombre", {
                templateUrl:"SucursalesBancarias/SucursalesPorEntidad.html",
                controller:"SucursalesPorEntidad"
            })
            
        .otherwise({
        redirectTo: "/"
    });
});