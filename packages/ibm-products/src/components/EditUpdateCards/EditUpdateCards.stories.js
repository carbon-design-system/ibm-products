/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { EditUpdateCards } from '.';
import mdx from './EditUpdateCards.mdx';

import styles from './_storybook-styles.scss';
import {
  Column,
  Form,
  FormLabel,
  Grid,
  Row,
  Select,
  SelectItem,
  TextArea,
  TextInput,
} from 'carbon-components-react';
import {
  Edit16,
  Save16,
  Close16,
  ProgressBarRound16,
  CheckmarkFilled16,
} from '@carbon/icons-react';
import { pkg /*, carbon */ } from '../../settings';

export default {
  title: getStoryTitle(EditUpdateCards.displayName),
  component: EditUpdateCards,
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultStoryProps = {
  title: 'Edit and update',
};

/**
 * TODO: Declare template(s) for one or more scenarios.
 */
const Template = (args) => {
  const [bodyCopy, setBodyCopy] = useState(
    'Editable card body content block. description inviting the user to take action on the card.'
  );
  const [name, setName] = useState('austin-server-123ABC');
  const speedOptions = [
    { value: '0', text: 'Choose speed' },
    { value: '100', text: '100MBps' },
    { value: '120', text: '120MBps' },
    { value: '150', text: '150MBps' },
    { value: '200', text: '200MBps' },
  ];
  const [speedValue, setSpeedValue] = useState('120');
  const options = speedOptions.map((option) => {
    return (
      <SelectItem
        key={option.value}
        value={option.value}
        text={option.text}
        selected={option.value === speedValue}
      />
    );
  });
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSave = (event) => {
    event.preventDefault();
    event.persist();
    setLoading(true);

    setTimeout(() => {
      setBodyCopy(event.target.bodyCopy.value);
      setName(event.target.name.value);
      setSpeedValue(event.target.speed.value);
      setEditMode(false);
      setLoading(false);
    }, 1000);
  };

  const actionIcons = [
    {
      id: '1',
      icon: Edit16,
      onClick: () => {
        setEditMode(true);
      },
      iconDescription: 'Edit',
    },
  ];

  const actionIconsEditMode = [
    {
      id: '2',
      icon: Close16,
      onClick: () => {
        setEditMode(false);
      },
      iconDescription: 'Cancel',
    },
    {
      id: '3',
      icon: Save16,
      iconDescription: 'Save',
      type: 'submit',
      form: 'editForm',
    },
  ];

  const actionIconsLoading = [
    {
      id: '4',
      icon: ProgressBarRound16,
      iconDescription: 'Loading',
      disabled: true,
      className: pkg.prefix + '--loading',
    },
  ];

  const preview = (
    <div>
      <Row>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Name</FormLabel>
          <p>{name}</p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Link status</FormLabel>
          <p className={pkg.prefix + `--edit-update-cards--icon-text`}>
            <CheckmarkFilled16 />
            Running
          </p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Routing</FormLabel>
          <p>Local</p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>BGP status</FormLabel>
          <p className={pkg.prefix + `--edit-update-cards--icon-text`}>
            <CheckmarkFilled16 />
            Running
          </p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Location</FormLabel>
          <p className={pkg.prefix + `--edit-update-cards--icon-text`}>
            NA-West
          </p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Speed</FormLabel>
          <p className={pkg.prefix + `--edit-update-cards--icon-text`}>
            {speedValue}MBps
          </p>
        </Column>
        <Column lg={16} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Other details</FormLabel>
          <p>{bodyCopy}</p>
        </Column>
      </Row>
    </div>
  );

  const edit = (
    <Form onSubmit={onSave} id="editForm">
      <Row>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <TextInput name="name" labelText="Name" defaultValue={name} />
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Link status</FormLabel>
          <p className={pkg.prefix + `--edit-update-cards--icon-text`}>
            <CheckmarkFilled16 />
            Running
          </p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Routing</FormLabel>
          <p>Local</p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>BGP status</FormLabel>
          <p className={pkg.prefix + `--edit-update-cards--icon-text`}>
            <CheckmarkFilled16 />
            Running
          </p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <FormLabel>Location</FormLabel>
          <p className={pkg.prefix + `--edit-update-cards--icon-text`}>
            NA-West
          </p>
        </Column>
        <Column lg={8} className={pkg.prefix + `--edit-update-cards--items`}>
          <Select labelText="Speed" name="speed">
            {options}
          </Select>
        </Column>
        <Column lg={16} className={pkg.prefix + `--edit-update-cards--items`}>
          <TextArea
            name="bodyCopy"
            labelText="Other details"
            rows={2}
            defaultValue={bodyCopy}
          />
        </Column>
      </Row>
    </Form>
  );

  return (
    <Grid>
      <Row>
        <Column lg={7}>
          <EditUpdateCards
            // TODO: handle events with action or local handler.
            // onTodo={action('onTodo log action')}
            actionIcons={
              editMode && !loading
                ? actionIconsEditMode
                : editMode && loading
                ? actionIconsLoading
                : actionIcons
            }
            previewChildren={preview}
            editChildren={edit}
            editMode={editMode}
            {...args}
            id={`${
              editMode ? pkg.prefix + '--edit-update-cards--edit' : ''
            }`} /*Used id for overriding the SVG(icon) path fill*/
          />
        </Column>
      </Row>
    </Grid>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
export const EditAndUpdateCards = prepareStory(Template, {
  args: {
    // TODO: Component args - https://storybook.js.org/docs/react/writing-stories/args#EditUpdateCards-args
    ...defaultStoryProps,
  },
});
