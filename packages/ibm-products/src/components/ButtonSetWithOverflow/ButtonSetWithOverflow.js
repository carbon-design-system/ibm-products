//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';
import { ButtonSet, Button } from 'carbon-components-react';
import { ButtonMenu, ButtonMenuItem } from '../ButtonMenu';

import { pkg, carbon } from '../../settings';
import { prepareProps } from '../../global/js/utils/props-helper';
const blockClass = `${pkg.prefix}--button-set-with-overflow`;
const componentName = 'ButtonSetWithOverflow';

const buttonSize = 'md';

export const ButtonSetWithOverflow = ({
  buttons,
  className,
  onWidthChange,
  buttonSetOverflowLabel,
  menuOptionsClass,
  rightAlign,
}) => {
  const [showAsOverflow, setShowAsOverflow] = useState(false);
  const spaceAvailableRef = useRef(null);
  const sizingContainerRefSet = useRef(null);
  const sizingContainerRefCombo = useRef(null);
  const sizes = useRef({});

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

    if (
      onWidthChange &&
      (sizes.current.minWidth !== sizingComboSize ||
        sizes.current.maxWidth !== sizingSetTotalSize)
    ) {
      sizes.current.minWidth = sizingComboSize;
      sizes.current.maxWidth = sizingSetTotalSize;

      // report min and max width required to host
      onWidthChange({
        ...sizes.current,
      });
    }

    // only if space available use ButtonSet.
    if (sizingSetTotalSize <= spaceAvailable) {
      newShowAsOverflow = false;
    }

    setShowAsOverflow(newShowAsOverflow);
  };

  useEffect(() => {
    checkFullyVisibleItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttons]);

  const AButtonSet = React.forwardRef(({ buttons, ...rest }, ref) => {
    return (
      <ButtonSet {...rest} ref={ref}>
        {buttons.map(({ label, key, kind, ...other }) => {
          /* istanbul ignore next */
          const usedKind = kind || 'primary';
          return (
            <Button
              key={key && `button-set-${key}`}
              kind={usedKind}
              {...other}
              size={buttonSize}
              type="button"
            >
              {label}
            </Button>
          );
        })}
      </ButtonSet>
    );
  });
  const AButtonMenu = React.forwardRef(({ buttons, ...rest }, ref) => {
    return (
      <ButtonMenu {...rest} ref={ref} label={buttonSetOverflowLabel}>
        {buttons
          .map(({ label, key, kind, ...other }) => (
            <ButtonMenuItem
              key={key && `button-menu-${key}`}
              isDelete={kind?.startsWith('danger')}
              itemText={label}
              {...prepareProps(other, ['iconDescription', 'renderIcon'])}
            />
          ))
          .reverse()}
      </ButtonMenu>
    );
  });

  useResizeObserver(sizingContainerRefSet, {
    callback: checkFullyVisibleItems,
  });

  useResizeObserver(sizingContainerRefCombo, {
    callback: checkFullyVisibleItems,
  });

  useResizeObserver(spaceAvailableRef, { callback: checkFullyVisibleItems });

  return (
    <div
      className={cx([
        blockClass,
        className,
        { [`${blockClass}--right`]: rightAlign },
      ])}
      ref={spaceAvailableRef}
    >
      {/* Hidden button set used to determine if space is available for a button set */}
      <div
        className={`${blockClass}__button-container ${blockClass}__button-container--hidden`}
      >
        <AButtonSet
          aria-hidden={true}
          ref={sizingContainerRefSet}
          size={buttonSize}
          buttons={buttons}
        />
      </div>
      {/* Hidden ButtonMenu used to report min size to host via onWidthChange */}
      <div
        className={`${blockClass}__button-container ${blockClass}__button-container--hidden`}
        aria-hidden={true}
      >
        <AButtonMenu
          menuOptionsClass={menuOptionsClass}
          ref={sizingContainerRefCombo}
          buttons={buttons}
          size={buttonSize}
        />
      </div>

      {/* The displayed components */}
      {showAsOverflow ? (
        <AButtonMenu
          buttons={buttons}
          size={buttonSize}
          menuOptionsClass={menuOptionsClass}
        />
      ) : (
        <AButtonSet
          className={`${blockClass}__button-container`}
          size={buttonSize}
          buttons={buttons}
        />
      )}
    </div>
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
      key: PropTypes.string.isRequired,
      kind: Button.propTypes.kind,
      label: PropTypes.node,
      onClick: PropTypes.func,
    })
  ).isRequired,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * class name applied to the overflow options
   */
  menuOptionsClass: PropTypes.string,
  /**
   * onResize reports maxSize on resize
   */
  onWidthChange: PropTypes.func,
  /**
   * align buttons to right of available space
   */
  rightAlign: PropTypes.bool,
};

ButtonSetWithOverflow.displayName = componentName;
