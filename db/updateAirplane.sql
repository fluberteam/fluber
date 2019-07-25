UPDATE plane
SET n_number = ${n_number},
certnumber = ${certnumber},
img = ${img},
engine_id = ${engine_id},
num_seats = ${num_seats},
restroom = ${restroom},
flight_attn = ${flight_attn},
refreshments = ${refreshments},
cruise_speed = ${cruise_speed}
WHERE n_number = ${n_number};

SELECT * FROM plane
ORDER BY n_number ASC;