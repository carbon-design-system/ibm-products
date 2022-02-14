//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { Tag, Accordion, AccordionItem } from 'carbon-components-react';
import PropTypes from 'prop-types';
import { NoDataEmptyState } from '../../components/EmptyStates/NoDataEmptyState';
import { pkg } from '../../settings';
const componentName = 'AddSelectSidebar';

export let AddSelectSidebar = ({
  influencerTitle,
  items,
  multiSelection,
  noSelectionDescription,
  noSelectionTitle,
}) => {
  const blockClass = `${pkg.prefix}--add-select__sidebar`;

  // utility to flatten the list of items and their children into a single searchable array
  const flattenItems = (arr) =>
    arr.reduce((prev, cur) => {
      const { children, ...item } = cur;
      return prev.concat(item).concat(children ? flattenItems(children) : []);
    }, []);
  const flattenedItems = flattenItems(items);
  const sidebarItems = multiSelection.map((selectedId) =>
    flattenedItems.find((item) => item.id === selectedId)
  );

  return (
    <div className={blockClass}>
      <div className={`${blockClass}-header`}>
        <p className={`${blockClass}-title`}>{influencerTitle}</p>
        <Tag type="gray" size="sm">
          {multiSelection.length}
        </Tag>
      </div>
      {multiSelection.length > 0 ? (
        <Accordion align="start">
          {sidebarItems.map((item) => (
            <AccordionItem title={item.value} key={item.id}>
              {Object.keys(item).map((key) => (
                <div className={`${blockClass}-item`} key={key}>
                  <p className={`${blockClass}-item-header`}>{key}</p>
                  <p className={`${blockClass}-item-body`}>{item[key]}</p>
                </div>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className={`${blockClass}-body`}>
          <NoDataEmptyState
            subtitle={noSelectionDescription}
            title={noSelectionTitle}
            size="sm"
          />
        </div>
      )}
    </div>
  );
};

AddSelectSidebar.propTypes = {
  influencerTitle: PropTypes.string,
  items: PropTypes.array,
  multiSelection: PropTypes.array,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
};

AddSelectSidebar.displayName = componentName;
