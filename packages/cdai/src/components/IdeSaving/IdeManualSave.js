//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';

import AddSave16 from '@carbon/icons-react/lib/save/16';
import AddCheckmark16 from '@carbon/icons-react/lib/checkmark--outline/16';
import { idePrefix } from '../../globals/js/settings';

const IdeManualSave = ({ state, saveText, cancelText, onSave, onCancel }) => (
  <div className={`${idePrefix}-manual-save`}>
    <Button
      className={`${idePrefix}-manual-save__cancel-button ${idePrefix}-manual-save--button`}
      kind="secondary"
      onClick={(evt) => onCancel(evt)}
      disabled={state === 'saved'}
    >
      {cancelText}
    </Button>
    <Button
      className={`${idePrefix}-manual-save__save-button ${idePrefix}-manual-save--button`}
      kind="primary"
      onClick={(evt) => onSave(evt)}
      renderIcon={state === 'saved' ? AddCheckmark16 : AddSave16}
    >
      {saveText}
    </Button>
  </div>
);

IdeManualSave.defaultProps = {
  state: 'save',
  saveText: '',
  cancelText: '',
};

IdeManualSave.propTypes = {
  /** The text to show for the Cancel button. Must be pre-translated */
  cancelText: PropTypes.string.isRequired,
  /** Function to call when the Cancel button is pressed */
  onCancel: PropTypes.func,
  /** Function to call when the Save button is pressed */
  onSave: PropTypes.func,
  /** The text to show for Save button. Must be pre-translated */
  saveText: PropTypes.string.isRequired,
  /** The current state to show */
  state: PropTypes.oneOf(['save', 'saved']).isRequired,
};
export default IdeManualSave;
