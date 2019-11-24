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
                if(response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Cadastro efetuado com sucesso</div>');
                }else{
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {                
                    $("#mensagemDiv").empty();
                }, 2000);
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
        
        $.ajax({
            type: "POST",
            url: "./php/cadastroFuncionarios.php",
            data: data,
            success: function(response) {
                alert(response);
            }
        })
    })
});
