import React, { useState, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  ActionSet,
  Accordion,
  AccordionItem,
} from 'carbon-components-react';
import { pkg } from '../../../../../settings';
import { BATCH, INSTANT } from './constants';
import cx from 'classnames';
import { Close32 } from '@carbon/icons-react';
import { Search, Button } from 'carbon-components-react';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filterLeftPanel`;

const FilterLeftPanel = ({ title, updateMethod = BATCH, filterSections, open}) => {
  /** Refs */
  const filterLeftPanelRef = useRef(null);

  /** State */
  const [panelOpen, setPanelOpen] = useState(open);

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Methods */
  const openPanel = () => setPanelOpen(true);
  const closePanel = () => setPanelOpen(false);

  const renderActionSet = useCallback(() => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: 'Apply',
              onClick: function noRefCheck() {},
            },
            {
              key: 3,
              kind: 'secondary',
              label: 'Cancel',
              onClick: closePanel,
            },
          ]}
          size="md"
        />
      )
    );
  }, [showActionSet]);
  console.log(filterSections);

  return (
    <div className={`${componentClass}__container`}>
      <div
        ref={filterLeftPanelRef}
        className={cx(componentClass, {
          [`${componentClass}--open`]: panelOpen,
          [`${componentClass}--batch`]: showActionSet,
          [`${componentClass}--instant`]: !showActionSet,
        })}
      >
        <div className={`${componentClass}__titleAndClose`}>
          <h1 className={`${componentClass}__title`}>{title}</h1>
          <Button hasIconOnly renderIcon={Close32} iconDescription='button-chan' kind='ghost'/>
        </div>
        <Search
          labelText="Filter search"
          placeHolderText="Find filters"
          light={true}
          size="sm"
        ></Search>
        <div className={`${componentClass}__inner-container`}>
          {filterSections.map((category) => {
            return (
              <>
                <div className={`${componentClass}__category-title`}>
                  {category.title}
                </div>
                <Accordion>
                  {category.subsections.map((subsection) => {
                    return (
                      <AccordionItem
                        title={subsection.title}
                        key={subsection.title}
                      >
                        {subsection.children}
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </>
            );
          })}
        </div>
        {/* {renderActionSet()} */}
      </div>
    </div>
  );
};

FilterLeftPanel.propTypes = {
  filterSections: PropTypes.array,
  open: PropTypes.bool,
  title: PropTypes.string,
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
};

export default FilterLeftPanel;