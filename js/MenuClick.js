//Formulario de cadastrar Produto
let cadp = '<div id="formContent">' + '<form id="CadProd" method="POST">' +
    '<input type="text" id="CodProd" class="fadeIn second" name="CodProd" placeholder="Identificação"></input>' +
    '<input type="text" id="TipProd" class="fadeIn second" name="TipProd" placeholder="Tipo do Produto"></input>' +
    '<input type="text" id="MarcaProd" class="fadeIn second" name="MarcaProd" placeholder="Marca"></input>' +
    '<input type="text" id="ValorProd" class="fadeIn second" name="ValorProd" placeholder="Valor" onKeyPress="return(moeda(this,' + "'.'" + ',' + "','" + ',event))"></input>' +
    '<input type="text" id="QTDProd" class="fadeIn second" name="QTDProd" placeholder="Quantidade"></input>' +
    '<select class="fadeIn third" name="select">' +
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
    '<select class="fadeIn third" id="fornecedorSelect" name="select1">' +
    '<option value="null" disabled selected>Selecionar Fornecedor</option>' +
    '</select>' +
    '<input type="submit" class="fadeIn fourth" value="Cadastar">' +
    '</form>' +
    '</div>';

// formulario de cadastra Funcionario
let cadf = '<div id="formContent">' + '<form id="CadFunc">' +
    '<input type="text" id="cpfFunc" class="fadeIn first" name="cpfFunc" placeholder="Cpf" maxlength="11"></input>' +
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
    //'<input type="text" id="passwordFunc" class="fadeIn fourth" name="senhaFunc" placeholder="Senha" maxlength="32">' +
    '<input type="submit" id="button" class="fadeIn fourth" value="Cadastar">' +
    '</form>' +
    '</div>';

//Tela de inicio
let home = '<h1 class="cover-heading titulo">Seja Bem Vindo!!</h1>' + '<p id="NomeUser" class="lead"></p>'

//Fomulario de cadastrar cliente
let CC = '<div id="formContent">' + '<form id="CadCli">' +
    '<input type="text" id="cpfcli" class="fadeIn first" name="cpfcli" placeholder="Cpf" maxlength="11"></input>' +
    '<input type="text" id="nomecli" class="fadeIn first" name="nomecli" placeholder="Nome" maxlength="100">' +
    '<input type="text" id="Telcli" class="fadeIn second" name="Telcli" placeholder="Telefone" required >' +
    '<input type="text" id="ruacli" class="fadeIn second" name="ruacli" placeholder="Rua">' +
    '<input type="number" id="numcli" class="fadeIn second" name="numcli" placeholder="Numero">' +
    '<input type="text" id="bairrocli" class="fadeIn second" name="bairrocli" placeholder="Bairro">' +
    '<input type="text" id="cidadecli" class="fadeIn third" name="cidadecli" placeholder="Cidade">' +
    '<input type="text" id="cepcli" class="fadeIn third" name="cepcli" placeholder="CEP">' +
    '<input type="submit" id="button" class="fadeIn third" value="Cadastar">' +
    '</form>' +
    '</div>';
//Formulario de cadastrar fornecedor
let CFR = '<div id="formContent">' + '<form id="CadCFR">' +
    '<input type="text" id="codcfr" class="fadeIn first" name="codcfr" placeholder="Codigo fornecedor" maxlength="11"></input>' +
    '<input type="text" id="nomecfr" class="fadeIn third" name="nomecfr" placeholder="Nome" maxlength="100">' +
    '<input type="text" id="Telcfr" class="fadeIn third" name="Telcfr" placeholder="Telefone" required >' +
    '<input type="text" id="ruacfr" class="fadeIn third" name="ruacfr" placeholder="Rua">' +
    '<input type="number" id="numcfr" class="fadeIn third" name="numcfr" placeholder="Numero da Casa">' +
    '<input type="text" id="bairrocfr" class="fadeIn third" name="bairrocfr" placeholder="Bairro">' +
    '<input type="text" id="cidadecfr" class="fadeIn third" name="cidadecfr" placeholder="Cidade">' +
    '<input type="text" id="cepcfr" class="fadeIn third" name="cepcfr" placeholder="CEP">' +
    '<input type="submit" id="button" class="fadeIn fourth" value="Cadastar">' +
    '</form>' +
    '</div>';

//Formulario de cadastrar contas
let CNT = '<div id="formContent">' + '<form id="CadCNT">' +
    '<input type="text" id="desCNT" class="fadeIn third" name="desCNT" placeholder="Descrição" maxlength="100">' +
    '<input type="text" id="VenCNT" class="fadeIn third" name="VenCNT" placeholder="Vencimento" required >' +
    '<input type="text" id="valorCNT" class="fadeIn third" name="valorCNT" placeholder="Valor" onKeyPress="return(moeda(this,' + "'.'" + ',' + "','" + ',event))">' +
    '<label for="pagCNT" class="text-secondary fadeIn third">Pago: </label>' +
    '<input type="checkbox" id="pagCNT" class="fadeIn third" value="true" name="pagCNT"><label class="text-secondary fadeIn third" for="pagCNT">Sim</label>' +
    '<input type="submit" id="button" class="fadeIn fourth" value="Cadastar">' +
    '</form>' +
    '</div>';


//Atualizar produto
let AP = '<div id="formContent">' + '<form id="AtualizarProd">' +
    '<input type="text" id="cdg" class="fadeIn third" name="cdg" placeholder="Codigo do produto">' +
    '<input type="submit" id="BProduto" class="fadeIn fourth" value="Buscar">' +
    '<div id="AtualizarProdu">' +
    '</div>' +
    '</form>' +
    '</div>';

//Atualizar funcionario
let AF = '<div id="formContent">' + '<form id="AtualizarFuncionario">' +
    '<input type="text" id="cdg" class="fadeIn third" name="cdg" placeholder="CPF do Funcionario">' +
    '<input type="submit" id="BFuncionario" class="fadeIn fourth" value="Buscar">' +
    '<div id="AtualizarFunc">' +
    '</div>' +
    '</form>' +
    '</div>';
//Atualizar Cliente
let AC = '<div id="formContent">' + '<form id="AtualizarCliente">' +
    '<input type="text" id="cdg" class="fadeIn third" name="cdg" placeholder="CPF do Cliente">' +
    '<input type="submit" id="BCliente" class="fadeIn fourth" value="Buscar">' +
    '<div id="AtualizarCLI">' +
    '</div>' +
    '</form>' +
    '</div>';

//Atualizar fornecedor
let ACFR = '<div id="formContent">' + '<form id="AtualizarFornecedor">' +
    '<input type="text" id="cdg" class="fadeIn third" name="cdg" placeholder="Codigo do Fornecedor">' +
    '<input type="submit" id="BFornecedor" class="fadeIn fourth" value="Buscar">' +
    '<div id="AtualizarFornec">' +
    '</div>' +
    '</form>' +
    '</div>';
//Atualizar Conta
let ACNT = '<div id="formContent">' + '<form id="AtualizarContas">' +
    '<input type="text" id="cdg" class="fadeIn third" name="cdg" placeholder="Codigo da Conta">' +
    '<input type="submit" id="BConta" class="fadeIn fourth" value="Buscar">' +
    '<div id="AtualizarConta">' +
    '</div>' +
    '</form>' +
    '</div>';

//Tela de vendas
let TDV = '<div id="formContent">' + '<form id="Venda">' +
    '<div>' +
    '<input type="text" id="cpfcli" class="fadeIn second" name="cpfcli" placeholder="Cpf do Cliente" maxlength="11"></input>' +
    '</div>' +
    '<input type="text" id="cdg" class="fadeIn first" name="cdg" placeholder="Codigo do Produto">' +
    '<input type="text" id="QTDProd" class="fadeIn second" name="QTDProd" placeholder="Quantidade"></input>' +
    '<button class="btn" id="adicionar">Adicionar</button>' +
    '<table class="table table-bordered table-dark fadeIn second">' +
    '<thead"><tr><th scope="col">Codigo Produto</th><th scope="col">Produto</th><th scope="col">Quantidade</th><th scope="col">Preço</th><th scope="col">Opções</th></tr></thead"><tbody id="tbody"></tbody></table>' +
    '<div>' +
    '<label class="text-secondary fadeIn second">Total: </label> <label class="text-secondary fadeIn second" id="total">0 </label> ' +
    '</div>' +
    '<div>' +
    '<label for="pagCNT" class="text-secondary fadeIn third">Forma de Pagamento: </label> <br>' +
    '<input type="radio" id="vista" class="fadeIn third" value="Vista" name="FormaDePagamento"><label class="text-secondary fadeIn third" for="pagCNT">A vista</label> <br>' +
    '<input type="radio" id="prazo" class="fadeIn third" value="Prazo" name="FormaDePagamento"><label class="text-secondary fadeIn third" for="pagCNT">A prazo</label>' +
    '</div>' +
    '<div id="APrazo">' +
    '</div>' +
    '<input type="submit" id="button" class="fadeIn fourth" value="Registrar Venda">' +
    '</form>' +
    '</div>';

//Tela pagamento de Parcelas
let PagDP = '<div id="formContent">' + '<form id="PagamentoDeParcela">' +
    '<input type="text" id="cdg" class="fadeIn second" name="cdg" placeholder="Codigo venda"></input>' +
    '<input type="text" id="parcela" class="fadeIn first" name="parcela" placeholder="Quantas parcela o mesmo está pagando?">' +
    '<input type="submit" id="button" class="fadeIn fourth" value="Registrar Pagamento">' +
    '</form>' +
    '</div>';

//Deletar Produto
let DP = '<div id="formContent">' + '<form id="DeletarProduto">' +
    '<input type="text" id="cdg" class="fadeIn third" name="cdg" placeholder="Codigo do produto">' +
    '<button type="submit" id="DProduto" class="fadeIn fourth btn btn-danger">Deletar</button>' +
    '</form>' +
    '</div>';

//Deletar Contas
let DC = '<div id="formContent">' + '<form id="DeletarConta">' +
    '<input type="text" id="cdg" class="fadeIn third" name="cdg" placeholder="Codigo da Conta">' +
    '<button type="submit" id="DProduto" class="fadeIn fourth btn btn-danger">Deletar</button>' +
    '</form>' +
    '</div>';
let LP = '<div id="formContent">' + '<form id="ListarProduto">' +
    '<div class="inputBusca"><input type="text" id="cdg" class="fadeIn third" placeholder="Buscar por codigo ou nome"></div> ' +
    '</form>' +
    '</div>' +
    '<table class="table">' +
    '<thead><tr><th scope="col">Codigo Produto</th><th scope="col">Produto</th><th scope="col">Marca</th><th scope="col">Valor</th><th scope="col">Tamanho</th><th scope="col">Quantidade</th><th scope="col">Fornecedor</th></tr></thead><tbody id="tbody"></tbody></table>';

let LF = '<div id="formContent">' + '<form id="ListarFuncionario">' +
    '<div class="inputBusca"><input type="text" id="cdg" class="fadeIn third" placeholder="Buscar por codigo ou nome"></div> ' +
    '</form>' +
    '</div>' +
    '<table class="table">' +
    '<thead><tr><th scope="col">CPF</th><th scope="col">Nome</th><th scope="col">Telefone</th><th scope="col">Cargo</th><th scope="col">Salário</th><th scope="col">Data do Nascimento</th><th scope="col">Data inicio trabalho</th><th scope="col">Carga Horaria</th><th scope="col">Conta corrente</th></tr></thead><tbody id="tbody"></tbody></table>';

let LGF = '<div id="formContent">' + '<form id="ListarLogradouroFuncionario">' +
    '<div class="inputBusca"><input type="text" id="cdg" class="fadeIn third" placeholder="Buscar por codigo ou nome"></div> ' +
    '</form>' +
    '</div>' +
    '<table class="table">' +
    '<thead><tr><th scope="col">CPF</th><th scope="col">Nome</th><th scope="col">Rua</th><th scope="col">Nº da Casa</th><th scope="col">Bairro</th><th scope="col">Cidade</th><th scope="col">CEP</th></tr></thead><tbody id="tbody"></tbody></table>';

let LC = '<div id="formContent">' + '<form id="ListarCliente">' +
    '<div class="inputBusca"><input type="text" id="cdg" class="fadeIn first" placeholder="Buscar por codigo ou nome"></div> ' +
    '</form>' +
    '</div>' +
    '<table class="table">' +
    '<thead><tr><th scope="col">CPF</th><th scope="col">Nome</th><th scope="col">Rua</th><th scope="col">Nº da Casa</th><th scope="col">Bairro</th><th scope="col">Cidade</th><th scope="col">CEP</th></tr></thead><tbody id="tbody"></tbody></table>';


let LFCR = '<div id="formContent">' + '<form id="ListarFornecedor">' +
    '<div class="inputBusca"><input type="text" id="cdg" class="fadeIn first" placeholder="Buscar por codigo ou nome"></div> ' +
    '</form>' +
    '</div>' +
    '<table class="table">' +
    '<thead><tr><th scope="col">ID</th><th scope="col">Nome</th><th scope="col">Telefone</th><th scope="col">Rua</th><th scope="col">Nº da Casa</th><th scope="col">Bairro</th><th scope="col">Cidade</th><th scope="col">CEP</th></tr></thead><tbody id="tbody"></tbody></table>';

let LCNT = '<div id="formContent">' + '<form id="ListarContas">' +
    '<div class="inputBusca"><input type="text" id="cdg" class="fadeIn first" placeholder="Buscar por codigo ou nome"></div> ' +
    '</form>' +
    '</div>' +
    '<table class="table">' +
    '<thead><tr><th scope="col">ID</th><th scope="col">Descrição</th><th scope="col">Vencimento</th><th scope="col">Valor</th><th scope="col">Pago</th></thead><tbody id="tbody"></tbody></table>';

    let LDV = '<div id="formContent">' + '<form id="ListarDividasClientes">' +
    '<div class="inputBusca"><input type="text" id="cdg" class="fadeIn first" placeholder="Buscar por codigo ou nome"></div> ' +
    '</form>' +
    '</div>' +
    '<table class="table">' +
    '<thead><tr><th scope="col">ID Venda</th><th scope="col">Parcelas</th><th scope="col">Parcelas Pagas</th><th scope="col">Data Venda</th><th scope="col">Data ultimo Pagamento</th><th scope="col">Pago</th><th scope="col">A vista?</th><th scope="col">CPF Cliente</th></thead><tbody id="tbody"></tbody></table>';

// first second third fourth



$(document).ready(function () {


    //criando home

    $("#home").click(function (e) {
        $(".active").removeClass("active");
        $("#home").addClass("active");
        $("#h").empty();
        $("#h").html(home);
        let nome = localStorage.getItem("NomeUser")
        $("#NomeUser").text(nome);
        $(".masthead-brand").text("Home");


    });

    //Lista de cadastro
    $("#Cadastrar").click(function (e) {
        $(".active").removeClass("active");
        $("#Cadastrar").addClass("active");
        // $("#h").empty();
        // $("#h").html(cadp);
        // $(".masthead-brand").text("Cadastrar");
        // $("#script").html('<script src="./js/request.js"></script>');
    });
    //Cadastrar produto
    $("#CP").click(function (e) {
        $(".active").removeClass("active");
        $("#CP").addClass("active");
        $("#h").empty();
        $("#h").html(cadp);
        $(".masthead-brand").text("Cadastrar Produtos");
        $("#script").html('<script src="./js/request.js"></script>');
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
    });
    //Cadastrar Funcionario
    $("#CF").click(function (e) {
        $(".active").removeClass("active");
        $("#CF").addClass("active");
        $("#h").empty();
        $("#h").html(cadf);
        $(".masthead-brand").text("Cadastrar Funcionarios");
        $("input#TelFunc").mask("(99) 99999-999?9")
        $("#cpfFunc").mask("999.999.999-99");
        $("#nasciFunc").mask("99/99/9999");
        $("#DTinicioFunc").mask("99/99/9999");
        $("input#ContaCFunc").mask("99999-9");
        $("input#cepFunc").mask("99999-999")
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Cadastrar cliente
    $("#CC").click(function (e) {
        $(".active").removeClass("active");
        $("#CC").addClass("active");
        $("#h").empty();
        $("#h").html(CC);
        $(".masthead-brand").text("Cadastrar Cliente");
        $("input#Telcli").mask("(99) 99999-999?9")
        $("#cpfcli").mask("999.999.999-99");
        $("input#cepcli").mask("99999-999")
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Cadastrar contas
    $("#CNT").click(function (e) {
        $(".active").removeClass("active");
        $("#CNT").addClass("active");
        $("#h").empty();
        $("#h").html(CNT);
        $(".masthead-brand").text("Cadastrar Contas");
        $("input#Telcli").mask("(99) 99999-999?9")
        $("#cpfcli").mask("999.999.999-99");
        $("#VenCNT").mask("99/99/9999");
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Cadastrar fornecedor
    $("#CFR").click(function (e) {
        $(".active").removeClass("active");
        $("#CFR").addClass("active");
        $("#h").empty();
        $("#h").html(CFR);
        $(".masthead-brand").text("Cadastrar Fornecedor");
        $("input#Telcfr").mask("(99) 99999-999?9")
        $("input#cepcfr").mask("99999-999")
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Atualizar Produto
    $("#AP").click(function (e) {
        $(".active").removeClass("active");
        $("#AP").addClass("active");
        $(".masthead-brand").text("Atualizar Produto");
        $("#h").empty();
        $("#h").html(AP);
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Atualizar Funcionario
    $("#AF").click(function (e) {
        $(".active").removeClass("active");
        $("#AF").addClass("active");
        $(".masthead-brand").text("Atualizar Funcionario");
        $("#h").empty();
        $("#h").html(AF);
        $("#cdg").mask("999.999.999-99");
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Atualizar cliente
    $("#AC").click(function (e) {
        $(".active").removeClass("active");
        $("#AC").addClass("active");
        $(".masthead-brand").text("Atualizar Cliente");
        $("#h").empty();
        $("#h").html(AC);
        $("#cdg").mask("999.999.999-99");
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Atualizar Fornecedor
    $("#ACFR").click(function (e) {
        $(".active").removeClass("active");
        $("#ACFR").addClass("active");
        $(".masthead-brand").text("Atualizar Fornecedor");
        $("#h").empty();
        $("#h").html(ACFR);
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Atualizar contas
    $("#ACNT").click(function (e) {
        $(".active").removeClass("active");
        $("#ACNT").addClass("active");
        $(".masthead-brand").text("Atualizar Contas");
        $("#h").empty();
        $("#h").html(ACNT);
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Deletar Produto
    $("#DP").click(function (e) {
        $(".active").removeClass("active");
        $("#DP").addClass("active");
        $(".masthead-brand").text("Deletar Produtos");
        $("#h").empty();
        $("#h").html(DP);
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Deletar Conta
    $("#DC").click(function (e) {
        $(".active").removeClass("active");
        $("#DC").addClass("active");
        $(".masthead-brand").text("Deletar Contas");
        $("#h").empty();
        $("#h").html(DC);
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Tela de Vendas
    $("#TDV").click(function (e) {
        $(".active").removeClass("active");
        $("#TDV").addClass("active");
        $(".masthead-brand").text("Atualizar Contas");
        $("#h").empty();
        $("#h").html(TDV);
        $("#cpfcli").mask("999.999.999-99");
        $("#script").html('<script src="./js/request.js"></script>');
    });
    //Pagamento de parcela
    $("#PDP").click(function (e) {
        $(".active").removeClass("active");
        $("#PDP").addClass("active");
        $(".masthead-brand").text("Pagamento de Parcelas");
        $("#h").empty();
        $("#h").html(PagDP);
        $("#script").html('<script src="./js/request.js"></script>');
    });

    $("#LP").click(function (e) {
        $(".active").removeClass("active");
        $("#LP").addClass("active");
        $(".masthead-brand").text("Listar Produtos");
        $("#h").empty();
        $("#h").html(LP);
        $("#script").html('<script src="./js/buscar.js"></script>');
        $.ajax({
            url: "./php/listarProdutos.php",
            success: function (response) {
                response = JSON.parse(response)
                for (produto of response) {
                    $("#tbody").append('<tr class="item"><th  >' + produto.id + '</th><td>' + produto.tipo + '</td><td>' + produto.marca + '</td><td>' + produto.valor + '</td><td>' + produto.tamanho + '</td><td>' + produto.quantidade + '</td><td>' + produto.id_fornecedor + ' - ' + produto.nome + '</td></tr>');
                }
            }
        });
        // $( "#tbody" ).append( '<tr class="item"><th  >1</th><td>Camisa</td></tr>');
        // $( "#tbody" ).append( '<tr class="item"><th  >2</th><td>Blusa</td></tr>');

    });
    $("#LF").click(function (e) {
        $(".active").removeClass("active");
        $("#LF").addClass("active");
        $(".masthead-brand").text("Listar Funcionarios");
        $("#h").empty();
        $("#h").html(LF);
        $("#script").html('<script src="./js/buscar.js"></script>');
        $.ajax({
            url: "./php/listarFuncionario.php",
            success: function (response) {
                response = JSON.parse(response)
                for (funcionario of response) {
                    $("#tbody").append('<tr class="item"><th  >' + funcionario.cpf + '</th><td>' + funcionario.nome + '</td><td>' + funcionario.telefone + '</td><td>' + funcionario.tipo + '</<td><td>' + funcionario.salario + '</td><td>' + funcionario.data_nascimento + '</td><td>' + funcionario.dt_inicio_trab + '</td><td>' + funcionario.carga_horaria + '</td><td>' + funcionario.conta_corrente + '</td></tr>');
                }
            }
        });

    });
    $("#LGF").click(function (e) {
        $(".active").removeClass("active");
        $("#LGF").addClass("active");
        $(".masthead-brand").text("Listar Funcionarios");
        $("#h").empty();
        $("#h").html(LGF);
        $("#script").html('<script src="./js/buscar.js"></script>');
        $.ajax({
            url: "./php/listarFuncionario.php",
            success: function (response) {
                response = JSON.parse(response)
                for (funcionario of response) {
                    $("#tbody").append('<tr class="item"><th  >' + funcionario.cpf + '</th><td>' + funcionario.nome + '</td><td>' + funcionario.rua + '</td><td>' + funcionario.numero + '</<td><td>' + funcionario.bairro + '</td><td>' + funcionario.cidade + '</td><td>' + funcionario.cep + '</tr>');
                }
            }
        });

    });
    $("#LDV").click(function (e) {
        $(".active").removeClass("active");
        $("#LDV").addClass("active");
        $(".masthead-brand").text("Listar Dividas de Clientes");
        $("#h").empty();
        $("#h").html(LDV);
        $("#script").html('<script src="./js/buscar.js"></script>');
        $.ajax({
            url: "./php/listarDividasClientes.php",
            success: function (response) {
                response = JSON.parse(response)
                console.log(response);
                
                for (Cliente of response) {
                    if(Cliente.pago == 'f'){
                        Cliente.pago = 'NÃO'
                    }else{
                        Cliente.pago = 'SIM'
                    }
                    if (Cliente.avista == 'f') {
                        Cliente.avista = 'NÃO'
                    }else{
                        Cliente.avista = 'SIM'
                    }
                    $("#tbody").append('<tr class="item"><th  >' + Cliente.id + '</th><td>' + Cliente.parcelas + '</td><td>' + Cliente.parcelas_pagas + '</td><td>' + Cliente.datavenda + '</<td><td>' + Cliente.dataultimopagamento + '</td><td>' + Cliente.pago + '</td><td>' + Cliente.avista + '<td>' + Cliente.id_cliente + '</tr></tr>');
                }
            }
        });

    });
    $("#LC").click(function (e) {
        $(".active").removeClass("active");
        $("#LC").addClass("active");
        $(".masthead-brand").text("Listar Clientes");
        $("#h").empty();
        $("#h").html(LC);
        $("#script").html('<script src="./js/buscar.js"></script>');
        $.ajax({
            url: "./php/listarCliente.php",
            success: function (response) {
                response = JSON.parse(response)
                for (Cliente of response) {
                    $("#tbody").append('<tr class="item"><th  >' + Cliente.cpf + '</th><td>' + Cliente.nome + '</td><td>' + Cliente.rua + '</td><td>' + Cliente.numero + '</<td><td>' + Cliente.bairro + '</td><td>' + Cliente.cidade + '</td><td>' + Cliente.cep + '</tr>');
                }
            }
        });
    });
    $("#LFCR").click(function (e) {
        $(".active").removeClass("active");
        $("#LFCR").addClass("active");
        $(".masthead-brand").text("Listar Funcionarios");
        $("#h").empty();
        $("#h").html(LFCR);
        $("#script").html('<script src="./js/buscar.js"></script>');
        $.ajax({
            url: "./php/listarFornecedor.php",
            success: function (response) {
                response = JSON.parse(response)
                for (Fornecedor of response) {
                    $("#tbody").append('<tr class="item"><th  >' + Fornecedor.id + '</th><td>' + Fornecedor.nome + '</td><td>' + Fornecedor.telefone + '</td><td>' + Fornecedor.rua + '</td><td>' + Fornecedor.numero + '</<td><td>' + Fornecedor.bairro + '</td><td>' + Fornecedor.cidade + '</td><td>' + Fornecedor.cep + '</tr>');
                }
            }
        });
    });
    $("#LCNT").click(function (e) {
        $(".active").removeClass("active");
        $("#LCNT").addClass("active");
        $(".masthead-brand").text("Listar Funcionarios");
        $("#h").empty();
        $("#h").html(LCNT);
        $("#script").html('<script src="./js/buscar.js"></script>');
        $.ajax({
            url: "./php/listarContas.php",
            success: function (response) {
                response = JSON.parse(response)
                for (Contas of response) {
                    if (Contas.pago == "t") {
                        $("#tbody").append('<tr class="item"><th>' + Contas.id + '</th><th>' + Contas.descricao + '</th><td>' + Contas.vencimento + '</td><td>' + Contas.valor + '</td><td>' + "Pago" + '</td></tr>');

                    }else{
                        $("#tbody").append('<tr class="item"><th>' + Contas.id + '</th><th>' + Contas.descricao + '</th><td>' + Contas.vencimento + '</td><td>' + Contas.valor + '</td><td>' + "Não Pago" + '</td></tr>');
                    }
                }
            }
        });

    });
    $("#logout").click(function (e) {
        $.ajax({
            type: "POST",
            url: './php/deslogar.php',
            data: {
                action: 'deslogar'
            },
            success: function (data) {
                window.location.reload();
            }
        });
    });
});