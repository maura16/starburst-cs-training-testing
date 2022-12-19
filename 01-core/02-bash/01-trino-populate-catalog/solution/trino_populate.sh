#! /bin/bash

FILE='populate.sql'

echo > $FILE
for schema in {01..5}; do
  echo "CREATE SCHEMA memory.schema_$schema;" >> $FILE; 
  for table in {01..10}; do 
    echo "CREATE TABLE memory.schema_$schema.table_$table as select 1 x;" >> $FILE; 
  done;
done;

trino -f $FILE
