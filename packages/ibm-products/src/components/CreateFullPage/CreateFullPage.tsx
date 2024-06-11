/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  ForwardedRef,
} from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// Carbon and package components we use.
import {
  ModalFooter,
  ComposedModal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
} from '@carbon/react';
import { CreateInfluencer } from '../CreateInfluencer';
import { ActionSet } from '../ActionSet';
import {
  usePreviousValue,
  useValidCreateStepCount,
  useResetCreateComponent,
  useCreateComponentFocus,
  useCreateComponentStepChange,
} from '../../global/js/hooks';
import { lastIndexInArray } from '../../global/js/utils/lastIndexInArray';
import { getNumberOfHiddenSteps } from '../../global/js/utils/getNumberOfHiddenSteps';
import {
  SimpleHeader,
  overflowAriaLabel_required_if_breadcrumbs_exist,
} from '../SimpleHeader/SimpleHeader';
import { StepsContextType } from '../CreateTearsheet/CreateTearsheet';

const blockClass = `${pkg.prefix}--create-full-page`;
const componentName = 'CreateFullPage';

// This is a general context for the steps container
// containing information about the state of the container
// and providing some callback methods for steps to use
export const StepsContext = createContext<StepsContextType | null>(null);

// This is a context supplied separately to each step in the container
// to let it know what number it is in the sequence of steps
export const StepNumberContext = createContext(-1);

interface HeaderBreadcrumbs {
  /** breadcrumb item key */
  key: string;
  /** breadcrumb item label */
  label: string;
  /** breadcrumb item link */
  href?: string;
  /** breadcrumb item title tooltip */
  title?: string;
  /** Provide if this breadcrumb item represents the current page */
  isCurrentPage?: boolean;
}

type CreateFullPageBreadcrumbsProps =
  | {
      /** The header breadcrumbs */
      breadcrumbs?: null | undefined;

      /**
       * Label for open/close overflow button used for breadcrumb items that do not fit
       */
      breadcrumbsOverflowAriaLabel?: never;
    }
  | {
      /** The header breadcrumbs */
      breadcrumbs: HeaderBreadcrumbs;

      /**
       * Label for open/close overflow button used for breadcrumb items that do not fit
       */
      breadcrumbsOverflowAriaLabel: string;
    };

type CreateFullPageBaseProps = {
  /**
   * The back button text
   */
  backButtonText?: string;

  /**
   * The cancel button text
   */
  cancelButtonText: string;

  /**
   * The main content of the full page
   */
  children?: ReactNode;

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;

  /**
   * Specifies elements to focus on first on render.
   */
  firstFocusElement?: string;

  /**
   * This can be used to open the component to a step other than the first step.
   * For example, a create flow was previously in progress, data was saved, and
   * is now being completed.
   */
  initialStep?: number;

  /**	Maximum visible breadcrumb-items before overflow is used (values less than 1 are treated as 1) */
  maxVisibleBreadcrumbs?: number;

  /**
   * The primary 'danger' button text in the modal
   */
  modalDangerButtonText: string;

  /**
   * The description located below the title in the modal
   */
  modalDescription?: string;

  /**
   * The secondary button text in the modal
   */
  modalSecondaryButtonText: string;

  /**
   * The title located in the header of the modal
   */
  modalTitle: string;

  /**
   * The next button text
   */
  nextButtonText: string;

  /**
   * A prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash?: boolean;

  /**
   * An optional handler that is called when the user closes the full page (by
   * clicking the secondary button, located in the modal, which triggers after
   * clicking the ghost button in the modal
   */
  onClose?: () => void;

  /**
   * Specify a handler for submitting the multi step full page (final step).
   * This function can _optionally_ return a promise that is either resolved or rejected and the CreateFullPage will handle the submitting state of the create button.
   */
  onRequestSubmit: () => void;

  /**
   * A secondary title of the full page, displayed in the influencer area
   */
  secondaryTitle?: string;

  /**
   * @ignore
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel?: string;

  /**
   * The submit button text
   */
  submitButtonText: string;

  /**
   * The main title of the full page, displayed in the header area
   */
  title?: string;
};

type CreateFullPageProps = CreateFullPageBaseProps &
  CreateFullPageBreadcrumbsProps;

interface Step {
  introStep?: boolean;
  secondaryLabel?: string;
  shouldIncludeStep?: boolean;
  title?: string;
}
/**
 * Use with creations that must be completed in order for a service to be usable.
 *
 * ### Grid
 *
 * The `CreateFullPage` component utilizes Carbons' grid system in the inner
content of the main section inside of the component. You can read more guidance
on the Carbon's grid system
[here](https://www.carbondesignsystem.com/guidelines/2x-grid/overview). You can
include `<Row>` and `<Column>` components inside of each `CreateFullPageStep`
component to get the desired affect.
 */
export let CreateFullPage = React.forwardRef(
  (
    {
      breadcrumbsOverflowAriaLabel,
      breadcrumbs,
      backButtonText,
      cancelButtonText,
      children,
      className,
      initialStep,
      maxVisibleBreadcrumbs,
      modalDangerButtonText,
      modalDescription,
      modalSecondaryButtonText,
      modalTitle,
      nextButtonText,
      onClose,
      onRequestSubmit,
      firstFocusElement,
      submitButtonText,
      noTrailingSlash,
      title,
      secondaryTitle,
      ...rest
    }: CreateFullPageProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [createFullPageActions, setCreateFullPageActions] = useState([]);
    const [shouldViewAll, setShouldViewAll] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const previousState = usePreviousValue({ currentStep, open });
    const [isDisabled, setIsDisabled] = useState(false);
    const [onNext, setOnNext] = useState();
    const [onMount, setOnMount] = useState();
    const [stepData, setStepData] = useState<Step[]>([]);
    const [firstIncludedStep, setFirstIncludedStep] = useState(1);
    const [lastIncludedStep, setLastIncludedStep] = useState<number>();

    useEffect(() => {
      const firstItem =
        stepData.findIndex((item) => item?.shouldIncludeStep) + 1;
      const lastItem = lastIndexInArray(stepData, 'shouldIncludeStep', true);
      if (firstItem !== firstIncludedStep) {
        setFirstIncludedStep(firstItem);
      }
      if (lastItem !== lastIncludedStep) {
        setLastIncludedStep(lastItem);
      }

      /**@ts-ignore */
      if (open && initialStep) {
        const numberOfHiddenSteps = getNumberOfHiddenSteps(
          stepData,
          initialStep
        );
        setCurrentStep(Number(initialStep + numberOfHiddenSteps));
      }
    }, [
      stepData,
      firstIncludedStep,
      lastIncludedStep,
      initialStep,
      modalIsOpen,
    ]);

    useCreateComponentFocus({
      previousState,
      currentStep,
      blockClass,
      onMount,
      firstFocusElement,
    });
    useValidCreateStepCount(stepData.length, componentName);
    useResetCreateComponent({
      firstIncludedStep,
      previousState,
      /**@ts-ignore */
      open,
      setCurrentStep,
      stepData,
      /**@ts-ignore */
      initialStep,
      totalSteps: stepData?.length,
      componentName,
    });
    useCreateComponentStepChange({
      firstIncludedStep,
      lastIncludedStep,
      stepData,
      onNext,
      isSubmitDisabled: isDisabled,
      setCurrentStep,
      setIsSubmitting,
      /**@ts-ignore */
      setShouldViewAll,
      onClose,
      onRequestSubmit,
      componentName,
      currentStep,
      shouldViewAll,
      backButtonText,
      cancelButtonText,
      submitButtonText,
      nextButtonText,
      isSubmitting,
      componentBlockClass: blockClass,
      setCreateComponentActions: setCreateFullPageActions,
      setModalIsOpen,
    });
    // currently, we are not supporting the use of 'view all' toggle state
    /* istanbul ignore next */
    return (
      <div
        {...rest}
        ref={ref}
        className={cx(blockClass, className)}
        {...getDevtoolsProps(componentName)}
      >
        {(title || breadcrumbs) && (
          <SimpleHeader
            title={title}
            breadcrumbs={breadcrumbs}
            noTrailingSlash={noTrailingSlash}
            overflowAriaLabel={breadcrumbsOverflowAriaLabel}
            maxVisible={maxVisibleBreadcrumbs}
            className={`${blockClass}__header`}
          />
        )}
        <div className={`${blockClass}__influencer-and-body-container`}>
          <div className={`${blockClass}__influencer`}>
            <CreateInfluencer
              stepData={stepData}
              currentStep={currentStep}
              title={secondaryTitle}
            />
          </div>
          <div className={`${blockClass}__body`}>
            <div className={`${blockClass}__main`}>
              <div className={`${blockClass}__content`}>
                <Form className={`${blockClass}__form`} aria-label={title}>
                  <StepsContext.Provider
                    value={
                      {
                        currentStep,
                        setIsDisabled,
                        setOnNext: (fn) => setOnNext(() => fn),
                        setOnMount: (fn) => setOnMount(() => fn),
                        setStepData,
                        stepData,
                      } as any
                    }
                  >
                    {React.Children.map(children, (child, index) => (
                      <StepNumberContext.Provider value={index + 1}>
                        {child}
                      </StepNumberContext.Provider>
                    ))}
                  </StepsContext.Provider>
                </Form>
              </div>
              <ActionSet
                className={`${blockClass}__buttons`}
                actions={createFullPageActions}
                buttonSize="2xl"
                size="2xl"
              />
            </div>
          </div>
          <ComposedModal
            className={`${blockClass}__modal`}
            size="sm"
            open={modalIsOpen}
            aria-label={modalTitle}
            onClose={() => {
              setModalIsOpen(false);
            }}
          >
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
                }}
                data-modal-primary-focus
              >
                {modalSecondaryButtonText}
              </Button>
              <Button type="button" kind="danger" onClick={onClose}>
                {modalDangerButtonText}
              </Button>
            </ModalFooter>
          </ComposedModal>
        </div>
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

  /** The header breadcrumbs */
  /**@ts-ignore */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      /** breadcrumb item key */
      key: PropTypes.string.isRequired,
      /** breadcrumb item label */
      label: PropTypes.string.isRequired,
      /** breadcrumb item link */
      href: PropTypes.string,
      /** breadcrumb item title tooltip */
      title: PropTypes.string,
      /** Provide if this breadcrumb item represents the current page */
      isCurrentPage: PropTypes.bool,
    })
  ),

  /**
   * Label for open/close overflow button used for breadcrumb items that do not fit
   */
  breadcrumbsOverflowAriaLabel: overflowAriaLabel_required_if_breadcrumbs_exist,

  /**
   * The cancel button text
   */
  cancelButtonText: PropTypes.string.isRequired,

  /**
   * The main content of the full page
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Specifies elements to focus on first on render.
   */
  firstFocusElement: PropTypes.string,

  /**
   * This can be used to open the component to a step other than the first step.
   * For example, a create flow was previously in progress, data was saved, and
   * is now being completed.
   */
  initialStep: PropTypes.number,

  /**	Maximum visible breadcrumb-items before overflow is used (values less than 1 are treated as 1) */
  maxVisibleBreadcrumbs: PropTypes.number,

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
   * A prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash: PropTypes.bool,

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
   * A secondary title of the full page, displayed in the influencer area
   */
  secondaryTitle: PropTypes.string,

  /**
   * @ignore
   * The aria label to be used for the UI Shell SideNav Carbon component
   */
  sideNavAriaLabel: PropTypes.string,

  /**
   * The submit button text
   */
  submitButtonText: PropTypes.string.isRequired,

  /**
   * The main title of the full page, displayed in the header area
   */
  title: PropTypes.string,
};
