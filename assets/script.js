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


    // // It then creates a new div for each drink. Note we create divs and add the content in the same line.
    // var newDrinkDiv = $("<div>" + drinkList[i] + "</div>");

    // // It then adds this new div to the drinkList div.
    // drinkDiv.append(newDrinkDiv);

    
      // Here we construct our URL
      var queryURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0d4895fd6417d7c738a2d7486562a71a";

      console.log(queryURL); 
//  });
//     // adding city to recently searched div -DOES NOT PREPEND
    $("#recentlySearched").prepend("<div>" + city + "</div>");
   
// // <div id='recentSearches'>

// // </div>
// // var count = 0
// // This did NOT work to clear search bar:
// //  var recentSearches = $("recentlySearched").val();
// //  recentSearches = "";
    
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function(response) {
  // $("#citySearch").text(JSON.stringify(response));
  //   console.log(response);

    // $("#recentlySearched").prepend(
    //   `<div class="cityResult">
    //   </div>`);
          
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
   });

});



// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems, options);
// });

// Or with jQuery

