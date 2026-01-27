/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from './page-header.scss?lit';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

/**
 * Page header Hero Image.
 * @element c4p-page-header-hero-image
 */
@customElement(`${prefix}-page-header-hero-image`)
class CDSPageHeaderHeroImage extends LitElement {
  render() {
    return html`<slot></slot> `;
  }

  static styles = styles;
}

export default CDSPageHeaderHeroImage;
