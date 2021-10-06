//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { settings } from 'carbon-components';
import PropTypes from 'prop-types';
import {
  Button,
  Link,
  ProgressIndicator,
  ProgressStep,
} from 'carbon-components-react';
import Launch24 from '@carbon/icons-react/lib/launch/24';
import IdeCreateStep from './ide-create-step';
import { idePrefix } from '../../globals/js/settings';
const { prefix } = settings;

/**
 * The Create pattern provides a standard container for creating objects. It handles the page heading
 * and buttons and can support a two-step or one-step flow. The two-step flow consists of a pre-check
 * selection page followed by a form entry page. The one-step flow is just the form entry page.
 */
class IdeCreate extends React.Component {
  /* eslint-disable react/sort-prop-types */
  static propTypes = {
    /**
     * The primary page heading (required)
     */
    pageTitle: PropTypes.string.isRequired,
    /**
     * The secondary page heading (shows under the primary heading). This can be any JSX fragment
     */
    subTitle: PropTypes.node,
    /**
     * Only include the subtitle when in fixed mode
     */
    subTitleFixedOnly: PropTypes.bool,
    /**
     * The text to go into the breadcrumb link
     */
    breadCrumbText: PropTypes.string,
    /**
     * The URL to navigate to for the breadcrumb. If not specified, the link will be a simple text
     */
    breadCrumbUrl: PropTypes.string,
    /**
     * A callback function to be used on breadcrumb instead of a full page navigation. !!! It only works if breadCrumbUrl is not defined to avoid consumer side confusion
     */
    breadCrumbCallback: PropTypes.func,
    /**
     * Set this flag to call the onCancel function when using the breadcrumb
     */
    useCancelOnBreadCrumb: PropTypes.bool,
    /**
     * Set this flag to put indicate the first step is a pre-check, so that the progress indicator is not
     * shown. The pre-check flow allows for an initial user selection page before seeing the main input
     * form for the create. For example, this could be a page where the user chooses a particular template
     * to base the create on.
     */
    usePreCheck: PropTypes.bool,
    /**
     * The text for the form primary action (usually "Create")
     */
    buttonTextFormAction: PropTypes.string,
    /**
     * The text for the form cancel action (usually "Cancel"). If not specified the button will be hidden
     */
    buttonTextFormCancel: PropTypes.string,
    /**
     * The text for the primary button to move between steps (usually "Next"). Only needed when using
     * the pre-check flow. Can be left blank to hide the button.
     */
    buttonTextStepNext: PropTypes.string,
    /**
     * The text for the secondary button to move back a step (usually "Back"). Only needed when using
     * the pre-check flow.
     */
    buttonTextStepBack: PropTypes.string,
    /**
     * Function that will be called when the user navigates between the steps in the flow.
     */
    onStepChange: PropTypes.func,
    /**
     * Function that will be called when the user clicks on the Cancel button
     */
    onCancel: PropTypes.func,
    /**
     * Function that will be called when the user clicks on the form primary action button
     */
    onFormAction: PropTypes.func,
    /**
     * Set this flag to disable the primary form action
     */
    formActionDisabled: PropTypes.bool,
    /**
     * Set this flag to disable the secondary form action
     */
    disableCancelButton: PropTypes.bool,
    /**
     * Set this flag to disable the next step action
     */
    stepNextDisabled: PropTypes.bool,
    /*
     * Set this flag to true to get a launch out icon of the form action button
     */
    externalLink: PropTypes.bool,
    /*
     * Set this flag to true to remove the onClick behaviour for the progress indicator
     */
    disableProgressOnChange: PropTypes.bool,
    /**
     * Child components
     */
    children: PropTypes.any,
  };

  static defaultProps = {
    onCancel: () => {
      return;
    },
    onFormAction: () => {
      return;
    },
    onStepChange: () => {
      return;
    },
  };

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.headerRef = React.createRef();
    this._handleBackButton = this._handleBackButton.bind(this);
    this._handleNextButton = this._handleNextButton.bind(this);
    this.state = {
      step: 0,
      actionDisabled: false,
      fixedHeader: false,
    };
    // add scroll handler to deal with sticky header
    this.scrollHandler = (event) => {
      this._handlePageScroll(event);
    };
    window.addEventListener('scroll', this.scrollHandler);
  }

  static getDerivedStateFromProps(props, state) {
    if (
      typeof props.formActionDisabled === 'boolean' &&
      props.formActionDisabled !== state.actionDisabled
    ) {
      return { actionDisabled: props.formActionDisabled };
    }
    return null;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  /**
   * Public function to control the disabled state on the primary action button on the page.
   */
  setActionButtonDisabled(state) {
    this.setState({ actionDisabled: state });
  }

  /**
   * Public function to move the flow onto the next page if using the pre-check flow.
   */
  setNextPage() {
    this._handleNextButton();
  }

  _handleBackButton() {
    const step = this.state.step - 1;
    this.setState({ step }, () => this.props.onStepChange(step));
  }

  _handleNextButton() {
    if (!this.props.stepNextDisabled) {
      const step = this.state.step + 1;
      this.setState({ step }, () => this.props.onStepChange(step));
    }
  }

  changeStep(step) {
    this.setState({ step }, () => this.props.onStepChange(step));
  }

  _handlePageScroll() {
    const rect = this.containerRef.current.getBoundingClientRect();
    if (rect.top < 0) {
      if (!this.state.fixedHeader && this.headerRef.current) {
        this.setState({
          style: { paddingTop: `${this.headerRef.current.clientHeight}px` },
        });
      }
      this.setState({ fixedHeader: true });
    } else {
      this.setState({ style: undefined, fixedHeader: false });
    }
  }

  _validateProps() {
    if (
      this.props.usePreCheck &&
      React.Children.count(this.props.children) > 0
    ) {
      if (React.Children.toArray(this.props.children)[0].props.label) {
        throw new Error(
          'Error: label should not be set on first step when usePreCheck is set'
        );
      }
    }
  }

  _onProgressChange(index, stepsDisabled) {
    // We need to count +1 in case usePreCheck is set
    const actualStep = (index) => (this.props.usePreCheck ? index + 1 : index);
    return stepsDisabled[actualStep(index)]
      ? undefined
      : this.changeStep(actualStep(index));
  }

  render() {
    this._validateProps();
    const currentStep = this.state.step;
    const steps = React.Children.toArray(this.props.children).filter(
      (c) => c.type === IdeCreateStep
    );
    const stepLabels = steps.filter((child) => child.props.label);
    const stepsDisabled = steps.map((child) => child.props.disabled);

    // work out which buttons to show
    let button1 = null;
    if (currentStep > 0) {
      button1 = (
        <Button
          kind="secondary"
          disabled={this.props.disableCancelButton}
          className={`${idePrefix}-create-cancel-btn`}
          onClick={this._handleBackButton}
        >
          {this.props.buttonTextStepBack}
        </Button>
      );
    } else if (this.props.buttonTextFormCancel) {
      button1 = (
        <Button
          kind="secondary"
          disabled={this.props.disableCancelButton}
          className={`${idePrefix}-create-cancel-btn`}
          onClick={this.props.onCancel}
        >
          {this.props.buttonTextFormCancel}
        </Button>
      );
    }
    let button2 = null;
    if (currentStep < steps.length - 1) {
      if (this.props.buttonTextStepNext) {
        button2 = (
          <Button
            disabled={this.props.stepNextDisabled}
            onClick={this._handleNextButton}
            className={`${idePrefix}-create-next-btn`}
          >
            {this.props.buttonTextStepNext}
          </Button>
        );
      }
    } else {
      button2 = (
        <Button
          disabled={this.state.actionDisabled}
          onClick={this.props.onFormAction}
          className={`${idePrefix}-create-next-btn`}
          renderIcon={this.props.externalLink ? Launch24 : null}
        >
          {this.props.buttonTextFormAction}
        </Button>
      );
    }
    const buttonGroup = (
      <>
        {button1}
        {button2}
      </>
    );
    let contentClassName = `${idePrefix}-create-content ${prefix}--grid ${idePrefix}--content-alignment`;
    let headerClassName = `${idePrefix}-create-header`;
    if (this.state.fixedHeader) {
      headerClassName += ' fixed';
    }

    return (
      <div ref={this.containerRef} className={`${idePrefix}-create-container`}>
        <div ref={this.headerRef} className={headerClassName}>
          <div className={`${prefix}--grid ${idePrefix}--content-alignment`}>
            <div className={`${prefix}--row ${idePrefix}-create-breadcrumb`}>
              {/* Full page redirect functionality */}
              {this.props.breadCrumbUrl && (
                <Link
                  className={`${prefix}--col`}
                  href={this.props.breadCrumbUrl}
                  onClick={(ev) => {
                    if (
                      this.props.useCancelOnBreadCrumb &&
                      this.props.onCancel
                    ) {
                      this.props.onCancel(ev);
                    }
                  }}
                >
                  {this.props.breadCrumbText}
                </Link>
              )}
              {/* Callback on breadcrumb navigation */}
              {!this.props.breadCrumbUrl && this.props.breadCrumbCallback && (
                <Link
                  className={`${prefix}--col`}
                  href="#"
                  onClick={(ev) => {
                    ev.preventDefault();
                    this.props.breadCrumbCallback(ev);
                  }}
                >
                  {this.props.breadCrumbText}
                </Link>
              )}
              {!this.props.breadCrumbUrl && !this.props.breadCrumbCallback && (
                <p className={`${prefix}--col`}>{this.props.breadCrumbText}</p>
              )}
            </div>
            <div className={`${prefix}--row`}>
              <div className={`${idePrefix}-create-title ${prefix}--col`}>
                <div className={`${idePrefix}-create-title-box`}>
                  <div className={`${idePrefix}-create-heading`}>
                    <h2 className={`${idePrefix}-create-heading-heading`}>
                      {this.props.pageTitle}
                    </h2>
                  </div>
                  {this.props.subTitle &&
                    (!this.props.subTitleFixedOnly ||
                      this.state.fixedHeader) && (
                      <div className={`${idePrefix}-create-form-subtitle`}>
                        <span
                          className={`${idePrefix}-create-form-subtitle-content`}
                        >
                          {this.props.subTitle}
                        </span>
                      </div>
                    )}
                </div>
                <div className={`${idePrefix}-create-buttons`}>
                  <div className={`${idePrefix}-create-button-box`}>
                    {buttonGroup}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={contentClassName} style={this.state.style}>
          <div
            className={`${prefix}--grid ${idePrefix}-create-progress-container`}
          >
            {stepLabels.length > 1 &&
              (!this.props.usePreCheck || currentStep > 0) && (
                <ProgressIndicator
                  currentIndex={
                    this.props.usePreCheck ? currentStep - 1 : currentStep
                  }
                  className={`${prefix}--row progress-bar`}
                  onChange={
                    this.props.disableProgressOnChange
                      ? undefined
                      : (index) => this._onProgressChange(index, stepsDisabled)
                  }
                >
                  {stepLabels.map((child, i) => (
                    <ProgressStep
                      label={child.props.label}
                      key={i}
                      disabled={child.props.disabled}
                    />
                  ))}
                </ProgressIndicator>
              )}
          </div>
          {steps[currentStep]}
        </div>
      </div>
    );
  }
}

export default IdeCreate;
