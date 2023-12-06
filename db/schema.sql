DROP DATABASE IF EXISTS to_do_list;
CREATE DATABASE to_do_list;

\c to_do_list;

DROP TABLE IF EXISTS to_dos; 
CREATE TABLE to_dos(
    id SERIAL PRIMARY KEY,
    item TEXT,
    complete BOOLEAN
);