//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import {
  Button as CarbonButton,
  Link as CarbonLink,
} from 'carbon-components-react';
import { idePrefix } from '../../globals/js/settings';
import assets from './assets';
import { Launch24 } from '@carbon/icons-react';

const prefix = `${idePrefix}-empty-state`;

const IdeEmptyState = ({ body, button, format, image, links, title }) => {
  const renderImage = () => {
    const className = `${prefix}__image ${prefix}__image--format-${format}`;
    if (typeof image === 'function') {
      return image(className);
    }
    return (
      <img
        alt={image.alt ? image.alt : ''}
        {...{
          className: image.className
            ? `${className} ${image.className}`
            : className,
          src: image.src ? image.src : assets[format][image],
        }}
      />
    );
  };

  const renderButton = () => {
    if (typeof button === 'function') {
      return button();
    }
    const { kind, onClick, text } = button;
    return (
      <CarbonButton
        {...{
          kind,
          onClick,
          size: 'small',
        }}
      >
        {text}
      </CarbonButton>
    );
  };

  const renderLinks = () => {
    const finalLinks = Array.isArray(links) ? links : [links];
    return (
      <ul>
        {finalLinks.map(({ text, url, target = '_top', onClick, ...other }) => (
          <li
            {...{ className: `${prefix}__link`, key: `${text}:${url}` }}
            key={`${text}:${url}`}
          >
            <CarbonLink
              href={url}
              target={target}
              onClick={(e) => (onClick ? onClick(e) : false)}
              {...other}
            >
              {text}
            </CarbonLink>
            {target === '_blank' && (
              <Launch24 className={`${prefix}__launchIcon`} />
            )}
          </li>
        ))}
      </ul>
    );
  };

  // Main render function
  return (
    <div className={`${prefix} ${prefix}--format-${format}`}>
      <div
        className={`${prefix}__image-container ${prefix}__image-container--format-${format}`}
      >
        {renderImage()}
      </div>
      <div
        {...{
          className: `${prefix}__content-container ${prefix}__content-container--format-${format}`,
          format,
        }}
      >
        <div className={`${prefix}__title ${prefix}__title--format-${format}`}>
          {title}
        </div>
        {body && <div className={`${prefix}__body`}>{body}</div>}
        {button && <div className={`${prefix}__button`}>{renderButton()}</div>}
        {links && renderLinks()}
      </div>
    </div>
  );
};

IdeEmptyState.defaultProps = {
  format: 'lg',
  image: 'default',
  title: 'CHANGE ME',
  body: null,
  button: null,
  links: null,
};

IdeEmptyState.propTypes = {
  /**
   * The text rendered in the 2nd row of the content area. Does not render if
   * undefined. Must be pre-translated.
   */
  body: PropTypes.string,

  /**
   * The primary action button rendered in the 3rd row of the content area.
   * Does not render if undefined.
   */
  button: PropTypes.oneOfType([
    /**
     * Renders a basic Carbon button.
     */
    PropTypes.shape({
      /**
       * The Carbon style to use when rendering. Options are INTENTIONALLY
       * limited. If defined, it must be one of:
       */
      kind: PropTypes.oneOf([
        'primary', // default
        'tertiary',
      ]).isRequired,
      /**
       * The event handler for when the button is clicked.
       */
      onClick: PropTypes.func.isRequired,
      /**
       * The text to use when rendering. Must be pre-translated.
       */
      text: PropTypes.string.isRequired,
    }),

    /**
     * A user-defined function that returns a button to render. Use for complex
     * cases where you need full control (see storybook for an example). It is
     * NOT RECOMMENDED to use this unless you absolutely have to deviate from
     * the standard designs.
     */
    PropTypes.func,
  ]),
  /**
   * The format to use when rendering (sm = vertical, lg = horizontal).
   * Defaults to `lg` if undefined.
   */
  format: PropTypes.oneOf([
    'lg', // default
    'sm',
  ]),
  /**
   * The image to use when rendering. Defaults to `default` if undefined.
   */
  image: PropTypes.oneOfType([
    /**
     * If defined as a string, it must be one of;
     */
    PropTypes.oneOf([
      'apiError',
      'default', // default
      'deploy',
      'noSearchResults',
      'notAuthorized',
    ]),
    /**
     * If defined as an object, it must look like:
     */
    PropTypes.shape({
      /**
       * The HTML alt attribute to attach to the image.
       */
      alt: PropTypes.string,
      /**
       * Additional user-defined classnames to attach to the image.
       */
      className: PropTypes.string,
      /**
       * The source of the image to render.
       */
      src: PropTypes.string.isRequired,
    }),

    /**
     * A user-defined function that returns an image to render. Use for complex
     * cases where you need full control (see storybook for an example). It is
     * NOT RECOMMENDED to use this unless you absolutely have to deviate from
     * the standard designs.
     */
    PropTypes.func,
  ]),
  /**
   * The links rendered in the 4th row of the content area. Does not render if
   * undefined.
   */
  links: PropTypes.oneOfType([
    /**
     * A link object.
     */
    PropTypes.shape({
      /**
       * The text to display when rendering the link. Must be pre-translated.
       */
      text: PropTypes.string.isRequired,
      /**
       * The link's destination.
       */
      url: PropTypes.string.isRequired,
      /**
       * The target prop to apply to the anchor link
       */
      target: PropTypes.string,
    }),
    /**
     * An array of links objects.
     */
    PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * The text to display when rendering the link. Must be pre-translated.
         */
        text: PropTypes.string.isRequired,
        /**
         * The link's destination.
         */
        url: PropTypes.string.isRequired,
      })
    ),
  ]),

  /**
   * The text rendered in the 1st row of the content area. Defaults to `CHANGE
   * ME` if undefined. Must be pre-translated.
   */
  title: PropTypes.string.isRequired,
};

export default IdeEmptyState;
