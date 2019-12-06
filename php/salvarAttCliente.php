<?php
    include_once("./conexao.php");
    include_once("./cliente.php");
    $cdg = $_POST['cdg'];

    if ($conexao) {
        if (empty($cpf) == false && empty($nome) == false && empty($telefone)== false &&
        empty($rua)== false && empty($numero)== false && empty($bairro)== false && 
        empty($cidade)== false && empty($cep)== false) {

            if($cdg != $cpf) {
                $update = "update pessoas set cpf = '".$cpf."'
                where cpf = '".$cdg."';";
                $cpf=$cdg;
                $res = pg_query($conexao, $update);
            }
            $update = "update pessoas set nome='".$nome."',telefone='".$telefone."'
            where cpf ='".$cpf."';";
            $res = pg_query($conexao, $update);

            $update = "select modify_endereco('".$rua."',".$numero.",'".$bairro."',
            '".$cidade."','".$cep."','".$cpf."');";

            if ($res = pg_query($conexao, $update)) {
                echo "1"; //Deu certo
            }
            else {
                echo "2"; // Error;
            }
        }
    }
?>