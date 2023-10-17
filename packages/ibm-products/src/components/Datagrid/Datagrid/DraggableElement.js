// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable16, Locked16 } from '@carbon/icons-react';
import cx from 'classnames';
import { pkg } from '../../../settings';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

const blockClass = `${pkg.prefix}--datagrid`;

const DraggableElement = ({
  id,
  children,
  classList,
  disabled,
  ariaLabel,
  isSticky,
  selected,
  // index,
  // listData,
  // type,
  // onGrab,
  // onArrowKeyDown,
  // isFocused,
  // moveElement,
  // positionLabel = 'Current position {index} of {total}',
  // grabbedLabel = '{itemName} grabbed.',
  // droppedLabel = '{itemName} dropped.',
}) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const content = (
    <>
      <div
        className={cx(
          {
            disabled,
          },
          `${blockClass}__draggable-handleStyle`
        )}
      >
        {isSticky ? <Locked16 /> : <Draggable16 />}
      </div>
      {children}
    </>
  );

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      className={cx(classList, `${blockClass}__draggable-handleHolder`, {
        [`${blockClass}__draggable-handleHolder--selected`]: selected,
        [`${blockClass}__draggable-handleHolder--sticky`]: isSticky,
        [`${blockClass}__draggable-handleHolder--dragging`]: isDragging,
      })}
      id={id}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      disabled={disabled}
      aria-selected={selected}
      role="option"
    >
      <span className={`${blockClass}__shared-ui--assistive-text`}>
        {ariaLabel}
      </span>
      <div
        className={cx(
          {
            [`${blockClass}__draggable-handleStyle`]: !disabled,
          },
          [`${blockClass}__draggable-handleHolder-droppable`]
        )}
      >
        {content}
      </div>
    </li>
  );
};

DraggableElement.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  classList: PropTypes.string,
  disabled: PropTypes.bool,
  // droppedLabel: PropTypes.string,
  // grabbedLabel: PropTypes.string,
  id: PropTypes.string.isRequired,
  // index: PropTypes.number.isRequired,
  // isFocused: PropTypes.bool.isRequired,
  isSticky: PropTypes.bool,
  // listData: PropTypes.array.isRequired,
  // moveElement: PropTypes.func.isRequired,
  // onArrowKeyDown: PropTypes.func.isRequired,
  // onGrab: PropTypes.func.isRequired,
  // positionLabel: PropTypes.string,
  selected: PropTypes.bool,
  // type: PropTypes.string.isRequired,
};

export default DraggableElement;
