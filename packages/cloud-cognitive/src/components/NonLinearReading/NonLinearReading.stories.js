/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  getSelectedCarbonTheme,
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { NonLinearReading } from '.';
import mdx from './NonLinearReading.mdx';

import styles from './_storybook-styles.scss';

const storyClass = 'non-linear-reading-stories';

export default {
  title: getStoryTitle(NonLinearReading.displayName),
  component: NonLinearReading,
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    definition: {
      table: {
        disable: true,
      },
    },
    theme: {
      control: { type: null },
    },
  },
};

const defaultProps = {
  definition: (
    <>
      This is a technical component that uses a set of rules to process alerts
      from your{' '}
      <a href="https://www.ibm.com/" target="_blank" rel="noreferrer">
        sources
      </a>
      , and streamline threat analysis.
    </>
  ),
  theme: 'light',
};

// As a standalone component, the "story" is meaningless:
// just a pill for a keyword, expanding to show its definition.
// Should always be shown in context with surrounding text.

const TemplateSingleLevel = (args) => {
  const theme = getSelectedCarbonTheme();

  return (
    <div className={`${storyClass}__viewport`}>
      XDR Connect’s correlation
      <NonLinearReading {...args} theme={theme} />
      creates a case by processing data from alerts across multiple security
      tools.
    </div>
  );
};

const TemplateMultipleLevel = (args) => {
  const theme = getSelectedCarbonTheme();

  return (
    <div className={`${storyClass}__viewport`}>
      Findings are created by the alerts{' '}
      <NonLinearReading
        {...args}
        definition={
          <>
            We examine the alerts from each source, and{' '}
            <NonLinearReading
              {...args}
              definition="Correlation allows us to identify connections between common
                  observables, tactics, and techniques, and to remove any
                  duplicate data, thereby streamlining the investigation for
                  you."
              theme={theme}
            >
              correlate
            </NonLinearReading>{' '}
            them together with{' '}
            <a href="https://www.ibm.com/" target="_blank" rel="noreferrer">
              rules
            </a>
            . While a case can contain multiple alerts, a single finding can
            only be created from a single alert. So, when you select a finding,
            you can drill right down to the raw data behind it: the payload. We
            also use our
            <NonLinearReading
              {...args}
              definition="
                  Our threat intelligence service contains an enrichment
                  capability. During the enrichment process, we add context that
                  is used to establish the severity of artifacts associated with
                  a finding. This is what determines the severity of the finding
                  itself. Bear in mind that each case can have multiple
                  findings, and every finding will have its own severity.
                "
              theme={theme}
            >
              threat intelligence service
            </NonLinearReading>
            to establish the severity of the artifacts.
          </>
        }
        theme={theme}
      >
        ingested
      </NonLinearReading>{' '}
      from your own security systems. The findings here are confirmed findings
      that have been created from alerts ingested from your own sources, before
      being enriched to create cases.
    </div>
  );
};

const TemplateWithGradientBackground = (args) => {
  return (
    <div className={`${storyClass}__viewport`}>
      <div className="gradient-bg">
        XDR Connect’s correlation
        <NonLinearReading {...args} theme="dark" />
        creates a case by processing data from alerts across multiple security
        tools.
      </div>
      <br />
      Some other Novice to pro components use a gradient background as shown
      above.
      <br />
      If using NonLinearReading inside one of these components, always use{' '}
      <code>theme=&quot;dark&quot;</code>.
    </div>
  );
};

export const SingleLevel = prepareStory(TemplateSingleLevel, {
  args: {
    ...defaultProps,
    children: 'engine,',
  },
});

export const MultipleLevel = prepareStory(TemplateMultipleLevel, {
  args: {
    ...defaultProps,
  },
});

export const WithGradientBackground = prepareStory(
  TemplateWithGradientBackground,
  {
    args: {
      ...defaultProps,
      children: 'engine,',
    },
  }
);
