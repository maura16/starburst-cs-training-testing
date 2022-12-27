# Hive + MinIO

## Pre-requisites
Docs reference: 
- [Starburst Hive Connector](https://docs.starburst.io/latest/connector/starburst-hive.html)
- [MinIO storage support](https://docs.starburst.io/latest/connector/starburst-minio.html)

## Task
Configure Starburst to connect to a Hive catalog that talks to the MinIO object storage.
- Spin up a SEP environment (393-e.3) using `minio-hdfs` docker demo
- Create a `myschema` schema in your newly created Hive catalog
- Use a CTAS statement to create a `myorders` test table based off of `tpch.tiny.orders` 
- Run a query against the `myorders` table that returns data of only `URGENT` priorities ordered by highest total price and limited to 10 records. Dump the results to `solution/hive_orders.txt` file

## Validation

- Verify the correct properties exist in hive.properties file
- Run a query successfully against the hive catalog
- Quiz asking what is minIO, etc.
