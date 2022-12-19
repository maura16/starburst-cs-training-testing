# CORE / BASH / Trino populate data

## Pre-requisites
- Use `minimal` docker demo
- Install Trino CLI on your machine under `trino`
- [How to install in PATH](https://apple.stackexchange.com/questions/41542/adding-a-new-executable-to-the-path-environment-variable)

## Task
When reproducing a metadata issue it is sometimes useful to replicate the same high number of schemas and/or tables.

Write a script that populates the `memory` catalog with sample schemas and tables.
- Create 5 schemas each containing 10 tables
- Expected format is `memory.schema_01.table_01`
- Run `collect.sh` upon completion to create `solution/out`
