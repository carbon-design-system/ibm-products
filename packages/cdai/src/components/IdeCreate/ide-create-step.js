//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { idePrefix } from '../../globals/js/settings';

class IdeCreateStep extends React.Component {
  static propTypes = {
    /**
     * Child components
     */
    children: PropTypes.any,
    /**
     * Label to show for the step (must NOT be set for pre-check step)
     */
    label: PropTypes.string,
  };

  render() {
    return (
      <div className={`${idePrefix}-create-step`}>{this.props.children}</div>
    );
  }
}

export default IdeCreateStep;
