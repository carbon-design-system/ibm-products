/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';

import { TimePicker, TimePickerSelect, SelectItem } from '@carbon/react';
import PropTypes from 'prop-types';
import { PropertyConfigTime } from '../../ConditionBuilder.types';
import { blockClass } from '../../utils/util';

interface ConditionBuilderItemTime {
  onChange: (value: string | undefined) => void;
  config: PropertyConfigTime['config'];
}
export const ConditionBuilderItemTime = ({
  onChange,
  config,
}: ConditionBuilderItemTime) => {
  const [timeValue, setTimeValue] = useState('');
  const [dayZoneValue, setDayZoneValue] = useState('AM');
  const [timeZoneValue, setTimeZoneValue] = useState(config?.timeZones?.[0]);

  useEffect(() => {
    const timeToUpdate = `${timeValue ?? ''} ${dayZoneValue ?? ''} ${
      timeZoneValue ?? ''
    }`;
    onChange(timeValue ? timeToUpdate : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeValue, dayZoneValue, timeZoneValue]);

  const setTimeZone = (evt) => {
    setTimeZoneValue(evt.target.value);
  };
  const setDayZone = (evt) => {
    setDayZoneValue(evt.target.value);
  };
  const setTime = (evt) => {
    setTimeValue(evt.target.value);
  };
  return (
    <div className={`${blockClass}__item-time`}>
      <TimePicker id="time-picker" labelText="Select a time" onChange={setTime}>
        <TimePickerSelect id="time-picker-day-zone" onChange={setDayZone}>
          <SelectItem value="AM" text="AM" />
          <SelectItem value="PM" text="PM" />
        </TimePickerSelect>
        <TimePickerSelect id="time-picker-time-zone" onChange={setTimeZone}>
          {config?.timeZones?.map((timeZone, index) => (
            <SelectItem key={index} value={timeZone} text={timeZone} />
          ))}
        </TimePickerSelect>
      </TimePicker>
    </div>
  );
};

ConditionBuilderItemTime.propTypes = {
  /**
   * current config object that this property is part of
   */
  config: PropTypes.object,
  /**
   * callback to update state oin date change
   */
  onChange: PropTypes.func,
};
