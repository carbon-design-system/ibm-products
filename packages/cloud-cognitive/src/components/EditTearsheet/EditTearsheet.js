/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useState, useRef, createContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Grid,
  Form,
  SideNav,
  SideNavItems,
  SideNavMenuItem,
} from 'carbon-components-react';
import { pkg } from '../../settings';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { Tearsheet } from '../Tearsheet/Tearsheet';

const componentName = 'EditTearsheet';
const blockClass = `${pkg.prefix}--tearsheet-edit`;

// This is a general context for the forms container
// containing information about the state of the container
// and providing some callback methods for forms to use
export const FormContext = createContext(null);

// This is a context supplied separately to each form in the container
// to let it know what number it is in the sequence of forms
export const FormNumberContext = createContext(0);

// Default values for props
const defaults = {
  verticalPosition: 'normal',
  influencerWidth: 'narrow',
};

export let EditTearsheet = forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).
      cancelButtonText,
      children,
      className,
      description,
      influencerWidth = defaults.influencerWidth,
      label,
      onClose,
      open,
      submitButtonText,
      title,
      verticalPosition = defaults.verticalPosition,
      onHandleModalClick,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [currentForm, setCurrentForm] = useState(0);
    const contentRef = useRef();

    const handleCurrentForm = (form) => {
      setCurrentForm(form);
    };

    const sideNavItems = [
      { label: 'Topic Name' },
      { label: 'Location' },
      { label: 'Partitions' },
      { label: 'Message retention' },
    ];

    const influencer = (
      <div className="tearsheet-stories__dummy-influencer-block">
        <SideNav
          aria-label="Side navigation"
          className={`${blockClass}__side-nav`}
          expanded={true}
          isFixedNav={false}
        >
          <SideNavItems>
            {sideNavItems.map((item, index) => {
              return (
                <SideNavMenuItem
                  key={index}
                  onClick={() => handleCurrentForm(index)}
                  isActive={currentForm === index}
                >
                  {item.label}
                </SideNavMenuItem>
              );
            })}
          </SideNavItems>
        </SideNav>
      </div>
    );

    return (
      <Tearsheet
        {...rest}
        {...getDevtoolsProps(componentName)}
        actions={[
          {
            label: submitButtonText,
            onClick: onHandleModalClick,
            kind: 'primary',
          },
          {
            label: cancelButtonText,
            onClick: onHandleModalClick,
            kind: 'secondary',
          },
        ]}
        className={cx(blockClass, className)}
        description={description}
        hasCloseIcon={false}
        influencer={influencer}
        influencerPosition="left"
        influencerWidth={influencerWidth}
        label={label}
        onClose={onClose}
        open={open}
        size="wide"
        title={title}
        verticalPosition={verticalPosition}
        ref={ref}
      >
        <div className={`${blockClass}__content`} ref={contentRef}>
          <Grid>
            <Form>
              <FormContext.Provider
                value={{
                  currentForm,
                }}
              >
                {React.Children.map(children, (child, index) => (
                  <FormNumberContext.Provider value={index}>
                    {child}
                  </FormNumberContext.Provider>
                ))}
              </FormContext.Provider>
            </Form>
          </Grid>
        </div>
      </Tearsheet>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
EditTearsheet = pkg.checkComponentEnabled(EditTearsheet, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
EditTearsheet.displayName = componentName;

// Note that the descriptions here should be kept in sync with those for the
// corresponding props for TearsheetNarrow and TearsheetShell components.
EditTearsheet.propTypes = {
  /**
   * The cancel button text
   */
  cancelButtonText: PropTypes.string.isRequired,

  /**
   * The main content of the tearsheet
   */
  children: PropTypes.node,

  /**
   * An optional class or classes to be added to the outermost element.
   */
  className: PropTypes.string,

  /**
   * A description of the flow, displayed in the header area of the tearsheet.
   */
  description: PropTypes.node,

  /**
   * The content for the influencer section of the tearsheet, displayed
   * alongside the main content. This is typically a menu, or filter, or
   * progress indicator, or similar.
   */
  influencer: PropTypes.element,

  /**
   * Used to set the size of the influencer
   */
  influencerWidth: PropTypes.oneOf(['narrow', 'wide']),

  /**
   * A label for the tearsheet, displayed in the header area of the tearsheet
   * to maintain context for the tearsheet (e.g. as the title changes from page
   * to page of a multi-page task).
   */
  label: PropTypes.node,

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  onHandleModalClick: PropTypes.func,

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open: PropTypes.bool,

  /**
   * The submit button text
   */
  submitButtonText: PropTypes.string.isRequired,

  /**
   * The main title of the tearsheet, displayed in the header area.
   */
  title: PropTypes.node,

  /**
   * The position of the top of tearsheet in the viewport. The 'normal'
   * position (the default) is a short distance down from the top of the
   * viewport, leaving room at the top for a global header bar to show through
   * from below. The 'lower' position provides a little extra room at the top
   * to allow an action bar navigation or breadcrumbs to also show through.
   */
  verticalPosition: PropTypes.oneOf(['normal', 'lower']),
};
