
CREATE TABLE Customers (
  customer_id int NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  email varchar(45) NOT NULL,

  PRIMARY KEY (customer_id)
);

CREATE TABLE Facilities (
  facility_id int NOT NULL AUTO_INCREMENT,
  customer_id int,
  location varchar(45) NOT NULL,
  name varchar(45) NOT NULL,

  PRIMARY KEY (facility_id),
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Trucks (
  truck_id int NOT NULL AUTO_INCREMENT,
  max_weight int NOT NULL,
  max_volume int NOT NULL,
  current_facility_id int,

  PRIMARY KEY (truck_id)
  FOREIGN KEY (current_facility_id) REFERENCES Facility(facility_id)
);

CREATE TABLE Drivers (
  driver_id int NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  email varchar(45) NOT NULL,
  late_deliveries int NOT NULL DEFAULT 0,
  early_deliveries int NOT NULL DEFAULT 0,

  PRIMARY KEY (driver_id)
);

CREATE TABLE ORDERS (
  order_id int NOT NULL AUTO_INCREMENT,
  customer_id int NOT NULL,
  start_facility_id int NOT NULL,
  end_facility_id int NOT NULL,
  current_facility_id int,
  volume int NOT NULL,
  weight int NOT NULL,

  PRIMARY KEY (order_id),
  FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
  FOREIGN KEY (start_facility_id) REFERENCES Facilites(facility_id),
  FOREIGN KEY (end_facility_id) REFERENCES Facilites(facility_id),
  FOREIGN KEY (current_facility_id) REFERENCES Facilites(facility_id)
);

CREATE TABLE Deliveries (
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
  FOREIGN KEY (driver_id) REFERENCES DRIVERS(driver_id),
  FOREIGN KEY (truck_id) REFERENCES TRUCKS(truck_id),
  FOREIGN KEY (start_facility_id) REFERENCES Facilites(facility_id),
  FOREIGN KEY (end_facility_id) REFERENCES Facilites(facility_id)
);

CREATE TABLE DeliveryOrders (
  delivery_id int NOT NULL,
  order_id int NOT NULL

  FOREIGN KEY (delivery_id) REFERENCES Deliveries(delivery_id),
  FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE TABLE TruckDrivers (
  driver_id int NOT NULL,
  truck_id int NOT NULL

  FOREIGN KEY (driver_id) REFERENCES Drivers(driver_id),
  FOREIGN KEY (truck_id) REFERENCES Trucks(truck_id)
);
