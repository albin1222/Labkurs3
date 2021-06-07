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