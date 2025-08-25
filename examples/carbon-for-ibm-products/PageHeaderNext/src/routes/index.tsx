import { createFileRoute } from '@tanstack/react-router'
import { Breadcrumb, BreadcrumbItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@carbon/react';
import { preview__PageHeader as PageHeader, TruncatedText, pkg } from '@carbon/ibm-products';
import { Bee } from '@carbon/react/icons';

pkg.component.TruncatedText = true;

const BreadcrumbBeeIcon = () => <Bee size={16} />;

const DefaultPage = () => {
  return <Tabs>
      <PageHeader.Root>
        <PageHeader.BreadcrumbBar
          border
          pageActionsFlush
          contentActionsFlush
          renderIcon={BreadcrumbBeeIcon}
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

export const Route = createFileRoute('/')({
  component: DefaultPage,
});
