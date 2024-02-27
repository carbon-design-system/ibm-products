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
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

/* ************************ */

import styles from './_storybook-styles.scss';

// import { ExampleComponent } from '.';
import { pkg } from '../../settings';
// import DocsPage from './ExampleComponent.docs-page';

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
      // page:  DocsPage, // OPTIONAL: required only to customize default docs page
    },
  },
};

const SortableItem = ({ id, children, assistiveText = 'Text for screen reader' }) => {
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
  }

  const draggableClass = `${pkg.prefix}__draggable-item`;
  return <li
    className={cx(
      `${draggableClass}__draggable-handleHolder`,
      draggableClass, {
      // [`${draggableClass}__draggable-handleHolder--selected`]: selected,
      // [`${draggableClass}__draggable-handleHolder--sticky`]: isSticky,
      [`${draggableClass}__dragging`]: isDragging,
    })}
    id={id}
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
    role='option'
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
}

const Template = ({ ...args }) => {
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

      const delta = target.offsetHeight;

      switch (event.code) {
        case 'ArrowRight':
        case 'ArrowLeft':
          // ignore right and left
          return currentCoordinates;
        case 'ArrowUp':
          return { ...currentCoordinates, y: currentCoordinates.y - delta };
        case 'ArrowDown':
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
  }
  // console.log(items);

  const handleDragStart = ({ active }) => {
    action('handleDragStart')();
    if (!active) {
      return;
    }

    setActiveId(active.id);
  }

  const handleDragUpdate = () => {
    action('handleDragUpdate')();
  }

  const handleDragCancel = () => {
    setActiveId(null);
  }


  const sensors = useSensors(pointerSensor, keyboardSensor);
  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragMove={handleDragUpdate}
      onDragCancel={handleDragCancel}
      sensors={sensors}
      modifiers={[restrictToVerticalAxis]}
      {...args}
    >
    <SortableContext
      items={items}
      strategy={verticalListSortingStrategy}
    >
      {items.map(i => <SortableItem id={i} key={`${i}__drag_key`}>{i}</SortableItem>)}
    </SortableContext>
    </DndContext>
  );
};

export const exampleComponent = prepareStory(Template, {
  args: {},
});
