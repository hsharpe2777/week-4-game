

//Declare global variables
var compGuess = 0;
var tealNum = Math.floor((Math.random() * 5) + 1);
var redNum = Math.floor((Math.random() * 15) + 1);
var yellowNum = Math.floor((Math.random() * 25) + 1);
var pinkNum = Math.floor((Math.random() * 8) + 1);
var points = 0;
var losses = 0;
var wins = 0;


restart();


function restart(){

points = 0;

compGuess = Math.floor((Math.random() * 100) + 10);
$("#targetPointsFont").html(compGuess);
$("#actualPointsFont").html(points);
console.log(points);
//generate computer guess

checkPoints();



console.log(compGuess);


$("#tealGem").on("click", function(){
	var newNum = parseInt($("#actualPointsFont").html());
	points = tealNum + newNum;
	checkPoints();
	//$("#actualPointsFont").html(points);
	//checkPoints();
	//$("#actualPointsFont").html(points);
	//console.log(points);;
	

});



//red Gem randomNumber generator
$("#redGem").on("click", function(){
	var newNum = parseInt($("#actualPointsFont").html());
	points = redNum + newNum;
	checkPoints();
	
});


//yellow Gem randomNumber generator
$("#yellowGem").on("click", function(){
	var newNum = parseInt($("#actualPointsFont").html());
	points = yellowNum + newNum;
	$("#actualPointsFont").html(points);
	checkPoints();

})



//pink Gem randomNumber generator
$("#pinkGem").on("click", function(){
	var newNum = parseInt($("#actualPointsFont").html());
	points = pinkNum + newNum;
	checkPoints();
	

})

}

function checkPoints(){
	if(points === compGuess){

		$("#actualPointsFont").html(points);
		alert("You Won!");
		restart();
		wins++;
		$("#score").html("<h1>"+"Wins: "+wins+"</h1>" + "<h1>"+"Losses: "+losses+"</h1>");

	}

	if (points > compGuess){
		$("#actualPointsFont").html(points);
		alert("You Lost!");
		restart();
		losses++;
		$("#score").html("<h1>"+"Wins: "+wins+"</h1>" + "<h1>"+"Losses: "+losses+"</h1>");
	}

	else{

		$("#actualPointsFont").html(points);
	}
}


