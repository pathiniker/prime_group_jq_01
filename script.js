$( document ).ready(function() {


var count = 300;
var counter = setInterval(timer, 1000);

function timer() {
	count = count-1;
	if (count <=0) {
		clearInterval(counter);
		return;
	}
	document.getElementById('timer').innerHTML=count + ' secs';
}

var orangeCart = 0;
var bananaCart = 0;
var grapeCart = 0;
var appleCart = 0;

//num.toFixed(2)
var averageOrange = 0;
var averageBanana = 0;
var averageGrape = 0;
var averageApple = 0;

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




// random initial market prices
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

var orangeMP = (randomNumber(50, 999)) / 100;
var bananaMP = (randomNumber(50, 999)) / 100;
var grapeMP = (randomNumber(50, 999)) / 100;
var appleMP = (randomNumber(50, 999)) / 100;

// var fruits = [oranges, bananas, grapes, apples];

var cart = 0;
var totalCash = 100

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




 $('#BuyOranges').click(function() {
	 orangeClicks++;
	 orangeCart++;
	 orangeSpent = orangeSpent + orangeMP;
	 averageOrange = orangeSpent / orangeClicks;
	 console.log(averageOrange);
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
