create table dbo.PowerSupply(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
KW varchar(500),
Qmimi float
) 
insert into dbo.PowerSupply values ('RPC','PSU000024','450W',15)
select *from dbo.PowerSupply