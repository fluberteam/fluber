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
);


insert into users (first_name, last_name, email, password, status)
values ('Grant', 'Fox', 'granttfox@gmail.com', '$2a$10$cDMnTGsMhtHCAHq84i1Wz.CWUwKXfB17oCFNbzq7H63tt.0c7woB2', 'a');

insert into users (first_name, last_name, email, status)
values ('Alma', 'Powell', 'alma111000@gmail.com', '$2a$10$cDMnTGsMhtHCAHq84i1Wz.CWUwKXfB17oCFNbzq7H63tt.0c7woB2', 'a');

insert into users (first_name, last_name, email, status)
values ('Todd', 'Hipps', 'thippy@aol.com', '$2a$10$cDMnTGsMhtHCAHq84i1Wz.CWUwKXfB17oCFNbzq7H63tt.0c7woB2', 'a');

insert into users (first_name, last_name, email, status)
values ('Tyler', 'Thompson', 'alpinetyler@gmail.com', '$2a$10$cDMnTGsMhtHCAHq84i1Wz.CWUwKXfB17oCFNbzq7H63tt.0c7woB2', 'a');