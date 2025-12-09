/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import figma from '@figma/code-connect';
import { preview__PageHeader as PageHeader } from './../../../components';
import {
  Button,
  Grid,
  Column,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  OperationalTag,
  TabList,
  Tab,
} from '@carbon/react';
import { Activity, Bee } from '@carbon/react/icons';

const sharedProps = {
  titleText: figma.string('Title text'),
  subtitle: figma.boolean('Subtitle', {
    true: figma.string('Subtitle text'),
    false: undefined,
  }),
  summary: figma.boolean('Summary', {
    true: figma.string('Summary text'),
    false: undefined,
  }),
  titleIcon: figma.boolean('Title icon (image)', {
    true: () => <Bee size={32} />,
    false: undefined,
  }),
};

const connectionURL =
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=31080%3A23323';

figma.connect(PageHeader, connectionURL, {
  variant: { Variant: 'With actions' },
  props: {
    ...sharedProps,
    breadcrumbBar: figma.boolean('Breadcrumb bar', {
      true: figma.boolean('Toolbar buttons', {
        true: (
          <PageHeader.BreadcrumbBar
            border={true}
            renderIcon={() => <Bee size={16} />}
            pageActions={
              <>
                <Button
                  renderIcon={Activity}
                  iconDescription="Icon Description 1"
                  hasIconOnly
                  size="md"
                  kind="ghost"
                />
                <Button
                  renderIcon={Activity}
                  iconDescription="Icon Description 2"
                  hasIconOnly
                  size="md"
                  kind="ghost"
                />
                <Button
                  renderIcon={Activity}
                  iconDescription="Icon Description 3"
                  hasIconOnly
                  size="md"
                  kind="ghost"
                />
              </>
            }
            contentActions={
              <Button className="breadcrumb-bar-action-button" size="sm">
                Primary action
              </Button>
            }
          >
            <Breadcrumb>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </PageHeader.BreadcrumbBar>
        ),
        false: (
          <PageHeader.BreadcrumbBar
            border={true}
            renderIcon={() => <Bee size={16} />}
            pageActions={
              <>
                <Button
                  renderIcon={Activity}
                  iconDescription="Icon Description 1"
                  hasIconOnly
                  size="md"
                  kind="ghost"
                />
                <Button
                  renderIcon={Activity}
                  iconDescription="Icon Description 2"
                  hasIconOnly
                  size="md"
                  kind="ghost"
                />
                <Button
                  renderIcon={Activity}
                  iconDescription="Icon Description 3"
                  hasIconOnly
                  size="md"
                  kind="ghost"
                />
              </>
            }
          >
            <Breadcrumb>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </PageHeader.BreadcrumbBar>
        ),
      }),
      false: undefined,
    }),
    pageActions: figma.boolean('Primary button', {
      true: (
        <PageHeader.ContentPageActions
          menuButtonLabel="Actions"
          actions={[
            {
              // props used for both collapse menu item and non-collapsed action form
              id: 'primary-action',
              onClick: () => console.log('Primary action'),
              body: (
                // component to render when non-collapsed
                <Button kind="primary" size="md">
                  Primary action
                </Button>
              ),
              // props to pass to the corresponding collapsed menu item
              menuItem: {
                label: 'Primary action',
              },
            },
          ]}
        ></PageHeader.ContentPageActions>
      ),
      false: undefined,
    }),
    tagTitle: figma.boolean('Tag (title)', {
      true: (
        <Tag className="tag" type="blue" size="lg">
          Tag
        </Tag>
      ),
      false: undefined,
    }),
    tabBar: figma.boolean('Tab bar', {
      true: figma.boolean('Tag (tab)', {
        true: (
          <PageHeader.TabBar
            tags={
              <PageHeader.TagOverflow
                renderOverflowTag={(
                  hiddenItems,
                  handleOverflowClick,
                  openPopover
                ) => (
                  <OperationalTag
                    onClick={handleOverflowClick}
                    aria-expanded={openPopover}
                    text={`+${hiddenItems.length}`}
                  />
                )}
                renderPopoverContent={(hiddenItems) => {
                  return hiddenItems.map((i, index) => {
                    const foundJSXTag = [
                      <Tag type="blue" id="example-tag-1" key="example-tag-1">
                        Tag 1
                      </Tag>,
                      <Tag type="purple" id="example-tag-2" key="example-tag-2">
                        Tag 2
                      </Tag>,
                    ].find((c) => c.props.id === i.id);
                    return React.cloneElement(foundJSXTag, {
                      id: `cloned-tag-node-id-${index}`,
                      key: `cloned-tag-key-${index}`,
                    });
                  });
                }}
              >
                <Tag type="blue" id="example-tag-1" key="example-tag-1">
                  Tag 1
                </Tag>
                ,
                <Tag type="purple" id="example-tag-2" key="example-tag-2">
                  Tag 2
                </Tag>
              </PageHeader.TagOverflow>
            }
          >
            <TabList>
              <Tab>Tab label</Tab>
              <Tab>Tab label</Tab>
            </TabList>
          </PageHeader.TabBar>
        ),
        false: (
          <PageHeader.TabBar>
            <TabList>
              <Tab>Tab label</Tab>
              <Tab>Tab label</Tab>
            </TabList>
          </PageHeader.TabBar>
        ),
      }),
      false: undefined,
    }),
  },
  example: (props) => {
    return (
      <PageHeader.Root>
        {props.breadcrumbBar}
        <PageHeader.Content
          title={props.titleText}
          renderIcon={props.titleIcon}
          pageActions={props.pageActions}
          contextualActions={props.tagTitle}
        >
          <PageHeader.ContentText subtitle={props.subtitle}>
            {props.summary}
          </PageHeader.ContentText>
        </PageHeader.Content>
        {props.tabBar}
      </PageHeader.Root>
    );
  },
  imports: [
    "import { preview__PageHeader as PageHeader } from '@carbon/ibm-products';",
  ],
});

figma.connect(PageHeader, connectionURL, {
  variant: { Variant: 'With image' },
  props: {
    ...sharedProps,
    breadcrumbBar: figma.boolean('Breadcrumb bar', {
      true: (
        <PageHeader.BreadcrumbBar
          border={false}
          renderIcon={() => <Bee size={16} />}
        >
          <Breadcrumb>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
        </PageHeader.BreadcrumbBar>
      ),
      false: undefined,
    }),
  },
  example: (props) => {
    return (
      <PageHeader.Root>
        <Grid>
          <Column lg={8} md={4} sm={4}>
            {props.breadcrumbBar}
            <PageHeader.Content
              title={props.titleText}
              renderIcon={props.titleIcon}
            >
              <PageHeader.ContentText subtitle={props.subtitle}>
                {props.summary}
              </PageHeader.ContentText>
            </PageHeader.Content>
          </Column>
          <Column lg={8} md={4} sm={0}>
            <PageHeader.HeroImage>
              <img
                src="https://placehold.co/600x400"
                alt="placeholder"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </PageHeader.HeroImage>
          </Column>
        </Grid>
      </PageHeader.Root>
    );
  },
  imports: [
    "import { preview__PageHeader as PageHeader } from '@carbon/ibm-products';",
  ],
});
