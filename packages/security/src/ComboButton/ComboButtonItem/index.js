/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { bool, node, string } from 'prop-types';
import React from 'react';

/**
 * The combo button item provides additional actions a user can take.
 */
const ComboButtonItem = ({ ...rest }) => <span {...rest} />;

ComboButtonItem.propTypes = {
  /** Provide the contents of the `ComboButtonItem` */
  children: node.isRequired,

  /** Specify whether the `ComboButton` should be disabled, or not */
  disabled: bool,

  /** Provide an optional `href` for the `ComboButtonItem` to become an `a` element */
  href: string,
};

ComboButtonItem.defaultProps = {
  disabled: null,
  href: null,
};

export default ComboButtonItem;
