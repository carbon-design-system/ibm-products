//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { Add16 } from '@carbon/icons-react';
import { IdeButton } from '../IdeButton';
import { shallow, mount } from 'enzyme';

describe('IdeButton', () => {
  describe('Renders common props as expected', () => {
    const wrapper = shallow(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <IdeButton tabIndex={2} className="extra-class">
        <div className="child">child</div>
        <div className="child">child</div>
      </IdeButton>
    );

    const wrapperHref = shallow(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <IdeButton tabIndex={2} className="extra-class" href="/home">
        <div className="child">child</div>
        <div className="child">child</div>
      </IdeButton>
    );

    it('Renders children as expected', () => {
      expect(wrapper.dive().find('.child').length).toBe(2);
      expect(wrapperHref.find('.child').length).toBe(2);
    });

    it('Should set tabIndex if one is passed via props', () => {
      expect(wrapper.dive().props().tabIndex).toEqual(2);
      expect(wrapperHref.props().tabIndex).toEqual(2);
    });

    it('Should add extra classes via className', () => {
      expect(wrapper.dive().hasClass('extra-class')).toBe(true);
      expect(wrapperHref.hasClass('extra-class')).toBe(true);
    });
  });

  describe('Renders <button> props as expected', () => {
    const wrapper = shallow(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <IdeButton tabIndex={2}>
        <div className="child">child</div>
        <div className="child">child</div>
      </IdeButton>
    );

    it('Renders as a <button>', () => {
      expect(wrapper.is('Button')).toBe(true);
      expect(wrapper.dive().is('button')).toBe(true);
    });

    it('Should set disabled to false by default', () => {
      expect(wrapper.dive().props().disabled).toBe(false);
    });

    it('Should set disabled if one is passed via props', () => {
      wrapper.setProps({ disabled: true });
      expect(wrapper.dive().props().disabled).toBe(true);
    });

    it('Should set type to button by default', () => {
      expect(wrapper.dive().props().type).toEqual('button');
    });

    it('Should only set type to [button, reset or submit] if one is passed via props', () => {
      wrapper.setProps({ type: 'reset' });
      expect(wrapper.dive().props().type).toEqual('reset');
      wrapper.setProps({ type: 'submit' });
      expect(wrapper.dive().props().type).toEqual('submit');
    });
  });

  describe('Renders <a> props as expected', () => {
    const wrapper = shallow(
      // eslint-disable-next-line jsx-a11y/tabindex-no-positive
      <IdeButton href="#" tabIndex={2}>
        <div className="child">child</div>
        <div className="child">child</div>
      </IdeButton>
    );

    it('Renders as an <a> element with an href', () => {
      expect(wrapper.is('Button')).toBe(true);
      expect(wrapper.dive().is('a')).toBe(true);
    });
  });

  describe('Renders icon buttons', () => {
    const iconButton = mount(
      <IdeButton renderIcon={Add16} iconDescription="Search">
        Search
      </IdeButton>
    );
    const icon = iconButton.find('svg');

    it('should have the appropriate icon', () => {
      expect(icon.hasClass('bx--btn__icon')).toBe(true);
    });
  });

  describe('Renders custom icon buttons', () => {
    const iconButton = mount(
      <IdeButton renderIcon={Add16} iconDescription="Search">
        Search
      </IdeButton>
    ).childAt(0); // move past ForwardRef

    const originalIcon = mount(<Add16 />).find('svg');
    const icon = iconButton.find('svg');

    it('should have the appropriate icon', () => {
      expect(icon.hasClass('bx--btn__icon')).toBe(true);
      expect(icon.find(':not(svg):not(title)').html()).toBe(
        originalIcon.children().html()
      );
    });
  });

  describe('Animates icons', () => {
    const iconButton = shallow(
      <IdeButton renderIcon={Add16} iconDescription="Search">
        Search
      </IdeButton>
    );

    it('Should add an appropriate class to trigger animation', () => {
      iconButton.setProps({ iconAnimation: 'rotate-180-anti' });
      expect(iconButton.dive().hasClass('ide-btn--rotate-180-anti')).toBe(true);
    });
  });
});

describe('Primary Button', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<IdeButton className="extra-class" />);

    it('Has the expected classes', () => {
      expect(wrapper.dive().hasClass('bx--btn')).toEqual(true);
    });

    it('Should add extra classes that are passed via className', () => {
      expect(wrapper.dive().hasClass('extra-class')).toEqual(true);
    });
  });
});

describe('Secondary Button', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <IdeButton kind="secondary" className="extra-class" />
    );

    it('Has the expected classes', () => {
      expect(wrapper.dive().hasClass('bx--btn--secondary')).toEqual(true);
    });

    it('Should add extra classes that are passed via className', () => {
      expect(wrapper.dive().hasClass('extra-class')).toEqual(true);
    });
  });
});

describe('Ghost Button', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(<IdeButton kind="ghost" className="extra-class" />);

    it('Has the expected classes', () => {
      expect(wrapper.dive().hasClass('bx--btn--ghost')).toEqual(true);
    });

    it('Should add extra classes that are passed via className', () => {
      expect(wrapper.dive().hasClass('extra-class')).toEqual(true);
    });
  });
});

describe('Small Button', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <IdeButton size={'small'} className="extra-class" />
    );

    it('Has the expected classes for small', () => {
      expect(wrapper.dive().hasClass('bx--btn--sm')).toEqual(true);
    });

    it('Should add extra classes that are passed via className', () => {
      expect(wrapper.dive().hasClass('extra-class')).toEqual(true);
    });
  });
});

describe('DangerButton', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <IdeButton kind="danger" className="extra-class" />
    );

    it('Has the expected classes', () => {
      expect(wrapper.dive().hasClass('bx--btn--danger')).toEqual(true);
    });

    it('Should add extra classes that are passed via className', () => {
      expect(wrapper.dive().hasClass('extra-class')).toEqual(true);
    });
  });
});

describe('danger--primaryButton', () => {
  describe('Renders as exptected', () => {
    const wrapper = shallow(
      <IdeButton kind="danger--primary" className="extra-class" />
    );

    it('Has the expected classes', () => {
      expect(wrapper.dive().hasClass('bx--btn--danger--primary')).toEqual(true);
    });

    it('Should add extra classes that are passed via className', () => {
      expect(wrapper.dive().hasClass('extra-class')).toEqual(true);
    });
  });
});

describe('TertiaryButton', () => {
  describe('Renders as exptected', () => {
    const wrapper = shallow(
      <IdeButton kind="tertiary" className="extra-class" />
    );

    it('Has the expected classes', () => {
      expect(wrapper.dive().hasClass('bx--btn--tertiary')).toEqual(true);
    });

    it('Should add extra classes that are passed via className', () => {
      expect(wrapper.dive().hasClass('extra-class')).toEqual(true);
    });
  });
});
