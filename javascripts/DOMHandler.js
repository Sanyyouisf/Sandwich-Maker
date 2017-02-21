// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var VeggieChooser = document.getElementById("veggies-chooser");
var condimentsChooser = document.getElementById("condiments-chooser");
var breadChooser = document.getElementById("bread-chooser");
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

// function for adding bread
breadChooser.addEventListener("change", function(event) {
  
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  
  // Determine the price of the topping chosen and console it 
  var toppingPrice = SandwichMaker.addBread(selectedTopping);
  console.log(selectedTopping , "price is : " ,toppingPrice);

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(toppingPrice);
});


// function for adding meat 
meatChooser.addEventListener("change", function(event) {
  
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  
  // Determine the price of the topping chosen and console it
  var toppingPrice = SandwichMaker.addMeat(selectedTopping)
  console.log(selectedTopping , "price is : " , toppingPrice);

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(toppingPrice);
});

// function for adding cheese
cheeseChooser.addEventListener("change", function(event){

  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  var toppingPrice = SandwichMaker.addCheese(selectedTopping)

  // Add the topping to the SandwichMaker to increase the total price
  console.log (selectedTopping ,"Price is" , toppingPrice);
   SandwichMaker.addTopping(toppingPrice);
});


// function for adding veggies
VeggieChooser.addEventListener("change", function(event){

	// Get the value chosen from the DOM
	selectedTopping = event.target.value;

	// Determine the price of the topping chosen
	var toppingPrice = SandwichMaker.addVeggie(selectedTopping);
	console.log (selectedTopping ,"Price is" , toppingPrice);

	// Add the topping to the SandwichMaker to increase the total Price
	SandwichMaker.addTopping(toppingPrice);
});


// function for adding condiments
condimentsChooser.addEventListener("change", function(event){

	// Get the value chosen from the DOM
	selectedTopping = event.target.value;
 
 	// Determine the price of the topping chosen
 	var toppingPrice = SandwichMaker.addCondiments(selectedTopping)
  	console.log(selectedTopping, " price : ", toppingPrice);

  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(toppingPrice);
  // console.log("total price ", SandwichMaker.getTopping())
});
















