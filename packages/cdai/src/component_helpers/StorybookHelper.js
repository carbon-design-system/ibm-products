import ComponentStatus from '../../ComponentStatus.json';

const statusLabels = {
  donotuse: 'Example - Do Not Use',
  experimental: 'Under Construction',
  production: 'Production Ready',
};

export const getComponentLabel = (component) => {
  return `${statusLabels[ComponentStatus[component].status]}/${
    ComponentStatus[component].name
  }`;
};
