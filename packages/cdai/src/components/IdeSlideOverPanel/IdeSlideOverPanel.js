//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'carbon-components-react';
import CloseIcon16 from '@carbon/icons-react/lib/close/16';
import { createInteractionHandler } from '../../component_helpers/A11yHelper';
import FocusTrap from 'focus-trap-react';
import { idePrefix } from '../../globals/js/settings';

const IdeSlideOverPanel = ({
  open,
  size,
  title,
  onClose,
  onOverlayClose,
  className,
  children,
  danger,
  closeButtonIconDescription,
  controls,
  footer,
  onPrimaryClick,
  onSecondaryClick,
  secondaryButtonText,
  primaryButtonDisabled,
  secondaryButtonDisabled,
  primaryButtonText,
  primaryButtonIcon,
  secondaryButtonIcon,
  withOverlay,
  focusTrapOptions,
}) => {
  size = size || 'small';
  const classes =
    `${idePrefix}-slide-over-panel ${idePrefix}-slide-over-panel--` +
    size +
    (className ? ' ' + className : '') +
    (open ? ` ${idePrefix}-slide-over-panel--open` : '');

  const overlayClasses =
    `${idePrefix}-slide-over-overlay` +
    (open ? ` ${idePrefix}-slide-over-overlay--open` : '');

  const panelFooter = controls && (
    <div className={`${idePrefix}-slide-over-panel--footer`}>
      {footer}
      <div className={`${idePrefix}-slide-over-panel--footer-content`}>
        <Button
          kind="secondary"
          className={`${idePrefix}-slide-over-panel--secondary`}
          disabled={secondaryButtonDisabled}
          renderIcon={secondaryButtonIcon}
          onClick={onSecondaryClick}
        >
          {secondaryButtonText}
        </Button>
        <Button
          className={`${idePrefix}-slide-over-panel--primary`}
          kind={danger ? 'danger' : 'primary'}
          disabled={primaryButtonDisabled}
          renderIcon={primaryButtonIcon}
          onClick={onPrimaryClick}
        >
          {primaryButtonText}
        </Button>
      </div>
    </div>
  );

  const panelContents = (
    <aside className={classes}>
      <div className={`${idePrefix}-slide-over-panel--contents`}>
        <header>
          <h3>{title}</h3>
          <Button
            className={`${idePrefix}-slide-over-panel--close`}
            disabled={false}
            hasIconOnly
            iconDescription={closeButtonIconDescription}
            kind="ghost"
            onClick={onClose}
            renderIcon={CloseIcon16}
            size="default"
            tooltipAlignment="center"
            tooltipPosition="bottom"
            type="button"
          />
        </header>
        <div className={`${idePrefix}-slide-over-panel--children`}>
          {children}
        </div>
        {panelFooter}
      </div>
    </aside>
  );

  if (withOverlay) {
    let interactions = createInteractionHandler(onOverlayClose || onClose);

    const defaultFocusTrapOptions = {
      escapeDeactivates: false,
      clickOutsideDeactivates: true,
    };

    const mergedFocusTrapOptions = {
      ...defaultFocusTrapOptions,
      ...focusTrapOptions,
    };

    return (
      <>
        <FocusTrap active={!!open} focusTrapOptions={mergedFocusTrapOptions}>
          {panelContents}
        </FocusTrap>
        <div role="presentation" className={overlayClasses} {...interactions} />
      </>
    );
  } else {
    return panelContents;
  }
};

IdeSlideOverPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeButtonIconDescription: PropTypes.string,
  controls: PropTypes.bool,
  danger: PropTypes.bool,
  focusTrapOptions: PropTypes.shape({
    onActivate: PropTypes.func,
    onDeactivate: PropTypes.func,
    initialFocus: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    fallbackFocus: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    escapeDeactivates: PropTypes.bool,
    clickOutsideDeactivates: PropTypes.bool,
    returnFocusOnDeactivate: PropTypes.bool,
    setReturnFocus: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.func,
    ]),
    allowOutsideClick: PropTypes.func,
    preventScroll: PropTypes.bool,
  }),
  footer: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onOverlayClose: PropTypes.func,
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
  open: PropTypes.bool,
  primaryButtonDisabled: PropTypes.bool,
  primaryButtonIcon: PropTypes.object,
  primaryButtonText: PropTypes.string,
  secondaryButtonDisabled: PropTypes.bool,
  secondaryButtonIcon: PropTypes.object,
  secondaryButtonText: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  withOverlay: PropTypes.bool,
};

IdeSlideOverPanel.defaultProps = {
  open: false,
  controls: false,
  danger: false,
  withOverlay: false,
  secondaryButtonText: 'Cancel',
  primaryButtonText: 'Save',
  closeButtonIconDescription: 'Close',
  focusTrapOptions: {
    initialFocus: '.ide-slide-over-panel--close',
    fallbackFocus: '.ide-slide-over-panel--close',
  },
};

export default IdeSlideOverPanel;
