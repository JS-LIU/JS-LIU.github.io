#!/bin/bash

directory="src/assets/documents"

if [ ! -d "$directory" ]; then
  echo "Error: Directory $directory does not exist."
  exit 1
fi

files_json="{ \"files\": ["
first=true
for file in "$directory"/*; do
  if [ "$first" = true ]; then
    files_json+="\"$(basename "$file")\""
    first=false
  else
    files_json+=", \"$(basename "$file")\""
  fi
done
files_json+="] }"



echo "$files_json" > file_names.json

cp file_names.json src/mock
echo "File names in $directory have been written to file_names.json."
