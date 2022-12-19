#!/usr/bin/env bats

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "$2" solution/$1 > /dev/null; }

@test "Query states" {
  contains out '"state":"QUEUED"'
  contains out '"state":"RUNNING"'
  contains out '"state":"FINISHED"'
}

@test "Catalog output" {
  contains out '[ "jmx" ]'
  contains out '[ "memory" ]'
  contains out '[ "system" ]'
  contains out '[ "tpcds" ]'
  contains out '[ "tpch" ]'
}
