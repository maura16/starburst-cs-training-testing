# Hive + MinIO

Step 1 - Spin up a SEP environment (393-e.3) that enables a Hive catalog that talks to the Minio object storage

- Leverage minio-hdfs docker demo here

Step 2 - Create a schema in your newly created Hive catalog

Step 3 - Use a CTAS statement to create a table test based off of tpch.tiny.orders

Step 4 - Run a query against the test table

## Validation

- Verify the correct properties exist in hive.properties file
- Run a query successfully against the hive catalog
- Quiz asking what is minIO, etc.
