"use strict";



// using a function contructor form to create an object
function MyApp()
{
	var version = "v1.0";

	// creating a private function
	function setStatus(message)
	{
		$("#app>footer").text(message);
	}

	// creating a public function
	this.start = function()
	{
		$("#app>header").append(version);
		setStatus("ready");
	};
	
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
} // end MyApp

/* 	JQuery's shorthand for the document ready event handler
		could be written: $(document).ready(handler);

		When this page loads, we'll create a global variable
		named "app" by attaching it to the "window" object
		(part of the BOM - Browser Object Model)
*/
$(function() {
	window.app = new MyApp();
	window.app.start();
});
