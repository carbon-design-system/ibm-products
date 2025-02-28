/**
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, {
  ForwardedRef,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import lottie, { type AnimationItem } from 'lottie-web';

//import { clamp } from '../../global/js/utils/clamp';


// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = 'stepped-animated-media';
const componentName = 'SteppedAnimatedMedia';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  playStep: 0,
};

export interface SteppedAnimatedMediaProps {
  /**
   * Optional class name for this component.
   */
  className?: string;
  /**
   * The file path(s) to json formatted Lottie animation files.
   */
  filePaths: string[] | undefined;
  /**
   * Which animation step from the filePaths array to play.
   */
  playStep?: number;
}

/**
 * The SteppedAnimatedMedia is an Onboarding internal component and is not intended for general use.
 */
export const SteppedAnimatedMedia = React.forwardRef(
  (
    {
      className,
      /* TODO: add other props for SteppedAnimatedMedia, with default values if needed */
      playStep = defaults.playStep,
      filePaths,
      ...rest
    }: SteppedAnimatedMediaProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [jsonData, setJsonData] = useState<object[]>([]);
    const animRef = useRef<AnimationItem | undefined>(undefined);
    const backupRef = useRef<HTMLDivElement>(null);
    const localRef = ref ?? backupRef;
    const localRefValue = (localRef as MutableRefObject<HTMLDivElement>)
      .current;
    const filePathStr = filePaths?.join(); //converting the array to string will avoid unwanted useEffect trigger.
    // load animation source
    useEffect(() => {
      const isJsonFile = (filePath) => filePath.includes('.json');
      async function loadArtifact() {
        if (filePaths && filePaths.every(isJsonFile)) {
          const allJsonArtifacts = filePaths.map((el) => fetch(el));
          const rawResponse = await Promise.all(allJsonArtifacts);
          const jsonResponse = rawResponse.map((el) => el.json());
          const fileData = await Promise.all(jsonResponse);
          setJsonData(fileData);
        }
      }
      loadArtifact();
      // eslint-disable-next-line
    }, [filePathStr]);

    useEffect(() => {
      const prefersReducedMotion = window?.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : true;
      if (localRefValue) {
        animRef.current?.destroy();
        animRef.current = lottie.loadAnimation({
          container: localRefValue,
          renderer: 'svg',
          animationData: jsonData[clamp(playStep, 0, jsonData.length - 1)!],
          loop: false,
          autoplay: false,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        });
        if (prefersReducedMotion) {
          animRef.current?.goToAndStop(0);
        } else {
          animRef.current?.goToAndPlay(0);
        }
      }

      return () => animRef.current?.destroy();
    }, [jsonData, localRefValue, playStep]);

    if (!jsonData) {
      return null;
    }

    const clamp = (
      value: number,
      min: number,
      max: number
    ): number => {
      if (isNaN(value) || isNaN(min) || isNaN(max)) {
        return;
      }
      if (max !== undefined) {
        value = value <= max ? value : max;
      }
      if (min !== undefined) {
        value = value >= min ? value : min;
      }
      return value;
    };

    return (
      <div
        {...rest}
        className={`${className} ${blockClass}`}
        role="img"
        ref={localRef}
      />
    );
  }
);

