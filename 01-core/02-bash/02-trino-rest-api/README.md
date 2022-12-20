# CORE / BASH / Trino REST API

## Pre-requisites
- Understand [curl](https://curl.se/docs/) and [REST](https://restfulapi.net/)
- Read [Trino REST](https://trino.io/docs/current/develop/client-protocol.html)
- [jq](https://stedolan.github.io/jq/)
- Use `minimal` docker demo

## Task
Write a script that submits a simple `show catalogs` query through Trino REST API.
- write to stdout each server response
- finally write the query output as obtained in the `data` field

Write the answer to `solution/out` file.

<details>
  <summary>Hints</summary>
  
  1. Create script file `solution/trino_rest_api.sh`
  2. Use `jq` to save the response attributes we are interested in to a variable (i.e. `$(echo $response | jq -r '.nextUri')`) 
  3. Leverage a [`while` loop](https://www.geeksforgeeks.org/bash-scripting-while-loop/) to continue fetching query results and break out of the loop when the response `state='FINISHED'`
  4. Run the script (`trino_rest_api.sh`) and redirect [stdout](https://linuxhint.com/bash_stdin_stderr_stdout/) to `solution/out`:
</details>
