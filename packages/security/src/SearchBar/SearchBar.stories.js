/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React, { useState } from 'react';

import { sectionTitle } from '../../config';
import { SearchBar } from '..';

import styles from './_index.scss';

const state = () => {
  const [value, setValue] = useState('');

  return {
    onChange: (event) => {
      action('onChange')(event);

      setValue(event.value);
    },
    value,
  };
};

const props = () => ({
  placeHolderText: text('Placeholder (placeHolderText)', 'Placeholder'),
  submitLabel: text('Submit label (submitLabel)', 'Submit'),
  clearButtonLabelText: 'Clear',
  labelText: 'Label',
  onSubmit: action('onSubmit'),
  ...state(),
});

const Default = () => <SearchBar {...props()} />;

const scopes = () => (
  <SearchBar
    {...props()}
    scopeToString={({ name }) => name}
    scopes={new Array(3).fill().map((value = 'Scope', id) => ({
      id: `${id}`,
      name: `${value} ${id}`,
    }))}
    scopesTypeLabel={text('Scopes label (scopesTypeLabel)', 'Scopes')}
  />
);

export default {
  title: `${sectionTitle}/SearchBar`,
  component: SearchBar,
  parameters: { styles },
};

export { Default, scopes };
