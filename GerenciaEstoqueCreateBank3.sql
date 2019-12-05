
--------------------------- *********** Create bank of data ************ ---------------------------------------

--Sequences.
--create sequence fornecedores_local_id_seq start 1;
create sequence fornecedores_produtos_id_seq start 1;
create sequence endereco_id_seq start 2;
create sequence cargo_id_seq start 1;

--Lembrar de usar nextval para essas sequences.

CREATE TABLE Produtos (
  id text primary key,
  tipo text ,
  marca text,
  valor numeric not null,
  tamanho text NOT NULL,
  quantidade int not null,
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
  id int PRIMARY KEY,
  Fornecedor_ID text,
  Produto_ID int
);

CREATE TABLE Fornecedores_Local (
  id text PRIMARY KEY,
  nome text NOT NULL,
  telefone text,
  id_Endereco int NOT NULL
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
  id serial PRIMARY KEY,
  quantidade int,
  Fornecedor_ID text,
  dataCompra date not null
);
CREATE TABLE Pessoas (
  cpf text PRIMARY KEY,
  nome text NOT NULL,
  telefone text NOT NULL,
  id_Endereco int
);

CREATE TABLE Cliente (
  cpf text primary key,
  dataIngresso date not null
);

CREATE TABLE Funcionarios (
  cpf text not null,
  id_cargo int,
  salario numeric DEFAULT 0.0,
  data_nascimento date,
  carga_horaria int not null,
  conta_corrente text not null,
  dt_inicio_trab date not null,
  dt_fim_trab date,
  motivo text,
  check (salario >= 0),
  check (carga_horaria >= 0),
  check (carga_horaria < 45)
);


CREATE TABLE Cargo (
  id int PRIMARY KEY,
  tipo text
);


CREATE TABLE Contas (
  id SERIAL PRIMARY KEY,
  descricao text default 'N.A. Info',
  vencimento date,
  valor numeric DEFAULT 0.0,
  pago boolean,
  dataConta date,
  dataPago date
  check (valor >= 0)
);

CREATE TABLE Produtos_Vendidos (
  id SERIAL PRIMARY KEY,
  id_prod text NOT NULL,
  id_venda int not null,
  quantidade int,
  dataVenda date not null
);


CREATE TABLE Venda (
  id SERIAL PRIMARY KEY,
  parcelas int,
  parcelas_pagas int,
  dataVenda date,
  dataUltimoPagamento date,
  pago boolean,
  avista boolean,
  id_cliente text
);
CREATE TABLE Produtos_Compras (
  id SERIAL PRIMARY KEY,
  id_Produtos text,
  id_Compras int
);

CREATE TABLE Vendas_Cliente_Ass (
  id SERIAL PRIMARY KEY,
  id_Venda int,
  id_Cliente text,
  id_APrazo int
);

create table Produtos_Vendidos_APrazo (
	id int primary key,
	id_prod int,
	quantidade int,
	parcelas int,
	parcelas_pagas int,
	dataCompra date,
	dartaUltimoPagamento date,
	pago boolean
);



ALTER TABLE Compras ADD FOREIGN KEY (Fornecedor_ID) REFERENCES Fornecedores_Local (id)
on delete cascade 
on update cascade;

ALTER TABLE Cliente ADD FOREIGN KEY (cpf) REFERENCES Pessoas (cpf)
on update cascade;


ALTER TABLE Funcionarios ADD FOREIGN KEY (cpf) REFERENCES Pessoas (cpf);

ALTER TABLE Funcionarios ADD FOREIGN KEY (id_cargo) REFERENCES Cargo (id);

ALTER TABLE Fornecedores_Local ADD FOREIGN KEY (id_Endereco) REFERENCES Endereco (id);

ALTER TABLE Pessoas ADD FOREIGN KEY (id_Endereco) REFERENCES Endereco (id);

ALTER TABLE Produtos_Vendidos  ADD FOREIGN KEY (id_venda) REFERENCES Venda (id)
on delete cascade 
on update cascade;

ALTER TABLE Venda ADD FOREIGN KEY (id_cliente) REFERENCES Cliente (cpf)
on update cascade;

ALTER TABLE Produtos_Compras ADD FOREIGN KEY (id_Compras) REFERENCES Compras (id);

ALTER TABLE Produtos_Vendidos ADD FOREIGN KEY (id_prod) REFERENCES Produtos (id)
on delete cascade 
on update cascade;

ALTER TABLE Produtos_Compras ADD FOREIGN KEY (id_Produtos) REFERENCES Produtos (id)
on delete cascade 
on update cascade;




