app.controller('LoginCtrl', function($scope, $http, $location) {
    $scope.login = null;
    
    $scope.logeo = function(){
    $http.post("/proyecto1_banco_servidor/api/Login/", $scope.login).success(function(result) {
        if(result){
          $location.path("index.html");  
        }else{
          $location.path("login.html");    
        }
     });
   };
});