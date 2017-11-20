function WeatherWidget($widget)
{
	this.update = function()
	{
		$(".results", $widget).hide();
		$(".loading", $widget).show();
		getWeatherReport();	
		getLocation();
		//getCurrentWeather();
	};
	
	function getWeatherReport(lat, lon)
	{	
		var lat = 43.22;
		var lon = -71.53;
		var coors = lat + "," + lon;
		
		$.ajax({
			url: "https://api.weather.gov/points/"+ coors +"/forecast",
			dataType : "json"
		})
			.done(function(data) {populateWeather(data);})
			.fail(function(jqXHR, textStatus, errorThrown) {
				showError(errorThrown);
			});
	}//end getWeatherReport
	
	function populateWeather(data)
	{
		var observation = data.current_observation;
		
		//$(".results header img", $widget).attr("src", observation.icon_url);
		//$(".location>span", $widget).text(data.location.city);
		$(".location>span", $widget).text(json.properties.city);
			
			$(".conditions>span").each(function(i, e)
			{
				var $span = $(this);
				var field = $span.data("field");
				$(this).text(observation[field]);
			});
			
			//NEW CODE
			//$(".results footer img", $widget)
				//.attr("src", observation.image.url);
			
			$(".loading", $widget).fadeOut(function()
			{
				$(".results", $widget).fadeIn();
			});		
	}//end populateWeather	
	
	function getLocation()
	{
		if(navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(
			function(position)
			{
				var lat = $("#latitude").val(position.coords.latitude);
				var lon = $("#longitude").val(position.coords.longitude);
				
			},
			function(error)
			{
				$("#controls .error")
					.text("ERROR: " + error.message)
					.slideDown();
			});
		}			
		
		var lat = $("#latitude").val();
		//var lat = $("#latitude").val(position.coords.latitude);
		var lon = $("#longitude").val();
		//var lon = $("#longitude").val(position.coords.longitude);
		if (lat && lon)
		{
				$("#weather-widget").fadeIn();
				weatherWidget.update(lat, lon);
		}
		
	}//end getLocation
	
	/*
	function ajaxPopulateWeather()
	{
		$.ajax({
			url: "https://api.weather.gov/points/"+ latitude + "," + longitude +"/forecast"
			dataType : "json"
		});
	}
	*/
	
	/*
	function getCurrentWeather()
	{
		var lat = $("#latitude").val();
		//var lat = $("#latitude").val(position.coords.latitude);
		var lon = $("#longitude").val();
		//var lon = $("#longitude").val(position.coords.longitude);
		if (lat && lon)
		{
				$("#weather-widget").fadeIn();
				weatherWidget.update(lat, lon);
		}
	}
	*/
	
	
	
	/*NOTES

	- Review pages 214-219
	- Review the National Weather Service's free API:
	- API Documention: https://forecast-v3.weather.gov/documentation?redirect=legacy
	- Meta-data for a specific location: https://api.weather.gov/points/43.22,-71.53
	- Forecast data for a specific locaction: https://api.weather.gov/points/43.22,-71.53/forecast
	- Update your app to use the $.ajax jQuery function to pull and display weather data for the user's location
	- DataType will be JSON (not JSONP)
	- You must build the url based on the user's location data from the browser
	- You must be able to reference data in the returned JSON file
	- You must update the data field names in HTML based on the available data (not all current fields are available from weather.gov)
	*/
}//end weatherWidget

