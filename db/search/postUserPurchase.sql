insert into flight_detail (flight_num, user_id, num_seats)
values (${flight_num}, ${user_id}, ${num_seats});
update flights
set curr_avail_seats = (curr_avail_seats - ${num_seats})
where flight_num = ${flight_num};