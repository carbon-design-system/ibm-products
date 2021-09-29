import React from 'react';
import { idAttribute } from '../../../../component_helpers/IDHelper';
import {
  Breadcrumb,
  BreadcrumbItem,
  Tabs,
  Tab,
  Button,
} from 'carbon-components-react';
import { Bee32 } from '@carbon/icons-react';

const heading = 'my heading';
const subtitle = 'my subtitle';
const breadcrumb = (
  <Breadcrumb noTrailingSlash {...idAttribute('breadcrumb')}>
    <BreadcrumbItem>
      <a href={'#top'}>items</a>
    </BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>
      <div>item</div>
    </BreadcrumbItem>
  </Breadcrumb>
);

export const withHeading = {
  heading,
};

export const withSubtitle = {
  subtitle,
};

export const withBreadcrumb = {
  breadcrumb,
};

export const withTabs = {
  tabs: (
    <Tabs>
      <Tab key={'tab1'} label={'Tab one'} {...idAttribute('tab1')} />
      <Tab key={'tab2'} label={'Tab two'} {...idAttribute('tab2')} />
    </Tabs>
  ),
};

export const withHeadingRenderFunction = {
  headingRenderFunction: (headingJSX) => (
    <React.Fragment>
      <Bee32 {...idAttribute('custom-header-content')} />
      {headingJSX}
    </React.Fragment>
  ),
};

export const withClassName = {
  className: 'storybook--use-width storybook--ide-page-header-heading',
};

export const pageHeaderCoreProps = {
  ...withHeading,
  ...withBreadcrumb,
  ...withTabs,
  ...withClassName,
};

export const bespokeJSXProp = {
  customContent: (
    <div
      className={'storybook--idepageheader-button'}
      {...idAttribute('custom')}
    >
      <Button>Add new topic</Button>
    </div>
  ),
};
