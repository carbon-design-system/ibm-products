//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { idAttribute } from '../../../component_helpers/IDHelper';
import { idePrefix } from '../../../globals/js/settings';
const { prefix } = settings;

const IdePageContent = ({ bleedClassName, children, className }) => {
  let pageContentWrapper = (
    <div
      {...idAttribute(`IdePageContent-container`)}
      className={`${className} ${idePrefix}-page-content-use-width ${prefix}--grid ${idePrefix}--content-alignment`}
    >
      {children}
    </div>
  );

  return bleedClassName ? (
    <div
      {...idAttribute(`IdePageContent-bleed-container`)}
      className={`${idePrefix}-page-content-use-width ${bleedClassName}`}
    >
      {pageContentWrapper}
    </div>
  ) : (
    pageContentWrapper
  );
};

IdePageContent.defaultProps = {
  className: '',
};

IdePageContent.propTypes = {
  /** bleedClassName. If your content required a bleed effect, provide a class name here (with your desired background colour) to apply this effect */
  bleedClassName: PropTypes.string,
  /** children. Standard prop, required to render content inside this component/take advantage of the provided grid and alignment classes */
  children: PropTypes.node,
  /** className. Append your own css class to the grid if required */
  className: PropTypes.string,
};

export default IdePageContent;
