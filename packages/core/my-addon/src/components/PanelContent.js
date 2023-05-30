import React from 'react';
import { Form } from '@storybook/components';
import PropTypes from 'prop-types';

/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
export const PanelContent = ({ theme, onChange }) => {
  const themes = ['white', 'g10', 'g90', 'g100'];

  return (
    <div>
      Hi {theme}
      <Form>
        <Form.Field label="Select Carbon theme:">
          <Form.Select
            name="carbon-theme"
            value={theme}
            onChange={(ev) => {
              onChange && onChange(ev.target.value);
            }}
            size="flex"
          >
            {themes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </Form.Field>
      </Form>
    </div>
  );
};

PanelContent.propTypes = {
  onChange: PropTypes.func,
  theme: PropTypes.string,
};
