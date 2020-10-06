import React from 'react';
import { IdeHTTPErrors } from '.';
import sidebar from './README.md';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import { storiesOf } from '@storybook/react';
import styles from './_storybook.scss';

storiesOf(getComponentLabel('IdeHTTPErrors'), module)
  .addParameters({ readme: { sidebar } })
  .addParameters({ styles, layout: 'fullscreen'})
  .add('Default', () => {
    return <IdeHTTPErrors />;
  })
  .add('403', () => {
    return (
      <IdeHTTPErrors
        background={403}
        title="Error 403"
        description="Hmm, it appears you don't have access to this table."
        details="The following links might be helpful:"
        links={{
          text: 'HOME > Tables',
          url: 'http://ibm.com',
        }}
      />
    );
  })
  .add('404', () => {
    return (
      <IdeHTTPErrors
        background={404}
        title="Error 404"
        description="Hmm, we can't seem to find that."
        details="The following links might be helpful:"
        links={[
          {
            text: 'HOME > Tables',
            url: 'http://ibm.com',
          },
          {
            text: 'HOME > Tables entries',
            url: 'http://ibm.com',
          },
        ]}
      />
    );
  })
  .add('Custom', () => {
    return (
      <IdeHTTPErrors
        title="Custom title"
        description="Custom description"
        details="Custom description"
        links={[
          {
            text: 'Custom link 1',
            url: 'http://ibm.com',
          },
          {
            text: 'Custom link 2',
            url: 'http://ibm.com',
          },
        ]}
      />
    );
  });
