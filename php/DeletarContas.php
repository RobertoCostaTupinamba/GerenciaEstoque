<?php
    include_once("./conexao.php");

    $id = $_POST["cdg"];
    
    
    // $string = $desc." ". $vencimento." ". $valor." $pago";
    if ($conexao) {
        $delete = "delete from contas where id =".$id.";";
        // "insert into contas(descricao, vencimento, valor, pago) 
        // values('".$desc."', '".$vencimento."',".$valor.",".$pago.");";
        
        if ($res = pg_query($conexao,$delete)) {
            echo "1";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);
?>