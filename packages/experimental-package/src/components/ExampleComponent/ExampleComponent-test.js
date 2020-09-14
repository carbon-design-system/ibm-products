import React from 'react';
import { shallow } from 'enzyme';
import { ExampleComponent } from './ExampleComponent';

describe('ExampleComponent', () => {
  it('renders', () => {
    shallow(<ExampleComponent />);
  });
});
