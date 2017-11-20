"use strict";

function MyApp(){
	
	$("#getQuestion").on("click",function(){

		$.ajax({
		url: "http://jservice.io/api/random",
		dataType: "json"})
		.done(function(data) {
			//console.log( "QUESTION: " + data[0].question);
			//Add Null
			$( "#difficulty" ).text("Difficulty: " + data[0].value);
			$( "#category" ).text("Category: " + data[0].category.title);
			$( "#question" ).text("Question: " + data[0].question);
			$( "#answer" ).text("Answer: " + data[0].answer);
			//$( "#date" ).text("Creation Date: " + data[0].created_at);
			$('#answer').css("visibility", "hidden");
			$("#getAnswer").css("visibility", "visible");
		});
	});

	$("#getAnswer").on("click",function(){
			$('#answer').css("visibility", "visible");
	});
	
}//end myApp

window.onload = function(){
		MyApp();
}
