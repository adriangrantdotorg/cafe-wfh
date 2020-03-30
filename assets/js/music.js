console.clear()
var sound1 = new Howl({
  src: ['assets/sounds/beats-15.mp3'],
  loop:true
});
var sound2 = new Howl({
  src: ['assets/sounds/cafe-15.mp3'],
  loop:true
});

var slider = document.getElementById("myRange");

slider.oninput = function() {
  console.clear()
  var sound1vol = this.value/100;
  sound1.volume(sound1vol)
  var sound2vol = Math.abs(this.value-100)/100
  sound2.volume(sound2vol)
  
  console.log('sound1vol', sound1vol)
  console.log('sound2vol', sound2vol);
}

$('.audioPlayer').on('play', function(){
    sound2.play()
  })

$('.playSound').click(function(){
  $('.audioPlayer').attr('src', sound1._src )
  sound1.play();
  sound2.play();
})
$('.pauseSound').click(function(){
  sound1.pause(); 
  sound2.pause();
})
