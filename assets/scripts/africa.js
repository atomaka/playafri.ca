$(document).ready(function() {
  if(isMobile.any()) {
    showButton("Play");
  } else {
    showButton("None");
  }

  var mediaPlayer = jQuery('#player');

  mediaPlayer.jPlayer({
    solution:    "html",
    supplied : 'mp3, oga, m4a',
    cssSelector: {
      play: '#play',
    },

    ready: function() {jQuery(this).jPlayer("setMedia", {
      mp3: 'assets/audio/africa.mp3',
      oga: 'assets/audio/africa.oga',
      m4a: 'assets/audio/africa.m4a'
    }).jPlayer("play");},

    loop: true
  });

  $('#play').click(function() {
    if(isMobile.any()) {
      showButton("Pause");
    }
    $('#player').jPlayer('play');
  });

  $('#pause').click(function() {
    if(isMobile.any()) {
      showButton("Play");
    }
    $('#player').jPlayer('pause');
  });

  var image = document.getElementById('background');
  image.onload = function() {
    var engine = new RainyDay({
      image: this
    });
    engine.rain([ [3, 2, 2] ], 100);
  };
  image.crossOrigin = 'anonymous';
});

function showButton(mode) {
  if(mode === "Play") {
    $('#play').show();
    $('#pause').hide();
  } else if(mode == "Pause") {
    $('#play').hide();
    $('#pause').show();
  } else {
    $('#play').hide();
    $('#pause').hide();
  }
}

var isMobile = {
  Android: function() { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
  any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
