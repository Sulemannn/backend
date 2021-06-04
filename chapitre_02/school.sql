-- STUDENTS --

CREATE TABLE IF NOT EXISTS students (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  	Name VARCHAR(30),
    Ville VARCHAR(30)
);

INSERT INTO students (Name, Ville) VALUES 

("Véronique", "Paris"),
("Steeven", "Lyon"),
("Marc", "Marseille"),
("Nour", "Lyon"),
("Romain", "Paris"),
("Sophie", "Paris")

-- LANGUAGES --

CREATE TABLE IF NOT EXISTS languages (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(30)
)

INSERT INTO languages (name) VALUES 

("French"),
("English"),
("German"),
("Spanish"),
("Mandarin")

-- FAVORITES --

CREATE TABLE IF NOT EXISTS favorites (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    Class VARCHAR(30),
    Sport VARCHAR(30),
    Student_ID VARCHAR(30)
)


INSERT INTO favorites (Class, Sport, Student_ID) VALUES 

("Maths", "Cricket", 2),
("Music", "Hip-Hop", 6),
("Arts", "Boxing", 1),
("Literature", "Tennis", 3),
("Computer science", "Tennis", 5),
("Arts", "Baseball", 4)

-- STUDENTS LANGUAGES --

CREATE TABLE IF NOT EXISTS students_languages (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    Student_ID INT,
    Language_ID INT
)

INSERT INTO favorites (Student_ID, Language_ID) VALUES 

(1, 1),
(1, 2),
(2, 1),
(2, 3),
(3, 1),
(4, 1),
(4, 2),
(4, 4),
(4, 5),
(5, 1),
(6, 1),
(6, 1),
(6, 2),
(6, 3)

-- RAPPORT lvl 1 --

SELECT * FROM students where ID=3
SELECT * FROM students where ID=6
SELECT * 