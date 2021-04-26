$(function() {

  var arrRandom = [];
  var arrUser = [];

  reset();

  $('#btn-start').click(function(){
    $('#btn-start').hide();
    while (arrRandom.length < 5) {
      arrRandom.push(getRandomNumber(1, 100));
      printDisplay(arrRandom.join(', '), '#display');
      setTimeout(function() {
        printDisplay('Indovina i numeri!', '#display');
        $('#input-user').show();
        $('#push-num').show();
      }, 5000);
    }
  }); //end btn-start click

  $('#push-num').click(function(){
    var arrResult = [];
    arrUser.push($('#input-user').val());
    $('#input-user').val('');
    if (arrUser.length === 5) {
      printDisplay('Calcolo in corso...', '#display');
      for (var i = 0; i < arrRandom.length; i++) {
        if(arrRandom.includes(arrUser[i])) {
          arrResult.push(arrUser[i]);
        }
        console.log(arrResult);
      }
      setTimeout(function(){
        printDisplay('Hai indovinato ' + arrResult.length + ' numeri: ' + arrResult.join(', '), '#display');
      }, 3000);
  }
  }); //end push-num click
  


  //funzione per ritornare alla situazione di default iniziale
  function reset() {
    $('#display').text('Sei pronto a giocare?');
    $('#input-user').hide();
    $('#push-num').hide();
  }

  //funzione che mi genera un numero massimo tra min e max decisi dall'utente
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  //funzione per stampare a video un output desiderato
  function printDisplay(output, target) {
    $(target).text(output);
  }


}); //end document ready