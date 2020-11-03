//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

const { cucumber } = require('gherkin-jest');
import IdePageHeader from './IdePageHeader';
import * as props from './test_assets/testProps.js';
import { idAttributeSelector } from '../../../component_helpers/IDHelper';

cucumber.defineRule('Setup of the IdePageHeader world', (world) => {
  world.componentToRender = IdePageHeader;
});

const getPropsForPropSet = (propertySet) => {
  let properties = propertySet.split(',');
  let propertiesToReturn = {};

  properties.forEach((property) => {
    switch (property) {
      case 'none':
      default:
        propertiesToReturn = undefined;
        break;
      case 'breadcrumb':
        propertiesToReturn = {
          ...propertiesToReturn,
          ...props.withBreadcrumb,
        };
        break;
      case 'headerRenderFunction':
        propertiesToReturn = {
          ...propertiesToReturn,
          ...props.withHeadingRenderFunction,
        };
        break;
      case 'heading':
        propertiesToReturn = {
          ...propertiesToReturn,
          ...props.withHeading,
        };
        break;
      case 'subtitle':
        propertiesToReturn = {
          ...propertiesToReturn,
          ...props.withSubtitle,
        };
        break;
      case 'tabs':
        propertiesToReturn = {
          ...propertiesToReturn,
          ...props.withTabs,
        };
        break;
      case 'custom':
        propertiesToReturn = {
          ...propertiesToReturn,
          ...props.bespokeJSXProp,
        };
        break;
      case 'others':
        propertiesToReturn = {
          ...propertiesToReturn,
          ...props.withClassName,
        };
        break;
    }
  });

  return propertiesToReturn;
};

cucumber.defineRule(
  'a set of properties called {string} provided to the component',
  (world, propSet) => {
    world.props = getPropsForPropSet(propSet);
  }
);

cucumber.defineRule(
  'the content of {string} is rendered as expected',
  (world, propSet) => {
    propSet.split(',').forEach((propertyToValidate) => {
      switch (propertyToValidate) {
        case 'none':
        default:
          // confirm core structure present
          expect(
            world.mountedComponent.exists(idAttributeSelector(`IdePageHeader`))
          ).toBe(true);
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--breadcrumb-container`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--heading-container`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--heading`)
            )
          ).toBe(false);
          // expect a tab container (even when no tabs)
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--tabs-container`)
            )
          ).toBe(true);
          // and that it has the right css class applied
          expect(
            world.mountedComponent
              .find(idAttributeSelector(`IdePageHeader--tabs-container`))
              .hasClass(`ide-page-header--tabs-container__empty`)
          ).toBe(true);
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--custom-content-container`)
            )
          ).toBe(false);
          break;
        case 'breadcrumb':
          // check bredcrumb and content are included
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--breadcrumb-container`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent
              .find(idAttributeSelector(`IdePageHeader--breadcrumb-container`))
              .exists(idAttributeSelector(`breadcrumb`))
          ).toBe(true);
          break;
        case 'headingRenderFunction':
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--heading-container`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`custom-header-content`)
            )
          ).toBe(true);
          break;
        case 'heading':
          // check heading and content are included
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--heading-container`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--heading`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent
              .find(idAttributeSelector(`IdePageHeader--heading`))
              .text()
          ).toBe(props.withHeading.heading);
          break;
        case 'subtitle':
          // check subtitle and content are included
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--subtitle-container`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--subtitle`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent
              .find(idAttributeSelector(`IdePageHeader--subtitle`))
              .text()
          ).toBe(props.withSubtitle.subtitle);
          break;
        case 'tabs':
          // check tabs and content are included
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--tabs-container`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent
              .find(idAttributeSelector(`IdePageHeader--tabs-container`))
              .hasClass(`ide-page-header--tabs-container`)
          ).toBe(true);
          expect(
            world.mountedComponent
              .find(idAttributeSelector(`IdePageHeader--tabs-container`))
              .exists(idAttributeSelector(`tab1`))
          ).toBe(true);
          expect(
            world.mountedComponent
              .find(idAttributeSelector(`IdePageHeader--tabs-container`))
              .exists(idAttributeSelector(`tab2`))
          ).toBe(true);
          break;
        case 'custom':
          // confirm custom content also rendered
          expect(
            world.mountedComponent.exists(
              idAttributeSelector(`IdePageHeader--custom-content-container`)
            )
          ).toBe(true);
          expect(
            world.mountedComponent
              .find(
                idAttributeSelector(`IdePageHeader--custom-content-container`)
              )
              .exists(idAttributeSelector(`custom`))
          ).toBe(true);
          break;
        case 'others':
          // this confirms a custom css class is included
          expect(
            world.mountedComponent.exists(idAttributeSelector(`IdePageHeader`))
          ).toBe(true);
          expect(
            world.mountedComponent
              .find(idAttributeSelector(`IdePageHeader`))
              .hasClass(props.withClassName.className)
          ).toBe(true);
          break;
      }
    });
    expect(world.mountedComponent.getElements()).toMatchSnapshot();
  }
);
