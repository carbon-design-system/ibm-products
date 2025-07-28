/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Makes a given element draggable using a handle element.
 * @param el - The HTML element to move.
 * @param handle - Optional HTML element to initiate the drag (e.g., header).
 * @param focusableInHandle - Optional HTML element to focus on drag for keyboard interaction (e.g., Drag Icon).
 */
export function makeDraggable(
  el: HTMLElement,
  handle?: HTMLElement,
  focusableInHandle?: HTMLElement
): void {
  const computedStyle = window.getComputedStyle(el);
  if (handle) {
    handle.style.cursor = 'move';
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

  function onKeyDown(e: KeyboardEvent) {
    const distance = e.shiftKey ? 128 : 32;
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
    const isTargetInHandle = handle
      ? handle.contains(e.target as Node)
      : el.contains(e.target as Node);

    if (!isTargetInHandle) {return;}

    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
    isDragging = true;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, { once: true });
  }

  function onMouseMove(e: MouseEvent) {
    if (!isDragging) {return;}
    el.style.left = `${e.clientX - offsetX}px`;
    el.style.top = `${e.clientY - offsetY}px`;
  }

  function onMouseUp() {
    if (!isDragging) {return;}
    isDragging = false;

    document.removeEventListener('mousemove', onMouseMove);
  }
  if (handle) {
    handle.addEventListener('mousedown', onMouseDown);
  } else {
    el.addEventListener('mousedown', onMouseDown);
  }
  focusableInHandle?.addEventListener('keydown', onKeyDown);
}
