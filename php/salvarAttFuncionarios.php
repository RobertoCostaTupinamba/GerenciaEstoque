<?php
    include_once("./conexao.php");
    include_once("./funcionarios.php");
    $cdg = $_POST['cdg'];

    if($conexao) {
        if (empty($cpf)||empty($nome)||empty($telefone)||empty($rua)||empty($numero)||
        empty($bairro)||empty($cidade)||empty($cep)||empty($cargo)||empty($valor)||
        empty($dataNascimento)||empty($dataInicio)||empty($cargaHoraria)||empty($contaCorrente)) {
            echo "2" //Algum campo pode estar vazio
        } 
        else {
            if ($cdg != $cpf) {
                $update = "update pessoas set cpf = '".$cpf."'
                where cpf = '".$cdg."';";

                $res = pg_query($conexao, $update);
            }
        }
    }

?>