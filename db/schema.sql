DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    foreign key (manager_id) references employee(id),
    foreign key (role_id) references employee(id)
);

DROP TABLE employee;

SELECT * FROM department;

SELECT * FROM role;

SELECT * FROM employee;
INSERT INTO employee ( first_name, last_name, role_id, manager_id)
Value ("Chay" ,"Williams", 4, 6);

SELECT * FROM department;
INSERT INTO department (name)
Value ("Sale_Lead"), ("Salesperson"), ("Software_Engineer"), ("Account_Manager" ), ("Accountant");


