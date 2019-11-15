var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2")
var limit = document.querySelector("#upperLimit");
var b1 = document.querySelector("#p1");
var b2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var default1 = document.querySelector("#default");

limit.addEventListener("change", function(){
	default1.innerHTML = limit.value;
});



b1.addEventListener("click", function(){
	if(player1.innerHTML == default1.innerHTML){
		player1.style.background = "green";
		player1.disabled = true;
		player2.disabled = true;
	}
	else if(player2.innerHTML == default1.innerHTML){
		player1.disabled = true;
		player2.disabled = true;	
	}
	else{
		player1.innerHTML = parseInt(player1.innerHTML) + 1;
		if(player1.innerHTML == default1.innerHTML){
			player1.style.background = "green";
			player1.disabled = true;
			player2.disabled = true;
		}
		else if(player2.innerHTML == default1.innerHTML){
			player1.disabled = true;
			player2.disabled = true;	
		}
	}
})

b2.addEventListener("click", function(){
	if(player2.innerHTML == default1.innerHTML){
		player2.style.background = "green";
		player1.disabled = true;
		player2.disabled = true;
	}
	else if(player1.innerHTML == default1.innerHTML){
		player1.disabled = true;
		player2.disabled = true;	
	}
	else{
		player2.innerHTML = parseInt(player2.innerHTML) + 1;
		if(player2.innerHTML == default1.innerHTML){
			player2.style.background = "green";
			player1.disabled = true;
			player2.disabled = true;
		}
		else if(player1.innerHTML == default1.innerHTML){
			player1.disabled = true;
			player2.disabled = true;
		}
	}
})

reset.addEventListener("click", function(){
	player1.innerHTML = "0";
	player2.innerHTML = "0";
	default1.innerHTML = "5";
	player1.style.background = "white";
	player2.style.background = "white";
	limit.value = "";

})