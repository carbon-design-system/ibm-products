//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { idePrefix } from '../globals/js/settings';
//This function must be capable of rendering a graphic in multiple different formats:
// 1. if we have a render function, assume react component
// 2. if already a valid react element, just render it
// 3. If this was an object with imgSrc, imgAlt and class name we need to build an img component from them.
export const renderGraphic = (graphicStruct) => {
  // if we have a render function, assume react component
  if (graphicStruct.render && typeof graphicStruct.render === 'function') {
    return React.createElement(graphicStruct);
    // Otherwise, if already a valid react element, just render it
  } else if (React.isValidElement(graphicStruct)) {
    return graphicStruct;
  } else {
    return (
      <img
        src={graphicStruct.imgSrc}
        alt={graphicStruct.imgAlt}
        className={`${idePrefix}--home-image ${
          graphicStruct.imgClassName ? graphicStruct.imgClassName : ''
        }`}
      />
    );
  }
};
