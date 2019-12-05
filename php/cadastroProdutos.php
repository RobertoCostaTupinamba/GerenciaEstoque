<?php
    include_once("./conexao.php");
    include_once("./produtos.php");
    

    //Replace da virgula que foi colocada no front.
    include_once("./excluiMascara.php");

   if ($conexao) {
        $insert = "select transacao_Compra_Fornecedor('".$id_prod."','".$tipoProd."','".$marcaProd."',".
        $valor.",'". $tam ."',". $qntProd .",'".$id_fornecedor."');";

        if ($res = pg_query($conexao, $insert)) {
<<<<<<< HEAD
            echo "1"; // Tudo certo;
        }
        else {
            echo "2"; // Algo inesperado ocorreu;
=======
            echo "1" ;// Tudo certo;
        }
        else {
            echo "2" ;// Algo inesperado ocorreu;
>>>>>>> 5de2e7127617f76b0510b898868cc0179e38377f
        }
        
   }
    pg_close($conexao);
    
?>