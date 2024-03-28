CREATE TABLE Tarefas
(	IdChamado int,
	DataChamado Varchar(10),
	NomeCliente Varchar(20),
	Descricao Varchar(80)
);

INSERT INTO Tarefas VALUES
(7, '2024-10-9', 'Ana', 'Segurança'),
(3, '2024-03-24', 'Luiz', 'Documentação')


SELECT * FROM Tarefas