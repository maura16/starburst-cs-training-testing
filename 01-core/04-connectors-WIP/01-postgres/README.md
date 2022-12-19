# CORE / Connectors / PostgreSQL

## Pre-requisites
Docs Reference:

- [PostgreSQL Connector](https://docs.starburst.io/latest/connector/postgresql.html)
- [Starburst PostgreSQL Connector](https://docs.starburst.io/latest/connector/starburst-postgresql.html)

## Task
Configure Starburst to connect to PostgreSQL database.
- Copy `environment` folder to `solution` folder
- Use `docker-compose.yml` to spin up the environment
- Add and configure `postgres` catalog in Starburst
- Create a `myschema` schema
- Create an empty `mytable` table in the above schema
- Use a CTAS statement to create a table `orders_tiny` based off of `tpch.tiny.orders`
- Select first 5 records from `orders_tiny` table sorted by `orderkey` and dump the results to `solution/orders_tiny.txt` file
