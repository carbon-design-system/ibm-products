/**
 * Copyright IBM Corp. 2024, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import { Tab, TabList } from '@carbon/react';
import { Tearsheet } from './Tearsheet';
import { render } from '@testing-library/react';

describe('Tearsheet', () => {
  it('renders Tearsheet v2', async () => {
    render(
      <Tearsheet open={true} variant={'wide'}>
        <Tearsheet.Header>
          <Tearsheet.HeaderContent
            open
            label="Customer data"
            title="Customer account uniqueness SLA "
            description="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text."
          ></Tearsheet.HeaderContent>

          <Tearsheet.NavigationBar scroller={<Tearsheet.ScrollButton />}>
            <TabList aria-label="Tab list">
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
          </Tearsheet.NavigationBar>
        </Tearsheet.Header>
        <Tearsheet.Influencer>influencer</Tearsheet.Influencer>
        <Tearsheet.Body>
          <Tearsheet.MainContent>main content</Tearsheet.MainContent>

          <Tearsheet.SummaryContent>right content</Tearsheet.SummaryContent>
        </Tearsheet.Body>
        <Tearsheet.Footer>footer</Tearsheet.Footer>
      </Tearsheet>
    );
  });
});
