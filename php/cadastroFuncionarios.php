<?php
    include_once("./conexao.php");

    $cpf = $_POST['cpfFunc'];
    $nome = $_POST['nomeFunc'];
    $telefone = $_POST['TelFunc'];
    $rua = $_POST['ruaFunc'];
    $numero = $_POST['numFunc'];
    $bairro = $_POST['bairroFunc'];
    $cidade = $_POST['cidadeFunc'];
    $cep = $_POST['cepFunc'];
    $cargo = $_POST['cargo'];
    $salario = $_POST['SalFunc'];
    $dataNascimento = $_POST['nasciFunc'];
    $dataInicio = $_POST['DTinicioFunc'];
    $cargaHoraria = $_POST['CHFunc'];
    $contaCorrente = $_POST['ContaCFunc'];
    $senha = $_POST['senhaFunc'];

    if ($conexao) {
        $insert = "select cadastrar_Funcionario_Endereco('".$cpf."','".$nome."' , '".$telefone."'
        ,'".$rua."',".$numero.",'".$bairro."','".$cidade."','".$cep."');";

        if ($res = pg_send_query($conexao, $insert)) {
            $res1 = pg_get_result($conexao);
            $rows = pg_num_rows($res1);
            echo "$res1 has $rows records\n\n";
        }
        else {
            echo "Algo inesperado ocorreu!";
        }
    }

?>