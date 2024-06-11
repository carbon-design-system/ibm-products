/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  ForwardedRef,
  ReactNode,
  forwardRef,
  isValidElement,
} from 'react';
import PropTypes from 'prop-types';

interface DatagridSlugProps {
  slug?: ReactNode;
}

interface NormalizedSlugProps {
  size?: string;
  ref?: ForwardedRef<HTMLDivElement>;
}

export const DatagridSlug = forwardRef(
  ({ slug }: DatagridSlugProps, ref: ForwardedRef<HTMLDivElement>) => {
    if (slug && isValidElement(slug)) {
      const normalizedSlug = React.cloneElement(slug, {
        size: 'mini',
        ref,
      } as NormalizedSlugProps);
      return normalizedSlug;
    }
    return null;
  }
);

DatagridSlug.propTypes = {
  /**
   * Specify the AI slug to be displayed
   */
  slug: PropTypes.node,
};
