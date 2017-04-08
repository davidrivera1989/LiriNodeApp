console.log('this is loaded');
var Twitter = require('twitter');
var spotify = require('spotify');

var client = new Twitter ({
  consumer_key: 'NLSpGC916y4B9NWGTzXd01JyC',
  consumer_secret: 'jFThvDiCUa8cTRwxCPyA43KTv2ePe3rEVrCaGbx4wozlwQZXn4',
  access_token_key: '307436546-Eit83d45yiMKmWirh0Zzd8MEqtACxoyaEfplMJzq',
  access_token_secret: 'SlYNEgJbJkEUGVGEx1VLWrQTEmHiPiG8OeWiTqqj7NgAu',
});

var params = {screen_name: 'drealrivera1989', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
    console.log(tweets[7]['text']);
  }
})

// this part is for my node liri movie-this output.
var request = require("request");
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Create an empty variable for holding the movie name
var movieName = "";
// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];
  }
}
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
// This line is just to help us debug against the actual URL.
console.log(movieName);
request(queryUrl, function(error, response, body) {
  // If the request is successful
  if (!error && response.statusCode === 200) {
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating of the movie:" + JSON.parse(body).imdbRating);
    console.log("Country where the movie was produce:" + JSON.parse(body).Country);
    console.log("Language of the movie:" + JSON.parse(body).Language);
    console.log("Plot of the movie:" + JSON.parse(body).Plot);
    console.log("Actors in the movie:" + JSON.parse(body).Actors);
    //console.log("Rotten Tomatoes Rating:" + JSON.parse(body).Ratings[1].Value[1]);
    //console.log("Rotten Tomatoes URL" + JSON.parse(body));
  }
});
