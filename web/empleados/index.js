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
            
            .when("/SucursalesBancarias/", {
                templateUrl: "SucursalesBancarias/search.html",
                controller: "SucursalesBancariasReadAllCtrl"
            })
            
            .when("/EntidadesBancariasDelete/:id", {
                templateUrl:"SucursalesBancarias/search.html",
                controller: "SucursalesBancariasDeleteCtrl"
            })
            
        .otherwise({
        redirectTo: "/"
    });
});