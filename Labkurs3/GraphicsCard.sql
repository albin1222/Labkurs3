create table dbo.GraphicsCard(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
GB varchar(500),
Qmimi float
) 
insert into dbo.GraphicsCard values ('Nividia','GTX 1050 Ti','4GB',300)
select *from dbo.GraphicsCard