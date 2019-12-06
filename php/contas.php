<?php
    $desc = $_POST["desCNT"];
    $vencimento = $_POST["VenCNT"];
    $valor = $_POST["valorCNT"];
    $pago = 'false';

    if (isset($_POST['pagCNT'])) {
        $pago = 'true';
    }

    include_once("./excluiMascara.php");
?>