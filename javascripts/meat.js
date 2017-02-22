// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // meatPrices is object and cheicken is key and 1.5 is value.
  var meatPrices ={"turky": 1.90, "chicken": 1.50, "ham": 1.2,"beef": .75,
  				   "bacon": 1.50 ,"meatball": 1.50, "none": 0 };
 

  // Augment the original object with another method
  maker.addMeat = function(meatChoice){
    return meatPrices[meatChoice];
  }

  // Return the new, augmented object with the new method on it
  return maker;
  // console.log(maker);
})(SandwichMaker || {});





