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
													    id_fornecedor text)
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
			if (old.pago = false and new.pago = true) then
				new.dataPago = current_date;
			elseif (old.pago = true and new.pago = false) then
				new.dataPago = null;
			end if;
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




-- ********************************************** NEW FUNCTION *******************************************************

--Função para cadastrar Funcionario.
create or replace function cadastrar_Funcionario_Endereco(cpf text, nome text, telefone text, rua text, numero int,
														 bairro text, cidade text, cep text, cargo text, salario numeric,
														 dataNascimento date, dataInicio date, cargH int, contaCorrente text)
returns void as $$
	declare
		auxSeq int;
		cadExist int;
	begin
	
		insert into endereco values(nextval('endereco_id_seq'), rua, numero, bairro, cidade, cep);
		select last_value into auxSeq from endereco_id_seq;
		insert into pessoas values(cpf, nome, telefone, auxSeq);
		cadExist := 0;
		select count(id) into cadExist from cargo c where c.tipo = cargo;
		
		if (cadExist > 0) then
			select id into cadExist from cargo c where c.tipo = cargo;
			insert into funcionarios(cpf, id_cargo, salario, data_nascimento, carga_horaria, conta_corrente,
							   dt_inicio_trab) values(cpf, cadExist, salario, dataNascimento, cargH, 
													 contaCorrente, dataInicio);
		else
			insert into cargo values(nextval('cargo_id_seq'),cargo);
			select last_value into auxSeq from cargo_id_seq;
			insert into funcionarios(cpf, id_cargo, salario, data_nascimento, carga_horaria, conta_corrente,
								   dt_inicio_trab) values(cpf, auxSeq, salario, dataNascimento, cargH, 
														 contaCorrente, dataInicio);
		end if;
	end;
$$ language plpgsql;

select * from funcionarios;
select * from endereco;
select * from pessoas;
select * from cliente


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
		cp text;
	begin
		select count(*) into exist from pessoas
		where cpf = new.cpf;
		
		if (exist > 0) then
			select nome into cp from pessoas
			where cpf = new.cpf;
			if (cp = new.nome) then
				return null;
			else
				raise exception 'Esse CPF já foi cadastrado em outro nome.';
			end if;
		end if;
		return new;
	end;
$$ language plpgsql;


create trigger verify_exist_pessoas_tri
before insert on pessoas
for each row execute procedure verify_exist_pessoas_fun();



-- ********************************************** NEW FUNCTION *******************************************************
--Função de atualizar.

create or replace function attFuncionario(cg text, sal numeric, dt_nasc date, cg_hr int, ct_corr text, 
										 dt_inicio date, cppf text)
returns void as $$
	declare
		whereExist int;
	begin
		whereExist := 0;
		select id into whereExist from cargo
		where tipo = cg;
		
		if (whereExist = 0) then
			insert into cargo values(nextval('cargo_id_seq'), cg);
			select last_value into whereExist from cargo_id_seq;
		end if;
		update funcionarios set id_cargo=whereExist, salario=sal, data_nascimento=dt_nasc, carga_horaria=cg_hr,
		conta_corrente=ct_corr, dt_inicio_trab=dt_inicio
		where cpf = cppf;
	end;
$$ language plpgsql;


create or replace function modify_endereco(r text, n int, b text, c text, cp text, cpff text)
returns void as $$
	
	begin
		update endereco set rua=r, numero=n, bairro=b, cidade=c, cep=cp from pessoas
		where endereco.id = pessoas.id_endereco and
		pessoas.cpf = cpff;
	end;
	
$$ language plpgsql



--Functions

create or replace function gerencia_venda(id_produto text, qtd int)
returns void as $$
	declare
		id_sell int;	
	begin
		select id into id_sell from venda where id = (SELECT MAX(id) FROM venda);
		INSERT INTO produtos_vendidos(
		id_prod, id_venda, quantidade)
		VALUES (id_produto, id_sell, qtd);
	end;
$$ language plpgsql;

create or replace function delete_produto(id_prod text)
returns void as $$
	declare
		id_buy int;
	begin
		select id_compras into id_buy from produtos_compras where id_produtos = id_prod;
		delete from produtos where id = id_prod;
		delete from compras where id = id_buy;
	end;
$$ language plpgsql;



--Trigger

create or replace function parcelado_fun()
returns trigger as $$
	begin
		if (new.parcelas_pagas+old.parcelas_pagas <= old.parcelas) then
			new.parcelas_pagas = new.parcelas_pagas + old.parcelas_pagas;
			new.dataUltimoPagamento = current_date;
			
			if (new.parcelas_pagas = old.parcelas) then
				new.pago = true;
			end if;
		else
			raise exception 'Error';
		end if;
		return new;
	end;
$$ language plpgsql;

create trigger parcelado_tri
before update on venda
for each row execute procedure parcelado_fun()


--*****************************************************VIEWS********************************************8
create or replace view retornaDadosCliente as
select p.cpf, p.nome, p.telefone, e.rua, e.numero, e.bairro, e.cidade, e.cep 
        from cliente c, endereco e, pessoas p
       	where c.cpf = p.cpf and
        p.id_Endereco = e.id

--Testing
select * from retornaDadosCliente
      where  cpf = '999.999.999-99';


-- NEW VIEW
create or replace view retornaDadosFuncionarios as
select f.cpf,p.nome,p.telefone,e.rua, e.numero, e.bairro, e.cidade, e.cep,
        c.tipo, f.salario, to_char(f.data_nascimento,'DD/MM/YYYY') as data_nascimento, 
		to_char(f.dt_inicio_trab,'DD/MM/YYYY') as dt_inicio_trab , f.carga_horaria, f.conta_corrente 
        from funcionarios f, endereco e, pessoas p, cargo c
        where f.id_cargo = c.id and 
        f.cpf = p.cpf and
        p.id_Endereco = e.id;
		
--NEW VIEW
create or replace view valorProduto as
select ((pv.quantidade * p.valor)*1.2) as valorTotal from venda v, produtos_vendidos pv, produtos p
where pv.id_venda = v.id and
pv.id_prod = p.id;
		
drop view retornaDadosFuncionarios;
        
select * from retornaDadosFuncionarios
	where cpf = '999.999.999-99';
	
	
	
	


