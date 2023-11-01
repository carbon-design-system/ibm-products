/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import clamp from 'lodash/clamp';
// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--stepped-animated-media`;
const componentName = 'SteppedAnimatedMedia';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values for props
const defaults = {
  playStep: 0,
};

/**
 * The SteppedAnimatedMedia is a Novice to Pro internal component and is not intended for general use.
 */
export const SteppedAnimatedMedia = React.forwardRef(
  (
    {
      className,
      /* TODO: add other props for SteppedAnimatedMedia, with default values if needed */
      playStep = defaults.playStep,
      filePaths,
      ...rest
    },
    ref
  ) => {
    const [jsonData, setJsonData] = useState([]);
    const animRef = useRef();
    const backupRef = useRef();
    const localRef = ref ?? backupRef;
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
    }, [filePaths]);

    useEffect(() => {
      const prefersReducedMotion = window?.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : true;
      if (localRef.current) {
        animRef.current?.destroy();
        animRef.current = lottie.loadAnimation({
          container: localRef.current,
          renderer: 'svg',
          animationData: jsonData[clamp(playStep, 0, jsonData.length - 1)],
          loop: false,
          autoplay: false,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        });
        prefersReducedMotion
          ? animRef.current?.goToAndStop(0)
          : animRef.current?.goToAndPlay(0);
      }

      return () => animRef.current?.destroy();
    }, [jsonData, localRef, playStep]);

    if (!jsonData) {
      return null;
    }

    return (
      <div
        {...rest}
        className={cx(blockClass, className)}
        role="img"
        ref={localRef}
        {...getDevtoolsProps(componentName)}
      />
    );
  }
);

SteppedAnimatedMedia.displayName = componentName;

SteppedAnimatedMedia.propTypes = {
  /**
   * Optional class name for this component.
   */
  className: PropTypes.string,
  /**
   * The file path(s) to json formatted Lottie animation files.
   */
  filePaths: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Which animation step from the filePaths array to play.
   */
  playStep: PropTypes.number,
};
