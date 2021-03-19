import React from 'react';
import cx from 'classnames';
import { arrayOf, shape, string } from 'prop-types';
import HTTPErrorSvgOther from '../assets/HTTPErrorSvgOther';
import { HTTPErrors } from '../HTTPErrors';

import { pkg } from '../../../settings';

const blockClass = `${pkg.prefix}--http-errors`;
const componentName = 'HTTPErrorOther';

export let HTTPErrorOther = ({
  className,
  description,
  errorCodeLabel,
  links,
  title,
  ...rest
}) => {
  return (
    <div
      className={cx(`${blockClass}`, {
        [className]: className,
      })}
      {...rest}>
      <HTTPErrors
        description={description}
        errorCodeLabel={errorCodeLabel}
        title={title}
        links={links}
      />
      <HTTPErrorSvgOther className={cx(`${blockClass}-image`)} />
    </div>
  );
};

// Return a placeholder if not released and not enabled by feature flag
HTTPErrorOther = pkg.checkComponentEnabled(HTTPErrorOther, componentName);

HTTPErrorOther.displayName = componentName; // displayName is used in preference to function.name by React

HTTPErrorOther.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: string,
  /**
   * String that will provide the description for the HTTP error code
   */
  description: string,
  /**
   * String that will describe the error that occurred
   */
  errorCodeLabel: string,
  /**
   * Links that will display for extra context when receiving particular errors
   */
  links: arrayOf(
    shape({
      /**
       * The text to display for the link
       */
      text: string.isRequired,
      /**
       * The link's destination
       */
      url: string.isRequired,
    })
  ),
  /**
   * This will be for the main title of the HTTP error component
   */
  title: string,
};
