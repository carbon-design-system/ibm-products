// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React, { PropsWithChildren, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Draggable as DraggableIcon, Locked } from '@carbon/react/icons';
import cx from 'classnames';
import { pkg } from '../../../settings';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

const blockClass = `${pkg.prefix}--datagrid`;

interface DraggableElementProps extends PropsWithChildren {
  ariaLabel: string;
  children: ReactNode;
  classList?: string;
  disabled?: boolean;
  id: string;
  isSticky?: boolean;
  selected?: boolean;
}

const DraggableElement = ({
  id,
  children,
  classList,
  disabled,
  ariaLabel,
  isSticky,
  selected,
}: DraggableElementProps) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    disabled,
    id,
  });

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

  const style = {
    transform: !disabled ? CSS.Transform.toString(transform) : undefined,
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
  id: PropTypes.string.isRequired,
  isSticky: PropTypes.bool,
  selected: PropTypes.bool,
};

export default DraggableElement;
