//Page Scroll animation
$(document).ready(function(){
	$('a[href*=#]:not([href=#])').click(function(){
		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length){
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1200);
				return false;
			}
		}
	});
});

//Google Map
function initialize() {
  var myLatlng = new google.maps.LatLng(35.88097,14.401199); //setting the Latitude and Longitude
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); //getting element by Id from html
	
  var marker = new google.maps.Marker({ //setting the marker on map
      position: myLatlng,
      map: map,
	  draggable: false,
      title: 'Essentia | SMP'
  });
}

google.maps.event.addDomListener(window, 'load', initialize); //calling the function to initialize

//Main Headers fadein animation
$(window).load(function(){
	$('.div1').fadeIn('fast', function(){
		$(this).fadeTo('fast', 1);
	});
	
	$('.div2').fadeIn('slow', function(){
		$(this).fadeTo('slow', 1);
	});
});

//Google map fadein animation
$(window).scroll( function() {  
        if ( $(window).scrollTop() + $(window).height() >= $(document).height() - 600 ) {  
           mapFade(); /* calls mapFade Function below */  
        }  
    });  

    function mapFade() {  
        $('#map-canvas').fadeIn('slow', function() {  
            $(this).fadeTo("slow", 1);  
        });  
    }  	

//Image rotation on hover
$(document).ready(function(){
	$('#rotate').hover(
	function(){
		$('.grayscale').rotate({animateTo:360, duration:1500});
	},
	function(){
		$('.grayscale').rotate({animateTo:0});
	});
});


