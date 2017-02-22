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
var sandwichPrice = document.getElementById("orderDetails");
var refresh = document.getElementById("refresh");
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


// get reference to element containing toppings checkboxes
// var meatChooser = document.getElementById('meat-chooser');

// get reference to input elements in toppings container element
var tops = meatChooser.getElementsByTagName('input');


 // function for adding meat 
meatChooser.addEventListener("click", function(event) {
   // console.log(" for meat we choose : ",meatChooser);
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
  // console.log("total price ",SandwichMaker.getTopping())
});

//function exceuted when press the button to get the order details

sandwichPrice.addEventListener("click",function(){

	var totalPrice = (" the total of the sandwich is : " +  SandwichMaker.getTopping());
	document.getElementById("orderPrice").innerHTML = totalPrice;
	console.log ("sandwich total price is " ,SandwichMaker.getTopping());
	// alert ("sandwich total price is " ,SandwichMaker.getTopping());
});

// function for the refresh button
refresh.addEventListener("click",function(){
	console.log("refresh button is pressed")
// for(var i=0; i < refresh.rows.length; i++)
// { 
//  var cells = refresh.rows[i].cells;
//  for(var j=0; j < cells.length; j++) 
//  {
//       var element = findInlineEditPanelInElement(cells[j]);
//       if(checkbox.checked === true){
//          checkbox.checked === false;
//       }
//       else if(radio.checked === true){
//          radio.checked === false;
//       }
//       console.log("refresh button is pressed")
//  }
// }
	
});















