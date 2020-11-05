/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import {
  ComposedModal,
  Link,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Tabs,
  Tab,
} from 'carbon-components-react';

import { expPrefix } from '../../global/js/settings';

export const AboutModal = ({
  copyrightText,
  legalText,
  links,
  logo,
  productName,
  versionNumber,
  onRequestClose,
  body,
  open,
  technologiesUsed,
  theme,
}) => {
  const [hasScrollableContent, setHasScrollableContent] = useState();
  const modalRef = useRef();

  const handleResize = () => {
    const modalHeight = modalRef?.current?.innerModal?.current.getBoundingClientRect()
      .height;
    const modalContentHeight = modalRef.current.innerModal.current.firstElementChild.getBoundingClientRect()
      .height;
    if (modalHeight < modalContentHeight) {
      setHasScrollableContent(true);
    }
  };

  return (
    <ReactResizeDetector onResize={handleResize}>
      {/*
        This extra div is necessary because the ReactResizeDetector component tries to attach a `targetRef` to it's child element,
        and it throws an error in the browser console when trying to attach that `targetRef` to Carbon's <ComposedModal> component.
      */}
      <div>
        <ComposedModal
          className={[
            `${expPrefix}-about-modal`,
            theme === 'dark'
              ? `${expPrefix}-about-modal-dark-theme`
              : `${expPrefix}-about-modal-light-theme`,
            hasScrollableContent
              ? `${expPrefix}-about-modal-scroll-enabled`
              : '',
            technologiesUsed && technologiesUsed.length > 0
              ? `${expPrefix}-about-modal-with-tabs`
              : '',
          ].join(' ')}
          open={open}
          ref={modalRef}>
          <div className={`${expPrefix}-modal-content`}>
            <img
              alt="Product logo"
              src={logo}
              className={`${expPrefix}-about-modal-product-logo`}
            />
            <ModalHeader
              title={productName}
              titleClassName={`${expPrefix}-about-modal-title`}
              closeModal={onRequestClose}
            />
            <ModalBody className={`${expPrefix}-about-modal-content`}>
              {body}
              <div className={`${expPrefix}-about-modal-links-container`}>
                {links &&
                  links.length > 0 &&
                  links.map((link, i) => (
                    <React.Fragment key={link.url}>
                      <Link href={link.url}>{link.text}</Link>
                      {i !== links.length - 1 && (
                        <span
                          className={`${expPrefix}-about-modal-link-divider`}>
                          |
                        </span>
                      )}
                    </React.Fragment>
                  ))}
              </div>
              {legalText ? (
                <p className={`${expPrefix}-about-modal-legal-text`}>
                  {legalText}
                </p>
              ) : null}
              {copyrightText ? (
                <p className={`${expPrefix}-about-modal-copyright-text`}>
                  {copyrightText}
                </p>
              ) : null}
            </ModalBody>
            <ModalFooter>
              {technologiesUsed && technologiesUsed.length ? (
                <Tabs
                  className={`${expPrefix}-about-modal-tab-container`}
                  light={theme === 'light'}
                  aria-label="About modal technology used and version number tabs">
                  <Tab
                    id="about-modal-technologies-used-tab"
                    label="Technologies used"
                    aria-label="Technologies used tab">
                    <div
                      className={`${expPrefix}-about-modal-tab-content-flex`}>
                      {technologiesUsed &&
                        technologiesUsed.length &&
                        technologiesUsed.map((tech) => (
                          <img
                            key={tech.alt}
                            src={tech.src}
                            alt={tech.alt}
                            className={`${expPrefix}-about-modal-tech-used-item`}
                          />
                        ))}
                    </div>
                  </Tab>
                  <Tab
                    id="about-modal-version-number-tab"
                    label="Version number"
                    aria-label="Version number tab">
                    <div
                      className={`${expPrefix}-about-modal-tab-content-flex ${expPrefix}-about-modal-tab-content-version-flex`}>
                      <p className={`${expPrefix}-about-modal-version-label`}>
                        Version number
                      </p>
                      <p className={`${expPrefix}-about-modal-version-number`}>
                        {versionNumber}
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              ) : (
                <>
                  <p className={`${expPrefix}-about-modal-version-label`}>
                    Version number
                  </p>
                  <p className={`${expPrefix}-about-modal-version-number`}>
                    {versionNumber}
                  </p>
                </>
              )}
            </ModalFooter>
            {hasScrollableContent && (
              <div className={`${expPrefix}-about-modal-scroll-gradient`} />
            )}
          </div>
        </ComposedModal>
      </div>
    </ReactResizeDetector>
  );
};

AboutModal.propTypes = {
  /**
   * About modal body content
   */
  body: PropTypes.string.isRequired,
  /**
   * About modal product copyright text
   */
  copyrightText: PropTypes.string,
  /**
   * About modal product legal text
   */
  legalText: PropTypes.string,
  /**
   * About modal product links
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  /**
   * About modal product logo
   */
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * About modal close function
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * About modal is open
   */
  open: PropTypes.bool.isRequired,
  /**
   * About modal product name
   */
  productName: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
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
   * About modal product name
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * About modal product version number
   */
  versionNumber: PropTypes.string.isRequired,
};

AboutModal.defaultProps = {
  copyrightText: '',
  legalText: '',
  links: [],
  onRequestClose: () => {},
  technologiesUsed: [],
  theme: 'dark',
};
