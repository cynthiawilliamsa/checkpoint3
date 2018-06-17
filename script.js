$(document).ready(function () {
  
  var bones = $('#bones')
  var score = 0;

  

  $('#dog').on('click', function () {
    makeBone();
    console.log(score++);

  })
  function makeBone() {
    var numRand = Math.floor(Math.random() * 501);
    var divsize = 75;
    var posx = (Math.random() * ($('body').width() - divsize)).toFixed();
    var posy = (Math.random() * ($('body').height() - divsize)).toFixed();
    $newdiv = $("<div class='exploding'></div>").css({
      'left': posx + 'px',
      'top': posy + 'px'
    });
    $newdiv.appendTo('body').delay(2000).fadeIn(300, function () {
      //$(this).remove();
      makeDiv();
    });
  }
  
  // function boneScore() {
  //   //when bone detected on screen increment score

  })




