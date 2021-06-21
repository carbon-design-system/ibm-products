/**
 * @file Panel tests.
 * @copyright IBM Security 2019
 */

import { shallow, mount } from 'enzyme';
import React, { Fragment } from 'react';

import { label } from '../_mocks_';

import {
  Button,
  Panel,
  PanelContainer,
  PanelContent,
  PanelController,
} from '../../..';

import { namespace } from '../PanelContainer';

describe('Panel', () => {
  let panel;
  let panelActive;

  const { fn } = jest;

  const onClose = fn(() => {
    if (panelActive) {
      panelActive = false;
    }
  });

  const onOpen = fn(() => {
    if (!panelActive) {
      panelActive = true;
    }
  });

  const panelElement = (
    <Panel
      onClose={onClose}
      onOpen={onOpen}
      shouldPanelOpen={!panelActive}
      render={({ active, toggleActive }) => (
        <Fragment>
          <Button onClick={toggleActive}>{label}</Button>
          <PanelController active={active}>
            <PanelContainer
              title={label}
              subtitle={label}
              closeButton={{ label, onClick: toggleActive }}
            >
              <PanelContent>{label}</PanelContent>
            </PanelContainer>
          </PanelController>
        </Fragment>
      )}
    />
  );

  beforeEach(() => {
    panelActive = false;
    panel = shallow(panelElement);
  });

  const selectToggleButton = (count = 1) =>
    new Array(count).fill().forEach(() => panel.find(Button).simulate('click'));

  describe('Rendering', () => {
    const button = {
      label,
      onClick: fn(),
    };

    it('renders correctly', () => {
      expect(panel).toMatchSnapshot();
    });

    it("renders the HTML of the node's subtree", () => {
      expect(panel.render()).toMatchSnapshot();
    });

    it('renders the open panel', () => {
      selectToggleButton();
      expect(panel).toMatchSnapshot();
    });

    it('does not render the open panel if `shouldPanelOpen` is false', () => {
      panel.setProps({ shouldPanelOpen: false });
      selectToggleButton();
      expect(panel).toMatchSnapshot();
    });

    it('renders the primary button variation', () => {
      panel.setProps({ primaryButton: button });

      selectToggleButton();
      expect(panel).toMatchSnapshot();
    });

    it('renders the secondary button variation', () => {
      panel.setProps({ primaryButton: button, secondaryButton: button });

      selectToggleButton();
      expect(panel).toMatchSnapshot();
    });

    it('renders the secondary button variation', () => {
      panel.find({ primaryButton: button, secondaryButton: button });

      selectToggleButton();
      expect(panel).toMatchSnapshot();
    });

    it('renders the correct body margin', () => {
      panel = mount(panelElement);

      const getElement = element => panel.find(`.${namespace}__${element}`);

      selectToggleButton();
      expect(getElement('body').prop('style').marginTop).toBe(
        `${getElement('header').getDOMNode().clientHeight}px`
      );
    });
  });

  describe('Events', () => {
    it('should invoke `onOpen`', () => {
      selectToggleButton();
      expect(onOpen).toBeCalled();
    });

    it('should invoke `onClose`', () => {
      selectToggleButton(2);
      expect(onClose).toBeCalled();
    });
  });
});
