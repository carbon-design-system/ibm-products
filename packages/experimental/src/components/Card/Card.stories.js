//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { Card } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './Card.mdx';

export default {
  title: 'Experimental/Card',
  component: Card,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  title: 'title',
  subTitle: 'subTitle',
  caption: 'caption',
  children: (
    <p>
      Velit venenatis neque proin curabitur luctus sociosqu suscipit! Volutpat
      curabitur tellus vehicula volutpat ornare per lorem molestie. Laoreet
      suscipit vitae vestibulum! Aliquet quis vel inceptos volutpat hac lacinia
      massa eros nam suscipit. Vivamus congue diam commodo erat sollicitudin
      ultricies platea aptent ipsum pellentesque. Quam lorem nam quisque
      phasellus commodo rutrum? Ultrices amet luctus velit dis etiam. Facilisis
      habitant habitasse dictumst metus potenti eleifend ante cras eleifend a
      proin. Amet cum himenaeos viverra etiam facilisis natoque eleifend vitae
      metus dolor morbi? Proin.
    </p>
  ),
};

const Template = (opts) => {
  const { children, ...args } = opts;
  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-lg-6">
          <Card {...args}>{children}</Card>
        </div>
      </div>
    </div>
  );
};

export const Standard = Template.bind({});
Standard.args = {
  ...defaultProps,
};

export const ShortBody = Template.bind({});
ShortBody.args = {
  ...defaultProps,
  children: (
    <p>
      Velit venenatis neque proin curabitur luctus sociosqu suscipit! Volutpat
      curabitur tellus vehicula volutpat ornare per lorem molestie. Laoreet
      suscipit vitae vestibulum! Aliquet quis vel inceptos volutpat hac lacinia
    </p>
  ),
  short: true,
};

export const NoCaption = Template.bind({});
NoCaption.args = {
  ...defaultProps,
  subTitle: '',
  caption: '',
};
