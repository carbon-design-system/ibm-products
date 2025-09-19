import { preview__PageHeader as PageHeader, TruncatedText, pkg } from '@carbon/ibm-products';
import { Breadcrumb, BreadcrumbItem, Button, IconButton, Tab, TabList, TabPanel, TabPanels, Tabs } from '@carbon/react';
import { Activity, Add, AiGenerate, Bee, CloudFoundry_1 } from '@carbon/react/icons';
import { createFileRoute } from '@tanstack/react-router'

pkg.component.TruncatedText = true;

const BreadcrumbBeeIcon = () => <Bee size={16} />;

const pageActionButtonItems = [
  {
    // props used for both collapse menu item and non-collapsed action form
    id: 'action1',
    onClick: () => console.log(`Action 1`),
    // component to render when non-collapsed
    body: (
      <Button
        renderIcon={AiGenerate}
        iconDescription="Icon Description 1"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    // props to pass to the corresponding collapsed menu item
    menuItem: {
      label: 'action 1',
    },
  },
  {
    id: 'action2',
    onClick: () => console.log(`Action 2`),
    body: (
      <Button
        renderIcon={Activity}
        iconDescription="Icon Description 2"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    menuItem: {
      label: 'action 2',
    },
  },
  {
    id: 'action3',
    onClick: () => console.log(`Action 3`),
    body: (
      <Button
        renderIcon={Activity}
        iconDescription="Icon Description 3"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    menuItem: {
      label: 'action 3',
    },
  },
  {
    id: 'action4',
    onClick: () => console.log(`Action 4`),
    body: (
      <Button
        renderIcon={Activity}
        iconDescription="Icon Description 4"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    menuItem: {
      label: 'action 4',
    },
  },
  {
    id: 'primary-action',
    onClick: () => console.log(`Primary action`),
    body: (
      <Button kind="primary" renderIcon={Add} size="md">
        Primary action
      </Button>
    ),
    menuItem: {
      label: 'Primary action',
    },
  },
];

const breadcrumbPageActions = (
  <>
    <Button
      renderIcon={Activity}
      iconDescription="Icon Description 1"
      hasIconOnly
      size="md"
      kind="ghost"
    />
    <Button
      renderIcon={AiGenerate}
      iconDescription="Icon Description 2"
      hasIconOnly
      size="md"
      kind="ghost"
    />
    <Button
      renderIcon={CloudFoundry_1}
      iconDescription="Icon Description 3"
      hasIconOnly
      size="md"
      kind="ghost"
    />
  </>
);

const WithActions = () => {
  return <Tabs>
      <PageHeader.Root>
        <PageHeader.BreadcrumbBar
          border
          pageActionsFlush
          contentActionsFlush
          renderIcon={BreadcrumbBeeIcon}
          pageActions={breadcrumbPageActions}
          contentActions={
            <>
              <IconButton
                size="sm"
                kind="ghost"
                className="breadcrumb-bar-button"
                label="Icon Description 1"
              >
                <AiGenerate />
              </IconButton>
              <IconButton
                size="sm"
                kind="ghost"
                className="breadcrumb-bar-button"
                label="Icon Description 2"
              >
                <Activity />
              </IconButton>
              <IconButton
                size="sm"
                kind="ghost"
                className="breadcrumb-bar-button"
                label="Icon Description 3"
              >
                <Activity />
              </IconButton>
              <IconButton
                size="sm"
                kind="ghost"
                className="breadcrumb-bar-button"
                label="Icon Description 4"
              >
                <Activity />
              </IconButton>
              <Button className="breadcrumb-bar-action-button" size="sm">
                Primary action
              </Button>
            </>
          }
        >
          <Breadcrumb>
            <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            <PageHeader.TitleBreadcrumb data-fixed>
              <TruncatedText
                id="page-header-title-breadcrumb-text-overflow"
                value="Virtual-Machine-DAL-really-long-title-example"
                align="bottom"
                lines={1}
              />
            </PageHeader.TitleBreadcrumb>
          </Breadcrumb>
        </PageHeader.BreadcrumbBar>
        <PageHeader.Content
          title={'Virtual-Machine-DAL-really-long-title-example'}
          pageActions={
            <PageHeader.ContentPageActions
              menuButtonLabel="Actions"
              // @ts-expect-error This type is incorrect within the new page header
              actions={pageActionButtonItems}
            />
          }
        >
                <PageHeader.ContentText subtitle="Subtitle">
                  Built for modern teams, our technology platform simplifies complexity
                  with powerful APIs, real-time collaboration tools, and seamless
                  integration. From deployment to monitoring, we help you ship faster,
                  scale efficiently, and stay in control every step of the way.
                </PageHeader.ContentText>
              </PageHeader.Content>
              <PageHeader.TabBar>
                <TabList>
                  <Tab>Tab 1</Tab>
                  <Tab>Tab 2</Tab>
                  <Tab>Tab 3</Tab>
                  <Tab>Tab 4</Tab>
                  <Tab>Tab 5</Tab>
                  <Tab>Tab 6</Tab>
                  <Tab>Tab 7</Tab>
                </TabList>
              </PageHeader.TabBar>
      </PageHeader.Root>
      <TabPanels>
        <TabPanel className="page-header-story--tall-tab-panel">
          Tab Panel 1
        </TabPanel>
        <TabPanel className="page-header-story--tall-tab-panel">
          Tab Panel 2
        </TabPanel>
        <TabPanel className="page-header-story--tall-tab-panel">
          Tab Panel 3
        </TabPanel>
        <TabPanel className="page-header-story--tall-tab-panel">
          Tab Panel 4
        </TabPanel>
        <TabPanel className="page-header-story--tall-tab-panel">
          Tab Panel 5
        </TabPanel>
        <TabPanel className="page-header-story--tall-tab-panel">
          Tab Panel 6
        </TabPanel>
        <TabPanel className="page-header-story--tall-tab-panel">
          Tab Panel 7
        </TabPanel>
      </TabPanels>
    </Tabs>
}

export const Route = createFileRoute('/with-actions')({
  component: WithActions,
});
