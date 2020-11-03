//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';

import { Add32 as ExampleIcon } from '@carbon/icons-react';

export const defaultProps = {
  cardId: 'foobar',
  cardType: 'text',
  onInteract: () => true,
  cardSize: 'standard',
  cardHeading: 'test',
  cardGraphic: ExampleIcon,
  cardContent: {
    text: 'my text',
  },
};

export const linkCard = {
  ...defaultProps,
  cardType: 'link',
  cardContent: {
    links: [
      { text: '7 started', href: '#started' },
      { text: '6 stopped', href: '#stopped' },
      { text: '3 incomplete', href: '#incomplete' },
    ],
  },
};
export const nodeContentCard = {
  ...defaultProps,
  cardType: 'node',
  cardContent: {
    node: (
      <div id="test--idecard-nodeContentCard">
        My custom content. The content <strong>below</strong> the heading is
        defined in my code using my own JSX!
      </div>
    ),
  },
};
export const nodeContentCardNoContent = {
  ...defaultProps,
  cardType: 'node',
  cardContent: {},
};

export const customCard = {
  ...defaultProps,
  cardType: 'custom',
  cardContent: {
    renderFunc: () => (
      <div>
        My custom content. The content of this card is defined in my code using
        my own JSX!
      </div>
    ),
  },
};

export const customCardNoRender = {
  ...defaultProps,
  cardType: 'custom',
  cardContent: {},
};

export const disabledCard = {
  cardId: 'foobar',
  cardType: 'text',
  onInteract: () => true,
  cardHeading: 'test',
  cardGraphic: ExampleIcon,
  cardContent: {
    text: 'my text',
  },
  cardDisabled: true,
  disabledText: (
    <div>
      <p>My tooltip text</p>
    </div>
  ),
};

export const largeCard = {
  cardId: 'foobar',
  cardType: 'link',
  cardSize: 'large',
  cardContent: {
    text: 'my text',
  },
};

export const externalLinkCard = {
  cardId: 'foobar',
  cardType: 'externalLink',
  cardLinkTarget: 'testPropTarget',
  cardHref: 'http://www.ibm.com',
  cardContent: {
    text: 'my text',
  },
};

export const noCardType = {
  cardId: 'foobar',
  cardContent: {
    links: [
      { text: '7 started', href: '#started' },
      { text: '6 stopped', href: '#stopped' },
    ],
  },
};

export const showExternalLinkIconCard = {
  ...defaultProps,
  secondaryGraphic: 'external',
};
