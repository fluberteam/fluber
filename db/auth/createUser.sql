insert into users
(
first_name,
last_name,
email,
password,
status,
address1,
address2,
city,
state,
zipcode,
phone,
operator_num
)
values (
${first_name},
${last_name},
${email},
${hash},
${status},
${address1},
${address2},
${city},
${state},
${zipcode},
${phone},
${operator_num}
)

returning email, status;