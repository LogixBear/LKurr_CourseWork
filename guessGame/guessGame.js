function submitSecret() {
	var secret = document.getElementById("secretNum").value;
	document.getElementById("secretNum").style.color = "#ffffff";
	document.getElementById("hideMe").style.visibility = "visible";
}

var count=0;

function submitGuess(){
	var guess = document.getElementById("guessNum").value; //Obtains the Guessed Number
	var secret = document.getElementById("secretNum").value; //Obtains the Secret Number
	var help;
				count++;
				if (guess > secret) {
					help = "Too High!";
				} else if (guess == secret ){
					help = "YOU GOT IT! It only took you " + count + " tries!";
				} else if (guess < secret ){
					help = "Too Low!";
				} else {
					help = "Please enter a valid number.";
				}
			document.getElementById("demo").innerHTML = help;		
}

				
