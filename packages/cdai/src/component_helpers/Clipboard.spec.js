//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

jest.unmock('./Clipboard.js');

import { copyToClipboard, copyContentToClipboard } from './Clipboard.js';
import sinon from 'sinon';

describe('Clipboard tests', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.restore();
  });

  const testEvent = {
    currentTarget: {
      parentNode: document.body,
    },
  };

  it('content is copied to clipboard', () => {
    const content = 'this is a test value';
    let elementContent = null;
    document.execCommand = sinon.stub().callsFake(() => {
      elementContent = document.body.textContent;
    });
    copyToClipboard(testEvent, content);

    expect(document.execCommand.calledOnce).toBe(true);
    expect(elementContent).toEqual(content);
  });

  it('copyContentToClipboard() returns a function which copies the provided content to the clipboard', () => {
    // setup - define some content and stub out the execCommand function
    const content = 'some test content';
    let elementContent = null;
    document.execCommand = sinon.stub().callsFake(() => {
      elementContent = document.body.textContent;
    });

    let copyToClipboardFunc = copyContentToClipboard(content);
    // confirm we get a function back
    expect(typeof copyToClipboardFunc).toBe('function');
    // invoke the function and confirm it calls the stubbed function with the correct content
    copyToClipboardFunc(testEvent);
    expect(document.execCommand.calledOnce).toBe(true);
    expect(elementContent).toEqual(content);
  });
});
