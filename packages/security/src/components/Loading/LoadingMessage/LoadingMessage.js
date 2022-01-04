/**
 * @file Loading message.
 * @copyright IBM Security 2019 - 2021
 */

import classnames from 'classnames';
import { bool, node, string } from 'prop-types';
import React from 'react';

import Loading from '..';

import {
  carbonPrefix,
  getComponentNamespace,
} from '../../../globals/namespace';

const namespace = getComponentNamespace('loading-message');
const overlayNamespace = `${carbonPrefix}--loading-overlay`;

const LoadingMessage = ({
  active,
  children,
  className,
  small,
  withOverlay,
  ...other
}) => (
  <div
    className={classnames(namespace, className, {
      [overlayNamespace]: withOverlay,
      [`${overlayNamespace}--stop`]: withOverlay && !active,
    })}
  >
    <Loading
      className={`${namespace}__loading`}
      active={active}
      small={small}
      withOverlay={false}
      {...other}
    />
    {children}
  </div>
);

LoadingMessage.defaultProps = {
  children: null,
  active: true,
  withOverlay: true,
  small: false,
  className: null,
};

LoadingMessage.propTypes = {
  /** Specify whether the `Loading` is active */
  active: bool,

  /** Provide the contents of the `LoadingMessage` */
  children: node,

  /** Provide an optional class to be applied to the containing node */
  className: string,

  /** Specify whether to use the small variation  */
  small: bool,

  /** Specify whether to use an overlay */
  withOverlay: bool,
};

export default LoadingMessage;
