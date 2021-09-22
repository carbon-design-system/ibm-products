//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { InlineLoading, Link, Modal, TextInput } from 'carbon-components-react';
import { InformationFilled16 } from '@carbon/icons-react';
import { idePrefix } from '../../globals/js/settings';
import { idAttribute } from '../../component_helpers/IDHelper';
import { copyToClipboard } from '../../component_helpers/Clipboard';

const INITIAL_STATE = {
  currentStepIndex: 0,
  hasAPIKeyGenerationCompleted: true,
};

export default class IdeAPIKeyGeneration extends React.Component {
  constructor() {
    super();
    this.state = {
      ...INITIAL_STATE,
      descriptiveName: '',
    };

    this.handleDescriptiveNameChange =
      this.handleDescriptiveNameChange.bind(this);
    this.handleGenerateAPIKey = this.handleGenerateAPIKey.bind(this);
    this.handleAPIKeyGenerationCompletion =
      this.handleAPIKeyGenerationCompletion.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.renderDescriptiveNameStep = this.renderDescriptiveNameStep.bind(this);
    this.renderAPIKey = this.renderAPIKey.bind(this);
  }

  componentDidMount() {
    const { descriptiveNameStep, isAPIKeyGenerating } = this.props;

    this.setState({
      hasAPIKeyGenerationCompleted: !isAPIKeyGenerating,
      ...(descriptiveNameStep && descriptiveNameStep.value
        ? { descriptiveName: descriptiveNameStep.value }
        : null),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isAPIKeyGenerating !== this.props.isAPIKeyGenerating) {
      this.setState({
        hasAPIKeyGenerationCompleted: !this.props.isAPIKeyGenerating,
      });
    }

    if (!prevProps.open && this.props.open) {
      // Reset the state when the modal opens
      this.setState(INITIAL_STATE);
    }

    if (
      prevProps.descriptiveNameStep &&
      this.props.descriptiveNameStep &&
      prevProps.descriptiveNameStep.value !==
        this.props.descriptiveNameStep.value &&
      this.state.descriptiveName !== this.props.descriptiveNameStep.value
    ) {
      this.setState({ descriptiveName: this.props.descriptiveNameStep.value });
    }
  }

  getCurrentStep() {
    const {
      descriptiveNameStep,
      generateLabelText,
      nextLabelText,
      backLabelText,
      heading,
      descriptionText,
      customSteps,
    } = this.props;

    const generationStep = {
      id: 'IdeAPIKeyGeneration-APIKeyGen',
      descriptionText,
      render: this.renderAPIKey,
      className: `${idePrefix}-api-key-generation-api-key--content`,
    };

    let currentStep;
    if (descriptiveNameStep && this.state.currentStepIndex == 0) {
      currentStep = {
        id: 'IdeAPIKeyGeneration-DescriptiveName',
        modalProps: {
          modalHeading: descriptiveNameStep.heading || heading,
          primaryButtonText: generateLabelText,
          primaryButtonDisabled:
            descriptiveNameStep.invalid ||
            (descriptiveNameStep.isRequired && !this.state.descriptiveName),
          onRequestSubmit: this.handleGenerateAPIKey,
        },
        descriptionText: descriptiveNameStep.descriptionText,
        render: this.renderDescriptiveNameStep,
        className: `${idePrefix}-api-key-generation-description--content`,
      };

      if (customSteps && customSteps.length > 0) {
        // There are custom steps, so the primary button goes to the next step
        currentStep.modalProps = {
          ...currentStep.modalProps,
          primaryButtonText: nextLabelText,
          onRequestSubmit: this.handleNext,
        };
      }
    } else if (customSteps && customSteps.length > 0) {
      let stepIndex = this.state.currentStepIndex;
      if (descriptiveNameStep) {
        // If there is a descriptiveNameStep, stepIndex is the currentStepIndex - 1;
        stepIndex -= 1;
      }

      if (stepIndex < customSteps.length) {
        const customStep = customSteps[stepIndex];
        currentStep = {
          id: `IdeAPIKeyGeneration-${customStep.stepId}`,
          modalProps: {
            modalHeading: customStep.stepHeading || heading,
            primaryButtonText: nextLabelText,
            primaryButtonDisabled: customStep.nextButtonDisabled,
            onRequestSubmit: this.handleNext,
          },
          descriptionText: customStep.descriptionText,
          render: customStep.renderStep,
          className: customStep.stepClassName,
        };

        if (stepIndex === customSteps.length - 1) {
          // This is the final custom step, so the primary button now generates the API key
          currentStep.modalProps = {
            ...currentStep.modalProps,
            primaryButtonText: generateLabelText,
            onRequestSubmit: this.handleGenerateAPIKey,
          };
        }

        if (this.state.currentStepIndex > 0) {
          // This is not the first step, so the secondary button now handles going back a step
          currentStep.modalProps = {
            ...currentStep.modalProps,
            secondaryButtonText: backLabelText,
            onSecondarySubmit: this.handleBack,
          };
        }
      } else {
        // This is after the final custom step, so show the generation/results step
        currentStep = generationStep;
      }
    } else {
      // No descriptiveNameStep or customSteps, so go straight to the generation/results step
      currentStep = generationStep;
    }

    return currentStep;
  }

  handleNext() {
    const { onNext } = this.props;
    onNext && onNext(this.state.currentStepIndex);

    this.setState({
      currentStepIndex: this.state.currentStepIndex + 1,
    });
  }

  handleBack() {
    const { onBack } = this.props;
    onBack && onBack(this.state.currentStepIndex);

    this.setState({
      currentStepIndex: this.state.currentStepIndex - 1,
    });
  }

  handleDescriptiveNameChange(event) {
    const descriptiveName = event.target.value;

    this.setState({
      descriptiveName,
    });

    const { onChange } = this.props.descriptiveNameStep;
    onChange && onChange(event);
  }

  handleGenerateAPIKey() {
    const { onGenerateAPIKey } = this.props;
    this.setState({
      hasAPIKeyGenerationCompleted: false,
      currentStepIndex: this.state.currentStepIndex + 1,
    });
    onGenerateAPIKey && onGenerateAPIKey();
  }

  handleAPIKeyGenerationCompletion() {
    this.setState({
      hasAPIKeyGenerationCompleted: true,
    });
  }

  getAPIKeyData() {
    const { apiKey, apiKeySecret, descriptiveNameStep } = this.props;
    return {
      apiKey,
      ...(apiKeySecret ? { apiKeySecret } : null),
      ...(descriptiveNameStep && this.state.descriptiveName
        ? { name: this.state.descriptiveName }
        : null),
    };
  }

  handleCopy(event) {
    const { apiKey, apiKeySecret, descriptiveNameStep, onCopyAPIKeyData } =
      this.props;

    // If the apiKeySecret exists, copy a stringified object containing the
    // apiKey and the apiKeySecret props to the clipboard.
    // If no apiKeySecret exists, just copy the apiKey prop to the clipboard.
    let dataToCopy = apiKey;
    if (apiKeySecret || descriptiveNameStep) {
      dataToCopy = JSON.stringify(this.getAPIKeyData());
    }
    copyToClipboard(event, dataToCopy);
    onCopyAPIKeyData && onCopyAPIKeyData(this.getAPIKeyData());
  }

  handleDownload(event) {
    event.preventDefault(); // Prevent anchor href being followed
    const { onDownload } = this.props;

    onDownload && onDownload(this.getAPIKeyData());
  }

  renderDescription(descriptionText) {
    return descriptionText ? (
      <p
        className={`${idePrefix}-api-key-generation-description`}
        {...idAttribute('IdeAPIKeyGeneration-Description')}
      >
        {descriptionText}
      </p>
    ) : null;
  }

  renderAPIKey() {
    const {
      apiKey,
      apiKeyLabelText,
      apiKeyHelperText,
      isAPIKeyVisible,
      apiKeyVisibilityToggleAltText,
      onDownload,
      downloadLinkText,
      isAPIKeyGenerating,
      generatingLabelText,
      apiKeySecret,
      apiKeySecretLabelText,
      apiKeySecretVisibilityToggleAltText,
      descriptiveNameStep,
    } = this.props;

    const apiKeyProps = {
      value: apiKey,
      labelText: apiKeyLabelText,
      light: true,
      readOnly: true,
      ...idAttribute('IdeAPIKeyGeneration-APIKey'),
      id: 'IdeAPIKeyGeneration-APIKey',
    };

    const apiKeySecretProps = apiKeySecret
      ? {
          value: apiKeySecret,
          labelText: apiKeySecretLabelText,
          tooltipAlignment: 'end',
          alt: apiKeySecretVisibilityToggleAltText,
          light: true,
          readOnly: true,
          ...idAttribute('IdeAPIKeyGeneration-APIKeySecret'),
          id: 'IdeAPIKeyGeneration-APIKeySecret',
        }
      : null;

    return !this.state.hasAPIKeyGenerationCompleted ? (
      <InlineLoading
        status={isAPIKeyGenerating ? 'active' : 'inactive'}
        description={generatingLabelText}
        iconDescription={generatingLabelText}
        onSuccess={this.handleAPIKeyGenerationCompletion}
        successDelay={0}
        className={`${idePrefix}-api-key-generation-api-key-generating`}
        {...idAttribute('IdeAPIKeyGeneration-APIKeyGenerating')}
      />
    ) : (
      <>
        {descriptiveNameStep && this.state.descriptiveName && (
          <div className={`${idePrefix}-api-key-generation-descriptive-name`}>
            {descriptiveNameStep.labelText && (
              <p
                className={`${idePrefix}-api-key-generation-descriptive-name--label`}
                {...idAttribute('IdeAPIKeyGeneration-DescriptiveName-Label')}
              >
                {descriptiveNameStep.labelText}
              </p>
            )}
            <p
              className={`${idePrefix}-api-key-generation-descriptive-name--value`}
              {...idAttribute('IdeAPIKeyGeneration-DescriptiveName-Value')}
            >
              {this.state.descriptiveName}
            </p>
          </div>
        )}
        <div className={`${idePrefix}-api-key-generation-api-key`}>
          {isAPIKeyVisible ? (
            <TextInput {...apiKeyProps} />
          ) : (
            <TextInput.PasswordInput
              {...apiKeyProps}
              alt={apiKeyVisibilityToggleAltText}
              tooltipAlignment={'end'}
            />
          )}
        </div>
        {apiKeySecret && (
          <div className={`${idePrefix}-api-key-generation-api-key-secret`}>
            <TextInput.PasswordInput {...apiKeySecretProps} />
          </div>
        )}
        {apiKeyHelperText && (
          <div
            className={`${idePrefix}-api-key-generation-helper-text-container`}
          >
            <InformationFilled16
              className={`${idePrefix}-api-key-generation-helper-text-icon`}
              description={apiKeyHelperText}
            />
            <p
              className={`${idePrefix}-api-key-generation-helper-text`}
              {...idAttribute('IdeAPIKeyGeneration-APIKey-HelperText')}
            >
              {apiKeyHelperText}
              {onDownload && downloadLinkText && (
                <Link
                  className={`${idePrefix}-api-key-generation-download-link`}
                  {...idAttribute('IdeAPIKeyGeneration-APIKey-DownloadLink')}
                  href="#"
                  onClick={this.handleDownload}
                >
                  {downloadLinkText}
                </Link>
              )}
            </p>
          </div>
        )}
      </>
    );
  }

  renderDescriptiveNameStep() {
    const {
      /* eslint-disable no-unused-vars */
      // Omit any non-TextInput props here so that the 'others' rest property
      // can contain additional TextInput props.
      isRequired,
      descriptionText,
      onChange,
      value,
      /* eslint-enable no-unused-vars */
      ...others
    } = this.props.descriptiveNameStep;

    const descriptiveNameProps = {
      className: `${idePrefix}-api-key-generation-descriptive-name-input`,
      ...idAttribute('IdeAPIKeyGeneration-DescriptiveNameInput'),
      id: 'IdeAPIKeyGeneration-DescriptiveNameInput',
      light: true,
      onChange: this.handleDescriptiveNameChange,
      value: this.state.descriptiveName,
      ...others,
    };

    return <TextInput {...descriptiveNameProps} />;
  }

  render() {
    const {
      open,
      labelText,
      heading,
      closeLabelText,
      onClose,
      copyLabelText,
      apiKey,
      /* eslint-disable no-unused-vars */
      // Omit any non-Modal props here so that the 'others' rest property
      // can contain additional Modal props.
      descriptionText,
      isAPIKeyGenerating,
      generatingLabelText,
      apiKeyLabelText,
      isAPIKeyVisible,
      apiKeyVisibilityToggleAltText,
      apiKeySecret,
      apiKeySecretLabelText,
      apiKeySecretVisibilityToggleAltText,
      apiKeyHelperText,
      downloadLinkText,
      onDownload,
      descriptiveNameStep,
      generateLabelText,
      onGenerateAPIKey,
      nextLabelText,
      backLabelText,
      onNext,
      onBack,
      customSteps,
      className,
      onCopyAPIKeyData,
      /* eslint-enable no-unused-vars */
      ...others
    } = this.props;

    const currentStep = this.getCurrentStep();

    const modalProps = {
      open,
      modalHeading: heading,
      modalLabel: labelText,
      modalAriaLabel: labelText || heading,
      'aria-label': labelText || heading,
      primaryButtonText: copyLabelText,
      primaryButtonDisabled:
        !apiKey || !this.state.hasAPIKeyGenerationCompleted,
      secondaryButtonText: closeLabelText,
      iconDescription: closeLabelText,
      onRequestClose: onClose,
      onRequestSubmit: this.handleCopy,
      className: [`${idePrefix}-api-key-generation`, className].join(' '),
      ...idAttribute('IdeAPIKeyGeneration'),
      ...others,
      ...currentStep.modalProps,
    };

    const classNames = [
      `${idePrefix}-api-key-generation--content`,
      currentStep.id,
      currentStep.className,
    ].join(' ');

    return (
      <Modal {...modalProps}>
        <div {...idAttribute(currentStep.id)} className={classNames}>
          {this.renderDescription(currentStep.descriptionText)}
          {currentStep.render()}
        </div>
      </Modal>
    );
  }
}

/* eslint-disable react/sort-prop-types */
IdeAPIKeyGeneration.propTypes = {
  /** CSS class to add to the component */
  className: PropTypes.string,
  /** Whether the API Key Generation modal is currently open. */
  open: PropTypes.bool.isRequired,
  /** Modal label text. */
  labelText: PropTypes.string,
  /** Modal heading text. */
  heading: PropTypes.string.isRequired,
  /** Modal description text. */
  descriptionText: PropTypes.string,

  /** Generated API key value */
  apiKey: PropTypes.string,
  /** Label text for the API key value. */
  apiKeyLabelText: PropTypes.string,
  /** Whether the API key is visible. If false, a visibility toggle is included. */
  isAPIKeyVisible: PropTypes.bool,
  /** Alt text for the API key visibilty toggle. */
  apiKeyVisibilityToggleAltText: PropTypes.string,

  /** Label text for the (primary) generate button. */
  generateLabelText: PropTypes.string,
  /** API key generation handler. */
  onGenerateAPIKey: PropTypes.func,
  /** Whether an API Key is currently being generated. */
  isAPIKeyGenerating: PropTypes.bool,
  /** Label text for the spinner shown while an API key is being generated. */
  generatingLabelText: PropTypes.string,

  /** Label text for the close (X) button and the (secondary) close button. */
  closeLabelText: PropTypes.string.isRequired,
  /** Close button handler. */
  onClose: PropTypes.func,

  /** Label text for the (primary) copy button */
  copyLabelText: PropTypes.string.isRequired,
  /** Copy button handler. The `apiKey` prop value (and 'apiKeySecret' prop value if it
      exists) is automatically copied into the system clipboard. This callback function
      can be used to close the modal and handle anything else. */
  onCopyAPIKeyData: PropTypes.func,

  /** Helper text shown when the API key has been generated. */
  apiKeyHelperText: PropTypes.string,
  /** Download link handler */
  onDownload: PropTypes.func,
  /** Link text shown when there is an `onDownload` property. */
  downloadLinkText: PropTypes.string,

  /** Generated API key secret value */
  apiKeySecret: PropTypes.string,
  /** Label text for the API key secret value */
  apiKeySecretLabelText: PropTypes.string,
  /** Alt text for the API key secret visibilty toggle */
  apiKeySecretVisibilityToggleAltText: PropTypes.string,

  /** API key descriptive name step settings. Any further props are passed to the descriptive
      name TextInput component.  */
  descriptiveNameStep: PropTypes.shape({
    /** Whether a descriptive name value is required. If true, and the `value`
        prop is empty, a descriptive name field is displayed which must be completed before
        the Generate/Next button is enabled. */
    isRequired: PropTypes.bool,
    /** Value of the API key descriptive name.  */
    value: PropTypes.string,
    /** Modal heading text for the descriptive name step. */
    heading: PropTypes.string,
    /** Modal description text for the descriptive name step. */
    descriptionText: PropTypes.string,
    /** Label text for the descriptive name field. */
    labelText: PropTypes.string,
    /** Helper text for the descriptive name field. */
    helperText: PropTypes.string,
    /** Placeholder text for the descriptive name field. */
    placeholder: PropTypes.string,
    /** Handler for changes to the descriptive name field. */
    onChange: PropTypes.func,
    /** Whether the descriptive name is invalid. If true, the Generate/Next button
        is disabled. */
    invalid: PropTypes.bool,
  }),

  /** Label text for the (primary) next button */
  nextLabelText: PropTypes.string,
  /** Handler to notify that the (primary) next button was clicked */
  onNext: PropTypes.func,

  /** Label text for the (secondary) back button */
  backLabelText: PropTypes.string,
  /** Handler to notify that the (secondary) back button was clicked */
  onBack: PropTypes.func,

  /** Custom step settings */
  customSteps: PropTypes.arrayOf(
    PropTypes.shape({
      /** Unique id for this step. */
      stepId: PropTypes.string.isRequired,
      /** Modal heading text for the step. */
      stepHeading: PropTypes.string,
      /** Modal description text for the step. */
      descriptionText: PropTypes.string,
      /** Whether the (primary) next button is disabled. */
      nextButtonDisabled: PropTypes.bool,
      /** Handler to render the step. */
      renderStep: PropTypes.func.isRequired,
      /** Classname applied to the modal content for the step. */
      stepClassName: PropTypes.string,
    })
  ),
};

IdeAPIKeyGeneration.defaultProps = {
  open: false,
  heading: 'Generate API key',
  apiKeyLabelText: 'API key',
  isAPIKeyGenerating: false,
  isAPIKeyVisible: true,
  copyLabelText: 'Copy',
  closeLabelText: 'Close',
  nextLabelText: 'Next',
  backLabelText: 'Back',
  generateLabelText: 'Generate',
  downloadLinkText: 'Download',
};
