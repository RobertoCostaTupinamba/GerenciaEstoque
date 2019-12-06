<?php
    $id_prod = $_POST['CodProd'];
    $tipoProd = $_POST["TipProd"];
    $marcaProd = $_POST["MarcaProd"];
    $valor = $_POST["ValorProd"];
    $qntProd = $_POST["QTDProd"];
    $tam = $_POST["select"];
    $id_fornecedor = $_POST["select1"];

    //Replace da virgula que foi colocada no front.
    include_once("./excluiMascara.php");
?>