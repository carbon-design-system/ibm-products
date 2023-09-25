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
import { Draggable as DraggableIcon, Locked } from '@carbon/react/icons';
import cx from 'classnames';
import { pkg } from '../../../settings';
import { Draggable } from 'react-beautiful-dnd';

const blockClass = `${pkg.prefix}--datagrid`;

const DraggableElement = ({
  id,
  index,
  children,
  disabled,
  ariaLabel,
  isSticky,
  selected,
}) => {
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
        {isSticky ? <Locked size={16} /> : <DraggableIcon size={16} />}
      </div>
      {children}
    </>
  );

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <li
          className={cx({
            [`${blockClass}__draggable-handleHolder-selected`]: selected,
            [`${blockClass}__draggable-handleHolder--sticky`]: isSticky,
            [`${blockClass}__draggable-handleHolder`]: !selected,
            [`${blockClass}--dragging`]: snapshot.isDragging,
          })}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
      )}
    </Draggable>
  );
};

DraggableElement.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isSticky: PropTypes.bool,
  selected: PropTypes.bool,
};

export default DraggableElement;
