<?php
    include_once("./conexao.php");
    $id = $_POST["cdg"];
        

    if ($conexao) {
        
        $delete = "select delete_produto('".$id."');";
       
        
        if ($res = pg_query($conexao,$delete)) {
            echo "1";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);

?>