import React, { useRef } from 'react';
import { PageHeader } from '@carbon/ibm-cloud-cognitive';
import {
  BreadcrumbItem,
  Tabs,
  Tab,
  Grid,
  Row,
  Column,
} from 'carbon-components-react';
import { Lightning16, Bee24 } from '@carbon/icons-react';

import './_sample-page.scss';

const actionBarItems = [1, 2, 3, 4].map((item, index) => ({
  renderIcon: index % 2 ? Lightning16 : Bee24,
  iconDescription: `Action ${item}`,
  onClick: () => {
    console.log(`Action ${index}`);
  },
}));

const breadcrumbItems = (
  <>
    <BreadcrumbItem href="#">Breadcrumb 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 4</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 5</BreadcrumbItem>
  </>
);

const pageActions = [
  {
    kind: 'secondary',
    label: 'Secondary button',
  },
  {
    kind: 'primary',
    label: 'Primary button',
  },
];

const tabs = (
  <Tabs>
    <Tab label="Tab 1" />
    <Tab label="Tab 2" />
    <Tab label="Tab 3" />
    <Tab label="Tab 4" />
  </Tabs>
);

const tags = [
  { type: 'blue', label: 'blue', key: 'blue' },
  { type: 'green', key: 'green', label: 'Green' },
  { type: 'warm-gray', key: 'warm-gray', label: 'Warm gray' },
  { type: 'purple', key: 'purple', label: 'Purple' },
  { type: 'red', key: 'red', label: 'Red' },
  { type: 'teal', key: 'teal', label: 'Teal' },
  { type: 'red', key: 'red', label: 'Longer ThanAPieceOfString' },
  { type: 'high-contrast', key: 'high-contrast', label: 'High contrast' },
  { type: 'magenta', key: 'magenta', label: 'Magenta' },
  { type: 'purple', key: 'purple', label: 'Purple' },
  { type: 'red', key: 'red', label: 'Red' },
  { type: 'teal', key: 'teal', label: 'Teal' },
  { type: 'red', key: 'red', label: 'Longer ThanAPieceOfString' },
  { type: 'high-contrast', key: 'high-contrast', label: 'High contrast' },
  { type: 'magenta', key: 'magenta', label: 'Magenta' },
];

const dummyPageContent = (
  <Grid className="sample-page__dummy-content" narrow={true}>
    <Row>
      <Column sm={1} md={2} lg={4} className="sample-page__dummy-content-block">
        <div className="sample-page__dummy-content-text">Column #1</div>
      </Column>
      <Column sm={1} md={2} lg={4} className="sample-page__dummy-content-block">
        <div className="sample-page__dummy-content-text">Column #2</div>
      </Column>
      <Column sm={2} md={4} lg={8} className="sample-page__dummy-content-block">
        <div className="sample-page__dummy-content-text">Column #3</div>
      </Column>
    </Row>
  </Grid>
);

const availableSpace = (
  <div style={{ display: 'flex' }}>
    <p style={{ marginRight: '50px', maxWidth: '400px' }}>
      {/* cspell:disable */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
      {/* cspell:enable */}
    </p>
    <p>
      Property: Value
      <br />
      Property: Value
      <br />
      Property: Value
    </p>
  </div>
);

export const SamplePage = () => {
  const refMain = useRef(null);
  return (
    <>
      <PageHeader
        availableSpace={availableSpace}
        background
        breadcrumbItems={breadcrumbItems}
        actionBarItems={actionBarItems}
        title="Page title"
        pageActions={pageActions}
        pageActionsOverflowLabel="Page actions..."
        subtitle="Page sub-title"
        navigation={tabs}
        scrollTarget={refMain}
        tags={tags}
        showAllTagsLabel="Show all tags"
        allTagsModalTitle="Filter tags"
        allTagsModalSearchPlaceholderText="Filter tags"
        allTagsModalSearchLabel="Filter tags"
      />
      <main className="sample-page__main" ref={refMain}>
        {dummyPageContent}
      </main>
    </>
  );
};
