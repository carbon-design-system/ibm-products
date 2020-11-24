Feature: IDE API Key Generation page component
  As an ICP4I product
  I want to be able to embed an API Key Generation component that offers a common experience preparing the generation of API keys and presenting generated API keys.

Background:
    Given Setup of the IdeAPIKeyGeneration world

Scenario: When an API key is provided, the API key is rendered as expected
    Given a core configuration and no steps
    When the component is rendered
    Then the "APIKey" element is rendered with a "value" property set to "123456-abcdef-12345678-abcdef"
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Copy"

Scenario: When the API key visibility is set to false, the API key is rendered as a hidden password input
    Given a core configuration and no steps
    And the property "isAPIKeyVisible" with boolean value "false" is specified
    And the property "apiKeyVisibilityToggleAltText" with value "Alt text" is specified
    When the component is rendered
    Then the "APIKey" element is rendered with a "value" property set to "123456-abcdef-12345678-abcdef"
    Then the "APIKey" element is rendered with a "alt" property set to "Alt text"
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Copy"

Scenario: When an API key secret is provided, the additional secret is rendered as expected
    Given a core configuration and no steps
    And the property "apiKeySecret" with value "secret-xxxxxx-123456" is specified
    When the component is rendered
    Then the "APIKey" element is rendered with a "value" property set to "123456-abcdef-12345678-abcdef"
    And the "APIKeySecret" element is rendered with a "value" property set to "secret-xxxxxx-123456"
    And the "APIKeySecret" element is rendered with a "value" property set to "secret-xxxxxx-123456"
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Copy"

Scenario: When description and helper text is provided, the text is rendered as expected
    Given a core configuration and no steps
    And the property "descriptionText" with value "Some description text" is specified
    And the property "apiKeyHelperText" with value "Some helper text" is specified
    And the property "downloadLinkText" with value "" is specified
    When the component is rendered
    Then the "Description" element is rendered with text "Some description text"
    And the "APIKey-HelperText" element is rendered with text "Some helper text"
    And the "APIKey-DownloadLink" element is not rendered

Scenario: When a download link is provided, the link is rendered as expected
    Given a core configuration and no steps
    And the property "downloadLinkText" with value "Download the key" is specified
    And the callback property "onDownload" is specified
    When the component is rendered
    Then the "APIKey-DownloadLink" element is rendered with a "children" property set to "Download the key"
    When I click on the "APIKey-DownloadLink" element
    Then the "onDownload" callback is invoked with an object with property "apiKey" and value "123456-abcdef-12345678-abcdef"

Scenario: When an API key is provided, the close and copy button work as expected
    Given a core configuration and no steps
    And the callback property "onClose" is specified
    And the callback property "onCopyAPIKeyData" is specified
    When the component is rendered
    When I click on the modal "close" button
    Then the "onClose" callback is invoked
    When I click on the modal "primary" button
    Then the value "123456-abcdef-12345678-abcdef" is copied to the clipboard
    And the "onCopyAPIKeyData" callback is invoked with an object with property "apiKey" and value "123456-abcdef-12345678-abcdef"

Scenario: When an API key secret is provided, the copy button works as expected
    Given a core configuration and no steps
    And the property "apiKeySecret" with value "secret-xxxxxx-123456" is specified
    And the callback property "onCopyAPIKeyData" is specified
    When the component is rendered
    When I click on the modal "primary" button
    Then the value "{'apiKey':'123456-abcdef-12345678-abcdef','apiKeySecret':'secret-xxxxxx-123456'}" is copied to the clipboard
    And the "onCopyAPIKeyData" callback is invoked with an object with property "apiKey" and value "123456-abcdef-12345678-abcdef"
    And the "onCopyAPIKeyData" callback is invoked with an object with property "apiKeySecret" and value "secret-xxxxxx-123456"

Scenario: When an API key is being generated, the generating spinner is rendered as expected
    Given a core configuration and no steps
    And the property "generatingLabelText" with value "Generating text key" is specified
    And the property "isAPIKeyGenerating" with boolean value "true" is specified
    When the component is rendered
    Then the "APIKeyGenerating" element is rendered with a "description" property set to "Generating text key"
    And the "APIKey" element is not rendered

Scenario: When API key generation has completed, the generating spinner is rendered as expected
    Given a core configuration and no steps
    And the property "generatingLabelText" with value "Generating test API key" is specified
    When the component is rendered
    And the property "isAPIKeyGenerating" changes to the boolean value "true"
    Then the "APIKeyGenerating" element is rendered with a "status" property set to "active"
    And the "APIKey" element is not rendered

Scenario: When a descriptive name step is provided, the descriptive name component is rendered as expected
    Given a core configuration with a descriptive name step
    When the component is rendered
    Then the "DescriptiveNameInput" element is rendered with a "value" property set to ""
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Generate"
    And the modal "primary" button is "disabled"

Scenario: When no heading is provided to the descriptive name step, the default modal heading is rendered
    Given a core configuration with a descriptive name step
    And the descriptiveNameStep property "heading" with value "" is specified
    When the component is rendered
    Then the modal has a "modalHeading" property with the value "Generate an API key"

Scenario: When a value is provided to the descriptive name step, the API key generation/display step can be reached
    Given a core configuration with a descriptive name step
    And the descriptiveNameStep property "value" with value "A test descriptive name" is specified
    When the component is rendered
    Then the "DescriptiveNameInput" element is rendered with a "value" property set to "A test descriptive name"
    And the modal "primary" button is "enabled"

Scenario: When a value is updated in the descriptive name step, the API key generation/display step can be reached
    Given a core configuration with a descriptive name step
    And the callback property "onGenerateAPIKey" is specified
    When the component is rendered
    And the descriptiveNameStep "value" property changes to the value "A test descriptive name"
    Then the modal has a "primary" button with the label "Generate"
    And the modal "primary" button is "enabled"
    When I click on the modal "primary" button
    Then the "onGenerateAPIKey" callback is invoked
    And the "APIKeyGenerating" element is rendered with a "status" property set to "inactive"
    And the "APIKey" element is not rendered
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Copy"
    And the modal "primary" button is "disabled"
    When the "onSuccess" callback prop on the "APIKeyGenerating" element is invoked
    Then the "APIKeyGenerating" element is not rendered
    And the "DescriptiveName-Value" element is rendered with text "A test descriptive name"
    And the "DescriptiveName-Label" element is rendered with text "Descriptive name"
    And the "APIKey" element is rendered with a "value" property set to "123456-abcdef-12345678-abcdef"
    And the modal "primary" button is "enabled"
    When I click on the modal "primary" button
    Then the value "{'apiKey':'123456-abcdef-12345678-abcdef','name':'A test descriptive name'}" is copied to the clipboard

Scenario: When a value is entered in the descriptive name input, the API key generation/display step can be reached
    Given a core configuration with a descriptive name step
    And the callback property "onGenerateAPIKey" is specified
    When the component is rendered
    Then the modal has a "primary" button with the label "Generate"
    And the modal "primary" button is "disabled"
    When I type the value "A test descriptive name" into the "DescriptiveNameInput" element
    Then the "DescriptiveNameInput" element is rendered with a "value" property set to "A test descriptive name"
    And the modal "primary" button is "enabled"

Scenario: When a set of custom steps are provided, the steps are rendered as expected
    Given a core configuration with custom steps
    And the callback property "onNext" is specified
    And the callback property "onBack" is specified
    And the callback property "onGenerateAPIKey" is specified
    When the component is rendered
    Then the "CustomStep1" element is rendered with text "Rendering step 1. This is custom content."
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Next"
    And the modal "primary" button is "enabled"
    When I click on the modal "primary" button
    Then the "onNext" callback is invoked with argument 0
    And the "CustomStep2" element is rendered with text "Optional description text for step 2 of 3. Rendering step 2. This is custom content with a description."
    And the modal has a "secondary" button with the label "Back"
    And the modal has a "primary" button with the label "Next"
    When I click on the modal "secondary" button
    Then the "onBack" callback is invoked with argument 1
    And the "CustomStep1" element is rendered with text "Rendering step 1. This is custom content."
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Next"
    And the modal has a "modalHeading" property with the value "Custom step 1 of 3"
    When I click on the modal "primary" button
    Then the "onNext" callback is invoked with argument 0
    Then the "CustomStep2" element is rendered with text "Optional description text for step 2 of 3. Rendering step 2. This is custom content with a description."
    And the modal has a "modalHeading" property with the value "Custom step 2 of 3"
    When I click on the modal "primary" button
    Then the "onNext" callback is invoked with argument 1
    Then the "CustomStep3" element is rendered with text "Rendering step 3. This is custom content with a default heading."
    And the modal has a "secondary" button with the label "Back"
    And the modal has a "primary" button with the label "Generate"
    And the modal has a "modalHeading" property with the value "Generate an API key"
    When I click on the modal "primary" button
    Then the "onGenerateAPIKey" callback is invoked
    And the "APIKeyGenerating" element is rendered with a "status" property set to "active"
    And the "APIKey" element is not rendered
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Copy"

Scenario: When a descriptive name step and custom steps are provided, the descriptive name and steps are rendered as expected
    Given a core configuration with a descriptive name step and custom steps
    And the property "generatingLabelText" with value "Generating text key" is specified
    And the callback property "onNext" is specified
    And the callback property "onBack" is specified
    And the callback property "onGenerateAPIKey" is specified
    When the component is rendered
    Then the "DescriptiveNameInput" element is rendered with a "value" property set to ""
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Next"
    When the descriptiveNameStep "value" property changes to the value "A test descriptive name"
    Then the modal "primary" button is "enabled"
    When I click on the modal "primary" button
    Then the "onNext" callback is invoked with argument 0
    And the "CustomStep1" element is rendered with text "Rendering step 1. This is custom content."
    And the modal has a "secondary" button with the label "Back"
    And the modal has a "primary" button with the label "Next"
    And the modal "primary" button is "enabled"
    When I click on the modal "primary" button
    Then the "onNext" callback is invoked with argument 1
    Then the "CustomStep2" element is rendered with text "Optional description text for step 2 of 3. Rendering step 2. This is custom content with a description."
    When I click on the modal "primary" button
    Then the "onNext" callback is invoked with argument 2
    Then the "CustomStep3" element is rendered with text "Rendering step 3. This is custom content with a default heading."
    And the modal has a "secondary" button with the label "Back"
    And the modal has a "primary" button with the label "Generate"
    When I click on the modal "primary" button
    Then the "onGenerateAPIKey" callback is invoked

Scenario: When the modal is closed, the state is cleared
    Given a core configuration with a descriptive name step
    And the callback property "onGenerateAPIKey" is specified
    When the component is rendered
    And the descriptiveNameStep "value" property changes to the value "A test descriptive name"
    Then the modal has a "primary" button with the label "Generate"
    And the modal "primary" button is "enabled"
    When I click on the modal "primary" button
    And the "APIKeyGenerating" element is rendered with a "status" property set to "inactive"
    And the "APIKey" element is not rendered
    And the modal has a "secondary" button with the label "Close"
    And the modal has a "primary" button with the label "Copy"
    When the "onSuccess" callback prop on the "APIKeyGenerating" element is invoked
    Then the "APIKey" element is rendered with a "value" property set to "123456-abcdef-12345678-abcdef"
    And the modal "primary" button is "enabled"
    When the property "open" changes to the boolean value "false"
    And the property "open" changes to the boolean value "true"
    Then the "DescriptiveNameInput" element is rendered with a "labelText" property set to "Descriptive name"
    And the "APIKeyGenerating" element is not rendered
    And the "APIKey" element is not rendered
    And the modal has a "primary" button with the label "Generate"
