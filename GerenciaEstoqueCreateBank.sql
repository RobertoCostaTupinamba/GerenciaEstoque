
--------------------------- *********** Create bank of data ************ ---------------------------------------

CREATE TABLE Produtos (
  id SERIAL PRIMARY KEY,
  tipo text NOT NULL,
  marca text,
  valor numeric not null,
  tamanho text NOT NULL,
  check (tamanho = 'GGG' or 
		 tamanho = 'GG' or
		 tamanho = 'G' or 
		 tamanho = 'M/G' or
		 tamanho = 'M' or
		 tamanho = 'M/P' or
		 tamanho = 'P' or 
		 tamanho = 'PP' or
		 tamanho = 'PPP')
);

CREATE TABLE Fornecedores_Produtos (
  id SERIAL PRIMARY KEY,
  Fornecedor_ID int,
  Produto_ID int
);

CREATE TABLE Fornecedores_Local (
  id SERIAL PRIMARY KEY,
  nome text NOT NULL,
  telefone text,
  id_Endereco int NOT NULL
);

CREATE TABLE Estoque (
  id int PRIMARY KEY,
  quantidade int,
  Produto_ID int
);

CREATE TABLE Endereco (
  id int PRIMARY KEY,
  rua text NOT NULL,
  numero int NOT NULL,
  bairro text NOT NULL,
  cidade text NOT NULL,
  cep text NOT NULL
);

CREATE TABLE Compras (
  id SERIAL PRIMARY KEY,
  quantidade int,
  Fornecedor_ID int
);

CREATE TABLE Pessoas (
  cpf text PRIMARY KEY,
  nome text NOT NULL,
  telefone text NOT NULL,
  id_Endereco int
);

CREATE TABLE Cliente (
  id SERIAL PRIMARY KEY,
  cpf text,
  senha text
);

CREATE TABLE Funcionarios (
  id SERIAL PRIMARY KEY,
  senha text NOT NULL,
  cpf text not null,
  id_cargo int,
  salario numeric DEFAULT 0.0,
  data_nascimento date,
  carga_horaria int not null,
  conta_corrente int not null,
  dt_inicio_trab date not null,
  dt_fim_trab date,
  motivo text,
  check (salario >= 0),
  check (carga_horaria >= 0),
  check (carga_horaria < 45)
);

CREATE TABLE Cargo (
  id SERIAL PRIMARY KEY,
  tipo text
);

CREATE TABLE Contas (
  id SERIAL PRIMARY KEY,
  descricao text default 'N.A. Info',
  vencimento date,
  valor numeric DEFAULT 0.0,
  pago boolean not null,
  check (valor >= 0)
);

CREATE TABLE Produtos_Vendidos (
  id SERIAL PRIMARY KEY,
  id_prod int NOT NULL,
  quantidade int
);

CREATE TABLE Vendas_Produtos_Ass (
  id SERIAL PRIMARY KEY,
  id_Vendas int,
  id_Produtos int
);

CREATE TABLE Produtos_Compras (
  id SERIAL PRIMARY KEY,
  id_Produtos int,
  id_Compras int
);

CREATE TABLE Vendas_Cliente_Ass (
  id SERIAL PRIMARY KEY,
  id_Venda int,
  id_Cliente int
);

ALTER TABLE Fornecedores_Produtos ADD FOREIGN KEY (Fornecedor_ID) REFERENCES Fornecedores_Local (id);

ALTER TABLE Fornecedores_Produtos ADD FOREIGN KEY (Produto_ID) REFERENCES Produtos (id);

ALTER TABLE Estoque ADD FOREIGN KEY (Produto_ID) REFERENCES Produtos (id);

ALTER TABLE Compras ADD FOREIGN KEY (Fornecedor_ID) REFERENCES Fornecedores_Local (id);

ALTER TABLE Cliente ADD FOREIGN KEY (cpf) REFERENCES Pessoas (cpf);

ALTER TABLE Funcionarios ADD FOREIGN KEY (cpf) REFERENCES Pessoas (cpf);

ALTER TABLE Funcionarios ADD FOREIGN KEY (id_cargo) REFERENCES Cargo (id);

ALTER TABLE Fornecedores_Local ADD FOREIGN KEY (id_Endereco) REFERENCES Endereco (id);

ALTER TABLE Pessoas ADD FOREIGN KEY (id_Endereco) REFERENCES Endereco (id);

ALTER TABLE Vendas_Produtos_Ass ADD FOREIGN KEY (id_Vendas) REFERENCES Produtos_Vendidos (id);

ALTER TABLE Vendas_Produtos_Ass ADD FOREIGN KEY (id_Produtos) REFERENCES Produtos (id);

ALTER TABLE Produtos_Compras ADD FOREIGN KEY (id_Compras) REFERENCES Compras (id);

ALTER TABLE Produtos_Compras ADD FOREIGN KEY (id_Produtos) REFERENCES Produtos (id);

ALTER TABLE Vendas_Cliente_Ass ADD FOREIGN KEY (id_Venda) REFERENCES Produtos_Vendidos (id);

ALTER TABLE Vendas_Cliente_Ass ADD FOREIGN KEY (id_Cliente) REFERENCES Cliente (id);


