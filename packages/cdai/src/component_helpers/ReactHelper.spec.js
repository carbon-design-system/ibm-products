//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import * as ReactHelper from './ReactHelper';
import React from 'react';

describe('ReactHelper', () => {
  it('creates a React element if graphicStruct has a render function', () => {
    const graphicStruct = React.createElement('div');
    expect(ReactHelper.renderGraphic(graphicStruct)).toEqual(<div />);
  });

  it('returns the graphic struct if it is a valid react element', () => {
    const GraphicStruct = () => {
      return <div />;
    };
    expect(ReactHelper.renderGraphic(<GraphicStruct />)).toEqual(
      <GraphicStruct />
    );
  });
  it('returns an image structure if no render function and not a valid element', () => {
    const graphicStruct = { imgSrc: '', imgAlt: '' };
    expect(ReactHelper.renderGraphic(graphicStruct)).toEqual(
      <img alt="" className="ide--home-image " src="" />
    );
  });
});
