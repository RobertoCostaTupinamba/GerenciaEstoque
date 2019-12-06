<?php
    include_once("./conexao.php");
    include_once("./funcionarios.php");
    $cdg = $_POST['cdg'];

    $string = $cdg."\n".$cpf."\n";

    if($conexao) {
        if (empty($cpf) ==true||empty($nome)==true||empty($telefone)==true||
        empty($rua)==true||empty($numero)==true||
        empty($bairro)==true||empty($cidade)==true||empty($cep)==true||empty($cargo)==true||empty($valor)==true||
        empty($dataNascimento)==true||empty($dataInicio)==true||empty($cargaHoraria)==true||empty($contaCorrente)==true) {
            echo "1"; //Algum campo pode estar vazio
        } 
        else {
            if ($cdg != $cpf) {
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
            
            $res = pg_query($conexao, $update);

            $update = "select attFuncionario('".$cargo."',".$valor.",'".$dataNascimento."',
            ".$cargaHoraria.",'".$contaCorrente."','".$dataInicio."', '".$cpf."');";

            if ($res = pg_query($conexao, $update)) {
                echo "1"; //Deu certo.
            }
            else {
                echo "2"; //Error;
            }
        }
    }
    else {
        echo "2"; //Error;
    }

?>