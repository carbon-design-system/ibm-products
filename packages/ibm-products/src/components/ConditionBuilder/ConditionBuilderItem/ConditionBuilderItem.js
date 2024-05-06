import React, { useState, useRef, useEffect } from 'react';

import { Popover, PopoverContent, Layer } from '@carbon/react';
import PropTypes from 'prop-types';
import { Add } from '@carbon/react/icons';

import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import {
  blockClass,
  translateWithId,
  valueRenderers,
} from '../ConditionBuilderContext/DataConfigs';

export const ConditionBuilderItem = ({
  children,
  className,
  label,
  renderIcon,
  title,
  type,
  showToolTip,
  state,
  ...rest
}) => {
  const contentRef = useRef(null);
  const [propertyLabel, setPropertyLabel] = useState(label);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const propertyId =
      rest['data-name'] == 'valueField' && type
        ? valueRenderers[type](label)
        : label;
    setPropertyLabel(translateWithId(propertyId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label]);

  useEffect(() => {
    if (state) {
      let currentField = rest['data-name'];
      //if any condition is changed, state prop is triggered
      if (state.popoverToOpen && currentField !== state.popoverToOpen) {
        setOpen(false);
      } else if (
        currentField == 'valueField' &&
        type == 'option' &&
        state.operator !== 'one-of'
      ) {
        setOpen(false);
      }
      if (state.popoverToOpen == currentField) {
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, label]);

  useEffect(() => {
    if (open && contentRef.current) {
      const firstFocusableElement =
        contentRef.current.querySelector('input, button,li');
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    }
  }, [contentRef, open]);

  return (
    <Popover
      open={open}
      isTabTip
      role="gridcell"
      onRequestClose={() => {
        setOpen(false);
      }}
    >
      <ConditionBuilderButton
        label={propertyLabel ?? translateWithId('add-condition')}
        hideLabel={!label ? true : false}
        onClick={() => {
          setOpen(!open);
        }}
        role="gridcell"
        className={className}
        aria-haspopup
        aria-expanded={open}
        renderIcon={renderIcon ? renderIcon : label == undefined ? Add : ''}
        showToolTip={showToolTip}
        {...rest}
      />

      <PopoverContent
        className={`${blockClass}__condition-builder-item__content`}
        role="dialog"
      >
        <Layer>
          <h1 className={`${blockClass}__condition-builder-item__title`}>
            {title}
          </h1>
          <div ref={contentRef}>{open && children}</div>
        </Layer>
      </PopoverContent>
    </Popover>
  );
};

ConditionBuilderItem.propTypes = {
  /**
   * provide the contents of the popover
   */
  children: PropTypes.node,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * boolean to keep open/close popover
   */

  /**
   * text to be displayed in the field
   */
  label: PropTypes.string,

  /**
   * popover default state
   */

  /**
  popoverState: PropTypes.string,
   * Optional prop to allow overriding the icon rendering.
   */
  renderIcon: PropTypes.func,

  /**
   * show tool tip
   */
  showToolTip: PropTypes.bool,

  /**
   * current condition state object
   */
  state: PropTypes.object,

  /**
  showToolTip: PropTypes.bool,
   * title of the popover
   */
  title: PropTypes.string,
  /**
   * input type
   */
  type: PropTypes.string,
};
