"use strict";

function MyApp()
{
	this.start = function()
	{
		Game = new Game();
		$("#getQuestion").on("click",function(){
		Game.update();
		});
	};
} // end MyApp

$(function() {
	window.app = new MyApp();
	window.app.start();
});