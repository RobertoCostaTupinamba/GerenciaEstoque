<?php
    include_once("./conexao.php");
    include_once("./produtos.php");
    $cdg = $_POST['cdg'];
    
    if($conexao) {
        if (empty($id_prod) == true || empty($tipoProd) == true || empty($marcaProd) == true || 
            empty($valor) == true || empty($tam) == true || empty($qntProd) == true) {
            echo "2"; // Algum capo esta vazio.
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

            include_once("./trataAtt.php");

            $update = "update compras set fornecedor_id = '".$id_fornecedor."'
            from compras c, produtos_compras pc, produtos p
            where c.id = pc.id_compras and p.id = pc.id_produtos and p.id = '".$cdg."';";

            $res = pg_query($conexao, $update);
        }
    }

?>