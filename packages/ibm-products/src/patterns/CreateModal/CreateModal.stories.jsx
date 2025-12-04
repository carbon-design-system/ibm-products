/**
 * Copyright IBM Corp. 2025, 2025
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

export const Standard = StandardTemplate.bind({});
Standard.args = {};
