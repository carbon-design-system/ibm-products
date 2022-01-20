//
// Copyright IBM Corp. 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  StructuredListRow,
  StructuredListWrapper,
  StructuredListBody,
  StructuredListCell,
  // StructuredListInput,
  TextInput,
  Tag,
} from 'carbon-components-react';
import { Tearsheet, TearsheetNarrow } from '../../components/Tearsheet';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
const componentName = 'AddSelect';

export let AddSelect = forwardRef(
  (
    {
      actions,
      className,
      description,
      influencerTitle,
      inputPlaceholder,
      items,
      itemsLabel,
      multi,
      noSelectionDescription,
      noSelectionTitle,
      open,
      title,
      ...rest
    },
    ref
  ) => {
    const blockClass = `${pkg.prefix}--add-select`;

    const [selected] = useState(0);

    const commonTearsheetProps = {
      open,
      title,
      actions,
      description,
      closeIconDescription: 'temp description',
    };

    const influencer = (
      <div className={`${blockClass}__influencer`}>
        <div className={`${blockClass}__influencer-header`}>
          <p className={`${blockClass}__influencer-title`}>{influencerTitle}</p>
          <Tag type="gray" size="sm">
            {selected}
          </Tag>
        </div>
        <div className={`${blockClass}__influencer-body`}>
          {selected > 0 ? (
            <p>content</p>
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

    const body = (
      <>
        <div className={`${blockClass}__header`}>
          <TextInput
            id="temp-id"
            labelText="temp label"
            placeholder={inputPlaceholder}
          />
          <div className={`${blockClass}__items-label-container`}>
            <p className={`${blockClass}__items-label`}>{itemsLabel}</p>
            <Tag type="gray" size="sm">
              {items.length}
            </Tag>
          </div>
        </div>
        <StructuredListWrapper
          selection
          className={`${blockClass}__selections`}
        >
          <StructuredListBody>
            {items.map((item) => (
              <StructuredListRow key={item.id}>
                <StructuredListCell>
                  <p>{item.label}</p>
                </StructuredListCell>
              </StructuredListRow>
            ))}
          </StructuredListBody>
        </StructuredListWrapper>
      </>
    );

    return (
      <div ref={ref} className={cx(className, blockClass)} {...rest}>
        {multi ? (
          <Tearsheet
            {...commonTearsheetProps}
            influencer={multi && influencer}
            influencerPosition="right"
          >
            {body}
          </Tearsheet>
        ) : (
          <TearsheetNarrow {...commonTearsheetProps}>{body}</TearsheetNarrow>
        )}
      </div>
    );
  }
);

AddSelect.propTypes = {
  actions: PropTypes.array,
  className: PropTypes.string,
  description: PropTypes.string,
  influencerTitle: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  items: PropTypes.array,
  itemsLabel: PropTypes.string,
  multi: PropTypes.bool,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
  open: PropTypes.bool,
  title: PropTypes.string,
};

AddSelect.defaultProps = {
  items: [],
};

AddSelect.displayName = componentName;
