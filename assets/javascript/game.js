
//restart();

//function restart(){
//Declare global variables
var compGuess = Math.floor((Math.random() * 100) + 5);
var tealNum = Math.floor((Math.random() * 10) + 1);
var redNum = Math.floor((Math.random() * 20) + 1);
var yellowNum = Math.floor((Math.random() * 40) + 1);
var pinkNum = Math.floor((Math.random() * 20) + 1);
var points = 0;


//if(points > compGuess){

//restart();

//}
//else{

//generate computer guess
$("#targetPointsFont").html(compGuess);





$("#tealGem").on("click", function(){

	var newNum = parseInt($("#actualPointsFont").html());
	points = tealNum + newNum;
	$("#actualPointsFont").html(points);
});


//red Gem randomNumber generator
$("#redGem").on("click", function(){

	var newNum = parseInt($("#actualPointsFont").html());
	points = redNum + newNum;
	$("#actualPointsFont").html(points);


});


//yellow Gem randomNumber generator
$("#yellowGem").on("click", function(){

	var newNum = parseInt($("#actualPointsFont").html());
	points = yellowNum + newNum;
	$("#actualPointsFont").html(points);
});


//pink Gem randomNumber generator
$("#pinkGem").on("click", function(){

	var newNum = parseInt($("#actualPointsFont").html());
	points = pinkNum + newNum;
	$("#actualPointsFont").html(points);

})//}



//}
