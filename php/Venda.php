<?php
   include_once("./conexao.php");
   $cpfcli = $_POST["cpfcli"];
   $produtos = $_POST["produtos"];
   $FormaDePagamento = $_POST["FormaDePagamento"];
   if ($FormaDePagamento == "Vista") {
        $FormaDePagamento = 'true';
   }else{
        $FormaDePagamento = 'false';
   }
   
   if ($conexao) {
          
        if (isset($_POST["parcelado"])) {
            $parcelado = $_POST["parcelado"];
            $insertVenda = "insert into venda(parcelas, parcelas_pagas, 
            datavenda, pago, avista, id_cliente) 
            values(". $parcelado.", 0, current_date, false, ".$FormaDePagamento.",'".$cpfcli."')";
            if ($res = pg_query($conexao, $insertVenda)) {

                foreach ($produtos as $value) {
                    $cdg =  $value["cdg"];
                    $qtd =  $value["QTDProd"];
                    $insertProdVenda =  "select gerencia_venda('".$cdg."', ".$qtd.");";
                    pg_query($conexao, $insertProdVenda);
                }
                unset($value);  
                echo "1";
            }
            else {
                echo "2";
            }
        }else{
            $insertVenda = "insert into venda(datavenda, pago, avista, id_cliente) 
            values(current_date, true, ".$FormaDePagamento.",'".$cpfcli."')";
            if ($res = pg_query($conexao, $insertVenda)) {

                foreach ($produtos as $value) {
                    $cdg =  $value["cdg"];
                    $qtd =  $value["QTDProd"];
                    $insertProdVenda =  "select gerencia_venda('".$cdg."', ".$qtd.");";
                    pg_query($conexao, $insertProdVenda);
                }
                unset($value);  
                echo "1";
            }
            else {
                echo "2";
            }
        }
          
   }else{
       echo "2";
   }


    pg_close($conexao);
?>