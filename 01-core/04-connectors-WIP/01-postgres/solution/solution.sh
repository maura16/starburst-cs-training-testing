trino > orders_tiny.txt <<EOF
CREATE SCHEMA IF NOT EXISTS postgres.myschema;
CREATE TABLE IF NOT EXISTS postgres.myschema.mytable (x int);
CREATE TABLE IF NOT EXISTS postgres.myschema.orders_tiny AS SELECT * FROM tpch.tiny.orders;
SELECT * FROM postgres.myschema.orders_tiny ORDER BY 1 LIMIT 5;
EOF

