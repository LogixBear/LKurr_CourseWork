"use strict";

function MyApp(){

//###############SPORTS START##################
	$(".sports").on("click",function(){
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
		});
	});

	$("#oneHun").on("click",function(){
		$("#oneHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 100},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});

	$("#twoHun").on("click",function(){
		$("#twoHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 200},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#threeHun").on("click",function(){
		$("#threeHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 300},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#fourHun").on("click",function(){
		$("#fourHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 400},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#fiveHun").on("click",function(){
		$("#fiveHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 500},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#sixHun").on("click",function(){
		$("#sixHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 600},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#sevenHun").on("click",function(){
		$("#sevenHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 1, value: 700},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#eightHun").on("click",function(){
		$("#eightHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 800},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#nineHun").on("click",function(){
		$("#nineHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 900},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#thousand").on("click",function(){
		$("#thousand").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 1000},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	})
//###################SPORTS END#######################

//###############MOVIES START##################
	$(".movies").on("click",function(){
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
		});
	});

	$("#oneHun1").on("click",function(){
		$("#oneHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 100},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});

	$("#twoHun1").on("click",function(){
		$("#twoHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 200},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#threeHun1").on("click",function(){
		$("#threeHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 300},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#fourHun1").on("click",function(){
		$("#fourHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 400},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#fiveHun1").on("click",function(){
		$("#fiveHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 500},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#sixHun1").on("click",function(){
		$("#sixHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 600},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#sevenHun1").on("click",function(){
		$("#sevenHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 700},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#eightHun1").on("click",function(){
		$("#eightHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 800},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#nineHun1").on("click",function(){
		$("#nineHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 900},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#thousand1").on("click",function(){
		$("#thousand1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 1000},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	})
//###################MOVIES END#######################

//###############HISTORY START##################
	$(".history").on("click",function(){
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
		});
	});

	$("#oneHun2").on("click",function(){
		$("#oneHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 100},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});

	$("#twoHun2").on("click",function(){
		$("#twoHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 200},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#threeHun2").on("click",function(){
		$("#threeHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 300},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#fourHun2").on("click",function(){
		$("#fourHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 400},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#fiveHun2").on("click",function(){
		$("#fiveHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 500},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#sixHun2").on("click",function(){
		$("#sixHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 600},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#sevenHun2").on("click",function(){
		$("#sevenHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 700},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#eightHun2").on("click",function(){
		$("#eightHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 800},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#nineHun2").on("click",function(){
		$("#nineHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 900},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	});
	
	$("#thousand2").on("click",function(){
		$("#thousand2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 1000},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
			});
	})
//###################HISTORY END#######################

	$("#getAnswer").on("click",function(){
			$('#answer').css("visibility", "visible");
	});
}//end myApp

window.onload = function(){
		MyApp();
}
