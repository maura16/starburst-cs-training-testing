#!/usr/bin/env bats

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "*.crt" ./out/$1 > /dev/null; }

@test "Command name" {
  contains out 'starburst'
}

