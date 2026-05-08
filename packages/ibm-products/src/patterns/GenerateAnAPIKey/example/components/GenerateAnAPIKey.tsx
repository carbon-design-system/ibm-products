/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode } from 'react';
import { Modal } from '@carbon/react';

export interface GenerateAnAPIKeyProps {
  open: boolean;
  onRequestClose: () => void;
  onRequestSubmit: () => void;
  modalHeading: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonDisabled?: boolean;
  loadingStatus?: 'inactive' | 'active' | 'finished';
  loadingDescription?: string;
  onLoadingSuccess?: () => void;
  children?: ReactNode;
}

export const GenerateAnAPIKey = ({
  open,
  onRequestClose,
  onRequestSubmit,
  modalHeading,
  primaryButtonText = 'Generate API key',
  secondaryButtonText = 'Close',
  primaryButtonDisabled = false,
  loadingStatus = 'inactive',
  loadingDescription = 'Loading',
  onLoadingSuccess,
  children,
}: GenerateAnAPIKeyProps) => {
  return (
    <Modal
      open={open}
      onRequestClose={onRequestClose}
      onRequestSubmit={onRequestSubmit}
      modalHeading={modalHeading}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      primaryButtonDisabled={primaryButtonDisabled}
      loadingStatus={loadingStatus}
      loadingDescription={loadingDescription}
      onLoadingSuccess={onLoadingSuccess}
    >
      {children}
    </Modal>
  );
};

GenerateAnAPIKey.displayName = 'GenerateAnAPIKey';
