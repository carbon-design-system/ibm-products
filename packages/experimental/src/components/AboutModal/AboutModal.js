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

import { pkg } from '../../settings';

export const AboutModal = ({
  className,
  content,
  copyrightText,
  legalText,
  links,
  logo,
  onClose,
  open,
  technologiesUsed,
  title,
  versionNumber,
}) => {
  return (
    <ComposedModal
      className={classNames(`${pkg.prefix}-about-modal`, {
        [`${pkg.prefix}-about-modal-with-tabs`]:
          technologiesUsed && technologiesUsed.length > 0,
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
          <div className={`${pkg.prefix}-about-modal-scroll-gradient`} />
        </div>
      </ModalBody>
      <ModalFooter>
        {technologiesUsed && technologiesUsed.length ? (
          <Tabs className={`${pkg.prefix}-about-modal-tab-container`}>
            <Tab
              id="about-modal-technologies-used-tab"
              label="Technologies used">
              <div className={`${pkg.prefix}-about-modal-tab-content-flex`}>
                {technologiesUsed &&
                  technologiesUsed.length &&
                  technologiesUsed.map((tech) => (
                    <img
                      key={tech.alt}
                      src={tech.src}
                      alt={tech.alt}
                      className={`${pkg.prefix}-about-modal-tech-used-item`}
                    />
                  ))}
              </div>
            </Tab>
            <Tab id="about-modal-version-number-tab" label="Version number">
              <div
                className={`${pkg.prefix}-about-modal-tab-content-flex ${pkg.prefix}-about-modal-tab-content-version-flex`}>
                <p className={`${pkg.prefix}-about-modal-version-label`}>
                  Version number
                </p>
                <p className={`${pkg.prefix}-about-modal-version-number`}>
                  {versionNumber}
                </p>
              </div>
            </Tab>
          </Tabs>
        ) : (
          <>
            <p className={`${pkg.prefix}-about-modal-version-label`}>
              Version number
            </p>
            <p className={`${pkg.prefix}-about-modal-version-number`}>
              {versionNumber}
            </p>
          </>
        )}
      </ModalFooter>
    </ComposedModal>
  );
};

AboutModal.propTypes = {
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
   * About modal list of technologies
   */
  technologiesUsed: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  /**
   * The title of the AboutModal is usually the product or service name.
   */
  title: PropTypes.node.isRequired,
  /**
   * The version number of the product or service, etc.
   */
  versionNumber: PropTypes.string.isRequired,
};
