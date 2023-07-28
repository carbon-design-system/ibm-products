/**
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { init } from './test-common';

import { Example as APIKeyModalExample } from './APIKeyModal/src/Example/Example';
import { Example as AboutModalExample } from './AboutModal/src/Example/Example';
import { Example as CascadeExample } from './Cascade/src/Example/Example';
import { Example as CreateFullPageExample } from './CreateFullPage/src/Example/Example';
import { Example as CreateModalExample } from './CreateModal/src/Example/Example';
import { Example as CreateSidePanelExample } from './CreateSidePanel/src/Example/Example';
import { Example as CreateTearsheetExample } from './CreateTearsheet/src/Example/Example';
import { Example as CreateTearsheetNarrowExample } from './CreateTearsheetNarrow/src/Example/Example';
import { Example as DataSpreadsheetExample } from './DataSpreadsheet/src/Example/Example';
import { Example as DatagridExample } from './Datagrid/src/Example/Example';
import { Example as EditInPlaceExample } from './EditInPlace/src/Example/Example';
import { Example as EmptyStatesExample } from './EmptyStates/src/Example/Example';
import { Example as ExportModalExample } from './ExportModal/src/Example/Example';
import { Example as ExpressiveCardExample } from './ExpressiveCard/src/Example/Example';
import { Example as HTTPErrorsExample } from './HTTPErrors/src/Example/Example';
import { Example as ImportModalExample } from './ImportModal/src/Example/Example';
import { Example as NotificationsPanelExample } from './NotificationsPanel/src/Example/Example';
import { Example as OptionsTileExample } from './OptionsTile/src/Example/Example';
import { Example as PageHeaderExample } from './PageHeader/src/Example/Example';
import { Example as ProductiveCardExample } from './ProductiveCard/src/Example/Example';
import { Example as RemoveModalExample } from './RemoveModal/src/Example/Example';
import { Example as SavingExample } from './Saving/src/Example/Example';
import { Example as SidePanelExample } from './SidePanel/src/Example/Example';
import { Example as StatusIconExample } from './StatusIcon/src/Example/Example';
import { Example as TagSetExample } from './TagSet/src/Example/Example';
import { Example as TearsheetExample } from './Tearsheet/src/Example/Example';
import { Example as UserProfileImageExample } from './UserProfileImage/src/Example/Example';
import { Example as WebTerminalExample } from './WebTerminal/src/Example/Example';
import { Example as PrefixExampleExample } from './prefix-example/src/Example/Example';
import { Example as React16ExampleExample } from './react-16-example/src/Example/Example';
import { Example as React17ExampleExample } from './react-17-example/src/Example/Example';

describe('All examples', () => {
  init(beforeEach, afterEach);

  it('APIKeyModal renders', async () => {
    await render(<APIKeyModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('AboutModal renders', async () => {
    await render(<AboutModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Cascade renders', async () => {
    await render(<CascadeExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CreateFullPage renders', async () => {
    await render(<CreateFullPageExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CreateModal renders', async () => {
    await render(<CreateModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CreateSidePanel renders', async () => {
    await render(<CreateSidePanelExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CreateTearsheet renders', async () => {
    await render(<CreateTearsheetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CreateTearsheetNarrow renders', async () => {
    await render(<CreateTearsheetNarrowExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('DataSpreadsheet renders', async () => {
    await render(<DataSpreadsheetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Datagrid renders', async () => {
    await render(<DatagridExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('EditInPlace renders', async () => {
    await render(<EditInPlaceExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('EmptyStates renders', async () => {
    await render(<EmptyStatesExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('ExportModal renders', async () => {
    await render(<ExportModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('ExpressiveCard renders', async () => {
    await render(<ExpressiveCardExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('HTTPErrors renders', async () => {
    await render(<HTTPErrorsExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('ImportModal renders', async () => {
    await render(<ImportModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('NotificationsPanel renders', async () => {
    await render(<NotificationsPanelExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('OptionsTile renders', async () => {
    await render(<OptionsTileExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('PageHeader renders', async () => {
    await render(<PageHeaderExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('ProductiveCard renders', async () => {
    await render(<ProductiveCardExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('RemoveModal renders', async () => {
    await render(<RemoveModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Saving renders', async () => {
    await render(<SavingExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('SidePanel renders', async () => {
    await render(<SidePanelExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('StatusIcon renders', async () => {
    await render(<StatusIconExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('TagSet renders', async () => {
    await render(<TagSetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Tearsheet renders', async () => {
    await render(<TearsheetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('UserProfileImage renders', async () => {
    await render(<UserProfileImageExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('WebTerminal renders', async () => {
    await render(<WebTerminalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('PrefixExample renders', async () => {
    await render(<PrefixExampleExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('React16Example renders', async () => {
    await render(<React16ExampleExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('React17Example renders', async () => {
    await render(<React17ExampleExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
});
