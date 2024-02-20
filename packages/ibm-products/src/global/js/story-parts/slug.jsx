/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  unstable__Slug as Slug,
  unstable__SlugContent as SlugContent,
} from '@carbon/react';

const Sample = (props) => (
  <Slug className="slug-container" size="xs" {...props}>
    <SlugContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h1>84%</h1>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
        <hr />
        <p className="secondary">Model type</p>
        <p className="bold">Foundation model</p>
      </div>
    </SlugContent>
  </Slug>
);

const argTypes = {
  slug: {
    control: {
      type: 'select',
      labels: {
        0: 'No AI slug',
        1: 'with AI Slug',
      },
      default: 0,
    },
    options: [0, 1],
  },
};

export const slugSample = { argTypes, Sample };
