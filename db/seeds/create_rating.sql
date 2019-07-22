create table rating (
rating_id serial primary key,
user_id int,
flight_num int,
rating int,
comments text
)