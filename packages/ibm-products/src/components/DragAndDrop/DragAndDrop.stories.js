/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import cx from 'classnames';

// Dnd kit imports
/* ************************ */

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  useSortable,
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  restrictToParentElement,
  restrictToVerticalAxis,
  restrictToHorizontalAxis,
} from '@dnd-kit/modifiers';

/* ************************ */

import styles from './_storybook-styles.scss';

// import { ExampleComponent } from '.';
import { pkg } from '../../settings';
import DocsPage from './DragAndDrop.mdx';

export default {
  title: getStoryTitle('DragAndDrop'),
  component: () => {},
  tags: ['autodocs'],
  argTypes: {
    borderColor: { control: 'color' },
  },
  parameters: {
    styles,
    docs: {
      page: DocsPage, // OPTIONAL: required only to customize default docs page
    },
  },
};

const SortableItem = ({
  id,
  children,
  assistiveText = 'Text for screen reader',
  type,
}) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    zIndex: isDragging && 2000000,
  };

  const draggableClass = `${pkg.prefix}__draggable-item`;
  return (
    <li
      className={cx(
        `${draggableClass}--type`, // Confusing, refactor to typography or something along those lines
        draggableClass,
        {
          // [`${draggableClass}__draggable-handleHolder--selected`]: selected,
          // [`${draggableClass}__draggable-handleHolder--sticky`]: isSticky,
          [`${draggableClass}--dragging`]: isDragging,
          [`${draggableClass}--${type}`]: type,
        }
      )}
      id={id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      role="option"
      aria-selected
    >
      <span className={`${draggableClass}__assistive-text`}>
        {assistiveText}
      </span>
      {/* <div
      className={cx(
        {
          // [`${draggableClass}__draggable-handleStyle`]: !disabled,
        },
        [`${draggableClass}__draggable-handleHolder-droppable`]
      )}
    >
      {children}
    </div> */}
      {children}
    </li>
  );
};

const Template = ({ type, sortableProps, ...args }) => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [activeId, setActiveId] = useState(null);
  const getIndex = (id) => items.indexOf(id);

  const activeIndex = activeId ? getIndex(activeId) : -1;

  const draggableClass = `${pkg.prefix}__draggable-item`;
  const pointerSensor = useSensor(PointerSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 4,
    },
  });

  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: (event, args) => {
      const { currentCoordinates } = args;

      let target = event.target;

      while (target && !target.classList.contains(draggableClass)) {
        target = target.parentNode;
      }

      const delta =
        type !== 'horizontal' ? target.offsetHeight : target.offsetWidth;

      switch (event.code) {
        case 'ArrowRight': {
          if (type === 'horizontal') {
            console.log('arrow right?');
            return { ...currentCoordinates, x: currentCoordinates.x + delta };
          }
          return currentCoordinates;
        }
        case 'ArrowLeft': {
          if (type === 'horizontal') {
            return { ...currentCoordinates, x: currentCoordinates.x - delta };
          }
          // ignore right and left
          return currentCoordinates;
        }
        case 'ArrowUp':
          if (type === 'horizontal') {
            return currentCoordinates;
          }
          return { ...currentCoordinates, y: currentCoordinates.y - delta };
        case 'ArrowDown':
          if (type === 'horizontal') {
            return currentCoordinates;
          }
          return { ...currentCoordinates, y: currentCoordinates.y + delta };
        case 'Space':
          break;
      }
    },
  });

  const handleDragEnd = ({ over }) => {
    action('handleDragEnd')();
    setActiveId(null);

    if (over) {
      const overIndex = getIndex(over.id);
      if (activeIndex !== overIndex) {
        setItems((items) => arrayMove(items, activeIndex, overIndex));
      }
    }
  };

  const handleDragStart = ({ active }) => {
    action('handleDragStart')();
    if (!active) {
      return;
    }

    setActiveId(active.id);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const sensors = useSensors(pointerSensor, keyboardSensor);
  const axisRestriction =
    type === 'horizontal' ? restrictToHorizontalAxis : restrictToVerticalAxis;
  return (
    <ul
      className={cx(`${draggableClass}__list-container`, {
        [`${draggableClass}__list-container--horizontal`]:
          type === 'horizontal',
      })}
    >
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        // onDragMove={handleDragUpdate} // Some noticeable performance issues when dragging with this handler, haven't found it necessary for anything yet either
        onDragCancel={handleDragCancel}
        sensors={sensors}
        modifiers={[axisRestriction, restrictToParentElement]}
        {...args}
      >
        <div
          className={cx(`${draggableClass}__draggable-underlay`, {
            [`${draggableClass}__draggable-underlay--horizontal`]:
              type === 'horizontal',
          })}
          aria-hidden="true"
          key={`draggable-underlay`}
        >
          {items.map((i) => (
            <div
              className={`${draggableClass}__draggable-underlay-item`}
              key={`${i}__key`}
            />
          ))}
        </div>
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
          {...sortableProps}
        >
          {items.map((i) => (
            <SortableItem id={i} key={`${i}__drag_key`} type={type}>
              Item {i}
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  );
};

export const verticalExample = prepareStory(Template, {
  storyName: 'Vertical list',
  args: {},
});

export const horizontalExample = prepareStory(Template, {
  storyName: 'Horizontal list',
  args: {
    type: 'horizontal',
    sortableProps: {
      strategy: horizontalListSortingStrategy,
    },
  },
});

// export const verticalExample = prepareStory(Template, {
//   storyName: 'Vertical list',
//   args: {},
// });
