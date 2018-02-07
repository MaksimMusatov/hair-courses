function scroll_to(id){ 
	$('html, body').animate({ 
		scrollTop: $('#'+id).offset().top-20 
	}, 800); 
}
$(document).ready(function(){
    function alert(_text) {
        $("#alert").fadeIn(200);
        $("#alert p").html(_text);
        setTimeout(function(){$("#alert").fadeOut(2000);}, 5000);
    }    
    //Check
    $(document).on('click','form [type="submit"]',function(){
        if($(this).hasClass('BtnDisabled')){
            alert('Ознакомьтесь с политикой конфиденциальности и поставьте галочку о согласии');
        }else{
            $(this).parents('form').submit();
        }
        return false;
    });


  //Чекбоксы
  $(document).on('click','.Check1', function(){
    var d = $("#call-form1").hasClass('BtnDisabled');
    if (d){
      $("#call-form1").removeClass('BtnDisabled');
    }else{
      $("#call-form1").addClass('BtnDisabled');           
    }
  });
  $(document).on('click','.Check2', function(){
    var d = $("#call-form2").hasClass('BtnDisabled');
    if (d){
      $("#call-form2").removeClass('BtnDisabled');
    }else{
      $("#call-form2").addClass('BtnDisabled');           
    }
  });  


	$(document).on('click','[data-scroll-to]',function(){
		if($(this).hasClass('top-menu-a')){
			$('#overflow').fadeOut(200);
			$('body').removeClass('oh');
			$('#nav_ham').toggleClass('open');
			$('.side_content_absolute').removeClass('side_visible');
    	}
		scroll_to($(this).attr('data-scroll-to'));
		return false;
	});
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
			768:{
				items:1
			},
			992:{
				items:1
			}
		},
		touchDrag:false,
		mouseDrag:false,
	});
	
	$( ".owl-prev").html('<i class="fa fa-chevron-left fa-2x"></i>');
	$( ".owl-next").html('<i class="fa fa-chevron-right fa-2x"></i>');
	
	$(document).on('click','.pop_close, #overflow',function(){
		$('#overflow').fadeOut(200);
		$('body').removeClass('oh');
		$('#nav_ham').toggleClass('open');
		$('.side_content_absolute').removeClass('side_visible');
    	$('#trial').fadeOut(200);
		return false;
	});	
	
	$(document).on('click','.m-menu-pos', function(){
		$('#nav_ham').toggleClass('open');
		if($('.side_content_absolute').hasClass('side_visible')){
			$('.side_content_absolute').removeClass('side_visible');
        	$('body').removeClass('oh');
        	$('#overflow').fadeOut(200);
		}else{
			$('.side_content_absolute').addClass('side_visible');
        	$('body').addClass('oh');
        	$('#overflow').fadeIn(200);
        	scroll_to('nav_ham');
		}
	});   
	$(document).on('click','.close_absolute',function(){
        $('.side_content_absolute').removeClass('side_visible');
        $('body').removeClass('oh');
		$('#nav_ham').toggleClass('open');
    	$('#overflow').fadeOut(200);
        return false;
    });
	
	$(document).on('click','.top-menu-a',function(){
		$(this).parent().find('ul').toggle('slow');
    });	
	
	$(document).on('click','.pop_close2, #overflow2',function(){ 
	  $('#overflow2').fadeOut(200); 
	  $('body').removeClass('oh2'); 
	  $('#product_view2').hide(200); 
	  $('#product_view3').hide(200);
	  return false; 
	});

	$(document).on('click','.red-button-click',function(){ 
	  $('#overflow2').fadeIn(200); 
	  $('#product_view2').show(200); 
	  $('body').addClass('oh2'); 
	  return false; 
	});

    $(document).on('submit','.form1',function(){
    	var _this = $('.form1').serialize();
    	$.ajax({
    		url : location.href,
    		data:"ajax=send&"+_this,
    		success:function(json){
    			var res = JSON.parse(json); 
    			$('.error_input').removeClass('error_input');
    			if(res.status == 'Success'){
    				$(".form1").fadeOut(0);
    				$(".form1").next('.thanks_text').fadeIn(200);
    			}else{
				    $.each(res.error, function(key, value){
                        $('[name="'+value+'"]').addClass('error_input');
                        if (value=='sign_text[rubr]') {$('.chosen-container ul').addClass('error_input')}; 
                    });
    			}
    		}
    	});

    	return false;
    });

    $(document).on('submit','.form2',function(){
    	var _this = $('.form2').serialize();
    	$.ajax({
    		url : location.href,
    		data:"ajax=send2&"+_this,
    		success:function(json){
    			var res = JSON.parse(json); 
    			$('.error_input').removeClass('error_input');
    			if(res.status == 'Success'){
    				$(".form2").fadeOut(0);
    				$(".form2").next('.thanks_text').fadeIn(200);
    			}else{
				    $.each(res.error, function(key, value){
                        $('[name="'+value+'"]').addClass('error_input');
                        if (value=='sign_text[rubr]') {$('.chosen-container ul').addClass('error_input')}; 
                    });
    			}
    		}
    	});

    	return false;
    });    


    $.ajax({
        url: location.href,
        data:"ajax=instagram",
        success:function(_json){
			var json = JSON.parse(_json); 
            if(json.ack == 'Success'){
                $('.instagram').html(json.instagram);
            }
        }
    });
	
});
