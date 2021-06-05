Create Database Labkurs3

create table KompaniaProdhuese(
KompaniaID int identity(1,1),
EmriKompanis varchar(500),
NumriBiznesit int
)

select *from dbo.KompaniaProdhuese

insert into dbo.KompaniaProdhuese values
('Dell','811754664')



create table dbo.LlojeteProdukteve(
IdeProduktit int identity(1,1),
LlojiIProduktit varchar(500)
)

select *from dbo.LlojeteProdukteve

insert into dbo.LlojeteProdukteve values
('Laptop')

create table dbo.Produkti(
ProduktID int identity(1,1),
EmriProduktit varchar(500),
NumriIProdukteve int,
EmriKompanis varchar(500),
LlojiIProduktit varchar(500),
DataENdertimit date,
PhotoProduktit varchar(500)
)

select *from dbo.Produkti

insert into dbo.Produkti values
('HpWorkstation','24','HP','Shtepiz','2020-06-01','anonymous.png')


--create table dbo.ContactForm(
--Id int identity(1,1),
--Name varchar(500),
--Email varchar(500),
--message varchar(500)
--) 
--select *from dbo.ContactForm
--insert into dbo.ContactForm values ('Lea','lea1@hotmail.com', 'Pyetje')

create table dbo.PreferencatETel (

 Id int identity (1,1),
 Name varchar(500),
 Preferences varchar(500),
 Quantity int ,
 Storage int ,
 Extra varchar(500)
)
insert into dbo.PreferencatETel values ('Iphone x','Rose gold max', '2','64','none')

  create table Phone (
  ID int identity(1,1),
  Name varchar(500),
  Company varchar(500),
  Preferences varchar(500),
  Other varchar(500),
  )

  select * from dbo.Phone
  insert into dbo.Phone values ('Iphone','Apple','','none')


  --Krijimi  i pjesve te pc builder
  create table dbo.Procesori(
Id int identity(1,1),
LlojiFirmes varchar(500),
Gjenerata varchar(500),
Specifika varchar(500),
Qmimi float
) 
insert into dbo.Procesori values ('Intel','Gen9', 'I9',133.22)
select *from dbo.Procesori

create table dbo.Cooling(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
Qmimi float
) 
insert into dbo.Cooling values ('Jonsbo','CR-110ARGB FAN00068',46)
select *from dbo.Cooling

create table dbo.Motherboard(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
Qmimi float
) 
insert into dbo.Motherboard values ('Asus','rog strix b460-g gaming micro atx',200)
select *from dbo.Motherboard

create table dbo.RAM(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
GB varchar(500),
Qmimi float
) 
insert into dbo.RAM values ('Apacer','2666Mhz','8GB',52.5)
select *from dbo.RAM

create table dbo.RAM2(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
GB varchar(500),
Qmimi float
) 
insert into dbo.RAM2 values ('Apacer','2666Mhz','8GB',52.5)
select *from dbo.RAM2

create table dbo.SolidStateDrive(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
GB varchar(500),
Qmimi float
) 
insert into dbo.SolidStateDrive values ('Kioxia','SSD00017','240GB',40.5)
select *from dbo.SolidStateDrive

create table dbo.HardDiskDrive(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
GB varchar(500),
Qmimi float
) 
insert into dbo.HardDiskDrive values ('Toshiba','P300','1TB',40.5)
select *from dbo.HardDiskDrive

create table dbo.GraphicsCard(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
GB varchar(500),
Qmimi float
) 
insert into dbo.GraphicsCard values ('Nividia','GTX 1050 Ti','4GB',300)
select *from dbo.GraphicsCard

create table dbo.PowerSupply(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
KW varchar(500),
Qmimi float
) 
insert into dbo.PowerSupply values ('RPC','PSU000024','450W',15)
select *from dbo.PowerSupply

create table dbo.CaseN(
Id int identity(1,1),
LlojiFirmes varchar(500),
Verzioni varchar(500),
Tipi varchar(500),
Qmimi float
) 
insert into dbo.CaseN values ('NZCT','CAS000033','MiniTower',105)
select *from dbo.CaseN



