//pokemon variables
var pokeNumber;
var pokeName;
var pokeShape;
var pokeColor;
var pokeDescription;
var pokeHappy;
var pokeRate;

var listPokemonVideos = new Array();




$(function() {

    $("a").click(function () {
        $("a").removeClass("active");
        $(this).addClass("active");
        
        var idName = $(this).attr('id');
        $("#home").removeClass("active show");
        $("#profile").removeClass("active show");
        $("#disabled").removeClass("active show");
        if(idName === "hometab") {
            $("#home").addClass("active show");
        } else if(idName === "profiletab") {
            $("#profile").addClass("active show");
        } else if(idName === "disabledtab") {
            $("#disabled").addClass("active show");
        } else {
            console.log("There has been an error determining display div based on tab.");
        }
    });



    $("#videobtn").click(function() {
        var myPokeVideo = new PokemonVideo;
        myPokeVideo.getIDs().then(result => {
                console.log(result);
                populateVideoList(result);
                var chosenNumb = Math.floor(Math.random() * listPokemonVideos.length);
                $("#youtubeSpace").empty();
                $("#youtubeSpace").append(setPokeVideo(listPokemonVideos[chosenNumb]));
            }    
        );
        //$.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=pokemon&key=AIzaSyCx2ttak0pgxrUihmDmLZfkRycwS9PM27k")
        
    });

    $("#pokemonbtn").click(function() {
        var number = $("#pokemonnumber").val();
        pokeNumber = number;
        var myPokeWeb = new PokemonWeb;
        var pokeJSON;
        myPokeWeb.getStats(number).then(result => {
                setPokemonFacts(result);
                $("#card").empty();
                $("#card").append(setPokemonCard(number, "Pikachu"));
            }    
        );

    });

});

class PokemonWeb {
    async getStats(myNumber) {
        const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${myNumber}/`);
        const pokemonData = await pokemonRes.json();
        return pokemonData
    }

}

class PokemonVideo {
    async getIDs() {
        const pokemonRes = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=pokemon&key=AIzaSyCx2ttak0pgxrUihmDmLZfkRycwS9PM27k`);
        const pokemonData = await pokemonRes.json();
        return pokemonData
    }
}

function setPokemonFacts(result){
    pokeName = result.name;
    pokeColor = result.color.name;
    pokeShape = result.shape.name;
    pokeDescription = result.flavor_text_entries[1].flavor_text;
    pokeHappy = result.base_happiness;
    pokeRate = result.capture_rate;
}

function populateVideoList(result) {
    var listLength = result.items.length;
    console.log(listLength);
    for(var i = 0; i < listLength; i++) {
        listPokemonVideos[i] = result.items[i].id.videoId;
    }
}

function setPokemonCard() {
    var card = $(`<hr>
<div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
  <div class="card-header">Pokemon #${pokeNumber}: ${pokeName}</div>
  <div class="card-body">
    <p class="card-text">Happiness: ${pokeHappy}<br><hr> Capture Rate: ${pokeRate}<br><hr> APPEARANCE: ${pokeColor}, ${pokeShape}<br><hr> FUN FACT: ${pokeDescription}<br><hr> </p>
  </div>`);
  return card
}

function setPokeVideo(givenID) {
    var myVideo = $(`<iframe width="420" height="345" src="https://www.youtube.com/embed/${givenID}">
    </iframe>`)
    return myVideo
}

/*

*/



//HdmLjigjsdNZxN4-FZpo access token for The one api....