#! /bin/bash

FILE='populate.sql'

echo > $FILE
for schema in 0{01..05}; do
  echo "CREATE SCHEMA memory.schema_$schema;" >> $FILE; 
  for table in 0{01..09} {10..10}; do 
    echo "CREATE TABLE memory.schema_$schema.table_$table as select 1 x;" >> $FILE; 
  done;
done;

trino -f $FILE
