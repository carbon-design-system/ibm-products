//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { ButtonSet } from 'carbon-components-react';

import { pkg, carbon } from '../../global/js/settings';
// import uuidv4 from '../../global/js/utils/uuidv4';
// import unwrapIfFragment from '../../global/js/utils/unwrap-if-fragment';
import { TempComboButton } from './TempComboButton';

const blockClass = `${pkg.prefix}-button-set-with-overflow`;

export const ButtonSetWithOverflow = ({
  children,
  className,
  onWidthChange,
}) => {
  const [showAsOverflow, setShowAsOverflow] = useState(false);
  const spaceAvailableRef = useRef(null);
  const sizingContainerRefSet = useRef(null);
  const sizingContainerRefCombo = useRef(null);

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
  }, [children]);

  const handleResize = () => {
    // width is the space available for all action bar items horizontally
    // the action bar items are squares so the height should be one item wide
    checkFullyVisibleItems();
  };

  const handleButtonResize = () => {
    checkFullyVisibleItems();
  };

  return (
    <ReactResizeDetector handleWidth={true} onResize={handleResize}>
      <div className={cx([blockClass, className])} ref={spaceAvailableRef}>
        <ReactResizeDetector onResize={handleButtonResize}>
          <div
            className={`${blockClass}--button-container ${blockClass}--button-container--hidden`}>
            <ButtonSet aria-hidden={true} ref={sizingContainerRefSet}>
              {children}
            </ButtonSet>
          </div>
        </ReactResizeDetector>
        <ReactResizeDetector onResize={handleButtonResize}>
          <div
            ref={sizingContainerRefCombo}
            className={`${blockClass}--button-container ${blockClass}--button-container--hidden`}
            aria-hidden={true}>
            <TempComboButton buttons={children} />
          </div>
        </ReactResizeDetector>

        {showAsOverflow ? (
          <TempComboButton buttons={children} />
        ) : (
          <ButtonSet className={`${blockClass}--button-container`}>
            {children}
          </ButtonSet>
        )}
      </div>
    </ReactResizeDetector>
  );
};

ButtonSetWithOverflow.propTypes = {
  /**
   * children of the button set
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]), // expects action bar item as array or in fragment,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * onResize reports maxSize on resize
   */
  onWidthChange: PropTypes.func,
};

ButtonSetWithOverflow.defaultProps = {};
