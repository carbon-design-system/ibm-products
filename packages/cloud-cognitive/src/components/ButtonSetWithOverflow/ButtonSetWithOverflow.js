//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { ButtonSet, Button } from 'carbon-components-react';

import { TempComboButton } from './TempComboButton';

import { pkg, carbon } from '../../settings';
import {
  deprecateProp,
  extractShapesArray,
} from '../../global/js/utils/props-helper';
const blockClass = `${pkg.prefix}--button-set-with-overflow`;
const componentName = 'ButtonSetWithOverflow';

export const ButtonSetWithOverflow = ({
  buttons,
  children,
  className,
  onWidthChange,
  pageActionsLabel,
  size,
}) => {
  const [showAsOverflow, setShowAsOverflow] = useState(false);
  const spaceAvailableRef = useRef(null);
  const sizingContainerRefSet = useRef(null);
  const sizingContainerRefCombo = useRef(null);
  const [itemArray, setItemArray] = useState([]);

  // determine display count based on space available and width of pageActions
  const checkFullyVisibleItems = () => {
    const spaceAvailable = spaceAvailableRef.current?.offsetWidth;
    let newShowAsOverflow = true;

    const sizingSet = sizingContainerRefSet.current?.querySelectorAll(
      `.${carbon.prefix}--btn`
    );

    let sizingSetTotalSize = 0;
    for (let item of sizingSet) {
      sizingSetTotalSize += item.offsetWidth;
    }
    const sizingComboSize = sizingContainerRefCombo.current?.offsetWidth
      ? sizingContainerRefCombo.current?.offsetWidth
      : 0;

    onWidthChange &&
      onWidthChange({
        maxWidth: sizingSetTotalSize,
        minWidth: sizingComboSize,
      });

    if (sizingSetTotalSize <= spaceAvailable) {
      newShowAsOverflow = false;
    }

    setShowAsOverflow(newShowAsOverflow);
  };

  useEffect(() => {
    checkFullyVisibleItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemArray]);

  const handleResize = () => {
    // width is the space available for all action bar items horizontally
    // the action bar items are squares so the height should be one item wide
    /* istanbul ignore next */ // not sure how to test resize
    checkFullyVisibleItems();
  };

  const handleButtonResize = () => {
    /* istanbul ignore next */ // not sure how to test resize
    checkFullyVisibleItems();
  };

  useEffect(() => {
    if (buttons) {
      setItemArray(buttons);
    } else {
      setItemArray(
        extractShapesArray(children)?.map((shape) => ({
          label: shape.children,
          ...shape,
        }))
      );
    }
  }, [buttons, children]);

  const AButtonSet = React.forwardRef(({ buttons, size, ...rest }, ref) => {
    return (
      <ButtonSet {...rest} ref={ref}>
        {buttons.map(({ label, ...other }, index) => (
          <Button key={index} {...other} size={size} type="button">
            {label}
          </Button>
        ))}
      </ButtonSet>
    );
  });
  const ATempComboButton = React.forwardRef(
    ({ buttons, size, ...rest }, ref) => {
      return (
        <TempComboButton
          {...rest}
          buttons={buttons}
          size={size}
          ref={ref}
          label={pageActionsLabel}
        />
      );
    }
  );

  return (
    <ReactResizeDetector handleWidth={true} onResize={handleResize}>
      <div className={cx([blockClass, className])} ref={spaceAvailableRef}>
        <ReactResizeDetector onResize={handleButtonResize}>
          <div
            className={`${blockClass}__button-container ${blockClass}__button-container--hidden`}>
            <AButtonSet
              aria-hidden={true}
              ref={sizingContainerRefSet}
              size={size}
              buttons={itemArray}
            />
          </div>
        </ReactResizeDetector>
        <ReactResizeDetector onResize={handleButtonResize}>
          <div
            ref={sizingContainerRefCombo}
            className={`${blockClass}__button-container ${blockClass}__button-container--hidden`}
            aria-hidden={true}>
            <ATempComboButton buttons={itemArray} size={size} />
          </div>
        </ReactResizeDetector>

        {showAsOverflow ? (
          <ATempComboButton buttons={itemArray} size={size} />
        ) : (
          <AButtonSet
            className={`${blockClass}__button-container`}
            size={size}
            buttons={itemArray}
          />
        )}
      </div>
    </ReactResizeDetector>
  );
};

ButtonSetWithOverflow.propTypes = {
  /**
  /**
   * Specifies the buttons for the ButtonSetWithOverflow. Each item is specified as an object
   * with the properties of a Carbon Button plus a label.
   *
   * Carbon Button API https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      ...Button.propTypes,
      kind: Button.propTypes.kind,
      label: PropTypes.node,
      onClick: Button.propTypes.onClick,
    })
  ),
  /**
   * children of the button set
   */
  children: deprecateProp(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]),
    "See documentation on the 'buttons' property."
  ), // expects action bar item as array or in fragment,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * onResize reports maxSize on resize
   */
  onWidthChange: PropTypes.func,
  /**
   * pageActionsLabel - used when button set is shown as combo button
   */
  pageActionsLabel: PropTypes.node,
  /**
   * Specify the size of the button, from a list of available sizes.
   * For `default` buttons, this prop can remain unspecified.
   */
  size: Button.propTypes.size,
};

ButtonSetWithOverflow.defaultProps = {
  pageActionsLabel: 'Page actions',
  size: 'field',
};

ButtonSetWithOverflow.displayName = componentName;
