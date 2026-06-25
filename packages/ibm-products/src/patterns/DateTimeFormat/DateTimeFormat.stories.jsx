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
  Select,
  SelectItem,
  TextInput,
} from '@carbon/react';
import { dateTimeFormat } from '@carbon/utilities';
import DocsPage from './DateTimeFormat.mdx';

const localeOptions = [
  {
    text: 'en-US / English (United States)',
    value: 'en-US',
  },
  {
    text: 'en-GB / English (United Kingdom)',
    value: 'en-GB',
  },
  {
    text: 'de-DE / German (Germany)',
    value: 'de-DE',
  },
  {
    text: 'fr-FR / French (France)',
    value: 'fr-FR',
  },
];

const formatOptions = [
  {
    text: 'Absolute date and time',
    value: 'absolute',
  },
  {
    text: 'Absolute date',
    value: 'date',
  },
  {
    text: 'Absolute time',
    value: 'time',
  },
  {
    text: 'Relative time',
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
  const [locale, setLocale] = useState(localeOptions[0].value);
  const [selectedFormat, setSelectedFormat] = useState(formatOptions[0].value);

  const timestamp = useMemo(() => {
    return parseDateTime(dateValue, timeValue);
  }, [dateValue, timeValue]);

  const outputValues = useMemo(() => {
    return getOutputValues(timestamp, locale, selectedFormat);
  }, [timestamp, locale, selectedFormat]);

  return (
    <div
      style={{
        background: '#f4f4f4',
        padding: '2rem',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          padding: '1rem',
          maxWidth: '960px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 16rem))',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
        >
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
          <Select
            id="date-time-format-locale"
            labelText="Locale"
            value={locale}
            onChange={(event) => setLocale(event.target.value)}
          >
            {localeOptions.map((option) => (
              <SelectItem
                key={option.value}
                text={option.text}
                value={option.value}
              />
            ))}
          </Select>
          <Select
            id="date-time-format-format"
            labelText="Format"
            value={selectedFormat}
            onChange={(event) => setSelectedFormat(event.target.value)}
          >
            {formatOptions.map((option) => (
              <SelectItem
                key={option.value}
                text={option.text}
                value={option.value}
              />
            ))}
          </Select>
        </div>

        <div>
          <p
            style={{
              margin: '0 0 0.75rem',
              fontSize: '0.875rem',
            }}
          >
            Output
          </p>
          <div
            style={{
              background: '#f4f4f4',
              padding: '1rem',
            }}
          >
            {outputStyles.map((styleName) => (
              <div
                key={styleName}
                style={{
                  marginBottom: styleName === 'short' ? 0 : '1.5rem',
                }}
              >
                <div
                  style={{
                    color: '#525252',
                    fontSize: '0.875rem',
                    marginBottom: '0.25rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {styleName}
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    lineHeight: 1.4,
                  }}
                >
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

// Made with Bob
