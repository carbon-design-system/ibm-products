//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import { Button, TextInput, TextArea } from 'carbon-components-react';
import { ArrowRight16 } from '@carbon/icons-react';
import { IdeSlideOverPanel } from '.';
import styles from './_storybook.scss';

const mockContent = (
  <>
    <TextInput
      labelText="Asset name"
      value="Openapi.json"
      id="text-id"
    ></TextInput>
    <TextArea
      id="textarea-id"
      labelText="Description"
      placeholder="There is no description for this asset"
    ></TextArea>
  </>
);

storiesOf(getComponentLabel('IdeSlideOverPanel'), module)
  .addDecorator(withKnobs)
  .addParameters({ styles, layout: 'fullscreen' })
  .add(
    'small',
    () => (
      <div>
        <IdeSlideOverPanel
          size="small"
          title="Small panel title"
          open={boolean('Panel open?', true)}
        >
          foo
        </IdeSlideOverPanel>
      </div>
    ),
    {
      info: {
        text: 'Shows a small panel.',
      },
    }
  )
  .add(
    'medium',
    () => (
      <div>
        <IdeSlideOverPanel
          size="medium"
          title="Medium panel title"
          open={boolean('Panel open?', true)}
        >
          foo
        </IdeSlideOverPanel>
      </div>
    ),
    {
      info: {
        text: 'Shows a medium panel.',
      },
    }
  )
  .add(
    'large',
    () => {
      let isOpen = boolean('Panel open?', true);
      return (
        <div>
          <IdeSlideOverPanel
            size="large"
            title="Large panel title"
            open={isOpen}
            onClose={() => (isOpen = false)}
          >
            foo
          </IdeSlideOverPanel>
        </div>
      );
    },
    {
      info: {
        text: 'Shows a large panel.',
      },
    }
  );

storiesOf(getComponentLabel('IdeSlideOverPanel'), module)
  .addDecorator(withKnobs)
  .add(
    'with an overlay',
    () => (
      <div>
        <IdeSlideOverPanel
          size="medium"
          title="Medium panel title"
          withOverlay={boolean('with overlay?', true)}
          open={boolean('Panel open?', true)}
        >
          foo
        </IdeSlideOverPanel>
      </div>
    ),
    {
      info: {
        text: 'Shows a medium panel.',
      },
    }
  );

const DummyMultiPageSlideComponent = () => {
  const [page, setPage] = useState(1);
  const onPrimaryButton = () => {
    setPage(2);
  };
  const onBackButton = () => {
    setPage(1);
  };
  const pagedMockContent = page === 1 ? mockContent : null;
  return (
    <IdeSlideOverPanel
      title="Edit Asset metadata"
      size="medium"
      open
      primaryButtonText="Next"
      primaryButtonIcon={ArrowRight16}
      secondaryButtonText="Back"
      controls
      onPrimaryClick={onPrimaryButton}
      onSecondaryClick={onBackButton}
    >
      {pagedMockContent}
    </IdeSlideOverPanel>
  );
};

storiesOf(getComponentLabel('IdeSlideOverPanel'), module)
  .add('with controls', () => (
    <IdeSlideOverPanel size="medium" controls title="Edit Asset metadata" open>
      {mockContent}
    </IdeSlideOverPanel>
  ))
  .add('with controls - danger', () => (
    <IdeSlideOverPanel
      size="large"
      controls
      danger
      title="Edit Asset metadata"
      open
    >
      {mockContent}
    </IdeSlideOverPanel>
  ))
  .add('with controls - icon buttons switching content', () => {
    return <DummyMultiPageSlideComponent />;
  });

const SlideOverStateManager = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Toggle Slideover
      </Button>

      <IdeSlideOverPanel
        {...props}
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        foo
      </IdeSlideOverPanel>
    </>
  );
};

storiesOf(getComponentLabel('IdeSlideOverPanel'), module)
  .addDecorator(withKnobs)
  .addParameters({ styles, layout: 'fullscreen' })
  .add(
    'With state manager',
    () => (
      <SlideOverStateManager
        size="medium"
        title="Medium panel title"
        withOverlay={boolean('with overlay?', true)}
      />
    ),
    {
      info: {
        text: 'Shows a medium panel.',
      },
    }
  );
