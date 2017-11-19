"use strict";

// using a function contructor form to create an object
function MyApp()
{
	var version = "Weather Widget Example 8.3";

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
		var $weatherWidget = $("#weather-widget");
		WeatherWidget = new WeatherWidget();
		$("#getWeather").on("click",function(){
		WeatherWidget.update();
		});
	};
} // end MyApp

$(function() {
	window.app = new MyApp();
	window.app.start();
});
