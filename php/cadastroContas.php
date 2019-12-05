<?php
    include_once("./conexao.php");
    
    $desc = $_POST["desCNT"];
    $vencimento = $_POST["VenCNT"];
    $valor = $_POST["valorCNT"];
    $pago = 'false';

    if (isset($_POST['pagCNT'])) {
        $pago = 'true';
    }

    //Replace da mascara.
    $valor = str_replace(".", "", $valor);
    $valor = str_replace(",", ".", $valor);
 
    $string = $desc." ". $vencimento." ". $valor." $pago";
    if ($conexao) {
        $insert = "insert into contas(descricao, vencimento, valor, pago) 
        values('".$desc."', '".$vencimento."',".$valor.",".$pago.");";
        
        if ($res = pg_query($conexao,$insert)) {
            echo "1";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);
?>