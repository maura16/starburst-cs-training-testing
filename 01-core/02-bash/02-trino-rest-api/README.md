# CORE / BASH / Trino REST API

## Pre-requisites
- Understand curl and REST
- Read [Trino REST](https://trino.io/docs/current/develop/client-protocol.html)
- [jq](https://stedolan.github.io/jq/)
- Use `minimal` docker demo

## Task
Write a script that submits a simple `show catalogs` query through Trino REST API.
- write to stdout each server response
- finally write the query output as obtained in the `data` field

Write the answer to `solution/query_result` file.