$(function() {

  //inizializzo i tre array per i numeri
  var arrRandom = [];
  var arrUser = [];
  var arrResult = [];
  //inizializzo la schermata
  reset();

  $('#btn-start').click(function(){
    $(this).hide();
    //con questo ciclo pusho tot numeri random nell'array apposito e li mostro per 5 secondi a video. Dopodiché mostro input e bottone per l'utente
    while (arrRandom.length < parseInt($('#input-level').val())) {
      arrRandom.push(getRandomNumber(1, 100));
      printDisplay(arrRandom.join(', '), '#display');
      $('#input-level').hide();
      setTimeout(function() {
        printDisplay('Indovina i numeri!', '#display');
        $('#input-user').show();
        $('#push-num').show();
      }, 5000);
    }
  }); //end btn-start click

  $('#push-num').click(function(){
    //pusho i numeri utente parsati dentro l'array apposito e resetto il campo input
    arrUser.push(parseInt($('#input-user').val()));
    $('#input-user').val('');
    //quando nell'array ci sono tanti numeri quanti scelti inizialmente dall'utente, scompaiono input e bottoni, il computer "calcola" e parte il ciclo for
    if (arrUser.length === parseInt($('#input-level').val())) {
      $('#input-user').hide();
      $(this).hide();
      printDisplay('Calcolo in corso...', '#display');
      //con questo ciclo controllo se dei numeri inseriti dall'utente ce ne di presenti all'interno di quelli random; se così il numero viene pushato nell'array del risultato
      for (var i = 0; i < arrUser.length; i++) {
        if(arrRandom.includes(arrUser[i])) {
          arrResult.push(arrUser[i]);
        }
      }
      //dopo tre secondi viene mostrato l'output in base al risultato ed il bottone per ricominciare il gioco
      setTimeout(function(){
        if (arrResult.length == 0) {
          printDisplay('Hai perso, nessun numero indovinato!', '#display');
        } else {
          printDisplay('Hai indovinato ' + arrResult.length + ' numeri: ' + arrResult.join(', '), '#display');
        }
        $('#restart').show();
      }, 3000);
    }
  }); //end push-num click

  $('#restart').click(function(){
    reset();
  }); //end restart click

  /* FUNZIONI */

  //funzione per ritornare alla situazione di default iniziale
  function reset() {
    $('#display').text('Sei pronto a giocare?');
    $('#btn-start').show();
    $('#input-level').show();
    $('#input-level').val('');
    $('#input-user').hide();
    $('#push-num').hide();
    $('#restart').hide();
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