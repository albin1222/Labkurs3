create table Phone (
  ID int identity(1,1),
  Name varchar(500),
  Company varchar(500),
  Preferences varchar(500),
  Other varchar(500),
  )

  select * from dbo.Phone
  insert into dbo.Phone values ('Iphone','Apple','','none')