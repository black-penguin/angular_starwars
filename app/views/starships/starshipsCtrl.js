angular.module("starwars").controller("starshipsCtrl", function($scope, starshipsSrvc)
{
  $scope.name="starships";
  // $scope.data=starshipsSrvc.staticData;
  starshipsSrvc.getStarships().then(data=>
  {
    $scope.data=data;
  })
})
