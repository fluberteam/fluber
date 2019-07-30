UPDATE users
SET
first_name = ${first_name},
last_name = ${last_name},
email = ${email},
status = ${status},
address1 = ${address1},
address2 = ${address2},
city = ${city},
state = ${state},
zipcode = ${zipcode},
phone = ${phone},
operator_num = ${operator_num}
WHERE user_id = ${user_id};

