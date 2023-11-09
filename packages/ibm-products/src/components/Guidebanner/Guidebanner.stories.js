/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import {
  Guidebanner,
  GuidebannerElement,
  GuidebannerElementButton,
  GuidebannerElementLink,
} from '.';

import styles from './_storybook-styles.scss';
import DocsPage from './Guidebanner';

const storyClass = 'guidebanner-stories';

export default {
  title: getStoryTitle(Guidebanner.displayName),
  component: Guidebanner,
  tags: ['autodocs'],
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: DocsPage,
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

const defaultProps = {
  onClose: () => action('onClose()')(),
  title: 'Page-related heading that can stand on its own',
};

const DefaultButtonLarge = () => (
  <GuidebannerElementButton
    type="primary"
    onClick={() => {
      action('GuidebannerElementButton.onClick() (type="primary")')();
    }}
  >
    Show Me
  </GuidebannerElementButton>
);

const DefaultButtonSmall = () => (
  <GuidebannerElementButton
    onClick={() => {
      action('GuidebannerElementButton.onClick()')();
    }}
  >
    Click me
  </GuidebannerElementButton>
);

const DefaultLink = () => (
  <GuidebannerElementLink
    href="https://www.ibm.com"
    target="_blank"
    onClick={() => {
      action('GuidebannerElementLink.onClick()')();
    }}
  >
    Learn more
  </GuidebannerElementLink>
);

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = ({ children, ...rest }) => {
  // Normally GuidebannerElement are listed directly as children of Guidebanner,
  // but as a story we have to wrap the JSX in a React.Fragment.
  // To feed them here, we point to the list of GuidebannerElements directly.
  const childArray = children.props.children;

  return (
    <div className={`${storyClass}__viewport`}>
      <Guidebanner {...rest}>{childArray}</Guidebanner>
    </div>
  );
};

export const collapsible = prepareStory(Template, {
  args: {
    ...defaultProps,
    collapsible: true,
    children: (
      <React.Fragment>
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultButtonLarge />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultButtonSmall />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultButtonSmall />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultLink />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultLink />}
        />
      </React.Fragment>
    ),
  },
});

export const manyInsights = prepareStory(Template, {
  args: {
    ...defaultProps,
    children: (
      <React.Fragment>
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultButtonLarge />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultButtonSmall />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultButtonSmall />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultLink />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultLink />}
        />
      </React.Fragment>
    ),
  },
});

export const fewInsights = prepareStory(Template, {
  args: {
    ...defaultProps,
    children: (
      <React.Fragment>
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultButtonLarge />}
        />
        <GuidebannerElement
          title="Use-case specific heading"
          description="Use-case specific content related to the heading that explains the concept or adds context."
          button={<DefaultLink />}
        />
      </React.Fragment>
    ),
  },
});
