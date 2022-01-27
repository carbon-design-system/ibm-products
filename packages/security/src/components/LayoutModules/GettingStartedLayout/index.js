/**
 * @file Getting started module.
 * @copyright IBM Security 2021
 */

import classnames from 'classnames';
import { func } from 'prop-types';
import React from 'react';

import LayoutModule, { layoutModuleNamespace } from '../LayoutModule';

const namespace = 'getting-started';

/**
 * The Getting Started Module provides the means to create a consistent and orderly getting started experience.
 */
const GettingStartedLayout = ({ children, ...other }) => {
  const content = children({
    getLayoutProps: ({ className, ...rest } = {}) => {
      const assignClassName = (type) => ({
        className: classnames(className, {
          [`${layoutModuleNamespace}--${namespace}__${type}`]: type,
        }),
        ...rest,
      });

      return {
        description: assignClassName('description'),
        primaryButton: assignClassName('primary-button'),
        secondaryButton: assignClassName('secondary-button'),
        tertiaryButton: assignClassName('tertiary-button'),
        illustration: assignClassName('illustration'),
        additionalInfo: assignClassName('additional-info'),
        ...rest,
      };
    },
  });

  return (
    <LayoutModule
      namespace={`${namespace} ${layoutModuleNamespace}--${namespace}`}
      {...other}
    >
      {content}
    </LayoutModule>
  );
};

GettingStartedLayout.propTypes = {
  /** Provide the `DescriptionModule`, `Button` elements, `Grid` elements, and optionally `image` and `paragraph` elements, for the `GettingStartedLayout` */
  children: func.isRequired,
};

export default GettingStartedLayout;
