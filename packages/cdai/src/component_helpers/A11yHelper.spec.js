//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import {
  keys,
  handlers,
  keyAndClickHandler,
  createInteractionHandler,
} from './A11yHelper';
import sinon from 'sinon';

const sinonSandbox = sinon.createSandbox();

const EVENTS = {
  CLICK: { type: keys.CLICK },
  SPACE: { key: keys.SPACE },
  ENTER: { key: keys.ENTER },
  TAB: { key: keys.TAB },
};

describe('A11yHelper - functions', () => {
  afterEach(() => {
    sinonSandbox.reset();
  });

  it('keyAndClickHandler only triggers callback with correct events', () => {
    const mockCallback = sinonSandbox.stub();

    let handleFunction = keyAndClickHandler(mockCallback);
    handleFunction();
    expect(mockCallback.callCount).toBe(0);

    handleFunction(EVENTS.CLICK);
    expect(mockCallback.callCount).toBe(1);

    handleFunction(EVENTS.SPACE);
    expect(mockCallback.callCount).toBe(2);

    handleFunction(EVENTS.ENTER);
    expect(mockCallback.callCount).toBe(3);
  });

  it('keyAndClickHandler triggers correctly with custom valid keys', () => {
    const mockCallback = sinonSandbox.stub();

    const validKeys = [keys.TAB, keys.ENTER];

    let handleFunction = keyAndClickHandler(mockCallback, validKeys);
    handleFunction();
    expect(mockCallback.callCount).toBe(0); // doesn't trigger rom blank event

    handleFunction(EVENTS.CLICK);
    expect(mockCallback.callCount).toBe(0); // doesn't trigger from default click event

    handleFunction(EVENTS.TAB);
    expect(mockCallback.callCount).toBe(1); // triggers from custom tab event

    handleFunction(EVENTS.ENTER);
    expect(mockCallback.callCount).toBe(2); // triggers form custom enter event
  });

  it('createInteractionHandler calls a callback for the correct default events', () => {
    const mockCallback = sinonSandbox.stub();

    let interactionHandler = createInteractionHandler(mockCallback);

    expect(interactionHandler.onKeyPress).toBeUndefined(); // onKeyPress is not included in default set of handlers

    interactionHandler.onKeyDown(EVENTS.TAB);
    expect(mockCallback.callCount).toBe(0); // tab is not included in default set of valid keys, don't expect callback to be called

    interactionHandler.onClick(EVENTS.CLICK);
    expect(mockCallback.callCount).toBe(1);

    interactionHandler.onKeyDown(EVENTS.ENTER);
    expect(mockCallback.callCount).toBe(2);

    interactionHandler.onKeyDown(EVENTS.SPACE);
    expect(mockCallback.callCount).toBe(3);
  });

  it('createInteractionHandler calls a callback for the correct custom events', () => {
    const mockCallback = sinonSandbox.stub();

    const validHandlers = [handlers.onKeyPress];
    const validKeys = [keys.TAB, keys.ENTER];

    let interactionHandler = createInteractionHandler(
      mockCallback,
      validHandlers,
      validKeys
    );

    expect(interactionHandler.onKeyDown).toBeUndefined(); // onKeyDown is not included in custom set of handlers
    expect(interactionHandler.onClick).toBeUndefined(); // onClick is not included in custom set of handlers

    interactionHandler.onKeyPress(EVENTS.ENTER);
    expect(mockCallback.callCount).toBe(1); // onKeyPress is not included in default set of handlers, don't expect callback to be called

    interactionHandler.onKeyPress(EVENTS.TAB);
    expect(mockCallback.callCount).toBe(2);

    interactionHandler.onKeyPress(EVENTS.SPACE);
    expect(mockCallback.callCount).toBe(2); // space is not part of custom set of keys
  });
});
