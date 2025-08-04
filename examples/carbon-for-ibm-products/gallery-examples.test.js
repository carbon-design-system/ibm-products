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
import { Example as BigNumbersExample } from './BigNumbers/src/Example/Example';
import { Example as CascadeExample } from './Cascade/src/Example/Example';
import { Example as CoachmarkExample } from './Coachmark/src/Example/Example';
import { Example as CoachmarkBeaconExample } from './CoachmarkBeacon/src/Example/Example';
import { Example as CoachmarkButtonExample } from './CoachmarkButton/src/Example/Example';
import { Example as CoachmarkFixedExample } from './CoachmarkFixed/src/Example/Example';
import { Example as CoachmarkOverlayElementExample } from './CoachmarkOverlayElement/src/Example/Example';
import { Example as CoachmarkOverlayElementsExample } from './CoachmarkOverlayElements/src/Example/Example';
import { Example as CoachmarkStackExample } from './CoachmarkStack/src/Example/Example';
import { Example as CoachmarkWithAnimatedMediaExample } from './CoachmarkWithAnimatedMedia/src/Example/Example';
import { Example as ConditionBuilderExample } from './ConditionBuilder/src/Example/Example';
import { Example as CreateFullPageExample } from './CreateFullPage/src/Example/Example';
import { Example as CreateModalExample } from './CreateModal/src/Example/Example';
import { Example as CreateSidePanelExample } from './CreateSidePanel/src/Example/Example';
import { Example as CreateTearsheetExample } from './CreateTearsheet/src/Example/Example';
import { Example as CreateTearsheetNarrowExample } from './CreateTearsheetNarrow/src/Example/Example';
import { Example as DataSpreadsheetExample } from './DataSpreadsheet/src/Example/Example';
import { Example as DatagridExample } from './Datagrid/src/Example/Example';
import { Example as DecoratorExample } from './Decorator/src/Example/Example';
import { Example as DelimitedListExample } from './DelimitedList/src/Example/Example';
import { Example as DescriptionListExample } from './DescriptionList/src/Example/Example';
import { Example as EditInPlaceExample } from './EditInPlace/src/Example/Example';
import { Example as EmptyStatesExample } from './EmptyStates/src/Example/Example';
import { Example as ExportModalExample } from './ExportModal/src/Example/Example';
import { Example as ExpressiveCardExample } from './ExpressiveCard/src/Example/Example';
import { Example as FilterPanelExample } from './FilterPanel/src/Example/Example';
import { Example as FullPageErrorExample } from './FullPageError/src/Example/Example';
import { Example as GetStartedCardExample } from './GetStartedCard/src/Example/Example';
import { Example as HTTPErrorsExample } from './HTTPErrors/src/Example/Example';
import { Example as ImportModalExample } from './ImportModal/src/Example/Example';
import { Example as InlineTipWithAnimatedMediaExample } from './InlineTipWithAnimatedMedia/src/Example/Example';
import { Example as InterstitialScreenExample } from './InterstitialScreen/src/Example/Example';
import { Example as InterstitialScreenViewExample } from './InterstitialScreenView/src/Example/Example';
import { Example as InterstitialScreenWithAnimatedMediaExample } from './InterstitialScreenWithAnimatedMedia/src/Example/Example';
import { Example as NavExample } from './Nav/src/Example/Example';
import { Example as NotificationsPanelExample } from './NotificationsPanel/src/Example/Example';
import { Example as OptionsTileExample } from './OptionsTile/src/Example/Example';
import { Example as PageHeaderExample } from './PageHeader/src/Example/Example';
import { Example as ProductiveCardExample } from './ProductiveCard/src/Example/Example';
import { Example as RemoveModalExample } from './RemoveModal/src/Example/Example';
import { Example as SavingExample } from './Saving/src/Example/Example';
import { Example as ScrollGradientExample } from './ScrollGradient/src/Example/Example';
import { Example as SearchBarExample } from './SearchBar/src/Example/Example';
import { Example as SidePanelExample } from './SidePanel/src/Example/Example';
import { Example as StatusIconExample } from './StatusIcon/src/Example/Example';
import { Example as StatusIndicatorExample } from './StatusIndicator/src/Example/Example';
import { Example as StringFormatterExample } from './StringFormatter/src/Example/Example';
import { Example as TagOverflowExample } from './TagOverflow/src/Example/Example';
import { Example as TagSetExample } from './TagSet/src/Example/Example';
import { Example as TearsheetExample } from './Tearsheet/src/Example/Example';
import { Example as TruncatedListExample } from './TruncatedList/src/Example/Example';
import { Example as UserAvatarExample } from './UserAvatar/src/Example/Example';
import { Example as UserProfileImageExample } from './UserProfileImage/src/Example/Example';
import { Example as WebTerminalExample } from './WebTerminal/src/Example/Example';
import { Example as PrefixExampleExample } from './prefix-example/src/Example/Example';
import { Example as React16ExampleExample } from './react-16-example/src/Example/Example';
import { Example as React17ExampleExample } from './react-17-example/src/Example/Example';

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

  it('BigNumber renders', () => {
    render(<BigNumbersExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Cascade renders', () => {
    render(<CascadeExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Coachmark renders', () => {
    render(<CoachmarkExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CoachmarkBeacon renders', () => {
    render(<CoachmarkBeaconExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CoachmarkButton renders', () => {
    render(<CoachmarkButtonExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CoachmarkFixed renders', () => {
    render(<CoachmarkFixedExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CoachmarkOverlayElement renders', () => {
    render(<CoachmarkOverlayElementExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CoachmarkOverlayElements renders', () => {
    render(<CoachmarkOverlayElementsExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CoachmarkStack renders', () => {
    render(<CoachmarkStackExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('CoachmarkWithAnimatedMedia renders', () => {
    render(<CoachmarkWithAnimatedMediaExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('ConditionBuilder renders', () => {
    render(<ConditionBuilderExample />);
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

  it('DataSpreadsheet renders', () => {
    render(<DataSpreadsheetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Datagrid renders', () => {
    render(<DatagridExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Decorator renders', () => {
    render(<DecoratorExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('DelimitedList renders', () => {
    render(<DelimitedListExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('DescriptionList renders', () => {
    render(<DescriptionListExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('EditInPlace renders', () => {
    render(<EditInPlaceExample />);
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

  it('FilterPanel renders', () => {
    render(<FilterPanelExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('FullPageError renders', () => {
    render(<FullPageErrorExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('GetStartedCard renders', () => {
    render(<GetStartedCardExample />);
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

  it('InlineTipWithAnimatedMedia renders', () => {
    render(<InlineTipWithAnimatedMediaExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('InterstitialScreen renders', () => {
    render(<InterstitialScreenExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('InterstitialScreenView renders', () => {
    render(<InterstitialScreenViewExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('InterstitialScreenWithAnimatedMedia renders', () => {
    render(<InterstitialScreenWithAnimatedMediaExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Nav renders', () => {
    render(<NavExample />);
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

  it('ScrollGradient renders', () => {
    render(<ScrollGradientExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('SearchBar renders', () => {
    render(<SearchBarExample />);
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

  it('StatusIndicator renders', () => {
    render(<StatusIndicatorExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('StringFormatter renders', () => {
    render(<StringFormatterExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('TagOverflow renders', () => {
    render(<TagOverflowExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('TagSet renders', () => {
    render(<TagSetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('Tearsheet renders', () => {
    render(<TearsheetExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('TruncatedList renders', () => {
    render(<TruncatedListExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('UserAvatar renders', () => {
    render(<UserAvatarExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('UserProfileImage renders', () => {
    render(<UserProfileImageExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('WebTerminal renders', () => {
    render(<WebTerminalExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('PrefixExample renders', () => {
    render(<PrefixExampleExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('React16Example renders', () => {
    render(<React16ExampleExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });

  it('React17Example renders', () => {
    render(<React17ExampleExample />);
    // expect no errors int the console
    expect(console.error).not.toHaveBeenCalled();
  });
});
