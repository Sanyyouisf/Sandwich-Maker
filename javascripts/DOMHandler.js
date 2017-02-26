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
var toppingDetails = document.getElementById("toppingDetails");
var orderPrice = document.getElementById("orderPrice");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

// function for adding bread

	breadChooser.addEventListener("change", function(event) {
    // to check if the checkbox was checked or note 
  	if (event.target.checked === true) {
      	// Get the value chosen from the DOM
      	selectedTopping = event.target.value;
      	// Determine the price of the topping chosen and console it 
      	var toppingPrice = SandwichMaker.addBread(selectedTopping);
      	console.log(selectedTopping , "price is : " ,toppingPrice);
        toppingDetails.innerHTML +="<p>"+selectedTopping+"  price is : "+toppingPrice+"</p>";
      	// Add the topping to the SandwichMaker to increase the total price
      	SandwichMaker.addTopping(toppingPrice);
     }
	});


 // function for adding meat 
meatChooser.addEventListener("click", function(event) {
  if (event.target.checked === true) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addMeat(selectedTopping)
  console.log(selectedTopping , "price is : " , toppingPrice);
  toppingDetails.innerHTML +="<p>"+selectedTopping+"  price is : "+toppingPrice+"</p>";
  SandwichMaker.addTopping(toppingPrice);
}
});


// function for adding cheese
cheeseChooser.addEventListener("change", function(event){
  if (event.target.checked === true) {
    selectedTopping = event.target.value;
    var toppingPrice = SandwichMaker.addCheese(selectedTopping)
    console.log (selectedTopping ,"Price is" , toppingPrice);
    toppingDetails.innerHTML +="<p>"+selectedTopping+"  price is : "+toppingPrice+"</p>";
     SandwichMaker.addTopping(toppingPrice);
   }
});


// function for adding veggies
VeggieChooser.addEventListener("change", function(event){
  if (event.target.checked === true) {
  	selectedTopping = event.target.value;
  	var toppingPrice = SandwichMaker.addVeggie(selectedTopping);
      console.log (selectedTopping ,"Price is" , toppingPrice);
      toppingDetails.innerHTML +="<p>"+selectedTopping+"  price is : "+toppingPrice+"</p>";
  	 SandwichMaker.addTopping(toppingPrice);
    }
});


// function for adding condiments
condimentsChooser.addEventListener("change", function(event){
  if (event.target.checked === true) {
  	selectedTopping = event.target.value;
   	var toppingPrice = SandwichMaker.addCondiments(selectedTopping)
    console.log(selectedTopping, " price : ", toppingPrice);
    toppingDetails.innerHTML +="<p>"+selectedTopping+"  price is : "+ toppingPrice + "</p>";
    SandwichMaker.addTopping(toppingPrice);
  }
});


//function exceuted when press the button to get the order details
sandwichPrice.addEventListener("click",function(){
	var totalPrice = (" the total of the sandwich is : " +  SandwichMaker.getTopping());
	document.getElementById("orderPrice").innerHTML = totalPrice;
	console.log ("sandwich total price is " ,SandwichMaker.getTopping());
});


// function for the refresh button
	refresh.addEventListener("click",function(){
    document.getElementById("breadForm").reset();
    document.getElementById("meatForm").reset();
    document.getElementById("cheeseForm").reset();
    document.getElementById("condimentsForm").reset();
    document.getElementById("veggiesForm").reset();
    SandwichMaker.resetPrice() ;
    //to delete the toppingDetails from the dom .
   toppingDetails.innerHTML = '';
   document.getElementById("orderPrice").innerHTML =" ";
    console.log("refresh button is pressed");
  });




