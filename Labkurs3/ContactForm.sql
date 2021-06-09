create table dbo.ContactForm(
Id int identity(1,1),
Name varchar(500),
Email varchar(500),
message varchar(500)) 
select *from dbo.ContactForm
insert into dbo.ContactForm values ('Lea','lea1@hotmail.com', 'Pyetje')