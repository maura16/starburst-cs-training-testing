#!/usr/bin/env bats

cd $(dirname $BATS_TEST_FILENAME)
function contains { grep "$2" solution/$1 > /dev/null; }

@test "Query states" {
  contains query_result '"state":"QUEUED"'
  contains query_result '"state":"RUNNING"'
  contains query_result '"state":"FINISHED"'
}

@test "Catalog output" {
  contains query_result '[ "jmx" ]'
  contains query_result '[ "memory" ]'
  contains query_result '[ "system" ]'
  contains query_result '[ "tpcds" ]'
  contains query_result '[ "tpch" ]'
}
