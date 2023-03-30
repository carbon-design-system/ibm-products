/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Link } from 'carbon-components-react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { NonLinearReading } from '.';
import mdx from './NonLinearReading.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(NonLinearReading.displayName),
  component: NonLinearReading,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  theme: 'light',
};

export const Default = prepareStory(() => (
  <>
    XDR Connect’s correlation
    <NonLinearReading
      definition="This is a technical component that uses a set of rules to process alerts from your sources, and streamline threat analysis."
      {...defaultProps}
    >
      engine,
    </NonLinearReading>
    creates a case by processing data from alerts across multiple security
    tools.
  </>
));

export const inSeries = prepareStory(() => (
  <>
    After we create your
    <NonLinearReading
      definition={
        <>
          <Link
            href="https://www.ibm.com/products/qradar-xdr-connect"
            target={'_blank'}
            rel="noreferrer"
          >
            XDR Connect’s
          </Link>{' '}
          correlation engine <strong>creates the case for you</strong>, by
          processing data from alerts across multiple security tools—including
          your own connected security systems—in order to save you time.
        </>
      }
      {...defaultProps}
    >
      case,
    </NonLinearReading>
    we also
    <NonLinearReading
      definition="By starting the investigation, we help to reduce your manual workload. We gather all available evidence for you to review; use Watson Cybersecurity to scrape the web for additional, previously unknown threat intelligence; and start taking note of anything that happened before and after the incident, to get a more detailed view."
      {...defaultProps}
    >
      investigate
    </NonLinearReading>
    for you. More insights are uncovered by analyzing relevant data from your
    tools, and enriching them. We visualize the incident’s progression on the
    Attack graph; and we recommend remediation steps.
  </>
));

export const embedded = prepareStory(() => {
  return (
    <>
      Findings are created by the
      <NonLinearReading
        definition={
          <>
            We examine the alerts from each source, and
            <NonLinearReading
              definition="Correlation allows us to identify connections between common observables, tactics, and techniques, and to remove any duplicate data, thereby streamlining the investigation for you."
              {...defaultProps}
            >
              correlate
            </NonLinearReading>
            them together with rules. While a case can contain multiple alerts,
            a single finding can only be created from a single alert. So, when
            you select a finding, you can drill right down to the raw data
            behind it: the payload. We also use our
            <NonLinearReading
              definition="Our threat intelligence service contains an enrichment capability. During the enrichment process, we add context that is used to establish the severity of artifacts associated with a finding. This is what determines the severity of the finding itself. Bear in mind that each case can have multiple findings, and every finding will have its own severity."
              {...defaultProps}
            >
              threat intelligence service
            </NonLinearReading>
            to establish the severity of the artifacts.
          </>
        }
        {...defaultProps}
      >
        alerts ingested
      </NonLinearReading>
      from your own security systems. The findings here are confirmed findings
      that have been created from alerts ingested from your own sources, before
      being enriched to create cases.
    </>
  );
});
