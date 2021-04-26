//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg, carbon } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import unwrapIfFragment from '../../global/js/utils/unwrap-if-fragment';

const blockClass = `${pkg.prefix}--temp-combo-button`;

export const TempComboButton = ({ buttons, className, size }) => {
  const internalId = useRef(uuidv4());
  const [buttonArray, setButtonArray] = useState([]);

  useEffect(() => {
    const newButtonArray = unwrapIfFragment(buttons);

    console.log('hi');

    setButtonArray(newButtonArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setButtonArray, buttons]);

  console.log('hiya');

  return (
    <OverflowMenu
      className={cx([className, `${blockClass}`])}
      menuOptionsClass={`${blockClass}__options`}
      renderIcon={() => (
        <div
          className={cx([
            `${blockClass}__trigger`,
            `${carbon.prefix}--btn`,
            `${carbon.prefix}--btn--primary`,
            `${carbon.prefix}--btn--${size}`,
          ])}>
          Page actions
        </div>
      )}
      data-test={buttonArray.length}>
      {buttonArray.reverse().map(({ label, onClick, ...rest }, index) => (
        <OverflowMenuItem
          itemText={label}
          key={`temp-combo-button-${internalId}-${index}`}
          onClick={onClick}
          {...rest}
        />
      ))}
    </OverflowMenu>
  );
};

TempComboButton.propTypes = {
  /**
   * Button shape things for us to render.
   */
  buttons: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node,
        onClick: PropTypes.func,
      })
    ),
  ]), // expects action bar item as array or in fragment,
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * Specify the size of the button, from a list of available sizes.
   * For `default` buttons, this prop can remain unspecified.
   */
  size: PropTypes.oneOf(['default', 'field', 'small', 'sm', 'lg', 'xl']),
};

TempComboButton.defaultProps = {};
