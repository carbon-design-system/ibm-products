/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';
import { useOverflowItems } from './useOverflowItems';
import { Tag } from '@carbon/react';

export default {
  title: 'Hooks/useOverflowItems',
  argTypes: {
    numberOfTags: {
      control: { type: 'range', min: 1, max: 30 },
    },
  },
};

const getTags = (n = 10) => {
  return Array(n)
    .fill(null)
    .map((_, idx) => ({
      id: idx,
      label: `Tag ${idx + 1}`,
    }));
};

export const Default = (args) => {
  const { numberOfTags } = args;
  const tags = getTags(numberOfTags);
  const containerRef = useRef(null);
  const { visibleItems, hiddenItems, itemRefHandler } = useOverflowItems(
    tags,
    containerRef
  );
  return (
    <div
      style={{
        resize: 'horizontal',
        overflow: 'scroll',
        background: '#d0e2ff',
        padding: '1rem',
        width: '500px',
        maxWidth: '100%',
      }}
    >
      <div ref={containerRef} style={{ whiteSpace: 'nowrap' }}>
        <p>Visible items:</p>
        {visibleItems.map((tag) => (
          <Tag
            type="red"
            key={tag.id}
            ref={(node) => {
              itemRefHandler(tag.id, node);
            }}
          >
            {tag.label}
          </Tag>
        ))}
      </div>
      <div>
        <p>Hidden items:</p>
        {hiddenItems.map((tag) => (
          <Tag key={tag.id} type="red">
            {tag.label}
          </Tag>
        ))}
      </div>
    </div>
  );
};
