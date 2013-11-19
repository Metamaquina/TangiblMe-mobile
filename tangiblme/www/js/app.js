var app = {};

$(document).ready(function () {

    "use strict";

    function renderHomeView() {
        var html =
        '<div class="app">' +
            '<div id="buttons">' +
              '<div onmouseup="document.location=\'index.html#make\';" id="make" class="button">I <b>MAKE</b> things</div>' +
              '<div id="spacer"></div>' +
              '<div onmouseup="document.location=\'index.html#want\';" id="want" class="button">I <b>WANT</b> things</a>' +
            '</div>' +
            '<div id="mm-footer"></div>' +
        '</div>';
        $('body').html(html);
    }

    function renderMakeView() {
        var html =
            '<div class="button">I make things indeed!</div>' +
            '<div class="button" onmouseup="document.location=\'index.html\';">Main Menu</div>';

        $('body').html(html);
    };

    function renderWantView() {
        var html =
            '<div class="button">I really really want them!!!</div>' +
            '<div class="button" onmouseup="document.location=\'index.html\';">Main Menu</div>';

        $('body').html(html);
    };

    function route() {
        var hash = window.location.hash,
            wantURL = /^#want/,
            makeURL = /^#make/,
            match;
        if (!hash) {
            renderHomeView();
            return;
        }

        match = hash.match(wantURL);
        if (match) {
          renderWantView();
          return;
        }

        match = hash.match(makeURL);
        if (match) {
          renderMakeView();
          return;
        }
    };

    $(window).on('hashchange', route);

    route();
});

