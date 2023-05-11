/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

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
import { NonLinearReading } from '../NonLinearReading';
import { Button } from 'carbon-components-react';

import mdx from './Guidebanner.mdx';

import styles from './_storybook-styles.scss';

const storyClass = 'non-linear-reading-stories';

export default {
  title: getStoryTitle(Guidebanner.displayName),
  component: Guidebanner,
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
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
  onClose: () => alert('Close button clicked.'),
  title:
    'This is a timeline of suggested alerts, events, and findings, that may related to this incident.',
};

const whatAreFindings = (
  <GuidebannerElement
    title="What are findings?"
    description="A finding is a message or object that may contain suspicious or malicious events or flows, that is deemed to be significant. Findings help to build the story of an attack as it happens, and are chronologically displayed in the incident timeline of a case."
    button={
      <Button
        kind="tertiary"
        size="md"
        onClick={() => {
          alert('Clicked the button');
        }}
      >
        Click Me
      </Button>
    }
  />
);

const howAreFindingsCreated = (
  <GuidebannerElement
    title="How are findings created?"
    description={
      <>
        Findings are created by the alerts
        <NonLinearReading
          definition={
            <>
              We examine the alerts from each source, and
              <NonLinearReading
                definition="Correlation allows us to identify connections between common
            observables, tactics, and techniques, and to remove any
            duplicate data, thereby streamlining the investigation for
            you."
                theme="dark"
              >
                correlate
              </NonLinearReading>
              them together with{' '}
              <a href="https://www.ibm.com/" target="_blank" rel="noreferrer">
                rules
              </a>
              . While a case can contain multiple alerts, a single finding can
              only be created from a single alert. So, when you select a
              finding, you can drill right down to the raw data behind it: the
              payload. We also use our threat intelligence service to establish
              the severity of the artifacts.
            </>
          }
          theme="dark"
        >
          ingested
        </NonLinearReading>
        from your own security systems. The findings here are confirmed findings
        that have been created from alerts ingested from your own sources,
        before being enriched to create cases.
      </>
    }
    button={
      <GuidebannerElementButton
        onClick={() => {
          alert('Clicked the button');
        }}
      >
        Show me
      </GuidebannerElementButton>
    }
  />
);

const whereDoIStart = (
  <GuidebannerElement
    title="Where do I start?"
    description="The Cases list shows your cases in chronological order. You can sort and filter by your chosen criteria; then select a case to work on it."
    button={
      <GuidebannerElementLink href="https://www.ibm.com" target="_blank">
        Show me
      </GuidebannerElementLink>
    }
  />
);

const howDoesXDRCreateMyCases = (
  <GuidebannerElement
    title="How does XDR create my cases?"
    description="The correlation engine creates a case by processing data from across multiple connected security sources."
    button={
      <GuidebannerElementLink href="https://www.ibm.com" target="_blank">
        Learn More
      </GuidebannerElementLink>
    }
  />
);

const howAreCasesPrioritized = (
  <GuidebannerElement
    title="How are my cases prioritized?"
    description="An automated severity is created by the system to prioritize your cases from low to high."
    button={<GuidebannerElementButton>Learn More</GuidebannerElementButton>}
  />
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

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */

export const manyItems = prepareStory(Template, {
  args: {
    ...defaultProps,
    children: (
      <React.Fragment>
        {whatAreFindings}
        {howAreFindingsCreated}
        {whereDoIStart}
        {howDoesXDRCreateMyCases}
        {howAreCasesPrioritized}
      </React.Fragment>
    ),
  },
});

export const fewItems = prepareStory(Template, {
  args: {
    ...defaultProps,
    children: (
      <React.Fragment>
        {howAreFindingsCreated}
        {whereDoIStart}
      </React.Fragment>
    ),
  },
});

export const collapsible = prepareStory(Template, {
  args: {
    ...defaultProps,
    collapsable: true,
    children: (
      <React.Fragment>
        {whatAreFindings}
        {howAreFindingsCreated}
        {whereDoIStart}
        {howDoesXDRCreateMyCases}
        {howAreCasesPrioritized}
      </React.Fragment>
    ),
  },
});
