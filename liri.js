require("dotenv").config();

//var keys = require("./keys.js");

//var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var command = process.argv[2];

var term = process.argv.slice(3).join(" ");

//var band = new.Band();

if (!command) {
    command = "concert-this";
}

// if (!term) {
//     term = "Halsey";
// }

if (command === "concert-this") {

    console.log("Searching for " + term + " on Bandisintown");

    //console.log("Hello world");

    console.log(term);

    function concertInfo() {
        var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
        axios.get(URL).then(
            function (response) {
                //console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    console.log("--------------------");
                    console.log("Venue: " + response.data[i].venue.name);
                    console.log("City: " + response.data[i].venue.city);
                    // need to format the time also
                    console.log("Date & Time: " + moment(response.data[i].datetime).format("MM/DD/YYYY HH:mm:ss"));
                    console.log("--------------------");
                };
            }).catch(function (err) {
                console.log("Error: " + err)
            })
     };

     concertInfo();

    // var Band = function() {
    //     this.findConcert = function(term) {

    //     var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";

    //     console.log("Searching for " + term + " on Bandisintown");

    //     axios.get(URL).then(
    //         function (response) {
    //             //console.log(response.data);
    //             for (var i = 0; i < response.data.length; i++) {
    //                 console.log("\n -------------------- \n");
    //                 console.log("Venue: " + response.data[i].venue.name);
    //                 console.log("City: " + response.data[i].venue.city);
    //                 console.log("Date of Next Concert: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
    //                 console.log("\n -------------------- \n");
    //             };
    //         }).catch(function (err) {
    //             console.log("Error: " + err)
    //         })
    //     };
    // };

    // var band = new.Band();

    // band.findConcert(term);

    // var Band = function () {
    //     // divider will be used as a spacer between the tv data we print in log.txt
    //     var divider = "\n------------------------------------------------------------\n\n";

    //     // findShow takes in the name of a tv show and searches the tvmaze API
    //     this.findConcert = function (term) {
    //         var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";

    //         axios.get(URL).then(function (response) {
    //             // Place the response.data into a variable, jsonData.
    //             var jsonData = response.data;

    //             // showData ends up being the string containing the show data we will print to the console
    //             var concertData = [
    //                 "Venue: " + jsonData.venue.name,
    //                 "City: " + jsonData.venue.city,
    //                 "Date of Next Concert: " + moment(jsonData.rating.average).format("MM/DD/YYYY")
    //             ].join("\n\n");

    //             console.log(concertData);
    //         });
    //     };
    // };

    //band.findConcert(term);
}