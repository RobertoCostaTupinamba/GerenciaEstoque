<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>

    <link rel="stylesheet" href="./Bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="./css/login.css">

    <script src="./js/jquery-3.4.1.min.js"></script>
    <script type='text/javascript'>
    
    function setErro(valor) {
        $('#mensagemDiv').html(valor);
        $('#mensagemDiv').css("color", "red");
    }

    </script>
</head>


<body>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
                Formulario de Login
                <div id="mensagemDiv" style="height: 40px" class="alert alert-success" role="alert"></div>
            </div>

            <!-- Login Form -->
            <form action="./php/logar.php" method="post">
                <input type="text" id="login" class="fadeIn second" name="CPF" placeholder="CPF" maxlength="11">
                <input type="text" id="password" class="fadeIn third" name="Senha" placeholder="Senha" maxlength="32">
                <input type="submit" class="fadeIn fourth" value="Logar">
            </form>


        </div>
    </div>
    <script src="./Bootstrap/js/popper.min.js"></script>
    <script src="./Bootstrap/js/bootstrap.min.js"></script>
</body>

</html>