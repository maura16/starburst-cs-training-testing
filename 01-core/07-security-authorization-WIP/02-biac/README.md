# Built-In Access Control (BIAC)

Docs Reference:

- [Built-in access contro configuration](https://docs.starburst.io/393-e/security/biac-overview.html#built-in-access-control-configuration)
- [Access control users and groups](https://docs.starburst.io/393-e/security/biac-overview.html#access-control-users-and-groups)

Step 1 - Spin up a SEP environment (393-e.3) configured with BIAC, Insights and the Hive connector using the docs referenced above

Step 2 - Configure access control users and group (can provide more explanation here)

    starburst.access-control.authorized-users=admin
    starburst.access-control.authorized-groups=platform

Step 2 - Sign in to Insights as the sys admin role and create a new role `hive_users` that only have access to the Hive catalog. Users of this role should be granted all privileges against the Hive catalog (aka they will have access to all schemas and tables in Hive). Assign user `bee1` to this role.

To verify the correct privileges have been set, log out and log back in as user `bee1`.

New hires can play around with defining other privileges, such as limiting access to a certain tables, schemas, etc.

## Validation

- Validation can be to check the config.properties file to see if the correct properties are included for BIAC
- Run a query as a user to see if the proper access is granted / denied
