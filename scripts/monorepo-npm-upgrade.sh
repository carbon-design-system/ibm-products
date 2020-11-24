#!/bin/sh

################################################################################
#
# Helper script run npm-upgrade in all packages
#
################################################################################

echo Running npm-upgrade for all packages and root

cd ./packages
for package in * ; do
    if [ -d "$package" ]; then
        echo "Upgrade package '$package' (y/n)?"
        old_stty_cfg=$(stty -g)
        stty raw -echo
        mode=$( while ! head -c 1 | grep -i '[yn]' ;do true ;done )
        stty $old_stty_cfg

        cd $package
            if echo "$mode" | grep -iq "^y" ;then
                npx npm-upgrade
            fi
        cd ..
    fi
done
cd ..

echo "Run npm-upgrade for root package.json (y/n)?"
old_stty_cfg=$(stty -g)
stty raw -echo
mode=$( while ! head -c 1 | grep -i '[yn]' ;do true ;done )
stty $old_stty_cfg

if echo "$mode" | grep -iq "^y" ;then
    npx npm-upgrade
fi
