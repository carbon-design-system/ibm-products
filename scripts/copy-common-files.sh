#!/bin/sh

################################################################################
# Helper script to copy over scss folders from `@carbon/<package>` dependencies
# located in `node_modules`. You can run this script in the terminal by running:
#
# ```
# ./tools/copy-vendor-styles.sh
# ```
################################################################################

set -e

# Start in scripts even if run from root directory
cd "$(dirname "$0")"

echo $PWD
# Go to root
cd ..
root_path=$PWD

COMMON_FILES="$PWD/common-files";
CDAI_COMMON_FILES="$PWD/packages/cdai/src/generated"
CORE_COMMON_FILES="$PWD/packages/core/generated"
MAIN_COMMON_FILES="$PWD/packages/cloud-cognitive/src/generated";

PACKAGES=($CDAI_COMMON_FILES $CORE_COMMON_FILES $MAIN_COMMON_FILES);

echo "Cleaning common files from packages..."
i=0
while [ $i -lt ${#PACKAGES[@]} ]
do
  rm -rf "${PACKAGES[$i]}"
  i=`expr $i + 1`
done

echo "Copying common files to..."
i=0
while [ $i -lt ${#PACKAGES[@]} ]
do
  cp -R "$COMMON_FILES" "${PACKAGES[$i]}"
  i=`expr $i + 1`
done

echo "Add common files to staged..."
i=0
while [ $i -lt ${#PACKAGES[@]} ]
do
  git add ${PACKAGES[$i]} -v
  i=`expr $i + 1`
done

echo "Success! 🎉"
