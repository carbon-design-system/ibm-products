/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useCallback, useState, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import { CREATE_FULL_PAGE_SECTION, CREATE_FULL_PAGE_STEP } from './constants';

// Carbon and package components we use.
import {
  Grid,
  ModalFooter,
  ProgressIndicator,
  ProgressStep,
  Toggle,
  ComposedModal,
  ModalHeader,
  ModalBody,
  Button,
} from 'carbon-components-react';
import {
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react/lib/components/UIShell';
import { ActionSet } from '../ActionSet';
const blockClass = `${pkg.prefix}--create-full-page`;
const componentName = 'CreateFullPage';

// Custom PropType validator which checks and ensures that the children property has no more than 4 nodes
const isValidChildren =
  () =>
  ({ children }) => {
    children.length > 1 &&
      children.map((child) => {
        if (
          child &&
          child.props &&
          child.props.type !== CREATE_FULL_PAGE_STEP
        ) {
          throw new Error(
            'Each child of Create Full Page is required to be a `CreateFullPageStep`. Please remove the HTML element, or wrap it around the `CreateFullPageStep` component.'
          );
        }
        return;
      });
  };

const usePreviousValue = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export let CreateFullPage = React.forwardRef(
  (
    {
      backButtonText,
      cancelButtonText,
      children,
      className,
      includeViewAllToggle,
      modalDangerButtonText,
      modalDescription,
      modalSecondaryButtonText,
      modalTitle,
      nextButtonText,
      onClose,
      onRequestSubmit,
      sideNavAriaLabel,
      submitButtonText,
      viewAllToggleLabelText,
      viewAllToggleOffLabelText,
      viewAllToggleOnLabelText,
      ...rest
    },
    ref
  ) => {
    const [createFullPageActions, setCreateFullPageActions] = useState([]);
    const [shouldViewAll, setShouldViewAll] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const previousState = usePreviousValue({ currentStep, open });

    useEffect(() => {
      const onUnmount = () => {
        setIsSubmitting(false);
        setShouldViewAll(false);
        onClose();
      };
      const handleOnRequestSubmit = async () => {
        // check if onRequestSubmit returns a promise
        try {
          await onRequestSubmit();
          onUnmount();
        } catch (error) {
          setIsSubmitting(false);
          console.warn(`${componentName} submit error: ${error}`);
        }
      };
      const isSubmitDisabled = () => {
        let step = 0;
        let submitDisabled = false;
        const createFullPageSteps = getFullPageSteps();
        createFullPageSteps.forEach((child) => {
          step++;
          if (currentStep === step) {
            submitDisabled = child.props.disableSubmit;
          }
        });
        return submitDisabled;
      };
      const handleNext = async () => {
        setIsSubmitting(true);
        const createSteps = getFullPageSteps();
        if (createSteps[currentStep - 1].props.onNext) {
          try {
            await createSteps[currentStep - 1].props.onNext();
            continueToNextStep();
          } catch (error) {
            setIsSubmitting(false);
            console.warn(`${componentName} onNext error: ${error}`);
          }
        } else {
          continueToNextStep();
        }
      };
      const handleSubmit = async () => {
        setIsSubmitting(true);
        const createSteps = getFullPageSteps();
        // last step should have onNext as well
        if (createSteps[currentStep - 1].props.onNext) {
          try {
            await createSteps[currentStep - 1].props.onNext();
            await handleOnRequestSubmit();
          } catch (error) {
            setIsSubmitting(false);
            console.warn(`${componentName} onNext error: ${error}`);
          }
        } else {
          await handleOnRequestSubmit();
        }
      };
      if (getFullPageSteps()?.length) {
        const createSteps = getFullPageSteps();
        const total = createSteps.length;
        const buttons = [];
        if (total > 1 && !shouldViewAll) {
          buttons.push({
            label: backButtonText,
            onClick: () => setCurrentStep((prev) => prev - 1),
            kind: 'secondary',
            disabled: currentStep === 1,
          });
        }
        buttons.push({
          label: cancelButtonText,
          onClick: () => {
            setModalIsOpen(true);
          },
          kind: 'ghost',
        });
        buttons.push({
          label: shouldViewAll
            ? submitButtonText
            : currentStep < total
            ? nextButtonText
            : submitButtonText,
          onClick: shouldViewAll
            ? handleSubmit
            : currentStep < total
            ? handleNext
            : handleSubmit,
          disabled: isSubmitDisabled(),
          kind: 'primary',
          loading: isSubmitting,
          className: `${blockClass}__create-button`,
        });
        setCreateFullPageActions(buttons);
      }
    }, [
      getFullPageSteps,
      children,
      backButtonText,
      cancelButtonText,
      currentStep,
      onClose,
      nextButtonText,
      submitButtonText,
      onRequestSubmit,
      isSubmitting,
      modalIsOpen,
      shouldViewAll,
    ]);

    useEffect(() => {
      const createSteps = getFullPageSteps();
      const total = createSteps.length;
      if (total === 1) {
        console.warn(
          `${componentName}: CreateFullPages with one step are not permitted. If you require only one step, please use either the CreateTearsheet, CreateSidePanel, or CreateModal components.`
        );
      }
    }, [getFullPageSteps]);

    const continueToNextStep = () => {
      setIsSubmitting(false);
      setCurrentStep((prev) => prev + 1);
    };

    // Log a warning to the console in the event there are no CreateTearsheetSection components
    // inside of the CreateTearsheetSteps when the viewAll toggle is provided and turned on.
    useEffect(() => {
      if (includeViewAllToggle && shouldViewAll) {
        let childrenArray = Array.isArray(children) ? children : [children];
        const fullPageStepComponents = childrenArray.filter((child) =>
          isFullPageStep(child)
        );
        let fullPageSectionComponents = [];
        fullPageStepComponents.forEach((child, index) => {
          // We have received children for a TearsheetStep
          if (shouldViewAll && typeof child.props.children !== 'undefined') {
            // Only a string was provided as children of CreateTearsheetStep, this is not permitted when using view all toggle
            if (typeof child.props.children === 'string') {
              console.warn(
                `${componentName}: You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop.`
              );
            } else {
              // The TearsheetStep has an array of children, lets check each one to see if it is a TearsheetSection
              if (child.props.children.length) {
                child.props.children.forEach((stepChild) => {
                  if (isFullPageSection(stepChild)) {
                    fullPageSectionComponents.push(stepChild);
                  }
                });
              } else {
                // The TearsheetStep only has a single React element as a child, lets check to see if it is a TearsheetSection
                if (isFullPageSection(child.props.children)) {
                  fullPageSectionComponents.push(child.props.children);
                }
              }
            }
          }
          // If there are fewer CreateTearsheetSection components than CreateTearsheetStep components
          // it means that each CreateTearsheetStep does not have at least one CreateTearsheetSection
          // this is not permitted when using view all toggle
          if (
            fullPageSectionComponents.length < fullPageStepComponents.length &&
            index === fullPageStepComponents.length - 1 // wait until we've finished checking each TearsheetStep before giving a warning
          ) {
            console.warn(
              `${componentName}: You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop.`
            );
          }
          // We have received a single child element, lets check to see that it is
          // a CreateTearsheetSection component, if it is not we should add a console
          // warning, as each CreateTearsheetStep required at least one CreateTearsheetSection,
          // when using the view all toggle
          if (
            shouldViewAll &&
            typeof child.props.children !== 'undefined' &&
            !child.props.children.length
          ) {
            if (!isFullPageSection(child.props.children)) {
              console.warn(
                `${componentName}: You must have at least one CreateTearsheetSection component in a CreateTearsheetStep when using the 'includeViewAllToggle' prop.`
              );
            }
          }
        });
      }
    }, [includeViewAllToggle, shouldViewAll, children]);

    // returns an array of full page steps
    const getFullPageSteps = useCallback(() => {
      const steps = [];
      const childrenArray = Array.isArray(children) ? children : [children];
      childrenArray.forEach((child) => {
        if (isFullPageStep(child)) {
          steps.push(child);
        }
      });
      return steps;
    }, [children]);

    // check if child is a full page step component
    const isFullPageStep = (child) => {
      if (child && child.props && child.props.type === CREATE_FULL_PAGE_STEP) {
        return true;
      }
      return false;
    };

    // check if child is a full page section component
    const isFullPageSection = (child) => {
      if (
        child &&
        child.props &&
        child.props.type === CREATE_FULL_PAGE_SECTION
      ) {
        return true;
      }
      return false;
    };

    // renders the step progression components in the left influencer area
    const renderProgressSteps = (childrenElements) => {
      let childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      const fullPageSectionComponents = childrenArray.filter((child) =>
        isFullPageStep(child)
      );
      let sectionChildElements = [];
      fullPageSectionComponents.forEach((child) => {
        // we have received an array of children, lets check to see that each child is
        // a FullpageSection component before adding it to sectionChildElements
        if (shouldViewAll && child.props.children.length) {
          child.props.children.forEach((stepChild) => {
            if (isFullPageSection(stepChild)) {
              sectionChildElements.push(stepChild);
            }
          });
        }
        // we have received a single child element, lets check to see that it is
        // a CreateTearsheetSection component before adding it to sectionChildElements
        if (
          shouldViewAll &&
          typeof child.props.children !== 'undefined' &&
          !child.props.children.length
        ) {
          if (isFullPageSection(child.props.children)) {
            sectionChildElements.push(child.props.children);
          }
        }
      });
      if (shouldViewAll) {
        return (
          <SideNav expanded isFixedNav aria-label={sideNavAriaLabel}>
            <SideNavItems>
              {sectionChildElements?.length &&
                sectionChildElements.map((sectionChild, sectionIndex) => (
                  <SideNavLink
                    // href="javascript:void(0)"
                    href={`#${sectionChild.props.id}`}
                    key={sectionIndex}
                    isActive={activeSectionIndex === sectionIndex}
                    // onClick={(e) => {
                    // e.preventDefault();
                    //   setActiveSectionIndex(sectionIndex);
                    //   if (!sectionChild.props.id) {
                    //     console.warn(
                    //       `${componentName}: CreateFullPageSection is missing a required prop of 'id'`
                    //     );
                    //   }
                    // }}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSectionIndex(sectionIndex);
                      if (sectionChild.props.id) {
                        const scrollTarget = document.querySelector(
                          `#${sectionChild.props.id}`
                        );
                        const scrollContainer = document.querySelector(
                          `.${blockClass}__content`
                        );
                        console.log(scrollTarget.getBoundingClientRect());
                        console.log(scrollTarget.offsetTop);
                        scrollContainer.scrollTo({
                          top: scrollTarget.getBoundingClientRect().y,
                          behavior: 'smooth',
                        });
                      } else {
                        console.warn(
                          `${componentName}: CreateFullPageSection is missing a required prop of 'id'`
                        );
                      }
                    }}>
                    {sectionChild.props.title}
                  </SideNavLink>
                ))}
            </SideNavItems>
          </SideNav>
        );
      }
      return (
        <div className={`${blockClass}__left-nav`}>
          <ProgressIndicator
            currentIndex={currentStep - 1}
            spaceEqually
            vertical
            className={`${blockClass}__progress-indicator`}>
            {fullPageSectionComponents.map((child, stepIndex) => (
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

    // renders all children (CreateFullPageSteps and regular children elements)
    const renderChildren = (childrenElements) => {
      let step = 0;
      const childrenArray = Array.isArray(childrenElements)
        ? childrenElements
        : [childrenElements];
      return (
        <>
          {childrenArray.map((child, stepIndex) => {
            if (!isFullPageStep(child)) {
              return child;
            }
            step++;
            return React.cloneElement(
              child,
              {
                className: cx(child.props.className, {
                  [`${blockClass}__step--hidden-step`]:
                    !shouldViewAll && currentStep !== step,
                  [`${blockClass}__step--visible-step`]: currentStep === step,
                  [`${blockClass}__step--first-panel-step`]:
                    !previousState?.open &&
                    open &&
                    previousState?.currentStep === 0 &&
                    stepIndex === 0,
                }),
                key: `key_${stepIndex}`,
              },
              <>
                {!shouldViewAll && (
                  <h4 className={`${blockClass}__step--title`}>
                    {renderStepTitle(stepIndex)}
                  </h4>
                )}
                {renderStepChildren(child.props.children)}
              </>
            );
          })}
        </>
      );
    };

    const renderStepChildren = (fullPageStepComponent, isLastFullPageStep) => {
      const fullPageStepComponents = Array.isArray(fullPageStepComponent)
        ? fullPageStepComponent
        : [fullPageStepComponent];
      return (
        <>
          {fullPageStepComponents.map((child, index) => {
            if (!isFullPageSection(child)) {
              return child;
            }
            // Needed to be able to not render the divider
            // line on the last section of the last step
            const isLastSectionOfLastStep =
              isLastFullPageStep && fullPageStepComponents.length - 1 === index;
            return React.cloneElement(
              child,
              {
                className: cx(child.props.className, {
                  [`${blockClass}__step--hidden-section`]:
                    child.props.viewAllOnly && !shouldViewAll,
                  [`${blockClass}__step--visible-section`]:
                    !child.props.viewAllOnly ||
                    (child.props.viewAllOnly && shouldViewAll),
                }),
                key: `key_${index}`,
              },
              <>
                {shouldViewAll && (
                  <h4 className={`${blockClass}__step--heading`}>
                    {child.props.title}
                  </h4>
                )}
                {child}
                {shouldViewAll && !isLastSectionOfLastStep && (
                  <span className={`${blockClass}__section--divider`} />
                )}
              </>
            );
          })}
        </>
      );
    };

    // renders the individual step title
    const renderStepTitle = (stepIndex) => {
      const fullPageSteps = getFullPageSteps();
      const stepTitle =
        (fullPageSteps && fullPageSteps[stepIndex]?.props.title) || null;
      return stepTitle;
    };

    // set initial focus when the step changes, if there is not an input to focus
    // the next/create button receives focus
    useEffect(() => {
      if (previousState?.currentStep !== currentStep && currentStep > 0) {
        const visibleStepInnerContent = document.querySelector(
          `.${blockClass}__step.${blockClass}__step--visible-step`
        );
        const fullPageSteps = getFullPageSteps();
        const focusableStepElements =
          fullPageSteps &&
          fullPageSteps.length &&
          getFocusableElements(visibleStepInnerContent);
        const activeStepComponent =
          fullPageSteps &&
          fullPageSteps.length &&
          fullPageSteps[currentStep - 1];
        if (activeStepComponent && activeStepComponent.props.onMount) {
          activeStepComponent.props.onMount();
        }
        if (focusableStepElements && focusableStepElements.length) {
          focusableStepElements[0].focus();
        } else {
          const nextButton = document.querySelector(
            `.${blockClass}__create-button`
          );
          nextButton?.focus();
        }
      }
    }, [currentStep, getFullPageSteps, previousState]);

    // returns an array of focusable elements, for use in auto focusing the first input on a step
    const getFocusableElements = (element) => {
      return [
        ...element.querySelectorAll(
          'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
        ),
      ].filter((e) => !e.hasAttribute('disabled'));
    };

    const handleViewAllToggle = (toggleState) => {
      setShouldViewAll(toggleState);
      setActiveSectionIndex(0);
      // scroll to top of full page page upon toggling view all option
      if (toggleState) {
        const createFullPageContainer = document.querySelector(
          `.${blockClass}`
        );
        createFullPageContainer.scrollTop = 0;
      }
    };

    // track scrolling/intersection of create sections so that we know
    // which section is active (updates the SideNavItems `isActive` prop)
    useEffect(() => {
      if (shouldViewAll) {
        const fullPageMainContent = document.querySelector(
          `.${pkg.prefix}--create-full-page__content`
        );
        let options = {
          root: fullPageMainContent,
          rootMargin: '0px',
          threshold: 0,
        };
        // Convert NodeList to array so we can find the index
        // of the section that should be marked as `active`.
        const viewAllSections = Array.from(
          document.querySelectorAll(
            // `.${pkg.prefix}--create-full-page__step`
            `.${pkg.prefix}--create-full-page__section.${pkg.prefix}--create-full-page__step--visible-step`
          )
        );
        const observer = new IntersectionObserver((entries) => {
          // isIntersecting is true when element and viewport/options.root are overlapping
          // isIntersecting is false when element and viewport/options.root don't overlap
          if (entries[0].isIntersecting) {
            // DOM element that is intersecting
            const visibleTarget = entries[0].target;
            // Get visible element index
            const visibleTargetIndex = viewAllSections.findIndex(
              (item) => item.id === visibleTarget.id
            );
            setActiveSectionIndex(visibleTargetIndex);
          }
        }, options);
        // console.log(viewAllSections);
        viewAllSections.forEach((section) => {
          observer.observe(section);
        });
      }
    }, [shouldViewAll]);

    const renderViewAllToggle = () => {
      return (
        <Toggle
          className={`${blockClass}__influencer-toggle`}
          toggled={shouldViewAll}
          labelText={viewAllToggleLabelText}
          labelA={viewAllToggleOffLabelText}
          labelB={viewAllToggleOnLabelText}
          onToggle={(value) => handleViewAllToggle(value)}
          aria-label={viewAllToggleLabelText}
          id={`${blockClass}__influencer-toggle`}
        />
      );
    };

    return (
      <div {...rest} ref={ref} className={cx(blockClass, className)}>
        <div className={`${blockClass}__influencer`}>
          {renderProgressSteps(children)}
          {includeViewAllToggle && renderViewAllToggle()}
        </div>
        <div className={`${blockClass}__body`}>
          <div className={`${blockClass}__main`}>
            <div className={`${blockClass}__content`}>
              {renderChildren(children)}
              {/* <Grid>{renderChildren(children)}</Grid> */}
            </div>
            <ActionSet
              className={`${blockClass}__buttons`}
              actions={createFullPageActions}
              size="max"
            />
          </div>
        </div>
        <ComposedModal size="sm" open={modalIsOpen}>
          <ModalHeader title={modalTitle} />
          <ModalBody>
            <p>{modalDescription}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              kind="secondary"
              onClick={() => {
                setModalIsOpen(!modalIsOpen);
              }}>
              {modalSecondaryButtonText}
            </Button>
            <Button type="button" kind="danger" onClick={onClose}>
              {modalDangerButtonText}
            </Button>
          </ModalFooter>
        </ComposedModal>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag.
CreateFullPage = pkg.checkComponentEnabled(CreateFullPage, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
CreateFullPage.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
CreateFullPage.propTypes = {
  /**
   * The back button text
   */
  backButtonText: PropTypes.string.isRequired,

  /**
   * The cancel button text
   */
  cancelButtonText: PropTypes.string.isRequired,

  /**
   * The main content of the full page
   */
  children: isValidChildren(),

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * An optional prop that provides a toggle element in the left side influencer panel
   */
  includeViewAllToggle: PropTypes.bool,

  /**
   * The primary 'danger' button text in the modal
   */
  modalDangerButtonText: PropTypes.string.isRequired,

  /**
   * The description located below the title in the modal
   */
  modalDescription: PropTypes.string,

  /**
   * The secondary button text in the modal
   */
  modalSecondaryButtonText: PropTypes.string.isRequired,

  /**
   * The title located in the header of the modal
   */
  modalTitle: PropTypes.string.isRequired,

  /**
   * The next button text
   */
  nextButtonText: PropTypes.string.isRequired,

  /**
   * An optional handler that is called when the user closes the full page (by
   * clicking the secondary button, located in the modal, which triggers after
   * clicking the ghost button in the modal
   */
  onClose: PropTypes.func,

  /**
   * Specify a handler for submitting the multi step full page (final step).
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateFullPage will handle the submitting state of the create button.
   */
  onRequestSubmit: PropTypes.func.isRequired,
  /**
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: PropTypes.string,
  /**
   * The submit button text
   */
  submitButtonText: PropTypes.string.isRequired,

  /**
   * The main title of the full page, displayed in the header area.
   */
  title: PropTypes.node,

  /**
   * Sets the label text for the view all toggle component
   */
  viewAllToggleLabelText: PropTypes.string,

  /**
   * Sets the label text for the view all toggle `off` text
   */
  viewAllToggleOffLabelText: PropTypes.string,

  /**
   * Sets the label text for the view all toggle `on` text
   */
  viewAllToggleOnLabelText: PropTypes.string,
};
