/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  ProgressIndicator,
  ProgressStep,
  Toggle,
} from 'carbon-components-react';
import { moderate02 } from '@carbon/motion';
import '../../global/js/utils/props-helper';

import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--create-influencer`;
const componentName = 'CreateInfluencerPrototype';

export let CreateInfluencerPrototype = ({
  className,
  componentBlockClass,
  createComponents,
  currentStep,
  handleToggleState,
  handleActiveSectionIndex,
  includeViewAllToggle,
  open,
  previousState,
  toggleState,
  viewAllToggleLabelText,
  viewAllToggleOffLabelText,
  viewAllToggleOnLabelText,
}) => {
  const [progressIndicatorState, setProgressIndicatorState] = useState('');

  // Animating states need to be reset here otherwise things won't render
  // the way they should after the component mounts/un-mounts
  useEffect(() => {
    if (!previousState?.open && open) {
      setProgressIndicatorState('');
    }
  }, [open, previousState]);

  const handleViewAllToggle = (newToggleValue) => {
    if (newToggleValue) {
      setProgressIndicatorState('closing');
      setTimeout(() => {
        handleToggleState(newToggleValue);
      }, moderate02);
    } else {
      setTimeout(() => {
        handleToggleState(newToggleValue);
        setProgressIndicatorState('opening');
      }, moderate02);
    }
    handleActiveSectionIndex(0);
    const createComponentContainer = document.querySelector(
      `.${componentBlockClass}`
    );
    if (createComponentContainer) {
      createComponentContainer.scrollTop = 0;
    }
  };

  const renderViewAllToggle = () => {
    return (
      <Toggle
        id={`${blockClass}__view-all-toggle`}
        toggled={toggleState}
        labelText={viewAllToggleLabelText}
        labelA={viewAllToggleOffLabelText}
        labelB={viewAllToggleOnLabelText}
        onToggle={(value) => handleViewAllToggle(value)}
        className={`${blockClass}__view-all-toggle`}
        defaultToggled={false}
      />
    );
  };

  // renders the step progression components in the left influencer area
  const renderProgressSteps = () => {
    if (toggleState) {
      return (
        <div className={`${blockClass}__left-nav`}>
          <ProgressIndicator
            currentIndex={currentStep - 1}
            spaceEqually
            vertical
            className={cx(`${blockClass}__progress-indicator`)}>
            {createComponents.steps.map((child, stepIndex) => (
              <ProgressStep
                label={child.props.title}
                key={stepIndex}
                secondaryLabel={child.props.secondaryLabel}
              />
            ))}
          </ProgressIndicator>
        </div>
      );
    }
    return (
      <div className={`${blockClass}__left-nav`}>
        <ProgressIndicator
          currentIndex={currentStep - 1}
          spaceEqually
          vertical
          className={cx(`${blockClass}__progress-indicator`, {
            [`${blockClass}__progress-indicator-opening`]:
              progressIndicatorState === 'opening',
            [`${blockClass}__progress-indicator-closing`]:
              progressIndicatorState === 'closing',
          })}>
          {createComponents.steps
            .filter((step) => !step.props.viewAllOnly)
            .map((child, stepIndex) => (
              <ProgressStep
                label={child.props.title}
                key={stepIndex}
                secondaryLabel={child.props.secondaryLabel}
              />
            ))}
        </ProgressIndicator>
      </div>
    );
  };

  return (
    <div className={cx(blockClass, className)}>
      {renderProgressSteps()}
      {includeViewAllToggle && renderViewAllToggle()}
    </div>
  );
};

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CreateInfluencerPrototype.displayName = componentName;

CreateInfluencerPrototype.propTypes = {
  /**
   * Sets the active side nav item when toggle is on
   */
  activeSectionIndex: PropTypes.number.isRequired,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * The blockClass for the create component (Tearsheet or FullPage)
   */
  componentBlockClass: PropTypes.string.isRequired,
  /**
   * Used to mark the current step on the ProgressIndicator component
   */
  createComponentName: PropTypes.string.isRequired,
  /**
   * An object with section and step components, needed to render the progress steps. This is where the titles are retrieved from.
   */
  createComponents: PropTypes.shape({
    steps: PropTypes.arrayOf(PropTypes.element),
  }).isRequired,
  /**
   * Used to mark the current step on the ProgressIndicator component
   */
  currentStep: PropTypes.number.isRequired,
  /**
   * Handler used to set the active section index
   */
  handleActiveSectionIndex: PropTypes.func,

  /**
   * Handler used to track the state of the toggle
   */
  handleToggleState: PropTypes.func,

  /**
   * Used to optionally include view all toggle
   */
  includeViewAllToggle: PropTypes.bool,

  /**
   * This is the open state of the CreateComponent in which the CreateInfluencer is used from
   */
  open: PropTypes.bool,

  /**
   * This is the open state of the CreateComponent in which the CreateInfluencer is used from
   */
  previousState: PropTypes.object,

  /**
   * The current toggled state to be provided to the Toggle component
   */
  toggleState: PropTypes.bool,

  /**
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),

  /**
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),

  /**
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle === true
  ),
};
