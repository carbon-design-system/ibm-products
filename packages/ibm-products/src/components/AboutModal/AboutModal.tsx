/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Carbon and package components we use.
import {
  ComposedModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Theme,
  unstable_FeatureFlags as FeatureFlags,
} from '@carbon/react';
// Import portions of React that are needed.
import React, { MutableRefObject, ReactNode, useEffect, useRef } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { useFocus } from '../../global/js/hooks/useFocus';
import { pkg } from '../../settings';
import { usePortalTarget } from '../../global/js/hooks/usePortalTarget';
import uuidv4 from '../../global/js/utils/uuidv4';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--about-modal`;
const componentName = 'AboutModal';

export interface AboutModalProps {
  /**
   * If you are legally required to display logos of technologies used
   * to build your product you can provide this in the additionalInfo.
   * Additional information will be displayed in the footer.
   */
  additionalInfo?: ReactNode;

  /**
   * Provide an optional class to be applied to the modal root node.
   */
  className?: string;

  /**
   * The accessibility title for the close icon.
   */
  closeIconDescription: string;

  /**
   * Subhead text providing any relevant product disclaimers including
   * legal information (optional)
   */
  content?: ReactNode;

  /**
   * Trademark and copyright information. Displays first year of
   * product release to current year.
   */
  copyrightText: string;

  /**
   * An array of Carbon `Link` component if there are additional information
   * to call out within the card. The about modal should be used to display
   * the product information and not where users go to find help (optional)
   */
  links?: ReactNode[];

  /**
   * A visual symbol used to represent the product.
   */
  logo: ReactNode;

  /**
   * Specifies aria label for AboutModal
   */
  modalAriaLabel?: string;

  /**
   * Specifies an optional handler which is called when the AboutModal
   * is closed. Returning `false` prevents the AboutModal from closing.
   */
  onClose?: () => void | boolean;

  /**
   * Specifies whether the AboutModal is open or not.
   */
  open?: boolean;

  /**
   * The DOM node the tearsheet should be rendered within. Defaults to document.body.
   */
  portalTarget?: ReactNode;

  /**
   * Header text that provides the product name. The IBM Services logo
   * consists of two discrete, but required, elements: the iconic
   * IBM 8-bar logo represented alongside the IBM Services logotype.
   * Please follow these guidelines to ensure proper execution.
   */
  title: ReactNode;

  /**
   * Text that provides information on the version number of your product.
   */
  version: string;
}

// NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The `AboutModal` component provides a way to communicate product information
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
      copyrightText,
      content,
      links,
      logo,
      modalAriaLabel,
      onClose,
      open,
      portalTarget: portalTargetIn,
      title,
      version,
      // Collect any other property values passed in.
      ...rest
    }: AboutModalProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const bodyRef = useRef<HTMLElement | null | undefined>(null);
    const localRef = useRef();
    const modalRef = (ref || localRef) as MutableRefObject<HTMLDivElement>;
    const contentRef = useRef<HTMLDivElement>(null);
    const contentId = uuidv4();
    const renderPortalUse = usePortalTarget(portalTargetIn);
    const { firstElement } = useFocus(modalRef);

    // We can't add a ref directly to the ModalBody, so track it in a ref
    // as the parent of the current bodyRef element
    useEffect(() => {
      bodyRef.current = contentRef.current?.parentElement;
    }, [bodyRef]);

    useEffect(() => {
      if (open) {
        setTimeout(() => firstElement?.focus(), 0);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    return renderPortalUse(
      <FeatureFlags
        flags={{
          'enable-experimental-focus-wrap-without-sentinels': true,
        }}
      >
        <ComposedModal
          {
            // Pass through any other property values as HTML attributes.
            ...rest
          }
          className={cx(
            blockClass, // Apply the block class to the main HTML element
            className // Apply any supplied class names to the main HTML element.
          )}
          aria-label={modalAriaLabel}
          ref={modalRef}
          {...{ onClose, open, ...getDevtoolsProps(componentName) }}
        >
          <div className={`${blockClass}__logo`}>{logo}</div>
          <ModalHeader
            className={`${blockClass}__header`}
            closeModal={onClose}
            iconDescription={closeIconDescription}
            label={title}
            labelClassName={`${blockClass}__title`}
          />
          <ModalBody className={`${blockClass}__body`}>
            <div
              className={`${blockClass}__body-content`}
              ref={contentRef}
              id={contentId}
            >
              <div className={`${blockClass}__version`}>{version}</div>
              {links && links.length > 0 && (
                <div className={`${blockClass}__links-container`}>
                  {links.map((link, i) => (
                    <React.Fragment key={i}>{link}</React.Fragment>
                  ))}
                </div>
              )}
              {content && <p className={`${blockClass}__content`}>{content}</p>}
              {copyrightText && (
                <p className={`${blockClass}__copyright-text`}>
                  {copyrightText}
                </p>
              )}
            </div>
          </ModalBody>
          {additionalInfo && (
            <Theme theme="g100">
              <ModalFooter className={`${blockClass}__footer`}>
                {additionalInfo}
              </ModalFooter>
            </Theme>
          )}
        </ComposedModal>
      </FeatureFlags>
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
   * Additional information will be displayed in the footer.
   */
  additionalInfo: PropTypes.node,

  /**
   * Provide an optional class to be applied to the modal root node.
   */
  className: PropTypes.string,

  /**
   * The accessibility title for the close icon.
   */
  closeIconDescription: PropTypes.string.isRequired,

  /**
   * Subhead text providing any relevant product disclaimers including
   * legal information (optional)
   */
  content: PropTypes.node,

  /**
   * Trademark and copyright information. Displays first year of
   * product release to current year.
   */
  copyrightText: PropTypes.string.isRequired,

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
   * The DOM node the tearsheet should be rendered within. Defaults to document.body.
   */
  portalTarget: PropTypes.node,

  /**
   * Header text that provides the product name. The IBM Services logo
   * consists of two discrete, but required, elements: the iconic
   * IBM 8-bar logo represented alongside the IBM Services logotype.
   * Please follow these guidelines to ensure proper execution.
   */
  title: PropTypes.node.isRequired,

  /**
   * Text that provides information on the version number of your product.
   */
  version: PropTypes.string.isRequired,
};
