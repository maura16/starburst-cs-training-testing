#! /bin/bash

# query="$@"
query="show catalogs"


response=$(curl -s -X POST localhost:8080/v1/statement -H 'X-Trino-User: user' -d "$query")
echo $response

state=$(echo $response | jq -r '.stats.state' )
nextUri=$(echo $response | jq -r '.nextUri' )
echo $nextUri

while [[ $state != 'FINISHED' ]]
do
  response=$(curl -s -H 'X-Trino-User: myuser' $nextUri)
  echo $response
  # echo $response | jq .

  state=$(echo $response | jq -r '.stats.state')
  nextUri=$(echo $response | jq -r '.nextUri')
  data=$(echo $response | jq -r '.data')
  if [ "$data" != "null" ]; then
    output=$data
  fi

done

echo 
echo $output

