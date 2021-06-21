/**
 * @file Decorator tests.
 * @copyright IBM Security 2019 - 2020
 */

import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import React from 'react';

import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';
import { Decorator } from '../../../..';

import { namespace, icons } from '../constants';

describe('Decorator', () => {
  test('should have no Axe or DAP violations when rendered as a button', async () => {
    const { container } = renderWithinLandmark(
      <Decorator type="IP" value="10.0.0.0" score={0} />
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('Decorator as a button');
  });

  test('should have no Axe or DAP violations when rendered as a link', async () => {
    const { container } = renderWithinLandmark(
      <Decorator type="IP" value="10.0.0.0" score={0} href="#" />
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('Decorator as a link');
  });

  test('should have no Axe or DAP violations when inert', async () => {
    const { container } = renderWithinLandmark(
      <Decorator type="IP" value="10.0.0.0" score={0} invert />
    );

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('Decorator as inert');
  });

  test('should apply a score', () => {
    const { queryByTitle } = render(
      <Decorator type="IP" value="10.0.0.0" score={5} />
    );
    // Expect svg's `title` text, which is in the DOM but not necessarily visible:
    expect(queryByTitle(/5/i)).toBeInTheDocument();
  });

  test('should apply a score description', () => {
    const { queryByTitle } = render(
      <Decorator
        type="IP"
        value="10.0.0.0"
        score={5}
        scoreDescription={score => `Test score ${score}`}
      />
    );
    // Expect svg's `title` text, which is in the DOM but not necessarily visible:
    expect(queryByTitle(/Test score 5/i)).toBeInTheDocument();
  });

  test('should apply a value', () => {
    const { queryByText } = render(<Decorator type="IP" value="10.0.0.0" />);
    expect(queryByText(/10.0.0.0/i)).toBeVisible();
  });

  test('should apply a `title` attribute to the `value` element via the `title` prop', () => {
    const { queryByTitle } = render(
      <Decorator type="IP" value="10.0.0.0" title="test title" />
    );
    expect(queryByTitle(/test title/i)).toBeInTheDocument();
  });

  test('should accept a custom class', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" className="custom-class" />
    );
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should invoke click mock when decorator is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Decorator type="IP" value="10.0.0.0" onClick={onClickMock} />
    );

    userEvent.click(getByText(/10.0.0.0/i).closest('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should apply an href', () => {
    const { getByText } = render(
      <Decorator type="IP" value="10.0.0.0" href="#" />
    );
    expect(getByText(/10.0.0.0/i).closest('a')).toHaveAttribute('href', '#');
  });

  test('should render as a `span` by default', () => {
    const { container } = render(<Decorator type="IP" value="10.0.0.0" />);
    expect(container.firstElementChild.nodeName).toBe('SPAN');
  });

  test('should render as an `a` element when an `href` is provided', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" href="#" />
    );
    expect(container.firstElementChild.nodeName).toBe('A');
  });

  test('should render as a `button` when `onClick` is provided', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" onClick={() => {}} />
    );
    expect(container.firstElementChild.nodeName).toBe('BUTTON');
  });

  test('should apply correct active class when `active` is set `true`', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" active />
    );
    expect(container.firstElementChild).toHaveClass(`${namespace}--active`);
  });

  test('should apply correct inline class when `inline` is set `true`', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" inline />
    );
    expect(container.firstElementChild).toHaveClass(`${namespace}--inline`);
  });

  test('should use the value of the decorator to the panel title when mid-line truncation is required', () => {
    const { queryAllByText } = render(
      <Decorator
        type="IP"
        value="0f3deda483df5e5f8043ea20297d243b"
        score={0}
        midLineTruncation={{ enabled: true, maxLength: 20, front: 12, back: 4 }}
      />
    );
    // the MD5 hash -- the data decorator.
    expect(queryAllByText(/0f3deda483df…243b/i).length === 1);
  });
});

Object.keys(icons).forEach(icon => {
  // Capitalize first character of icon name
  // to correctly call component name (like `Decorator.Low`, etc.)
  const formattedName = icon.charAt(0).toUpperCase() + icon.slice(1);
  const className = `${namespace}__icon--${icon}`;

  const Component = Decorator[formattedName];

  describe(`Decorator.${formattedName}`, () => {
    test('should have no Axe or DAP violations', async () => {
      const { container } = renderWithinLandmark(
        <Component description={`${formattedName} severity`} />
      );

      await expect(container).toHaveNoAxeViolations();
      await expect(container).toHaveNoDAPViolations(
        `Decorator.${formattedName}`
      );
    });

    test('should apply accessible `aria-label` with `description` prop', () => {
      const { getByLabelText } = render(
        <Component description={`${formattedName} severity`} />
      );
      expect(getByLabelText(`${formattedName} severity`)).toBeVisible();
    });

    test('should add a custom class', () => {
      render(
        <Component
          className="custom-class"
          description={`${formattedName} severity`}
        />
      );
      expect(document.querySelector(`.${className}`)).toHaveClass(
        'custom-class'
      );
    });

    test('should pass through extra props via spread attribute', () => {
      const { queryByTestId } = render(
        <Component
          data-testid="test-id"
          description={`${formattedName} severity`}
        />
      );
      expect(queryByTestId('test-id')).toBeVisible();
    });

    test('should set `height` and `width` with `size` prop', () => {
      render(<Component size={12} description={`${formattedName} severity`} />);
      expect(document.querySelector(`.${className}`)).toHaveAttribute(
        'height',
        '12'
      );
      expect(document.querySelector(`.${className}`)).toHaveAttribute(
        'width',
        '12'
      );
    });
  });
});
