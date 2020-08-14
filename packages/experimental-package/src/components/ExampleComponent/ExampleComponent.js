//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import './example-component.scss'; // Do not import SCSS directly it will be rolled up seperately.

import { Button } from 'carbon-components-react';

export const ExampleComponent = ({
  borderColor,
  boxedBorder,
  primaryKind,
  secondaryKind,
  size,
  primaryButtonLabel,
  secondaryButtonLabel,
  ...props
}) => {
  const mode = boxedBorder
    ? 'example-component--boxed-set'
    : 'example-component--shadow-set';

  const handlePrimaryClick = (e) => {
    if (props.onPrimaryClick) {
      props.onPrimaryClick(e);
    }
  };

  const handleSecondaryClick = (e) => {
    if (props.onPrimaryClick) {
      props.onSecondaryClick(e);
    }
  };

  return (
    <React.Fragment>
      <div
        className={[
          'example-component',
          `example-component--${size}`,
          mode,
        ].join(' ')}
        style={borderColor && { '--border-color': borderColor }}
        {...props}>
        <Button
          kind={secondaryKind}
          onClick={handleSecondaryClick}
          size={size}
          disabled={props.disabled}>
          {secondaryButtonLabel}
        </Button>
        <Button
          kind={primaryKind}
          onClick={handlePrimaryClick}
          size={size}
          disabled={props.disabled}>
          {primaryButtonLabel}
        </Button>
      </div>
    </React.Fragment>
  );
};

ExampleComponent.propTypes = {
  /**
   * Is the border a box or a shadow
   */
  boxedBorder: PropTypes.bool,
  /**
   * What border color to use
   */
  borderColor: PropTypes.string,
  /**
   * What is the primary kind
   */
  primaryKind: PropTypes.oneOf(['primary', 'danger']),
  /**
   * What is the secondary kind
   */
  secondaryKind: PropTypes.oneOf(['secondary', 'tertiary']),
  /**
   * How large should the buttons be?
   */
  size: PropTypes.oneOf(['small', 'field', '']),
  /**
   * Primary button label
   */
  primaryButtonLabel: PropTypes.string.isRequired,
  /**
   * Secondary button label
   */
  secondaryButtonLabel: PropTypes.string.isRequired,
  /**
   * Optional primary click handler
   */
  onClickPrimary: PropTypes.func,
  /**
   * Optional secpmdaru click handler
   */
  onClickSecondary: PropTypes.func,
};

ExampleComponent.defaultProps = {
  boxedBorder: false,
  borderColor: null,
  size: '',
  primaryButtonLabel: 'Primary',
  secondaryButtonLabel: 'Secondary',
  primaryKind: 'primary',
  secondaryKind: 'secondary',
  onPrimaryClick: undefined,
  onSecondaryClick: undefined,
};
