/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button } from '@carbon/react';
import cx from 'classnames';
import { pkg } from '../../../settings';
import { CreateTearsheet } from '../CreateTearsheet';
import { CreateTearsheetStep } from '../CreateTearsheetStep';
import { SlugSample } from '../../../global/js/story-parts/slug';

const blockClass = `${pkg.prefix}--tearsheet-create-multi-step`;

export const MultiStepWithCustomButton = ({
  backButtonText,
  cancelButtonText,
  className,
  description,
  influencerWidth,
  label,
  nextButtonText,
  slug,
  submitButtonText,
  title,
  customButtonText,
}) => {
  const [simulatedDelay] = useState(750);
  const [open, setOpen] = useState(false);

  const clearCreateData = () => {
    setOpen(false);
  };

  return (
    <div>
      <style>{`.${blockClass} { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close CreateTearsheet' : 'Open CreateTearsheet'}
      </Button>
      <CreateTearsheet
        influencerWidth={influencerWidth}
        label={label}
        className={cx(blockClass, className)}
        submitButtonText={submitButtonText}
        cancelButtonText={cancelButtonText}
        backButtonText={backButtonText}
        nextButtonText={nextButtonText}
        description={description}
        title={title}
        open={open}
        onClose={clearCreateData}
        onRequestSubmit={() =>
          new Promise((resolve) => {
            setTimeout(() => {
              clearCreateData();
              resolve();
            }, simulatedDelay);
          })
        }
        slug={slug && SlugSample()}
        customButtonText={customButtonText}
      >
        <CreateTearsheetStep title="Custom button" includeStep>
          This step will show the custom button
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Disabled custom button"
          includeStep
          isCustomButtonDisabled
        >
          This step will show the disabled custom button
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Change custom button name"
          includeStep
          customButtonChangeText="Skip step"
        >
          This step will show you how to rename a custom button
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Hide custom button"
          includeStep
          isCustomButtonHide
        >
          This step will be used to hide the custom button
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="OnClick custom button"
          includeStep
          onCustomButtonClick={() => console.log('custom button clicked!')}
        >
          This step will show onClick work on custom button
        </CreateTearsheetStep>
      </CreateTearsheet>
    </div>
  );
};
