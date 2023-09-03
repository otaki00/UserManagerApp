-- Insert data into the address table
INSERT INTO address (city, street, state)
VALUES
    ('New York', '123 Main St', 'NY'),
    ('Los Angeles', '456 Elm St', 'CA'),
    ('Chicago', '789 Oak St', 'IL');

-- Insert data into the customers table
INSERT INTO customers (address_id, name, email)
VALUES
    (1, 'John Doe', 'john@example.com'),
    (2, 'Jane Smith', 'jane@example.com'),
    (3, 'Alice Johnson', 'alice@example.com');

-- Insert data into the orders table
INSERT INTO orders (customer_id, order_date, total_amount)
VALUES
    (1, '2023-08-15 10:00:00', 150.00),
    (2, '2023-08-16 11:30:00', 200.00),
    (3, '2023-08-17 09:45:00', 75.50);

-- Insert data into the products table
INSERT INTO products (name, description, price)
VALUES
    ('Laptop', 'High-performance laptop', 1200.00),
    ('Smartphone', 'Latest smartphone model', 800.00),
    ('Headphones', 'Noise-canceling headphones', 150.00);

-- Insert data into the order_items table
INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES
    (1, 1, 2, 2400.00),
    (1, 2, 1, 800.00),
    (2, 1, 1, 1200.00);

-- Insert data into the categories table
INSERT INTO categories (name)
VALUES
    ('Electronics'),
    ('Accessories');

-- Insert data into the product_category table
INSERT INTO product_category (product_id, category_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 2);

-- Insert data into the reviews table
INSERT INTO reviews (product_id, customer_id, rating, comment)
VALUES
    (1, 1, 5, 'Great laptop for gaming.'),
    (1, 2, 4, 'Fast delivery.'),
    (2, 3, 3, 'Decent smartphone.');

-- Insert data into the suppliers table
INSERT INTO suppliers (name, address_id, contact_number)
VALUES
    ('Tech Supplies Inc.', 1, '555-1234'),
    ('Gadget World Ltd.', 2, '555-5678');

-- Insert data into the product_supplier table
INSERT INTO product_supplier (product_id, supplier_id)
VALUES
    (1, 1),
    (2, 1),
    (2, 2);