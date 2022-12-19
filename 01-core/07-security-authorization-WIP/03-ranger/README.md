# Ranger

Step 1 - Provision Ranger using Starburst-Ranger Helm chart 399.0.0

Step 2 - Provision Starburst-Enterprise with 1 coordinator and 1 worker using Starburst-Enterprise Helm chart 399.0.0.

- No authentication is enabled in the above environment, meaning any user should be able to log in to the Starburst UI without a password required

Allow user 'user1' to run `select * from tpch.tiny.orders limit 10` in this cluster.

New hires can play around with defining other privileges, such as limiting access to a certain tables, schemas, etc.

## Validation

- Validation can be to check the config.properties file to see if the correct properties are included for BIAC
- Run a query as a user to see if the proper access is granted / denied
