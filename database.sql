CREATE DATABASE users_database;

--\c into todo_database
CREATE TABLE users(
    name_id SERIAL PRIMARY KEY,
    name  VARCHAR(50)
);