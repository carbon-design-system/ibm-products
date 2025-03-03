import React from 'react';
import { InlineTip } from '@carbon/ibm-products';

import './_example.scss';
import { SteppedAnimatedMedia } from '../SteppedAnimatedMedia/SteppedAnimatedMedia';
const InlineTipAnimation = new URL(
  './storybook_assets/inline-tip-animation',
  import.meta.url
).pathname;

export const Example = () => {
  return (
    <InlineTip
      title="Use case-specific heading"
      renderMedia={() => (
        <SteppedAnimatedMedia filePaths={[InlineTipAnimation]} playStep={1} />
      )}
    >
      <ul>
        <li>
          Use <b>case-specific</b> content that explains the concept or adds
          context.
        </li>
        <li>
          Use case-specific <i>content that</i> explains the concept or adds
          context.
        </li>
        <li>
          Use case-specific content that explains the concept or adds context.
        </li>
      </ul>
    </InlineTip>
  );
};

export default Example;
