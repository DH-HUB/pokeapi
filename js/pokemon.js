let previousUrl = null;
let nextUrl = null;
let imgUrl = null;

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
    $(document).on('click', '.pokemon',  function (e) {
       
        e.preventDefault();
        let link = $(this);
        $.getJSON(link.data('src'), function (reponseJSON) {
            console.log(reponseJSON);
            let html ='';
            html += '<h3>'+'<li>'+'nom du Pokémon =' +reponseJSON.name + '</li>'+'</h3>';
            html +='<h3>'+'<li>'+'base_experience ='+ reponseJSON.base_experience+'</li>'+'</h3>';
            html += '<h3>'+'<li>'+'La taille du Pokémon ='+reponseJSON.height+''+ 'dm'+'</h3>'+'</li>';
            html += '<ul>';
         

            
            for (let i = 0; i < reponseJSON.base_experience.length; i++) {
                html += '<li>'+reponseJSON.base_experience[i].base_experience +'</li>';
                html += '<li>'+reponseJSON.base_experience[i].name +'</li>';
                html += '<li>'+reponseJSON.base_experience[i].height +'</li>';
  
            }
            html += '</ul>';
            $('#results').html(html);
            $(".titre").text("Description du Pokémon");
  
        

        });

    })
    $("#berries").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/berry/?offset=0&limit=16");
        $(".titre").text("List Berries");

    });
    $("#contests").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/contest-type/?offset=0&limit=16");
        //affichage du titre de la liste Berries ( idem pour le reste des listes ci-dessous)
        $(".titre").text("Liste Contests");
    });
    $("#encounters").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/encounter-method/?offset=0&limit=16");

        $(".titre").text("Liste Encounters");
    });
    $("#evolution").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/evolution-trigger/?offset=0&limit=16");
        $(".titre").text("Liste Evolution");

    });
    $("#games").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/generation/?offset=0&limit=8");
        $(".titre").text("Liste Games");
    });
    $("#items").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/item/?offset=0&limit=16");
        $(".titre").text("Liste Items");

    });
    $("#locations").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/location/?offset=0&limit=4");
        $(".titre").text("Liste Locations");
    });
    $("#machines").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/version/?offset=0&limit=16");
        $(".titre").text("Liste Machines");
    });
    $("#moves").hover(function () {
        loadUrl("https://pokeapi.co/api/v2/move/?offset=0&limit=16");
        $(".titre").text("Liste Moves");

    });

    $("#pokemon").hover(function (pika) {
        $(".titre").text("Liste Pokémon");
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

    $("#click").hover(function() {
        player = document.getElementById('sound');
        player.play();
    });

});






