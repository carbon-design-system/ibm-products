/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormLabel,
  InlineLoading,
  Link,
  Modal,
  TextInput,
  ToastNotification,
} from '@carbon/react';
import { TrashCan, Launch } from '@carbon/react/icons';
import styles from './_story-assets/_storybook-styles.scss?inline';
import { getCurrentTime } from './_story-assets/utils';
import wait from '../../global/js/utils/wait';
import DocsPage from './DeleteAndRemove.mdx';

export default {
  title: 'Patterns/Delete and remove',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

// High impact deletion
const HighImpactDeletion = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('inactive');
  const [loaderDescription, setLoaderDescription] = useState('Deleting');
  const [openNotification, setOpenNotification] = useState(false);
  const [resourceName, setResourceName] = useState('');
  const [isValidName, setIsValidName] = useState(false);

  const deleteItem = async () => {
    await wait(1000);
    return true;
  };

  const handleDelete = async () => {
    setLoading(true);
    setLoadingStatus('active');
    const isDelete = await deleteItem();
    setLoading(false);
    setLoadingStatus('finished');
    setLoaderDescription('Deleted!');
    setOpen(false);
    isDelete && showNotification();
  };

  const showNotification = () => {
    setOpenNotification(true);
  };

  const hideNotification = () => {
    setOpenNotification(false);
  };

  const validateInput = (evt) => {
    setResourceName(evt.target.value);
    if (evt.target.value === 'Bx1001') {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
  };

  const resetLoaderStatus = () => {
    setLoadingStatus('inactive');
    setLoaderDescription('Deleting...');
  };

  return (
    <div className="app">
      <Button
        size="md"
        kind="danger"
        onClick={() => {
          // Clear form
          setResourceName('');
          // show confirmation modal
          setOpen(true);
        }}
      >
        Delete
      </Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        danger
        modalHeading="Confirm delete"
        modalLabel="Delete Bx1001"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        onRequestSubmit={handleDelete}
        onSecondarySubmit={() => setOpen(false)}
        primaryButtonDisabled={!isValidName}
        loadingStatus={loadingStatus}
        loadingDescription={loaderDescription}
        onLoadingSuccess={resetLoaderStatus}
      >
        <p
          style={{
            marginBottom: '1rem',
          }}
        >
          Deleting 'Bx1001' will permanently delete the configuration. This
          action cannot be undone.
        </p>
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Type Bx1001 to confirm"
          placeholder="Name of resource"
          value={resourceName}
          onChange={validateInput}
        />
      </Modal>
      {openNotification && (
        <ToastNotification
          open={open}
          aria-label="closes notification"
          caption={getCurrentTime()}
          kind="success"
          lowContrast
          onClose={hideNotification}
          role="status"
          statusIconDescription="notification"
          subtitle="Bx1001 has been successfully deleted."
          timeout={3000}
          title="Success"
          className="notification"
        />
      )}
    </div>
  );
};

export const highImpactDeletion = HighImpactDeletion.bind({});
highImpactDeletion.storyName = 'High impact deletion';
highImpactDeletion.args = {};

// High impact deletion with connected items
const HighImpactDeletionWithConnectedItems = () => {
  const connectedItems = [
    { id: 1, name: 'Route1_name' },
    { id: 2, name: 'Hpt-392-ser' },
    { id: 3, name: 'Route2_name' },
  ];

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('inactive');
  const [loaderDescription, setLoaderDescription] = useState('Deleting');
  const [openNotification, setOpenNotification] = useState(false);
  const [resourceName, setResourceName] = useState('');
  const [isValidName, setIsValidName] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const deleteItem = async () => {
    await wait(1000);
    return true;
  };

  const handleDelete = async () => {
    setLoading(true);
    setLoadingStatus('active');
    const isDelete = await deleteItem();
    setLoading(false);
    setLoadingStatus('finished');
    setLoaderDescription('Deleted!');
    setOpen(false);
    isDelete && showNotification();
  };

  const showNotification = () => {
    setOpenNotification(true);
  };

  const hideNotification = () => {
    setOpenNotification(false);
  };

  const validateInput = (evt) => {
    setResourceName(evt.target.value);
    if (evt.target.value === 'Bx1001') {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
  };

  const resetLoaderStatus = () => {
    setLoadingStatus('inactive');
    setLoaderDescription('Deleting...');
  };

  return (
    <div className="app">
      <Button
        size="md"
        kind="danger"
        onClick={() => {
          // Clear form
          setResourceName('');
          setIsChecked(false);
          // show confirmation modal
          setOpen(true);
        }}
      >
        Delete
      </Button>
      <Modal
        open={open}
        onRequestClose={() => {
          setOpen(false);
        }}
        danger
        modalHeading="Confirm delete"
        modalLabel="Delete Bx1001"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        onRequestSubmit={handleDelete}
        onSecondarySubmit={() => setOpen(false)}
        primaryButtonDisabled={!isValidName || !isChecked}
        loadingStatus={loadingStatus}
        loadingDescription={loaderDescription}
        onLoadingSuccess={resetLoaderStatus}
      >
        <p
          style={{
            marginBottom: '1rem',
          }}
        >
          When you delete the 'Bx1001', this resource and all connected items
          are permanently deleted. This action cannot be undone.
        </p>
        <TextInput
          data-modal-primary-focus
          value={resourceName}
          id="text-input-1"
          labelText="Type Bx1001 to confirm"
          placeholder="Name of resource"
          onChange={validateInput}
          style={{
            marginBottom: '1rem',
          }}
        />
        <FormLabel>
          The following connected items will also be deleted. Review each item
          to confirm that they can be deleted.
        </FormLabel>
        <Checkbox
          checked={isChecked}
          id="checkbox-1"
          labelText={`${connectedItems.length} items: `}
          onChange={(event, { checked }) => setIsChecked(checked)}
        />
        <ul className="no-bullets">
          {connectedItems.map((item) => (
            <li key={item.id}>
              <Link href="#" renderIcon={Launch}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </Modal>
      {openNotification && (
        <ToastNotification
          open={open}
          aria-label="closes notification"
          caption={getCurrentTime()}
          kind="success"
          lowContrast
          onClose={hideNotification}
          role="status"
          statusIconDescription="notification"
          subtitle="Bx1001 and all connected items have been successfully deleted."
          timeout={3000}
          title="Success"
          className="notification"
        />
      )}
    </div>
  );
};

export const highImpactDeletionWithConnectedItems =
  HighImpactDeletionWithConnectedItems.bind({});
highImpactDeletionWithConnectedItems.storyName =
  'Deletion with connected items';
highImpactDeletionWithConnectedItems.args = {};

// High impact batch deletion
const HighImpactBatchDeletion = () => {
  const batchItems = [
    { id: 1, name: 'Route1_name' },
    { id: 2, name: 'Hpt-392-ser' },
    { id: 3, name: 'Route2_name' },
  ];

  const protectedItems = [
    { id: 1, name: 'Route3_name' },
    { id: 2, name: 'Route4_name' },
  ];

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('inactive');
  const [loaderDescription, setLoaderDescription] = useState('Deleting');
  const [openNotification, setOpenNotification] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const deleteItem = async () => {
    await wait(1000);
    return true;
  };

  const handleDelete = async () => {
    setLoading(true);
    setLoadingStatus('active');
    const isDelete = await deleteItem();
    setLoading(false);
    setLoadingStatus('finished');
    setLoaderDescription('Deleted!');
    setOpen(false);
    isDelete && showNotification();
  };

  const showNotification = () => {
    setOpenNotification(true);
  };

  const hideNotification = () => {
    setOpenNotification(false);
  };

  const resetLoaderStatus = () => {
    setLoadingStatus('inactive');
    setLoaderDescription('Deleting...');
  };

  return (
    <div className="app">
      <Button
        size="md"
        kind="danger"
        onClick={() => {
          // Clear form
          setIsChecked(false);
          // show confirmation modal
          setOpen(true);
        }}
      >
        Delete all
      </Button>
      <Modal
        open={open}
        onRequestClose={() => {
          setOpen(false);
        }}
        danger
        modalHeading="Confirm delete"
        modalLabel="Delete selected items"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        onRequestSubmit={handleDelete}
        onSecondarySubmit={() => setOpen(false)}
        primaryButtonDisabled={!isChecked}
        size="sm"
        loadingStatus={loadingStatus}
        loadingDescription={loaderDescription}
        onLoadingSuccess={resetLoaderStatus}
      >
        <p
          style={{
            marginBottom: '1rem',
          }}
        >
          Decide if you want to keep these items. Deleting these items is
          permanent. This action cannot be undone.
        </p>
        <FormLabel>
          The following items will be deleted. Review each item to confirm that
          they can be deleted.
        </FormLabel>
        <Checkbox
          checked={isChecked}
          id="checkbox-1"
          labelText={`${batchItems.length} items: `}
          onChange={(event, { checked }) => setIsChecked(checked)}
        />
        <ul className="no-bullets">
          {batchItems.map((item) => (
            <li key={item.id}>
              <Link href="#" renderIcon={Launch}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {protectedItems.length && (
          <p
            style={{
              marginTop: '1rem',
            }}
          >
            Note - the following selected items cannot be deleted:
            {protectedItems.map((item, index) => (
              <span key={item.id}>
                <Link href="#" renderIcon={Launch}>
                  {item.name}
                </Link>
                {index < protectedItems.length - 1 && ', '}
              </span>
            ))}
          </p>
        )}
      </Modal>
      {openNotification && (
        <ToastNotification
          open={open}
          aria-label="closes notification"
          caption={getCurrentTime()}
          kind="success"
          lowContrast
          onClose={hideNotification}
          role="status"
          statusIconDescription="notification"
          subtitle="Selected items have been successfully deleted."
          timeout={3000}
          title="Success"
          className="notification"
        />
      )}
    </div>
  );
};
export const highImpactBatchDeletion = HighImpactBatchDeletion.bind({});
highImpactBatchDeletion.storyName = 'Batch deletion';
highImpactBatchDeletion.args = {};

// Medium impact deletion
const MediumImpactDeletion = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState('inactive');
  const [loaderDescription, setLoaderDescription] = useState('Deleting');
  const [openNotification, setOpenNotification] = useState(false);

  const deleteItem = async () => {
    await wait(1000);
    return true;
  };

  const handleDelete = async () => {
    setLoading(true);
    setLoadingStatus('active');
    const isDelete = await deleteItem();
    setLoading(false);
    setLoadingStatus('finished');
    setLoaderDescription('Deleted!');
    setOpen(false);
    isDelete && showNotification();
  };

  const showNotification = () => {
    setOpenNotification(true);
  };

  const hideNotification = () => {
    setOpenNotification(false);
  };

  const resetLoaderStatus = () => {
    setLoadingStatus('inactive');
    setLoaderDescription('Deleting...');
  };

  return (
    <div className="app">
      <Button size="md" kind="danger" onClick={() => setOpen(true)}>
        Delete
      </Button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        danger
        modalHeading="Confirm delete"
        modalLabel="Delete Bx1001"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        onRequestSubmit={handleDelete}
        onSecondarySubmit={() => setOpen(false)}
        primaryButtonDisabled={loading}
        loadingStatus={loadingStatus}
        loadingDescription={loaderDescription}
        onLoadingSuccess={resetLoaderStatus}
      >
        <p>
          Deleting 'Bx1001' will permanently delete the configuration. This
          action cannot be undone.
        </p>
      </Modal>
      {openNotification && (
        <ToastNotification
          open={open}
          aria-label="closes notification"
          caption={getCurrentTime()}
          kind="success"
          lowContrast
          onClose={hideNotification}
          role="status"
          statusIconDescription="notification"
          subtitle="Bx1001 has been successfully deleted."
          timeout={3000}
          title="Success"
          className="notification"
        />
      )}
    </div>
  );
};

export const mediumImpactDeletion = MediumImpactDeletion.bind({});
mediumImpactDeletion.storyName = 'Medium impact deletion';
mediumImpactDeletion.args = {};

// Low impact deletion
const LowImpactDeletion = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteItem = async () => {
    await wait(1000);
    return true;
  };

  const handleDelete = async () => {
    setLoading(true);
    const isDelete = await deleteItem();
    setLoading(false);
    isDelete && showNotification();
  };

  const showNotification = () => {
    setOpen(true);
  };

  const hideNotification = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      {loading ? (
        <Button
          size="md"
          kind="danger"
          iconDescription="Loading"
          renderIcon={InlineLoading}
        >
          Deleting...
        </Button>
      ) : (
        <Button
          size="md"
          kind="danger"
          iconDescription="TrashCan"
          renderIcon={TrashCan}
          onClick={handleDelete}
        >
          Delete
        </Button>
      )}
      {open && (
        <ToastNotification
          open={open}
          aria-label="closes notification"
          caption={getCurrentTime()}
          kind="success"
          lowContrast
          onClose={hideNotification}
          role="status"
          statusIconDescription="notification"
          subtitle="Bx1001 has been successfully deleted."
          timeout={3000}
          title="Success"
          className="notification"
        />
      )}
    </div>
  );
};

export const lowImpactDeletion = LowImpactDeletion.bind({});
lowImpactDeletion.storyName = 'Low impact deletion';
lowImpactDeletion.args = {};
