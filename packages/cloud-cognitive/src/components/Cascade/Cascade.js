//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';

const blockClass = `${pkg.prefix}--cascade`;
const componentName = 'Cascade';

export let Cascade = forwardRef(
  ({ children, className, grid, ...rest }, ref) => {
    const props = {
      ...rest,
      className: grid ? className : cx(blockClass, className),
      ref,
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
          <div className={`bx--grid ${pkg.prefix}--cascade`}>{gridElm}</div>
        </div>
      );
    }

    return <div {...props}>{getModifiedChildren()}</div>;
  }
);

Cascade = pkg.checkComponentEnabled(Cascade, componentName);

Cascade.displayName = componentName;

Cascade.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  grid: PropTypes.bool,
};

Cascade.defaultProps = {
  grid: false,
};
