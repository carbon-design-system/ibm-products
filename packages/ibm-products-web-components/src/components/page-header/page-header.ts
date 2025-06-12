/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './page-header.scss?lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

/**
 * Page header.
 * @element cds-page-header
 */
@customElement(`${prefix}-page-header`)
class CDSPageHeader extends LitElement {
  render() {
    return html` <slot></slot>`;
  }

  static styles = styles;
}

export default CDSPageHeader;
