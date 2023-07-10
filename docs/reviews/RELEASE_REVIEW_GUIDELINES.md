# Release review checklists

## Component reviews for readiness

Reviews will be carried out by one or more members of the core contribution
team. They will include as a minimum the following checks, which establish the
“definition of done” for a component.

Create a
[release review](https://github.com/carbon-design-system/ibm-products/issues/new?assignees=&labels=&projects=&template=release-review.md)
for the component in question, then check where criteria passed, and add notes
to clarify how an item is complete or what remains to be done: for anything more
than minor or simple items, open issues to track them.

**Tip** You can leverage the review template or copy it into a GitHub comment,
then check where criteria passed, strike out where not applicable, and add notes
to each item where applicable.

Once one or more components have been reviewed for readiness, the following
steps are needed:

- the flags for the components in package-settings.js should be changed to
  `true`.
- the component SCSS should be included in
  `/src/components/_index-released-only.scss.`
- run the tests, recreating snapshots (using `-u`), and check in the updated
  public CSS snapshot. NB it is sufficient to run `yarn test:c4p:snapshot` to
  complete the snapshot updates.
