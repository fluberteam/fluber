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
$1,
$2,
$3,
$4,
$5,
$6,
$7,
$8,
$9,
$10,
$11,
$12
)

returning email, status;