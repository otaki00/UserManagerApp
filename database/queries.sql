

-- Select max order amount for a specific user
SELECT o.order_id, o.order_date, o.total_amount, c.name
FROM orders AS o, customers AS c
WHERE o.total_amount = (
    SELECT MAX(total_amount)
    FROM orders 
	WHERE c.customer_id = o.customer_id
);


-- Select the most ordered product for a specific user
SELECT 
	p.product_id,p.name, COUNT(quantity) 
    FROM (
		SELECT o.order_id
		FROM orders as o
		WHERE o.customer_id = 1
	) customer_orders
	JOIN order_items as oi ON oi.order_id = customer_orders.order_id
	JOIN products as p ON oi.product_id = p.product_id
	 GROUP BY p.product_id, p.name
	 LIMIT 1;


-- Select category name and the name of the customer who bought more from that category
SELECT
    cat.name AS category_name,
    c.name AS customer_name,
    MAX(cat_order_count) AS max_category_order_count
FROM (
    SELECT
        o.customer_id,
        pc.category_id,
        COUNT(DISTINCT o.order_id) AS cat_order_count,
        RANK() OVER (PARTITION BY pc.category_id ORDER BY COUNT(DISTINCT o.order_id) DESC) AS rnk
    FROM orders AS o
    JOIN customers AS c ON o.customer_id = c.customer_id
    JOIN order_items AS oi ON o.order_id = oi.order_id
    JOIN products AS p ON oi.product_id = p.product_id
    JOIN product_category AS pc ON p.product_id = pc.product_id
    GROUP BY o.customer_id, pc.category_id
) AS ranked
JOIN categories AS cat ON ranked.rnk = 1 AND ranked.category_id = cat.category_id
JOIN customers AS c ON ranked.customer_id = c.customer_id
GROUP BY cat.name, c.name;

adasd

