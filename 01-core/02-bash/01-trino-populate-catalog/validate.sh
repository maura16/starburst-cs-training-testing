#!/usr/bin/env bats

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "$2" solution/$1 > /dev/null; }

@test "Format of catalog/schema/table" {
  contains out '"memory","schema_05","table_10"'
}

@test "Size of at least 50" {
  [[ "$(cat solution/out | wc -l)" -ge "50" ]]
}
