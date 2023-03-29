---
name: Accessibility review ♿️
about: Review process before release of a new component or pattern as stable
---

<!-- markdownlint-disable MD041 MD024 MD033 -->

## Accessibility review

Component epic #

### [Keyboard](https://www.ibm.com/able/toolkit/develop/keyboard)

#### Level 1

- [ ] Properly code the navigation order
  - [ ] Ensure interactive elements are reachable with the keyboard
  - [ ] Where possible, achieve the desired tab order by adjusting the DOM,
        rather than overriding the tabindex
  - [ ] When overriding the default focus indicator, confirm focus is highly
        visible
- [ ] Implement established keyboard conventions
  - [ ] Use standard HTML elements where possible, using CSS to alter appearance
        not behavior
  - [ ] Be familiar with established keyboard conventions
  - [ ] Implement keyboard operation for custom elements

#### Level 2

- [ ] Ensure keyboard access to complex interactions
  - [ ] Make custom media player and animation controls keyboard accessible

#### Level 3

- [ ] Code screen updates predictably
  - [ ] Use “activate” rather than “focus” as a trigger
  - [ ] Use an onchange event without disorienting the user

### [Dynamic updates](https://www.ibm.com/able/toolkit/develop/dynamic-updates)

#### Level 1

- [ ] Provide errors accessibly
  - [ ] Use accessible methods to implement error messages
  - [ ] Implement validation and notification to minimize interruptions

#### Level 2

- [ ] Make content accessible that appears on hover or focus
  - [ ] Ensure <kbd>Esc</kbd> dismisses new content
  - [ ] If content appears on hover, the new content needs to remain visible
        until dismissed
  - [ ] Moving the pointer away from the trigger should not be the action that
        dismisses the new content
  - [ ] Ensure custom tooltips and similar hover text can be triggered by
        keyboard
  - [ ] Discuss alternatives to hover text
  - [ ] Use caution where interactive controls appear in the hover text
- [ ] Code cancellation actions accessibly
  - [ ] Provide accessible ways of cancelling pointer interaction
- [ ] Properly code status messages
  - [ ] Use `role=status` to advise on the success or results of an action
  - [ ] Use `role=alert` or an ARIA live region to convey a suggestion or
        warning

#### Level 3

- [ ] Allow reduced motion
  - [ ] Implement motion media queries to reduce user risk

### [Text and non-text](https://www.ibm.com/able/toolkit/develop/text-and-non-text)

#### Level 1

- [ ] Implement text alternatives for meaningful images, sound, and visual data
  - [ ] Give decorative images an ALT attribute with an empty string (`alt=""`)
  - [ ] Use HTML, ARIA, or technology-specific techniques to add short text
        alternatives
  - [ ] Where relevant text exists in the UI, use `aria-labelledby` and
        `aria-describedby` to reference
  - [ ] Provide an accessible method for exposing long text alternatives
  - [ ] Embed multimedia content that supports closed captions
- [ ] Implement correct structure and metadata
  - [ ] Code headings according to specifications
  - [ ] ~Code the `<title>` element on every page according to specifications~
  - [ ] ~Set the language for each page~

#### Level 2

- [ ] Add additional structure where appropriate
  - [ ] Use `<figcaption>` and `<caption>` elements where figures and tables are
        titled
  - [ ] Add additional context to generic link names
  - [ ] Consider adding regions and other ARIA roles to distinguish text
        groupings

#### Level 3

- [ ] ~Mark up foreign words and abbreviations~
  - [ ] ~Use the `lang` attribute for foreign words and phrases~
  - [ ] Use `<abbr>` elements and title attributes to expand abbreviations
- [ ] Achieve necessary reading order
  - [ ] Order content appropriately in the DOM
  - [ ] Only use CSS to alter text position without altering meaning

### [User input](https://www.ibm.com/able/toolkit/develop/user-input)

#### Level 1

- [ ] Associate labels with inputs
  - [ ] Programmatically associate inputs with labels
  - [ ] Add accessible names for inputs lacking visible labels
- [ ] Provide correct name, role, and value
  - [ ] If repurposing a standard component, use ARIA to set the correct name
        and role
  - [ ] On custom components, use ARIA to expose `name`, `role`, and `value`

#### Level 2

- [ ] Reduce conflict between the visible label and a component’s accessible
      name
  - [ ] Match the accessible name to the visible label
  - [ ] Include the text of the label in the accessible name

#### Level 3

- [ ] Indicate the purpose of common inputs
  - [ ] Use HTML `autocomplete` attributes, where appropriate
