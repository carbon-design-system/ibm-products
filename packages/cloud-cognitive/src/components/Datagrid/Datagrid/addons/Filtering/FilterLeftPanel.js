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

const FilterLeftPanel = ({ title, updateMethod = BATCH, filterSections, tableID }) => {
  /** Refs */
  const filterLeftPanelRef = useRef(null);
  const tableRef = useRef();
  const headerRef = useRef();
  const buttonRef = useRef();
  const buttonSetRef = useRef();

  /** Effects */
  useEffect(function setRefsOnMount() {
    buttonRef.current = document.querySelector('button.filter-left-panel__button');
    tableRef.current = document.querySelector(`#${tableID} .bx--data-table`)
  }, [tableID])

  /** Memos */
  const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);

  /** Context */
  const { leftPanelOpen, setLeftPanelOpen } = useContext(FilterContext);
  
  /** Methods */
  const closePanel = () => setLeftPanelOpen(false);

  const onCancel = () => {
    closePanel();
  }

  const renderActionSet = () => {
    return (
      showActionSet && (
        <ActionSet
          actions={[
            {
              key: 1,
              kind: 'primary',
              label: "Apply",
              onClick: null,
              isExpressive: false,
            },
            {
              key: 3,
              kind: 'secondary',
              label: "Cancel",
              onClick: () => onCancel(),
              isExpressive: false,
            },
          ]}
          className={`${componentClass}__action-set`}
          size="md"
          buttonSize="md"
          style={{ padding: 0 }}
          ref={buttonSetRef}
        />
      )
    );
  };

  const tableHeight = tableRef.current?.getBoundingClientRect().height;
  const headerHeight = headerRef.current?.getBoundingClientRect().height;
  const buttonHeight = buttonRef.current?.getBoundingClientRect().height;
  const buttonSetHeight = buttonSetRef.current?.getBoundingClientRect().height;

  return (
    <div 
      className={cx(componentClass, `${componentClass}__container`, {
      [`${componentClass}--open`]: true,
      [`${componentClass}--batch`]: showActionSet,
      [`${componentClass}--instant`]: !showActionSet,
      })}
      ref={filterLeftPanelRef}
      >
        <div className={`${componentClass}__heading`} ref={headerRef}>
          <h1 className={`${componentClass}__title`}>{title}</h1>
          <Button hasIconOnly renderIcon={Close32} iconDescription='button-chan' kind='ghost'/>
        </div>
        <div className={`${componentClass}__search`}>
          <Search
            labelText="Filter search"
            placeHolderText="Find filters"
            light={true}
            size="sm"
          />
        </div>
        <div style={{ height: (tableHeight - headerHeight - buttonHeight - buttonSetHeight) }} className={`${componentClass}__inner-container`}>
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
  title: PropTypes.string,
  updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
};


export default FilterLeftPanel;
