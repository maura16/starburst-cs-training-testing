# Insights

Docs Reference:

- <https://docs.starburst.io/latest/insights/index.html>
- https://docs.starburst.io/starburst-enterprise/admin-topics/web-ui-configuration.html

Step 1 - Set Up the [Query Logger](https://docs.starburst.io/latest/admin/query-logger.html) with a backing PostgreSQL DB on your SEP environment (393-e.3)

Step 2 - Insights Configuration

- Follow the [Insights Configuration
docs](https://docs.starburst.io/latest/insights/configuration.html) to configure
Insights on your cluster

Step 3 - Run a few queries

- Maybe write an automated script for this so that there is some data the new hire can look through when looking at query details, cluster history, usage metrics etc.

## Validation

- Validation can be to check the config.properties file to see if the correct properties are included for Query Logger + Insights.
- Quiz of questions of what information can be found in Insights / what it means
        - Take ideas from Query Details, Usage Metrics, etc.
