create table dbo.LlojeteProdukteve(
IdeProduktit int identity(1,1),
LlojiIProduktit varchar(500)
)

select *from dbo.LlojeteProdukteve

insert into dbo.LlojeteProdukteve values
('Laptop')