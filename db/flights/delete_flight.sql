DELETE FROM flights
WHERE flight_num = ${flight_num};

SELECT * FROM flights
ORDER BY flight_num ASC;