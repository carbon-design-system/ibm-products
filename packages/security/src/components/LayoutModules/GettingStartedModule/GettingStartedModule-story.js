/**
 * @file ICA module stories.
 * @copyright IBM Security 2020 - 2021
 */

import React from 'react';

import { getDocsParameters } from '../../../../.storybook';

import {
  Button,
  Column,
  DescriptionModule,
  GettingStartedModule,
  Row,
  TitleBarModule,
} from '../../..';
import { Add16, Launch16 } from '@carbon/icons-react';
import placeholder from './images/placeholder.svg';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(GettingStartedModule.name),
  component: GettingStartedModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
};

export const Default = () => (
  <GettingStartedModule className="security--theme--cg10">
    {({ getLayoutProps }) => {
      const {
        description,
        primaryButton,
        secondaryButton,
        tertiaryButton,
        illustration,
        additionalInfo,
      } = getLayoutProps();

      return (
        <>
          <Column lg={6}>
            <DescriptionModule {...description}>
              {({ getLayoutProps }) => {
                return (
                  <>
                    <TitleBarModule title="Section title" />
                    <p {...getLayoutProps()}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer finibus tortor eget est ornare, a ultrices risus
                      tincidunt.
                    </p>
                  </>
                );
              }}
            </DescriptionModule>
            <Row>
              <Column>
                <Button {...primaryButton} kind="primary">
                  Button
                </Button>
              </Column>
              <Column>
                <Button
                  {...secondaryButton}
                  kind="ghost"
                  renderIcon={Add16}
                  style={{ marginLeft: '-16px' }}
                >
                  Ghost Button
                </Button>
              </Column>
            </Row>
            <p {...additionalInfo}>
              To learn more, lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <Button {...tertiaryButton} kind="ghost" renderIcon={Launch16}>
              Ghost Button
            </Button>
          </Column>
          <Column lg={{ span: 7, offset: 2 }}>
            <img
              {...illustration}
              src={placeholder}
              alt="Getting started illustration"
            />
          </Column>
        </>
      );
    }}
  </GettingStartedModule>
);
