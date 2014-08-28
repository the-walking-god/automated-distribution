function AppsCtrl($scope, $http) {

 $scope.doDecr = function() {
    
    $http({method: 'GET', url: $scope.pwdText.substring(0,1)=='A'?'homes.txt':'remax.txt'}).
    success(function(data, status, headers, config) {
    successCallback(data);
    }).
    error(function(data, status, headers, config) {
    });

  };
    
  function successCallback(resp){
      var data = sjcl.decrypt($scope.pwdText, JSON.stringify(resp));
      try{
        $scope.apps = JSON.parse(data);
      }
      catch(e){}
  }
    
};

