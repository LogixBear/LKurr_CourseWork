function WeatherWidget($widget)
{
	this.update = function()
	{
		$(".results", $widget).hide();
		$(".loading", $widget).show();
		getWeatherReport();	
		getLocation();
	};
	
	function getWeatherReport(lat, lon)
	{
		//var coords = lat + "," + lon;
		/*
		$.ajax({
				url: "http://api.wunderground.com/api/" + wuKey +
					"/conditions/q/" + coords + ".json",
				dataType : "jsonp"
			})
		*/
		$.get("data/weather.json", {
			t: new Date().getTime()
		})
			.done(function(data) {populateWeather(data);})
			.fail(function(jqXHR, textStatus, errorThrown) {
				showError(errorThrown);
			});
	}//end getWeatherReport
	
	function populateWeather(data)
	{
		var observation = data.current_observation;
		
		$(".results header img", $widget).attr("src", observation.icon_url);
		$(".location>span", $widget).text(data.location.city);
			
			$(".conditions>span").each(function(i, e)
			{
				var $span = $(this);
				var field = $span.data("field");
				$(this).text(observation[field]);
			});
		
			/*
			$(".results footer img", $widget)
				.attr("src", observation.image.url);
			*/
			
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
				$("#latitude").val(position.coords.latitude);
				$("#longitude").val(position.coords.longitude);
			},
			function(error)
			{
				$("#controls .error")
					.text("ERROR: " + error.message)
					.slideDown();
			});
		}	
	}//end getLocation
	
	/*
	function getCurrentWeather()
	{
			var lat = $("#latitude").val();
			var lon = $("#longitude").val();
			if (lat && lon)
			{
				$("#weather-widget").fadeIn();
				WeatherWidget.update(lat, lon);
			}
	}
	*/
}//end weatherWidget

