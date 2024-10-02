vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SlideOver } from './side-panel.stories';

const template = (props?) =>
  // @ts-ignore
  SlideOver({
    'c4p-side-panel': props,
  });

describe('c4p-side-panel', () => {
  let elem: HTMLElement | null;

  beforeEach(async function () {
    elem = document.body.appendChild(document.createElement('c4p-side-panel'));
    elem.setAttribute('open', '');
    await Promise.resolve();
  });

  it('should render a side panel', () => {
    expect(
      elem!.shadowRoot!.querySelectorAll('.c4p--side-panel').length
    ).to.equal(1);
  });
});
