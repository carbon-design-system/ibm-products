/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import React, { useState } from 'react';
import { pkg } from '../../settings';
import cx from 'classnames';
import { NumberInput, TextInput } from 'carbon-components-react';

const blockClass = `${pkg.prefix}--datagrid`;

const useInlineEdit = (hooks) => {
  const [toggle, setToggle] = useState(false);
  //const [selectedCell, setSelectedCell] = useState('')

  // useEffect(() => {
  //   // if(clickedCell.row.id === cell.row.id && clickedCell.column.id === cell.column.id){
  //   //   setToggle(true);
  //   // }

  //   //console.log(clickedCell && clickedCell.row.id, clickedCell.column.id)
  // }),[clickedCell.row.id, clickedCell.column.id,];

  const addInlineEdit = (props, { cell, instance }) => {
    const { inlineEditOptions, rowSize } = instance;
    const onClick = (clickedCell) => {
      if (
        clickedCell.row.id === cell.row.id &&
        clickedCell.column.id === cell.column.id
      ) {
        setToggle(true);
      }
    };

    const editOptionItem = inlineEditOptions
      .filter((obj) => obj.id === cell.column.id)
      .map((obj) => obj.editType)
      .toString();
    return [
      props,
      {
        className: cx({
          [`${blockClass}__inline-edit-cell`]: true,
          [`${blockClass}__cell`]: true,
        }),
        children: (
          <div className={`${blockClass}__inline-edit-contents`}>
            {editOptionItem &&
              editOptionItem === 'text' &&
              (toggle && toggle ? (
                <TextInput
                  id="text-input-1"
                  type="text"
                  size={rowSize ? rowSize : 'lg'}
                  value={cell.value}
                />
              ) : (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <div
                  onClick={() => {
                    onClick(cell);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {cell.value}
                </div>
              ))}
            {editOptionItem && editOptionItem === 'number' && (
              <NumberInput
                id={cell.column.id + '__' + cell.row.id}
                invalidText="Number is not valid"
                label=""
                size={rowSize ? rowSize : 'lg'}
                value={cell.value}
              />
            )}
            {!editOptionItem && (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div
                onClick={() => {
                  onClick(cell);
                }}
                role="button"
                tabIndex={0}
              >
                {cell.value}
                {console.log(toggle)}
              </div>
            )}
          </div>
        ),
      },
    ];
  };
  hooks.getCellProps.push(addInlineEdit);
  hooks.useInstance.push((instance) => {
    Object.assign(instance, {
      withInlineEdit: true,
    });
  });
};

export default useInlineEdit;
