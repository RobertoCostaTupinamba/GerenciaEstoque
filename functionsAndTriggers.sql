 -- Triggers and functions -- 

-- ********************************************** NEW FUNCTION (TRIGGER) *******************************************************
-- Trigger de PRODUTOS, para caso já exista um produto similar no estoque,
-- esse novo produto será somado com o já existente.
drop function add_prodctForStock_fun()
create or replace function add_productForStock_fun()
returns trigger as $$
declare
	exist int;
begin
	select count(*) into exist from produtos
	where initcap(tipo) = initcap(new.tipo) and
	initcap(marca) = initcap(new.marca) and
	valor = new.valor and
	upper(tamanho) = upper(new.tamanho);
							 							
	if exist > 0 then
		raise notice 'Como existe um produto similar em estoque, esse será somado.';
			
		update produtos set quantidade = quantidade + new.quantidade
		where initcap(marca) = initcap(new.marca) and 
		initcap(tipo) = initcap(new.tipo) and 
		valor = new.valor and 
		upper(tamanho) = upper(new.tamanho);
		return null;
	else
		new.id = nextval('produtos_id_seq');
		return new;
	end if;
	return null;
end;
$$ language plpgsql;

-- Testing...
alter sequence produtos_id_seq restart with 1;

create trigger add_productForStock_tri
before insert on produtos
for each row execute procedure add_productForStock_fun();


drop trigger add_productForStock_tri on produtos

select * from produtos;
delete  from produtos 

insert into produtos(tipo,marca,valor,tamanho,quantidade) values('Blusa', 'Nike', 40, 'G', 30);
insert into produtos(tipo,marca,valor,tamanho,quantidade) values('Blusa', 'Nike', 40, 'G', 33);


-- Adicionando Enderecos teste.
select * from endereco;
insert into endereco values(1,'Rua Padre Manoel Luis', 219, 'Centro', 'Coromandel', 35555);

-- Adicionando Fornecedor teste.
select * from fornecedores_local;
insert into fornecedores_local values(1, 'Mateus', '38414444', 1);




-- ********************************************** NEW FUNCTION *******************************************************
--Function compra de algum produto.
--Função para estabelecer atomicidade na transação.
create or replace function transacao_Compra_Fornecedor(cpf text, tip text, marc text, val numeric, tam text, qnt int,
													    id_fornecedor int)
returns void as $$
	declare
		id_comp int;
	begin
		insert into compras(quantidade, fornecedor_id, dataCompra) values(qnt, id_fornecedor,current_date);
		insert into produtos values(cpf,tip,marc,val,tam,qnt);

		SELECT last_value into id_comp from compras_id_seq;
		insert into produtos_Compras(id_produtos, id_compras) values(cpf, id_comp);
	end;
$$ language plpgsql;


--Testing..	
select transacao_Compra_Fornecedor('Calça', 'Adidas', 40, 'M', 67, 1);

select * from compras;
select * from produtos_compras;
select * from produtos;
select * from Fornecedores_Local
insert into endereco values(1,'Rua',21,'Centro','Coromandel', '38550000');
insert into Fornecedores_Local values(1,'Mateus', '999999', 1);



-- ********************************************** NEW FUNCTION (TRIGGER) *******************************************************
-- Trigger insert Contas.
create or replace function add_Date_Compras_fun()
returns trigger as $$
	begin
		if (tg_op = 'INSERT') then
			new.dataConta = current_date;
			if (new.pago = true) then
				new.dataPago = current_date;
			end if;
			return new;
		elseif (tg_op = 'UPDATE') then
			new.dataPago = current_date;
		end if;
	end;
$$ language plpgsql;

create trigger add_Date_Compras_tri
before insert or update on contas
for each row execute procedure add_Date_Compras_fun();


-- ********************************************** NEW FUNCTION *******************************************************

--Função para cadastrar um fornecedor.
create or replace function cadastrar_Fornecedor_Endereco(ident text, nameF text, telF text, ruaE text, numeroE int,
														bairroE text, cidadeE text, cepE text)
returns void as $$
	declare
		auxSeq int;
	begin
		insert into endereco values(nextval('endereco_id_seq'), ruaE, numeroE, bairroE, cidadeE, cepE);
		select last_value into auxSeq from endereco_id_seq;
		insert into fornecedores_local values(ident, nameF, telF, auxSeq);
	end;
$$ language plpgsql;

select cadastrar_Fornecedor_Endereco('Jorge', '991717143', 'Rua', 219, 'Centro', 'Coromandel', '38550000');
select * from fornecedores_local;
select * from endereco;



-- ********************************************** NEW FUNCTION *******************************************************

--Função para cadastrar Funcionario.
create or replace function cadastrar_Funcionario_Endereco(cpf text, nome text, telefone text, rua text, numero int,
														 bairro text, cidade text, cep text, cargo text, salario numeric,
														 dataNascimento date, dataInicio date, cargH int, contaCorrente text, senha text)
returns void as $$
	declare
		auxSeq int;
	begin
		insert into endereco values(nextval('endereco_id_seq'), rua, numero, bairro, cidade, cep);
		select last_value into auxSeq from endereco_id_seq;
		insert into pessoas values(cpf, nome, telefone, auxSeq);
		insert into cargo values(nextval('cargo_id_seq'),cargo);
		select last_value into auxSeq from cargo_id_seq;
		insert into funcionarios(senha, cpf, id_cargo, salario, data_nascimento, carga_horaria, conta_corrente,
							   dt_inicio_trab) values(senha, cpf, auxSeq, salario, dataNascimento, cargH, 
													 contaCorrente, dataInicio);
	end;
$$ language plpgsql;

select * from funcionarios;
select * from endereco;
select * from pessoas;


-- ********************************************** NEW FUNCTION *******************************************************
--Função de cadastro de cliente.
create or replace function cadastrar_Cliente_Endereco(cpfD text, nomeD text, telefoneD text, ruaD text, numeroD int,
													 bairroD text, cidadeD text, cepD text)
returns void as $$
	declare
		auxSeq int;
	begin
	
		insert into endereco values(nextval('endereco_id_seq'), ruaD, numeroD, bairroD, cidadeD, cepD);
		select last_value into auxSeq from endereco_id_seq;
		insert into pessoas values(cpfD, nomeD, telefoneD, auxSeq);
		insert into cliente values(cpfD, current_date);
	end;	
$$ language plpgsql;


--Trigger para não permitir 2 cadastro de mesma pessoa.
create or replace function verify_exist_pessoas_fun()
returns trigger as $$
	declare
		exist int;
	begin
		select count(*) into exist from pessoas
		where cpf = new.cpf;
		
		if (exist > 0) then
			return null;
		end if;
		return new;
	end;
$$ language plpgsql;

create trigger verify_exist_pessoas_tri
before insert on pessoas
for each row execute procedure verify_exist_pessoas_fun();

