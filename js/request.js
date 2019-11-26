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
                if(response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Cadastro efetuado com sucesso</div>');
                }else{
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {                
                    $("#mensagemDiv").empty();
                }, 2000);
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
                if(response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Cadastro efetuado com sucesso</div>');
                }else{
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {                
                    $("#mensagemDiv").empty();
                }, 2000);
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
                if(response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Cadastro efetuado com sucesso</div>');
                }else{
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {                
                    $("#mensagemDiv").empty();
                }, 2000);
            }
        })
    })
    $("#Venda").submit(function(event) {
        event.preventDefault();
        var var_name = $("#parcela").val();
        console.log(var_name);
        
    })
    let prazo = '<input type="text" id="parcela" class="fadeIn first" name="parcela" placeholder="Numero de parcelas">'
    $("#prazo").click(function (e) { 
        console.log("Asasasasas");
        $("#APrazo").html(prazo);
        
    });

    $("#vista").click(function (e) { 
        console.log("Asasasasas");
        $("#APrazo").empty();
    });

    $("#CadCli").submit(function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        $.ajax({
            type: "POST",
            url: "./php/cadastroCliente.php",
            data: data,
            success: function(response) {
                alert(response);
            }
        })
    });
});
