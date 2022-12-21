/* eslint-disable react/jsx-key */

import React, { useRef, useMemo, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  Button,
  Search,
} from 'carbon-components-react';
import { pkg } from '../../../../../settings';
import { BATCH, INSTANT } from './constants';
import cx from 'classnames';
import { Close32 } from '@carbon/icons-react';
import { ActionSet } from '../../../../ActionSet';
import { FilterContext } from '.';

const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-left-panel`;

const FilterLeftPanel = ({
  title,
  updateMethod = BATCH,
  filterSections,
  tableID,
}) => {
  /** Refs */
  const filterLeftPanelRef = useRef(null);
  const tableRef = useRef();

  /** Effects */
  useEffect(
    function setRefsOnMount() {
      tableRef.current = document.querySelector(`#${tableID} .bx--data-table`);
    },
    [tableID]
  );

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Context */
  const { leftPanelOpen, setLeftPanelOpen } = useContext(FilterContext);

  /** Methods */
  const closePanel = () => setLeftPanelOpen(false);

  const cancel = () => {
    closePanel();
  };

  const renderActionSet = () => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: 'Apply',
              onClick: null,
            },
            {
              key: 3,
              kind: 'secondary',
              label: 'Cancel',
              onClick: cancel,
            },
          ]}
          className={`${componentClass}__action-set`}
        />
      )
    );
  };

  const panelHeight = tableRef.current?.getBoundingClientRect().height;

  return (
    <div
      style={{
        height: panelHeight,
      }}
      className={cx(componentClass, `${componentClass}__container`, {
        [`${componentClass}--open`]: leftPanelOpen,
        [`${componentClass}--batch`]: showActionSet,
        [`${componentClass}--instant`]: !showActionSet,
      })}
      ref={filterLeftPanelRef}
    >
      <div className={`${componentClass}__heading`}>
        <h1 className={`${componentClass}__title`}>{title}</h1>
        <Button
          hasIconOnly
          renderIcon={Close32}
          iconDescription="button-chan"
          kind="ghost"
          onClick={cancel}
        />
      </div>
      <div className={`${componentClass}__search`}>
        <Search
          labelText="Filter search"
          placeHolderText="Find filters"
          light={true}
          size="sm"
        />
      </div>
      <div className={`${componentClass}__inner-container`}>
        {filterSections.map((category) => {
          return (
            <div className={`${componentClass}__category`}>
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
            </div>
          );
        })}
      </div>
      {renderActionSet()}
    </div>
  );
};

FilterLeftPanel.propTypes = {
  filterSections: PropTypes.array,
  open: PropTypes.bool,
  tableID: PropTypes.string.isRequired,
  title: PropTypes.string,
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
};

export default FilterLeftPanel;
