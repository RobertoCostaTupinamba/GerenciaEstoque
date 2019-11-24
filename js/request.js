$(function () {    
    $("#CadProd").submit(function (e) { 
        e.preventDefault();
        var dados_form = $(this).serialize();
        console.log(dados_form);
        $.ajax({
            type: "POST",
            url: "./php/cadastroProdutos.php",
            data: dados_form,
            dataType: "JSON",
            success: function (response) {
                
            }
        });
    });
});