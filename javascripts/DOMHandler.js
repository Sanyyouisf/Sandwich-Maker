// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
// function for adding meat
// var SandwichMaker = (function(maker) {
meatChooser.addEventListener("change", function(event) {
  
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  

  // Determine the price of the topping chosen
  console.log("meat price is : " ,SandwichMaker.addMeat(selectedTopping));

  // Add the topping to the SandwichMaker to increase the total price
  var toppingPrice = SandwichMaker.addMeat(selectedTopping)
  SandwichMaker.addTopping(toppingPrice);
  console.log ("toppingPrice meat " , toppingPrice);

});
// })((SandwichMaker || {}));


// function for adding cheese
// var SandwichMaker = (function(maker) {
cheeseChooser.addEventListener("change", function(event){



	// Get the value chosen from the DOM
  selectedTopping = event.target.value;

  
  // Determine the price of the topping chosen
  console.log("cheese price : " , SandwichMaker.addCheese(selectedTopping));

  // Add the topping to the SandwichMaker to increase the total price
  var toppingPrice = SandwichMaker.addCheese(selectedTopping)
  SandwichMaker.addTopping(toppingPrice);
  console.log ("toppingPrice cheese" , toppingPrice);
  console.log("total price ", SandwichMaker.getTopping());

});

// })((SandwichMaker || {}));


