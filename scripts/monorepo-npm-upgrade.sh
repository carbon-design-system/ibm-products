#!/bin/sh

################################################################################
#
# Helper script run npm-upgrade in all packages
#
################################################################################

echo Running npm-upgrade for all packages and root
echo

cd ./packages
for package in * ; do
    if [ -d "$package" ]; then
        cd $package
        read -p "Upgrade package '$package' (y/N)? " yn
        case $yn in
            [Yy]* ) echo; npx npm-upgrade; echo
        esac
        cd ..
    fi
done
cd ..

read -p "Upgrade root package (y/N)? " yn
case $yn in
    [Yy]* ) echo; npx npm-upgrade
esac
