<?php
    include_once("./conexao.php");
    include_once("./produtos.php");
    $cdg = $_POST['cdg'];

    if($conexao) {
        $select = "select * from fornecedores_local where id= '".$id_fornecedor."';";
        $res = pg_query($conexao, $select);
        $arrayRes = pg_fetch_all($res);
        $arrayJson = json_encode( $arrayRes, JSON_UNESCAPED_UNICODE);
        
        if (empty($id_prod) == true || empty($tipoProd) == true || empty($marcaProd) == true || 
            empty($valor) == true || empty($tam) == true || empty($qntProd) == true || 
            empty($id_fornecedor) == true) {
            echo "2"; // Algum capo esta vazio.
        }
        else if ($arrayJson == false) {
            echo "2"; // id do fornecedor não existe.
        }
        else {
            if ($cdg != $id_prod) {
                $update = "update produtos set id = '".$id_prod."'
                where id = '".$cdg."';";

                $res = pg_query($conexao, $update);  
            }
            $cdg = $id_prod;

            $update = "update produtos set tipo = '".$tipoProd."',
            marca = '".$marcaProd."', valor = ".$valor.", tamanho = '".$tam."',
            quantidade = ".$qntProd." where id = '".$cdg."';";

            $res = pg_query($conexao, $update);

            $update = "update compras set fornecedor_id = '".$id_fornecedor."'
            from compras c, produtos_compras pc, produtos p
            where c.id = pc.id_compras and p.id = pc.id_produtos and p.id = '".$cdg."';";

            if($res = pg_query($conexao, $update)) {
                echo "1";
            }
        }
    }

?>