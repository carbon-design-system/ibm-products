/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  // MutableRefObject, useEffect,
  useRef,
  // useState
} from 'react';
import PropTypes from 'prop-types';
// import {
//   TableToolbar,
//   // TableBatchActions,
//   // TableBatchAction,
//   // MenuButton,
//   // MenuItem,
// } from '@carbon/react/lib';
import { useResizeObserver } from '../../../global/js/hooks/useResizeObserver';
// import { pkg, carbon } from '../../../settings';
// import cx from 'classnames';
// import { handleSelectAllRowData } from './addons/stateReducer';
import { DataGridState } from '../types';

// const blockClass = `${pkg.prefix}--datagrid__table-toolbar`;

interface DatagridToolbarProps {
  ariaToolbarLabel?: string;
}

// const DatagridBatchActionsToolbar = (
//   datagridState: DataGridState,
//   width: number,
//   ref: MutableRefObject<any>
// ) => {
//   console.log(width);
//   const [displayAllInMenu, setDisplayAllInMenu] = useState(false);
//   const [initialListWidth, setInitialListWidth] = useState(null);
//   const [receivedInitialWidth, setReceivedInitialWidth] = useState(false);
//   const {
//     onSelectAllRows,
//     state: { selectedRowIds },
//     toggleAllRowsSelected,
//     toolbarBatchActions,
//     setGlobalFilter,
//     rows,
//     dispatch,
//     getRowId,
//     batchActionMenuButtonLabel,
//     translateWithIdBatchActions,
//   } = datagridState;
//   const batchActionMenuButtonLabelText = batchActionMenuButtonLabel ?? 'More';
//   const selectedKeys = Object.keys(selectedRowIds || {});
//   const totalSelected = selectedKeys.length;

//   console.log(
//     onSelectAllRows,
//     selectedRowIds,
//     toggleAllRowsSelected,
//     toolbarBatchActions,
//     setGlobalFilter,
//     rows,
//     dispatch,
//     getRowId,
//     batchActionMenuButtonLabel,
//     translateWithIdBatchActions,
//     displayAllInMenu,
//     batchActionMenuButtonLabelText
//   );

//   // Get initial width of batch actions container,
//   // used to measure when all items are put inside
//   // the ButtonMenu
//   useEffect(() => {
//     if (totalSelected === 1 && !receivedInitialWidth) {
//       const batchActionListWidth = ref?.current?.querySelector(
//         `.${carbon.prefix}--action-list`
//       ).offsetWidth;
//       setInitialListWidth(batchActionListWidth);
//       setReceivedInitialWidth(true);
//     }
//   }, [totalSelected, receivedInitialWidth, ref]);

//   useEffect(() => {
//     const summaryWidth = ref?.current.querySelector(
//       `.${carbon.prefix}--batch-summary`
//     ).offsetWidth;
//     if (width < summaryWidth + initialListWidth + 32) {
//       setDisplayAllInMenu(true);
//     } else {
//       setDisplayAllInMenu(false);
//     }
//   }, [width, ref, initialListWidth]);

//   // const getSelectedRowData = () => {
//   //   if (selectedKeys.length === 0) {
//   //     return [];
//   //   }
//   //   return selectedKeys.map((rowIndex) => {
//   //     const filteredRow = rows.filter(
//   //       (row) => row.index === parseInt(rowIndex)
//   //     );
//   //     return filteredRow.length ? filteredRow[0] : [];
//   //   });
//   // };

//   // Render batch actions in ButtonMenu
//   // const renderBatchActionOverflow = () => {
//   //   const menuClass = `${blockClass}__button-menu`;
//   //   const minWidthBeforeOverflowIcon = 380;
//   //   // Do not render ButtonMenu when there are 3 or less items
//   //   // and if there is enough available space to render all the items
//   //   if (
//   //     toolbarBatchActions &&
//   //     toolbarBatchActions?.length <= 3 &&
//   //     !displayAllInMenu
//   //   ) {
//   //     return;
//   //   }

//   //   const renderItem = (batchAction, index) => (
//   //     <MenuItem
//   //       key={`${batchAction.label}-${index}`}
//   //       label={batchAction.label}
//   //       onClick={(event) => onClickHandler(event, batchAction)}
//   //     />
//   //   );

//   //   return (
//   //     <MenuButton
//   //       label={batchActionMenuButtonLabelText}
//   //       className={cx([
//   //         menuClass,
//   //         {
//   //           [`${menuClass}-icon-only`]: width <= minWidthBeforeOverflowIcon,
//   //         },
//   //       ])}
//   //       tabIndex={totalSelected > 0 ? 0 : -1}
//   //       menuAlignment="bottom"
//   //     >
//   //       {toolbarBatchActions?.map((batchAction, index) => {
//   //         const hidden = index < 2 && !displayAllInMenu;
//   //         if (!hidden) {
//   //           return renderItem(batchAction, index);
//   //         }
//   //       })}
//   //     </MenuButton>
//   //   );
//   // };

//   // const onClickHandler = (event, batchAction) => {
//   //   batchAction.onClick(getSelectedRowData(), event);
//   //   if (batchAction.type === 'select_all') {
//   //     toggleAllRowsSelected(true);
//   //   }
//   // };

//   // const onCancelHandler = () => {
//   //   handleSelectAllRowData({
//   //     dispatch,
//   //     rows: [],
//   //     getRowId,
//   //     isChecked: false,
//   //     indeterminate: undefined,
//   //   });
//   //   toggleAllRowsSelected(false);
//   //   setGlobalFilter?.(null);
//   // };

//   // const onSelectAllHandler = () => {
//   //   toggleAllRowsSelected(true);
//   //   onSelectAllRows?.(true);
//   //   handleSelectAllRowData({
//   //     dispatch,
//   //     rows,
//   //     getRowId,
//   //     indeterminate: undefined,
//   //     isChecked: undefined,
//   //   });
//   // };

//   // Only display the first two batch actions, the rest are
//   // displayed inside of the ButtonMenu if there are more than
//   // 3 batch actions
//   return (
//     <div>toolbar 1</div>
//     // <TableBatchActions
//     //   shouldShowBatchActions={totalSelected > 0}
//     //   totalSelected={totalSelected}
//     //   onCancel={onCancelHandler}
//     //   onSelectAll={onSelectAllHandler}
//     //   totalCount={rows && rows.length}
//     //   translateWithId={translateWithIdBatchActions}
//     // >
//     //   {!displayAllInMenu &&
//     //     toolbarBatchActions &&
//     //     toolbarBatchActions?.map((batchAction, index) => {
//     //       if (
//     //         (index < 2 && toolbarBatchActions.length > 3) ||
//     //         (index < 3 && toolbarBatchActions.length <= 3)
//     //       ) {
//     //         return (
//     //           <TableBatchAction
//     //             key={`${batchAction.label}-${index}`}
//     //             renderIcon={batchAction.renderIcon}
//     //             onClick={(event) => onClickHandler(event, batchAction)}
//     //             iconDescription={batchAction.label}
//     //             tabIndex={totalSelected > 0 ? 0 : -1}
//     //           >
//     //             {batchAction.label}
//     //           </TableBatchAction>
//     //         );
//     //       }
//     //     })}
//     //   {renderBatchActionOverflow()}
//     // </TableBatchActions>
//   );
// };

const DatagridToolbar = ({
  ariaToolbarLabel,
  ...datagridState
}: DatagridToolbarProps & DataGridState) => {
  const ref = useRef(null);
  const { width } = useResizeObserver(ref);
  const { DatagridActions, DatagridBatchActions, batchActions, rowSize } =
    datagridState;
  const getRowHeight = rowSize || 'lg';
  console.log(ariaToolbarLabel, width, DatagridBatchActions, getRowHeight);

  return batchActions && DatagridActions ? (
    <div>DatagridToolbar down</div>
  ) : //   <div
  //     ref={ref}
  //     className={cx([blockClass, `${blockClass}--${getRowHeight}`])}
  //   >
  //     <TableToolbar aria-label={ariaToolbarLabel}>
  //       {DatagridActions && <DatagridActions {...datagridState} />}
  //       {DatagridBatchActionsToolbar?.(datagridState, width, ref)}
  //     </TableToolbar>
  //   </div>
  // ) : DatagridActions ? (
  //   <div className={blockClass}>
  //     <TableToolbar aria-label={ariaToolbarLabel}>
  //       {DatagridActions && <DatagridActions {...datagridState} />}
  //       {DatagridBatchActions && DatagridBatchActions(datagridState)}
  //     </TableToolbar>
  //   </div>
  null;
};

DatagridToolbar.propTypes = {
  ariaToolbarLabel: PropTypes.string,
};

export default DatagridToolbar;
