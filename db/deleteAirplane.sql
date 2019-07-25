DELETE FROM plane
WHERE n_number = $1;

SELECT * FROM plane
ORDER BY n_number asc;