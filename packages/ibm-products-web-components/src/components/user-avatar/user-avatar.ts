/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { prefix, carbonPrefix } from '../../globals/settings';
import HostListenerMixin from '@carbon/web-components/es/globals/mixins/host-listener.js';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';
import styles from './user-avatar.scss?lit';
import '@carbon/web-components/es/components/tooltip/index.js';
import User from '@carbon/web-components/es/icons/user/16';

/**
 * Useravatar.
 *
 * @element c4p-user-avatar
 * */

const blockClass = `${prefix}--user-avatar`;

const iconSize = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

@customElement(`${prefix}-user-avatar`)
class CDSUseravatar extends HostListenerMixin(LitElement) {
  /**
   * Specify the text of the tooltip.
   * Can be string
   */
  @property({ reflect: true, attribute: 'tooltip-text' })
  tooltipText;

  /**
   * Specify the alignment of the tooltip.
   */
  @property({ reflect: true, attribute: 'tooltip-alignment' })
  tooltipAlignment = 'bottom';

  /**
   * When passing the name prop, either send the initials to be used or the user's full name. The first two capital letters of the user's name will be used as the name.
   */
  @property({ reflect: true })
  name;

  /**
   * Provide a custom icon to use if you need to use an icon other than the default one
   */
  @property()
  renderIcon;

  /**
   * Set the size of the avatar circle
   */
  @property({ reflect: true })
  size;

  /**
   * When passing the image prop, supply a full path to the image to be displayed.
   */
  @property({ reflect: true })
  image;
  /**
   * When passing the image prop use the imageDescription prop to describe the image for screen reader.
   */
  @property({ reflect: true, attribute: 'image-description' })
  imageDescription;

  /**
   * Provide the background color need to be set for UserAvatar.
   */
  @property({ reflect: true, attribute: 'background-color' })
  backgroundColor = 'order-1-cyan';

  /**
   * Set theme in which the component will be rendered.
   */
  @property({ reflect: true })
  theme;

  render() {
    const getItem = () => {
      const iconProps = { size: iconSize[this.size] };
      if (this.image) {
        const imageClasses = classMap({
          [`${blockClass}__photo`]: true,
          [`${blockClass}__photo--${this.size}`]: this.size,
        });
        return html` <img
          alt="${this.imageDescription}"
          src="${this.image}"
          class="${imageClasses}"
        />`;
      }
      if (this.renderIcon) {
        return html`${this.renderIcon({
          width: `${iconProps.size}`,
          height: `${iconProps.size}`,
        })}`;
      }
      if (this.name) {
        const parts = this.name?.split(' ') || [];
        const firstChar = parts[0].charAt(0).toUpperCase();
        const secondChar = parts[0].charAt(1).toUpperCase();
        if (parts.length === 1) {
          return firstChar + secondChar;
        }
        const lastChar = parts[parts.length - 1].charAt(0).toUpperCase();
        const initials = [firstChar];
        if (lastChar) {
          initials.push(lastChar);
        }

        return ''.concat(...initials);
      }
      return html`${User({
        slot: 'icon',
        width: `${iconProps.size}`,
        height: `${iconProps.size}`,
      })} `;
    };

    const { tooltipText, tooltipAlignment, size, backgroundColor, theme } =
      this;
    const classes = classMap({
      [`${blockClass}`]: true,
      [`${blockClass}--${size}`]: size,
      [`${blockClass}--${backgroundColor}`]: backgroundColor,
      [`${blockClass}--${theme}`]: theme,
    });

    const Avatar = () => html`<div class="${classes}">${getItem()}</div>`;

    if (tooltipText) {
      return html`<cds-tooltip
        align=${tooltipAlignment}
        aria-label=${tooltipText}
        class=${`${blockClass}__tooltip ${carbonPrefix}--icon-tooltip`}
      >
        ${Avatar()}
        <cds-tooltip-content id="content"> ${tooltipText} </cds-tooltip-content>
      </cds-tooltip>`;
    } else {
      return html` ${Avatar()}`;
    }
  }

  static styles = styles;
}
export default CDSUseravatar;
