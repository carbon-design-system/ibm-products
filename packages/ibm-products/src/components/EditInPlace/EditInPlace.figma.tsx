/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { EditInPlace } from './EditInPlace';
import figma from '@figma/code-connect';

figma.connect(
  EditInPlace,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15713-9770&t=A1DwBD80AwWFp5NR-0',
  {
    props: {
      cancelLabel: figma.string('Cancel label'),
      editLabel: figma.string('Edit label'),
      invalid: figma.boolean('Invalid'),
      invalidText: figma.string('Invalid text'),
      labelText: figma.string('Label text'),
      placeholder: figma.string('Placeholder'),
      saveLabel: figma.string('Save label'),
      size: figma.enum('Size', {
        small: 'sm',
        large: 'lg',
        medium: 'md',
      }),
      value: figma.string('Value'),
    },
    example: (props) => (
      <EditInPlace
        cancelLabel={props.cancelLabel}
        editLabel={props.editLabel}
        invalid={props.invalid}
        invalidText={props.invalidText}
        labelText={props.labelText}
        placeholder={props.placeholder}
        saveLabel={props.saveLabel}
        size={props.size}
        value={props.value}
      />
    ),
  }
);
