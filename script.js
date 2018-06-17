$(document).ready(function () {  
  var score = $('#score');
  
  $('#dog').on('click', function () {
    makeBone();
    // console.log(score++);
  });
  $(".apple").on('click', function () {
    $(this).hide();
    clkApple();       
  });

  function makeBone() {
    var numRand = Math.floor(Math.random() * 501);
    var divsize = 75;
    var posx = (Math.random() * ($('.ground').width() - divsize)).toFixed();
    var posy = (Math.random() * ($('.ground').height() - divsize)).toFixed();
    $newdiv = $("<div class='exploding'></div>").css({
      'left': posx + 'px',
      'top': posy + 'px'
    });
    $newdiv.appendTo('.ground').delay(500).fadeIn(300, function () {
      // $newdiv.delay(2000).fadeOut(500);
      $(this).remove();
      
    });
  }
  function clkApple() {
    $('.apple').delay(7000).fadeIn(2000);
    score+=5;
  }
  // function shkTree() {
  //   $('.apple').fadeOut(100, function () {
  //     $(this).delay(200).show();
  //   score+=20;
  // }
  
});

  

    
  








