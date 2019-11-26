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
        $("#APrazo").html(prazo);
        
    });

    $("#vista").click(function (e) { 
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

    let AtualizarProd = '<input type="text" id="TipProd" class="fadeIn second" name="TipProd" placeholder="Tipo do Produto"></input>' +
    '<input type="text" id="MarcaProd" class="fadeIn second" name="MarcaProd" placeholder="Marca"></input>' +
    '<input type="text" id="ValorProd" class="fadeIn second" name="ValorProd" placeholder="Valor" onKeyPress="return(moeda(this,' + "'.'" + ',' + "','" + ',event))"></input>' +
    '<input type="text" id="QTDProd" class="fadeIn second" name="QTDProd" placeholder="Quantidade"></input>' +
    '<select class="fadeIn third" id="tamanho" name="select">' +
    '<option value="null" disabled selected>Selecione um tamanho</option>' +
    '<option value="PPP">PPP</option> ' +
    '<option value="PP">PP</option>' +
    '<option value="P">P</option>' +
    '<option value="M/P">M/P</option>' +
    '<option value="M">M</option>' +
    '<option value="M/G">M/G</option>' +
    '<option value="G">G</option>' +
    '<option value="GG">GG</option>' +
    '<option value="GGG">GGG</option>' +
    '</select>' +
    '<select class="fadeIn third" id="fornecedor" name="select1">' +
    '<option value="null" disabled selected>Selecionar Fornecedor</option>' +
    '<option value="1">1</option> ' +
    '</select>' +
    '<input type="submit" class="fadeIn fourth" value="Cadastar">' ;
    $("#AtualizarProd").submit(function (e) { 
        e.preventDefault();
        //chamada ajax se deer certo mostra os dados
        $("#AtualizarProdu").html(AtualizarProd);

        $("#tamanho").val("P"); // exemplo de como selecinar 
        $("#fornecedor").val("1");// exemplo de como selecinar 
        
    });
});
