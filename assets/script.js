
 $("#citySearch").val(" ");
 // This .on("click") function will trigger the AJAX Call
 $("#search").on("click", function(event) {
    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#citySearch").val().trim();

    var apiKey="0d4895fd6417d7c738a2d7486562a71a";

      // Here we construct our URL for general city weather data:
      var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

      console.log(queryURL); 

    
   // adding city to recently searched div 
    $("#recentlySearched").prepend("<div class='cities'>" + city + "</div>");
  


$.ajax({
  url: queryURL,
  method: "GET",
  beforeSend: function(){
    //put loading gif in div here
  }
}).then(function(response) {
 $("#citySearch").text(JSON.stringify(response));

    console.log(response);
 
 // adding date to city
  var todayDate = (moment().format(' []M[/]D[/]YYYY[]'))

    // adding city name to results div:
 
    $("#cityName").html(response.name + ":" + todayDate);
    console.log(response.name);

    

    // convert temp to fahrenheit and add to results div:
    var tempF = (response.main.temp -273.15) * 1.80 + 32;
    // $("#results").append("<h6>Temperature: " + tempF.toFixed(2) + " F" + "</h6>");
    $("#temperature").html("Temperature: " + tempF.toFixed(2) + " F" );

    //adding humidity to results div:
    $("#humidity").html("Humidity: " + response.main.humidity + " %");

    // adding wind speed to results div:

    $("#windSpeed").html("Wind Speed: " + response.wind.speed + " MPH");
    console.log(response.wind.speed);

    var latitude=response.coord.lat;
    var longitude=response.coord.lon;
 
    console.log(latitude);
    console.log(longitude);
   
  // constructing URL for UV index:

  var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + latitude + "&lon=" + longitude;

  //call to obtain UV index:
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(response) {
    var UV=response.value;
    $("#uvIndex").html("UV Index: " + UV); 
      console.log(response);
  });



// constructing URL for forecast:
var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;



$.ajax({
  url: queryURL,
  method: "GET",
}).then(function(response) {
 
    console.log(response);

    console.log(response.daily[0]);
    console.log(response.daily[1]);
    console.log(response.daily[2]);
    console.log(response.daily[3]);
    console.log(response.daily[4]);


      var tempFONE = (((response.daily[1].temp.day -273.15) * 1.80 + 32).toFixed(2));
      var tempFTWO = (((response.daily[2].temp.day -273.15) * 1.80 + 32).toFixed(2));
      var tempFTHREE = (((response.daily[3].temp.day -273.15) * 1.80 + 32).toFixed(2));
      var tempFFOUR = (((response.daily[4].temp.day -273.15) * 1.80 + 32).toFixed(2));
      var tempFFIVE = (((response.daily[5].temp.day -273.15) * 1.80 + 32).toFixed(2));
   

    // to add dates:
    var dateOne = (moment().add(1, 'days').format(' []M[/]D[/]YYYY[]'))
    $("#dateONE").text(dateOne);

    var dateTwo = moment().add(2, 'days').format(' []M[/]D[/]YYYY[]');
    $("#dateTWO").text(dateTwo);

    var dateThree = moment().add(3, 'days').format(' []M[/]D[/]YYYY[]');
    $("#dateTHREE").text(dateThree);

    var dateFour = moment().add(4, 'days').format(' []M[/]D[/]YYYY[]');
    $("#dateFOUR").text(dateFour);

    var dateFive = moment().add(5, 'days').format(' []M[/]D[/]YYYY[]');
    $("#dateFIVE").text(dateFive);

    // to add icons:
    var iconCodeONE = response.daily[1].weather[0].icon;
    var iconCodeTWO = response.daily[2].weather[0].icon;
    var iconCodeTHREE = response.daily[3].weather[0].icon;
    var iconCodeFOUR = response.daily[4].weather[0].icon;
    var iconCodeFIVE = response.daily[5].weather[0].icon;


    $('#dayOnepng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeONE + ".png"); 
    $('#dayTwopng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeTWO + ".png");
    $('#dayThreepng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeTHREE + ".png");
    $('#dayFourpng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeFOUR + ".png");
    $('#dayFivepng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeFIVE + ".png");

  // $(".weather").empty();

    $("#weatherOne").html(`<li>${"Temp: " + tempFONE + " F"}</li> <li>${"Humidity: " + response.daily[1].humidity + "%"}</li>`)

    $("#weatherTwo").html(`<li>${"Temp: " + tempFTWO + " F"}</li> <li>${"Humidity: " + response.daily[2].humidity + "%"}</li>`);

    $("#weatherThree").html(`<li>${"Temp: " + tempFTHREE + " F"}</li> <li>${"Humidity: " + response.daily[3].humidity + "%"}</li>`);

    $("#weatherFour").html(`<li>${"Temp: " + tempFFOUR + " F"}</li> <li>${"Humidity: " + response.daily[4].humidity + "%"}</li>`);

    $("#weatherFive").html(`<li>${"Temp: " + tempFFIVE + " F"}</li> <li>${"Humidity: " + response.daily[5].humidity + "%"}</li>`);
    }
);

});


});

 
