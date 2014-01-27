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
            
            //Rutas Sucursal Bancaria/////////////////////////////////////
            .when("/SucursalBancaria/", {
                templateUrl: "SucursalesBancarias/search.html",
                controller: "SucursalesBancariasReadCtrl"
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
            
            //Rutas Cuenta Bancaria/////////////////////////////////////
            
            .when("/CuentaBancaria/", {
                templateUrl: "CuentasBancarias/search.html",
                controller: "CuentasBancariasReadCtrl"
            })
            
            .when("/CuentasBancarias/", {
                templateUrl: "CuentasBancarias/search.html",
                controller: "CuentasBancariasReadAllCtrl"
            })
            
             .when("/CuentasBancariasInsert/", {
                templateUrl:"CuentasBancarias/FormAddAccount.html",
                controller: "CuentasBancariasInsertCtrl"
            })
            
            .when("/CuentasBancariasDelete/:id", {
                templateUrl:"CuentasBancarias/search.html",
                controller: "CuentasBancariasDeleteCtrl"
            })
            
            .when("/CuentasBancariasUpdate/:id", {
                templateUrl:"CuentasBancarias/FormUpdateAccount.html",
                controller: "CuentasBancariasUpdateCtrl"
            })
            
            //Rutas Movimiento Bancaria/////////////////////////////////////
            
            .when("/MovimientoBancario/", {
                templateUrl: "MovimientosBancarios/search.html",
                controller: "MovimientosBancariosReadCtrl"
            })
            
            .when("/MovimientosBancarios/", {
                templateUrl: "MovimientosBancarios/search.html",
                controller: "MovimientosBancariosReadAllCtrl"
            })
            
             .when("/MovimientosBancariosInsert/", {
                templateUrl:"MovimientosBancarios/FormAddMovement.html",
                controller: "MovimientosBancariosInsertCtrl"
            })
            
            .when("/MovimientosBancariosDelete/:id", {
                templateUrl:"MovimientosBancarios/search.html",
                controller: "MovimientosBancariosDeleteCtrl"
            })
            
            .when("/MovimientosBancariosUpdate/:id", {
                templateUrl:"MovimientosBancarios/FormUpdateMovement.html",
                controller: "MovimientosBancariosUpdateCtrl"
            })
            
            .when("/SucursalesDeEntidad/:nombre", {
                templateUrl:"SucursalesBancarias/SucursalesPorEntidad.html",
                controller:"SucursalesPorEntidad"
            })
            
        .otherwise({
        redirectTo: "/"
    });
});
