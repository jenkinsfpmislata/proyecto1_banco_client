var app = angular.module("app", ["ngRoute"]);

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
        .otherwise({
        redirectTo: "/"
    });
});