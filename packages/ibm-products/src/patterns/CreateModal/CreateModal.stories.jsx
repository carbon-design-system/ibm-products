/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import mdx from './CreateModal.mdx';
import {
  Button,
  ComposedModal,
  Dropdown,
  Form,
  ModalBody,
  ModalFooter,
  ModalHeader,
  RadioButton,
  RadioButtonGroup,
  TextArea,
  TextInput,
} from '@carbon/react';

import styles from './_storybook-styles.scss?inline';

export default {
  title: 'Patterns/Step flows/Create Modal',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const StandardTemplate = () => {
  const [isOpen, setOpen] = useState(false);
  const blockClass = `create-modal`;

  const onCloseHandler = () => {
    setOpen(false);
  };

  const onSubmitHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <style>{`.${blockClass} { opacity: 0 }`}</style>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      {isOpen && (
        <ComposedModal
          open={isOpen}
          aria-label="Title"
          size="sm"
          className={blockClass}
          preventCloseOnClickOutside
          onClose={onCloseHandler}
          selectorPrimaryFocus="#text-input-1"
        >
          <ModalHeader
            title="Title"
            titleClassName={`${blockClass}__title`}
            closeModal={onCloseHandler}
          >
            <p className={`${blockClass}__subtitle`}>
              Your subtitle text will appear here
            </p>
          </ModalHeader>
          <ModalBody hasForm>
            <p className={`${blockClass}__description`}>
              This is example description text that will appear here in your
              modal
            </p>
            <Form
              className={`${blockClass}__form`}
              aria-label="Title"
              onSubmit={(e) => e.preventDefault()}
            >
              <>
                <TextInput
                  id="text-input-1"
                  key="form-field-1"
                  labelText="Text input label"
                  helperText="Helper text goes here"
                  placeholder="Placeholder"
                />
                <Dropdown
                  id="dropdown-1"
                  titleText="Dropdown label"
                  helperText="This is some helper text"
                  label="Dropdown menu options"
                  items={['Option 0', 'Option 1', 'Option 2']}
                />
                <TextArea
                  id="text-area-1"
                  placeholder="Placeholder text"
                  labelText="Text area label"
                  helperText="Optional helper text"
                />
              </>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="button" kind="secondary" onClick={onCloseHandler}>
              Cancel
            </Button>
            <Button type="submit" kind="primary" onClick={onSubmitHandler}>
              Create
            </Button>
          </ModalFooter>
        </ComposedModal>
      )}
    </>
  );
};

const WithFormValidationTemplate = () => {
  const [isOpen, setOpen] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [invalid, setInvalid] = useState(false);
  const blockClass = `create-modal`;

  const onCloseHandler = () => {
    if (!invalid) {
      setOpen(false);
    }
  };

  const onSubmitHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <style>{`.${blockClass} { opacity: 0 }`}</style>
      <Button onClick={() => setOpen(true)}>
        Launch CreateModal with form validation
      </Button>
      {isOpen && (
        <ComposedModal
          open={isOpen}
          aria-label="Title"
          size="sm"
          className={blockClass}
          preventCloseOnClickOutside
          onClose={onCloseHandler}
          selectorPrimaryFocus="#text-input-1"
        >
          <ModalHeader
            title="Title"
            titleClassName={`${blockClass}__title`}
            closeModal={onCloseHandler}
          >
            <p className={`${blockClass}__subtitle`}>
              Your subtitle text will appear here
            </p>
          </ModalHeader>
          <ModalBody hasForm>
            <p className={`${blockClass}__description`}>
              This is example description text that will appear here in your
              modal
            </p>
            <Form
              className={`${blockClass}__form`}
              aria-label="Title"
              onSubmit={(e) => e.preventDefault()}
            >
              <TextInput
                id="1"
                key="form-field-1"
                labelText="Text input label"
                placeholder="Placeholder"
                onChange={(e) => {
                  setTextInput(e.target.value);
                  setInvalid(false);
                }}
                onBlur={() => {
                  textInput?.trim().length === 0 && setInvalid(true);
                }}
                invalid={invalid}
                invalidText="This is a required field"
              />
              <TextInput
                id="2"
                key="form-field-2"
                labelText="Text input label (optional)"
                placeholder="Placeholder"
              />
              <TextInput
                id="3"
                key="form-field-3"
                labelText="Text input label (optional)"
                placeholder="Placeholder"
              />
              <RadioButtonGroup
                legendText="Radio button legend text goes here"
                name="radio-button-group"
                defaultSelected="radio-1"
              >
                <RadioButton labelText="Radio-1" value="radio-1" id="radio-1" />
                <RadioButton labelText="Radio-2" value="radio-2" id="radio-2" />
                <RadioButton labelText="Radio-3" value="radio-3" id="radio-3" />
              </RadioButtonGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button type="button" kind="secondary" onClick={onCloseHandler}>
              Cancel
            </Button>
            <Button
              type="submit"
              kind="primary"
              onClick={onSubmitHandler}
              disabled={textInput.length === 0 ? true : false}
            >
              Create
            </Button>
          </ModalFooter>
        </ComposedModal>
      )}
    </>
  );
};

export const CreateModal = StandardTemplate.bind({});
CreateModal.args = {};

export const WithFormValidation = WithFormValidationTemplate.bind({});
WithFormValidation.args = {};
