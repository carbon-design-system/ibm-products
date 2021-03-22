import React from 'react';
import { pkg } from '../settings';
import { shallow } from 'enzyme';

describe('settings', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('uses the default css prefix', () => {
    expect(pkg.prefix).toEqual('exp');
  });

  it('can use custom prefix with a react component', async () => {
    // jest.mock('./settings', () => ({
    //   pkg.prefix: 'my-prefix',
    // }));
    pkg.prefix = 'my-prefix';
    pkg._silenceWarnings(true);
    pkg.component.ExampleComponent = true;

    // dynamic import so we can modify the import on the component before using it
    const { ExampleComponent } = await import('../components/ExampleComponent');
    const wrapper = shallow(<ExampleComponent />);

    expect(wrapper.find('.my-prefix--example-component')).toHaveLength(1);
  });
});
