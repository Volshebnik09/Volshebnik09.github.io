$(document).ready(function(){
    if($(window).width()> 500){
        buildCube(100,"85%","50%",0,5,null,30);
    } else{
        buildCube(100,"50%","80%",0,5,null,30);
    }
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$('.wrapper').stop().animate({
                "opacity": 1,
            }, 500)
		}else{
			$('.wrapper').stop().animate({
                "opacity": 0,
            },100)
		}
	});
    
    if($(window).width()< 600) {
        $('.slider').slick({
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
          });
    } else if ($(window).width()< 1000) {
        $('.slider').slick({
            infinite: true,
            slidesToShow: 2,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
          });
    } else {
        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
          });
    }
    $('.slick-arrow').hide();
    $('.secretbtn').on('click', function(){
        $('.secretbtn-popup').fadeIn(100);
        secret += 180;
    });
    $('.cube').on('click', function() {
        $('#cube_tip').fadeOut(500);
    });
});
