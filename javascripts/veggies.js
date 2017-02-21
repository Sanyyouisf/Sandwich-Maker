// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices ={"lettuce": 0.50, "spinach": .29, "tomatoes": .25,"cucumbers": .42,
  				   "greenPeppers": .33 ,"none": 0 };
 

  // Augment the original object with another method
  maker.addVeggie = function(veggieChoice){
    return veggiePrices[veggieChoice];
  }

  // Return the new, augmented object with the new method on it
  return maker;
  // console.log(maker);
})(SandwichMaker || {});





