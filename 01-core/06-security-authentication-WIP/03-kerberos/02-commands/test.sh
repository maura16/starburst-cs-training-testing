#!/usr/bin/env /Users/ajaytrivedi/bats-core/bin/bats

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "*.crt" ./out/$1 > /dev/null; }

@test "Command name" {
  contains out 'starburst'
}

