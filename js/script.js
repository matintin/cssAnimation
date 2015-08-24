$(function(){

	$("#sign-up-control").on("click",function(e){

		e.preventDefault();

		$("#sign-up").addClass("moveIn");

		$("#overlay").removeClass("hide");

		setTimeout(function(){
		
			$("#overlay").addClass("fadeIn");
		},1);

	});

	$(".close-button").on("click",function(){

		$("#sign-up").removeClass("moveIn");

		$("#overlay").removeClass("fadeIn");

		$("#overlay").one("transitionend",function(){

			$("#overlay").addClass("hide");
		});
	});

	$("#noty-control").on("click",function(e){

		e.preventDefault();

		$("#noty").removeClass("hide");
		// $("#noty1").removeClass("hide");
		$("#noty1").addClass("moveIn");


	
		setTimeout(function(){

			$("#noty").addClass("fadeIn");
			
		},1);
	});

	$("#noty").on("click",function(){

		$("#noty").removeClass("fadeIn");

		$("#noty").one("transitionend",function(){

			$("#noty").addClass("hide");
		});
	});

	$("#noty1").on("click",function(){

		$("#noty1").removeClass("moveIn");
	});


});