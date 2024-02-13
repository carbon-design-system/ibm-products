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

const Template = (args) => {
  return <StatusIndicator {...args} />;
};

const TemplateFail = (args) => {
  const { retryLabel, ...rest } = args;
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
      {...rest}
      onRetry={(event) => {
        action('onRetry')(event);
        setIsError(false);
        setStatuses(['inactive', 'inactive', 'inactive', 'inactive']);
        runDemo();
      }}
      retryLabel={isError && retryLabel}
    >
      {statuses.map((status, i) => {
        return (
          <StatusIndicatorStep
            key={i}
            description={steps[i].description}
            errorMessage={steps[i].errorMessage}
            status={status}
          />
        );
      })}
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
      {statuses.map((status, i) => {
        return (
          <StatusIndicatorStep
            key={i}
            errorMessage={steps[i].errorMessage}
            description={steps[i].description}
            status={status}
          />
        );
      })}
    </StatusIndicator>
  );
};

export const statusIndicator = prepareStory(Template, {
  storyName: 'StatusIndicator',
  args: {
    children: (
      <>
        <StatusIndicatorStep status="inactive" description="Waiting" />
        <StatusIndicatorStep status="active" description="Working" />
        <StatusIndicatorStep
          status="error"
          description="Error"
          errorMessage="Error message"
        />
        <StatusIndicatorStep status="finished" description="Success" />
      </>
    ),
    onRetry: (event) => {
      action('onRetry')(event);
    },
    retryLabel: 'Retry',
    title: 'Title',
  },
});

export const fail = prepareStory(TemplateFail, {
  args: {
    retryLabel: 'Retry',
    title: 'Failure demo',
  },
});
export const success = prepareStory(TemplateSuccess, {
  args: {
    title: 'Successful demo',
  },
});
