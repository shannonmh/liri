require("dotenv").config();

var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var command = process.argv[2];

var term = process.argv.slice(3).join(" ");

var moment = require("moment");

var fs = require("fs");

if (!command) {
    console.log("Please enter a command.");
}

// if (!term) {
//     console.log("Please enter a search term.");
// }

if (command === "concert-this" && !term) {
    term = "Fall Out Boy";

    console.log("Searching for " + term + " on Bandisintown");

    //console.log(term);

    function concertInfo() {
        var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
        axios.get(URL).then(
            function (response) {
                //console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    var concertResponse = [
                        "--------------------",
                        "Venue: " + response.data[i].venue.name,
                        "City: " + response.data[i].venue.city,
                        "Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"),
                        "--------------------"
                    ].join("\n\n");

                    console.log(concertResponse);

                    fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + concertResponse, function(err) {
                        if (err) throw err;
                       
                      });

                    // console.log("--------------------");
                    // console.log("Venue: " + response.data[i].venue.name);
                    // console.log("City: " + response.data[i].venue.city);
                    // console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    // console.log("--------------------");
                };
            }).catch(function (err) {
                console.log("Error: " + err)
            })
    };

    //   // Append showData and the divider to log.txt, print showData to the console
    //   fs.appendFile("log.txt", showData + divider, function(err) {
    //     if (err) throw err;
       
    //   });

    concertInfo();
} else if (command === "concert-this") {

    console.log("Searching for " + term + " on Bandisintown");

    //console.log(term);

    function concertInfo() {
        var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
        axios.get(URL).then(
            function (response) {
                //console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    var concertResponse = [
                        "--------------------",
                        "Venue: " + response.data[i].venue.name,
                        "City: " + response.data[i].venue.city,
                        "Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"),
                        "--------------------"
                    ].join("\n\n");

                    console.log(concertResponse);

                    fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + concertResponse, function(err) {
                        if (err) throw err;
                       
                      });

                    // console.log("--------------------");
                    // console.log("Venue: " + response.data[i].venue.name);
                    // console.log("City: " + response.data[i].venue.city);
                    // console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    // console.log("--------------------");
                };
            }).catch(function (err) {
                console.log("Error: " + err)
            })
    };

    concertInfo();
}

if (command === "movie-this" && !term) {
    term = "Mr Nobody";

    console.log("Searching for " + term + " on OMDB");

    //console.log(term);

    function movieInfo() {
        var URL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
        axios.get(URL).then(function (response) {
            //console.log(response.data);
            var movieData = response.data;

            var movieResponse = [
                "--------------------",
                "Title: " + movieData.Title,
                "Year: " + movieData.Year,
                "IMDB Rating: " + movieData.imdbRating,
                "Rotten Tomatoes Rating: " + movieData.Ratings[1].Value,
                "Country Produced: " + movieData.Country,
                "Language: " + movieData.Language,
                "Plot: " + movieData.Plot,
                "Actors: " + movieData.Actors,
                "--------------------"
            ].join("\n\n");

            console.log(movieResponse);

            fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + movieResponse, function(err) {
                if (err) throw err;
               
              });

            // console.log("--------------------");
            // console.log("Title: " + movieData.Title);
            // console.log("Year: " + movieData.Year);
            // console.log("IMDB Rating: " + movieData.imdbRating);
            // console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
            // console.log("Country Produced: " + movieData.Country);
            // console.log("Language: " + movieData.Language);
            // console.log("Plot: " + movieData.Plot);
            // console.log("Actors: " + movieData.Actors);
            // console.log("--------------------");
        }).catch(function (err) {
            console.log("Error: " + err)
        })
    };

    movieInfo();
} else if (command === "movie-this") {

    console.log("Searching for " + term + " on OMDB");

    //console.log(term);

    function movieInfo() {
        var URL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
        axios.get(URL).then(function (response) {
            //console.log(response.data);

            var movieData = response.data;

            var movieResponse = [
                "--------------------",
                "Title: " + movieData.Title,
                "Year: " + movieData.Year,
                "IMDB Rating: " + movieData.imdbRating,
                "Rotten Tomatoes Rating: " + movieData.Ratings[1].Value,
                "Country Produced: " + movieData.Country,
                "Language: " + movieData.Language,
                "Plot: " + movieData.Plot,
                "Actors: " + movieData.Actors,
                "--------------------"
            ].join("\n\n");

            console.log(movieResponse);

            fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + movieResponse, function(err) {
                if (err) throw err;
               
              });

            // console.log("--------------------");
            // console.log("Title: " + movieData.Title);
            // console.log("Year: " + movieData.Year);
            // console.log("IMDB Rating: " + movieData.imdbRating);
            // console.log("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value);
            // console.log("Country Produced: " + movieData.Country);
            // console.log("Language: " + movieData.Language);
            // console.log("Plot: " + movieData.Plot);
            // console.log("Actors: " + movieData.Actors);
            // console.log("--------------------");
        }).catch(function (err) {
            console.log("Error: " + err)
        })
    };

    movieInfo();
}

if (command === "spotify-this-song" && !term) {

    console.log("Searching for song on Spotify");

    function songInfo() {
        spotify.search({ type: 'track', query: 'The Sign Ace of Base' })
            .then(function (response) {
                //console.log(response);
                var songData = response.tracks.items[0];

                var songResponse = [
                    "--------------------",
                    "Artist(s): " + songData.artists[0].name,
                    "Song Title: " + songData.name,
                    "Preview Link: " + songData.preview_url,
                    "Album: " + songData.album.name,
                    "--------------------"
                ].join("\n\n");

                console.log(songResponse);

                fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + songResponse, function(err) {
                    if (err) throw err;
                   
                  });

                // console.log("--------------------");
                // //console.log(term);
                // console.log("Artist(s): " + songData.artists[0].name);
                // console.log("Song Title: " + songData.name);
                // console.log("Preview Link: " + songData.preview_url);
                // console.log("Album: " + songData.album.name);
                // console.log("--------------------");
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    songInfo();

} else if (command === "spotify-this-song") {

    console.log("Searching for " + term + " on Spotify");

    function songInfo() {
        spotify.search({ type: 'track', query: term })
            .then(function (response) {
                //console.log(response);
                
                var songData = response.tracks.items[0];

                var songResponse = [
                    "--------------------",
                    "Artist(s): " + songData.artists[0].name,
                    "Song Title: " + songData.name,
                    "Preview Link: " + songData.preview_url,
                    "Album: " + songData.album.name,
                    "--------------------"
                ].join("\n\n");

                console.log(songResponse);

                fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + songResponse, function(err) {
                    if (err) throw err;
                   
                  });

                // console.log("--------------------");
                // //console.log(term);
                // console.log("Artist(s): " + songData.artists[0].name);
                // console.log("Song Title: " + songData.name);
                // console.log("Preview Link: " + songData.preview_url);
                // console.log("Album: " + songData.album.name);
                // console.log("--------------------");
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    songInfo();
}

if (command === "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        //console.log("Searching for " + data);

        var dataArr = data.split(",");

        //console.log(dataArr);

        command = dataArr[0];
        term = dataArr[1];

        // command = dataArr[2];
        // term = dataArr[3];

        // command = dataArr[4];
        // term = dataArr[5];

        // console.log(command);

        // console.log(term);

        if (command === "spotify-this-song") {

            console.log("Searching for " + term + " on Spotify");
        
            function songInfo() {
                spotify.search({ type: 'track', query: term })
                    .then(function (response) {
                        //console.log(response);
                        
                        var songData = response.tracks.items[0];
        
                        var songResponse = [
                            "--------------------",
                            "Artist(s): " + songData.artists[0].name,
                            "Song Title: " + songData.name,
                            "Preview Link: " + songData.preview_url,
                            "Album: " + songData.album.name,
                            "--------------------"
                        ].join("\n\n");
        
                        console.log(songResponse);

                        fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + songResponse, function(err) {
                            if (err) throw err;
                           
                          });
        
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            };
        
            songInfo();

        } else if (command === "movie-this") {

            console.log("Searching for " + term + " on OMDB");
        
            //console.log(term);
        
            function movieInfo() {
                var URL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
                axios.get(URL).then(function (response) {
                    //console.log(response.data);
        
                    var movieData = response.data;
        
                    var movieResponse = [
                        "--------------------",
                        "Title: " + movieData.Title,
                        "Year: " + movieData.Year,
                        "IMDB Rating: " + movieData.imdbRating,
                        "Rotten Tomatoes Rating: " + movieData.Ratings[1].Value,
                        "Country Produced: " + movieData.Country,
                        "Language: " + movieData.Language,
                        "Plot: " + movieData.Plot,
                        "Actors: " + movieData.Actors,
                        "--------------------"
                    ].join("\n\n");
        
                    console.log(movieResponse);

                    fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + movieResponse, function(err) {
                        if (err) throw err;
                       
                      });
        
                }).catch(function (err) {
                    console.log("Error: " + err)
                })
            };
        
            movieInfo();
        } else if (command === "concert-this") {

            console.log("Searching for " + term + " on Bandisintown");
        
            //console.log(term);
        
            function concertInfo() {
                var URL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
                axios.get(URL).then(
                    function (response) {
                        //console.log(response.data);
                        
                        for (var i = 0; i < response.data.length; i++) {
                            var concertResponse = [
                                "--------------------",
                                "Venue: " + response.data[i].venue.name,
                                "City: " + response.data[i].venue.city,
                                "Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"),
                                "--------------------"
                            ].join("\n\n");
        
                            console.log(concertResponse);

                            fs.appendFile("log.txt", "\n" + command + " " + term + "\n" + concertResponse, function(err) {
                                if (err) throw err;
                               
                              });
        
                        };
                    }).catch(function (err) {
                        console.log("Error: " + err)
                    })
            };
        
            concertInfo();
        }


    });
}