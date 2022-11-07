import React, { useState, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { 
  ActionSet,
  Accordion,
  AccordionItem, 
  Button,
  Checkbox
} from 'carbon-components-react';
import { pkg } from '../../../../../settings';
import { Filter16 } from '@carbon/icons-react';
import { BATCH, INSTANT } from './constants';
import cx from 'classnames';
import { Search } from 'carbon-components-react';
import { children } from 'cheerio/lib/api/traversing';


const blockClass = `${pkg.prefix}--datagrid`;
const componentClass = `${blockClass}-filter-panel`;

const FilterPanelSkeleton = ({ title, updateMethod = BATCH, filterSections }) => {
    /** Refs */
    const filterPanelRef = useRef(null);
    
    /** State */
    const [open, setOpen] = useState(false);

    /** Memos */
    const showActionSet = useMemo(() => updateMethod === BATCH, [updateMethod]);
    
    /** Methods */
    const openPanel = () => setOpen(true);
    const closePanel = () => setOpen(false);

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
      console.log(filterSections)

    return (
        <div className={`${componentClass}__container`}>
          <Button
                kind="ghost"
                hasIconOnly
                tooltipPosition="bottom"
                renderIcon={Filter16}
                iconDescription={'Open filters'}
                onClick={open ? closePanel : openPanel}
                className={cx(`${componentClass}__trigger`, {
                [`${componentClass}__trigger--open`]: open,
                })}
            />
            <div
                ref={filterPanelRef}
                className={cx(componentClass, {
                  [`${componentClass}--open`]: open,
                  [`${componentClass}--batch`]: showActionSet,
                  [`${componentClass}--instant`]: !showActionSet,
                })}
            >
                <h1>{title}</h1>
                <Search labelText="Filter search" placeHolderText="Find filters" light={true} size='sm'></Search>
                <div className={`${componentClass}__inner-container`}>
                    {filterSections.map((category) => {
                      return (
                        <>
                        <div className={`${componentClass}__category-title`}>{category.title}</div>
                        <Accordion>
                        {category.subsections.map((subsection) => {
                          return (
                            <AccordionItem title={subsection.title} key={subsection.title}>
                              {subsection.children}
                            </AccordionItem>
                          )
                        })}
                        </Accordion>
                        </>
                      )
                    })}
                </div>
                {renderActionSet()}
            </div>
        </div>
    );
}

FilterPanelSkeleton.propTypes = {
    title: PropTypes.string,
    updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
  };

export default FilterPanelSkeleton;