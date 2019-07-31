select f.flight_num, f.n_number, u.first_name, u.last_name, u.email, fl.num_seats from flights as f
right join flight_detail as fl
on fl.flight_num = f.flight_num
left join users as u
on u.user_id = fl.user_id
left join plane as p
on p.n_number = f.n_number
left join operators as o
on o.certnumb = p.certnumber
where o.certnumb = ${operator_num}