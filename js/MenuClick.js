let cadp = '<div id="formContent">' + '<form id="CadProd">' +
    '<input type="text" id="codProd" class="fadeIn second" name="CodProd" placeholder="Codigo do Produto"></input>' +
    '<input type="text" id="nome" class="fadeIn third" name="nome" placeholder="Nome" maxlength="100">' +
    '<input type="submit" class="fadeIn fourth" value="Cadastar">' +
    '</form>' +
    '</div>';

let cadf = '<div id="formContent">' + '<form id="CadFunc">' +
    '<input type="text" id="cpf" class="fadeIn second" name="cpf" placeholder="Cpf" maxlength="11"></input>' +
    '<input type="text" id="nome" class="fadeIn third" name="nome" placeholder="Nome" maxlength="100">' +
    '<input type="text" id="password" class="fadeIn third" name="senha" placeholder="Senha" maxlength="32">' +
    '<input type="submit" class="fadeIn fourth" value="Cadastar">' +
    '</form>' +
    '</div>';

let home = '<h1 class="cover-heading">Seja Bem Vindo!!</h1>' + '<p id="NomeUser" class="lead"></p>'

let LP = '<table class="table">' +
    '<thead><tr><th scope="col">Codigo Produto</th><th scope="col">Produto</th></tr></thead><tbody id="tbody"></tbody></table>'

let LF ='<table class="table">' +
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
            data:{action:'deslogar'},
            success:function(data) {
                window.location.reload();
            }
       }); 
    });
});



