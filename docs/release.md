# Release

1. `yarn lerna version --conventional-commits --no-changelog --no-git-tag-version --no-push` -
   Identify next `ibm-cloud-cognitive` semantic version, for example (`1.1.0`)
2. Branch - `chore/release-v1.1.0`
3. Bump versions -
   `yarn lerna version --conventional-commits --no-git-tag-version --no-push`
4. Generate release notes -
   `find . -type d -name node_modules -prune -o -type f -name CHANGELOG.md -print -exec cat {} \;`
5. Commit - `git commit -m 'chore(release): update package versions`
6. Tag - `git tag -a v1.1.0 -m 'v1.1.0'`
7. `git push upstream v1.1.0`
