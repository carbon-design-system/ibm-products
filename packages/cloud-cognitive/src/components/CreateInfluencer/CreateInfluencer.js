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
import {
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react/lib/components/UIShell';
import { moderate02 } from '@carbon/motion';
import '../../global/js/utils/props-helper';

import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--create-influencer`;
const componentName = 'CreateInfluencer';

export let CreateInfluencer = ({
  activeSectionIndex,
  className,
  componentBlockClass,
  createComponentName,
  createComponents,
  currentStep,
  handleToggleState,
  handleActiveSectionIndex,
  includeViewAllToggle,
  open,
  previousState,
  sideNavAriaLabel,
  toggleState,
  viewAllToggleLabelText,
  viewAllToggleOffLabelText,
  viewAllToggleOnLabelText,
}) => {
  const [progressIndicatorState, setProgressIndicatorState] = useState('');
  const [sideNavState, setSideNavState] = useState('');

  // Animating states need to be reset here otherwise things won't render
  // the way they should after the component mounts/unmounts
  /* istanbul ignore next */
  useEffect(() => {
    if (!previousState?.open && open) {
      setSideNavState('');
      setProgressIndicatorState('');
    }
  }, [open, previousState]);

  /* istanbul ignore next */
  const handleViewAllToggle = (newToggleValue) => {
    if (newToggleValue) {
      setProgressIndicatorState('closing');
      setTimeout(() => {
        handleToggleState(newToggleValue);
        setSideNavState('opening');
      }, moderate02);
    } else {
      setSideNavState('closing');
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
    /* istanbul ignore next */
    if (toggleState) {
      return (
        <div className={`${blockClass}__left-nav`}>
          <SideNav
            expanded
            isFixedNav
            aria-label={sideNavAriaLabel}
            className={cx({
              [`${blockClass}__side-nav-opening`]: sideNavState === 'opening',
              [`${blockClass}__side-nav-closing`]: sideNavState === 'closing',
            })}
          >
            <SideNavItems>
              {createComponents.sections?.length &&
                createComponents.sections.map(
                  (sectionComponent, sectionIndex) => (
                    <SideNavLink
                      href={`#${sectionComponent?.props?.id}`}
                      key={sectionIndex}
                      isActive={activeSectionIndex === sectionIndex}
                      onClick={(event) => {
                        event.preventDefault();
                        handleActiveSectionIndex(sectionIndex);
                        if (sectionComponent.props.id) {
                          const scrollTarget = document.querySelector(
                            `#${sectionComponent.props.id}`
                          );
                          const scrollContainer = document.querySelector(
                            `.${componentBlockClass}__content`
                          );
                          const scrollTopValue =
                            createComponentName === 'CreateFullPage'
                              ? scrollTarget?.getBoundingClientRect()?.y +
                                scrollContainer?.scrollTop
                              : scrollTarget?.offsetTop;
                          scrollContainer?.scrollTo({
                            top: scrollTopValue,
                            behavior: 'smooth',
                          });
                        } else {
                          console.warn(
                            `${createComponentName}: ${createComponentName}Section component is missing a required prop of 'id'`
                          );
                        }
                      }}
                    >
                      {sectionComponent.props.title}
                    </SideNavLink>
                  )
                )}
            </SideNavItems>
          </SideNav>
        </div>
      );
    }

    const stepsWithoutIntroStep = createComponents.steps.filter(
      (item) => !item.props.introStep
    );
    const introStepFound = !!createComponents.steps.filter(
      (item) => item.props.introStep
    ).length;
    return (
      <div className={`${blockClass}__left-nav`}>
        {currentStep === 1 &&
        createComponents.steps[0]?.props?.introStep ? null : (
          <ProgressIndicator
            currentIndex={introStepFound ? currentStep - 2 : currentStep - 1}
            spaceEqually
            vertical
            className={cx(`${blockClass}__progress-indicator`, {
              [`${blockClass}__progress-indicator-opening`]:
                progressIndicatorState === 'opening',
              [`${blockClass}__progress-indicator-closing`]:
                progressIndicatorState === 'closing',
            })}
          >
            {stepsWithoutIntroStep.map((child, stepIndex) => (
              <ProgressStep
                label={child.props.title}
                key={stepIndex}
                secondaryLabel={child.props.secondaryLabel}
              />
            ))}
          </ProgressIndicator>
        )}
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
CreateInfluencer.displayName = componentName;

CreateInfluencer.propTypes = {
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
    sections: PropTypes.arrayOf(PropTypes.element),
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
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: PropTypes.string.isRequired.if(
    ({ includeViewAllToggle }) => includeViewAllToggle
  ),

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
