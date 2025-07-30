/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import TriangleRightOutline16 from '@carbon/web-components/es/icons/triangle--right--outline/16.js';
import Deploy16 from '@carbon/web-components/es/icons/deploy/16.js';
import BuildTool from '@carbon/web-components/es/icons/build-tool/16.js';
import TestTool from '@carbon/web-components/es/icons/test-tool/16.js';
import Scan from '@carbon/web-components/es/icons/scan/16.js';
import DataFormat from '@carbon/web-components/es/icons/data--format/16.js';
import Debug from '@carbon/web-components/es/icons/debug/16.js';
import User from '@carbon/web-components/es/icons/user/16.js';
import Analytics from '@carbon/web-components/es/icons/analytics/16.js';
import Async from '@carbon/web-components/es/icons/async/16.js';
import Upload from '@carbon/web-components/es/icons/upload/16.js';
import { TemplateResult } from 'lit';

export interface ActionData {
  text: string;
  icon: TemplateResult;
  onClick: () => void;
}

const actionWords =
  'Run Deploy Build Test Scan Format Debug Profile Analyze Sync Upload';
const actionWordList = actionWords.split(/\s+/);

const actionIcons: (() => TemplateResult)[] = [
  () => TriangleRightOutline16({ slot: 'icon' }),
  () => Deploy16({ slot: 'icon' }),
  () => BuildTool({ slot: 'icon' }),
  () => TestTool({ slot: 'icon' }),
  () => Scan({ slot: 'icon' }),
  () => DataFormat({ slot: 'icon' }),
  () => Debug({ slot: 'icon' }),
  () => User({ slot: 'icon' }),
  () => Analytics({ slot: 'icon' }),
  () => Async({ slot: 'icon' }),
  () => Upload({ slot: 'icon' }),
];

interface GenerateActionsOptions {
  count: number;
  size?: string;
  onClick?: (text: string) => void;
}

export function generateActions({
  count,
  size,
  onClick = (text) => alert(`Clicked action: ${text}`),
}: GenerateActionsOptions): ActionData[] {
  return Array.from({ length: count }, (_, index) => {
    const text = actionWordList[index % actionWordList.length];
    const iconFn = actionIcons[index % actionIcons.length];

    return {
      text,
      icon: iconFn(),
      size,
      onClick: () => onClick(text),
    };
  });
}

export const actionsData = generateActions({ count: 12 });
