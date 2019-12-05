$(function () {

    //Função request
    function request(url, dados_form) {
        $.ajax({
            type: "POST",
            url: url,
            data: dados_form,
            success: function (response) {
                alert(response);
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-success" role="alert">Sucesso</div>');
                } else {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Algo inesperado aconteceu</div>');
                }
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            }
        });
    }

    function getCDG() {
        let cdg = {
            cdg: $("#cdg").val(),
        }
        return cdg;
    }

    //Cadastrar o produto
    $("#CadProd").submit(function (e) {
        e.preventDefault();
        var dados_form = $(this).serialize();
        console.log(dados_form);
        request("./php/cadastroProdutos.php", dados_form)

    });
    //Cadastrar a conta
    $("#CadCNT").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/cadastroContas.php", data);
    })
    //Cadastrar o fornecedor
    $("#CadCFR").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/cadastroFornecedor.php", data);
    });
    //Cadastrar o funcionario
    $("#CadFunc").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/cadastroFuncionarios.php", data);
    })

    //Cadastrar cliente
    $("#CadCli").submit(function (event) {
        event.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/cadastroCliente.php", data)
    });

    //Pegar valor do radio
    function getRadioValor(name) {
        var rads = document.getElementsByName(name);
        for (var i = 0; i < rads.length; i++) {
            if (rads[i].checked) {
                return rads[i].value;
            }
        }
        return null;
    }

    //Cria lista de produtos vedidos para o cliente
    function produtosVendidos() {
        var produtos = document.querySelectorAll(".Produ");
        let prodVendidos = Array();
        // Percorrer a lista de produtos
        for (var i = 0; i < produtos.length; i++) {

            // Recupera o produto no indice i da lista de  produtos
            var produto = produtos[i];

            // pegando id
            var id = produto.querySelector(".id").textContent;

            // pegando quantidade
            var qtd = produto.querySelector(".qtd").textContent;

            let prod = {
                cdg: id,
                QTDProd: qtd
            }

            prodVendidos.push(prod)
        }
        return prodVendidos;
    }

    //Formulario de venda
    $("#Venda").submit(function (event) {
        event.preventDefault();

        if (getRadioValor('FormaDePagamento') == null) {
            $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Selecione a forma de pagamento</div>');
            setTimeout(function exluiAviso() {
                $("#mensagemDiv").empty();
            }, 2000);
        } else {
            if ($("#parcela").val() == '') {
                $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Numero de parcelas não definido</div>');
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            } else if ($("#cpfcli").val().length < 14) {
                $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Informe um cpf valido</div>');
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            } else {
                //    let venda =  $(this).serialize();
                let venda;
                if (getRadioValor('FormaDePagamento') == "Vista") {
                    venda = {
                        cpfcli: $("#cpfcli").val(),
                        produtos: produtosVendidos(),
                        FormaDePagamento: getRadioValor('FormaDePagamento')
                    }
                    if (venda.produtos.length == 0) {
                        venda = "erro"
                    }


                } else {
                    venda = {
                        cpfcli: $("#cpfcli").val(),
                        produtos: produtosVendidos(),
                        FormaDePagamento: getRadioValor('FormaDePagamento'),
                        pacelado: $("#parcela").val()
                    }
                    if (venda.produtos.length == 0) {
                        venda = "erro"
                    }
                }
                if (venda == "erro") {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Adicione produtos</div>');
                    setTimeout(function exluiAviso() {
                        $("#mensagemDiv").empty();
                    }, 2000);
                } else {
                    $.ajax({
                        type: "method",
                        url: "url",
                        data: "data",
                        dataType: "dataType",
                        success: function (response) {

                        }
                    });
                }
                console.log(venda);
            }
        }
    })
    //adicionando o campo de numero de parcelas caso o cliente escolha pagar a prazo
    let prazo = '<input type="text" id="parcela" class="fadeIn first" name="parcela" placeholder="Numero de parcelas">'
    $("#prazo").click(function (e) {
        $("#APrazo").html(prazo);

    });

    //removendo o campo de numero de parcelas caso o cliente escolha pagar a vista
    $("#vista").click(function (e) {
        $("#APrazo").empty();
    });

    //Excluir uma linha da tabela de produtos na tela de venda
    function Excluir() {
        var par = $(this).parent().parent(); //tr

        par.remove();

        $("#total").text(CalcularTotal());

        // produtos.splice(i,1);
    };

    //calcular o total da venda 
    function CalcularTotal() {
        // Selecionar todas as linhas
        var produtos = document.querySelectorAll(".Produ");
        let total = 0;
        // Percorrer a lista de produtos
        for (var i = 0; i < produtos.length; i++) {

            // Recupera o produto no indice i da lista de  produtos
            var produto = produtos[i];

            // pegando id
            var id = produto.querySelector(".id").textContent;

            // pegando quantidade
            var qtd = produto.querySelector(".qtd").textContent;

            total = total + parseFloat(produto.querySelector(".valor").textContent);
        }
        return total;
    }

    //Adicionar um produto a tabela de produtos na tela de vendas
    $("#adicionar").click(function (e) {
        e.preventDefault();
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
                    produto.forEach(element => {
                        $("#tbody").append('<tr class="Produ"><th scope="row" class="id" >' + element.id + '</th><td>' + element.tipo + '</td><td class="qtd">' + $("#QTDProd").val() + '</td><td class="valor">' + element.valor * ($("#QTDProd").val()) + '</td><td>' + '<img src="img/delete.png" class="btnExcluir"/>' + '</td></tr>');
                        $(".btnExcluir").bind("click", Excluir);
                    });
                    $("#total").text(CalcularTotal());
                }
                setTimeout(function exluiAviso() {
                    $("#mensagemDiv").empty();
                }, 2000);
            }
        });

    });
    //Atualizar produto
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

    $("#BProduto").click(function (e) {
        e.preventDefault();
        let cdgproduto = getCDG();
        console.log(cdgproduto);

        $.ajax({
            type: "GET",
            url: "./php/atualizarProdutos.php",
            data: cdgproduto,
            success: function (response) {

                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Produto não existe</div>');
                    $("#AtualizarProdu").empty();
                    setTimeout(function exluiAviso() {
                        $("#mensagemDiv").empty();
                    }, 2000);
                } else {
                    response = JSON.parse(response)
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
                            // $("#fornecedorSelect").val("133");
                            // $("#fornecedorSelect").val(toString(response["id_fornecedor"]) );
                        }
                    });
                    console.log(response);
                    
                    for (prod of response) {
                        console.log(prod.id_fornecedor);

                        $("#CodProd").val(prod.id);
                        $("#TipProd").val(prod.tipo);
                        $("#MarcaProd").val(prod.marca);
                        $("#ValorProd").val(prod.valor);
                        $("#QTDProd").val(prod.quantidade);
                        $("#tamanho").val(prod.tamanho);
                        
                    }
                }

            }
        });
        //$("#fornecedorSelect").val("12"); // exemplo de como selecinar 
    });

    $("#AtualizarProd").submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/salvarAttProdutos.php", data)
    });

    //Atualizar Funcionario
    let atualizarFunc = '<input type="text" id="cpfFunc" class="fadeIn first" name="cpfFunc" placeholder="Cpf" maxlength="11"></input>' +
        '<input type="text" id="nomeFunc" class="fadeIn first" name="nomeFunc" placeholder="Nome" maxlength="100">' +
        '<input type="text" id="TelFunc" class="fadeIn first" name="TelFunc" placeholder="Telefone" required >' +
        '<input type="text" id="ruaFunc" class="fadeIn first" name="ruaFunc" placeholder="Rua">' +
        '<input type="number" id="numFunc" class="fadeIn second" name="numFunc" placeholder="Numero da casa">' +
        '<input type="text" id="bairroFunc" class="fadeIn second" name="bairroFunc" placeholder="Bairro">' +
        '<input type="text" id="cidadeFunc" class="fadeIn second" name="cidadeFunc" placeholder="Cidade">' +
        '<input type="text" id="cepFunc" class="fadeIn fourth" name="cepFunc" placeholder="CEP">' +
        '<input type="text" id="cargoFunc" class="fadeIn fourth" name="cargo" placeholder="Cargo">' +
        '<input type="text" id="SalFunc" class="fadeIn fourth" name="SalFunc" placeholder="Salario" onKeyPress="return(moeda(this,' + "'.'" + ',' + "','" + ',event))"></input>' +
        '<input type="text" id="nasciFunc" class="fadeIn fourth" name="nasciFunc" placeholder="Data do nascimento" maxlength="32">' +
        '<input type="text" id="DTinicioFunc" class="fadeIn fourth" name="DTinicioFunc" placeholder="Data do inicio do trabalho" maxlength="32">' +
        '<input type="text" id="CHFunc" class="fadeIn fourth" name="CHFunc" placeholder="Carga horaria semanal" maxlength="2">' +
        '<input type="text" id="ContaCFunc" class="fadeIn fourth" name="ContaCFunc" placeholder="Conta corrente" maxlength="32">' +
        // '<input type="text" id="passwordFunc" class="fadeIn fourth" name="senhaFunc" placeholder="Senha" maxlength="32">' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';

    $("#BFuncionario").click(function (e) {
        e.preventDefault();
        let cpfFunc = getCDG()
        $.ajax({
            type: "GET",
            url: "./php/atualizarFuncionarios.php",
            data: cpfFunc,
            success: function (response) {
                console.log(response);

                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Funcionario não existe</div>');
                    setTimeout(function exluiAviso() {
                        $("#mensagemDiv").empty();
                    }, 2000);
                } else {
                    $("#AtualizarFunc").html(atualizarFunc);

                    response = JSON.parse(response)
                    for (Func of response) {
                        $("#cpfFunc").val(Func.cpf);
                        // $("#passwordFunc").val(Func.senha);
                        $("#nomeFunc").val(Func.nome);
                        $("#TelFunc").val(Func.telefone);
                        $("#ruaFunc").val(Func.rua);
                        $("#numFunc").val(Func.numero);
                        $("#bairroFunc").val(Func.bairro);
                        $("#cidadeFunc").val(Func.cidade);
                        $("#cepFunc").val(Func.cep);
                        $("#cargoFunc").val(Func.tipo);
                        $("#SalFunc").val(Func.salario);
                        $("#nasciFunc").val(Func.data_nascimento);
                        $("#CHFunc").val(Func.carga_horaria);
                        $("#ContaCFunc").val(Func.conta_corrente);
                        $("#DTinicioFunc").val(Func.dt_inicio_trab);
                    }
                    $("#cpfFunc").mask("999.999.999-99");
                    $("#nasciFunc").mask("99/99/9999");
                    $("#DTinicioFunc").mask("99/99/9999");
                    $("input#ContaCFunc").mask("99999-9");
                    $("input#cepFunc").mask("99999-999")
                    $("#TelFunc").mask("(99) 99999-999?9")
                }

            }
        });
        //ajax
    });

    $("#AtualizarFuncionario").submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/salvarAttFuncionarios.php", data)
    });

    //Atualizar Cliente
    let atualizarCliente = '<input type="text" id="cpfcli" class="fadeIn first" name="cpfcli" placeholder="Cpf" maxlength="11"></input>' +
        '<input type="text" id="nomecli" class="fadeIn first" name="nomecli" placeholder="Nome" maxlength="100">' +
        '<input type="text" id="Telcli" class="fadeIn second" name="Telcli" placeholder="Telefone" required >' +
        '<input type="text" id="ruacli" class="fadeIn second" name="ruacli" placeholder="Rua">' +
        '<input type="number" id="numcli" class="fadeIn second" name="numcli" placeholder="Numero da casa">' +
        '<input type="text" id="bairrocli" class="fadeIn second" name="bairrocli" placeholder="Bairro">' +
        '<input type="text" id="cidadecli" class="fadeIn third" name="cidadecli" placeholder="Cidade">' +
        '<input type="text" id="cepcli" class="fadeIn third" name="cepcli" placeholder="CEP">' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';

    $("#BCliente").click(function (e) {
        e.preventDefault();
        let cpfcli = getCDG()
        $.ajax({
            type: "GET",
            url: "./php/atualizarCliente.php",
            data: cpfcli,
            success: function (response) {
                console.log(response);
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Cliente não existe</div>');
                    setTimeout(function exluiAviso() {
                        $("#mensagemDiv").empty();
                    }, 2000);
                } else {
                    $("#AtualizarCLI").html(atualizarCliente);
                    response = JSON.parse(response)
                    for (cli of response) {
                        $("#cpfcli").val(cli.cpf);
                        $("#nomecli").val(cli.nome);
                        $("#Telcli").val(cli.telefone);
                        $("#ruacli").val(cli.rua);
                        $("#numcli").val(cli.numero);
                        $("#bairrocli").val(cli.bairro);
                        $("#cidadecli").val(cli.cidade);
                        $("#cepcli").val(cli.cep);
                    }
                    $("input#Telcli").mask("(99) 99999-999?9")
                    $("#cpfcli").mask("999.999.999-99");
                    $("input#cepcli").mask("99999-999")
                }


            }
        });
        //ajax
    });

    $("#AtualizarCliente").submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/salvarAttClientes.php", data)
    });

    //Atualizar Fornecedor
    let atualizarFornecedor = '<input type="text" id="codcfr" class="fadeIn first" name="codcfr" placeholder="Codigo fornecedor" maxlength="11"></input>' +
        '<input type="text" id="nomecfr" class="fadeIn third" name="nomecfr" placeholder="Nome" maxlength="100">' +
        '<input type="text" id="Telcfr" class="fadeIn third" name="Telcfr" placeholder="Telefone" required >' +
        '<input type="text" id="ruacfr" class="fadeIn third" name="ruacfr" placeholder="Rua">' +
        '<input type="number" id="numcfr" class="fadeIn third" name="numcfr" placeholder="Numero">' +
        '<input type="text" id="bairrocfr" class="fadeIn third" name="bairrocfr" placeholder="Bairro">' +
        '<input type="text" id="cidadecfr" class="fadeIn third" name="cidadecfr" placeholder="Cidade">' +
        '<input type="text" id="cepcfr" class="fadeIn third" name="cepcfr" placeholder="CEP">' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';

    $("#BFornecedor").click(function (e) {
        e.preventDefault();
        let cdgFornecedor = getCDG()
        $.ajax({
            type: "GET",
            url: "./php/atualizaFornecedor.php",
            data: cdgFornecedor,
            success: function (response) {
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Fornecedor não existe</div>');
                    setTimeout(function exluiAviso() {
                        $("#mensagemDiv").empty();
                    }, 2000);
                } else {
                    response = JSON.parse(response)
                    for (fornecedor of response) {
                        $("#codcfr").val(fornecedor.id);
                        $("#nomecfr").val(fornecedor.nome);
                        $("#Telcfr").val(fornecedor.telefone);
                        $("#ruacfr").val(fornecedor.rua);
                        $("#numcfr").val(fornecedor.numero);
                        $("#bairrocfr").val(fornecedor.bairro);
                        $("#cidadecfr").val(fornecedor.cidade);
                        $("#cepcfr").val(fornecedor.cep);
                    }
                }
            }
        });
        //ajax
        $("#AtualizarFornec").html(atualizarFornecedor);
        $("input#Telcfr").mask("(99) 99999-999?9")
        $("input#cepcfr").mask("99999-999")
    });

    $("#AtualizarFornecedor").submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/salvarAttFornecedores.php", data)
    });

    //Atualizar Contas
    let atualizarContas = '<input type="text" id="desCNT" class="fadeIn third" name="desCNT" placeholder="Descrição" maxlength="100">' +
        '<input type="text" id="VenCNT" class="fadeIn third" name="VenCNT" placeholder="Vencimento" required >' +
        '<input type="text" id="valorCNT" class="fadeIn third" name="valorCNT" placeholder="Valor" onKeyPress="return(moeda(this,' + "'.'" + ',' + "','" + ',event))">' +
        '<label for="pagCNT" class="text-secondary fadeIn third">Pago: </label>' +
        '<input type="checkbox" id="pagCNT" class="fadeIn third" value="true" name="pagCNT"><label class="text-secondary fadeIn third" for="pagCNT">Sim</label>' +
        '<input type="submit" class="fadeIn fourth" value="Atualizar">';

    $("#BConta").click(function (e) {
        e.preventDefault();
        let cdgContas = getCDG()
        $.ajax({
            type: "GET",
            url: "./php/atualizaContas.php",
            data: cdgContas,
            success: function (response) {
                if (response == 1) {
                    $("#mensagemDiv").html('<div class="alert alert-danger" role="alert">Conta não existe</div>');
                    setTimeout(function exluiAviso() {
                        $("#mensagemDiv").empty();
                    }, 2000);
                } else {
                    $("#AtualizarConta").html(atualizarContas);
                    response = JSON.parse(response)
                    for (conta of response) {
                        $("#desCNT").val(conta.descricao);
                        $("#VenCNT").val(conta.vencimento);
                        $("#valorCNT").val(conta.valor);
                        if (conta.pago == 't') {
                            $("#pagCNT").attr("checked", true)
                        }
                    }
                    $("input#Telcli").mask("(99) 99999-999?9")
                    $("#cpfcli").mask("999.999.999-99");
                    $("#VenCNT").mask("99/99/9999");
                }
            }
        });
    });
    $("#AtualizarContas").submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        request("./php/salvarAttContas.php", data)
    });

    //Pagamento de Parcelas
    $("#PagamentoDeParcela").submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        //request("./php/salvarAttContas.php", data)
    });

    //Deletar produto
    $("#DeletarProduto").submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        //request("./php/salvarAttContas.php", data)
    });

    //Deletar contas
    $("#DeletarConta").submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);
        //request("./php/salvarAttContas.php", data)
    });

});