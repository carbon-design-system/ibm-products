vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { describe, expect, it, vi } from 'vitest';
import { render, html } from 'lit';

const defaultProps = {
  animateTitle: true,
  includeOverlay: true,
  slideIn: false,
  selectorInitialFocus: '',
  label: '',
  open: true,
  placement: 'right',
  preventCloseOnClickOutside: false,
  selectorPageContent: '',
  size: 'md',
  title: 'Side panel title',
};

const template = (props = defaultProps) =>
  html`
    <c4p-side-panel
      ?animate-title=${props.animateTitle}
      ?include-overlay=${props.includeOverlay && !props.slideIn}
      selector-initial-focus=${props.selectorInitialFocus}
      label-text="${props.label}"
      ?open=${props.open}
      placement=${props.placement}
      ?prevent-close-on-click-outside=${props.preventCloseOnClickOutside}
      selector-page-content=${props.selectorPageContent}
      size=${props.size}
      ?slide-in=${props.slideIn}
      .title=${props.title}
    >
      content
    </c4p-side-panel>
  `;

describe('c4p-side-panel', () => {
  it('should render a side panel', async () => {
    render(template(), document.body);
    await Promise.resolve();
    const elem = document.body.querySelector('c4p-side-panel' as any);
    expect(elem).toBeDefined();
  });
});
