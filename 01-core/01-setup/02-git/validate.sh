#!/usr/bin/env bats

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "$2" solution/$1 > /dev/null; }

@test "File exists" {
  contains out 'DONE'
}

@test "File commited" {
  git show HEAD:01-core/01-setup/02-git/solution/out | grep DONE
}
