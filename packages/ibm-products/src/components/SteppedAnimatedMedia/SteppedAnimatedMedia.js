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

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--stepped-animated-media`;
const componentName = 'SteppedAnimatedMedia';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
const defaults = {
  playStep: 0,
};

/**
 * DO NOT USE. This component is for the exclusive use
 * of other Novice to Pro components.
 */
export let SteppedAnimatedMedia = React.forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      className,
      /* TODO: add other props for SteppedAnimatedMedia, with default values if needed */
      playStep = defaults.playStep,
      filePaths,
      // Collect any other property values passed in.
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
        } else {
          throw new Error(`Lottie files must be json formatted`);
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

    return (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            // switched classes dependant on props or state
            // example: [`${blockClass}__here-if-small`]: size === 'sm',
          }
        )}
        ref={localRef}
        role="main"
        {...getDevtoolsProps(componentName)}
      />
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
SteppedAnimatedMedia = pkg.checkComponentEnabled(
  SteppedAnimatedMedia,
  componentName
);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
SteppedAnimatedMedia.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
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
