

-- @block;
-- Select max order amount for a specific user
SELECT o.order_id, o.customer_id, MAX(total_amount)
FROM orders AS o
WHERE o.customer_id = 1
GROUP BY o.order_id
LIMIT 1;




-- @block
-- Select the most ordered product for a specific user
SELECT o.customer_id, oi.product_id, p.name, SUM(oi.quantity) 
FROM (
    SELECT o.order_id, o.customer_id 
    FROM orders AS o
    WHERE o.customer_id = 1
) o
LEFT JOIN order_items AS oi ON oi.order_id = o.order_id
LEFT JOIN products AS p ON P.product_id = oi.product_id
group by o.customer_id, oi.product_id, p.name
ORDER BY sum DESC
LIMIT 1







-- @block
SELECT c.category_id,
    c.name,
    sum
FROM (
        SELECT o.customer_id,
            oi.product_id,
            p.name,
            SUM(oi.quantity)
        FROM (
                SELECT o.order_id,
                    o.customer_id
                FROM orders AS o
                WHERE o.customer_id = 1
            ) o
            LEFT JOIN order_items AS oi ON oi.order_id = o.order_id
            LEFT JOIN products AS p ON P.product_id = oi.product_id
            group by o.customer_id,
                    oi.product_id,
                    p.name
            ORDER BY sum DESC
            LIMIT 1
    ) P
    LEFT JOIN product_category AS pc ON p.product_id = pc.product_id
    LEFT JOIN categories AS c ON c.category_id = pc.category_id

