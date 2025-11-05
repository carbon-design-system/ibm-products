/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Button, Theme, Link as CarbonLink } from '@carbon/react';
import styles from './_storybook-styles.scss?inline';
import DocsPage from './CoachmarkFixed.mdx';
import { Coachmark } from '../../components/Coachmark/next/Coachmark';
import { initCarousel } from '../../global/js/utils/carousel/carousel';
import { CoachmarkTagline } from '../../components/Coachmark/next/Coachmark/CoachmarkTagline/CoachmarkTagline';

export default {
  title: 'Patterns/Coachmark Fixed',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

//fetching theme
function useCarbonTheme() {
  const [themeValue, setThemeValue] = useState(() =>
    document.documentElement.getAttribute('data-carbon-theme')
  );

  useEffect(() => {
    const target = document.documentElement;

    // function to read the current theme
    const readTheme = () => {
      const newTheme = target.getAttribute('data-carbon-theme');
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

const CoachmarkFixedPattern = (args) => {
  const carbonTheme = useCarbonTheme();
  const [isOpen, setIsOpen] = useState(true);

  const [currentViewIndex, setCurrentViewIndex] = useState(-1);
  const [lastViewIndex, setLastViewIndex] = useState(-1);
  const [fixedIsVisible, setFixedIsVisible] = useState(false);

  const carouselContainerRef = useRef(null);
  const carouselInit = useRef(null);
  const nextRef = useRef(null);

  const items = [
    {
      id: 1,
      title: 'Hello World',
      text: 'Link opens in new tab.',
      button: (
        <CarbonLink href="https://www.ibm.com" target="_blank">
          {' '}
          Learn more
        </CarbonLink>
      ),
    },
    {
      id: 2,
      title: 'Hello World 2',
      text: 'Link opens on this page.',
      button: <CarbonLink href="https://www.ibm.com">Learn more</CarbonLink>,
    },
  ];

  useEffect(() => {
    setFixedIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setFixedIsVisible(false);
    carouselInit.current.reset();
  };

  useLayoutEffect(() => {
    setTimeout(() => nextRef.current?.focus(), 0);
  }, [isOpen]);

  const handleTaglineClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (carouselContainerRef && carouselContainerRef.current) {
      carouselInit.current = initCarousel(carouselContainerRef.current, {
        onViewChangeStart: onViewChangeStart,
        onViewChangeEnd: onViewChangeEnd,
      });
    }
  }, [carouselInit, isOpen]);

  const onViewChangeStart = () => {};
  const onViewChangeEnd = (options) => {
    handleViewStackUpdate(options);
  };

  const handleViewStackUpdate = useCallback(({ currentIndex, lastIndex }) => {
    console.log(currentIndex, lastIndex);

    setCurrentViewIndex(currentIndex);
    setLastViewIndex(lastIndex);
  }, []);

  const onNext = () => {
    carouselInit.current.next();
  };
  const onPrev = () => {
    carouselInit.current.prev();
  };

  return (
    <Theme theme={carbonTheme}>
      <Coachmark open={isOpen} onClose={handleClose} align="top" {...args}>
        <CoachmarkTagline
          title="Why are there two types of severity scores?"
          closeIconDescription="Close"
          isOpen={isOpen}
          buttonProps={{ onClick: handleTaglineClick, id: 'CoachmarkTagline' }}
        ></CoachmarkTagline>
        <Coachmark.Content
          className={fixedIsVisible && `is-visible`}
          highContrast={true}
        >
          <Coachmark.Content.Header closeIconDescription="Close"></Coachmark.Content.Header>
          <Coachmark.Content.Body>
            <div ref={carouselContainerRef} className="exampleCarouselWrapper">
              {items.map((item) => (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <br></br>
                  <p>{item.button}</p>
                </div>
              ))}
            </div>

            <div className={'carouselControlWrapper__footer'}>
              <div className={'carouselControlWrapper--controls-progress'}>
                {items.map((item, index) => {
                  if (carouselInit.current?.getActiveItem?.()?.index === index)
                    return (
                      <span key={item.id}>
                        {`${carouselInit.current?.getActiveItem?.()?.index + 1} / ${items.length}`}
                      </span>
                    );
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
                  <Button
                    ref={nextRef}
                    size="sm"
                    iconDescription="Next"
                    onClick={onNext}
                  >
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

export const CoachmarkFixed = CoachmarkFixedPattern.bind({});
CoachmarkFixed.args = {};
