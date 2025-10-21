/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import '../../../examples/draggable-popover/src/dragabble-popover';

export default {
  title: 'Patterns/Draggable Popover',
};

export const DraggablePopover = {
  render: (args) => {
    return html`
     <div class="popover-story">
      <draggable-popover 
      >
      </draggable-popover>
      </div>
    `;
  },
};
