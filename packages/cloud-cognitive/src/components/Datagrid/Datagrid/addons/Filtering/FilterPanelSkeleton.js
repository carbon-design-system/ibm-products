import React, { useState, useRef, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ActionSet, Button } from 'carbon-components-react';
import { pkg } from '../../../../../settings';
import { Filter16 } from '@carbon/icons-react';
import { BATCH, INSTANT } from './constants';
import cx from 'classnames';
import { Search } from 'carbon-components-react';


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
            >
                <h1>{title}</h1>
                <Search labelText="Filter search" placeHolderText="Find filters" light={false} size='sm'></Search>
                <div className={`${componentClass}__inner-container`}>
                    {filterSections.map((category) => {
                        <h3>{category.title}</h3>
                        {category.subsections}
                    })}
                </div>
                {renderActionSet}
            </div>
        </div>
    );
}

FilterPanelSkeleton.propTypes = {
    title: PropTypes.string,
    updateMethod: PropTypes.oneOf([BATCH, INSTANT]),
  };

export default FilterPanelSkeleton;