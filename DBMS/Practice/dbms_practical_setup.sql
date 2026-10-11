-- DBMS Practical Practice Database (MySQL 8.x)
-- Run this script first. It creates a fresh database and sample data.

CREATE DATABASE IF NOT EXISTS DBMS_Practice_New;
USE DBMS_Practice_New;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS OrderItem;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Supplier;
DROP TABLE IF EXISTS Customer;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(60) NOT NULL,
    City VARCHAR(40) NOT NULL,
    Age INT CHECK (Age >= 18),
    Email VARCHAR(100) UNIQUE
);

CREATE TABLE Category (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(40) NOT NULL UNIQUE
);

CREATE TABLE Supplier (
    SupplierID INT PRIMARY KEY,
    SupplierName VARCHAR(60) NOT NULL,
    City VARCHAR(40) NOT NULL
);

CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(80) NOT NULL,
    CategoryID INT,
    SupplierID INT,
    Price DECIMAL(10,2) NOT NULL CHECK (Price > 0),
    Stock INT NOT NULL CHECK (Stock >= 0),
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID),
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT NOT NULL,
    OrderDate DATE NOT NULL,
    Status VARCHAR(20) NOT NULL CHECK (Status IN ('Placed','Shipped','Delivered','Cancelled')),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);

CREATE TABLE OrderItem (
    OrderID INT,
    ProductID INT,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    UnitPrice DECIMAL(10,2) NOT NULL CHECK (UnitPrice > 0),
    PRIMARY KEY (OrderID, ProductID),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

INSERT INTO Customer (CustomerID, CustomerName, City, Age, Email) VALUES
(1, 'Aanya Kapoor', 'Delhi', 21, 'aanya@example.com'),
(2, 'Vihaan Mehta', 'Mumbai', 29, 'vihaan@example.com'),
(3, 'Sara Khan', 'Dehradun', 24, 'sara@example.com'),
(4, 'Kabir Joshi', 'Pune', 35, 'kabir@example.com'),
(5, 'Meera Nair', 'Delhi', 27, 'meera@example.com'),
(6, 'Arjun Rao', 'Jaipur', 31, 'arjun@example.com'),
(7, 'Tara Singh', 'Chandigarh', 22, 'tara@example.com'),
(8, 'Dev Malhotra', 'Lucknow', 42, 'dev@example.com'),
(9, 'Isha Patel', 'Mumbai', 19, 'isha@example.com');

INSERT INTO Category (CategoryID, CategoryName) VALUES
(1, 'Electronics'),
(2, 'Books'),
(3, 'Home'),
(4, 'Fitness'),
(5, 'Stationery');

INSERT INTO Supplier (SupplierID, SupplierName, City) VALUES
(1, 'NovaTech', 'Delhi'),
(2, 'ByteWorks', 'Bengaluru'),
(3, 'PaperHouse', 'Jaipur'),
(4, 'HomeEase', 'Pune'),
(5, 'Unify Supplies', 'Mumbai');

INSERT INTO Product (ProductID, ProductName, CategoryID, SupplierID, Price, Stock) VALUES
(1001, 'Laptop', 1, 1, 65000.00, 12),
(1002, 'Wireless Mouse', 1, 1, 800.00, 80),
(1003, 'Mechanical Keyboard', 1, 2, 2500.00, 35),
(1004, 'SQL Fundamentals', 2, 3, 750.00, 40),
(1005, 'Python in Practice', 2, 3, 950.00, 25),
(1006, 'Desk Lamp', 3, 4, 1200.00, 18),
(1007, 'Yoga Mat', 4, 4, 900.00, 50),
(1008, 'Dumbbell Set', 4, 2, 2200.00, 8),
(1009, 'Monitor', 1, 2, 18000.00, 6),
(1010, 'Webcam', 1, 2, 3500.00, 20);

INSERT INTO Orders (OrderID, CustomerID, OrderDate, Status) VALUES
(5001, 1, '2026-09-01', 'Delivered'),
(5002, 2, '2026-09-03', 'Shipped'),
(5003, 3, '2026-09-04', 'Delivered'),
(5004, 4, '2026-09-07', 'Placed'),
(5005, 1, '2026-09-12', 'Cancelled'),
(5006, 5, '2026-09-15', 'Delivered'),
(5007, 6, '2026-09-17', 'Shipped'),
(5008, 3, '2026-09-20', 'Placed'),
(5009, 2, '2026-10-01', 'Delivered');

INSERT INTO OrderItem (OrderID, ProductID, Quantity, UnitPrice) VALUES
(5001, 1001, 1, 66000.00),
(5001, 1002, 2, 800.00),
(5002, 1004, 1, 750.00),
(5002, 1003, 1, 2500.00),
(5003, 1002, 1, 780.00),
(5003, 1005, 2, 950.00),
(5004, 1006, 2, 1200.00),
(5004, 1007, 1, 900.00),
(5005, 1010, 1, 3500.00),
(5006, 1004, 3, 720.00),
(5007, 1001, 1, 64000.00),
(5007, 1003, 2, 2400.00),
(5008, 1005, 1, 950.00),
(5008, 1002, 1, 800.00),
(5009, 1010, 2, 3300.00);

-- Setup complete. Suggested first check:
-- SELECT * FROM Customer;
-- SELECT * FROM Product;
