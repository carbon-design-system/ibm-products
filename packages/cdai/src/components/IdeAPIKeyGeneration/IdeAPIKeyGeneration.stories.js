//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { IdeAPIKeyGeneration } from '.';
import IdeAPIKeyGenerationReadme from './README.md';
import { Button } from 'carbon-components-react';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';

import styles from './_storybook.scss';

import {
  coreConfigFunc,
  coreTextProps,
  coreActionProps,
  descriptiveNameStepConfigFunc,
  descriptiveNameStepTextProps,
  customStepsConfigFunc,
  customStepsActionProps,
} from './test_assets/testProps.js';

const createKnobs = (knobPropNames, config, knobFunc, groupId) =>
  knobPropNames.reduce(
    (accumulator, propName) => ({
      ...accumulator,
      [propName]: knobFunc(
        `${propName} (${groupId})`,
        config[propName],
        groupId
      ),
    }),
    {}
  );

const createActions = (actionPropNames) =>
  actionPropNames.reduce(
    (accumulator, propName) => ({
      ...accumulator,
      [propName]: action(propName),
    }),
    {}
  );

storiesOf(getComponentLabel('IdeAPIKeyGeneration'), module)
  .addParameters({ styles })
  .addParameters({
    readme: {
      sidebar: IdeAPIKeyGenerationReadme,
    },
  })
  .addDecorator(withKnobs)
  .add(
    'With core configuration',
    () => {
      const coreConfig = coreConfigFunc();

      const config = {
        ...coreConfig,
        ...createKnobs(
          ['open', 'isAPIKeyGenerating', 'isAPIKeyVisible'],
          coreConfig,
          boolean,
          'core'
        ),
        ...createKnobs(coreTextProps, coreConfig, text, 'core'),
        ...createActions(coreActionProps),
      };

      return <IdeAPIKeyGeneration {...config} />;
    },
    {
      info: {
        text: 'Core/minimum configuration. Use this to enable the copy/download of an API key. Useful if you do not require additional interaction.',
      },
    }
  )
  .add(
    'With descriptive name configuration',
    () => {
      const descriptiveNameConfig = {
        ...coreConfigFunc(),
        ...descriptiveNameStepConfigFunc(),
      };

      const actionProps = [...coreActionProps, 'onGenerateAPIKey'];

      const config = {
        ...descriptiveNameConfig,
        descriptiveNameStep: {
          ...createKnobs(
            ['isRequired', 'invalid'],
            descriptiveNameConfig.descriptiveNameStep,
            boolean,
            'descriptiveNameStep'
          ),
          ...createKnobs(
            descriptiveNameStepTextProps,
            descriptiveNameConfig.descriptiveNameStep,
            text,
            'descriptiveNameStep'
          ),
          onChange: action('onChange'),
        },
        ...createKnobs(
          ['open', 'isAPIKeyGenerating', 'isAPIKeyVisible'],
          descriptiveNameConfig,
          boolean,
          'core'
        ),
        ...createKnobs(coreTextProps, descriptiveNameConfig, text, 'core'),
        ...createActions(actionProps),
      };

      return <IdeAPIKeyGeneration {...config} />;
    },
    {
      info: {
        text: 'Descriptive Name Step configuration.',
      },
    }
  )
  .add(
    'With custom steps configuration',
    () => {
      const customStepsConfig = {
        ...coreConfigFunc(),
        ...customStepsConfigFunc(),
      };

      const config = {
        ...customStepsConfig,
        ...createKnobs(
          ['open', 'isAPIKeyGenerating'],
          customStepsConfig,
          boolean,
          'core'
        ),
        ...createKnobs(coreTextProps, customStepsConfig, text, 'core'),
        ...createActions([
          ...coreActionProps,
          ...customStepsActionProps,
          'onGenerateAPIKey',
        ]),
      };

      return <IdeAPIKeyGeneration {...config} />;
    },
    {
      info: {
        text: 'Custom steps configuration.',
      },
    }
  )
  .add(
    'Wrapper with descriptive name and custom steps configuration',
    () => {
      // create dummy component that wraps the IdeAPIKeyGeneration and allows state:
      class WrapperComponent extends React.Component {
        constructor(props) {
          super(props);

          this.handleOpenAPIKeyGen = this.handleOpenAPIKeyGen.bind(this);
          this.handleGenerateAPIKey = this.handleGenerateAPIKey.bind(this);

          this.state = {
            open: false,
            isAPIKeyGenerating: false,
          };
        }

        handleOpenAPIKeyGen(open) {
          return () => this.setState({ open });
        }

        handleGenerateAPIKey() {
          // API key is generating
          this.setState({ isAPIKeyGenerating: true });

          // API key generation completes after 3 seconds
          setTimeout(() => this.setState({ isAPIKeyGenerating: false }), 3000);
        }

        render() {
          const { open, isAPIKeyGenerating } = this.state;

          // Use state for IdeAPIKeyGeneration
          const props = {
            ...this.props,
            onClose: this.handleOpenAPIKeyGen(false),
            onCopyAPIKeyData: this.handleOpenAPIKeyGen(false),
            onGenerateAPIKey: this.handleGenerateAPIKey,
            open,
            isAPIKeyGenerating,
          };

          return (
            <>
              <Button onClick={this.handleOpenAPIKeyGen(true)}>
                Generate API key
              </Button>
              <IdeAPIKeyGeneration {...props} />
            </>
          );
        }
      }

      const descriptiveNameConfig = {
        ...coreConfigFunc(),
        ...descriptiveNameStepConfigFunc({ value: 'Pre-filled name' }),
        ...customStepsConfigFunc(),
      };

      const config = {
        ...descriptiveNameConfig,
        descriptiveNameStep: {
          ...createKnobs(
            ['isRequired', 'invalid'],
            descriptiveNameConfig.descriptiveNameStep,
            boolean,
            'descriptiveNameStep'
          ),
          ...createKnobs(
            descriptiveNameStepTextProps,
            descriptiveNameConfig.descriptiveNameStep,
            text,
            'descriptiveNameStep'
          ),
          onChange: action('onChange'),
        },
        ...createKnobs(
          ['open', 'isAPIKeyGenerating'],
          descriptiveNameConfig,
          boolean,
          'core'
        ),
        ...createKnobs(coreTextProps, descriptiveNameConfig, text, 'core'),
        ...createActions([
          ...coreActionProps,
          ...customStepsActionProps,
          'onGenerateAPIKey',
        ]),
      };

      return <WrapperComponent {...config} />;
    },
    {
      info: {
        text: 'Descriptive Name Step configuration.',
      },
    }
  );
