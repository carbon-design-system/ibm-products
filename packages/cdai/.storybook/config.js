import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import Container from './Container';

addParameters({
  options: {
    theme: {
      brandTitle: `CDAI Components`,
      brandUrl: 'https://github.com/carbon-design-system/ibm-cloud-paks',
    },
  },
});

addDecorator(
  withInfo({
    maxPropStringLength: 200, // Displays the first 200 characters in the default prop string
  })
);

addDecorator((story) => <Container story={story} />);
addDecorator(withKnobs);

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
