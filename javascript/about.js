document.getElementById("weatherSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=d6f98e0b57de008e9dfc77ecc5725d47";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let results = "";
            results += '<h2>Current Weather in ' + json.name + "</h2> <div class = 'current-weather'> ";
            for (let i = 0; i < json.weather.length; i++) {
                results += '<img class = "icon" src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<p class = "temperature"> <strong>Current Temperature:  </strong>' + json.main.temp + " &deg;F"
            results += "<br><strong> Feels Like: </strong>" + json.main.feels_like + " &deg;F"
            results += "<br><strong> High: </strong>" + json.main.temp_max + " &deg;F"
            results += "<br> <strong>Low: </strong>" + json.main.temp_min + " &deg;F"
            results += "<br><strong>Cloudiness Percent: </strong>" + json.clouds.all + " %"
            results += "<br><strong> Description: </strong>"
            for (let i = 0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            results += "</p><p class='temperature'><strong>Pressure: </strong>" + json.main.pressure + " hPa"
            results += "<br> <strong>Humidity: </strong>" + json.main.humidity + " %"
            results += "<br> <strong>Visibility: </strong>" + json.visibility + " meters"
            results += "<br> <strong>Wind Speed: </strong>" + json.wind.speed + " mph"
            results += "<br> <strong>Wind Degree: </strong>" + json.wind.deg + "&deg;"
            results += '</p></div> <div class="sunset-sunrise">'

            var sec = json.sys.sunrise;
            var date = new Date(sec * 1000);
            var timestr = date.toLocaleTimeString();

            results += '<p><strong>Sunrise Time:  </strong>' + date + timestr + "</p>"
            //results += '<img src="/images/sunrise.jpeg" width=50%> </div>'
            results += '<div class="sunset-sunrise">'

            var sec = json.sys.sunset;
            var date = new Date(sec * 1000);
            var timestr = date.toLocaleTimeString();

            results += '<p><strong>Sunset Time:  </strong>' + date + timestr + "</p>"
            //results += '<img src="/images/sunset.jpeg" width=50%> </div>'
            document.getElementById("weatherResults").innerHTML = results;
        }).catch(error => alert("Invalid City. Please enter a valid United States City"))
});
