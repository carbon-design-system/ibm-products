# Carbon version support details

This set of documentation is geared towards contributors to the Carbon for IBM
Products component library, specifically around how we intend to keep our
components updated for both Carbon v10 and Carbon v11 (now that we provide
support for Carbon v11).

## Release information

Currently, the releases for `@carbon/ibm-products: 1.x.x` are published from our
`main` branch. The release candidate for `@carbon/ibm-products: 2.x.x-rc.x` is
published from the `carbon-v11` branch. Our releases for `v1.x.x` will continue
to be made on a weekly basis (every Tuesday mornings, EST). The release cadence
for `v2.x.x-rc.x` will continue to be made on a more variable timeline as we
work to streamline our process of updating our Carbon v10 and v11 set of
components.

## Keeping branches updated

With our team needing to keep our components updated for both Carbon v10 and
v11, new contributions should include two PRs. One of these PRs will have `main`
as the base branch and the other will use `carbon-v11` as the base branch. This
workflow, while temporary, will be required as long as our team needs to provide
new updates to both our v10 and v11 set of components.

We have found that having two local clones of the project helps in this overall
new workflow, notably to avoid potential conflicts in the future and to also
avoid updating your local `node_module` dependencies every time you switch from
`main` to `carbon-v11` or vice versa.

When setting up the clone for the carbon-v11 branch, just make sure to clone
from/pull the changes from the carbon-v11 branch, you can do that with the
following command:

```sh
$ mkdir ibm-cloud-cognitive-v11
$ cd ibm-cloud-cognitive-v11
$ git clone --branch carbon-v11 git@github.com:carbon-design-system/ibm-cloud-cognitive.git . // will clone from `carbon-v11` inside of the new v11 project directory that was just created
$ git remote set-url origin <ADD YOUR ORIGIN URL>
$ git remote add upstream git@github.com:carbon-design-system/ibm-cloud-cognitive.git
```

Afterwards, confirm that your remote urls are properly configured.

```sh
$ git remote -v
```

As an optional but helpful last step, you could also change `.git/HEAD` to point
to `carbon-v11` and remove the `main` branch. This way, the `carbon-v11` branch
becomes the default branch of this clone.
