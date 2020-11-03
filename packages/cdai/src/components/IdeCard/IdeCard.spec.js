//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { IdeCard } from '.';
import { mount } from 'enzyme';
import React from 'react';
import { idAttributeSelector } from '../../component_helpers/IDHelper';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';
import {
  defaultProps,
  disabledCard,
  externalLinkCard,
  largeCard,
  linkCard,
  nodeContentCard,
  nodeContentCardNoContent,
  customCard,
  customCardNoRender,
  noCardType,
} from './test_assets/testProps.js';

describe('IdeCard unit tests', () => {
  let component, unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(IdeCard, defaultProps, props)
    );
    component = test.component;
    unmount = test.unmount;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  it('Renders as expected with With basic properties provided', () => {
    mountTestComponent(defaultProps);
    expect(component.exists('ClickableTile')).toBe(true);
    expect(
      component.exists(idAttributeSelector(`ide-card-${defaultProps.cardId}`))
    ).toBe(true);
    expect(
      component.exists(
        idAttributeSelector(`ide-card-${defaultProps.cardId}-card`)
      )
    ).toBe(true);
  });

  it('Renders a disabled card', () => {
    mountTestComponent(null, disabledCard);
    expect(component.exists('ide-card__disabled'));
  });

  it('Renders a large card', () => {
    mountTestComponent(null, largeCard);
    expect(component.exists('ide-card__large'));
  });

  it('Renders an external link card', () => {
    mountTestComponent(null, externalLinkCard);
    expect(component.exists('ide-card-container__standard'));
    expect(component.find('.ide-card--card-overides').props().href).toBe(
      externalLinkCard.cardHref
    );
    expect(component.find('.ide-card--card-overides').props().target).toBe(
      externalLinkCard.cardLinkTarget
    );
  });

  it('Renders a links card', () => {
    mountTestComponent(null, linkCard);
    expect(component.exists('ide-card-foobar-#started-Link'));
  });

  it('Renders a custom content card', () => {
    mountTestComponent(null, customCard);
    expect(component.exists('ide-card__standard'));
  });

  it('Renders a custom content card with a missing renderFunc', () => {
    mountTestComponent(null, customCardNoRender);
    expect(component.exists('ide-card__standard'));
  });

  it('Renders a node content card', () => {
    mountTestComponent(null, nodeContentCard);
    expect(component.exists('ide-card-heading-container'));
    expect(component.exists('ide-card__standard'));
    expect(component.exists('test--idecard-nodeContentCard'));
  });

  it('Renders a node content card without content', () => {
    mountTestComponent(null, nodeContentCardNoContent);
    expect(component.exists('ide-card-heading-container'));
    expect(component.exists('ide-card__standard'));
  });

  it('Renders a card when no cardType is provided', () => {
    mountTestComponent(null, noCardType);
    expect(component.exists('ide-card--tile-text'));
  });

  it('Sets the onHover state to true onMouseEnter and false onMouseLeave', () => {
    const card = mount(
      <IdeCard
        cardId="id"
        cardType="text"
        cardDisabled="true"
        disabledText="You don't have access to this instance"
        cardContent={{ text: 'testText' }}
      />
    );
    expect(card.state('onHover')).toBe(false);
    card.simulate('mouseenter');
    expect(card.state('onHover')).toBe(true);
    card.simulate('mouseleave');
    expect(card.state('onHover')).toBe(false);

    card.setProps({ cardDisabled: false });
    card.simulate('mouseenter');
    expect(card.state('onHover')).toBe(false);
    card.simulate('mouseleave');
    expect(card.state('onHover')).toBe(false);
  });

  it('Calls `onInteract` when clicked', () => {
    const onInteract = jest.fn();
    const preventDefault = jest.fn();
    const card = mount(
      <IdeCard
        cardId="id"
        cardType="text"
        cardHref="/hello"
        onInteract={onInteract}
        cardContent={{ text: 'testText' }}
      />
    );
    card.find('a').simulate('click', { preventDefault });
    expect(onInteract).toHaveBeenCalled();
    expect(preventDefault).not.toHaveBeenCalled();
  });

  it('Does not call `onInteract` when clicked if the card is disabled', () => {
    const onInteract = jest.fn();
    const preventDefault = jest.fn();
    const card = mount(
      <IdeCard
        cardDisabled
        cardId="id"
        cardType="text"
        cardHref="/hello"
        onInteract={onInteract}
        cardContent={{ text: 'testText' }}
      />
    );
    card.find('a').simulate('click', { preventDefault });
    expect(onInteract).not.toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });

  it('Prevents the default event when clicked with no href specified', () => {
    const onInteract = jest.fn();
    const preventDefault = jest.fn();
    const card = mount(
      <IdeCard
        cardId="id"
        cardType="text"
        onInteract={onInteract}
        cardContent={{ text: 'testText' }}
      />
    );
    card.find('a').simulate('click', { preventDefault });
    expect(onInteract).toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });

  it('Prevents the default event if the card is disabled', () => {
    const onInteract = jest.fn();
    const preventDefault = jest.fn();
    const card = mount(
      <IdeCard
        cardDisabled
        cardId="id"
        cardType="text"
        onInteract={onInteract}
        cardContent={{ text: 'testText' }}
      />
    );
    card.find('a').simulate('click', { preventDefault });
    expect(onInteract).not.toHaveBeenCalled();
    expect(preventDefault).toHaveBeenCalled();
  });
});
