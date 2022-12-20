#! /bin/bash

query="show catalogs"


response=$(curl -s -X POST localhost:8080/v1/statement -H 'X-Trino-User: user' -d "$query")
echo $response

state=$(echo $response | jq -r '.stats.state' )
nextUri=$(echo $response | jq -r '.nextUri' )
echo $nextUri

while [[ $state != 'FINISHED' ]]
do
  response=$(curl -s -H 'X-Trino-User: user' $nextUri)

  #write to stdout each server response
  echo $response 
  state=$(echo $response | jq -r '.stats.state')
  nextUri=$(echo $response | jq -r '.nextUri')
  data=$(echo $response | jq -r '.data')
  if [ "$data" != "null" ]; then

    #write query output as obtained in data field
    output=$data
  fi

done

echo $output 
