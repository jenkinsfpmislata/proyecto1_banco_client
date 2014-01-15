var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when("/",
            {
                templateUrl: "main.html",
                controller: "MainCtrl"
            });
            
            $routeProvider.when('transfers/transfers',
            {
                templateUrl: "transfers/transfers.html",
                controller: "TransfersCtrl"
            })
        .otherwise({
        redirectTo: "/"
    });
});