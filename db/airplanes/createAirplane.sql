INSERT INTO plane(n_number, certnumber, img, engine_id, num_seats, restroom, flight_attn, refreshments, cruise_speed)
VALUES(
${n_number},
${certnumber},
${img},
${engine_id},
${num_seats},
${restroom},
${flight_attn},
${refreshments},
${cruise_speed}
);

SELECT * FROM plane
ORDER BY n_number ASC;