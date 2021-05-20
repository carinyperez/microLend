CREATE TABLE users(
	id SERIAL PRIMARY KEY, 
	username VARCHAR(30) NOT NULL , 
	email VARCHAR(40) NOT NULL,
	password VARCHAR(50) NOT NULL
)

INSERT INTO users(username, email, password)
VALUES('cariny', 'cariny@gmail.com', '123456')