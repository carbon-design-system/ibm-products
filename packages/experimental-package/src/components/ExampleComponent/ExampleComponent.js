import React from 'react';
import PropTypes from 'prop-types';
import './example-component.scss';

/**
 * Primary UI component for user interaction
 */
export const ExampleComponent = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-example-component--primary'
    : 'storybook-example-component--secondary';
  return (
    <button
      type="example-component"
      className={[
        'storybook-example-component',
        `storybook-example-component--${size}`,
        mode,
      ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}>
      {label}
    </button>
  );
};

ExampleComponent.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the example-component be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * ExampleComponent contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ExampleComponent.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
