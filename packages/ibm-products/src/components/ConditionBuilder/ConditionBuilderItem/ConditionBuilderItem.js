import React, { useState, useRef, useEffect } from 'react';

import { Popover, PopoverContent, Layer } from '@carbon/react';
import PropTypes from 'prop-types';
import { pkg } from '../../../settings';
import { Add } from '@carbon/react/icons';

import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import {
  translateWithId,
  valueRenderers,
} from '../ConditionBuilderContext/DataConfigs';

const blockClass = `${pkg.prefix}--condition-builder`;

export const ConditionBuilderItem = ({
  children,
  className,
  label,
  renderIcon,
  title,
  isOpen,
  type,
  ...rest
}) => {
  const contentRef = useRef(null);

  const [open, setOpen] = useState(false);

  const propertyId = type ? valueRenderers[type](label) : label;
  let propertyLabel = translateWithId(propertyId);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setOpen(isOpen == 'open' ? true : isOpen == 'close' ? false : null);
      }, 0);
    }
  }, [isOpen]);

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
        showToolTip={rest.showToolTip}
      />

      <PopoverContent
        className={`${blockClass}__condition-builder-item__content`}
        role="dialog"
      >
        <Layer>
          <div className={`${blockClass}__condition-builder-item__title`}>
            {title}
          </div>
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
  isOpen: PropTypes.bool,

  /**
   * text to be displayed in the field
   */
  label: PropTypes.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   */
  renderIcon: PropTypes.func,

  /**
   * title of the popover
   */
  title: PropTypes.string,

  /**
   * input type
   */
  type: PropTypes.string,
};
