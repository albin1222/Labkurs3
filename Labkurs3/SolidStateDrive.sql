create table dbo.SolidStateDrive(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
GB varchar(500),
Qmimi float
) 
insert into dbo.SolidStateDrive values ('Kioxia','SSD00017','240GB',40.5)
select *from dbo.SolidStateDrive