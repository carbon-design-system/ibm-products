const currentDate = new Date();
let yesterdayDate = new Date();
yesterdayDate.setDate(yesterdayDate.getDate() - 1);
let dayBeforeYesterday = new Date();
dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);
const msInOneMinute = 60000;
export const sampleData = [
  {
    id: 0,
    type: 'error',
    title: 'LogRhythm connection failure',
    description: 'LogRhythm is failing to connect, check timeout.',
    timestamp: currentDate,
    unread: true,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 1,
    type: 'warning',
    title: 'System alert',
    description: 'Email classification was exported successfully.',
    timestamp: new Date(currentDate.getTime() - 11 * msInOneMinute),
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 2,
    type: 'success',
    title: 'IBM Cloud Pak for Automation Success',
    description: 'Successfully connected cartridge',
    timestamp: new Date(currentDate.getTime() - 120 * msInOneMinute),
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 3,
    type: 'success',
    title: 'Successfully connected LogDNA',
    description: 'App connection succeeded',
    timestamp: yesterdayDate,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 4,
    type: 'warning',
    title: 'Cloud Foundry app memory',
    description: 'Allocated app memory low',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 5,
    type: 'informational',
    title: 'Logs are now being monitored',
    link: {
      text: 'View logs',
      url: 'https://www.carbondesignsystem.com',
    },
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 6,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 7,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 8,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 9,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 10,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 11,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 12,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 13,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id "${notification.id}"`),
  },
  {
    id: 14,
    type: 'error',
    title: 'Cluster unreachable',
    description:
      'Not able to establish connection with provided cluster. Please check your logs and memory allocation to resolve this issue further.',
    timestamp: dayBeforeYesterday,
    onNotificationClick: (notification) =>
      console.log(`Clicked on notification with id: "${notification.id}"`),
  },
];
