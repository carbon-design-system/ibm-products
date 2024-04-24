import React, { useState, useRef, useEffect } from 'react';

import { Popover, PopoverContent, Layer } from '@carbon/react';
import PropTypes from 'prop-types';
import { Add } from '@carbon/react/icons';
import {
  blockClass,
  translateWithId,
  valueRenderers,
} from '../ConditionBuilderContext/DataConfigs';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';

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
    /**
     * rest['data-name'] holds the current field name
     * popoverToOpen hold the next popover to be opened if required
     */
    if (state) {
      let currentField = rest['data-name'];
      //if any condition is changed, state prop is triggered
      if (state.popoverToOpen && currentField !== state.popoverToOpen) {
        // close the previous popover
        setOpen(false);
      } else if (
        currentField == 'valueField' &&
        type == 'option' &&
        state.operator !== 'one-of'
      ) {
        //close the current popover if the field is valueField and  is a single select dropdown. For all other inputs ,popover need to be open on value changes.
        setOpen(false);
      }
      if (state.popoverToOpen == currentField) {
        //current popover need to be opened
        setOpen(true);
      }
    } else {
      // when we change any statement(if/ excl.if) which is not part of condition state, label change is triggered.
      //close popOver when statement is changed.
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, label]);

  useEffect(() => {
    //this will focus the first input field in the popover
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
   * text to be displayed in the field
   */
  label: PropTypes.string,

  /**
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
   * title of the popover
   */
  title: PropTypes.string,

  /**
   * input type
   */
  type: PropTypes.string,
};
