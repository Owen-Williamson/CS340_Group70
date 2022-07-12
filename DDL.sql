
DROP TABLE TruckDrivers;
DROP TABLE DeliveryOrders;
DROP TABLE Deliveries;
DROP TABLE Orders;
DROP TABLE Trucks;
DROP TABLE Drivers;
DROP TABLE Facilities;
DROP TABLE Customers;

CREATE OR REPLACE TABLE Customers (
  customer_id int NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  email varchar(45) NOT NULL,

  PRIMARY KEY (customer_id)
);

CREATE OR REPLACE TABLE Facilities (
  facility_id int NOT NULL AUTO_INCREMENT,
  customer_id int,
  location varchar(45) NOT NULL,
  name varchar(45) NOT NULL,

  PRIMARY KEY (facility_id),
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE OR REPLACE TABLE Trucks (
  truck_id int NOT NULL AUTO_INCREMENT,
  current_facility_id int,
  max_weight int NOT NULL, -- in pounds
  max_volume int NOT NULL, -- in cubic feet

  PRIMARY KEY (truck_id),
  FOREIGN KEY (current_facility_id) REFERENCES Facilities(facility_id)
);

CREATE OR REPLACE TABLE Drivers (
  driver_id int NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  email varchar(45) NOT NULL,
  late_deliveries int NOT NULL DEFAULT 0,
  early_deliveries int NOT NULL DEFAULT 0,

  PRIMARY KEY (driver_id)
);

CREATE OR REPLACE TABLE Orders (
  order_id int NOT NULL AUTO_INCREMENT,
  customer_id int,
  start_facility_id int,
  end_facility_id int,
  current_facility_id int,
  volume int NOT NULL,
  weight int NOT NULL,

  PRIMARY KEY (order_id),
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
  FOREIGN KEY (start_facility_id) REFERENCES Facilities(facility_id),
  FOREIGN KEY (end_facility_id) REFERENCES Facilities(facility_id),
  FOREIGN KEY (current_facility_id) REFERENCES Facilities(facility_id)
);

CREATE OR REPLACE TABLE Deliveries (
  delivery_id int NOT NULL AUTO_INCREMENT,
  driver_id int NOT NULL,
  truck_id int NOT NULL,
  start_facility_id int NOT NULL,
  end_facility_id int NOT NULL,
  total_volume int NOT NULL,
  total_weight int NOT NULL,

  late tinyint(1),
  departure_time datetime,
  expected_arrival_time datetime,
  actual_arrival_time datetime,

  PRIMARY KEY (delivery_id),
  FOREIGN KEY (driver_id) REFERENCES Drivers(driver_id),
  FOREIGN KEY (truck_id) REFERENCES Trucks(truck_id),
  FOREIGN KEY (start_facility_id) REFERENCES Facilities(facility_id),
  FOREIGN KEY (end_facility_id) REFERENCES Facilities(facility_id)
);

CREATE OR REPLACE TABLE DeliveryOrders (
  delivery_id int NOT NULL,
  order_id int NOT NULL,
  FOREIGN KEY (delivery_id) REFERENCES Deliveries(delivery_id),
  FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE OR REPLACE TABLE TruckDrivers (
  driver_id int NOT NULL,
  truck_id int NOT NULL,
  FOREIGN KEY (driver_id) REFERENCES Drivers(driver_id),
  FOREIGN KEY (truck_id) REFERENCES Trucks(truck_id)
);

-- Create Customers --
INSERT INTO Customers (name, email)
VALUES ("Local Store Owner", "1253@gmail.com");

-- Create Facilities --

INSERT INTO Facilities (name, location, customer_id)
VALUES ("Corvallis Warehouse", "Corvallis OR", NULL);

INSERT INTO Facilities (name, location, customer_id)
VALUES ("Salem Warehouse", "Salem OR", NULL);

INSERT INTO Facilities (name, location, customer_id)
VALUES ("Corvallis Store", "Corvallis OR", (SELECT customer_id FROM Customers WHERE name="Local Store Owner"));

-- Create Drivers --

INSERT INTO Drivers (name, email, late_deliveries, early_deliveries)
VALUES ("Asher", "1264@gmail.com", 12, 87);

-- Create Trucks --

INSERT INTO Trucks (max_weight, max_volume, current_facility_id)
VALUES (56000, 8262, NULL);

-- Create Orders --

-- Create Deliveries --
