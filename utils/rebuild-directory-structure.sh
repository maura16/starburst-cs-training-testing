#!/bin/bash
## Usage: cd to appropriate base directory and run the script from that directory:
# cd 01-core/01-setup/
# ../../utils/rebuild-directory-structure.sh


# Iterates over numbered directories in a dictionary order 
# and renames them to preserve structure.

# Example structure:
# 01-some  
# 02-awesome
# 02a-exercise  
# 03-list

# Will be changed to:
# 01-some  
# 02-awesome
# 03-exercise  
# 04-list

i=1
for file in $(find . -maxdepth 1 -type d -name '[[:digit:]]*')
do
  # Only if expected prefix does not match
  if [ $(echo $file | cut -f2 -d'/' | cut -f1 -d-) != "$(printf "%02d\n" $i)" ]
  then
    echo "Moving: $file to $(printf "%02d\n" $i)-$(echo $file | cut -f2- -d-)"
    mv $file "$(printf "%02d\n" $i)-$(echo $file | cut -f2- -d'-')"
  fi
  i=$((i+1))
done
