var playing = false;
var control = document.getElementById('control');
var background = document.getElementById('background');

var sound = new Howl({
  urls: ['assets/audio/africa.ogg', 'assets/audio/africa.m4a'],
  autoplay: true,
  loop: true
});

function toggle() {
  if(playing) {
    sound.pause();
    playing = false;
    control.className = 'icon-play';
  } else {
    sound.play();
    playing = true;
    control.className = 'icon-pause';
  }
}

function load() {
  makeItRain();
  if(!isMobile.any()) {
    playing = true;
    control.style.visibility = 'hidden';
  }
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

var isMobile = {
  Android: function() { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
  any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

