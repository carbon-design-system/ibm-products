/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Tabs,
  Tab,
} from 'carbon-components-react';

import { Canary } from '../_Canary';
import { pkg } from '../../settings';
const componentName = 'AboutModal';

export const AboutModal = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({
      additionalInfo,
      className,
      content,
      copyrightText,
      legalText,
      links,
      logo,
      onClose,
      open,
      title,
    }) => {
      return (
        <ComposedModal
          className={classNames(`${pkg.prefix}-about-modal`, {
            [`${pkg.prefix}-about-modal-with-tabs`]:
              additionalInfo && additionalInfo.length > 1,
            [className]: className,
          })}
          onClose={onClose}
          open={open}>
          <div className={`${pkg.prefix}-about-modal-product-logo`}>{logo}</div>
          <ModalHeader
            title={title}
            titleClassName={`${pkg.prefix}-about-modal-title`}
          />
          <ModalBody className={`${pkg.prefix}-about-modal-content`}>
            <div className={`${pkg.prefix}-about-modal-body-content`}>
              {content}
              <div className={`${pkg.prefix}-about-modal-links-container`}>
                {links &&
                  links.length > 0 &&
                  links.map((link, i) => (
                    <React.Fragment key={i}>{link}</React.Fragment>
                  ))}
              </div>
              {legalText && (
                <p className={`${pkg.prefix}-about-modal-legal-text`}>
                  {legalText}
                </p>
              )}
              {copyrightText && (
                <p className={`${pkg.prefix}-about-modal-copyright-text`}>
                  {copyrightText}
                </p>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            {(additionalInfo && additionalInfo.length > 0) &&
              (additionalInfo.length === 1 ? (
                <>
                  <p className={`${pkg.prefix}-about-modal-version-label`}>
                    {additionalInfo[0].label}
                  </p>
                  <p className={`${pkg.prefix}-about-modal-version-number`}>
                    {additionalInfo[0].content}
                  </p>
                </>
              ) : (
                <Tabs className={`${pkg.prefix}-about-modal-tab-container`}>
                  {additionalInfo.map((tab, i) => (
                    <Tab
                      id={'about-modal-tab-' + tab.label}
                      label={tab.label}
                      key={i}>
                      {tab.content}
                    </Tab>
                  ))}
                </Tabs>
              ))}
          </ModalFooter>
        </ComposedModal>
      );
    };

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
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes.string,
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
  open: PropTypes.bool.isRequired,
  /**
   * The title of the AboutModal is usually the product or service name.
   */
  title: PropTypes.node.isRequired,
};

AboutModal.displayName = componentName;
