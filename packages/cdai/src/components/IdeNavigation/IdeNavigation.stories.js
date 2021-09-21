import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header, HeaderName } from 'carbon-components-react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { settings } from 'carbon-components';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import styles from './_IdeNavigation.scss';

// import page header nav assets
import {
  withHeadingRenderFunction,
  withHeading,
  withSubtitle,
  withBreadcrumb,
  withTabs,
  withClassName,
  pageHeaderCoreProps,
  bespokeJSXProp,
} from './PageHeader/test_assets/testProps.js';
import IdePageHeaderReadme from './PageHeader/README.md';

// import page content nav assets
import {
  withBleedClass,
  withChildren,
} from './PageContent/test_assets/testProps.js';
import IdePageContentReadMe from './PageContent/README.md';

// import page content nav assets
import {
  navigationCoreProps,
  sampleNavLinks,
  sampleNavMenus,
} from './Navigation/test_assets/testProps.js';
import IdeNavigationReadMe from './Navigation/README.md';

// import top level readme
import topLevelNavigationReadme from './README.md';

// import navigation components
import { IdePageHeader, IdePageContent, IdeNavigation } from '.';

const { prefix } = settings;

const samplePageContent = (
  <IdePageContent>
    <div className={`${prefix}--row`}>
      <span className={`${prefix}--col storybook--idenav-content`}>
        PAGE CONTENT HERE
      </span>
    </div>
  </IdePageContent>
);

const renderMockContent = (component, includeSamplePageContent = true) => (
  <div>
    <Header aria-label="IDE Placeholder heading">
      <HeaderName href="#">IDE Component Library</HeaderName>
    </Header>
    {component}
    {includeSamplePageContent ? samplePageContent : null}
  </div>
);

const interactiveIdeNavigationProps = (props) => {
  return {
    ...props,
    expanded: boolean('Start expanded', true),
    onToggle: action('navigation toggled'),
  };
};

storiesOf(
  `${getComponentLabel('IdeNavigation')}/IDE Navigation component set`,
  module
)
  .addParameters({
    readme: {
      sidebar: topLevelNavigationReadme,
    },
  })
  .addParameters({ styles, layout: 'fullscreen' })
  .add(
    'All components used together',
    () => {
      return renderMockContent(
        <IdeNavigation {...navigationCoreProps}>
          <IdePageHeader {...pageHeaderCoreProps} className={''} />
          {samplePageContent}
        </IdeNavigation>,
        false
      );
    },
    {
      info: {
        text: 'All components in the Navigation pattern used together.',
      },
    }
  );

storiesOf(
  `${getComponentLabel('IdeNavigation')}/IDE Navigation component`,
  module
)
  .addParameters({
    readme: {
      sidebar: IdeNavigationReadMe,
    },
  })
  .addParameters({ styles, layout: 'fullscreen' })
  .addDecorator(withKnobs)
  .add(
    'using IdeSideNavLinks',
    () =>
      renderMockContent(
        <IdeNavigation
          {...navigationCoreProps}
          navigationLinks={sampleNavLinks}
        >
          {samplePageContent}
        </IdeNavigation>,
        false
      ),
    {
      info: {
        text: 'IdeNavigation with IdeSideNavLink components (one with an icon, one without). Do note, for the blue "active" indicator needs to be provided as either the `isActive` prop, or the `active` attribute on the anchor (react router NavLinks does this for example).',
      },
    }
  )
  .add(
    'Interactive example',
    () =>
      renderMockContent(
        <IdeNavigation {...interactiveIdeNavigationProps(navigationCoreProps)}>
          {samplePageContent}
        </IdeNavigation>,
        false
      ),
    {
      info: {
        text: 'IdeNavigation component with interactive options. See the Knobs for more.',
      },
    }
  );

// seperate so this section can appear in the experimental state
storiesOf(
  `${getComponentLabel('IdeSideNavMenu')}/IDE Navigation component`,
  module
)
  .addParameters({
    readme: {
      sidebar: IdeNavigationReadMe,
    },
  })
  .addParameters({ styles, layout: 'fullscreen' })
  .add(
    'using IdeSideNavMenus',
    () =>
      renderMockContent(
        <IdeNavigation
          {...navigationCoreProps}
          navigationLinks={sampleNavMenus}
        >
          {samplePageContent}
        </IdeNavigation>,
        false
      ),
    {
      info: {
        text: 'IdeNavigation with IdeSideNavMenu components (one with an icon, one without). Currently these have no alternative hover states as per the guidelines/design. These will be implemented in a future PR.',
      },
    }
  );

storiesOf(
  `${getComponentLabel('IdeNavigation')}/IDE Page header component`,
  module
)
  .addParameters({
    readme: {
      sidebar: IdePageHeaderReadme,
    },
  })
  .addParameters({ styles, layout: 'fullscreen' })
  .add(
    'With breadcrumb, heading, subtitle and tabs properties',
    () =>
      renderMockContent(
        <IdePageHeader {...pageHeaderCoreProps} {...withSubtitle} />
      ),
    {
      info: {
        text: 'Page header component with core common properties having been provided.',
      },
    }
  )
  .add(
    'With just a breadcrumb',
    () =>
      renderMockContent(
        <IdePageHeader {...withBreadcrumb} {...withClassName} />
      ),
    {
      info: {
        text: 'Page header component with just the breadcrumb. Note that no space is reserved for other content',
      },
    }
  )
  .add(
    'With just a heading',
    () =>
      renderMockContent(<IdePageHeader {...withHeading} {...withClassName} />),
    {
      info: {
        text: 'Page header component with just the heading. Note that space is still reserved for the breadcrumb, even if not provided, as well as a small ammount of space below the heading where the tabs would be if provided.',
      },
    }
  )
  .add(
    'With just a heading and subtitle',
    () =>
      renderMockContent(
        <IdePageHeader {...withHeading} {...withSubtitle} {...withClassName} />
      ),
    {
      info: {
        text: 'Page header component with a heading and subtitle. Note that space is still reserved for the breadcrumb, even if not provided, as well as a small ammount of space below the heading where the tabs would be if provided.',
      },
    }
  )
  .add(
    'With a heading and bespoke content alongside the heading',
    () =>
      renderMockContent(
        <IdePageHeader
          {...withHeading}
          {...withHeadingRenderFunction}
          {...withClassName}
        />
      ),
    {
      info: {
        text: 'Page header component with a heading and custom content alongside the heading. This is achieved by render function, which you would provide. It invokes the function with one argument, being the JSX for the heading. Your render function return this heading, along with any other content you want to show, which should include any styling/layout you require. In this instance, we render a Bee icon on the left. For convience, all content in the heading is horizontally aligned.',
      },
    }
  )
  .add(
    'With just tabs',
    () => renderMockContent(<IdePageHeader {...withTabs} {...withClassName} />),
    {
      info: {
        text: 'Page header component with just the tabs. Note that no space is reserved for any other content in this case.',
      },
    }
  )
  .add(
    'With breadcrumb and heading',
    () =>
      renderMockContent(
        <IdePageHeader
          {...withBreadcrumb}
          {...withHeading}
          {...withClassName}
        />
      ),
    {
      info: {
        text: 'Page header component with breadcrumb and heading.',
      },
    }
  )
  .add(
    'With heading and tabs',
    () =>
      renderMockContent(
        <IdePageHeader {...withTabs} {...withHeading} {...withClassName} />
      ),
    {
      info: {
        text: 'Page header component with tabs and heading.',
      },
    }
  )
  .add(
    'With breadcrumb and tabs',
    () =>
      renderMockContent(
        <IdePageHeader {...withBreadcrumb} {...withTabs} {...withClassName} />
      ),
    {
      info: {
        text: 'Page header component with breadcrumb and tabs.',
      },
    }
  )
  .add(
    'With bespoke JSX provided',
    () =>
      renderMockContent(
        <IdePageHeader {...pageHeaderCoreProps} {...bespokeJSXProp} />
      ),
    {
      info: {
        text: 'Page header component with bespoke JSX provided. In this instance, a custom button is rendered as a part of the navigation. This is provided by the customContent prop.',
      },
    }
  );

storiesOf(
  `${getComponentLabel('IdeNavigation')}/IDE Page content component`,
  module
)
  .addParameters({
    readme: {
      sidebar: IdePageContentReadMe,
    },
  })
  .addParameters({ styles, layout: 'fullscreen' })
  .add(
    'With just children',
    () => (
      <div className={'storybook--use-width'}>
        <IdePageContent {...withChildren} />
      </div>
    ),
    {
      info: {
        text: 'Page content component with just children. This component adds a carbon grid wrapping the child, with some IDE specific alignment css. It is recommended you use this to keep content aligned across your/all products.',
      },
    }
  )
  .add(
    'With bleed class set',
    () => (
      <div className={'storybook--use-width'}>
        <IdePageContent {...withBleedClass} {...withChildren} />
      </div>
    ),
    {
      info: {
        text: 'Page content component with children and a bleed class. This allows a bleed effect, larger than the grid. This component adds a carbon grid wrapping the child, with some IDE specific alignment css. It is recommended you use this to keep content aligned across your/all products.',
      },
    }
  );
