//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import sidebar from './README.md';
import { IdeCreate, IdeCreateStep } from '.';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';

import styles from './_storybook.scss';

const props = () => ({
  pageTitle: 'Create an object',
  breadCrumbText: 'Back to objects',
  breadCrumbUrl: '#/objects',
  buttonTextFormAction: 'Create',
  buttonTextFormCancel: 'Cancel',
  buttonTextStepNext: 'Next',
  buttonTextStepBack: 'Back',
  onFormAction: () => {
    // TODO: save the values from the form
  },
  onCancel: () => {
    // TODO: go back to a previous page
    window.location.hash = '#/objects';
  },
});

const propsWithCallback = () => ({
  pageTitle: 'Create an object',
  breadCrumbText: 'Back using consumer callback',
  breadCrumbCallback: () => {},
  buttonTextFormAction: 'Create',
  buttonTextFormCancel: 'Cancel',
  buttonTextStepNext: 'Next',
  buttonTextStepBack: 'Back',
  onFormAction: () => {
    // TODO: save the values from the form
  },
  onCancel: () => {
    // TODO: go back to a previous page
    window.location.hash = '#/objects';
  },
});

const propsNoCancel = () => ({
  pageTitle: 'Create an object',
  breadCrumbText: 'Back to objects',
  buttonTextFormAction: 'Create',
  buttonTextStepNext: 'Next',
  buttonTextStepBack: 'Back',
  onFormAction: () => {
    // TODO: save the values from the form
  },
  onCancel: () => {
    // TODO: go back to a previous page
    window.location.hash = '#/objects';
  },
});

storiesOf(getComponentLabel('IdeCreate'), module)
  .addParameters({ styles, layout: 'fullscreen' })
  .addParameters({ readme: { sidebar } })
  .add('simple form', () => (
    <IdeCreate {...props()}>
      <IdeCreateStep>
        <div>
          *** Render the main form inputs here (scroll page for header collapse)
          ***
        </div>
        <div style={{ width: '20px', height: '1000px' }}>&nbsp;</div>
        <div>*** Bottom of page ***</div>
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('callback on breadcrumb', () => (
    <IdeCreate {...propsWithCallback()}>
      <IdeCreateStep>
        <div>
          *** Render the main form inputs here (scroll page for header collapse)
          ***
        </div>
        <div style={{ width: '20px', height: '1000px' }}>&nbsp;</div>
        <div>*** Bottom of page ***</div>
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('launch out link', () => (
    <IdeCreate {...props()} externalLink>
      <IdeCreateStep>
        <div>
          *** Render the main form inputs here (scroll page for header collapse)
          ***
        </div>
        <div style={{ width: '20px', height: '1000px' }}>&nbsp;</div>
        <div>*** Bottom of page ***</div>
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('with NO cancel step', () => (
    <IdeCreate {...propsNoCancel()}>
      <IdeCreateStep>
        <div>
          *** Render the main form inputs here (scroll page for header collapse)
          ***
        </div>
        <div style={{ width: '20px', height: '1000px' }}>&nbsp;</div>
        <div>*** Bottom of page ***</div>
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('with pre-check page', () => (
    <IdeCreate {...props()} usePreCheck>
      <IdeCreateStep>
        *** Render the template/pre-check page here ***
      </IdeCreateStep>
      <IdeCreateStep>
        <div>
          *** Render the main form inputs here (scroll page for header collapse)
          ***
        </div>
        <div style={{ width: '20px', height: '1000px' }}>&nbsp;</div>
        <div>*** Bottom of page ***</div>
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('with sub-title', () => (
    <IdeCreate {...props()} subTitle="Context: foo">
      <IdeCreateStep>
        *** Render the template/pre-check page here ***
      </IdeCreateStep>
      <IdeCreateStep>
        <div>
          *** Render the main form inputs here (scroll page for header collapse)
          ***
        </div>
        <div style={{ width: '20px', height: '1000px' }}>&nbsp;</div>
        <div>*** Bottom of page ***</div>
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('with very long sub-title', () => (
    <IdeCreate
      {...props()}
      pageTitle={'Create an instance of type X and one of type Y'}
      subTitle="Context: very long subtitle without a link. This subtitle should wrap to improve redability and provide a better user experience."
    >
      <IdeCreateStep>
        <div>
          *** Render the main form inputs here (scroll page for header collapse)
          ***
        </div>
        <div style={{ width: '20px', height: '1000px' }}>&nbsp;</div>
        <div>*** Bottom of page ***</div>
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('multistep', () => (
    <IdeCreate {...props()} subTitle="Context: multi">
      <IdeCreateStep label="First step">
        *** Render Step 1 here ***
      </IdeCreateStep>
      <IdeCreateStep label="Second step">
        *** Render Step 2 here ***
      </IdeCreateStep>
      <IdeCreateStep label="Third step">
        *** Render Step 3 here ***
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('multistep with disabled step', () => (
    <IdeCreate {...props()} stepNextDisabled subTitle="Context: multi">
      <IdeCreateStep label="First step">
        *** Render Step 1 here ***
      </IdeCreateStep>
      <IdeCreateStep label="Second step" disabled={true}>
        *** Render Step 2 here ***
      </IdeCreateStep>
      <IdeCreateStep label="Third step" disabled={true}>
        *** Render Step 3 here ***
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('multistep with pre-check', () => (
    <IdeCreate {...props()} subTitle="Context: multi" usePreCheck={true}>
      <IdeCreateStep>
        *** Render the template/pre-check page here ***
      </IdeCreateStep>
      <IdeCreateStep label="First step">
        *** Render Step 1 here ***
      </IdeCreateStep>
      <IdeCreateStep label="Second step">
        *** Render Step 2 here ***
      </IdeCreateStep>
      <IdeCreateStep label="Third step">
        *** Render Step 3 here ***
      </IdeCreateStep>
    </IdeCreate>
  ))
  .add('with no steps', () => <IdeCreate {...props()} />);
