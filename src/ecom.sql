-- create database
CREATE DATABASE ecom;

--tables
CREATE TABLE users(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    type VARCHAR(100) NOT NULL,
    usertype VARCHAR(100) NOT NULL,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE catalogs(
    buyerId VARCHAR(100) PRIMARY KEY,
    FOREIGN KEY (buyerId) REFERENCES users(id),

);

CREATE TABLE products(
    catalogId VARCHAR(100),
    names VARCHAR(100),
    price VARCHAR(100),
    FOREIGN KEY (catalogId) REFERENCES catalogs(buyerId),
);

CREATE TABLE orders(
    buyerId VARCHAR(100) PRIMARY KEY,
    products VARCHAR(100)
);
