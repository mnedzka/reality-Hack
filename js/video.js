$(document).ready(function(){
  function deleteVideo() {
    document.getElementById('player').src='';
  }

  function LoadVideo() {
    document.getElementById('player').src='assets/img/Reality_Hack.mp4';
  }

  var overlay = $('.video-overlay');
  var trigger = $('.view-video');
  closeVideo = $('.close-video, span.close-small');

  overlay.hide();
  trigger.click(function(){
    overlay.show();
    LoadVideo();
    $('html').css({
        'overflow': 'hidden',
        'height': '100%'
    });
    $('#vjs_video_4_html5_api').get(0).pause();
  });

  closeVideo.click(function(){
    deleteVideo();
    overlay.hide();
    $('html').css({
        'overflow': 'auto',
        'height': 'auto'
    });
    $('#vjs_video_4_html5_api').get(0).play();
  });
});
