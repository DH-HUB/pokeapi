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
    let previous
    $("#berries").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/berry/?offset=0&limit=16");
        
    });
    $("#contests").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/contest-type/?offset=0&limit=16");
        
    });
    $("#encounters").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/encounter-method/?offset=0&limit=16");
        
    });
    $("#evolution").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/evolution-trigger/?offset=0&limit=16")+  loadUrl("https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=16");
        
    });
    $("#games").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/generation/?offset=0&limit=8");
        
    });
    $("#items").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/item/?offset=0&limit=16");
        
    });
    $("#locations").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/location/?offset=0&limit=4");
        
    });
    $("#machines").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/version/?offset=0&limit=16");
        
    });
    $("#moves").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/move/?offset=0&limit=16");
        
    });
    $("#pokemon").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16");
        
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


