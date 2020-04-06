  // Function for displaying city
  // function displayCity() {

  
    // $("#recentlySearched").empty();
   
    //      var cityName = $("<div>");
         
    //      // Adding the div to the HTML
    //      $("#recentlySearched").append(cityName);
         
    //    }
     
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

//     // adding city to recently searched div 
    $("#recentlySearched").prepend("<div class='cities'>" + city + "</div>");
   


// // </div>
// // var count = 0
// // This did NOT work to clear search bar:
// //  var recentSearches = $("recentlySearched").val();
// //  recentSearches = "";
    
$.ajax({
  url: queryURL,
  method: "GET",
  beforeSend: function(){
    //put loading gif in div here
  }
}).then(function(response) {
 $("#citySearch").text(JSON.stringify(response));

    console.log(response);
 
    // adding city name to results div:
    // $("#results").append("<h1>" + response.name + "</h1>");
    $("#cityName").html(response.name)
    console.log(response.name);

    // convert temp to fahrenheit and add to results div:
    var tempF = (response.main.temp -273.15) * 1.80 + 32;
    // $("#results").append("<h6>Temperature: " + tempF.toFixed(2) + " F" + "</h6>");
    $("#temperature").html("Temperature: " + tempF.toFixed(2) + " F" );

    //adding humidity to results div:
    $("#humidity").html("Humidity: " + response.main.humidity + " %");

    // adding wind speed to results div:
    // $("#results").append("<h6>Wind Speed: " + response.wind.speed + " MPH" + "</h6>");
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

// }); 

// constructing URL for forecast:
var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={YOUR API KEY}

// call to obtain forecast:

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


    // loop to convert temp to fahrenheit and add to results div:
    // let forecastTemps=[];

    // for (i=0; i < 5; i++) {

      var tempFONE = (((response.daily[0].temp.day -273.15) * 1.80 + 32).toFixed(2));
      var tempFTWO = (((response.daily[1].temp.day -273.15) * 1.80 + 32).toFixed(2));
      var tempFTHREE = (((response.daily[2].temp.day -273.15) * 1.80 + 32).toFixed(2));
      var tempFFOUR = (((response.daily[3].temp.day -273.15) * 1.80 + 32).toFixed(2));
      var tempFFIVE = (((response.daily[4].temp.day -273.15) * 1.80 + 32).toFixed(2));
    // console.log(tempF);

    // forecastTemps.push(tempF);
    
    // console.log(forecastTemps);

    // to add icons:
    var iconCodeONE = response.daily[0].weather[0].icon;
    var iconCodeTWO = response.daily[1].weather[0].icon;
    var iconCodeTHREE = response.daily[2].weather[0].icon;
    var iconCodeFOUR = response.daily[3].weather[0].icon;
    var iconCodeFIVE = response.daily[4].weather[0].icon;

    $('#dayOnepng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeONE + ".png");
    $('#dayTwopng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeTWO + ".png");
    $('#dayThreepng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeTHREE + ".png");
    $('#dayFourpng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeFOUR + ".png");
    $('#dayFivepng').attr('src', "http://openweathermap.org/img/wn/" + iconCodeFIVE + ".png");

    // var iconurlONE = "http://openweathermap.org/img/wn/" + iconCodeONE + "@2x.png";
    // var iconurlTWO = "http://openweathermap.org/img/wn/" + iconCodeTWO + "@2x.png";
    // var iconurlTHREE = "http://openweathermap.org/img/wn/" + iconCodeTHREE + "@2x.png";
    // var iconurlFOUR = "http://openweathermap.org/img/wn/" + iconCodeFOUR + "@2x.png";
    // var iconurlFIVE = "http://openweathermap.org/img/wn/" + iconCodeFIVE + "@2x.png";


    $("#dayOne").append(`<li>${tempFONE + " F"}</li> <li>${response.daily[0].humidity + "%"}</li>`)

    $("#dayTwo").append(`<li>${tempFTWO + " F"}</li> <li>${response.daily[1].humidity + "%"}</li>`);

    $("#dayThree").append(`<li>${tempFTHREE + " F"}</li> <li>${response.daily[2].humidity + "%"}</li>`);

    $("#dayFour").append(`<li>${tempFFOUR + " F"}</li> <li>${response.daily[3].humidity + "%"}</li>`);

    $("#dayFive").append(`<li>${tempFFIVE + " F"}</li> <li>${response.daily[4].humidity + "%"}</li>`);
    }
);

});


});
// });

 // http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}

  // this kind of works but gets the whole object and doesn't prepend:
    // $.ajax({
    //   url: queryURL,
    //   method: "GET",
    // }).then(function(response) {
    //   $("#recentlySearched").text(JSON.stringify(response));
    //     console.log(response);

    //     $("#recentlySearched").prepend(
    //       `<div class="cityResult">
    //        <h3>${city}</h3>
    //       </div>`);
              

//         $("#recentlySearched").prepend(
//             `<div class="cityResult">
//             <h3>${response.city}</h3>
//             </div>`);
    

//         //end ari's code
      // displayCity();
  //  });

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });

// Or with jQuery

