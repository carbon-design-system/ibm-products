import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { AddSelect } from '../AddSelect';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

const componentName = 'SingleAddSelect';

export let SingleAddSelect = forwardRef((props, ref) => {
  return (
    <AddSelect {...props} ref={ref} {...getDevtoolsProps(componentName)} />
  );
});

SingleAddSelect = pkg.checkComponentEnabled(SingleAddSelect, componentName);

SingleAddSelect.propTypes = {};

SingleAddSelect.displayName = componentName;
