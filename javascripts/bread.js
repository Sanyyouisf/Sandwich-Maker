// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // meatPrices is object and cheicken is key and 1.5 is value.
  var breadPrices ={"italian": 0.90, "flatbread": .45, "ryeBread": .78,
                    "multiGrainFlatbread": .75,"italianHerbsCheese": 1.50, "none": 0 };
 
  // Augment the original object with another method
  maker.addBread = function(breadChoice){
    return breadPrices[breadChoice];
  }
  // Return the new, augmented object with the new method on it
  return maker;
  // console.log(maker);
})(SandwichMaker || {});





