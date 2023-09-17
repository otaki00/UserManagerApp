
CREATE TABLE IF NOT EXISTS address (
	  address_id SERIAL NOT NULL
	, city VARCHAR(20) NOT NULL
	, street VARCHAR(40) NOT NULL
	, state VARCHAR(30) NOT NULL
	, PRIMARY KEY(address_id)
);


DROP TABLE IF EXISTS customer;

CREATE TABLE IF NOT EXISTS customers (
	  customer_id SERIAL NOT NULL
	, address_id INT NOT NULL
	, name VARCHAR(20) NOT NULL 
	, email VARCHAR(20) NOT NULL
	, PRIMARY KEY(customer_id)
	, FOREIGN KEY(address_id)
	    REFERENCES address(address_id)
	    ON DELETE CASCADE
);




CREATE TABLE IF NOT EXISTS orders (
	  order_id SERIAL NOT NULL 
	, customer_id INT NOT NULL
	, order_date TIMESTAMP NOT NULL
	, total_amount DOUBLE PRECISION NOT NULL
	, PRIMARY KEY(order_id)
	, FOREIGN KEY(customer_id)
	       REFERENCES customers (customer_id)
	       ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS products (
	  product_id SERIAL NOT NULL
	, name VARCHAR(50) NOT NULL
	, description VARCHAR NOT NULL
	, price DOUBLE PRECISION NOT NULL
	, PRIMARY KEY(product_id)
);


CREATE TABLE IF NOT EXISTS order_items (
	  order_id INT NOT NULL
	, product_id INT NOT NULL
	, quantity INT NOT  NULL
	, price DOUBLE PRECISION NOT NULL
	, FOREIGN KEY(order_id) 
	    REFERENCES orders(order_id)
	    ON DELETE CASCADE
	, FOREIGN KEY(product_id)
	    REFERENCES products(product_id)
	    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS categories (
	  category_id SERIAL NOT NULL
	, name VARCHAR(50) NOT NULL 
	, PRIMARY KEY(category_id)
);

CREATE TABLE IF NOT EXISTS product_category (
	  product_category_id SERIAL NOT NULL
	, product_id INT NOT NULL 
	, category_id INT NOT NULL 
	, PRIMARY KEY(product_category_id)
	, FOREIGN KEY(product_id)
	    REFERENCES products(product_id)
	    ON DELETE CASCADE
	, FOREIGN KEY(category_id)
	    REFERENCES categories(category_id)
	    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reviews (
	  review_id SERIAL NOT NULL
	, product_id INT NOT NULL
	, customer_id INT NOT NULL
	, rating INT NOT NULL 
	, comment VARCHAR DEFAULT 'no comment !'
	, PRIMARY KEY(review_id) 
	, FOREIGN KEY(product_id)
	    REFERENCES products(product_id)
	    ON DELETE CASCADE
	, FOREIGN KEY(customer_id)
	    REFERENCES customers(customer_id)
	    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS suppliers (
	  suppleir_id SERIAL NOT NULL
	, name VARCHAR(50) NOT NULL
	, address_id INT NOT NULL 
	, contact_number VARCHAR(20) NOT NULL
	, PRIMARY KEY(suppleir_id)
	, FOREIGN KEY(address_id)
	    REFERENCES address(address_id)
	    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS product_supplier (
	  product_supplier_id SERIAL NOT NULL
	, product_id INT NOT NULL
	, supplier_id INT NOT NULL
	, PRIMARY KEY(product_supplier_id)
	, FOREIGN KEY(product_id)
	    REFERENCES products (product_id)
	    ON DELETE CASCADE
	, FOREIGN KEY(supplier_id)
	    REFERENCES suppliers (suppleir_id)
	    ON DELETE CASCADE
);
