var b = document.querySelector("button");
console.log(b);
var isPurple = false;
b.addEventListener("click", function(){
	if(isPurple == false){
		document.body.style.background = "purple";
		isPurple = true;
	}
	else{
		document.body.style.background = "white";
		isPurple = false;
	}
});