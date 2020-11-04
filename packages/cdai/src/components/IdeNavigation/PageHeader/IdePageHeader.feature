Feature: IDE Page Header component
  As an ICP4I product
  I want to be able to embed a common page header component.

Background:
    Given Setup of the IdePageHeader world

Scenario Outline: When I provide a set properties, these are rendered by the IdePageHeader component
    Given a set of properties called "<props>" provided to the component
    When the component is rendered
    Then the content of "<props>" is rendered as expected

    Examples:
    | props                                 |
    | none                                  |
    | breadcrumb                            |
    | tabs                                  |
    | breadcrumb,heading                    |
    | breadcrumb,tabs                       |
    | breadcrumb,others                     |
    | breadcrumb,custom                     |
    | breadcrumb,heading,tabs               |
    | breadcrumb,heading,others             |
    | breadcrumb,heading,custom             |
    | breadcrumb,heading,tabs,others        |
    | breadcrumb,heading,tabs,custom        |
    | breadcrumb,heading,tabs,others,custom |
    | header,headerRenderFunction           |
    | headerRenderFunction                  |
  