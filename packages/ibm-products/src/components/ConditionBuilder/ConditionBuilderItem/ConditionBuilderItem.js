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
  popoverState,
  type,
  showToolTip,
  ...rest
}) => {
  const contentRef = useRef(null);

  const [open, setOpen] = useState(false);

  const propertyId = type ? valueRenderers[type](label) : label;
  let propertyLabel = translateWithId(propertyId);
  useEffect(() => {
    if (popoverState) {
      setTimeout(() => {
        setOpen(
          popoverState == 'open' ? true : popoverState == 'close' ? false : null
        );
      }, 0);
    }
  }, [popoverState, propertyLabel]);

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
   * text to be displayed in the field
   */
  label: PropTypes.string,

  /**
   * boolean to keep open/close popover
   */
  popoverState: PropTypes.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   */
  renderIcon: PropTypes.func,

  /**
   * show tool tip
   */
  showToolTip: PropTypes.bool,

  /**
   * title of the popover
   */
  title: PropTypes.string,

  /**
   * input type
   */
  type: PropTypes.string,
};
