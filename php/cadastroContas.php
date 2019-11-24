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
        
        if ($res = pg_send_query($conexao,$insert)) {
            $res1 = pg_get_result($conexao);
            $rows = pg_num_rows($res1);
            echo "$res1 has $rows records\n\n";
        }
        else {
            echo "Algo de inesperado ocorreu!";
        }
        echo $string;
    }
    pg_close($conexao);
?>