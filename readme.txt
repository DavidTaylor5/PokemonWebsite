David Taylor 7/23/21

The website that I have created has two tabs that each use information from external APIS.


The Pokemon Stats tab uses the PokeAPI at https://pokeapi.co 
The request I send to pikeapi is https://pokeapi.co/api/v2/pokemon-species/{Pokemon Number}/
which allows me to get all of the statistics of a pokemon based on its number.

The Pokemon Video tab uses the youtube API to search for pokemon video ids.
Using the ids retrived I display a random youtube video.

https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=pokemon&key={API KEY}
My google API key is ********************************

