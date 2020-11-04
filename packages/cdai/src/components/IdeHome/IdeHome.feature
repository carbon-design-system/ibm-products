Feature: IDE Home page component
  As an ICP4I product
  I want to be able to embed a home page component that offers a common experience presenting activities to a user with a method of being told one of those activities has been chosen

Background:
    Given Setup of the IdeHome world

Scenario: When I provide a set of activities, they are rendered as expected
    Given a set of activities called "Basics"
    When the component is rendered
    Then the "Basics" activities set is rendered only

Scenario: When I provide multiple sets of activities, they are rendered as expected
    Given a set of activities called "Basics"
    And a set of activities called "Recent tasks"
    When the component is rendered
    Then the "Basics" set is the selected tab
    And the "Basics" activities set is rendered
    And the "Recent tasks" activities set is rendered

Scenario: When I provide a set of activities with different card sizes, these are rendered
    Given a set of activities called "Accelerators"
    When the component is rendered
    Then the "Accelerators" activities set is rendered only

Scenario: When I provide a task with custom content, this is rendered in the tile
    Given a set of activities called "Custom"
    When the component is rendered
    Then the "Custom" activities set is rendered only

Scenario: When I provide multiple sets of activities, and I specify a starting set, it is rendered by default
    Given a set of activities called "Basics"
    And a set of activities called "Recent tasks"
    And the property startSelected is added to the "recent_tasks" set
    When the component is rendered
    Then the "Recent tasks" set is the selected tab
    And the "Basics" activities set is rendered
    And the "Recent tasks" activities set is rendered

Scenario: The correct set of activities is shown when I toggle between them
    Given a set of activities called "Basics"
    And a set of activities called "Recent tasks"
    And the property startSelected is added to the "recent_tasks" set
    When the component is rendered
    Then the "Recent tasks" set is the selected tab
    And the "Recent tasks" activities set is rendered
    When the selected tab is changed to "Basics"
    Then the "Basics" set is the selected tab
    When the selected tab is changed to "Recent tasks"
    Then the "Recent tasks" set is the selected tab

Scenario: When I provide multiple sets of activities and want these sets rendered as sections rather than tabs, they are rendered as expected
    Given a set of activities called "Basics"
    And a set of activities called "Recent tasks"
    And I want to render sections rather than tabs
    When the component is rendered
    Then the "Basics" activities set is rendered as a section
    And the "Recent tasks" activities set is rendered as a section

Scenario: When I provide task metadata, the right IdeCard type is rendered
    Given a set of activities called "IDE_CARD"
    When the component is rendered
    Then the expected IDECard components are rendered
