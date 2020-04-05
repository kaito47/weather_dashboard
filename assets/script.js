  // Function for displaying city
  // function displayCity() {

  
    // $("#recentlySearched").empty();
   
    //      var cityName = $("<div>");
         
    //      // Adding the div to the HTML
    //      $("#recentlySearched").append(cityName);
         
    //    }
     
 
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

}); 
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

});



// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });

// Or with jQuery

