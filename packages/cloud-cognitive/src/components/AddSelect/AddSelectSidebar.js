//
// Copyright IBM Corp. 2022
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { Tag, Accordion, AccordionItem, Button } from 'carbon-components-react';
import { SubtractAlt32 } from '@carbon/icons-react';
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
  removeIconDescription,
  setMultiSelection,
}) => {
  const blockClass = `${pkg.prefix}--add-select__sidebar`;

  const handleItemRemove = (id) => {
    const newSelections = multiSelection.filter((v) => v !== id);
    setMultiSelection(newSelections);
  };

  const sidebarItems = multiSelection.map((selectedId) =>
    items.find((item) => item.id === selectedId)
  );

  const getTitle = ({ title, subtitle, id }) => (
    <div className={`${blockClass}-accordion-title`}>
      <div className={`${blockClass}-selected-item`}>
        <p className={`${blockClass}-selected-item-title`}>{title}</p>
        <p className={`${blockClass}-selected-item-subtitle`}>{subtitle}</p>
      </div>
      <Button
        renderIcon={SubtractAlt32}
        iconDescription={removeIconDescription}
        hasIconOnly
        onClick={() => handleItemRemove(id)}
        kind="ghost"
        className={`${blockClass}-item-remove-button`}
      />
    </div>
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
            <AccordionItem title={getTitle(item)} key={item.id}>
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
  removeIconDescription: PropTypes.string,
  setMultiSelection: PropTypes.func,
};

AddSelectSidebar.displayName = componentName;
