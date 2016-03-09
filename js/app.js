(function(){
  var happyHour = {
    where: "Golden's Deli",
    what: "Free Beer",
    day: "Monday",
    price: 0.01,
  };
  
  var app = angular.module('hh', []);

  app.controller('HhController', function(){
    this.special = happyHour;
  });

})();
