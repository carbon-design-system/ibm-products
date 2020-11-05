Feature: IDE Remove component
  As an ICP4I product
  I want to be able to allow a user to delete an entity in a common visual way

Background:
    Given Setup of the IdeRemove world

Scenario: When a High impact remove, I have to enter the exact name of the item I am removing to delete it
    Given a high impact removal IdeRemove component
    When the component is rendered
    Then the remove button is disabled
    And when i enter the name of the item
    Then the remove button is enabled
    And the deletion occurs when clicked

Scenario Outline: When I provide a set of properties, the expected content is rendered
    Given a complete set of "<properties>" properties for the IdeRemove component
    When the component is rendered
    Then the content of the IdeRemove component is rendered as expected

    Examples:
    | properties    |
    | medium impact |
    | high impact   |

