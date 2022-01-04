//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { IdeSlideOverPanel } from '../IdeSlideOverPanel';
import { shallow } from 'enzyme';
import { Close16 } from '@carbon/icons-react';

const requiredProps = { onClose: () => {} };

describe('IdeSlideOverPanel', () => {
  describe('Renders common props as expected', () => {
    const wrapper = shallow(
      <IdeSlideOverPanel {...requiredProps} className="extra-class">
        <div className="child">child</div>
        <div className="child">child</div>
      </IdeSlideOverPanel>
    );

    it('Renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(2);
    });

    it('Should add extra classes via className', () => {
      expect(wrapper.hasClass('extra-class')).toBe(true);
    });
  });

  describe('Renders the provided title', () => {
    const wrapper = shallow(
      <IdeSlideOverPanel {...requiredProps} title="Foo"></IdeSlideOverPanel>
    );

    it('Renders a header containing the provided title', () => {
      expect(wrapper.find('header').text()).toBe('Foo');
    });
  });

  describe('Honours the open property', () => {
    const openWrapper = shallow(
      <IdeSlideOverPanel {...requiredProps} open={true}></IdeSlideOverPanel>
    );
    const closedWrapper = shallow(
      <IdeSlideOverPanel {...requiredProps} open={false}></IdeSlideOverPanel>
    );
    const defaultWrapper = shallow(
      <IdeSlideOverPanel {...requiredProps}></IdeSlideOverPanel>
    );

    it('Renders open when open is true', () => {
      expect(openWrapper.find('.ide-slide-over-panel--open')).toHaveLength(1);
    });

    it('Renders closed when open is false', () => {
      expect(closedWrapper.find('.ide-slide-over-panel--open')).toHaveLength(0);
    });

    it('Renders closed by default', () => {
      expect(defaultWrapper.find('.ide-slide-over-panel--open')).toHaveLength(
        0
      );
    });
  });

  describe('Honours the size property', () => {
    const defaultWrapper = shallow(
      <IdeSlideOverPanel {...requiredProps}></IdeSlideOverPanel>
    );
    const smallWrapper = shallow(
      <IdeSlideOverPanel {...requiredProps} size="small"></IdeSlideOverPanel>
    );
    const mediumWrapper = shallow(
      <IdeSlideOverPanel {...requiredProps} size="medium"></IdeSlideOverPanel>
    );
    const largeWrapper = shallow(
      <IdeSlideOverPanel {...requiredProps} size="large"></IdeSlideOverPanel>
    );

    it('Supports a small size', () => {
      expect(smallWrapper.find('.ide-slide-over-panel--small')).toHaveLength(1);
      expect(smallWrapper.find('.ide-slide-over-panel--medium')).toHaveLength(
        0
      );
      expect(smallWrapper.find('.ide-slide-over-panel--large')).toHaveLength(0);
    });

    it('Supports a medium size', () => {
      expect(mediumWrapper.find('.ide-slide-over-panel--small')).toHaveLength(
        0
      );
      expect(mediumWrapper.find('.ide-slide-over-panel--medium')).toHaveLength(
        1
      );
      expect(mediumWrapper.find('.ide-slide-over-panel--large')).toHaveLength(
        0
      );
    });

    it('Supports a large size', () => {
      expect(largeWrapper.find('.ide-slide-over-panel--small')).toHaveLength(0);
      expect(largeWrapper.find('.ide-slide-over-panel--medium')).toHaveLength(
        0
      );
      expect(largeWrapper.find('.ide-slide-over-panel--large')).toHaveLength(1);
    });

    it('Defaults to small size', () => {
      expect(defaultWrapper.find('.ide-slide-over-panel--small')).toHaveLength(
        1
      );
      expect(defaultWrapper.find('.ide-slide-over-panel--medium')).toHaveLength(
        0
      );
      expect(defaultWrapper.find('.ide-slide-over-panel--large')).toHaveLength(
        0
      );
    });
  });

  describe('Honours the onClose callback', () => {
    const closeSpy = jest.fn();
    const wrapper = shallow(
      <IdeSlideOverPanel onClose={closeSpy}></IdeSlideOverPanel>
    );

    it('Renders a close button', () => {
      expect(wrapper.find('.ide-slide-over-panel--close')).toHaveLength(1);
      expect(
        wrapper.find('.ide-slide-over-panel--close').props().renderIcon
      ).toEqual(Close16);
    });

    it('Triggers onClose when close button is clicked', () => {
      const event = {};
      wrapper.find('.ide-slide-over-panel--close').props().onClick(event);
      expect(closeSpy).toHaveBeenCalledWith(event);
    });
  });

  describe('Honours the overlay with onClose callback', () => {
    const closeSpy = jest.fn();
    let wrapper = shallow(
      <IdeSlideOverPanel
        withOverlay={true}
        onClose={closeSpy}
      ></IdeSlideOverPanel>
    );

    it('Renders an overlay', () => {
      expect(wrapper.find('.ide-slide-over-overlay')).toHaveLength(1);
    });

    it('Triggers onClose when overlay background is clicked', () => {
      const event = { key: 'click' };
      wrapper.find('.ide-slide-over-overlay').props().onClick(event);
      expect(closeSpy).toHaveBeenCalledWith(event);
    });
  });

  describe('Honours the overlay with onOverlayClose callback', () => {
    const closeSpy = jest.fn();
    const overlayCloseSpy = jest.fn();

    const wrapper = shallow(
      <IdeSlideOverPanel
        withOverlay={true}
        onOverlayClose={overlayCloseSpy}
        onClose={closeSpy}
      ></IdeSlideOverPanel>
    );

    it('Triggers onOverlayClose instead of onClose if provided', () => {
      const event = { key: 'click' };
      wrapper.find('.ide-slide-over-overlay').props().onClick(event);
      expect(closeSpy).not.toHaveBeenCalledWith(event);
      expect(overlayCloseSpy).toHaveBeenCalledWith(event);
    });
  });

  describe('Renders the controls', () => {
    const wrapper = shallow(
      <IdeSlideOverPanel
        {...requiredProps}
        controls
        primaryButtonText="Primary Button"
        secondaryButtonText="Secondary Button"
      ></IdeSlideOverPanel>
    );

    describe('primary button', () => {
      it('renders primary button', () => {
        expect(wrapper.find('.ide-slide-over-panel--primary').text()).toEqual(
          'Primary Button'
        );
        expect(
          wrapper.find('.ide-slide-over-panel--primary').props().kind
        ).toEqual('primary');
      });

      it('renders primary button as danger, when set', () => {
        const wrapper = shallow(
          <IdeSlideOverPanel
            {...requiredProps}
            danger
            controls
            primaryButtonText="Primary Button"
            secondaryButtonText="Secondary Button"
          ></IdeSlideOverPanel>
        );
        expect(
          wrapper.find('.ide-slide-over-panel--primary').props().kind
        ).toEqual('danger');
      });
    });

    describe('secondary button', () => {
      it('renders secondary button', () => {
        expect(wrapper.find('.ide-slide-over-panel--secondary').text()).toEqual(
          'Secondary Button'
        );
        expect(
          wrapper.find('.ide-slide-over-panel--secondary').props().kind
        ).toEqual('secondary');
      });
    });
  });

  describe('focusTrapOptions', () => {
    it('are merged correctly', () => {
      const wrapper = shallow(
        <IdeSlideOverPanel
          {...requiredProps}
          controls
          withOverlay
          primaryButtonText="Primary Button"
          secondaryButtonText="Secondary Button"
          focusTrapOptions={{
            returnFocusOnDeactivate: true,
          }}
        />
      );
      expect(wrapper.find('FocusTrap').prop('focusTrapOptions')).toEqual({
        clickOutsideDeactivates: true,
        escapeDeactivates: false,
        returnFocusOnDeactivate: true,
      });
    });

    it('override defaults correctly', () => {
      const wrapper = shallow(
        <IdeSlideOverPanel
          {...requiredProps}
          controls
          withOverlay
          primaryButtonText="Primary Button"
          secondaryButtonText="Secondary Button"
          focusTrapOptions={{
            escapeDeactivates: true,
          }}
        />
      );
      expect(wrapper.find('FocusTrap').prop('focusTrapOptions')).toEqual({
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
      });
    });
  });
});
