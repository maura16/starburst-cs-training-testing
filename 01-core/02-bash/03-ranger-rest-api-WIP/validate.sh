#!/usr/bin/env bats

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "$2" solution/$1 > /dev/null; }

@test "Query states" {
  contains out 'policy'
}
