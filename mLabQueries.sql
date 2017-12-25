USE Lab;

CREATE TABLE Employees(
	id INT AUTO_INCREMENT, 
    name Varchar(30),
	email Varchar(30) UNIQUE,
	address Varchar(50),
	salary INT,
	dob Varchar(30),
	age Varchar(30),
	contact Varchar(30),
	gender Varchar(10),
	branchName Varchar(30),
	password  Varchar(30),
    post  Varchar(30),
    status INT,
    PRIMARY KEY(id)
);

SELECT * FROM Employees;

DROP TABLE Employees;
INSERT INTO Employees(name,email,address,salary,dob,age,contact,gender,branchName,password,post,status)
VALUES('name','email','address',10,'dob','age','contact','gender','branchName','password','post',1);

CREATE TABLE Qualification(
	id INT, FOREIGN KEY(id) REFERENCES Employees(id),
    degree Varchar(50),
    post Varchar(30)
);

INSERT INTO Qualification(id,degree,post) VALUES(1,'degree','doctor');
SELECT * FROM Qualification;

SELECT id FROM Employees WHERE email = 'doc@gmail.com';