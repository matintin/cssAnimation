$(function(){

	$("#sign-up-control").on("click",function(e){

		e.preventDefault();

		$("#overlay").removeClass("hide");
		
		setTimeout(function(){

			$("#overlay").addClass("fadeIn");

		},1);

		$("#sign-up").removeClass("hide");
		$("#sign-up form").addClass("animated bounceIn");

		$("#sign-up form").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){

			$("#sign-up form").removeClass("animated bounceIn");
		});

		// 	$(this).addClass("animated fadeInUp");

		// $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			
		// 	$(this).removeClass("animated fadeInUp");
			
		// });

	});

	$(".close-button").on("click",function(){

		$("#overlay").removeClass("fadeIn");

		$("#overlay").one("transitionend",function(){

			$("#overlay").addClass("hide");
		});

		$("#sign-up form").addClass("animated zoomOutDown");

		$("#sign-up form").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){

			$("#sign-up form").removeClass("animated zoomOutDown");
			$("#sign-up").addClass("hide");
		});
	});



});