"use strict";

function MyApp(){
 var realMon;
 var money;
 
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
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});

	$("#twoHun").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#threeHun").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fourHun").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fiveHun").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sixHun").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sevenHun").on("click",function(){
		$("#question").fadeOut(1);
		$("#sevenHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 600}, //EXCEPTION QUESTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 700 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 700; //FIX
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#eightHun").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#nineHun").on("click",function(){
		$("#question").fadeOut(1);
		$("#nineHun").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 42, value: 800}, //EXCEPTION QUESTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 900 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 900;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#thousand").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
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
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});

	$("#twoHun1").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#threeHun1").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fourHun1").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fiveHun1").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sixHun1").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sevenHun1").on("click",function(){
		$("#question").fadeOut(1);
		$("#sevenHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 600},//EXCEPTIOn QUESTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 700 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 700;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#eightHun1").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#nineHun1").on("click",function(){
		$("#question").fadeOut(1);
		$("#nineHun1").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 4, value: 800}, //EXCEPTION QUESTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 900 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 900;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#thousand1").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
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
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});

	$("#twoHun2").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#threeHun2").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fourHun2").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fiveHun2").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sixHun2").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sevenHun2").on("click",function(){
		$("#question").fadeOut(1);
		$("#sevenHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 600}, //QUESTION EXCEPTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 700 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 700;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#eightHun2").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#nineHun2").on("click",function(){
		$("#question").fadeOut(1);
		$("#nineHun2").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 780, value: 800}, //QUESTION EXCEPTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 900 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 900;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#thousand2").on("click",function(){
		$("#question").fadeOut(1);
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	})
//###################HISTORY END#######################

//###############TELEVISION START##################
	$(".history").on("click",function(){
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
		});
	});

	$("#oneHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#oneHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 100},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});

	$("#twoHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#twoHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 200},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#threeHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#threeHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 300},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fourHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#fourHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 400},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fiveHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#fiveHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 500},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sixHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#sixHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 600},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sevenHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#sevenHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 600}, //QUESTION EXCEPTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 700 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 700;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#eightHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#eightHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 800},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#nineHun3").on("click",function(){
		$("#question").fadeOut(1);
		$("#nineHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 800}, //QUESTION EXCEPTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 900 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 900;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#thousand3").on("click",function(){
		$("#question").fadeOut(1);
		$("#thousand3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 1000},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	})
//###################TELEVISION END#######################

//###############TRIVIA START##################
	$(".history").on("click",function(){
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
		});
	});

	$("#oneHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#oneHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 100},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});

	$("#twoHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#twoHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 200},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#threeHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#threeHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 300},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fourHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#fourHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 400},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fiveHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#fiveHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 500},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sixHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#sixHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 600},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sevenHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#sevenHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 600}, //QUESTION EXCEPTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 700 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 700;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#eightHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#eightHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 800},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#nineHun4").on("click",function(){
		$("#question").fadeOut(1);
		$("#nineHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 800}, //QUESTION EXCEPTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 900 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 900;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#thousand4").on("click",function(){
		$("#question").fadeOut(1);
		$("#thousand4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 306, value: 1000},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	})
//###################TRIVIA END#######################

//###############FOOD START##################
	$(".history").on("click",function(){
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
		});
	});

	$("#oneHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#oneHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 100},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});

	$("#twoHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#twoHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 200},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#threeHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#threeHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 300},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fourHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#fourHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 400},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#fiveHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#fiveHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 500},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sixHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#sixHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 600},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#sevenHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#sevenHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 600}, //QUESTION EXCEPTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 700 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 700;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#eightHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#eightHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 800},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#nineHun5").on("click",function(){
		$("#question").fadeOut(1);
		$("#nineHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 800}, //QUESTION EXCEPTION
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				//$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#difficulty" ).text("Points: " + 900 + " | Category: " + data[1].category.title);
				$( "#question" ).text("Question: " + data[1].question);
				$( "#answer" ).text("Answer: " + data[1].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				//money = data[0].value;
				money = 900;
				
				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	});
	
	$("#thousand5").on("click",function(){
		$("#question").fadeOut(1);
		$("#thousand5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 1000},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
				$( "#difficulty" ).text("Points: " + data[0].value + " | Category: " + data[0].category.title);
				$( "#question" ).text("Question: " + data[0].question);
				$( "#answer" ).text("Answer: " + data[0].answer);
				$("#answer").css("visibility", "hidden");
				$("#getAnswer").css("visibility", "visible");
				$("#error").css("visibility", "hidden");
				$("#decision").css("visibility", "visible");
				money = data[0].value;

				$("#question").fadeIn(1000);
				$("#answer").fadeOut(1);
			});
	})
//###################FOOD END#######################

	$('body').on('click', '[data-editable]', function(){
	  var $el = $(this);
				  
	  var $input = $('<input/>').val( $el.text() );
	  $el.replaceWith( $input );
	  
	  var save = function(){
		var $p = $('<span data-editable />').text( $input.val() );
		$input.replaceWith( $p );
	  };
	  
	  $input.one('blur', save).focus(); //Hides input
	});

	$("#getAnswer").on("click",function(){
			$('#answer').css("visibility", "visible");
			$("#answer").fadeIn(1000);
	});
			
	$('input.radios').on('change', function() {
		$('input.radios').not(this).prop('checked', false); 
	});
	
	$('input.radios').on('change', function() {
		$('input.radios').not(this).prop('checked', false); 
	});
	
	$('input.radios').on('change', function() {
		$('input.radios').not(this).prop('checked', false); 
	});
	
	//CORRECT ANSWER
	$("#close").on("click",function(){
			$('#decision').css("visibility", "hidden");
			console.log("CORRECT: " + money);
			
		if($('#radioOne').is(':checked')) {
			$('#radioOne').prop('checked', false);
			$('#oneScore').html(parseInt($('#oneScore').html(), 10)+money);
		}
		
		if($('#radioTwo').is(':checked')) {
			$('#radioTwo').prop('checked', false);
			$('#twoScore').html(parseInt($('#twoScore').html(), 10)+money);
		}
		
		if($('#radioThree').is(':checked')) {
			$('#radioThree').prop('checked', false);
			$('#threeScore').html(parseInt($('#threeScore').html(), 10)+money);
		}

	});
	
	//Unchecks all Players After Incorrect Resonse
	$("#wrong").on("click",function(){
		
		console.log("INCORRECT");
		if($('#radioOne').is(':checked')) {
			$('#radioOne').prop('checked', false);
			$('#oneScore').html(parseInt($('#oneScore').html(), 10)-money);
		}
		
		else if($('#radioTwo').is(':checked')) {
			$('#radioTwo').prop('checked', false);
			$('#twoScore').html(parseInt($('#twoScore').html(), 10)-money);
		}
		
		else if($('#radioThree').is(':checked')) {
			$('#radioThree').prop('checked', false);
			$('#threeScore').html(parseInt($('#threeScore').html(), 10)-money);
		}

		else {
			$('#decision').css("visibility", "hidden");	
		}
	});
	
}//end myApp

window.onload = function(){
		MyApp();
}
