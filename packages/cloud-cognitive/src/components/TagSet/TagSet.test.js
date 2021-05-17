import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { pkg, carbon } from '../../settings';
import { TagSet } from '.';
import { TagSetModal } from './TagSetModal';
import { Tag } from 'carbon-components-react';
import { mockHTMLElement } from '../../global/js/utils/test-helper';
import uuidv4 from '../../global/js/utils/uuidv4';

const blockClass = `${pkg.prefix}--tag-set`;

const tagLabel = (index) => `Tag ${index + 1}`;
const types = ['red', 'blue', 'cyan', 'high-contrast'];
const tags = Array.from({ length: 20 }, (v, k) => (
  <Tag
    key={k}
    type={types[k % types.length]}
    data-search={`${k % 4 ? 'red' : k % 9 ? 'Red' : ''}`}>
    {tagLabel(k)}
  </Tag>
));
const tags10 = tags.slice(0, 10);
const tagWidth = 100;

describe(TagSet.displayName, () => {
  const { ResizeObserver } = window;
  let mockElement;

  beforeEach(() => {
    mockElement = mockHTMLElement({
      offsetWidth: {
        get: function () {
          let width = 0;

          if (
            this.classList.contains(`${blockClass}__sizing-tag`) ||
            this.classList.contains(`${blockClass}__overflow`)
          ) {
            width = tagWidth; // all tags 100 in size
          } else {
            width = window.innerWidth;
          }

          return width;
        },
      },
    });
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    mockElement.mockRestore();
    jest.restoreAllMocks();
    window.ResizeObserver = ResizeObserver;
  });

  it('Renders all as visible tags when space available', () => {
    window.innerWidth = tagWidth * 10 + 1;

    render(<TagSet>{tags10}</TagSet>);

    // first and last should be visible
    screen.getByText(tagLabel(0), {
      // selector need to ignore sizing items
      selector: `.${blockClass}__displayed-tag .${carbon.prefix}--tag span`,
    });
    screen.getByText(tagLabel(tags10.length - 1), {
      // selector need to ignore sizing items
      selector: `.${blockClass}__displayed-tag .${carbon.prefix}--tag span`,
    });
  });

  it('Renders only the overflow when very little space', () => {
    window.innerWidth = tagWidth / 2;

    render(<TagSet>{tags10}</TagSet>);

    const visible = screen.queryAllByText(/Tag [0-9]+/, {
      // selector need to ignore sizing items
      selector: `.${blockClass}__displayed-tag .${carbon.prefix}--tag span`,
    });
    expect(visible.length).toEqual(0);

    const overflow = screen.getByText('+10');
    userEvent.click(overflow);

    const overflowVisible = screen.queryAllByText(/Tag [0-9]+/, {
      // selector need to ignore sizing items
      selector: `.${blockClass}__overflow-content *`,
    });
    expect(overflowVisible.length).toEqual(tags10.length);
  });

  it('Renders some as visible when space limited', () => {
    const visibleTags = 5;
    window.innerWidth = tagWidth * (visibleTags + 1) + 1; // + 1 for overflow

    render(<TagSet>{tags10}</TagSet>);

    // first and last should be visible
    screen.getByText(tagLabel(0), {
      // selector need to ignore sizing items
      selector: `.${blockClass}__displayed-tag .${carbon.prefix}--tag span`,
    });

    const visible = screen.queryAllByText(/Tag [0-9]+/, {
      // selector need to ignore sizing items
      selector: `.${blockClass}__displayed-tag .${carbon.prefix}--tag span`,
    });
    expect(visible.length).toEqual(visibleTags);

    const overflow = screen.getByText(`+${tags10.length - visibleTags}`);
    userEvent.click(overflow);

    const overflowVisible = screen.queryAllByText(/Tag [0-9]+/, {
      // selector need to ignore sizing items
      selector: `.${blockClass}__overflow-content *`,
    });
    expect(overflowVisible.length + visible.length).toEqual(tags10.length);
  });

  it('Clicking show more on the overflow displays TagSetModal', () => {
    const visibleTags = 5;
    window.innerWidth = tagWidth * (visibleTags + 1) + 1; // + 1 for overflow

    // const { container } =
    render(<TagSet>{tags}</TagSet>);

    const overflow = screen.getByText(`+${tags.length - visibleTags}`);
    userEvent.click(overflow);

    const viewAll = screen.getByText('View all tags');
    userEvent.click(viewAll);

    const modal = screen.getByRole('presentation');
    expect(modal).toHaveClass('is-visible');
    const closeButton = screen.getByTitle('Close');
    userEvent.click(closeButton);
    expect(modal).not.toHaveClass('is-visible');
  });

  it('Obeys max visible', () => {
    window.innerWidth = tagWidth * 10 + 1;

    render(<TagSet maxVisible={5}>{tags10}</TagSet>);

    // first and last should be visible
    screen.getByText(tagLabel(0), {
      // selector need to ignore sizing items
      selector: `.${blockClass}__displayed-tag .${carbon.prefix}--tag span`,
    });
    screen.getByText(tagLabel(4), {
      // selector need to ignore sizing items
      selector: `.${blockClass}__displayed-tag .${carbon.prefix}--tag span`,
    });

    expect(
      screen.getAllByText(/Tag [0-9]+/, {
        // selector need to ignore sizing items
        selector: `.${blockClass}__displayed-tag .${carbon.prefix}--tag span`,
      }).length
    ).toEqual(5);
  });

  it('adds additional properties to the containing node', () => {
    const dataTestId = uuidv4();
    window.innerWidth = tagWidth * 10 + 1;

    render(<TagSet data-testid={dataTestId}>{tags10}</TagSet>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    window.innerWidth = tagWidth * 10 + 1;

    render(<TagSet ref={ref}>{tags10}</TagSet>);

    expect(ref.current).not.toBeNull();
  });

  describe(TagSetModal.displayName, () => {
    const args = {
      heading: 'a-heading',
      searchLabel: 'a search label',
      searchPlaceholder: 'a search placeholder',
    };

    it('Renders a modal with all tags and filters on search', () => {
      render(<TagSetModal allTags={tags} {...args} open />);

      const search = screen.getByRole('searchbox');
      const unfilteredTags = screen.getAllByText(/Tag [0-9]+/);

      // userEvent.type(search, '1'); // does not work
      fireEvent.change(search, { target: { value: '1' } });
      const filteredTags = screen.getAllByText(/Tag [0-9]+/);
      expect(filteredTags.length - unfilteredTags.length).toBeLessThan(0);

      fireEvent.change(search, { target: { value: '1zxy' } });
      const noTags = screen.queryAllByText(/Tag [0-9]+/);
      expect(noTags.length).toBe(0);

      fireEvent.change(search, { target: { value: 'red' } });
      screen.getAllByText(/Tag [0-9]+/);
    });
  });
});
