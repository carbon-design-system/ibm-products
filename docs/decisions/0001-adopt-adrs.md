# Title

Adopt ADRs

## Status

Accepted

## Context

A lot of the time historical context of the decision making process is lost over
time. It's hard, if not impossible, to remember why a change was made six months
later. Having to go through the commit history, search through old issues and
PRs, or looking through slack may only provide bits and pieces of the story.

Maintaining records that help contextualize changes in Carbon For IBM Products
is essential for the wellbeing of the codebase and those who maintain it. By
regularly creating ADRs to document the decision making process we will be
giving more transparency to stakeholders as well as providing valuable insights
to maintainers about why something was done.

## Decision

Moving forward, ADRs will be adopted to document any architecturally significant
changes. Any features or code changes that have an impact to the overall
architecture of Carbon For IBM Products, to core components and patterns, or to
dependencies should include an ADR document as part of the commit.

ADRs will adhere to the template structure that's accompanied in this folder
`0000-template.md`.

ADRs will be numbered sequentially and monotonically. Numbers will not be
reused.

## Consequences

The reasoning behind decision making becomes much more transparent to users,
devs, and other stakeholders.
