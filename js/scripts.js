statini = false;

$(document).ready(function(){
	$(window).scrollTop(0);
});

$(window).scroll(function (event) {
    /*scroll = $(window).scrollTop();
    if(scroll >= 100 && statini == false){
    	$('#header_page').slideUp('fast', function(){
    		$('#header_page').css('position','fixed');
    		$('#main_menu').addClass('main_menu_state2');
    		$('#main_menu > div > img').addClass('img_state2');
    		$('#main_menu ol li').addClass('li_state2');
    		$('#header_page').slideDown('fast');
    	});
    	statini = true;
    }else if(scroll < 100 && statini == true){
    	$('#header_page').slideUp('fast', function(){
    		$('#header_page').css('position','relative');
    		$('#main_menu').removeClass('main_menu_state2');
    		$('#main_menu > div > img').removeClass('img_state2');
    		$('#main_menu ol li').removeClass('li_state2');
    		$('#header_page').slideDown('fast');
    	});
    	statini = false;
    }*/
});

$('#main_menu > ol > li').click(function() {
	numind = $(this).index();
	if($('#info > nav:eq('+numind+')').is(':hidden')){
		$('#info > nav').slideUp(500);
		$('#info > nav:eq('+numind+')').slideDown(500);
	}
});

$('#enviarmail').click(function(){
	nombre = $('#nombre').val();
	email = $('#email').val();
	asunto = $('#asunto').val();
	mensaje = $('#mensaje').val();
	$.post("php/email.php", {nombrephp:JSON.stringify(nombre),emailphp:JSON.stringify(email),asuntophp:JSON.stringify(asunto),mensajephp:JSON.stringify(mensaje)}, function(data){
		alert(data);
		if(data == "Su mensaje fue recibido con exito. Nos pondremos en contacto con usted a la brevedad posible"){
			$('#contacto input[type="text"], #contacto textarea').val('');
		}
	});
});

$('#deleteall').click(function(){
	$('#contacto textarea').val('');
});