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
    <script src="./js/jquery.maskedinput.min.js"></script>
    <script src="./js/MenuClick.js"></script>
    <script src="./js/maskDinheiro.js"></script>




</head>


<body class="text-center">

    <div class=" d-flex w-100  p-3 S flex-column">
        <header class="masthead">
            <div class="inner">
                <div class="d-flex justify-content-between align-items-center">
                    <h3 class="masthead-brand titulo">Home</h3>
                    <button id="logout" class="btn btn-danger">Deslogar</button>
                </div>


                <nav class="nav nav-masthead justify-content-center">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <a class="nav-link" id="home">Home</a>
                            <li class="nav-link dropdown" id="Cadastrar">
                                <a class="dropdown-toggle " data-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="true" aria-expanded="false">Cadastrar</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" id="CP" href="#">Produto</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="CF" href="#">Funcionario</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="CC" href="#">Cliente</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="CFR" href="#">Fornecedor</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="CNT" href="#">Contas</a>
                                </div>
                            </li>
                            <li class="nav-link dropdown" id="Atualizar">
                                <a class="dropdown-toggle " data-toggle="dropdown" href="#" role="button"
                                    aria-haspopup="true" aria-expanded="false">Atualizar</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" id="AP" href="#">Produto</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="AF" href="#">Funcionario</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="AC" href="#">Cliente</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="AFR" href="#">Fornecedor</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" id="ANT" href="#">Contas</a>
                                </div>
                            </li>
                            <a class="nav-link" id="LP">Deletar</a>
                            <a class="nav-link" id="LF">Listar</a>
                        </div>

                    </nav>
                </nav>
            </div>
        </header>
        <div class="container-fluid w-100 h-100 p-0 d-flex justify-content-center ">
            <main role="main" class="inner w-75 d-flex justify-content-center align-items-center">
                <div id="mensagemDiv"></div>
                <div id="h">
                    <h1 class="cover-heading titulo">Seja Bem Vindo!!</h1>
                    <p id="NomeUser" class="lead"></p>
                </div>
                
            </main>
        </div>


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