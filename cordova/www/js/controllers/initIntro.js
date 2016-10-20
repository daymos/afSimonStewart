'use strict';

var username = '';

function initIntro() {
  if (username === '') {
    username = $('#first-name').val();
  }
  var introPage = Handlebars.compile(pages['intro'])({
    username: username });
  clearPage('main');
  addPage('intro', introPage);
  showPage('intro');

  $('#startGame').click(function () {
    clearPage('main');
    initLevel();
  });
}