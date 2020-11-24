/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useCallback } from 'react';
import WebTerminal from './WebTerminal';
import { Navigation } from './preview-components';

import styles from './scss/_storybook-styles.scss';

const Template = (args) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  const openTerminal = useCallback(() => setIsTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setIsTerminalOpen(false), []);

  return (
    <div>
      <Navigation openTerminal={openTerminal} />

      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">Page content</div>
        </div>
      </div>
      {isTerminalOpen && (
        <WebTerminal closeTerminal={closeTerminal} {...args} />
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: `Experimental/WebTerminal`,
  parameters: { styles },
};
