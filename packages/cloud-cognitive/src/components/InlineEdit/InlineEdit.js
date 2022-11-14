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
 * this is a wrapper component that will allow us to support v1 and v2 versions of InlineEdit
 * in the V11 branch, v2 is the set by default.
 * if the user passes in the v1 feature flag the v1 version of the component will be rendered
 * since this is a temporary solution the named export should just remain InlineEdit unlike how
 * Card works as a base layer for Productive and Expressive cards.
 */

const componentName = 'InlineEdit';

export let InlineEdit = forwardRef(({ v1, ...rest }, ref) => {
  const props = {
    ...rest,
    ref,
  };
  if (v1 === true) {
    return <InlineEditV1 {...props} />;
  }

  return <InlineEditV2 {...props} />;
});

InlineEdit = pkg.checkComponentEnabled(InlineEdit, componentName);

InlineEdit.displayName = componentName;

InlineEdit.propTypes = {
  v1: PropTypes.bool,
};
