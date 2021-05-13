$(function(){

    $("a").click(function(event){

        if(this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top   

            }, 800, function(){
                window.location.hash = gato;
                
            });
        }
    });

    var btnUno = $('#btnUno');
    var textoUno = $('#txtUno');

    btnUno.click(function(){
		textoUno.toggle('slow');
	});

	var btnDos = $('#btnDos');
    var textoDos = $('#txtDos');

    btnDos.click(function(){
		textoDos.toggle('slow');
	});

	var btnTres = $('#btnTres');
	var textoTres = $('#txtTres');

    btnTres.click(function(){
        textoTres.toggle('slow');
    });

});