$(document).foundation()
// var elem = new Foundation.Magellan(element, options);
// var element = document.querySelector('#mainNav');
// var options = {
// 	'data-active-class':	'active',
// 	'data-bar-offset': 100
// }
// var elem = new Foundation.Magellan(element, options);


$(window).on("load",function() {
  $(window).scroll(function() {
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      // var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      var windowBottom = 400;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom > windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(200,0);}
      }
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load
});