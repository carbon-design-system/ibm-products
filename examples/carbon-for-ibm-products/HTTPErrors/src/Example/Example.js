import './_example.scss';
import React from 'react';

import { HTTPError403 } from '@carbon/ibm-products';

export const Example = () => (
  <div className="app">
    <HTTPError403
      errorCodeLabel="Error 403"
      title="Forbidden"
      description="You are not authorized to access this resource."
      links={[
        {
          text: 'Carbon Design System',
          href: 'https://www.carbondesignsystem.com',
        },
        {
          text: 'Carbon for IBM Products component library',
          href: 'https://github.com/carbon-design-system/ibm-products',
        },
      ]}
    />
  </div>
);
