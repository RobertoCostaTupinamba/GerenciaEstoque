<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Home</title>

    <!-- Principal CSS do Bootstrap -->
    <link href="./Bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Estilos customizados para esse template -->
    <link href="./css/home.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/CadrastroProd.css">

    <script src="./js/jquery-3.4.1.min.js"></script>
    <script src="./js/MenuClick.js"></script>



</head>


<body class="text-center">

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="masthead">
            <div class="inner">
                <div class="d-flex justify-content-between">
                    <h3 class="masthead-brand">Home</h3>
                    <button id="logout" class="btn btn-danger">Deslogar</button>
                </div>


                <nav class="nav nav-masthead justify-content-center">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <a class="nav-link" id="home">Home</a>
                            <li class="nav-link dropdown" id="Cadastrar">
                                <a class="dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Cadastrar</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" id="CP" href="#">Produto</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="CF" href="#">Funcionario</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Cliente</a>
                                </div>
                            </li>
                            <a class="nav-link">Atualizar</a>
                            <a class="nav-link" id="LP">Deletar</a>
                            <a class="nav-link" id="LF">Listar</a>
                        </div>

                    </nav>
                </nav>
            </div>
        </header>

        <main role="main" class="inner cover h-100 d-flex flex-column justify-content-center">
            <div id="mensagemDiv"></div>
            <div id="h">
                <h1 class="cover-heading">Seja Bem Vindo!!</h1>
                <p id="NomeUser" class="lead"></p>
            </div>
        </main>

        <footer class="mastfoot mt-auto">
            <div class="inner">
            </div>
        </footer>
    </div>
    <div id="script">
    </div>
    <!-- Principal JavaScript do Bootstrap
    ================================================== -->
    <!-- Foi colocado no final para a página carregar mais rápido -->
    <script src="./Bootstrap/js/popper.min.js"></script>
    <script src="./Bootstrap/js/bootstrap.min.js"></script>
</body>

</html>