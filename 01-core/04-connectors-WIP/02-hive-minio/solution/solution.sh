trino > hive_orders.txt <<EOF
CREATE SCHEMA IF NOT EXISTS hive.myschema;
CREATE TABLE IF NOT EXISTS hive.myschema.myorders AS SELECT * FROM tpch.tiny.orders;
SELECT * FROM hive.myschema.myorders WHERE orderpriority LIKE '%URGENT' ORDER BY totalprice DESC LIMIT 10;
EOF
