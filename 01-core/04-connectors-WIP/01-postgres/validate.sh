#!/usr/bin/env bats

## Validation
# - Verify properties exist in postgres.properties file
# - Verify a query can execute successfully against the postgres catalog

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "$2" solution/$1 > /dev/null; }

@test "postgres.properties contents" {
  contains postgres.properties 'connector.name=postgresql'
}

@test "orders_tiny.txt contents" {
  contains orders_tiny.txt '"1","370","O","172799.49"'
  contains orders_tiny.txt '"5","445","F","105367.67"'
}
