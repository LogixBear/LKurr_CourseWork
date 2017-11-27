"use strict";

function MyApp(){
	
	$("#getQuestion").on("click",function(){

		$.ajax({
		url: "http://jservice.io/api/random",
		dataType: "json"})
		.done(function(data) {
			//console.log( "QUESTION: " + data[0].question);
			//$( "#difficulty" ).text("Points: " + data[0].value);
			//$( "#category" ).text("Category: " + data[0].category.title);\
			//$( "#date" ).text("Creation Date: " + data[0].created_at);
			/*
			$( "#question" ).text("Question: " + data[0].question);
			$( "#answer" ).text("Answer: " + data[0].answer);
			$('#answer').css("visibility", "hidden");
			$("#getAnswer").css("visibility", "visible");
			*/
			
			/*
			//Null Handler
			if (data[0].value > 0 && data[0].value < 10000){
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
			}
			else {
				$( "#difficulty" ).text("Points: PLACE YOUR BETS NOW!" + " | Category: " + data[0].category.title);
			}//end null handling
			*/
			//Null Remover
			if (data[0].value > 0 && data[0].value < 10000){
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			}
			else {
				$("#error").css("visibility", "visible");
				console.log( "Encountered null");
				$( "#error").text( "Error receiving new question. Please get a new question.");
				$.ajax({
				url: "http://jservice.io/api/random",
				dataType: "json"})
			}//end null removal
				
			
		});
	});

	$("#getAnswer").on("click",function(){
			$('#answer').css("visibility", "visible");
	});
	
}//end myApp

window.onload = function(){
		MyApp();
}
