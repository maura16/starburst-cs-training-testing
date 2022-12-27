#!/usr/bin/env bats

## Validation
# - Verify properties exist in postgres.properties file
# - Verify a query can execute successfully against the postgres catalog

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "$2" solution/$1 > /dev/null; }

@test "hive_orders.txt contents" {
  contains hive_orders.txt '"44707","1013","O","431771.98"'
  contains hive_orders.txt '"11296","832","F","378166.33"'
}

