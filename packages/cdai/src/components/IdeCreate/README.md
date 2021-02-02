# IdeCreate

Use the Create pattern to handle the standard flow for creating an object. The
pattern consists of a title bar that holds a simple breadcrumb, a primary title
and the action buttons.

Three modes of operation are supported:

- One page flow (default): The only page that is shown is a form where the
  component consumer will display all the input fields relevant to the task.
- Two page flow (with a pre-check): The pre-check page is shown first and would
  typically be used to ask the user to make a basic initial choice that leads to
  the main set of properties to be shown in the form. For example, the user
  could choose from a selection of templates that influences the properties and
  default values in the form.
- Multiple steps (with or without a pre-check): The user can step through
  multiple pages, and a progress indicator is shown.

The primary action button enable/disable state can be controlled via the
`setActionButtonDisabled` public method. This would typically be added to the
form validation code for the page. If using a pre-check page, the `Next` button
can be hidden and the user code can call the `setNextPage` public method to move
from the pre-check page to the form page. These public methods can be accessed
by obtaining a react reference to the component (as shown in the example below)
and then calling the public method through that reference - e.g.
`this.createRef.current.setNextPage()`

Properties can also be passed in to control the state of the `Next` and `Create`
buttons; `stepNextDisabled` and `formActionDisabled` respectively.

The title bar area will minimise to a more compact size with fixed position when
the page scrolls, also the action buttons will be rendered in a fixed position
at the bottom of the page when the width is constrained.

## Carbon elements used

- Layout
- Typography
- Spacing

## Component details

Typical usage is to supply text values for the title, breadcrumb and buttons and
callback functions for `onCancel` and `onformAction`.

##### `pageTitle`: String (Required)

The text to render in the primary title on the top left

##### `breadCrumbText`: String

The text to render in the breadcrumb

##### `breadCrumbUrl`: String

The URL to visit when the breadcrumb is clicked

##### `usePreCheck`: Boolean

Set this value to true to activate the two-page mode with pre-check. Default is
false.

##### `buttonTextFormAction`: String

The text for the form primary action (usually "Create")

##### `buttonTextFormCancel`: String

The text for the form cancel action (usually "Cancel")

##### `buttonTextStepNext`: String

The text for the primary button to move between steps (usually "Next"). Only
needed when using the pre-check flow. Can be left blank to hide the button.

##### `buttonTextStepBack`: String

The text for the secondary button to move back a step (usually "Back"). Only
needed when using the pre-check flow.

##### `onCancel`: Function

Function that will be called when the user clicks on the Cancel button.

##### `onFormAction`: Function

Function that will be called when the user clicks on the form primary action
button

##### `setActionButtonDisabled(state: boolean)`: Method

Public method that can be called to control the state (disabled/enabled) of the
primary action button.

##### `setNextPage()`: Method

Public method that can be called to move from the pre-check page to the form
page.

## Example usage

```
const createProps = {
  pageTitle: 'Create an object',
  breadCrumbText: 'Back to objects',
  breadCrumbUrl: '#/objects',
  usePreCheck: true,
  buttonTextFormAction: 'Create',
  buttonTextFormCancel: 'Cancel',
  buttonTextStepBack: 'Back',
  onFormAction: () => {
    // Do something to save the data
  },
  onCancel: () => {
    // Go back to a previous view
    window.location.hash = '#/objects';
  }
};
return (
  <IdeCreate ref={this.createRef} {...createProps}>
    <IdeCreateStep>
      *** Render the template/pre-check page here ***
    </IdeCreateStep>
    <IdeCreateStep>
      *** Render the main form inputs here ***
    </IdeCreateStep>
  </IdeCreate>
);

```

# Change history

|          Date | Change                                        | Contributed by, Product    |
| ------------: | :-------------------------------------------- | :------------------------- |
| Sept 26, 2019 | First contribution of the IdeCreate component | Philip Taunton / MQ        |
|  Apr 30, 2020 | Add support for multiple steps                | Matt Chapman / App Connect |
