#!/bin/bash

ADDITIONAL_DATA="@use \"../src/styles/global\" as *;\n"

for file in $(find . -name "*.scss" ! -name "_*" -type f); do
  TEMP_FILE=$(mktemp)
  echo -e "$ADDITIONAL_DATA" | cat - "$file" > "$TEMP_FILE" && mv "$TEMP_FILE" "$file"
done

# 编译所有 SCSS 文件
# sass styles:output
sass src/styles/index.scss dist/styles/index.css