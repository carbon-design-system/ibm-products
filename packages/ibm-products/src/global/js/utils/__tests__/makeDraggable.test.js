/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { makeDraggable } from '../makeDraggable';
import { fireEvent } from '@testing-library/react';

describe('makeDraggable', () => {
  let el;
  let handle;
  let focusableHandle;

  beforeEach(() => {
    el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.left = '0px';
    el.style.top = '0px';

    handle = document.createElement('div');
    focusableHandle = document.createElement('button');

    el.appendChild(handle);
    el.appendChild(focusableHandle);
    document.body.appendChild(el);

    makeDraggable({
      el,
      dragHandle: handle,
      focusableDragHandle: focusableHandle,
      dragStep: 10,
      shiftDragStep: 20,
    });
  });

  it('should set cursor style on handle', () => {
    expect(handle.style.cursor).toBe('move');
    expect(el.style.cursor).toBe('default');
  });

  it('should move element with arrow keys(dragStep)', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    expect(el.style.left).toBe('0px');

    focusableHandle.dispatchEvent(event);

    expect(el.style.left).toBe('10px');
  });

  it('should move element with shift + arrow keys (shiftDragStep)', () => {
    const event = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      shiftKey: true,
    });
    focusableHandle.dispatchEvent(event);

    expect(el.style.top).toBe('20px');
  });

  it('should move element with mouse drag', () => {
    fireEvent.mouseDown(handle, { clientX: 50, clientY: 50 });
    fireEvent.mouseMove(document, { clientX: 100, clientY: 120 });

    expect(el.style.left).toBe('50px');
    expect(el.style.top).toBe('70px');
  });
});
