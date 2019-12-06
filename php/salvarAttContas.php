<?php
    include_once("./conexao.php");
    include_once("./contas.php");


    $desc = $_POST["desCNT"];
    $vencimento = $_POST["VenCNT"];
    $valor = $_POST["valorCNT"];
    $pago = 'false';

    if (isset($_POST['pagCNT'])) {
        $pago = 'true';
    }
    
    if ($conexao)  {
        if(empty($desc) == false, empty($vencimento) == false, empty($valor) == false) {
            $update = "update contas set descricao='".$desc."',vencimento=".$vencimento.",
            ".$valor.";";
            if ($res = pg_query($conexao, $update)) {
                echo "1"; // Deu certo.
            }
            else {
                echo "2"; //Error.
            }
        }
        else {
            echo "2"; //Error.
        }
    }
?>