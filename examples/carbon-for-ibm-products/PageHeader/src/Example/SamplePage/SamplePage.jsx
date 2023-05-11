import React, { useRef } from "react";
import { PageHeader } from "@carbon/ibm-products";
import { Tabs, TabList, Tab, FlexGrid, Row, Column } from "@carbon/react";
import { Lightning, Bee } from "@carbon/icons-react";

import "./_sample-page.scss";

const actionBarItems = [1, 2, 3, 4].map((item, index) => ({
  key: `Action ${index}`,
  renderIcon: index % 2 ? (props) => <Lightning size={16} {...props} /> : (props) => <Bee size={24} {...props} />,
  iconDescription: `Action ${item}`, // todo remove unused
  label: `Action ${item}`,
  onClick: () => {
    console.log(`Action ${index}`);
  }
}));

const makeBreadcrumb = (item, title) => ({
  href: "#",
  key: `Breadcrumb ${item}`,
  label: typeof title === "string" ? title : `Breadcrumb ${item}`
});
const breadcrumbs = Array.from({ length: 5 }, (_, index) =>
  makeBreadcrumb(index + 1, `Breadcrumb ${index + 1}`)
);

const pageActions = [
  {
    key: "secondary",
    kind: "secondary",
    label: "Secondary button"
  },
  {
    key: "primary",
    kind: "primary",
    label: "Primary button"
  }
];

const tabs = (
  <Tabs>
    <TabList aria-label="Tab list">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 4</Tab>
    </TabList>
  </Tabs>
);

const tags = [
  { type: "blue", label: "blue", key: "blue" },
  { type: "green", key: "green", label: "Green" },
  { type: "warm-gray", key: "warm-gray", label: "Warm gray" },
  { type: "purple", key: "purple", label: "Purple" },
  { type: "red", key: "red", label: "Red" },
  { type: "teal", key: "teal", label: "Teal" },
  { type: "red", key: "red", label: "Longer ThanAPieceOfString" },
  { type: "high-contrast", key: "high-contrast", label: "High contrast" },
  { type: "magenta", key: "magenta", label: "Magenta" },
  { type: "purple", key: "purple", label: "Purple" },
  { type: "red", key: "red", label: "Red" },
  { type: "teal", key: "teal", label: "Teal" },
  { type: "red", key: "red", label: "Longer ThanAPieceOfString" },
  { type: "high-contrast", key: "high-contrast", label: "High contrast" },
  { type: "magenta", key: "magenta", label: "Magenta" }
];

const dummyPageContent = (
  <FlexGrid className='sample-page__dummy-content' narrow={true}>
    <Row>
      <Column sm={1} md={2} lg={4} className='sample-page__dummy-content-block'>
        <div className='sample-page__dummy-content-text'>Column #1</div>
      </Column>
      <Column sm={1} md={2} lg={4} className='sample-page__dummy-content-block'>
        <div className='sample-page__dummy-content-text'>Column #2</div>
      </Column>
      <Column sm={2} md={4} lg={8} className='sample-page__dummy-content-block'>
        <div className='sample-page__dummy-content-text'>Column #3</div>
      </Column>
    </Row>
  </FlexGrid>
);

export const SamplePage = () => {
  const refMain = useRef(null);
  return (
    <>
      <PageHeader
        title='Page title'
        pageActionsOverflowLabel='Page actions...'
        subtitle='Page sub-title'
        navigation={tabs}
        showAllTagsLabel='Show all tags'
        allTagsModalTitle='Filter tags'
        allTagsModalSearchPlaceholderText='Filter tags'
        allTagsModalSearchLabel='Filter tags'
        actionBarOverflowAriaLabel='more actions'
        breadcrumbOverflowAriaLabel='more breadcrumbs'
        {...{ breadcrumbs, actionBarItems, pageActions, tags }}
      >
        {/* some additional content displayed in the page header --> */}
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "50px", maxWidth: "400px" }}>
            {/* cspell:disable */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <strong>incididunt ut labore</strong> et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
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
      </PageHeader>
      <main className='sample-page__main' ref={refMain}>
        {dummyPageContent}
      </main>
    </>
  );
};
