import React, { forwardRef } from 'react';
// import PropTypes from 'prop-types';
import { AddSelect } from '../AddSelect';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';

const componentName = 'MultiAddSelect';

export let MultiAddSelect = forwardRef((props, ref) => {
  return (
    <AddSelect
      {...props}
      multi
      ref={ref}
      {...getDevtoolsProps(componentName)}
    />
  );
});

MultiAddSelect = pkg.checkComponentEnabled(MultiAddSelect, componentName);

MultiAddSelect.propTypes = {};

MultiAddSelect.displayName = componentName;
