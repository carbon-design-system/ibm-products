/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Import portions of React that are needed.
import React, { useState, useRef, useEffect } from 'react';
import { useResizeObserver } from '../../global/js/hooks/useResizeObserver';

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
  Tab,
} from 'carbon-components-react';

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
      legalText,
      links,
      logo,
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
    useResizeObserver(bodyRef, { callback: handleResize });

    return (
      <ComposedModal
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          {
            [`${blockClass}--with-tabs`]:
              additionalInfo && additionalInfo.length > 1,
          }
        )}
        {...{ onClose, open, ref, ...getDevtoolsProps(componentName) }}
      >
        <div className={`${blockClass}__logo`}>{logo}</div>
        <ModalHeader
          className={`${blockClass}__header`}
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
            <div className={`${blockClass}__links-container`}>
              {links &&
                links.length > 0 &&
                links.map((link, i) => (
                  <React.Fragment key={i}>{link}</React.Fragment>
                ))}
            </div>
            {legalText && (
              <p className={`${blockClass}__legal-text`}>{legalText}</p>
            )}
            {copyrightText && (
              <p className={`${blockClass}__copyright-text`}>{copyrightText}</p>
            )}
          </div>
        </ModalBody>
        <ModalFooter className={`${blockClass}__footer`}>
          {additionalInfo &&
            additionalInfo.length > 0 &&
            (additionalInfo.length === 1 ? (
              <>
                <p className={`${blockClass}__version-label`}>
                  {additionalInfo[0].label}
                </p>
                <p className={`${blockClass}__version-number`}>
                  {additionalInfo[0].content}
                </p>
              </>
            ) : (
              <Tabs className={`${blockClass}__tab-container`}>
                {additionalInfo.map((tab, i) => (
                  <Tab
                    id={'about-modal-tab-' + tab.label}
                    label={tab.label}
                    key={i}
                  >
                    {tab.content}
                  </Tab>
                ))}
              </Tabs>
            ))}
        </ModalFooter>
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
   * Additional information to be displayed in the footer. Can be used for
   * version information and/or a set of tabs with various contents. If only
   * one set of additional information is provided then no tabs are
   * displayed and the label and content are just displayed one above the
   * other in the footer.
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
   * Trademark and copyright information. Suggested format for copyright -
   * "Copyright © 2018 Company".
   */
  copyrightText: PropTypes.node,

  /**
   * Text providing legal information.
   */
  legalText: PropTypes.node,

  /**
   * An array of Carbon `Link` components that contain links to additional
   * information.
   */
  links: PropTypes.arrayOf(PropTypes.element),

  /**
   * A visual symbol used to represent the product.
   */
  logo: PropTypes.node.isRequired,

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
