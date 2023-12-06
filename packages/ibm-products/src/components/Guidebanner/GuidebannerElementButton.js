/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '@carbon/react';
import { Crossroads } from '@carbon/react/icons';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--guidebanner__element-button`;
const componentName = 'GuidebannerElementButton';

/**
 * One of two buttons styled specifically for the GuidebannerElement.
 */
export let GuidebannerElementButton = ({
  children,
  className,
  type,
  ...rest
}) => {
  if (type === 'primary') {
    return (
      <Button
        {...rest}
        className={cx(blockClass, className)}
        iconDescription={'Crossroads'}
        kind="tertiary"
        renderIcon={() => <Crossroads size={16} />}
        role="button"
        size="md"
        {...getDevtoolsProps(componentName)}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      {...rest}
      className={cx(blockClass, className)}
      kind="ghost"
      role="button"
      size="md"
      {...getDevtoolsProps(componentName)}
    >
      {children}
    </Button>
  );
};

// Return a placeholder if not released and not enabled by feature flag
GuidebannerElementButton = pkg.checkComponentEnabled(
  GuidebannerElementButton,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
GuidebannerElementButton.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
GuidebannerElementButton.propTypes = {
  /**
   * Provide the contents of the GuidebannerElementButton.
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * If type is "primary", then return a tertiary button with the "crossroads" icon,
   * else return a ghost button.
   */
  type: PropTypes.string,

  /* TODO: add types and DocGen for all props. */
};
