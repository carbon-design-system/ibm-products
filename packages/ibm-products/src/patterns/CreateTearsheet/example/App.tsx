/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button } from '@carbon/react';
import { MultiStepTearsheet } from './preview-components/MultiStepTearsheet';
import { MultiStepWithIntro } from './preview-components/MultiStepWithIntro';
import { MultiStepWithStepInErrorState } from './preview-components/MultiStepWithStepInErrorState';
import './styles/_create-tearsheet.scss';

export const App = () => {
  const [openMultiStep, setOpenMultiStep] = useState(false);
  const [openWithIntro, setOpenWithIntro] = useState(false);
  const [openWithError, setOpenWithError] = useState(false);

  const createTearsheetProps = {
    title: 'Create topic',
    description: 'Specify details for the new topic you want to create',
    submitButtonText: 'Create',
    cancelButtonText: 'Cancel',
    backButtonText: 'Back',
    nextButtonText: 'Next',
    className: 'test-class-name',
    label: '',
    influencerWidth: undefined,
    slug: undefined,
    decorator: undefined,
  };

  return (
    <div className="app-container" style={{ padding: '2rem' }}>
      <h1>CreateTearsheet Pattern Examples</h1>
      <p style={{ marginBottom: '2rem' }}>
        This example demonstrates the CreateTearsheet pattern using the new
        Tearsheet architecture with StepFlow.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
          maxWidth: '400px',
        }}
      >
        <Button onClick={() => setOpenMultiStep(!openMultiStep)}>
          {openMultiStep ? 'Close' : 'Open'} Multi-step Tearsheet
        </Button>

        <Button onClick={() => setOpenWithIntro(!openWithIntro)}>
          {openWithIntro ? 'Close' : 'Open'} Tearsheet with Intro Step
        </Button>

        <Button onClick={() => setOpenWithError(!openWithError)}>
          {openWithError ? 'Close' : 'Open'} Tearsheet with Error State
        </Button>
      </div>

      <MultiStepTearsheet
        {...createTearsheetProps}
        open={openMultiStep}
        setOpen={setOpenMultiStep}
      />

      <MultiStepWithIntro
        {...createTearsheetProps}
        open={openWithIntro}
        setOpen={setOpenWithIntro}
      />

      <MultiStepWithStepInErrorState
        {...createTearsheetProps}
        open={openWithError}
        setOpen={setOpenWithError}
      />
    </div>
  );
};

export default App;
