#!/bin/bash

trino > solution/out <<EOF
select * from system.jdbc.tables where table_cat='memory' and table_schem like 'schema%';
EOF
