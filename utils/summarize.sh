#!/bin/bash

cat <<EOF > summary.md
# Progress summary 

EOF

for file in $(find . -name 'validate.sh' | grep -v 'WIP'); do
echo '## '$(dirname ${file:2} | sed -e 's/\// \/ /g')

echo '|   |   |'
echo '|---|---|'
bats $file  | 
  sed -e 's/^not ok/| \&cross; |/' |        # failed test 
  sed -e 's/^ok/| \&check; |/' |            # completed 
  sed -e 's/$/ |/' |                        # close table 
  sed -e '/^1\.\./d' |                      # remove first line
  sed -e '/^#/d'                            # remove error output
# echo '```'
done >> summary.md

# Note: A good alternative for symbols can be:
# https://github.com/ikatyang/emoji-cheat-sheet
# :heavy_check_mark:
# :x:

# cat summary.md
