select f.flight_num, f.dep_airport, f.arr_airport, f.arrival_time, f.curr_avail_seats,
f.price, f.cutoff_time, a.name, a.latitude_deg, a.longitude_deg, trim(a.iso_region, 'US') state,
o.operator_name, p.n_number, p.certnumber, p.img, p.num_seats, p.restroom, p.flight_attn, p.refreshments, p.cruise_speed, pt.engine_desc
from
flights as f
left join plane as p
on f.n_number = p.n_number
left join airports as a
on a.iata_code = f.dep_airport
left join plane_type as pt
on upper(pt.engine_id) = upper(p.engine_id)
left join operators as o
on o.certnumb = p.certnumber
where
f.dep_airport = ${depFrom}
and f.arr_airport = ${arriveTo}
and f.departure_time = ${datePicked}
and f.curr_avail_seats >= ${seatAvailable};