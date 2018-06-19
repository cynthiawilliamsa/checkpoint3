
$(document).ready(function () {  
  var score_span = $('#score');  
  var score = 0;
  //event handlers//
  $('#dog').on('click', function () {
    makeBone(); //runs functions below
    scoreUpdate();    
  });
  $(".apple").on('click', function () {
    $(this).hide(); //hides apple upon click
    clkApple(); //runs function below
    scoreUpdate();      
  });
//functions//
  function makeBone() { //calculates random location for bone to appear on click event
    var numRand = Math.floor(Math.random() * 501);
    var divsize = 75;
    var posx = (Math.random() * ($('.ground').width() - divsize)).toFixed();
    var posy = (Math.random() * ($('.ground').height() - divsize)).toFixed();
    $newdiv = $("<div class='exploding'></div>").css({
      'left': posx + 'px',
      'top': posy + 'px'      
    });
    score ++; //increment score by one for each bone
    $newdiv.appendTo('.ground').delay(500).fadeIn(300, function () {      //appends div with bone and then removes immediately
      $(this).remove();      
    }); 
  }
  function clkApple() { //upon click triggers to fade hidden apple back into screen after delay
    $('.apple').delay(500).fadeIn(1000);
    score+=5; //increments score of each apple click by 5
  }  
  function scoreUpdate() {   //upon respective click updates score.
    console.log(score); 
    score_span.text(score);
  }
});


  

    
  








