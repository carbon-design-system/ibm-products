/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useMemo, useState } from 'react';
import {
  DatePicker,
  DatePickerInput,
  Dropdown,
  TextInput,
} from '@carbon/react';
import { dateTimeFormat } from '@carbon/utilities';
import styles from './_story-styles.scss?inline';
import DocsPage from './DateTimeFormat.mdx';

const localeOptions = [
  {
    label: 'en-US / English (United States)',
    value: 'en-US',
  },
  {
    label: 'en-GB / English (United Kingdom)',
    value: 'en-GB',
  },
  {
    label: 'de-DE / German (Germany)',
    value: 'de-DE',
  },
  {
    label: 'fr-FR / French (France)',
    value: 'fr-FR',
  },
];

const formatOptions = [
  {
    label: 'Absolute date and time',
    value: 'absolute',
  },
  {
    label: 'Absolute date',
    value: 'date',
  },
  {
    label: 'Absolute time',
    value: 'time',
  },
  {
    label: 'Relative time',
    value: 'relative',
  },
];

const outputStyles = ['default', 'full', 'long', 'medium', 'short'];

const pad = (value) => String(value).padStart(2, '0');

const formatDateInputValue = (date) => {
  return `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${date.getFullYear()}`;
};

const formatTimeInputValue = (date) => {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

const parseDateTime = (dateValue, timeValue) => {
  const [month = '01', day = '01', year = '1970'] = dateValue.split('/');
  const [hours = '00', minutes = '00', seconds = '00'] = timeValue.split(':');

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hours),
    Number(minutes),
    Number(seconds)
  );
};

const getOutputValues = (timestamp, locale, selectedFormat) => {
  if (selectedFormat === 'relative') {
    return {
      default: dateTimeFormat.relative.format(timestamp, { locale }),
      full: dateTimeFormat.relative.format(timestamp, {
        locale,
        style: 'long',
      }),
      long: dateTimeFormat.relative.format(timestamp, {
        locale,
        style: 'long',
      }),
      medium: dateTimeFormat.relative.format(timestamp, {
        locale,
        style: 'short',
      }),
      short: dateTimeFormat.relative.format(timestamp, {
        locale,
        style: 'narrow',
      }),
    };
  }

  if (selectedFormat === 'date') {
    return {
      default: dateTimeFormat.absolute.formatDate(timestamp, { locale }),
      full: dateTimeFormat.absolute.formatDate(timestamp, {
        locale,
        style: 'full',
      }),
      long: dateTimeFormat.absolute.formatDate(timestamp, {
        locale,
        style: 'long',
      }),
      medium: dateTimeFormat.absolute.formatDate(timestamp, {
        locale,
        style: 'medium',
      }),
      short: dateTimeFormat.absolute.formatDate(timestamp, {
        locale,
        style: 'short',
      }),
    };
  }

  if (selectedFormat === 'time') {
    return {
      default: dateTimeFormat.absolute.formatTime(timestamp, { locale }),
      full: dateTimeFormat.absolute.formatTime(timestamp, {
        locale,
        style: 'full',
      }),
      long: dateTimeFormat.absolute.formatTime(timestamp, {
        locale,
        style: 'long',
      }),
      medium: dateTimeFormat.absolute.formatTime(timestamp, {
        locale,
        style: 'medium',
      }),
      short: dateTimeFormat.absolute.formatTime(timestamp, {
        locale,
        style: 'short',
      }),
    };
  }

  return {
    default: dateTimeFormat.absolute.format(timestamp, { locale }),
    full: dateTimeFormat.absolute.format(timestamp, {
      locale,
      style: 'full',
    }),
    long: dateTimeFormat.absolute.format(timestamp, {
      locale,
      style: 'long',
    }),
    medium: dateTimeFormat.absolute.format(timestamp, {
      locale,
      style: 'medium',
    }),
    short: dateTimeFormat.absolute.format(timestamp, {
      locale,
      style: 'short',
    }),
  };
};

const DateTimeFormatDemo = () => {
  const initialDate = new Date();

  const [dateValue, setDateValue] = useState(formatDateInputValue(initialDate));
  const [timeValue, setTimeValue] = useState(formatTimeInputValue(initialDate));
  const [locale, setLocale] = useState(localeOptions[0]);
  const [selectedFormat, setSelectedFormat] = useState(formatOptions[0]);

  const timestamp = useMemo(() => {
    return parseDateTime(dateValue, timeValue);
  }, [dateValue, timeValue]);

  const outputValues = useMemo(() => {
    return getOutputValues(timestamp, locale.value, selectedFormat.value);
  }, [timestamp, locale, selectedFormat]);

  return (
    <div className="date-time-format-story">
      <div className="date-time-format-story__panel">
        <div className="date-time-format-story__controls">
          <DatePicker
            datePickerType="single"
            value={dateValue}
            onChange={(selectedDates) => {
              if (selectedDates?.[0]) {
                setDateValue(formatDateInputValue(selectedDates[0]));
              }
            }}
          >
            <DatePickerInput
              id="date-time-format-date"
              labelText="Date"
              placeholder="mm/dd/yyyy"
            />
          </DatePicker>
          <TextInput
            id="date-time-format-time"
            labelText="Time"
            value={timeValue}
            onChange={(event) => setTimeValue(event.target.value)}
          />
          <Dropdown
            id="date-time-format-locale"
            titleText="Locale"
            items={localeOptions}
            itemToString={(item) => item?.label ?? ''}
            selectedItem={locale}
            onChange={({ selectedItem }) => {
              if (selectedItem) {
                setLocale(selectedItem);
              }
            }}
          />
          <Dropdown
            id="date-time-format-format"
            titleText="Format"
            items={formatOptions}
            itemToString={(item) => item?.label ?? ''}
            selectedItem={selectedFormat}
            onChange={({ selectedItem }) => {
              if (selectedItem) {
                setSelectedFormat(selectedItem);
              }
            }}
          />
        </div>

        <div>
          <p className="date-time-format-story__output-label">Output</p>
          <div className="date-time-format-story__output-panel">
            {outputStyles.map((styleName) => (
              <div
                key={styleName}
                className="date-time-format-story__output-group"
              >
                <div className="date-time-format-story__output-name">
                  {styleName}
                </div>
                <div className="date-time-format-story__output-value">
                  {outputValues[styleName]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Utilities/Date Time Format',
  component: DateTimeFormatDemo,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
    layout: 'fullscreen',
  },
};

export const DateTimeFormat = () => {
  return <DateTimeFormatDemo />;
};

DateTimeFormat.storyName = 'Date Time Format';
