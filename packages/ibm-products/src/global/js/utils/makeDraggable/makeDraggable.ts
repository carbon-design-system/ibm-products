/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
interface DraggableProps {
  //The HTML element to move.
  el: HTMLElement;
  //Optional HTML element to initiate the drag (e.g., header).
  dragHandle?: HTMLElement;
  //Optional HTML element to focus on drag for keyboard interaction (e.g., Drag Icon).
  focusableDragHandle?: HTMLElement;
  //Optional pixel value that defines the distance to move when dragging with arrow keys. (default:8px)
  dragStep?: number;
  //Optional pixel value that defines the distance to move when dragging with shift+arrow keys. (default:32px)
  shiftDragStep?: number;
}
/**
 * Makes a given element draggable using a handle element.
 *@param draggable - object which accepts el and optional attributes handle,focusableInHandle,dragStep and shiftDragStep
 */

export function makeDraggable({
  el,
  dragHandle,
  focusableDragHandle,
  dragStep,
  shiftDragStep,
}: DraggableProps) {
  const computedStyle = window.getComputedStyle(el);
  if (dragHandle) {
    dragHandle.style.cursor = 'move';
    el.style.cursor = 'default';
  } else {
    el.style.cursor = 'move';
  }
  const position = computedStyle.position;

  if (
    position !== 'absolute' &&
    position !== 'relative' &&
    position !== 'fixed'
  ) {
    el.style.position = 'relative';
  }

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  const listeners: ((val: boolean) => void)[] = [];
  const notify = () => listeners.forEach((callback) => callback(isDragging));

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      isDragging = !isDragging;
      notify();
    }
    if (!isDragging) {return;}
    const distance = e.shiftKey ? (shiftDragStep ?? 32) : (dragStep ?? 8);
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        break;
      case 'ArrowLeft':
        el.style.left = `${el.offsetLeft - distance}px`;
        break;
      case 'ArrowRight':
        el.style.left = `${el.offsetLeft + distance}px`;
        break;
      case 'ArrowUp':
        el.style.top = `${el.offsetTop - distance}px`;
        break;
      case 'ArrowDown':
        el.style.top = `${el.offsetTop + distance}px`;
        break;
    }
  }

  function onMouseDown(e: MouseEvent) {
    const isTargetInHandle = dragHandle
      ? dragHandle.contains(e.target as Node)
      : el.contains(e.target as Node);

    if (!isTargetInHandle) {
      return;
    }

    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    isDragging = true;
    notify();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, { once: true });
  }

  function onMouseMove(e: MouseEvent) {
    if (!isDragging) {
      return;
    }
    el.style.left = `${e.clientX - offsetX}px`;
    el.style.top = `${e.clientY - offsetY}px`;
  }

  function onMouseUp() {
    if (!isDragging) {
      return;
    }
    isDragging = false;
    notify();

    document.removeEventListener('mousemove', onMouseMove);
  }
  if (dragHandle) {
    dragHandle.addEventListener('mousedown', onMouseDown);
  } else {
    el.addEventListener('mousedown', onMouseDown);
  }
  focusableDragHandle?.addEventListener('keydown', onKeyDown);

  return {
    get isDragging() {
      return isDragging;
    },
    subscribe(callback: (val: boolean) => void) {
      listeners.push(callback);
      return () => {
        const index = listeners.indexOf(callback);
        if (index > -1) {listeners.splice(index, 1);}
      };
    },
  };
}
