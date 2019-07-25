UPDATE flights
SET
    n_number = ${n_number},
    dep_airport = ${dep_airport},
    departure_time = ${departure_time},
    arr_airport = ${arr_airport},
    arrival_time = ${arrival_time},
    init_avail_seats = ${init_avail_seats},
    curr_avail_seats = ${curr_avail_seats},
    price = ${price},
    cutoff_time = ${cutoff_time}

WHERE flight_num = ${flight_num};

SELECT * FROM flights;