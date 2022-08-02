/**
 * @file Getting Started page layout stories.
 * @copyright IBM Security 2020 - 2021
 */

import React from 'react';
import { Add16, Launch16 } from '@carbon/icons-react';
import placeholder from '../GettingStartedLayout/images/placeholder.svg';
import aurora from '../../images/aurora_full_width.png';
import { colors } from '@carbon/colors';
import { pageLayouts } from '../../../.storybook';

import {
  Button,
  Column,
  DescriptionModule,
  GettingStartedLayout,
  Grid,
  Row,
  Tab,
  Tabs,
  TitleBarModule,
} from '../..';

import { PageHeader } from '../../../../cloud-cognitive/src/components/PageHeader/PageHeader';

import config from './stories';

const { decorators, parameters } = config;

export default {
  title: pageLayouts('Getting Started'),
  parameters,
  decorators,
};

const backgroundStyle = {
  position: 'relative',
  backgroundColor: colors.coolGray['100'],
};

const imageStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  width: '100%',
  zIndex: 0,
};

export const Default = () => (
  <>
    <PageHeader
      breadcrumbOverflowAriaLabel="breadcrumb"
      breadcrumbs={[
        {
          label: 'Homepage',
          key: 'Homepage',
        },
      ]}
      navigation={
        <Tabs>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      }
      title="Playbooks"
    ></PageHeader>
    <Grid className="security--theme--cg10" style={backgroundStyle}>
      <Row>
        <GettingStartedLayout>
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
                          <TitleBarModule title="Learn to build your first playbook" />
                          <p {...getLayoutProps()}>
                            Build your security process from beginning to end,
                            all in one place. Learn to build a playbook today.
                          </p>
                        </>
                      );
                    }}
                  </DescriptionModule>
                  <Row style={{ marginBottom: '345px' }}>
                    <Column>
                      <Button {...primaryButton} kind="primary">
                        Learn to build a playbook
                      </Button>
                    </Column>
                    <Column>
                      <Button
                        {...secondaryButton}
                        kind="ghost"
                        renderIcon={Add16}
                        style={{ marginLeft: '-16px' }}
                      >
                        Create playbook
                      </Button>
                    </Column>
                  </Row>
                  <p {...additionalInfo}>
                    To learn more about building a playbook, visit the Knowledge
                    Center.
                  </p>
                  <Button
                    {...tertiaryButton}
                    kind="ghost"
                    renderIcon={Launch16}
                  >
                    Knowledge Center
                  </Button>
                </Column>
                <Column lg={{ span: 8, offset: 1 }}>
                  <img
                    {...illustration}
                    src={placeholder}
                    alt="Getting started illustration"
                  />
                </Column>
              </>
            );
          }}
        </GettingStartedLayout>
      </Row>
      <img src={aurora} alt="Aurora background" style={imageStyle}></img>
    </Grid>
  </>
);
