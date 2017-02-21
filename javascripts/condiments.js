// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  // cheesePrices is object and cheicken is key and 1.5 is value.
  var condimentsPrices ={"salt": 0.15, "pepper": .14,"oregano": .17,
                     "gratedParmesanCheese": .11,"vinger": .12 ,"none": 0 };
 
  // Augment the original object with another method
  maker.addCondiments = function(condimentsChoice){
    return condimentsPrices[condimentsChoice];
  }

  // Return the new, augmented object with the new method on it
  return maker;
  // console.log(maker);
})(SandwichMaker || {});