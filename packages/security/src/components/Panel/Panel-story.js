/**
 * @file Panel stories.
 * @copyright IBM Security 2019 - 2021
 */

import { Add16 } from '@carbon/icons-react';

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React, { Fragment } from 'react';

import { patterns } from '../../../.storybook';

import { disabled, label } from '../_mocks_';
import { labels } from './_mocks_';

import {
  Button,
  Panel,
  PanelContainer,
  PanelContent,
  PanelController,
} from '../..';

import { InlineNotification, NotificationActionButton } from '../../';
import { Grid } from 'carbon-components-react';

const closeButtonLabel = 'Close';

const panelProps = {
  onClose: action('onClose'),
  onOpen: action('onOpen'),
};

const panelContainerProps = {
  title: label,
  subtitle: label,
  labels,
};

const panelContent =
  'Use the `PanelContent` component to have the appropriate formatting applied to content';

const footerLabel = 'Custom footer';

storiesOf(patterns('Panel#legacy'), module)
  .addDecorator((Story) => (
    <>
      <InlineNotification
        className="page-layouts__banner"
        actions={
          <NotificationActionButton
            href="https://carbon-for-ibm-products.netlify.app/?path=/story/ibm-products-components-side-panel-sidepanel--slide-over"
            rel="noopener noreferrer"
            target="_blank"
          >
            More info
          </NotificationActionButton>
        }
        kind="info"
        subtitle="Pattern no longer supported. The pattern will remain available, but plan to migrate to the pattern replacement."
        title=""
        hideCloseButton
      />
      <Grid>
        <Story />
      </Grid>
    </>
  ))
  .add(
    'Default',
    () => (
      <Fragment>
        <Panel
          {...panelProps}
          render={({ active, handleClose, toggleActive }) => (
            <Fragment>
              <Button onClick={toggleActive}>
                Primary and secondary action
              </Button>
              <PanelController active={active}>
                <PanelContainer
                  {...panelContainerProps}
                  closeButton={{
                    onClick: toggleActive,
                    label: text('closeButton.label', closeButtonLabel),
                  }}
                  primaryButton={{
                    icon: Add16,
                    iconDescription: text(
                      'primaryButton.iconDescription',
                      'Add'
                    ),
                    isDisabled: boolean('primaryButton.isDisabled', !disabled),
                    label: text('primaryButton.label', 'Add'),
                    onClick: handleClose,
                  }}
                  secondaryButton={{
                    isDisabled: boolean(
                      'secondaryButton.isDisabled',
                      !disabled
                    ),
                    label: text('secondaryButton.label', 'Cancel'),
                    onClick: handleClose,
                  }}
                >
                  <PanelContent>{panelContent}</PanelContent>
                </PanelContainer>
              </PanelController>
            </Fragment>
          )}
        />
        <Panel
          {...panelProps}
          render={({ active, toggleActive }) => (
            <Fragment>
              <Button onClick={toggleActive}>Primary action</Button>
              <PanelController active={active}>
                <PanelContainer
                  {...panelContainerProps}
                  closeButton={{
                    onClick: toggleActive,
                    label: text('closeButton.label', closeButtonLabel),
                  }}
                  primaryButton={{
                    isDisabled: boolean('primaryButton.isDisabled', !disabled),
                    label: text('primaryButton.label', 'Submit'),
                    onClick: toggleActive,
                  }}
                />
              </PanelController>
            </Fragment>
          )}
        />
        <Panel
          {...panelProps}
          render={({ active, toggleActive }) => (
            <Fragment>
              <Button onClick={toggleActive}>Default</Button>
              <PanelController active={active}>
                <PanelContainer
                  {...panelContainerProps}
                  closeButton={{
                    onClick: toggleActive,
                    label: closeButtonLabel,
                  }}
                >
                  <PanelContent>{panelContent}</PanelContent>
                </PanelContainer>
              </PanelController>
            </Fragment>
          )}
        />
        <Panel
          {...panelProps}
          render={({ active, toggleActive }) => (
            <Fragment>
              <Button onClick={toggleActive}>{footerLabel}</Button>
              <PanelController active={active}>
                <PanelContainer
                  {...panelContainerProps}
                  closeButton={{
                    onClick: toggleActive,
                    label: text('closeButton.label', closeButtonLabel),
                  }}
                  renderFooter={() => <Button size="xl">{footerLabel}</Button>}
                />
              </PanelController>
            </Fragment>
          )}
        />
      </Fragment>
    ),

    {
      info: "View the 'Story' addon panel for guidance on using the `renderFooter` prop",
    }
  );
