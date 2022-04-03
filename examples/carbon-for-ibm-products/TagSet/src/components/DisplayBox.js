import React, { useState, useRef } from 'react';

import './_display-box.scss';

// eslint-disable-next-line react/prop-types
export const DisplayBox = ({ children, componentName }) => {
  const sliderMin = 0;
  const sliderMax = 100;
  const displayBox = useRef(null);
  const [sliderValue, setSliderValue] = useState((sliderMin + sliderMax) / 2);

  const handleSliderChange = (ev) => {
    displayBox.current.style.setProperty(
      '--content-width',
      `${ev.target.value}%`
    );
    setSliderValue(ev.target.value);
  };

  return (
    <div className="display-box" ref={displayBox}>
      <div className="display-box__header">
        <label id="display-box-label" className="display-box__label">
          Adjust display box width
          <input
            type="range"
            min={sliderMin}
            max={sliderMax}
            value={sliderValue}
            id="display-box__slider"
            className="display-box__slider"
            onInput={handleSliderChange}
          />
        </label>
        <p className="display-box__details">
          The dotted box is not part of `{componentName}`. It shows the edge of
          the containing element.
        </p>
        <div className="display-box__content">{children}</div>
      </div>
    </div>
  );
};
