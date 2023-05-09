/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// cspell:words unuse

import { withCarbonTheme } from '@carbon/storybook-addon-theme/react';
import { ArgsTable, Canvas, Story, Source } from '@storybook/addon-docs';
import LinkTo from '@storybook/addon-links/react';
import { themes } from '@storybook/theming';

import {
  Button,
  Column,
  Row,
  ToastNotification,
  UnorderedList,
  ListItem,
} from 'carbon-components-react';
import React, { useEffect } from 'react';

import { pkg } from '../../cloud-cognitive/src/settings';

import index from './index.scss';
import { getSectionSequence } from '../story-structure';

// Enable all components, whether released or not, for storybook purposes
pkg._silenceWarnings(true);
pkg.setAllComponents(true);

const Style = ({ children, styles }) => {
  const { unuse, use } = styles;

  useEffect(() => {
    use();

    return () => unuse();
  }, []);

  return children;
};

const decorators = [
  (storyFn, { args, parameters: { styles } }) => {
    const story = storyFn();

    JSON.stringify(args.featureFlags);

    return (
      <div className="preview-position-fix">
        <Style styles={index}>
          {args.featureFlags ? (
            <ToastNotification
              className="preview__notification--feature-flag"
              kind="warning"
              inline
              lowContrast
              statusIconDescription="describes the close button"
              title="This story uses the following feature flags to enable or disable some functionality."
              caption={
                <>
                  <UnorderedList>
                    {Object.keys(args.featureFlags).map((flagKey) => (
                      <ListItem key={flagKey}>
                        {flagKey}: {`${args.featureFlags[flagKey]}`}
                      </ListItem>
                    ))}
                  </UnorderedList>
                  <Button
                    className="preview__notification-button"
                    kind="ghost"
                    onClick={() => {
                      window.open(
                        'https://github.com/carbon-design-system/ibm-cloud-cognitive/tree/main/packages/cloud-cognitive#enabling-canary-components-and-flagged-features'
                      );
                    }}
                  >
                    Learn more
                  </Button>
                </>
              }
            />
          ) : null}
          {styles ? <Style styles={styles}>{story}</Style> : story}
        </Style>
      </div>
    );
  },
  withCarbonTheme,
];

const makeViewport = (name, width, shadow) => ({
  name,
  styles: {
    border: '1px solid #1EA7FD',
    boxShadow: `0 0 50px 20px rgb(30 167 253 / ${shadow}%)`,
    width,
    // when width is fixed, leave room for a horizontal scroll bar
    height: width === '100%' ? '100%' : 'calc(100% - 12px)',
  },
});
const carbonViewports = {
  basic: makeViewport('Select a Carbon breakpoint', '100%', 0),
  smMin: makeViewport('sm (≥320px)', '320px', 25),
  smMid: makeViewport('sm — mid range', '496px', 25),
  smMax: makeViewport('sm — top of range', '671px', 25),
  mdMin: makeViewport('md (≥672px)', '672px', 20),
  mdMid: makeViewport('md — mid range', '864px', 20),
  mdMax: makeViewport('md — top of range', '1055px', 20),
  lgMin: makeViewport('lg (≥1056px)', '1056px', 15),
  lgMid: makeViewport('lg — mid range', '1184px', 15),
  lgMax: makeViewport('lg — top of range', '1311px', 15),
  xlgMin: makeViewport('xlg (≥1312px)', '1312px', 10),
  xlgMid: makeViewport('xlg — mid range', '1448px', 10),
  xlgMax: makeViewport('xlg — top of range', '1583px', 10),
  maxMin: makeViewport('max (≥1584px)', '1584px', 5),
  maxMid: makeViewport('max — mid range', '2000px', 5),
};

const parameters = {
  controls: { expanded: true, hideNoControlsWarning: true },
  docs: {
    components: {
      ArgsTable,
      Canvas,
      Column,
      LinkTo: (props) => (
        <LinkTo
          className="storybook__link-to"
          style={{ color: themes.normal.colorSecondary }}
          {...props}
        />
      ),
      Row,
      Source,
      Story,
    },
  },
  layout: 'centered',
  options: {
    showPanel: true,
    storySort: (a, b) => {
      const aPosition = getSectionSequence(a[1].kind);
      const bPosition = getSectionSequence(b[1].kind);

      return aPosition !== bPosition
        ? // if stories have different positions in the structure, sort by that
          aPosition - bPosition
        : a[1].kind === b[1].kind
        ? // if they have the same kind, use their sequence numbers
          (a[1]?.parameters?.ccsSettings?.sequence || 0) -
          (b[1]?.parameters?.ccsSettings?.sequence || 0)
        : // they must both be unrecognized: fall back to sorting by id (slug)
          a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
    },
  },

  // Optional default Carbon theme.
  carbonTheme: {
    theme: 'g10',
  },

  // viewport sizes based on Carbon breakpoints
  viewport: {
    viewports: carbonViewports,
    defaultViewport: 'basic',
  },
};

const argTypes = {
  featureFlags: {
    table: {
      disable: true,
    },
  },
};

export { argTypes, decorators, parameters, Style };
