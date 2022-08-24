// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Draggable16 } from '@carbon/icons-react';
import { useDrag, useDrop } from 'react-dnd';
import cx from 'classnames';
import { pkg } from '../../../settings';

const { useEffect, useRef, useState } = React;
const blockClass = `${pkg.prefix}--datagrid`;

const DRAG_TYPE = `${blockClass}__shared-ui-draggable-element`;

const DraggableElement = ({
  id,
  index,
  listData,
  children,
  type,
  disabled,
  ariaLabel,
  onGrab,
  onArrowKeyDown,
  isFocused,
  moveElement,
  selected,
  positionLabel = 'Current position {index} of {total}',
  grabbedLabel = '{itemName} grabbed.',
  droppedLabel = '{itemName} dropped.',
}) => {
  const ref = useRef();

  const [{ isOver }, drop] = useDrop({
    accept: DRAG_TYPE + type,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item) => {
      moveElement(item.index, index);
    },
    canDrop: () => !disabled,
    hover(item) {
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex || disabled) {
        return;
      }
      moveElement(dragIndex, hoverIndex);
      // Time to actually perform the action
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_TYPE + type,
    item: { id, index },
    canDrag: () => !disabled,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (isFocused && ref && ref.current) {
      ref.current.focus();
    }
  }, [isFocused]);

  const [isGrabbed, setIsGrabbed] = useState(false);
  const [isFocusedOnItem, setIsFocusedOnItem] = useState(isFocused);
  drop(ref);
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
        <Draggable16 />
      </div>
      {children}
    </>
  );
  return (
    <li
      className={cx({
        [`${blockClass}__draggable-handleHolder-isOver`]: isOver && !disabled,
        [`${blockClass}__draggable-handleHolder-grabbed`]: isGrabbed,
        [`${blockClass}__draggable-handleHolder-selected`]: selected,
        [`${blockClass}__draggable-handleHolder`]: !selected,
      })}
      ref={ref}
      aria-selected={isFocused}
      role="option"
      tabIndex={isFocused ? 0 : -1}
      onKeyPress={(e) => {
        if (e.key === ' ' && e.target === e.currentTarget && !disabled) {
          const positionText = positionLabel
            .replace('{index}', index + 1)
            .replace('{total}', listData.length);
          const grabAriaText = (
            isGrabbed ? droppedLabel : grabbedLabel
          ).replace('{itemName}', ariaLabel);
          onGrab(grabAriaText + positionText);
          setIsGrabbed(!isGrabbed);
          e.preventDefault();
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          onArrowKeyDown(e, isGrabbed, index);
        }
      }}
      onBlur={(e) => {
        // handle when focus move to inner elements
        setIsFocusedOnItem(e.currentTarget === e.target);
      }}
      onFocus={(e) => {
        // handle when focus move to li element
        setIsFocusedOnItem(e.currentTarget === e.target);
      }}
    >
      <span className={`${blockClass}__shared-ui--assistive-text`}>
        {ariaLabel}
      </span>
      {isDragging && !isOver ? (
        <div
          ref={preview}
          className="${blockClass}__draggable-handleHolder-droppable"
        >
          {content}
        </div>
      ) : (
        <div
          ref={drag}
          aria-hidden={isFocused && isFocusedOnItem} // if focus on li, hide the children from aria
          className={cx(
            {
              [`${blockClass}__draggable-handleStyle`]: !disabled,
            },
            [`${blockClass}__draggable-handleHolder-droppable`]
          )}
        >
          {(!isOver || disabled) && content}
        </div>
      )}
    </li>
  );
};

DraggableElement.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  droppedLabel: PropTypes.string,
  grabbedLabel: PropTypes.string,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isFocused: PropTypes.bool.isRequired,
  listData: PropTypes.array.isRequired,
  moveElement: PropTypes.func.isRequired,
  onArrowKeyDown: PropTypes.func.isRequired,
  onGrab: PropTypes.func.isRequired,
  positionLabel: PropTypes.string,
  selected: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

export default DraggableElement;
