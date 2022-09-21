/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React from 'react';
import cx from 'classnames';
import {
  IconSkeleton,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--datagrid`;

const useActionsColumn = (hooks) => {
  const useAttachActionsOnInstance = (instance) => {
    const { rowActions, isFetching, selectedFlatRows } = instance;

    if (rowActions && Array.isArray(rowActions)) {
      const addActionsMenu = (props, cellData) => {
        const { cell } = cellData;
        const { row, column } = cell;
        if (column.isAction) {
          return [
            props,
            {
              children: (
                <div className={`${blockClass}__actions-column-contents`}>
                  {isFetching && (
                    <IconSkeleton
                      className={`${blockClass}__actions-column-loading`}
                    />
                  )}
                  {!isFetching && rowActions.length <= 2 && (
                    <div
                      className={`${blockClass}_actions-column`}
                      style={{ display: 'flex' }}
                    >
                      {rowActions.map((action, index) => {
                        const { id, itemText, onClick, icon, ...rest } = action;
                        const selectedRowId = selectedFlatRows?.filter((item) =>
                          item.id === row.id ? item.id : null
                        );
                        return (
                          <div
                            className={cx(
                              `${blockClass}__actions-column-button`,
                              {
                                [`${blockClass}__disabled-row-action-button`]:
                                  selectedFlatRows &&
                                  selectedFlatRows.length &&
                                  selectedRowId &&
                                  selectedRowId.length,
                              }
                            )}
                            key={`${itemText}__${index}`}
                          >
                            <OverflowMenu
                              {...rest}
                              renderIcon={icon}
                              hasIconOnly
                              light
                              iconDescription={itemText}
                              kind="ghost"
                              className={cx({
                                [`${blockClass}__disabled-row-action`]:
                                  selectedFlatRows &&
                                  selectedFlatRows.length &&
                                  selectedRowId &&
                                  selectedRowId.length,
                              })}
                              onClick={(e) => {
                                if (
                                  selectedFlatRows &&
                                  selectedFlatRows.length &&
                                  selectedRowId &&
                                  selectedRowId.length
                                ) {
                                  // Row actions should be disabled if row is selected and batchActions toolbar is active
                                  return;
                                }
                                e.stopPropagation();
                                onClick(id, row, e);
                              }}
                            ></OverflowMenu>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {!isFetching && rowActions.length > 2 && (
                    <div>
                      <OverflowMenu
                        size="sm"
                        light
                        flipped
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        {rowActions.map((action) => {
                          const {
                            id,
                            onClick,
                            shouldHideMenuItem,
                            shouldDisableMenuItem,
                            disabled,
                            ...rest
                          } = action;
                          const hidden =
                            typeof shouldHideMenuItem === 'function' &&
                            shouldHideMenuItem(row);
                          // shouldDisableMenuItem will override disabled because it's more specific
                          // if shouldDisableMenuItem doesn't exists, fall back to disabled
                          const isDisabledByRow =
                            typeof shouldDisableMenuItem === 'function'
                              ? shouldDisableMenuItem(row)
                              : disabled;
                          if (hidden) {
                            return null;
                          }
                          return (
                            <OverflowMenuItem
                              {...rest}
                              disabled={isDisabledByRow}
                              onClick={(e) => {
                                e.stopPropagation();
                                onClick(id, row, e);
                              }}
                              key={id}
                            />
                          );
                        })}
                      </OverflowMenu>
                    </div>
                  )}
                </div>
              ),
              className: cx({
                [`${blockClass}__actions-column-cell`]: true,
                [`${blockClass}__cell`]: true,
              }),
              style: {
                width: 96,
              },
            },
          ];
        }
        return [props];
      };
      hooks.getCellProps.push(addActionsMenu);
    }
  };
  hooks.useInstance.push(useAttachActionsOnInstance);
};

export default useActionsColumn;
