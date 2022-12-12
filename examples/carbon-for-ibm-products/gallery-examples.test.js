/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { init } from './test-common';

import { Example as APIKeyModalExample } from './APIKeyModal/src/Example/Example';
import { Example as AboutModalExample } from './AboutModal/src/Example/Example';
/* skipped import see 'example-gallery-builder' 
import { Example as CarbonV11TemplateExample } from './Carbon-v11-template/src/Example/Example'
*/
import { Example as CascadeExample } from './Cascade/src/Example/Example';
import { Example as CreateFullPageExample } from './CreateFullPage/src/Example/Example';
import { Example as CreateModalExample } from './CreateModal/src/Example/Example';
import { Example as CreateSidePanelExample } from './CreateSidePanel/src/Example/Example';
import { Example as CreateTearsheetExample } from './CreateTearsheet/src/Example/Example';
import { Example as CreateTearsheetNarrowExample } from './CreateTearsheetNarrow/src/Example/Example';
import { Example as DatagridExample } from './Datagrid/src/Example/Example';
import { Example as EmptyStatesExample } from './EmptyStates/src/Example/Example';
import { Example as ExportModalExample } from './ExportModal/src/Example/Example';
import { Example as ExpressiveCardExample } from './ExpressiveCard/src/Example/Example';
import { Example as HTTPErrorsExample } from './HTTPErrors/src/Example/Example';
import { Example as ImportModalExample } from './ImportModal/src/Example/Example';
import { Example as InlineEditExample } from './InlineEdit/src/Example/Example';
import { Example as NotificationsPanelExample } from './NotificationsPanel/src/Example/Example';
import { Example as OptionsTileExample } from './OptionsTile/src/Example/Example';
import { Example as PageHeaderExample } from './PageHeader/src/Example/Example';
import { Example as ProductiveCardExample } from './ProductiveCard/src/Example/Example';
import { Example as RemoveModalExample } from './RemoveModal/src/Example/Example';
import { Example as SavingExample } from './Saving/src/Example/Example';
import { Example as SidePanelExample } from './SidePanel/src/Example/Example';
import { Example as StatusIconExample } from './StatusIcon/src/Example/Example';
/* skipped import see 'example-gallery-builder' 
import { Example as TagSetExample } from './TagSet/src/Example/Example'
*/
import { Example as TearsheetExample } from './Tearsheet/src/Example/Example';
import { Example as UserProfileImageExample } from './UserProfileImage/src/Example/Example';
import { Example as WebTerminalExample } from './WebTerminal/src/Example/Example';
import { Example as CcsBaseReact16Example } from './ccs-base-react-16/src/Example/Example';
import { Example as CcsBaseReact17Example } from './ccs-base-react-17/src/Example/Example';
import { Example as PrefixExampleExample } from './prefix-example/src/Example/Example';
describe('All examples', () => {
  init(beforeEach, afterEach);

  it('APIKeyModal renders', () => {
    render(<APIKeyModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('AboutModal renders', () => {
    render(<AboutModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it.skip('CarbonV11Template renders', () => {
    render(<CarbonV11TemplateExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('Cascade renders', () => {
    render(<CascadeExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('CreateFullPage renders', () => {
    render(<CreateFullPageExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('CreateModal renders', () => {
    render(<CreateModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('CreateSidePanel renders', () => {
    render(<CreateSidePanelExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('CreateTearsheet renders', () => {
    render(<CreateTearsheetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('CreateTearsheetNarrow renders', () => {
    render(<CreateTearsheetNarrowExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('Datagrid renders', () => {
    render(<DatagridExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('EmptyStates renders', () => {
    render(<EmptyStatesExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('ExportModal renders', () => {
    render(<ExportModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('ExpressiveCard renders', () => {
    render(<ExpressiveCardExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('HTTPErrors renders', () => {
    render(<HTTPErrorsExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('ImportModal renders', () => {
    render(<ImportModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('InlineEdit renders', () => {
    render(<InlineEditExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('NotificationsPanel renders', () => {
    render(<NotificationsPanelExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('OptionsTile renders', () => {
    render(<OptionsTileExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('PageHeader renders', () => {
    render(<PageHeaderExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('ProductiveCard renders', () => {
    render(<ProductiveCardExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('RemoveModal renders', () => {
    render(<RemoveModalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('Saving renders', () => {
    render(<SavingExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('SidePanel renders', () => {
    render(<SidePanelExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('StatusIcon renders', () => {
    render(<StatusIconExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it.skip('TagSet renders', () => {
    render(<TagSetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('Tearsheet renders', () => {
    render(<TearsheetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('UserProfileImage renders', () => {
    render(<UserProfileImageExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it.skip('WebTerminal renders', () => {
    render(<WebTerminalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('CcsBaseReact16 renders', () => {
    render(<CcsBaseReact16Example />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('CcsBaseReact17 renders', () => {
    render(<CcsBaseReact17Example />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
  it('PrefixExample renders', () => {
    render(<PrefixExampleExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
});
