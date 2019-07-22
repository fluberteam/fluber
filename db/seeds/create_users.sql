create table users (
user_id serial primary key,
first_name varchar(50),
last_name varchar(50),
email varchar(100),
password varchar,
status varchar(1),
address1 varchar(150),
address2 varchar(150),
city varchar(100),
state varchar(30),
zipcode varchar(15),
phone varchar(25),
operator_num varchar(100)
)