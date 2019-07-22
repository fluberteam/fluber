create table flights 
(
flight_num serial primary key,
n_number varchar(50),
dep_airport varchar(5),
departure_time date,
arr_airport varchar(5),
arrival_time date,
init_avail_seats int,
curr_avail_seats int,
price int,
cutoff_time int
)