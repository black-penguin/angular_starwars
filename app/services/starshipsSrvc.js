angular.module("starwars").service("starshipsSrvc", function($http)
{
  this.staticData="just to show how we can use a service in our controllers";

  this.getStarships=function()
  {
    return $http.get("https://swapi.co/api/starships/").then((res)=>
    {
      // return res.data.results
      // to get id from url property
      return res.data.results.map(e=>
      {
        e.id = e.url.slice(31, e.url.length-1)*1;
        return e;
      })
    })
    .catch(err=>console.log(err));
  }

  this.getStarship=function(id)
  {
    return $http.get(`https://swapi.co/api/starships/${id}/`).then((res)=>
    {
      // data transformations
      return res.data
    })
    .catch(err=>console.log(err));
  }
})
