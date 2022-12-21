import React, { useState } from "react";

// ----------------------------------------------------
// This is an example showing use of the
// APIKeyModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { APIKeyModal } from "@carbon/ibm-products";
import { Button, InlineLoading } from "@carbon/react";

export const Example = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const props = {
    apiKey: "123-456-789",
    apiKeyLabel: "API key",
    showAPIKeyLabel: "Show key",
    hideAPIKeyLabel: "Hide key",
    copyButtonText: "Copy",
    copyIconDescription: "Copy",
    copyErrorText: "copy failed",
    hasAPIKeyVisibilityToggle: true,
    downloadBodyText:
      "This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.",
    downloadLinkText: "Download as JSON",
    hasDownloadLink: true,
    downloadFileName: "apikey",
    downloadFileType: "json",
    open: true,
    closeButtonText: "Close",
    generateSuccessBody: (
      <p>
        This is your unique API key and is non-recoverable. If you lose this API
        key, you will have to reset it.
      </p>
    ),
    generateSuccessTitle: "API key successfully created",
    editSuccessTitle: "API key successfully saved",
    loadingText: "Generating..."
  };

  const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const generateKey = async () => {
    setLoading(true);
    await wait(1000);
    setOpen(true);
    setLoading(false);
  };

  return (
    <>
      <APIKeyModal {...props} onClose={() => setOpen(false)} open={open} />
      {loading ? (
        <Button renderIcon={InlineLoading}>Generating...</Button>
      ) : (
        <Button onClick={generateKey}>Generate</Button>
      )}
    </>
  );
};
