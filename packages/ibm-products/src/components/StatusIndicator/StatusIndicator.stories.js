/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { StatusIndicator, StatusIndicatorStep } from '.';
import mdx from './StatusIndicator.mdx';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(StatusIndicator.displayName),
  component: StatusIndicator,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    styles,
    layout: 'padded',
    docs: {
      page: mdx,
    },
  },
};

const steps = [
  {
    description: 'Open database',
    errorMessage: 'Failed to open database, Error code 0x5E6159EF',
  },
  {
    description: 'Write to database',
    errorMessage: 'Failed to write to database, Error code 0xD65E7A04',
  },
  {
    description: 'Test database',
    errorMessage: 'Test failed, Error code 0x868EF3E6',
  },
  {
    description: 'Close database',
    errorMessage: 'Failed to close database, Error code 0xB13512FD',
  },
];

const stepsAsync = [
  {
    description: 'Upload profile photo for "new.employee@corp.com"',
    errorMessage:
      'Upload failed, image dimensions must be at least 400 x 400 pixels.',
  },
  {
    description: 'Add to group "Analyst, level 1"',
    errorMessage: 'Failed to add user to group, Error code 0xD65E7A04',
  },
  {
    description: 'Update business address to ID "CA3577"',
    errorMessage: 'Update failed, Error code 0x868EF3E6',
  },
  {
    description: 'Update manager to "dev.lead@corp.com"',
    errorMessage: 'Failed to update manager, Error code 0xB13512FD',
  },
];

const Template = (args) => {
  return (
    <StatusIndicator {...args}>
      <StatusIndicatorStep status="inactive" description="Waiting" />
      <StatusIndicatorStep status="active" description="Working" />
      <StatusIndicatorStep
        status="error"
        description="Error"
        errorMessage="Error message"
      />
      <StatusIndicatorStep status="finished" description="Success" />
    </StatusIndicator>
  );
};

const TemplateSuccess = (args) => {
  const [statuses, setStatuses] = useState([
    'inactive',
    'inactive',
    'inactive',
    'inactive',
  ]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatuses(['active', 'inactive', 'inactive', 'inactive']);
    }, 300);
    const timer2 = setTimeout(() => {
      setStatuses(['finished', 'active', 'inactive', 'inactive']);
    }, 1000);
    const timer3 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'active', 'inactive']);
    }, 2000);
    const timer4 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'finished', 'active']);
    }, 4000);
    const timer5 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'finished', 'finished']);
    }, 4300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <StatusIndicator {...args}>
      <StatusIndicatorStep
        status={statuses[0]}
        description={steps[0].description}
        errorMessage={steps[0].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[1]}
        description={steps[1].description}
        errorMessage={steps[1].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[2]}
        description={steps[2].description}
        errorMessage={steps[2].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[3]}
        description={steps[3].description}
        errorMessage={steps[3].errorMessage}
      />
    </StatusIndicator>
  );
};

const TemplateSuccessAsync = (args) => {
  const [statuses, setStatuses] = useState([
    'inactive',
    'inactive',
    'inactive',
    'inactive',
  ]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatuses(['inactive', 'active', 'inactive', 'inactive']);
    }, 300);
    const timer2 = setTimeout(() => {
      setStatuses(['active', 'active', 'active', 'inactive']);
    }, 1000);
    const timer3 = setTimeout(() => {
      setStatuses(['active', 'finished', 'active', 'active']);
    }, 2000);
    const timer4 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'active', 'finished']);
    }, 3000);
    const timer5 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'finished', 'finished']);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <StatusIndicator {...args}>
      <StatusIndicatorStep
        status={statuses[0]}
        description={stepsAsync[0].description}
        errorMessage={stepsAsync[0].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[1]}
        description={stepsAsync[1].description}
        errorMessage={stepsAsync[1].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[2]}
        description={stepsAsync[2].description}
        errorMessage={stepsAsync[2].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[3]}
        description={stepsAsync[3].description}
        errorMessage={stepsAsync[3].errorMessage}
      />
    </StatusIndicator>
  );
};

const TemplateFail = (args) => {
  const [isError, setIsError] = useState(false);
  const [statuses, setStatuses] = useState([
    'inactive',
    'inactive',
    'inactive',
    'inactive',
  ]);

  const runDemo = () => {
    const timer1 = setTimeout(() => {
      setStatuses(['active', 'inactive', 'inactive', 'inactive']);
    }, 300);
    const timer2 = setTimeout(() => {
      setStatuses(['finished', 'active', 'inactive', 'inactive']);
    }, 1000);
    const timer3 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'active', 'inactive']);
    }, 2000);
    const timer4 = setTimeout(() => {
      setStatuses(['finished', 'finished', 'error', 'inactive']);
      setIsError(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  };

  useEffect(() => {
    runDemo();
  }, []);

  return (
    <StatusIndicator
      {...args}
      onRetry={(event) => {
        action('onRetry')(event);
        setIsError(false);
        setStatuses(['inactive', 'inactive', 'inactive', 'inactive']);
        runDemo();
      }}
      retryLabel="Retry"
      showRetry={isError}
    >
      <StatusIndicatorStep
        status={statuses[0]}
        description={steps[0].description}
        errorMessage={steps[0].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[1]}
        description={steps[1].description}
        errorMessage={steps[1].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[2]}
        description={steps[2].description}
        errorMessage={steps[2].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[3]}
        description={steps[3].description}
        errorMessage={steps[3].errorMessage}
      />
    </StatusIndicator>
  );
};

const TemplateFailAsync = (args) => {
  const [isError, setIsError] = useState(false);
  const [statuses, setStatuses] = useState([
    'inactive',
    'inactive',
    'inactive',
    'inactive',
  ]);

  const runDemo = () => {
    const timer1 = setTimeout(() => {
      setStatuses(['active', 'inactive', 'inactive', 'inactive']);
    }, 300);
    const timer2 = setTimeout(() => {
      setStatuses(['active', 'active', 'inactive', 'active']);
    }, 1000);
    const timer3 = setTimeout(() => {
      setStatuses(['error', 'finished', 'active', 'active']);
    }, 2000);
    const timer4 = setTimeout(() => {
      setStatuses(['error', 'finished', 'finished', 'active']);
    }, 3000);
    const timer5 = setTimeout(() => {
      setStatuses(['error', 'finished', 'finished', 'error']);
      setIsError(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  };

  useEffect(() => {
    runDemo();
  }, []);

  return (
    <StatusIndicator
      {...args}
      onRetry={(event) => {
        action('onRetry')(event);
        setIsError(false);
        setStatuses(['inactive', 'inactive', 'inactive', 'inactive']);
        runDemo();
      }}
      retryLabel="Retry"
      showRetry={isError}
    >
      <StatusIndicatorStep
        status={statuses[0]}
        description={stepsAsync[0].description}
        errorMessage={stepsAsync[0].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[1]}
        description={stepsAsync[1].description}
        errorMessage={stepsAsync[1].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[2]}
        description={stepsAsync[2].description}
        errorMessage={stepsAsync[2].errorMessage}
      />
      <StatusIndicatorStep
        status={statuses[3]}
        description={stepsAsync[3].description}
        errorMessage={stepsAsync[3].errorMessage}
      />
    </StatusIndicator>
  );
};

export const statusIndicator = prepareStory(Template, {
  storyName: 'StatusIndicator',
  args: {
    onRetry: (event) => {
      action('onRetry')(event);
    },
    retryLabel: 'Retry',
    showRetry: true,
    title: 'List of states available',
  },
});

export const success = prepareStory(TemplateSuccess, {
  args: {
    title: 'Success, synchronous',
  },
});

export const fail = prepareStory(TemplateFail, {
  args: {
    onRetry: (event) => {
      action('onRetry')(event);
    },
    title: 'Fail, synchronous',
  },
});

export const successAsync = prepareStory(TemplateSuccessAsync, {
  args: {
    title: 'Success, asynchronous',
  },
});

export const failAsync = prepareStory(TemplateFailAsync, {
  args: {
    onRetry: (event) => {
      action('onRetry')(event);
    },
    title: 'Fail, asynchronous',
  },
});
