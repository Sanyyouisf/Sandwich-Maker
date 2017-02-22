// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // cheesePrices is object and cheicken is key and 1.5 is value.
  var cheesePrices ={"pepperJack": 0.15, "provolone": .25,"shreddedMozzarella": .45,
                     "whiteAmerican": .35,"montereyCheddar": .55 , "none": 0 };
 
  // Augment the original object with another method
  maker.addCheese = function(cheeseChoice){
    return cheesePrices[cheeseChoice];
  }

  // Return the new, augmented object with the new method on it
  return maker;
  // console.log(maker);
})(SandwichMaker || {});