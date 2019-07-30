select * from
flights as f
left join plane as p
on f.n_number = p.n_number
where p.certnumber = ${user}