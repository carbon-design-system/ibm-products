import React from 'react';
import { pkgPrefix } from './settings';
import { shallow } from 'enzyme';

describe('settings', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('uses the default css prefix', () => {
    expect(pkgPrefix).toEqual('exp');
  });

  it('can use custom prefix with a react component', async () => {
    jest.mock('./settings', () => ({
      pkgPrefix: 'my-prefix',
    }));
    // dynamic import so we can modify the import on the component before using it
    const { ExampleComponent } = await import(
      '../../components/ExampleComponent'
    );
    const wrapper = shallow(<ExampleComponent />);
    expect(wrapper.find('.my-prefix-example-component')).toHaveLength(1);
  });
});
