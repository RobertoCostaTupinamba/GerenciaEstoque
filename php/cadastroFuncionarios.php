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

    //Tratamento de mascaras.
    $salario = str_replace(".", "", $salario);
    $salario = str_replace(",", ".", $salario);

    if ($conexao) {
        $insert = "select cadastrar_Funcionario_Endereco('".$cpf."','".$nome."', '".$telefone."','"
        .$rua."',".$numero.",'".$bairro."','".$cidade."','".$cep."','".$cargo."',".$salario.",'"
        .$dataNascimento."','".$dataInicio."',".$cargaHoraria.",'".$contaCorrente."','".$senha."');";
        
        if ($res = pg_query($conexao, $insert)) {
            echo "1";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);
?>