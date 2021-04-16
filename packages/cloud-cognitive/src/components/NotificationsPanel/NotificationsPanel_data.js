/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { action } from '@storybook/addon-actions';
import uuidv4 from '../../global/js/utils/uuidv4';

const currentDate = new Date();
let yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
let dayBeforeYesterday = new Date();
dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);
const msInOneMinute = 60000;
const data = [
  {
    id: uuidv4(),
    type: 'error',
    title: 'LogRhythm connection failure',
    description: 'LogRhythm is failing to connect, check timeout.',
    timestamp: currentDate,
    unread: true,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'LogDNA cannot be reached.',
    description: 'Unable to communicate with LogDNA.',
    timestamp: new Date(new Date().getTime() - 30 * 1000), // 30 seconds ago
    unread: true,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'warning',
    title: 'System alert',
    description: 'Email classification was exported successfully.',
    timestamp: new Date(currentDate.getTime() - 11 * msInOneMinute),
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'success',
    title: 'IBM Cloud Pak for Automation Success',
    description: 'Successfully connected cartridge',
    timestamp: new Date(currentDate.getTime() - 120 * msInOneMinute),
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'success',
    title: 'Successfully connected LogDNA',
    description: 'App connection succeeded',
    timestamp: yesterdayDate,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'warning',
    title: 'Cloud Foundry app memory',
    description: 'Allocated app memory low',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'informational',
    title: 'Logs are now being monitored',
    link: {
      text: 'View logs',
      url: 'https://www.carbondesignsystem.com',
    },
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
  {
    id: uuidv4(),
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: action(`Clicked on notification`),
  },
];

export default data;
