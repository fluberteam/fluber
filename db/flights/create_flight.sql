INSERT INTO flights (
n_number,
dep_airport,
departure_time,
arr_airport,
arrival_time,
init_avail_seats,
curr_avail_seats,
price,
cutoff_time
)

VALUES (
${n_number},
${dep_airport},
${departure_time},
${arr_airport},
${arrival_time},
${init_avail_seats},
${curr_avail_seats},
${price},
${cutoff_time}
)

RETURNING *;




-- DUMMY TESTING DATA

-- {
-- 	"n_number": "what is n number", 
-- 	"dep_airport": "3f24s",
-- 	"departure_time": "08/14/1998",
-- 	"arr_airport": "2if29",
-- 	"arrival_time": "08/14/1998",
-- 	"init_avail_seats": "23",
-- 	"curr_avail_seats": "8",
-- 	"price": "8651",
-- 	"cutoff_time": "23542"
-- }