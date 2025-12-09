// cspell:disable

/**
 *
 * @param body selector for element that contains the items
 * @param child selector for the item elements
 * @returns void
 */

// it seems snapevent doesn't currently exist in typescript
// https://developer.mozilla.org/en-US/docs/Web/API/SnapEvent
interface SnapEvent extends Event {
  snapTargetInline: Element;
}

export function snapScroll(body: string, child: string) {
  const bodyEl = document.querySelector(body);

  if (!bodyEl) {
    return;
  }

  const styleElement = document.createElement('style');
  styleElement.textContent = `
  .snappy {
    display: flex;
    flex: none;
    overflow: scroll;
    scroll-snap-type: x mandatory;
    width: 100%;
  }

  .snappy-elm {
    scroll-snap-align: start;
    flex: none;
    width: 100%;
  }
`;
  document.head.appendChild(styleElement);

  bodyEl.classList.add('snappy');

  const scrollsnapSupported = 'onscrollsnapchange' in bodyEl;
  const children = bodyEl.querySelectorAll(child);

  if (children.length > 0) {
    children.forEach((el) => {
      el.classList.add('snappy-elm');
    });
  }

  if (scrollsnapSupported) {
    bodyEl.addEventListener('scrollsnapchange', (event) => {
      const snapevent = event as SnapEvent;
      const currentlySnapped = document.querySelector('.snappy-selection');

      if (currentlySnapped) {
        currentlySnapped.classList.remove('snappy-selection');
      }

      snapevent.snapTargetInline.classList.add('snappy-selection');
    });
  } else {
    const handler: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('snappy-selection', entry.isIntersecting);
      });
    };
    let observer;
    const createObserver = () => {
      if (observer) {
        observer.disconnect();
      }
      observer = new IntersectionObserver(handler, {
        root: bodyEl,
        threshold: 1,
      });
      children.forEach((child) => {
        observer.observe(child);
      });
    };
    createObserver();
  }
}

function getFocusedItem() {
  return document.querySelector('.snappy-selection');
}

export function scrollNext() {
  const item = getFocusedItem();
  item?.nextElementSibling?.scrollIntoView({
    behavior: 'smooth',
    inline: 'start',
  });
}

export function scrollPrevious() {
  const item = getFocusedItem();
  item?.previousElementSibling?.scrollIntoView({
    behavior: 'smooth',
    inline: 'start',
  });
}
