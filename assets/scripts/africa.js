var playing    = false;
var control    = document.getElementById('control');
var background = document.getElementById('background');
var sound      = new Howl({
  urls: ['assets/audio/africa.ogg', 'assets/audio/africa.m4a'],
  autoplay: true,
  loop: true,
  onload: function() {
    setTimeout(makeItPlay, 5);
  }
});

function toggle() {
  if(playing) {
    sound.pause();
    playing           = false;
    control.className = 'icon-play';
  } else {
    sound.play();
    playing           = true;
    control.className = 'icon-pause';
  }
}

function load() {
  makeItRain();
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

var makeItPlay = function() {
  if(sound.pos() === 0) {
    playing                  = false;
    control.style.visibility = 'visible';
  }
}
