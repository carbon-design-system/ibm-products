//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'carbon-components-react';

import { iconErrorSolid } from 'carbon-icons';
import { idePrefix } from '../../globals/js/settings';
const IdeAutoSave = ({ state, text }) => (
  <div className={`${idePrefix}-auto-save`}>
    <div className={`${idePrefix}-auto-save__icon`}>
      {state === 'failed' && <Icon icon={iconErrorSolid} description="" />}
    </div>
    <span className={`${idePrefix}-auto-save__text`}>{text}</span>
  </div>
);

IdeAutoSave.defaultProps = {
  state: 'default',
  text: '',
};

IdeAutoSave.propTypes = {
  /** The current state to show */
  state: PropTypes.oneOf(['default', 'saving', 'saved', 'failed']).isRequired,
  /** The text to show for the current state. Must be pre-translated */
  text: PropTypes.string.isRequired,
};
export default IdeAutoSave;
