const defaultOrNot = (item) => item.default || item;
const config = [
  {
    label: 'React 16 usage',
    url: 'https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main/examples/cloud-cognitive/ccs-base-react-16',
    thumbnail:
      'url( ' +
      defaultOrNot(require('./ccs-base-react-16--thumbnail.png')) +
      ')',
  },
  {
    label: 'React 17 usage',
    url: 'https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main/examples/cloud-cognitive/ccs-base-react-17',
    thumbnail:
      'url( ' +
      defaultOrNot(require('./ccs-base-react-17--thumbnail.png')) +
      ')',
  },
  {
    label: 'codesandbox',
    url: 'https://codesandbox.io/s/github/carbon-design-system/ibm-cloud-cognitive/tree/main/examples/cloud-cognitive/codesandbox',
    thumbnail:
      'url( ' + defaultOrNot(require('./codesandbox--thumbnail.png')) + ')',
  },
  {
    label: 'PageHeader example',
    url: 'https://codesandbox.io/s/pageheaderexample-rs5ie',
    thumbnail: 'url("https://screenshots.codesandbox.io/rs5ie/210.png")',
  },
];
export default config;
