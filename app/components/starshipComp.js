angular.module("starwars").component("starship", {
  // template:'<div></div>',
  controller:function()
  {
    this.goToHyperSpace=()=>
    {
      alert(`The ${this.details.name} is going to hyperspace`)
    }
  },
  bindings:
  {
    owner: '@', //this is string binding
    details: '<', //One way binding
    onPurchase: '&', //action binding
    fullDetails:'<'
  },
  controllerAs:'ship',
  templateUrl:'app/components/starshipTemplate.html'
})
