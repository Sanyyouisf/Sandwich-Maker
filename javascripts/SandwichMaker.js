
// var totalPrice = 0;
var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice =0;
  var selectedTopping= "" ;
  var toppingPrice ="" ;

  // Return the public interface that other code can interact with
  //the original iife return object that is return {}
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    },
    getTopping : function(){
    	return totalPrice
    },
    resetPrice : function(){
       totalPrice = 0 ;
    }
    // deleteTopping : function(toppingPrice){
    //   totalPrice -= toppingPrice;
    //   // SandwichMaker.getTopping();
    //   console.log("deleteTopping is executing");
    // }
  };
})();