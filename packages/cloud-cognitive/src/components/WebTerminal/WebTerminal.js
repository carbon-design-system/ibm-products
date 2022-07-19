/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useMemo, useState, useEffect } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';

// Carbon and package components we use.
import { Close16 as Close, Help16 as Help } from '@carbon/icons-react';
import {
  Button,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import { moderate02 } from '@carbon/motion';
import { useWebTerminal } from './hooks';

import { getDevtoolsProps } from '../../global/js/utils/devtools';

// The block part of our conventional BEM class names (blockClass__E--M).
const componentName = 'WebTerminal';
const blockClass = `${pkg.prefix}--web-terminal`;

// Default values for props
const defaults = {
  actions: Object.freeze([]),
  documentationLinks: Object.freeze([]),
  documentationLinksIconDescription: 'Show documentation links',
};

export let WebTerminal = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      actions = defaults.actions,
      children,
      className,
      documentationLinks = defaults.documentationLinks,
      documentationLinksIconDescription = defaults.documentationLinksIconDescription,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const { open, closeWebTerminal } = useWebTerminal();

    const [shouldRender, setRender] = useState(open);
    const { matches: prefersReducedMotion } =
      window && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : { matches: true };

    const webTerminalAnimationName = `${
      open ? 'web-terminal-entrance' : 'web-terminal-exit'
    } ${moderate02}`;

    const showDocumentationLinks = useMemo(
      () => documentationLinks.length > 0,
      [documentationLinks]
    );

    useEffect(() => {
      if (open) {
        setRender(true);
      }
    }, [open]);

    /** 
      When the web terminal slide in animation is complete, sets render to false.
    */
    const onAnimationEnd = () => {
      if (!open) {
        setRender(false);
      }
    };

    const handleCloseTerminal = () => {
      /** 
        If the user prefers reduced motion, we have to manually set render to false
        because onAnimationEnd will never be called.
      */
      if (prefersReducedMotion) {
        setRender(false);
      }
      closeWebTerminal();
    };

    return shouldRender ? (
      <div
        {...{
          // Pass through any other property values as HTML attributes.
          ...rest,
          ...getDevtoolsProps(componentName),
        }}
        ref={ref}
        className={cx([
          blockClass,
          className,
          {
            [`${blockClass}--open`]: open,
            [`${blockClass}--closed`]: !open,
          },
        ])}
        style={{
          animation: !prefersReducedMotion && webTerminalAnimationName,
        }}
        onAnimationEnd={onAnimationEnd}
      >
        <header className={`${blockClass}__bar`}>
          <div className={`${blockClass}__actions`}>
            {showDocumentationLinks && (
              <OverflowMenu
                renderIcon={Help}
                iconDescription={documentationLinksIconDescription}
                ariaLabel={documentationLinksIconDescription}
                menuOptionsClass={`${blockClass}__documentation-overflow`}
                size="lg"
              >
                {documentationLinks.map(({ ...rest }, i) => (
                  <OverflowMenuItem key={i} {...rest} />
                ))}
              </OverflowMenu>
            )}
            {actions.map(({ renderIcon, onClick, iconDescription }) => (
              <Button
                key={iconDescription}
                hasIconOnly
                renderIcon={renderIcon}
                onClick={onClick}
                iconDescription={iconDescription}
                kind="ghost"
              />
            ))}
          </div>
          <Button
            hasIconOnly
            renderIcon={Close}
            kind="ghost"
            iconDescription="Close web terminal"
            onClick={handleCloseTerminal}
            onAnimationEnd={(event) => event.stopPropagation()}
          />
        </header>
        <div className={`${blockClass}__body`}>{children}</div>
      </div>
    ) : null;
  }
);

// Return a placeholder if not released and not enabled by feature flag
WebTerminal = pkg.checkComponentEnabled(WebTerminal, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
WebTerminal.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
WebTerminal.propTypes = {
  /**
   * An array of actions to be displayed in the web terminal header bar
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      renderIcon: PropTypes.object.isRequired,
      onClick: PropTypes.func.isRequired,
      iconDescription: PropTypes.string.isRequired,
    })
  ),

  /**
   * Provide your own terminal component as children to show up in the web terminal
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,

  /**
   * Custom classname for additional styling of the web terminal
   */
  className: PropTypes.string,

  /**
   * Array of objects for each documentation link. Each documentation link uses the prop types of OverflowMenuItems. See more: https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default
   */
  documentationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      ...OverflowMenuItem.propTypes,
    })
  ),

  /**
   * Icon description for the documentation link overflow menu
   */
  documentationLinksIconDescription: PropTypes.string,
};
