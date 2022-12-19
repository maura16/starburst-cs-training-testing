# CORE / BASH / Trino populate data

## Pre-requisites
- Use `minimal` docker demo
- Install [Trino CLI](https://starburstsupport.force.com/s/starburst-software-download/Starburst_Software_Download__c/00B1U00000EK5bAUAT?tabset-29191=a17e6) on your machine under `trino`
- [How to install in PATH](https://apple.stackexchange.com/questions/41542/adding-a-new-executable-to-the-path-environment-variable)

## Task
When reproducing a metadata issue it is sometimes useful to replicate the same high number of schemas and/or tables.

Write a bash script that populates the `memory` catalog with sample schemas and tables.
- Create 5 schemas each containing 10 tables
- Expected format is `memory.schema_01.table_01`
- Run `collect.sh` upon completion to create `solution/out`

<details>
  <summary>Hints</summary>
  
  1. Create script file `solution/trino_populate.sh`
  2. Leverage [variables](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-5.html) and [for loops](https://phoenixnap.com/kb/bash-for-loop) in your script to create the SQL commands and append them to a file (i.e. `populate.sql`)
  3. Take advantage of the TRINO CLI [`--file` option](https://docs.starburst.io/latest/client/cli.html#batch-mode) to execute SQL statements in batch mode from the file we just populated
</details>

