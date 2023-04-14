/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useState, useRef, useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { getDevtoolsProps } from '../../global/js/utils/devtools';

// Carbon and package components we use.
import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
} from '@carbon/react';
import { isRequiredIf } from '../../global/js/utils/props-helper';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--about-modal`;
const componentName = 'AboutModal';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The AboutModal component provides a way to communicate product information
 * to users. It is triggered by a user’s action, appears on top of the main
 * page content, and is persistent until dismissed. The purpose of this modal
 * should be immediately apparent to the user, with a clear and obvious path
 * to completion.
 */
export let AboutModal = React.forwardRef(
  (
    {
      additionalInfo,
      className,
      closeIconDescription,
      content,
      copyrightText,
      generalText,
      links,
      logo,
      modalAriaLabel,
      onClose,
      open,
      title,
      // Collect any other property values passed in.
      ...rest
    },
    ref
  ) => {
    const [hasScrollingContent, setHasScrollingContent] = useState(true);
    const bodyRef = useRef();
    const contentRef = useRef();
    const contentId = uuidv4();

    const handleResize = () => {
      setHasScrollingContent(
        // if our scroll height exceeds the client height enable scrolling
        bodyRef.current.clientHeight <
          (hasScrollingContent
            ? // Carbon modal adds 32px bottom margin when scrolling content is enabled
              bodyRef.current.scrollHeight - 32
            : bodyRef.current.scrollHeight)
      );
    };

    // We can't add a ref directly to the ModalBody, so track it in a ref
    // as the parent of the current bodyRef element
    useEffect(() => {
      bodyRef.current = contentRef.current.parentElement;
    }, [bodyRef]);

    // Detect resize of the ModalBody to recalculate whether scrolling is enabled
    useResizeDetector({ onResize: handleResize, targetRef: bodyRef });

    return (
      <ComposedModal
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
        )}
        aria-label={modalAriaLabel}
        {...{ onClose, open, ref, ...getDevtoolsProps(componentName) }}
      >
        <div className={`${blockClass}__logo`}>{logo}</div>
        <ModalHeader
          className={`${blockClass}__header`}
          closeModal={onClose}
          iconDescription={closeIconDescription}
          label={title}
          labelClassName={`${blockClass}__title`}
        />
        <ModalBody
          aria-label={hasScrollingContent ? '' : null}
          aria-labelledby={hasScrollingContent ? contentId : null}
          className={`${blockClass}__body`}
          hasScrollingContent={hasScrollingContent}
        >
          <div
            className={`${blockClass}__body-content`}
            ref={contentRef}
            id={contentId}
          >
            {content}
            {links && links.length > 0 &&
              <div className={`${blockClass}__links-container`}>
                {links.map((link, i) => (
                  <React.Fragment key={i}>{link}</React.Fragment>
                ))}
              </div>
            }
            {generalText && (
              <p className={`${blockClass}__general-text`}>{generalText}</p>
            )}
            {copyrightText && (
              <p className={`${blockClass}__copyright-text`}>{copyrightText}</p>
            )}
          </div>
        </ModalBody>
        {additionalInfo &&
          additionalInfo.length > 0 && (
            <ModalFooter className={`${blockClass}__footer`}>
                <p className={`${blockClass}__footer-label`}>
                  {additionalInfo[0].label}
                </p>
                <p className={`${blockClass}__footer-content`}>
                  {additionalInfo[0].content}
                </p>
            </ModalFooter>
        )}
      </ComposedModal>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
AboutModal = pkg.checkComponentEnabled(AboutModal, componentName);
AboutModal.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
AboutModal.propTypes = {
  /**
   * If you are legally required to display logos of technologies used
   * to build your product you can provide this in the additionalInfo.
   * Additional information will be displayed in the footer. The label
   * and content are displayed one above the other in the footer (optional)
   */
  additionalInfo: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    })
  ),

  /**
   * Provide an optional class to be applied to the modal root node.
   */
  className: PropTypes.string,

  /**
   * The accessibility title for the close icon.
   */
  closeIconDescription: PropTypes.string.isRequired,

  /**
   * A summary that appears immediately beneath the title, and might
   * include information such as: version name, server name,
   * user name, user role, browser version, browser OS etc.
   */
  content: PropTypes.node.isRequired,

  /**
   * Trademark and copyright information. Displays first year of
   * product release to current year.
   */
  copyrightText: PropTypes.node.isRequired,

  /**
   * Subhead text providing any relevant product disclaimers including
   * legal information (optional)
   */
  generalText: PropTypes.node,

  /**
   * An array of Carbon `Link` component if there are additional information
   * to call out within the card. The about modal should be used to display
   * the product information and not where users go to find help (optional)
   */
  links: PropTypes.arrayOf(PropTypes.element),

  /**
   * A visual symbol used to represent the product.
   */
  logo: PropTypes.node.isRequired,

  /**
   * Specifies aria label for AboutModal
   */
  modalAriaLabel: PropTypes.string,

  /**
   * Specifies an optional handler which is called when the AboutModal
   * is closed. Returning `false` prevents the AboutModal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the AboutModal is open or not.
   */
  open: PropTypes.bool,

  /**
   * The title of the AboutModal is usually the product or service name.
   */
  title: PropTypes.node.isRequired,
};
