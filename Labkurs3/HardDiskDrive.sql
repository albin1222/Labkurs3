create table dbo.HardDiskDrive(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
GB varchar(500),
Qmimi float
) 
insert into dbo.HardDiskDrive values ('Toshiba','P300','1TB',40.5)
select *from dbo.HardDiskDrive