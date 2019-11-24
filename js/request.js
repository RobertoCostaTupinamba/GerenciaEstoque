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

    $("#CadCNT").submit(function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        $.ajax({
            type: "POST",
            url: "./php/cadastroContas.php",
            data: data,
            success: function(response) {
                alert(response);
            }
        })
    })

    $("#CadCFR").submit(function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        $.ajax({
            type: "POST",
            url: "./php/cadastroFornecedor.php",
            data: data,
            success: function(response) {
                alert(response);
            }
        })
    });

    $("#CadFunc").submit(function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        
    })
});
