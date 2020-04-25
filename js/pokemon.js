let previousUrl = null;
let nextUrl = null;


function renderReponse(reponseJSON) {
    let resultsHTML = '';
    previousUrl = reponseJSON.previous;
    if (previousUrl !== null) {
        resultsHTML += '<a href="#" class="previous">Page précédente</a>'
    }
    for (let i = 0; i < reponseJSON.results.length; i++) {
        resultsHTML += '<a href="javascript:void(0)" class="pokemon" data-src="' + reponseJSON.results[i].url + '">' + reponseJSON.results[i].name + '</a><br>';
    }
    nextUrl = reponseJSON.next;
    if (nextUrl !== null) {
        resultsHTML += '<a href="#" class="next">Page suivante</a>'
    }
    $('#results').html(resultsHTML,);

}

function loadUrl(url) {
    $.getJSON(url, function (reponseJSON) {
        console.log(reponseJSON);
        renderReponse(reponseJSON);
    });
}

$(document).ready(function () {
    $(document).on('click', '.pokemon', function (e) {
       
        e.preventDefault();
        let link = $(this);
        $.getJSON(link.data('src'), function (reponseJSON) {
            console.log(reponseJSON);
            let html = '';
            html +='<br>'+'<br>'+ '<h3>' + '<br>'+'nom du Pokémon =' +reponseJSON.name + '</h3>';
            html += '<h3>' +'<br>'+'<br>'+'base_experience ='+ reponseJSON.base_experience +'</h3>';
            html += '<h3>' +'<br>'+ '<br>'+'<br>'+'La taille du Pokémon ='+reponseJSON.height+ 'dm'+'<br>'+'<br>'+'<br>'+'<br>'+ '</h3>';
            //html +=  '<span>' + reponseJSON.sprites + '</span>';
            for (let i = 0; i < reponseJSON.base_experience.length; i++) {
                html += '<li>'+reponseJSON.base_experience[i].base_experience +'</li>';
            }
            html += '</ul>';
            $('#pokemon-detail').html(html);
        });

    })
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
        $(".titre").text("List Pokemon");
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






