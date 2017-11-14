$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    menu: '#header',
    verticalCentered: true,
    responsiveWidth: 1000,
    afterRender: function(){
      $('video').get(0).play();
    }
  });
});
