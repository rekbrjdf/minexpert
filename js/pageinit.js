$(document).ready(function(){
	
	$(":input").inputmask();
	$("#phone").inputmask({"mask": "+7 (999) 999-9999"});
	$("#phone1").inputmask({"mask": "+7 (999) 999-9999"});
	$("#phone2").inputmask({"mask": "+7 (999) 999-9999"});

    $(".b-btn").on("click","a", function (event) {
         event.preventDefault();

         var id  = $(this).attr('href'),

            top = $(id).offset().top;
        
         $('body,html').animate({scrollTop: top}, 1500);
    });
});