$(function () {    
    alert("Ta pelomenos entrando");
    $("#CadProd").submit(function (e) { 
        e.preventDefault();
        var dados_form = $(this).serialize();
        console.log(dados_form);
        $.ajax({
            type: "POST",
            url: "./php/cadastroProdutos.php",
            data: dados_form,
            success: function (response) {
                alert(response);
            }
        });
    });
});