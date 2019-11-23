let cadp = '<div id="formContent">' + '<form id="CadProd">' +
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
    '<input type="submit" class="fadeIn fourth" value="Cadastar">' +
    '</form>' +
    '</div>';



let cadf = '<div id="formContent">' + '<form id="CadFunc">' +
    '<input type="text" id="cpfFunc" class="fadeIn second" name="cpfFunc" placeholder="Cpf" maxlength="11"></input>' +
    '<input type="text" id="nomeFunc" class="fadeIn third" name="nomeFunc" placeholder="Nome" maxlength="100">' +
    '<input type="text" id="TelFunc" class="fadeIn third" name="TelFunc" placeholder="Telefone" required >' +
    '<input type="text" id="ruaFunc" class="fadeIn third" name="ruaFunc" placeholder="Rua">' +
    '<input type="number" id="numFunc" class="fadeIn third" name="numFunc" placeholder="Numero">' +
    '<input type="text" id="bairroFunc" class="fadeIn third" name="bairroFunc" placeholder="Bairro">' +
    '<input type="text" id="cidadeFunc" class="fadeIn third" name="cidadeFunc" placeholder="Cidade">' +
    '<input type="text" id="cepFunc" class="fadeIn third" name="cepFunc" placeholder="CEP">' +
    '<input type="text" id="passwordFunc" class="fadeIn third" name="senhaFunc" placeholder="Senha" maxlength="32">' +
    '<input type="submit" class="fadeIn fourth" value="Cadastar">' +
    '</form>' +
    '</div>';

let home = '<h1 class="cover-heading titulo">Seja Bem Vindo!!</h1>' + '<p id="NomeUser" class="lead"></p>'

let CC = '<div id="formContent">' + '<form id="CadCli">' +
    '<input type="text" id="cpfcli" class="fadeIn second" name="cpfcli" placeholder="Cpf" maxlength="11"></input>' +
    '<input type="text" id="nomecli" class="fadeIn third" name="nomecli" placeholder="Nome" maxlength="100">' +
    '<input type="text" id="Telcli" class="fadeIn third" name="Telcli" placeholder="Telefone" required >' +
    '<input type="submit" class="fadeIn fourth" value="Cadastar">' +
    '</div>';

let CFR = '<div id="formContent">' + '<form id="CadCFR">' +
    '<input type="text" id="nomecfr" class="fadeIn third" name="nomecfr" placeholder="Nome" maxlength="100">' +
    '<input type="text" id="Telcfr" class="fadeIn third" name="Telcfr" placeholder="Telefone" required >' +
    '<input type="text" id="ruacfr" class="fadeIn third" name="ruacfr" placeholder="Rua">' +
    '<input type="number" id="numcfr" class="fadeIn third" name="numcfr" placeholder="Numero">' +
    '<input type="text" id="bairrocfr" class="fadeIn third" name="bairrocfr" placeholder="Bairro">' +
    '<input type="text" id="cidadecfr" class="fadeIn third" name="cidadecfr" placeholder="Cidade">' +
    '<input type="text" id="cepcfr" class="fadeIn third" name="cepcfr" placeholder="CEP">' +
    '<input type="submit" class="fadeIn fourth" value="Cadastar">' +
    '</div>';
let LP = '<table class="table">' +
    '<thead><tr><th scope="col">Codigo Produto</th><th scope="col">Produto</th></tr></thead><tbody id="tbody"></tbody></table>'

let LF = '<table class="table">' +
    '<thead><tr><th scope="col">CPF</th><th scope="col">Nome</th></tr></thead><tbody id="tbody"></tbody></table>'



$(document).ready(function () {
    $("#home").click(function (e) {
        $(".active").removeClass("active");
        $("#home").addClass("active");
        $("#h").empty();
        $("#h").html(home);
        let nome = localStorage.getItem("NomeUser")
        $("#NomeUser").text(nome);
        $(".masthead-brand").text("Home");


    });
    $("#Cadastrar").click(function (e) {
        $(".active").removeClass("active");
        $("#Cadastrar").addClass("active");
        // $("#h").empty();
        // $("#h").html(cadp);
        // $(".masthead-brand").text("Cadastrar");
        // $("#script").html('<script src="./js/request.js"></script>');
    });
    $("#CP").click(function (e) {
        $(".active").removeClass("active");
        $("#CP").addClass("active");
        $("#h").empty();
        $("#h").html(cadp);
        $(".masthead-brand").text("Cadastrar Produtos");
        // $("#script").html('<script src="./js/request.js"></script>');
    });
    $("#CF").click(function (e) {
        $(".active").removeClass("active");
        $("#CF").addClass("active");
        $("#h").empty();
        $("#h").html(cadf);
        $(".masthead-brand").text("Cadastrar Funcionarios");
        $("input#TelFunc").mask("(99) 99999-999?9")
        $("input#cepFunc").mask("99999-999")
        $("#cpfFunc").mask("999.999.999-99");
        //$("#script").html('<script src="./js/request.js"></script>');
    });
    $("#CC").click(function (e) {
        $(".active").removeClass("active");
        $("#CC").addClass("active");
        $("#h").empty();
        $("#h").html(CC);
        $(".masthead-brand").text("Cadastrar Cliente");
        $("input#Telcli").mask("(99) 99999-999?9")
        $("#cpfcli").mask("999.999.999-99");
        //$("#script").html('<script src="./js/request.js"></script>');
    });
    $("#CFR").click(function (e) {
        $(".active").removeClass("active");
        $("#CFR").addClass("active");
        $("#h").empty();
        $("#h").html(CFR);
        $(".masthead-brand").text("Cadastrar Fornecedor");
        $("input#Telcfr").mask("(99) 99999-999?9")
        $("input#cepcfr").mask("99999-999")
        //$("#script").html('<script src="./js/request.js"></script>');
    });
    $("#LP").click(function (e) {
        $(".active").removeClass("active");
        $("#LP").addClass("active");
        $(".masthead-brand").text("Listar Produtos");
        $("#h").empty();
        $("#h").html(LP);

    });
    $("#LF").click(function (e) {
        $(".active").removeClass("active");
        $("#LF").addClass("active");
        $(".masthead-brand").text("Listar Funcionarios");
        $("#h").empty();
        $("#h").html(LF);
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