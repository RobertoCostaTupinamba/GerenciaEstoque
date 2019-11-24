$(function () {    
    $("#CadProd").submit(function (e) { 
        e.preventDefault();
        var dados_form = $(this).serialize();
        console.log(dados_form);
        
    });
});