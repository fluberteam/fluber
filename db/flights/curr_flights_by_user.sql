select *
from flights as f
left join flight_detail as fd
on f.flight_num = fd.flight_num
where fd.user_id = ${user}
and (to_char(departure_time, 'MM-DD-YYYY HH:MM AM') > to_char(now(), 'MM-DD-YYYY HH:MI PM'))