/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';
import { useOverflowItems } from './useOverflowItems';
import { Tag, Slider } from '@carbon/react';
import { Annotation } from '../../../../../core/.storybook/Annotation';
import { FitToWidth } from '@carbon/react/icons';

export default {
  title: 'Hooks/useOverflowItems',
  argTypes: {
    numberOfTags: {
      control: { type: 'range', min: 1, max: 30 },
    },
  },
  parameters: {
    layout: 'padded',
  },
};

const makeTags = (n) => {
  return Array(n)
    .fill(null)
    .map((_, idx) => ({
      id: idx,
      label: `Tag ${idx + 1}`,
    }));
};

const Template = (args) => {
  const { numberOfTags } = args;
  const tags = makeTags(numberOfTags);
  const containerRef = useRef(null);
  const { visibleItems, hiddenItems, itemRefHandler } = useOverflowItems(
    tags,
    containerRef
  );
  const [width, setWidth] = useState(500);
  const widthHandler = (n) => {
    setWidth(n);
  };
  return (
    <div>
      <Slider
        max={1000}
        min={100}
        value={width}
        onChange={({ value }) => widthHandler(value)}
        hideTextInput
        labelText="Parent container width"
      />
      <div
        style={{
          overflow: 'scroll',
          padding: '1rem',
          width: `${width}px`,
          maxWidth: '100%',
        }}
      >
        <Annotation text="Parent container" type="layer" icon={FitToWidth}>
          <div ref={containerRef} style={{ whiteSpace: 'nowrap' }}>
            <p>Visible items:</p>
            {visibleItems.map((tag) => (
              <Tag
                type="blue"
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
              <Tag key={tag.id} type="blue">
                {tag.label}
              </Tag>
            ))}
          </div>
        </Annotation>
      </div>
    </div>
  );
};

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  numberOfTags: 20,
};
