<?php
    include_once("./conexao.php");

    $id = $_POST["cdg"];
    $desc = $_POST["desCNT"];
    $vencimento = $_POST["VenCNT"];
    $valor = $_POST["valorCNT"];
    $pago = 'false';

    if (isset($_POST['pagCNT'])) {
        $pago = 'true';
    }

    //Replace da mascara.


    
    $string = $desc." ". $vencimento." ". $valor." $pago";
    if ($conexao) {
        $update = "update contas set descricao ='".$desc."', vencimento ='".$vencimento."', valor =".$valor.",pago = ".$pago." where id=".$id.";";
        // "insert into contas(descricao, vencimento, valor, pago) 
        // values('".$desc."', '".$vencimento."',".$valor.",".$pago.");";
        
        if ($res = pg_query($conexao,$update)) {
            echo "1";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);

?>