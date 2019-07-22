create table plane_type (
type_id serial primary key,
engine_id varchar(2),
engine_desc varchar(100)
);

insert into plane_type (engine_id, engine_desc)
values ('SE', 'Single Engine Turboprop');

insert into plane_type (engine_id, engine_desc)
values ('ME', 'Multi Engine Turboprop');

insert into plane_type (engine_id, engine_desc)
values ('TJ', 'Turbo Jet');

