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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
				$("#decision").css("visibility", "visible");
				money = data[0].value;
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
			});
	});

	$("#twoHun3").on("click",function(){
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
			});
	});
	
	$("#threeHun3").on("click",function(){
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
			});
	});
	
	$("#fourHun3").on("click",function(){
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
			});
	});
	
	$("#fiveHun3").on("click",function(){
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
			});
	});
	
	$("#sixHun3").on("click",function(){
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
			});
	});
	
	$("#sevenHun3").on("click",function(){
		$("#sevenHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 700},
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
			});
	});
	
	$("#eightHun3").on("click",function(){
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
			});
	});
	
	$("#nineHun3").on("click",function(){
		$("#nineHun3").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 67, value: 900},
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
			});
	});
	
	$("#thousand3").on("click",function(){
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
			});
	})
//###################TELEVISION END#######################

//###############TRIVIA START##################
	$(".history").on("click",function(){
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11},
		dataType: "json"})
		.done(function(data) {
			console.log(data);
		});
	});

	$("#oneHun4").on("click",function(){
		$("#oneHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 100},
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
			});
	});

	$("#twoHun4").on("click",function(){
		$("#twoHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 200},
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
			});
	});
	
	$("#threeHun4").on("click",function(){
		$("#threeHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 300},
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
			});
	});
	
	$("#fourHun4").on("click",function(){
		$("#fourHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 400},
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
			});
	});
	
	$("#fiveHun4").on("click",function(){
		$("#fiveHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 500},
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
			});
	});
	
	$("#sixHun4").on("click",function(){
		$("#sixHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 600},
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
			});
	});
	
	$("#sevenHun4").on("click",function(){
		$("#sevenHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 700},
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
			});
	});
	
	$("#eightHun4").on("click",function(){
		$("#eightHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 800},
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
			});
	});
	
	$("#nineHun4").on("click",function(){
		$("#nineHun4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 900},
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
			});
	});
	
	$("#thousand4").on("click",function(){
		$("#thousand4").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 11, value: 1000},
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
			});
	});

	$("#twoHun5").on("click",function(){
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
			});
	});
	
	$("#threeHun5").on("click",function(){
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
			});
	});
	
	$("#fourHun5").on("click",function(){
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
			});
	});
	
	$("#fiveHun5").on("click",function(){
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
			});
	});
	
	$("#sixHun5").on("click",function(){
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
			});
	});
	
	$("#sevenHun5").on("click",function(){
		$("#sevenHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 700},
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
			});
	});
	
	$("#eightHun5").on("click",function(){
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
			});
	});
	
	$("#nineHun5").on("click",function(){
		$("#nineHun5").css("visibility", "hidden");//Hide Value
		$.ajax({
		url: "http://jservice.io/api/clues",
		data: { category: 49, value: 900},
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
			});
	});
	
	$("#thousand5").on("click",function(){
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
			$('#oneScore').html(parseInt($('#oneScore').html(), 10)+money);
		}
		
		if($('#radioTwo').is(':checked')) {
			$('#twoScore').html(parseInt($('#twoScore').html(), 10)+money);
		}
		
		if($('#radioThree').is(':checked')) {
			$('#threeScore').html(parseInt($('#threeScore').html(), 10)+money);
		}

	});
	
	//Unchecks all Players After Incorrect Resonse
	$("#wrong").on("click",function(){
		
		console.log("INCORRECT");
		if($('#radioOne').is(':checked')) {
			$('#radioOne').prop('checked', false);
		}
		
		else if($('#radioTwo').is(':checked')) {
			$('#radioTwo').prop('checked', false);
		}
		
		else if($('#radioThree').is(':checked')) {
			$('#radioThree').prop('checked', false);
		}

		else {
			$('#decision').css("visibility", "hidden");	
		}
	});
	
}//end myApp

window.onload = function(){
		MyApp();
}
