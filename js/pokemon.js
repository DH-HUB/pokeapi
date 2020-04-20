let previousUrl = null;
let nextUrl = null;

function renderReponse(reponseJSON) {
    let resultHTML = '';
    previousUrl = reponseJSON.previous;
    if (previousUrl !== null) {
        resultHTML += '<a href="#" class="previous">Page précédente</a>'
    }

    for (let i = 0; i < reponseJSON.results.length; i++) {
        resultHTML += reponseJSON.results[i].name + '<br>';
    }
    nextUrl = reponseJSON.next;
    if (nextUrl !== null) {
        resultHTML += '<a href="#" class="next">Page suivante</a>'
    }
    $('#result').html(resultHTML,);
}

function loadUrl(url) {
    $.getJSON(url, function (reponseJSON) {
        console.log(reponseJSON);
        renderReponse(reponseJSON);
    });
}

$(document).ready(function () {

    $("#berries").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/berry/?offset=0&limit=16");   
        $(".titre").text("List Berries");
      
    });
    $("#contests").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/contest-type/?offset=0&limit=16");
    //affichage du titre de la liste Berries ( idem pour le reste des listes ci-dessous) 
        $(".titre").text("List Contests");      
    });
    $("#encounters").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/encounter-method/?offset=0&limit=16");
     
        $(".titre").text("List Encounters");     
    });
    $("#evolution").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/evolution-trigger/?offset=0&limit=16");
        $(".titre").text("List Evolution");
     
    });
    $("#games").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/generation/?offset=0&limit=8");
        $(".titre").text("List Games");
    });
    $("#items").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/item/?offset=0&limit=16");
        $(".titre").text("List Items");
        
    });
    $("#locations").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/location/?offset=0&limit=4");
        $(".titre").text("List Locations");
    });
    $("#machines").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/version/?offset=0&limit=16");
        $(".titre").text("List Machines");
    });
    $("#moves").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/move/?offset=0&limit=16");
        $(".titre").text("List Moves");
        
    });
    
    $("#pokemon").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16");
        $(".titre").text("List Pokemon");
       
    });

    $(document).on('click', '.previous', function () {
        if (previousUrl !== null) {
            loadUrl(previousUrl);
        }
    });
    $(document).on('click', '.next', function () {
        if (nextUrl !== null) {
            loadUrl(nextUrl);
        }
    });
});




