//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { Tag } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
const componentName = 'AddSelectSidebar';

export let AddSelectSidebar = ({
  influencerTitle,
  multiSelection,
  noSelectionDescription,
  noSelectionTitle,
}) => {
  const blockClass = `${pkg.prefix}--add-select__influencer`;
  return (
    <div className={`${blockClass}`}>
      <div className={`${blockClass}-header`}>
        <p className={`${blockClass}-title`}>{influencerTitle}</p>
        <Tag type="gray" size="sm">
          {multiSelection.length}
        </Tag>
      </div>
      <div className={`${blockClass}-body`}>
        {multiSelection.length > 0 ? (
          multiSelection.map((item) => <p key={item}>{item}</p>)
        ) : (
          <NoDataEmptyState
            subtitle={noSelectionDescription}
            title={noSelectionTitle}
            size="sm"
          />
        )}
      </div>
    </div>
  );
};

AddSelectSidebar.propTypes = {
  influencerTitle: PropTypes.string,
  multiSelection: PropTypes.array,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
};

AddSelectSidebar.displayName = componentName;
