//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IdeCreateStep from './ide-create-step';

configure({ adapter: new Adapter() });

it('should render correct contents', () => {
  const wrapper = shallow(<IdeCreateStep />);
  expect(wrapper.find('.ide-create-step')).toHaveLength(1);
  wrapper.unmount();
});

it('should render children', () => {
  const wrapper = shallow(
    <IdeCreateStep>
      <div className="mockChild" />
    </IdeCreateStep>
  );
  expect(wrapper.find('.mockChild')).toHaveLength(1);
  wrapper.unmount();
});
