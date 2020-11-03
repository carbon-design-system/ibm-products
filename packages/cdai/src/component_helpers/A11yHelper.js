//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

export const keys = {
  SPACE: ' ',
  TAB: 'Tab',
  CLICK: 'click',
  KEYPRESS: 'keypress',
  KEYDOWN: 'keydown',
  KEYUP: 'keyup',
  ENTER: 'Enter',
};

export const handlers = {
  onClick: 'onClick',
  onKeyDown: 'onKeyDown',
  onKeyUp: 'onKeyUp',
  onKeyPress: 'onKeyPress',
};

const defaultValidKeys = [keys.CLICK, keys.SPACE, keys.ENTER];
const defaultHandlers = [handlers.onClick, handlers.onKeyDown];

// triggers a callback if event key matches one in validKeys
export const keyAndClickHandler = (callback, validKeys = defaultValidKeys) => {
  return (evt) => {
    if (evt && (evt.type || evt.key)) {
      if (validKeys.includes(evt.type) || validKeys.includes(evt.key)) {
        callback(evt);
      }
    }
  };
};

export const createInteractionHandler = (
  callback,
  handlers = defaultHandlers,
  validKeys = defaultValidKeys
) => {
  let handler = {};

  for (let i = 0; i < handlers.length; i++) {
    handler[handlers[i]] = keyAndClickHandler(callback, validKeys);
  }
  return handler;
};
