$(function(){

	$(window).on("scroll",function(){

		var iTop = $(window).scrollTop();
// console.log(iTop);
		//jquery loop  i=index , el = element
		$("h1.hide").each(function(i,el){

			// $(el).offset().top;

			//when we are 200px from passing the h1
			if(($(el).offset().top - iTop)<200){
				$(el).removeClass("hide").addClass("animated lightSpeedIn");
			}


			console.log($(el).offset().top - iTop);
			// console.log(el);

		});

		



		// console.log(iTop);
	});


});