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