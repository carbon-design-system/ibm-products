/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import { pkg } from '../../settings';
import { getStorybookPrefix } from '../../../config';
import { prepareStory } from '../../global/js/utils/story-helper';
import { action } from '@storybook/addon-actions';
import { CreateFullPage } from '.';
import { CreateFullPageSection } from './CreateFullPageSection';
import { CreateFullPageStep } from './CreateFullPageStep';
import mdx from './CreateFullPage.mdx';

import styles from './_storybook-styles.scss';
const storyClass = 'create-full-page-stories';

import { TextInput, NumberInput } from 'carbon-components-react';

const storybookPrefix = getStorybookPrefix(pkg, CreateFullPage.displayName);

export default {
  title: `${storybookPrefix}/${CreateFullPage.displayName}`,
  component: CreateFullPage,
  parameters: {
    styles,
    layout: 'fullscreen',
    docs: { page: mdx },
    controls: { sort: 'requiredFirst' },
  },
  decorators: [
    (story) => <div className={`${storyClass}__viewport`}>{story()}</div>,
  ],
};

const defaultFullPageProps = {
  nextButtonText: 'Next',
  backButtonText: 'Back',
  cancelButtonText: 'Cancel',
  submitButtonText: 'Submit',
  modalTitle: 'Are you sure you want to cancel?',
  modalDescription:
    "If you cancel, the information you have entered won't be saved.",
  modalDangerButtonText: 'Cancel partition',
  modalSecondaryButtonText: 'Return to form',
  onRequestSubmit: action('Submit handler called'),
  onClose: action('Close handler called'),
};

const defaultStepProps = {
  title: 'Partition',
  subtitle: 'This is the unique name used to recognize your topic.',
  description:
    'It will also be used by your producers and consumers as part of the connection information, so make something easy to recognize.',
  onNext: action('Next handler called'),
};

const Template = ({ ...args }) => {
  return (
    <CreateFullPage {...args}>
      <CreateFullPageStep {...defaultStepProps}>
        <TextInput
          id="test1"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
        />
      </CreateFullPageStep>
      <CreateFullPageStep
        title="Core configuration"
        description="We recommend you fill out and evaluate these details at a minimum before deploying your topic.">
        <TextInput
          id="test4"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
        />
        <NumberInput
          id="tj-input-3"
          invalidText="Number is not valid"
          label="Number input label"
          max={100}
          min={0}
          step={10}
          value={50}
        />
        <NumberInput
          id="tj-input-2"
          invalidText="Number is not valid"
          label="Number input label"
          max={100}
          min={0}
          step={10}
          value={50}
        />
        <TextInput
          id="test7"
          invalidText="A valid value is required"
          labelText="Minimum in-sync replicas"
          placeholder="Enter topic name"
        />
      </CreateFullPageStep>
    </CreateFullPage>
  );
};

const TemplateWithSections = ({ ...args }) => {
  return (
    <CreateFullPage {...args}>
      <CreateFullPageStep {...defaultStepProps}>
        <TextInput
          id="test1"
          invalidText="A valid value is required"
          labelText="Topic name"
          placeholder="Enter topic name"
        />
      </CreateFullPageStep>
      <CreateFullPageStep {...defaultStepProps}>
        <CreateFullPageSection>
          <TextInput
            id="test4"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
          />
          <NumberInput
            id="tj-input-3"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <NumberInput
            id="tj-input-2"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <TextInput
            id="test7"
            invalidText="A valid value is required"
            labelText="Minimum in-sync replicas"
            placeholder="Enter topic name"
          />
        </CreateFullPageSection>
        <CreateFullPageSection
          title="Configuration 2"
          description="We recommend you fill out and evaluate these details at a minimum before deploying your topic.">
          <TextInput
            id="test4"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
          />
          <NumberInput
            id="tj-input-3"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <NumberInput
            id="tj-input-2"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <TextInput
            id="test7"
            invalidText="A valid value is required"
            labelText="Minimum in-sync replicas"
            placeholder="Enter topic name"
          />
        </CreateFullPageSection>
        <CreateFullPageSection
          hasDivider={false}
          title="Configuration 3"
          description="We recommend you fill out and evaluate these details at a minimum before deploying your topic.">
          <TextInput
            id="test4"
            invalidText="A valid value is required"
            labelText="Topic name"
            placeholder="Enter topic name"
          />
          <NumberInput
            id="tj-input-3"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <NumberInput
            id="tj-input-2"
            invalidText="Number is not valid"
            label="Number input label"
            max={100}
            min={0}
            step={10}
            value={50}
          />
          <TextInput
            id="test7"
            invalidText="A valid value is required"
            labelText="Minimum in-sync replicas"
            placeholder="Enter topic name"
          />
        </CreateFullPageSection>
      </CreateFullPageStep>
    </CreateFullPage>
  );
};

export const createFullPage = prepareStory(Template, {
  args: {
    ...defaultFullPageProps,
  },
});

export const createFullPageWithSections = prepareStory(TemplateWithSections, {
  args: {
    ...defaultFullPageProps,
  },
});

export const createFullPageWithToggle = prepareStory(Template, {
  args: {
    ...defaultFullPageProps,
    hasToggle: true,
    toggleAriaLabel: 'toggle button',
    toggleLabelText: 'Show all available options',
  },
});
