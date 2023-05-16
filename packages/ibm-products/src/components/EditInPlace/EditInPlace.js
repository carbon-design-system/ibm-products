/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { pkg } from '../../settings';
import { InlineEditV1 } from '../InlineEditV1';
import { InlineEditV2 } from '../InlineEditV2';

/**
 * this is a wrapper component that will allow us to support the rename of InlineEdit to EditInPlace
 *
 * if the user passes in the v2 feature flag the v2 version of the component will be rendered
 * since this is a temporary solution the named export should just remain InlineEdit unlike how
 * Card works as a base layer for Productive and Expressive cards.
 */

const componentName = 'EditInPlace';

export let EditInPlace = forwardRef(({ v2, ...rest }, ref) => {
  const props = {
    ...rest,
    ref,
  };
  if (v2 === true) {
    return <InlineEditV2 {...props} />;
  }

  return <InlineEditV1 {...props} />;
});

EditInPlace = pkg.checkComponentEnabled(EditInPlace, componentName);

EditInPlace.displayName = componentName;

EditInPlace.propTypes = {
  v2: PropTypes.bool,
};
