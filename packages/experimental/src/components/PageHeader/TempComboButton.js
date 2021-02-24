//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkgPrefix, carbonPrefix } from '../../global/js/settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import unwrapIfFragment from '../../global/js/utils/unwrap-if-fragment';

const blockClass = `${pkgPrefix}-temp-combo-button`;

export const TempComboButton = ({ buttons, className }) => {
  const internalId = useRef(uuidv4());
  const [buttonArray, setButtonArray] = useState([]);

  useEffect(() => {
    const newButtonArray = unwrapIfFragment(buttons);

    setButtonArray(newButtonArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setButtonArray, buttons]);

  return (
    <OverflowMenu
      className={cx([className, `${blockClass}`])}
      menuOptionsClass={`${blockClass}--options`}
      renderIcon={() => (
        <div
          className={cx([
            `${blockClass}--trigger`,
            `${carbonPrefix}--btn`,
            `${carbonPrefix}--btn--primary`,
            `${carbonPrefix}--btn--field`,
          ])}>
          Page actions
        </div>
      )}
      data-test={buttonArray.length}>
      {buttonArray.reverse().map((button, index) => (
        <OverflowMenuItem
          itemText={button.props.children}
          key={`temp-combo-button-${internalId}-${index}`}
        />
      ))}
    </OverflowMenu>
  );
};

TempComboButton.propTypes = {
  /**
   * children of the action bar (action bar items)
   */
  buttons: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]), // expects action bar item as array or in fragment,
  /**
   * className
   */
  className: PropTypes.string,
};

TempComboButton.defaultProps = {};
