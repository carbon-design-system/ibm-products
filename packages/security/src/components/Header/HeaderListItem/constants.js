/**
 * @file Header list item constants.
 * @copyright IBM Security 2018
 */

import PropTypes from 'prop-types';

import { appendComponentNamespace } from '../../../globals/namespace';
import { namespace as headerNamespace } from '../constants';

const defaultProps = {
  className: '',
};

const namespace = appendComponentNamespace(headerNamespace, 'list__item');

const propTypes = {
  /** @type {node} List item children. */
  children: PropTypes.node.isRequired,

  /** @type {string} Extra classes. */
  className: PropTypes.string,
};

export { defaultProps, namespace, propTypes };
