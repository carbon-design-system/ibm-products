//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput } from 'carbon-components-react';
import { idAttribute } from '../../component_helpers/IDHelper';
import { idePrefix } from '../../globals/js/settings';
export const MEDIUM_IMPACT = 'medium';
export const HIGH_IMPACT = 'high';

class IdeRemove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      didDelete: false,
    };
    this.textFieldChange = this.textFieldChange.bind(this);
  }

  textFieldChange(evt) {
    if (evt && evt.target && evt.target.value) {
      this.setState({ itemName: evt.target.value });
    }
  }

  render(
    {
      open,
      closeIconDescription,
      removeType,
      cancelText,
      deleteText,
      onClose,
      onDelete,
      deleteContent,
      postDeleteContent,
      highImpactItemName,
      highImpactTextFieldLabel,
      ...others
    } = this.props
  ) {
    let didDelete = postDeleteContent ? this.state.didDelete : false;
    let content =
      this.state.didDelete && postDeleteContent
        ? postDeleteContent
        : deleteContent;
    return (
      <div {...others} {...idAttribute('IdeRemove-root')}>
        <Modal
          open={open}
          danger
          passiveModal={postDeleteContent && didDelete}
          {...idAttribute('IdeRemove-modal')}
          modalLabel={content.label}
          modalHeading={content.heading}
          aria-label={content.label}
          iconDescription={closeIconDescription}
          primaryButtonText={deleteText}
          secondaryButtonText={cancelText}
          onRequestClose={onClose}
          onRequestSubmit={() => {
            this.setState({ didDelete: true });
            onDelete();
          }}
          primaryButtonDisabled={
            removeType === HIGH_IMPACT &&
            highImpactItemName !== this.state.itemName
          }
        >
          <React.Fragment>
            <p {...idAttribute('IdeRemove-modal-body')}>{content.body}</p>
            {removeType === HIGH_IMPACT && !didDelete ? (
              <div
                className={`${idePrefix}-remove--modal-body-textfield-container`}
              >
                <TextInput
                  {...idAttribute('IdeRemove-modal-body-high-impact-textfield')}
                  onChange={this.textFieldChange}
                  id={`IdeRemove-high-impact-${highImpactItemName}`}
                  labelText={highImpactTextFieldLabel}
                />
              </div>
            ) : null}
          </React.Fragment>
        </Modal>
      </div>
    );
  }
}

IdeRemove.propTypes = {
  /** Text which appears in the cancel button. Must be a pre translated string.  */
  cancelText: PropTypes.string.isRequired,
  /** Label text for the modal - must be a pre translated string */
  closeIconDescription: PropTypes.string.isRequired,
  /** deleteContent - the text displayed before a user clicks delete or remove. Required.  */
  deleteContent: PropTypes.shape({
    label: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  /** Text which appears in the delete button before being clicked. Must be a pre translated string. */
  deleteText: PropTypes.string.isRequired,
  /** if a high impact remove, this is the name of the item being removed. This must be provided. */
  highImpactItemName: PropTypes.string,
  /** if a high impact remove, this is the label for the text field. Must be a pre translated string */
  highImpactTextFieldLabel: PropTypes.string,
  /** Callback which is invoked when the user selects cancel/closes the modal */
  onClose: PropTypes.func,
  /** Callback which is invoked when the user confirms the delete. Only invoked after the configured delay occurs */
  onDelete: PropTypes.func,
  /** Modal open/closed state. */
  open: PropTypes.bool,
  /** postDeleteContent - the text displayed after a user clicks delete. Optional. */
  postDeleteContent: PropTypes.shape({
    label: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  /** Tye type of delete/remove which is being performed. See the readme for when to use which mode */
  removeType: PropTypes.oneOf([MEDIUM_IMPACT, HIGH_IMPACT]),
};

IdeRemove.defaultProps = {
  open: false,
  closeIconDescription: 'Close modal - provide a translated string',
  removeType: MEDIUM_IMPACT,
  cancelText: 'Cancel - provide a translated string',
  deleteText: 'Delete - provide a translated string',
  onDelete: null,
  onClose: null,
  deleteContent: {
    label: 'Remove Label - provide a translated string',
    heading: 'Remove Heading - provide a translated string',
    body: 'Remove Body - provide a translated string',
  },
  highImpactItemName: 'my entity name',
  highImpactTextFieldLabel:
    'Confrim remove of [name] - provide a translated string',
};

export default IdeRemove;
