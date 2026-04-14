/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Theme } from '@carbon/react';
import {
  preview__CoachmarkBeacon as CoachmarkBeacon,
  preview__Coachmark as Coachmark,
} from '@carbon/ibm-products';
import { initCarousel } from '@carbon/utilities';
import sampleImage from '../assets/sample-image.png';

//fetching theme
function useCarbonTheme() {
  const [themeValue, setThemeValue] = useState(
    () => document.documentElement.getAttribute('data-carbon-theme') || 'g10'
  );

  useEffect(() => {
    const target = document.documentElement;

    // function to read the current theme
    const readTheme = () => {
      const newTheme = target.getAttribute('data-carbon-theme') || 'g10';
      setThemeValue((prev) => (prev !== newTheme ? newTheme : prev));
    };

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-carbon-theme'
        ) {
          readTheme();
        }
      }
    });

    observer.observe(target, {
      attributes: true,
      attributeFilter: ['data-carbon-theme'],
    });

    //fallback - check readTheme in every 200ms
    const interval = setInterval(readTheme, 200);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return themeValue;
}

export const CoachmarkOverlayElementsExample = (args) => {
  const carbonTheme = useCarbonTheme();
  const [isOpen, setIsOpen] = useState(true);

  const [currentViewIndex, setCurrentViewIndex] = useState(-1);
  const [lastViewIndex, setLastViewIndex] = useState(-1);

  const carouselContainerRef = useRef(null);
  const carouselInit = useRef(null);

  const items = [
    {
      id: 1,
      title: 'Example 1',
      text: 'This is an example description.',
    },
    {
      id: 2,
      title: 'Example 2',
      text: 'This is an example description.',
    },
  ];

  const handleClose = () => {
    setIsOpen(false);
    carouselInit?.current?.reset();
  };

  const handleBeaconClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (carouselContainerRef && carouselContainerRef.current) {
      carouselInit.current = initCarousel(carouselContainerRef.current, {
        onViewChangeStart: onViewChangeStart,
        onViewChangeEnd: onViewChangeEnd,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carouselInit, isOpen]);

  const onViewChangeStart = () => {};
  const onViewChangeEnd = (options) => {
    handleViewStackUpdate(options);
  };

  const handleViewStackUpdate = useCallback(({ currentIndex, lastIndex }) => {
    setCurrentViewIndex(currentIndex);
    setLastViewIndex(lastIndex);
  }, []);

  const onNext = () => {
    carouselInit?.current?.next();
  };
  const onPrev = () => {
    carouselInit?.current?.prev();
  };

  return (
    <Theme theme={carbonTheme}>
      <Coachmark
        position={{ x: 151, y: 155 }}
        open={isOpen}
        onClose={handleClose}
        align="top"
        {...args}
      >
        <CoachmarkBeacon
          label="Show information"
          buttonProps={{ onClick: handleBeaconClick, id: 'CoachmarkBtn' }}
        ></CoachmarkBeacon>
        <Coachmark.Content highContrast={true}>
          <Coachmark.Content.Header closeIconDescription="Close"></Coachmark.Content.Header>
          <Coachmark.Content.Body>
            <div>
              <img
                src={sampleImage}
                alt="Example illustration"
                style={{
                  width: '100%',
                  marginBottom: '1rem',
                }}
              />
            </div>
            <div ref={carouselContainerRef} className="exampleCarouselWrapper">
              {items.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className={'carouselControlWrapper__footer'}>
              <div className={'carouselControlWrapper--controls-progress'}>
                {items.map((item, index) => {
                  if (
                    carouselInit.current?.getActiveItem?.()?.index === index
                  ) {
                    return (
                      <span key={item.id}>
                        {`${carouselInit.current?.getActiveItem?.()?.index + 1} / ${items.length}`}
                      </span>
                    );
                  }
                })}
              </div>
              <div className={'carouselControlWrapper--buttons'}>
                {currentViewIndex !== 0 && (
                  <Button
                    size="sm"
                    iconDescription="Previous"
                    kind="ghost"
                    onClick={onPrev}
                  >
                    Back
                  </Button>
                )}

                {lastViewIndex !== currentViewIndex ? (
                  <Button size="sm" iconDescription="Next" onClick={onNext}>
                    Next
                  </Button>
                ) : (
                  <Button size="sm" onClick={handleClose}>
                    Done
                  </Button>
                )}
              </div>
            </div>
          </Coachmark.Content.Body>
        </Coachmark.Content>
      </Coachmark>
    </Theme>
  );
};
