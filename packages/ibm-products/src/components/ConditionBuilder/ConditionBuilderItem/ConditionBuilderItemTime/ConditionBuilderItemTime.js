import React, { useEffect, useState } from 'react';

import { TimePicker, TimePickerSelect, SelectItem } from '@carbon/react';
import PropTypes from 'prop-types';
import { blockClass } from '../../ConditionBuilderContext/DataConfigs';

export const ConditionBuilderItemTime = ({ onChange, config }) => {
  const [timeValue, setTimeValue] = useState('');
  const [dayZoneValue, setDayZoneValue] = useState('AM');
  const [timeZoneValue, setTimeZoneValue] = useState(config?.timeZones?.[0]);

  useEffect(() => {
    let timeToUpdate = `${timeValue ?? ''} ${dayZoneValue ?? ''} ${
      timeZoneValue ?? ''
    }`;
    onChange(timeValue ? timeToUpdate : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeValue, dayZoneValue, timeZoneValue]);

  const setTimeZone = (e) => {
    setTimeZoneValue(e.target.value);
  };
  const setDayZone = (e) => {
    setDayZoneValue(e.target.value);
  };
  const setTime = (e) => {
    setTimeValue(e.target.value);
  };
  return (
    <div className={`${blockClass}__condition-builder-item-time`}>
      <TimePicker id="time-picker" labelText="Select a time" onChange={setTime}>
        <TimePickerSelect id="time-picker-day-zone" onChange={setDayZone}>
          <SelectItem value="AM" text="AM" />
          <SelectItem value="PM" text="PM" />
        </TimePickerSelect>
        <TimePickerSelect id="time-picker-select-2" onChange={setTimeZone}>
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
