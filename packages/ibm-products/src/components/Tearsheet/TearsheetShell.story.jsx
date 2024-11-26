/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './_storybook-styles.scss?inline';
import { TearsheetShell, deprecatedProps } from './TearsheetShell';
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';
import { Button, AILabel, AILabelContent, TextInput } from '@carbon/react';

// import mdx from './TearsheetShell.mdx';

export default {
  title: 'IBM Products/Internal/TearsheetShell',
  component: TearsheetShell,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    styles /* docs: { page: mdx } */,
  },
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    influencer: {
      control: {
        type: 'boolean',
      },
    },
    portalTarget: { control: { disable: true } },
    aiLabel: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI Label',
          1: 'with AI Label',
        },
        default: 0,
      },
      options: [0, 1],
    },
  },
};

const closeIconDescription = 'Close the tearsheet';

const className = 'client-class-1 client-class-2';

const dummyContent = (
  <div
    style={{
      padding: '50px',
      height: '400px',
    }}
  >
    {Array.from({ length: 10 }, (_, k) => ({ key: `Paragraph-${k}` })).map(
      ({ key }) => (
        <p key={key}>
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
      )
    )}
  </div>
);

const sampleAILabel = (
  <AILabel className="ai-label-container" size="xs">
    <AILabelContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h1>84%</h1>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
        <hr />
        <p className="secondary">Model type</p>
        <p className="bold">Foundation model</p>
      </div>
    </AILabelContent>
  </AILabel>
);

// Template.
const Template = ({ influencer, open: _open, aiLabel, ...args }, context) => {
  const ref = useRef(undefined);
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);

  return (
    <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {`${beenOpen ? 'Reopen' : 'Open'} the ${context.component.displayName}`}
      </Button>
      <TearsheetShell
        className={className}
        {...args}
        influencer={
          influencer && (
            <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>
          )
        }
        open={open}
        onClose={() => setOpen(false)}
        aiLabel={aiLabel && sampleAILabel}
        title={'Tearsheet title'}
      >
        {dummyContent}
      </TearsheetShell>
    </div>
  );
};

const ReturnFocusTemplate = (
  { influencer, open: _open, aiLabel, ...args },
  context
) => {
  const ref = useRef(undefined);
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);
  const buttonRef = useRef(undefined);

  return (
    <div ref={ref}>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        {`${beenOpen ? 'Reopen' : 'Open'} the ${context.component.displayName}`}
      </Button>{' '}
      <TearsheetShell
        className={className}
        {...args}
        influencer={
          influencer && (
            <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>
          )
        }
        open={open}
        onClose={() => setOpen(false)}
        aiLabel={aiLabel && sampleAILabel}
        title={'Tearsheet title'}
        launcherButtonRef={buttonRef}
      >
        {dummyContent}
      </TearsheetShell>
    </div>
  );
};

// Stories
export const AllAttributesSet = Template.bind({});
AllAttributesSet.args = {
  closeIconDescription,
  height: 'normal',
  // onClose: () => false,
  open: true,
  size: 'narrow',
};

export const NoAttributesSet = Template.bind({});
NoAttributesSet.args = {
  size: 'wide',
};

export const ReturnFocusToOpenButton = ReturnFocusTemplate.bind({});
ReturnFocusToOpenButton.args = {
  size: 'wide',
};

function FloatingMenu({ open, className, styleTransform }) {
  return (
    open &&
    createPortal(
      <div
        className={className}
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: styleTransform,
          border: 'solid 1px',
          zIndex: '9999',
          backgroundColor: 'white',
        }}
      >
        <TextInput
          type="text"
          style={{ margin: '1rem' }}
          labelText={`This is a floating DOM element with classname "${className}" added outside of the tearsheet DOM element`}
          placeholder="Focus and enter something"
        ></TextInput>
      </div>,
      document.body
    )
  );
}

export const FocusOnFloatingMenu = ({ open: _open, ...args }, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        {`Open the ${context.component.displayName}`}
      </Button>
      <TearsheetShell
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        hasCloseIcon
        className={className}
        size="wide"
        actions={[
          {
            kind: 'primary',
            label: 'Primary',
          },
        ]}
      >
        {dummyContent}
        <FloatingMenu
          open={open}
          className="floating-menu"
          styleTransform="translate(-50%)"
        />
        <FloatingMenu
          open={open}
          className="another-floating-menu"
          styleTransform="translate(-50%, 100%)"
        />
      </TearsheetShell>
    </>
  );
};
FocusOnFloatingMenu.args = {
  selectorsFloatingMenus: ['.floating-menu'],
  open: true,
};
