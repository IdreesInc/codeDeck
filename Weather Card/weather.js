function initialize() {
	var apiKey = "5b8e6bf79c253a1c17f5bebd1f6c951f";
	var lati = 35.912034;
	var longi = -79.051228;
	var data;

	$.ajax({
		url: "https://api.forecast.io/forecast/" + apiKey + "/" + lati + "," + longi,
		dataType: "jsonp",
		success: function (data) {
			console.log(data);
			var temps = [];
			var temperature = data.currently.temperature;
			var textColor = "";
			var gradient = "";
			if (temperature >= 80) {
				textColor = "#FF5F6D";
				gradient = "linear-gradient(to top, #FF5F6D, #FFC371)";
			} else if (temperature >= 70 && temperature < 80) {
				textColor = "#FF976D";
				gradient = "linear-gradient(to top, #FF976D, #FFCE52)";
			} else if (temperature >= 60 && temperature < 70) {
				textColor = "#5DB459";
				gradient = "linear-gradient(to top, #6ACC65, #A8DB34)";
			} else if (temperature >= 50 && temperature < 60) {
				textColor = "#66BDCC";
				gradient = "linear-gradient(to top, #66BDCC, #95DBD2)";
			} else if (temperature < 50){
				textColor = "#00688B";
				gradient = "linear-gradient(to top, #00688B, #66BDCC)";
			}
			$("#temperature").html(Math.round(temperature));
			$("#summary").css("color", textColor);
			$("#status").css("color", textColor);
			$("#location").css("color", textColor);
			$("#circle").css("background", gradient);
			$("#status").html(data.currently.summary);
			$("#summary").html(data.daily.summary);
		}
	});
}
document.onLoad = initialize();