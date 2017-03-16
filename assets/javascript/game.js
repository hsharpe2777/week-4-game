

//Declare global variables
var compGuess = 0;
var tealNum = 0;
var redNum = 0;
var yellowNum = 0;
var pinkNum = 0;
var points = 0;
var losses = 0;
var wins = 0;

//call restart function
restart();

//restart game
function restart(){
//reset points
points = 0;
$("#actualPointsFont").html(points);

//reset computer guess
compGuess = Math.floor((Math.random() * 100) + 10);



//reset gem values
tealNum = Math.floor((Math.random() * 5) + 1);
redNum = Math.floor((Math.random() * 15) + 1);
yellowNum = Math.floor((Math.random() * 25) + 1);
pinkNum = Math.floor((Math.random() * 8) + 1);

//add values to score boards
$("#targetPointsFont").html(compGuess);
$("#actualPointsFont").html(points);

//compare user points to computer generated points
checkPoints();

}



//teal gem
$("#tealGem").on("click", function(){
	//get values that are in div
	var newNum = parseInt($("#actualPointsFont").html());
	
	//add points in div with newly generated points 
	//(after click)
	points = tealNum + newNum;
	
	//call checkPoints function 
	checkPoints();

});



//red Gem randomNumber generator
$("#redGem").on("click", function(){
	//get values that are in div
	var newNum = parseInt($("#actualPointsFont").html());
	
	//add points in div with newly generated points 
	//(after click)
	points = redNum + newNum;
	
	//call checkPoints function 
	checkPoints();

	
});


//yellow Gem randomNumber generator
$("#yellowGem").on("click", function(){
	//get values that are in div
	var newNum = parseInt($("#actualPointsFont").html());
	
	//add points in div with newly generated points 
	//(after click)
	points = yellowNum + newNum;
	
	//call checkPoints function 
	checkPoints();

})



//pink Gem randomNumber generator
$("#pinkGem").on("click", function(){
	//get values that are in div
	var newNum = parseInt($("#actualPointsFont").html());
	
	//add points in div with newly generated points 
	//(after click)
	points = pinkNum + newNum;
	
	//call checkPoints function 
	checkPoints();
	

})



function checkPoints(){
	//if computer your total points = random guess 
	if(points === compGuess){
		
		//call game over function after 1 second
		setTimeout(gameover,1000);
		
		//display your total points in "actualPoints" div
		$("#actualPointsFont").html(points);

		//alert the user that they won
		alert("You Won!");

		//increase the wins by 1 and display in the "score" div
		wins++;
		$("#score").html("<h1>"+"Wins: "+wins+"</h1>" + "<h1>"+"Losses: "+losses+"</h1>");

	}
	//if user accumulated points is more than computer.. 
	//random number
	if (points > compGuess){
		//alert user that you lost
		alert("You Lost!");

		//increase losses by 1 and display in the "score" div
		losses++;
		$("#score").html("<h1>"+"Wins: "+wins+"</h1>" + "<h1>"+"Losses: "+losses+"</h1>");
		
		//call gameover function after 1 second.
		setTimeout(gameover,1000);

		
	}

	else{
      //if your points are not equal to cumputer random number
      //or if you haven't gone over, allow your points to continue
      //to accumulate and display in div
		$("#actualPointsFont").html(points);
	}
}


function gameover(){

	restart();
}


