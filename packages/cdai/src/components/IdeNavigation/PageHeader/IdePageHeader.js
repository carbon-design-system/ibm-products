//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { idAttribute } from '../../../component_helpers/IDHelper';
import IdePageContent from '../PageContent/IdePageContent.js';
import { idePrefix } from '../../../globals/js/settings';

const { prefix } = settings;
const renderBreadcrumb = (breadcrumbContent) => (
  <div
    key={`IdePageHeader--breadcrumb-container`}
    className={`${idePrefix}-page-header--breadcrumb-container`}
    {...idAttribute('IdePageHeader--breadcrumb-container')}
  >
    {breadcrumbContent}
  </div>
);

const renderHeader = (header, headingRenderFunction) => (
  <div
    key={`IdePageHeader--heading--container`}
    className={`${idePrefix}-page-header--heading-container`}
    {...idAttribute('IdePageHeader--heading-container')}
  >
    {header
      ? headingRenderFunction(
          <p
            key={`IdePageHeader--heading`}
            className={`${idePrefix}-page-header--heading`}
            {...idAttribute('IdePageHeader--heading')}
          >
            {header}
          </p>
        )
      : headingRenderFunction(null)}
  </div>
);

const renderSubtitle = (subtitle) => (
  <div
    key={`IdePageHeader--subtitle--container`}
    className={`${idePrefix}-page-header--subtitle-container`}
    {...idAttribute('IdePageHeader--subtitle-container')}
  >
    {subtitle ? (
      <p
        key={`IdePageHeader--subtitle`}
        className={`${idePrefix}-page-header--subtitle`}
        {...idAttribute('IdePageHeader--subtitle')}
      >
        {subtitle}
      </p>
    ) : null}
  </div>
);
const renderTabs = (tabContent) =>
  tabContent ? (
    <div
      key={`IdePageHeader--tabs-container`}
      className={`${idePrefix}-page-header--tabs-container`}
      {...idAttribute('IdePageHeader--tabs-container')}
    >
      {tabContent}
    </div>
  ) : (
    <div
      className={`${idePrefix}-page-header--tabs-container__empty`}
      key={`IdePageHeader--tabs-container`}
      {...idAttribute('IdePageHeader--tabs-container')}
    />
  );

const IdePageHeader = ({
  breadcrumb,
  headingRenderFunction,
  heading,
  subtitle,
  tabs,
  customContent,
  className,
  ...others
}) => {
  // depending on the case, render some aspects of the navigation, depending on the properties provided
  let navContent = null;
  if (breadcrumb && !heading && !tabs) {
    navContent = renderBreadcrumb(breadcrumb);
  } else if (!breadcrumb && !heading && tabs) {
    navContent = renderTabs(tabs);
  } else {
    navContent = [
      renderBreadcrumb(breadcrumb),
      renderHeader(heading, headingRenderFunction),
      renderSubtitle(subtitle),
      renderTabs(tabs),
    ];
  }

  return (
    <section
      {...idAttribute('IdePageHeader')}
      className={`${idePrefix}-page-header ${className}`}
      {...others}
    >
      <IdePageContent
        bleedClassName={`${idePrefix}-page-header__backgroundColour`}
      >
        <div className={`${prefix}--row`}>
          <div className={`${prefix}--col`}>{navContent}</div>
          {customContent ? (
            <div
              className={`${prefix}--col ${idePrefix}-page-header--custom-content-container`}
              {...idAttribute('IdePageHeader--custom-content-container')}
            >
              {customContent}
            </div>
          ) : null}
        </div>
      </IdePageContent>
    </section>
  );
};

IdePageHeader.defaultProps = {
  breadcrumb: null,
  headingRenderFunction: (headerJSX) => headerJSX,
  heading: null,
  subtitle: null,
  tabs: null,
  customContent: null,
  className: '',
};

IdePageHeader.propTypes = {
  /** optional - an instance of the Carbon Breadcrumb component representing you current navigation state */
  breadcrumb: PropTypes.node,
  /** optional - className. Use this to add any custom css you may need */
  className: PropTypes.string,
  /** optional - an area of bespoke JSX rendering. Use this if you want to position specific elements alongside/in this navigation element */
  customContent: PropTypes.node,
  /** optional - a string to display as the header text */
  heading: PropTypes.string,
  /** optional - a render function, which will pass as parameter one the JSX for your header. Use this to render other content alongisde the header (eg an icon)  */
  headingRenderFunction: PropTypes.func,
  /** optional - a string to display as the subtitle under the header text */
  subtitle: PropTypes.string,
  /** optional - an instance of the Carbon Tabs component, with child tabs contained within. Itended content of the Tab are react-router links to navigate you around the UI */
  tabs: PropTypes.node,
};

export default IdePageHeader;
