-- Data Manipulation Queries --

-- trucks
INSERT INTO Trucks (plate, max_weight, max_volume, current_facility_id)
VALUES (:plate, :max_weight, :max_volume, :cf_id);

-- drivers
INSERT INTO Drivers (name, email, late_deliveries, early_deliveries)
VALUES (:name, :email, :ld, :ed);

-- facilities
INSERT INTO Facilities (name, location, customer_id)
VALUES (:name, :location, :cid);

-- customers
INSERT INTO Customers (name, email)
VALUES (:name, :email);

-- Deliveries
INSERT INTO Deliveries (departure_time, expected_arrival_time, actual_arrival_time, total_volume, total_weight,
                        truck_id, driver_id, start_facility_id, end_facility_id)
VALUES (:dt, :eat, :aat, :total_volume, :total_weight, :t_id, :d_id, :sf_id, :ef_id);

-- Orders
INSERT INTO Orders (customer_id, volume, weight, start_facility_id, end_facility_id, current_facility_id)
VALUES (:c_if, :volume, :weight, :sf_id, :ef_id, :cf_id);

-- TruckDrivers
INSERT INTO TruckDrivers (truck_id, driver_id)
VALUES (:t_rd, :d_id);

-- DeliveryOrders
INSERT INTO DeliveryOrders (delivery_id, order_id)
VALUES (:d_id, :o_id);
