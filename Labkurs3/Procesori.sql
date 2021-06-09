create table dbo.Procesori(
Id int identity(1,1),
LlojiFirmes varchar(500),
Gjenerata varchar(500),
Specifika varchar(500),
Qmimi float
) 
insert into dbo.Procesori values ('Intel','Gen9', 'I9',133.22)
select *from dbo.Procesori