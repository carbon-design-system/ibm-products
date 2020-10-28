//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { radios } from '@storybook/addon-knobs';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';

import { IdeAutoSave, IdeManualSave } from '.';
import IDESavingReadme from './README.md';

import styles from './_storybook.scss';

storiesOf(getComponentLabel('IdeSaving'), module)
  .addParameters({ styles })
  .addParameters({
    readme: {
      sidebar: IDESavingReadme,
    },
  })
  .add('Auto Save', () => {
    const label = 'State:';
    const options = {
      Saving: 'saving',
      Saved: 'saved',
      Failed: 'failed',
    };
    const value = radios(label, options, 'saving', 'auto-save-group');
    const text = {
      saving: 'Saving...',
      saved: 'Saved',
      failed: 'Failed to save',
    };
    return (
      <div style={{ display: 'flex', width: '100%' }}>
        <section style={{ margin: '3em' }}>
          <h4>Auto Saving states</h4>
          <hr />
          <br />
          <IdeAutoSave state="saving" text="Saving..." />
          <br />
          <IdeAutoSave state="saved" text="Saved" />
          <br />
          <IdeAutoSave state="failed" text="Failed to save" />
        </section>
        <section style={{ margin: '3em' }}>
          <h4>Controlled by Storybook Knobs</h4>
          <hr />
          <br />
          <IdeAutoSave state={value} text={text[value]} />
        </section>
      </div>
    );
  })
  .add('Manual Save', () => {
    const label = 'State:';
    const options = {
      Save: 'save',
      Saved: 'saved',
    };
    const value = radios(label, options, 'save', 'manual-save-group');
    const text = {
      save: 'Save',
      saved: 'Saved',
    };
    return (
      <div style={{ display: 'flex', width: '100%' }}>
        <section style={{ margin: '3em' }}>
          <h4>Manual Saving states</h4>
          <hr />
          <br />
          <IdeManualSave
            state="save"
            saveText="Save"
            cancelText="Cancel"
            onSave={action('save')}
            onCancel={action('cancel')}
          />
          <br />
          <IdeManualSave
            state="saved"
            saveText="Saved"
            cancelText="Cancel"
            onSave={action('save')}
            onCancel={action('cancel')}
          />
        </section>
        <section style={{ margin: '3em' }}>
          <h4>Controlled by Storybook Knobs</h4>
          <hr />
          <br />
          <IdeManualSave
            state={value}
            saveText={text[value]}
            cancelText="Cancel"
            onSave={action('save')}
            onCancel={action('cancel')}
          />
        </section>
      </div>
    );
  });
