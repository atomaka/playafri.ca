var sound      = null;
var playing    = true;
var control    = document.getElementById('control');
var background = document.getElementById('background');

function toggle() {
  if(playing) {
    sound.pause();
    playing           = false;
  } else {
    sound.play();
    playing           = true;
  }
}

function load() {
  makeItRain();
  makeItPlay();
}

function makeItPlay() {
  sound = new Howl({
    urls: ['assets/audio/africa.ogg', 'assets/audio/africa.m4a'],
    autoplay: true,
    loop: true,
    onplay: function() {
      control.style.visibility = 'hidden';
    }
  });
  setTimeout(enableToggle, 2500);
}

function makeItRain() {
  background.onload = function() {
    var engine = new RainyDay({
      image: this
    });
    engine.rain([ [3, 2, 2] ], 100);
  };
  background.src = 'assets/images/africa.png';
  background.crossOrigin = 'anonymous';
}

var enableToggle = function() {
  if(0 === sound.pos()) {
    playing                  = false;
    control.className        = 'icon-play';
    control.style.visibility = 'visible';
  }
}
