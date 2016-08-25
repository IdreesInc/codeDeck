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
			$("#temperature").html(Math.round(data.currently.temperature));
			$("#status").html(data.currently.summary);
			$("#summary").html(data.daily.summary);
		}
	});
}
document.onLoad = initialize();