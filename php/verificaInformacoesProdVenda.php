<?php
    include_once("./conexao.php");

   $id_prod = $_GET["codigo"];
   $quantidade = $_GET["quantidade"];
    if ($conexao) {
        
        $select_EXIST = "select * from produtos
        where id = '".$id_prod."';";

        if($res = pg_query($conexao, $select_EXIST)) {
            $arrayResultado = pg_fetch_all($res);
            $arrayJson = json_encode($arrayResultado);

            if ($arrayJson == "false") {
                echo "1"; // Produto não existe.
            }
            else {
                $select_ALL = "select * from produtos 
                where id = '".$id_prod."' and 
                quantidade >= ".$quantidade.";";
                if($res = pg_query($conexao, $select_ALL)) {
                    $arrayResultado = pg_fetch_all($res);
                    $arrayJson = json_encode($arrayResultado);
                    if ($arrayJson == "false")
                        echo "2"; // O produto existe, porém não tem essa quantidade.
                    else
                        echo $arrayJson; // produto existe.
                }
            }
        }
    }

?>