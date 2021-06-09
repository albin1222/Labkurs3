create table dbo.CaseN(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
Tipi varchar(500),
Qmimi float
) 
insert into dbo.CaseN values ('NZCT','CAS000033','MiniTower',105)
select *from dbo.CaseN
