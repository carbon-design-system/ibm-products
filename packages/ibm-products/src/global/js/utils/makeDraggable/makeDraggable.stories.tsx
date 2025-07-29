/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
import { makeDraggable } from './makeDraggable';
import './_storybook-styles.scss';
import mdx from './makeDraggable.mdx';
import { Button, Popover, PopoverContent } from '@carbon/react';
import { Close, Draggable } from '@carbon/react/icons';

export default {
  title: 'Utilities/makeDraggable',
  parameters: {
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
  tags: ['autodocs'],
};

const DraggableDiv = () => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (dialogRef.current && headerRef.current && dragRef.current) {
      makeDraggable(dialogRef.current, headerRef.current, dragRef.current);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogRef.current, headerRef.current, dragRef.current]);

  return (
    <div className="mt-10 flex justify-center">
      <div ref={dialogRef} className="draggable__div">
        <div ref={headerRef} className="draggable__div-header">
          <header ref={headerRef} className={`div-header`}>
            <Button kind="ghost" ref={dragRef} className="drag-icon-div">
              <Draggable />
            </Button>
          </header>
        </div>
        <div className="draggable__div-body">
          <p>This server has 150 GB of block storage remaining.</p>
        </div>
      </div>
    </div>
  );
};

const DraggablePopoverTemplate = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current && headerRef.current && dragRef.current) {
      const dragContainer = dialogRef.current.querySelector('.cds--popover');
      if (dragContainer instanceof HTMLElement) {
        dragContainer.style.transform = 'none';
        dragContainer.style.left = '0px';
        dragContainer.style.top = '0px';
        makeDraggable(dragContainer, headerRef.current, dragRef.current);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, dialogRef.current, dragRef.current]);
  return (
    <div className="mt-10 flex justify-center">
      <Popover open={isOpen} ref={dialogRef} className="popover">
        <Button
          aria-expanded={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Toggle
        </Button>

        <PopoverContent className="popover-content">
          <header ref={headerRef} className={`popover-header popover-title`}>
            <Button
              kind="ghost"
              ref={dragRef}
              className="drag-icon"
              onClick={() => console.log('clicked')}
            >
              <Draggable />
            </Button>
            <Button
              kind="ghost"
              onClick={() => setIsOpen(false)}
              className="close-icon"
            >
              <Close />
            </Button>
          </header>
          <p className="heading"> Available storage</p>
          <p className="popover-details">
            This server has 150 GB of block storage remaining.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export const DraggableCustomDiv = DraggableDiv.bind({});

export const DraggablePopover = DraggablePopoverTemplate.bind({});
