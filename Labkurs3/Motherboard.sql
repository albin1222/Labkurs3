create table dbo.Motherboard(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
Qmimi float
) 
insert into dbo.Motherboard values ('Asus','rog strix b460-g gaming micro atx',200)
select *from dbo.Motherboard