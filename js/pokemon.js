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
        loadUrl("https://pokeapi.co/api/v2/berry/?offset=0&limit=20");
        
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


