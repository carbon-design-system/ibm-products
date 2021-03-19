import React from 'react';
import { pkg } from '../settings';
import { shallow } from 'enzyme';

describe('settings', () => {
  it('uses the default css prefix', () => {
    expect(pkg.prefix).toEqual('exp');
  });

  it('can use custom prefix with a react component', async () => {
    pkg.prefix = 'my-prefix';
    pkg._silenceWarnings = true;
    pkg.component.ExampleComponent = true;

    // dynamic import so we can modify the import on the component before using it
    const { ExampleComponent } = await import('../components/ExampleComponent');
    const wrapper = shallow(
      <ExampleComponent
        primaryButtonLabel="primary"
        secondaryButtonLabel="secondary"
      />
    );

    expect(wrapper.find('.my-prefix--example-component')).toHaveLength(1);
  });
});
