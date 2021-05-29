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
