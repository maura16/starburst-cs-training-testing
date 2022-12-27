# CORE / BASH / Trino REST API

## Pre-requisites
- Understand [curl](https://curl.se/docs/) and [REST](https://restfulapi.net/)
- Read [Trino REST](https://trino.io/docs/current/develop/client-protocol.html)
- [jq](https://stedolan.github.io/jq/)
- Use `minimal` docker demo

## Task
Write a script that submits a simple `show catalogs` query through Trino REST API.
- Write each server response to stdout 
- Write the query output as obtained in the `data` field

Write the answer to `solution/query_result` file.

<details>
  <summary>Hints</summary>
  
  1. Leverage `jq` to save the response attributes we are interested in to a variable (see [using jq in a BASH script](https://devdojo.com/bobbyiliev/how-to-work-with-json-in-bash-using-jq#:~:text=of%20the%20values.-,jq%20in%20a%20BASH%20script,-Let%27s%20go%20ahead)) 
  2. Use a [`while` loop](https://www.geeksforgeeks.org/bash-scripting-while-loop/) to continuously fetch query results until the query has completed (break out of the loop when the response `state='FINISHED'`)
  3. Run the script and redirect [stdout](https://linuxhint.com/bash_stdin_stderr_stdout/) to `solution/query_result` for validation
</details>
