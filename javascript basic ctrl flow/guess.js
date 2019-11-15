var num = prompt("Guess a number?");
if(num < 7){
	alert("Too Low");
}
else if(num == 7){
	console.log("You guessed it right");
}
else{
	console.log("Too High");
}
