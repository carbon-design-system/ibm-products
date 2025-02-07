# Design Review Checklists

## Component reviews

When reviewing a component’s design, check that the pattern is closely followed,
and keep an eye on the component review checklist below.

Each component should be reviewed based on these criteria where applicable.

### Tips for a deeper design review

Reviewing a component’s UI correctness may be difficult by eye only,
particularly with color, sizing, paddings, etc. To be more thorough, we suggest
opening your console in your browser (right click + “Inspect”) and using your
element selection tool to look through the component’s styles. This will help to
catch differences in pixel size or slight color variations prior to component
release.

Any questions regarding the component’s compiled styles can be answered by your
developer.

## Component reviews for readiness

Design reviews will be carried out by one or more maintainers and/or designers
who own the approved pattern. They will included, as a minimum, the following
checks, which establish the “definition of done” for a component’s UI/design.

Paste the following checklist into the epic or issue under which the component
is being made design ready, then check where criteria passed, and add notes to
clarify how an item is complete or what remains to be done: for anything more
than minor/simple items, open issues to track them.

**Tip** You should be able to copy and paste the section below directly into a
GitHub comment, then check where criteria passed, strike out where not
applicable, and add notes to each item where applicable.

`## Design review guidelines`

`###` Standards

`- [ ]` All pattern updates/changes/iterations have been discussed with the
component developer\
`- [ ]` Patterns have been approved by either DSAG or another approving entity

`###` Pattern and behavior

`- [ ]` The component behaves according to the guidelines set by the pattern
maintainer\
`- [ ]` The component’s UI matches the pattern specifications set by the pattern
maintainer\
`- [ ]` The component’s motion matches the specifications set by the pattern
maintainer(s)\
`- [ ]` The UI produced is responsive, cross-browser, and responds to the
currently set Carbon theme.\
`- [ ]` Colors, themes, sizes and additional props are true and correct,
aligning with Carbon set tokens (unless otherwise specified by the pattern)\
`- [ ]` Paddings/margins/spacings are true and correct, in both desktop and
mobile views

`###` Storybook

`- [ ]` A functioning component renders in Storybook\
`- [ ]` The Storybook displays multiple scenarios that show how the component
can be used\
`- [ ]` Changing props in the Storybook updates the component
