//
// Copyright IBM Corp. 20201, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import { Grid } from '@carbon/react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import { getDevtoolsProps } from '../../global/js/utils/devtools';

const blockClass = `${pkg.prefix}--cascade`;
const componentName = 'Cascade';

const defaults = {
  grid: false,
};

export let Cascade = forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      children,
      className,
      grid = defaults.grid,

      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const props = {
      ...rest,
      className: cx(blockClass, className),
      ref,
      ...getDevtoolsProps(componentName),
    };
    const modifyChildren = (child) => {
      const className = cx(child.props.className, `${blockClass}__element`);
      return React.cloneElement(child, { className });
    };
    const getModifiedChildren = () => {
      return React.Children.map(children, (child) => modifyChildren(child));
    };

    if (grid) {
      let colIdx = 0;
      const gridElm = React.Children.map(children, (row) => {
        const cols = React.Children.map(row.props.children, (col) => {
          colIdx = colIdx + 1;
          const colClassnames = cx(
            col.props.className,
            `${blockClass}__col`,
            `${blockClass}__col-${colIdx}`
          );
          return React.cloneElement(col, { className: colClassnames });
        });
        return React.cloneElement(row, { children: cols });
      });
      return (
        <div {...props}>
          <Grid>{gridElm}</Grid>
        </div>
      );
    }

    return <div {...props}>{getModifiedChildren()}</div>;
  }
);

Cascade = pkg.checkComponentEnabled(Cascade, componentName);

Cascade.displayName = componentName;

Cascade.propTypes = {
  /**
   * Main content that is shown.
   */
  children: PropTypes.node,
  /**
   * Optional class name.
   */
  className: PropTypes.string,
  /**
   * Specifies whether or not to wrap the child content in a <Grid />.
   * If this is set to true it's important that the children are being wrapped in rows in columns.
   * Check the documentation for additional clarification.
   */
  grid: PropTypes.bool,
};
