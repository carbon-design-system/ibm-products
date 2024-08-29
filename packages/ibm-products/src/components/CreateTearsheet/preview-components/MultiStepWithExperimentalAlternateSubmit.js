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

export const MultiStepWithExperimentalAlternateSubmit = ({
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
  experimentalAlternateSubmitText,
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
        experimentalAlternateSubmitText={experimentalAlternateSubmitText}
      >
        <CreateTearsheetStep
          title="Experimental alternate submit button"
          includeStep
        >
          This step will show the configuration options for customizing the
          behavior of the experimental alternate submit button
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Disabled experimentalAlternateSubmit button"
          includeStep
          experimentalAlternateSubmit={{ disabled: true }}
        >
          This step will show the disabled experimentalAlternateSubmit button
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Change experimentalAlternateSubmit button name"
          includeStep
          experimentalAlternateSubmit={{
            labelText: 'Skip all steps',
            onClick: clearCreateData,
          }}
        >
          This step will show you how to rename a experimentalAlternateSubmit
          button
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="Hide experimentalAlternateSubmit button"
          includeStep
          experimentalAlternateSubmit={{ hideAltSubmit: true }}
        >
          This step will be used to hide the experimentalAlternateSubmit button
        </CreateTearsheetStep>
        <CreateTearsheetStep
          title="OnClick experimentalAlternateSubmit button"
          includeStep
          experimentalAlternateSubmit={{
            onClick: () => console.log('button clicked!'),
          }}
        >
          This step will show onClick work on experimentalAlternateSubmit button
        </CreateTearsheetStep>
      </CreateTearsheet>
    </div>
  );
};
