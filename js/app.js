$(document).foundation();

$(document).ready(function() {
	var showMoreSkillsButton = $('.show-more-skills');

	showMoreSkillsButton.on('click touchstart', function() {
    var txt = $(".more-skills").is(':visible') ? 'Show more skills' : 'Less skills';
    $('.more-skills').slideToggle();
    $(this).html(txt);

	});


	var $animation_elements = $('.animation-element');
	var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

	 // Simple elevator usage.
    var elementButton = document.querySelector('.elevator');
    var elevator = new Elevator({
        element: elementButton,
        mainAudio: './music/elevator.mp3', // Music from http://www.bensound.com/
        endAudio:  './music/ding.mp3'
    });

});
