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
import { ButtonMenu, ButtonMenuItem } from '../ButtonMenu';

import { pkg, carbon } from '../../settings';
import {
  deprecateProp,
  extractShapesArray,
  prepareProps,
} from '../../global/js/utils/props-helper';
const blockClass = `${pkg.prefix}--button-set-with-overflow`;
const componentName = 'ButtonSetWithOverflow';

const buttonSize = 'field';

export const ButtonSetWithOverflow = ({
  buttons,
  children,
  className,
  onWidthChange,
  buttonSetOverflowLabel,
  rightAlign,
}) => {
  const [showAsOverflow, setShowAsOverflow] = useState(false);
  const spaceAvailableRef = useRef(null);
  const sizingContainerRefSet = useRef(null);
  const sizingContainerRefCombo = useRef(null);
  const [itemArray, setItemArray] = useState([]);

  /**
   * checkFullyVisibleItems determines display count based on space available and width of pageActions
   *
   * ButtonSetWithOverflow switches between a Carbon ButtonSet and use of the ButtonMenu component depending
   * on the space available. While there is sufficient space to show all of the buttons side by side the
   * ButtonSet is used, once this is no longer the case it switches to a ButtonMenu.
   *
   */
  const checkFullyVisibleItems = () => {
    const spaceAvailable = spaceAvailableRef.current?.offsetWidth;
    let newShowAsOverflow = true;

    // get all of the hidden sizing buttons
    const sizingSet = sizingContainerRefSet.current?.querySelectorAll(
      `.${carbon.prefix}--btn`
    );

    // calculate total width of button set
    let sizingSetTotalSize = 0;
    for (let item of sizingSet) {
      sizingSetTotalSize += item.offsetWidth;
    }

    // check ButtonMenu size
    const sizingComboSize = sizingContainerRefCombo.current?.offsetWidth;

    // report min and max width required to host
    onWidthChange &&
      onWidthChange({
        maxWidth: sizingSetTotalSize,
        minWidth: sizingComboSize,
      });

    // only if space available use ButtonSet.
    if (sizingSetTotalSize <= spaceAvailable) {
      newShowAsOverflow = false;
    }

    setShowAsOverflow(newShowAsOverflow);
  };

  useEffect(() => {
    checkFullyVisibleItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemArray]);

  /* istanbul ignore next */ // not sure how to test resize
  const handleResize = () => {
    // width is the space available for all action bar items horizontally
    // the action bar items are squares so the height should be one item wide
    /* istanbul ignore next */ // not sure how to test resize
    checkFullyVisibleItems();
  };

  /* istanbul ignore next */ // not sure how to test resize
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

  const AButtonSet = React.forwardRef(({ buttons, ...rest }, ref) => {
    return (
      <ButtonSet {...rest} ref={ref}>
        {buttons.map(({ label, ...other }, index) => (
          <Button key={index} {...other} size={buttonSize} type="button">
            {label}
          </Button>
        ))}
      </ButtonSet>
    );
  });
  const AButtonMenu = React.forwardRef(({ buttons, ...rest }, ref) => {
    return (
      <ButtonMenu {...rest} ref={ref} label={buttonSetOverflowLabel}>
        {buttons
          .map(({ label, kind, ...other }, index) => (
            <ButtonMenuItem
              key={index}
              isDelete={kind === 'danger'}
              itemText={label}
              {...prepareProps(other, ['iconDescription', 'renderIcon'])}
            />
          ))
          .reverse()}
      </ButtonMenu>
    );
  });

  return (
    <ReactResizeDetector handleWidth={true} onResize={handleResize}>
      <div
        className={cx([
          blockClass,
          className,
          { [`${blockClass}--right`]: rightAlign },
        ])}
        ref={spaceAvailableRef}>
        <ReactResizeDetector onResize={handleButtonResize}>
          {/* Hidden button set use to determine if space is available for a button set */}
          <div
            className={`${blockClass}__button-container ${blockClass}__button-container--hidden`}>
            <AButtonSet
              aria-hidden={true}
              ref={sizingContainerRefSet}
              size={buttonSize}
              buttons={itemArray}
            />
          </div>
        </ReactResizeDetector>
        <ReactResizeDetector onResize={handleButtonResize}>
          {/* Hidden ButtonMenu used to report min size to host via onWidthChange
           */}
          <div
            className={`${blockClass}__button-container ${blockClass}__button-container--hidden`}
            aria-hidden={true}>
            <AButtonMenu
              ref={sizingContainerRefCombo}
              buttons={itemArray}
              size={buttonSize}
            />
          </div>
        </ReactResizeDetector>

        {/* The displayed components */}
        {showAsOverflow ? (
          <AButtonMenu buttons={itemArray} size={buttonSize} />
        ) : (
          <AButtonSet
            className={`${blockClass}__button-container`}
            size={buttonSize}
            buttons={itemArray}
          />
        )}
      </div>
    </ReactResizeDetector>
  );
};

ButtonSetWithOverflow.propTypes = {
  /**
   *  buttonSetOverflowLabel - used when button set is shown as combo button
   */
  buttonSetOverflowLabel: PropTypes.node.isRequired,
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
    'See documentation on the `buttons` property.'
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
   * align buttons to right of available space
   */
  rightAlign: PropTypes.bool,
};

ButtonSetWithOverflow.defaultProps = {};

ButtonSetWithOverflow.displayName = componentName;
