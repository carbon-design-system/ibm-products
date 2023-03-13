/**
 * Copyright IBM Corp. 2021, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Dropdown, FormGroup } from '@carbon/react';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import uuidv4 from '../../global/js/utils/uuidv4';

import { OptionsTile } from '.';
import mdx from './OptionsTile.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(OptionsTile.displayName),
  component: OptionsTile,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  // spell-checker:disable
  const languages = [
    { label: 'English', id: 'en' },
    { label: '简体中文 - Chinese Simplified', id: 'zh-CN' },
    { label: '繁體中文 - Chinese Traditional', id: 'zh-TW' },
    { label: 'Français - French', id: 'fr' },
    { label: 'Deutsch - German', id: 'de' },
    { label: 'Italiano - Italian', id: 'it' },
    { label: '日本語 - Japanese', id: 'ja' },
    { label: '한국어 - Korean', id: 'ko' },
    { label: 'Polski - Polish', id: 'pl' },
    { label: 'Português (brasileiro) - Portuguese (Brazilian)', id: 'pt-BR' },
    { label: 'Русский - Russian', id: 'ru' },
    { label: 'Español - Spanish', id: 'es' },
  ];

  const locales = [
    { label: 'English', id: 'en' },
    { label: 'English-US', id: 'en-US' },
    { label: 'English-UK', id: 'en-UK' },
    { label: 'English-Canada', id: 'en-CA' },
    { label: 'English-Australia', id: 'en-AU' },
    { label: 'Japanese', id: 'ja' },
    { label: 'Korean', id: 'ko' },
    { label: 'Chinese-PRC', id: 'zh-CN' },
    { label: 'Chinese-Taiwan', id: 'zh-TW' },
    { label: 'Vietnamese', id: 'vi' },
    { label: 'Thai', id: 'th' },
    { label: 'Russian', id: 'ru' },
    { label: 'Polish', id: 'pl' },
    { label: 'Greek', id: 'el' },
    { label: 'Hebrew', id: 'he' },
    { label: 'Arabic', id: 'ar' },
    { label: 'Spanish', id: 'es' },
    { label: 'German', id: 'de' },
    { label: 'French', id: 'fr' },
    { label: 'French-Canada', id: 'fr-CA' },
    { label: 'Italian', id: 'it' },
    { label: 'Portuguese-Brazil', id: 'pt-BR' },
    { label: 'Turkish', id: 'tr' },
  ];
  // spell-checker:enable

  const id = uuidv4();
  const titleId = args.titleId ?? `${id}-title`;

  const isInvalid = args.invalid;
  const isWarn = !isInvalid && args.warn;
  const isLocked = !isInvalid && !isWarn && args.locked;
  const disableControls = args.enabled === false || isLocked;

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <OptionsTile onToggle={action('onToggle')} {...args}>
=======
    <OptionsTile
      onToggle={action('onToggle')}
      onChange={action('onChange')}
      {...args}
    >
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212
      <FormGroup aria-labelledby={titleId} legendText="">
=======
    <OptionsTile
      onToggle={action('onToggle')}
      onChange={action('onChange')}
      {...args}
    >
      <FormGroup aria-labelledby={titleId} legendText="" hasMargin={false}>
>>>>>>> 05ee7cdcf736a836aafbb7b74e11211b4a5787c8
        <p>
          User interface defines the language the application is displayed in.
          Locale sets the regional display formats for information like time,
          date, currency and decimal delimiters.
        </p>
        <Dropdown
          id={`${id}-language`}
          titleText="User interface"
          label="User interface"
          items={languages}
          initialSelectedItem={languages[0]}
          invalid={isInvalid}
          invalidText="Non-latin languages are not supported by system"
          warn={isWarn}
          warnText="A language change requires a restart of the application"
          disabled={disableControls}
        />
        <Dropdown
          id={`${id}-locale`}
          titleText="Locale"
          label="Locale"
          items={locales}
          initialSelectedItem={locales[0]}
          disabled={disableControls}
        />
      </FormGroup>
    </OptionsTile>
  );
};

// eslint-disable-next-line react/prop-types
const TemplateStatic = ({ enabled, ...rest }) => {
  const [liveEnabled, setLiveEnabled] = useState(enabled);

  function onToggle(e) {
    setLiveEnabled(e);
    action('onToggle')(e);
  }

  function onChange(value) {
    action('onChange')(value);
  }

  return (
    <OptionsTile
      onToggle={onToggle}
      onChange={onChange}
      {...rest}
      enabled={liveEnabled}
    />
  );
};

export const optionsTile = prepareStory(Template, {
  args: {
    title: 'Language',
    summary: 'English | Locale: English',
    invalidText: 'Your system does not support this configuration',
    warnText: 'A restart is required to apply these settings',
    lockedText: 'This option is managed by your administrator',
  },
});

export const staticOptionsTile = prepareStory(TemplateStatic, {
  args: {
    title: 'Hardware acceleration',
    enabled: true,
  },
});
