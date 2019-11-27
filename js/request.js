var produtos = Array();
var cont=0;
$(function () {
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
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Cadastro efetuado com sucesso</div>');
                } else {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            }
        });
    });

    $("#CadCNT").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        $.ajax({
            type: "POST",
            url: "./php/cadastroContas.php",
            data: data,
            success: function (response) {
                alert(response);
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Cadastro efetuado com sucesso</div>');
                } else {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            }
        })
    })

    $("#CadCFR").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        $.ajax({
            type: "POST",
            url: "./php/cadastroFornecedor.php",
            data: data,
            success: function (response) {
                alert(response);
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Cadastro efetuado com sucesso</div>');
                } else {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            }
        })
    });

    $("#CadFunc").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        $.ajax({
            type: "POST",
            url: "./php/cadastroFuncionarios.php",
            data: data,
            success: function (response) {
                alert(response);
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Cadastro efetuado com sucesso</div>');
                } else {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            }
        })
    })
    //Atualizar produtos.
    $("#AtualizarProd").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            type: "GET",
            url: "./php/consultaProdutos.php",
            data: data,
            success: function (response) {
                alert(response);
            }
        })
    });

    $("#Venda").submit(function (event) {
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

    $("#CadCli").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        $.ajax({
            type: "POST",
            url: "./php/cadastroCliente.php",
            data: data,
            success: function (response) {
                alert(response);

            }
        })
    });

    function Excluir() {
        var par = $(this).parent().parent(); //tr
        
        par.remove();
        
        
        // produtos.splice(i,1);
    };

    $("#adicionar").click(function (e) {
        e.preventDefault();
        console.log("SEi la o que");
        let produto = {
            codigo: $("#cdg").val(),
            quantidade: $("#QTDProd").val()
        }
        $.ajax({
            type: "GET",
            url: "./php/verificaInformacoesProdVenda.php",
            data: produto,
            success: function (response) {
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Produto não existe</div>');
                } else if (response == 2) {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Falta está quantidade no estoque</div>');
                } else {
                    console.log(response);
                    let produto = JSON.parse(response)
                    produtos.push(produto);
                    produto.forEach(element => {
                        $("#tbody").append('<tr id="'+(cont)+'"><th scope="row" >' + element.id + '</th><td>' + element.tipo + '</td><td>' + $("#QTDProd").val() + '</td><td class="valor">' + element.valor * ($("#QTDProd").val()) + '</td><td>' + '<img src="img/delete.png" class="btnExcluir"/>' + '</td></tr>');
                        $(".btnExcluir").bind("click", Excluir);
                        cont++;
                    });

                    var name = $('.valor').html();

                    console.log(produtos);

                }
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            }
        });

    });

    let AtualizarProd = '<input type="text" id="CodProd" class="fadeIn second" name="CodProd" placeholder="Identificação"></input>' +
        '<input type="text" id="TipProd" class="fadeIn second" name="TipProd" placeholder="Tipo do Produto"></input>' +
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
        '<select class="fadeIn third"  id="fornecedorSelect" name="select1">' +
        '<option value="null" disabled selected>Selecionar Fornecedor</option>' +
        '</select>' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';
    $("#AtualizarProd").submit(function (e) {
        e.preventDefault();
        //chamada ajax se deer certo mostra os dados
        $("#AtualizarProdu").html(AtualizarProd);
        $.ajax({
            type: "GET",
            url: "./php/selecionarTodosFornecedores.php",
            success: function (response) {
                response = JSON.parse(response)
                for (const key in response) {
                    console.log(response[key]);
                    $('#fornecedorSelect').append('<option value="' + response[key].id + '">' + response[key].id + ' - ' + response[key].nome + '</option>');
                }
            }
        });

        $("#tamanho").val("P"); // exemplo de como selecinar 
        $("#fornecedorSelect").val("12"); // exemplo de como selecinar 

    });

    let atualizarFunc = '<input type="text" id="cpfFunc" class="fadeIn first" name="cpfFunc" placeholder="Cpf" maxlength="11"></input>' +
        '<input type="text" id="nomeFunc" class="fadeIn first" name="nomeFunc" placeholder="Nome" maxlength="100">' +
        '<input type="text" id="TelFunc" class="fadeIn first" name="TelFunc" placeholder="Telefone" required >' +
        '<input type="text" id="ruaFunc" class="fadeIn first" name="ruaFunc" placeholder="Rua">' +
        '<input type="number" id="numFunc" class="fadeIn second" name="numFunc" placeholder="Numero">' +
        '<input type="text" id="bairroFunc" class="fadeIn second" name="bairroFunc" placeholder="Bairro">' +
        '<input type="text" id="cidadeFunc" class="fadeIn second" name="cidadeFunc" placeholder="Cidade">' +
        '<input type="text" id="cepFunc" class="fadeIn fourth" name="cepFunc" placeholder="CEP">' +
        '<input type="text" id="cargoFunc" class="fadeIn fourth" name="cargo" placeholder="Cargo">' +
        '<input type="text" id="SalFunc" class="fadeIn fourth" name="SalFunc" placeholder="Salario" onKeyPress="return(moeda(this,' + "'.'" + ',' + "','" + ',event))"></input>' +
        '<input type="text" id="nasciFunc" class="fadeIn fourth" name="nasciFunc" placeholder="Data do nascimento" maxlength="32">' +
        '<input type="text" id="DTinicioFunc" class="fadeIn fourth" name="DTinicioFunc" placeholder="Data do inicio do trabalho" maxlength="32">' +
        '<input type="text" id="CHFunc" class="fadeIn fourth" name="CHFunc" placeholder="Carga horaria semanal" maxlength="2">' +
        '<input type="text" id="ContaCFunc" class="fadeIn fourth" name="ContaCFunc" placeholder="Conta corrente" maxlength="32">' +
        '<input type="text" id="passwordFunc" class="fadeIn fourth" name="senhaFunc" placeholder="Senha" maxlength="32">' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';

    $("#AtualizarFuncionario").submit(function (e) {
        e.preventDefault();
        //ajax
        $("#AtualizarFunc").html(atualizarFunc);
        $("input#TelFunc").mask("(99) 99999-999?9")
        $("#cpfFunc").mask("999.999.999-99");
        $("#nasciFunc").mask("99/99/9999");
        $("#DTinicioFunc").mask("99/99/9999");
        $("input#ContaCFunc").mask("99999-9");
        $("input#cepFunc").mask("99999-999")
    });

    let atualizarCliente = '<input type="text" id="cpfcli" class="fadeIn first" name="cpfcli" placeholder="Cpf" maxlength="11"></input>' +
        '<input type="text" id="nomecli" class="fadeIn first" name="nomecli" placeholder="Nome" maxlength="100">' +
        '<input type="text" id="Telcli" class="fadeIn second" name="Telcli" placeholder="Telefone" required >' +
        '<input type="text" id="ruacli" class="fadeIn second" name="ruacli" placeholder="Rua">' +
        '<input type="number" id="numcli" class="fadeIn second" name="numcli" placeholder="Numero">' +
        '<input type="text" id="bairrocli" class="fadeIn second" name="bairrocli" placeholder="Bairro">' +
        '<input type="text" id="cidadecli" class="fadeIn third" name="cidadecli" placeholder="Cidade">' +
        '<input type="text" id="cepcli" class="fadeIn third" name="cepcli" placeholder="CEP">' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';

    $("#AtualizarCliente").submit(function (e) {
        e.preventDefault();
        //ajax
        $("#AtualizarCLI").html(atualizarCliente);
        $("input#Telcli").mask("(99) 99999-999?9")
        $("#cpfcli").mask("999.999.999-99");
        $("input#cepcli").mask("99999-999")
    });

    let atualizarFornecedor = '<input type="text" id="codcfr" class="fadeIn first" name="codcfr" placeholder="Codigo fornecedor" maxlength="11"></input>' +
        '<input type="text" id="nomecfr" class="fadeIn third" name="nomecfr" placeholder="Nome" maxlength="100">' +
        '<input type="text" id="Telcfr" class="fadeIn third" name="Telcfr" placeholder="Telefone" required >' +
        '<input type="text" id="ruacfr" class="fadeIn third" name="ruacfr" placeholder="Rua">' +
        '<input type="number" id="numcfr" class="fadeIn third" name="numcfr" placeholder="Numero">' +
        '<input type="text" id="bairrocfr" class="fadeIn third" name="bairrocfr" placeholder="Bairro">' +
        '<input type="text" id="cidadecfr" class="fadeIn third" name="cidadecfr" placeholder="Cidade">' +
        '<input type="text" id="cepcfr" class="fadeIn third" name="cepcfr" placeholder="CEP">' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';

    $("#AtualizarFornecedor").submit(function (e) {
        e.preventDefault();
        //ajax
        $("#AtualizarFornec").html(atualizarFornecedor);
        $("input#Telcfr").mask("(99) 99999-999?9")
        $("input#cepcfr").mask("99999-999")
    });


    let atualizarContas = '<input type="text" id="desCNT" class="fadeIn third" name="desCNT" placeholder="Descrição" maxlength="100">' +
        '<input type="text" id="VenCNT" class="fadeIn third" name="VenCNT" placeholder="Vencimento" required >' +
        '<input type="text" id="valorCNT" class="fadeIn third" name="valorCNT" placeholder="Valor" onKeyPress="return(moeda(this,' + "'.'" + ',' + "','" + ',event))">' +
        '<label for="pagCNT" class="text-secondary fadeIn third">Pago: </label>' +
        '<input type="checkbox" id="pagCNT" class="fadeIn third" value="true" name="pagCNT"><label class="text-secondary fadeIn third" for="pagCNT">Sim</label>' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';

    $("#AtualizarContas").submit(function (e) {
        e.preventDefault();
        $("#AtualizarConta").html(atualizarContas);
        $("input#Telcli").mask("(99) 99999-999?9")
        $("#cpfcli").mask("999.999.999-99");
        $("#VenCNT").mask("99/99/9999");
        $("#pagCNT").attr("checked", true); // exemplo
    });
});