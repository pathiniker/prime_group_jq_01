$( document ).ready(function() {

	$('#SellOranges').click(function sOrange() {

 	 totalCash = totalCash + orangeMP;
	 if (orangeCart < 1) {
		 sOrange.stop();
	 }
	 orangeCart--;
 	 $('#totalCash').text('Total Cash: $' + totalCash.toFixed(2));
 	 $('#OrangeCart').text(orangeCart);
  });

	var averageOrange = 0;
	var averageBanana = 0;
	var averageGrape = 0;
	var averageApple = 0;

	var cart = 0;
	var totalCash = 100;

	var orangeMP = (randomNumber(50, 999)) / 100;
	var bananaMP = (randomNumber(50, 999)) / 100;
	var grapeMP = (randomNumber(50, 999)) / 100;
	var appleMP = (randomNumber(50, 999)) / 100;

// $('#start').click(function() {


	// random initial market prices
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}



//write market prices
$('#MarketOrange').text(orangeMP.toFixed(2));
$('#MarketBanana').text(bananaMP.toFixed(2));
$('#MarketGrape').text(grapeMP.toFixed(2));
$('#MarketApple').text(appleMP.toFixed(2));

//write average prices
$('#AverageOrange').text(averageOrange.toFixed(2));
$('#AverageBanana').text(averageBanana.toFixed(2));
$('#AverageGrape').text(averageGrape.toFixed(2));
$('#AverageApple').text(averageApple.toFixed(2));

$('#totalCash').text('Total Cash: $' + totalCash.toFixed(2));



	var count = 300;
	var counter = setInterval(timer, 1000);

	function timer() {
		count = count-1;
		if (count <= -1) {
			clearInterval(counter);
			return;
		}
		document.getElementById('timer').innerHTML=count + ' seconds';
	}


	//  var addSub = 0;
	//  var inc = 0;
	//
	//  function fifteenAddSub(min, max) {
	//  	return Math.floor(Math.random() * (max - min) + min);
	//  }
	//
	//  function fifteenInc(min, max) {
	//  	return Math.floor(Math.random() * (max - min) + min);
	//  }

function doThis() {


}

	// // 15 second timer
	// setInterval(function(fifteenOrange) {
	//  $(orangeMP).doThis().overAndOver();
	// }, 15000);
	// setInterval(function(fifteenBananas) {
	//  $(bananaMP).doThis().overAndOver();
	// }, 15000);
	// setInterval(function(fifteenGrapes) {
	//  $(grapeMP).doThis().overAndOver();
	// }, 15000);
	// setInterval(function(fifteenApples) {
	//  $(appleMP).doThis().overAndOver();
	// }, 15000);



// })





var orangeCart = 0;
var bananaCart = 0;
var grapeCart = 0;
var appleCart = 0;



var orangeSpent = 0;
var bananaSpent = 0;
var grapeSpent = 0;
var appleSpent = 0;

var orangeClicks = 0;
var bananaClicks = 0;
var grapeClicks = 0;
var appleClicks = 0;



// console.log(Math.random().toFixed(2));

// setInterval(function() {
// 	$('#BuyOranges').doThis().overAndOver();
// }, 15000);








// var fruits = [oranges, bananas, grapes, apples];



// //function for data storage
// 	function buyFruit (object) {
// 		for (var i = 0; i < fruits.length; i++) {
// 			fruits[i];
// 		}
// 	}

// subtract purchase from total cash
 // $('.buy').click(function() {
 //  totalCash -= marketPrice;
 // //  var cart
 //
 // })





 $('#BuyOranges').click(function oClick() {

	 orangeClicks++;
	 orangeCart++;
	 orangeSpent = orangeSpent + orangeMP;
	 averageOrange = orangeSpent / orangeClicks;
	 totalCash = totalCash - orangeMP;
	 if (totalCash <0) {
	 	oClick.stop();
	 }
	 //.off
	 $('#totalCash').text('Total Cash: $' + totalCash.toFixed(2));
	 $('#OrangeCart').text(orangeCart);
	 $('#AverageOrange').text(averageOrange.toFixed(2));
 });

 $('#BuyBananas').click(function() {
	 bananaClicks++;
	 bananaCart++;
	 bananaSpent = bananaSpent + bananaMP;
	 averageBanana = bananaSpent / bananaClicks;
	 console.log(averageBanana)
 });

 $('#BuyGrapes').click(function() {
	 grapeClicks++;
	 grapeCart++;
	 grapeSpent = grapeSpent + grapeMP;
	 averageGrape = grapeSpent / grapeClicks;
	 console.log(averageGrape)
 });

 $('#BuyApples').click(function() {
	 appleClicks++;
	 appleCart++;
	 appleSpent = appleSpent + appleMP;
	 averageApple = appleSpent / appleClicks;
	 console.log(averageApple)
 });







//end of document ready
});
