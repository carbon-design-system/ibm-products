//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { ClickableTile, Link, Tooltip } from 'carbon-components-react';
import { createInteractionHandler } from '../../component_helpers/A11yHelper';
import { idAttribute } from '../../component_helpers/IDHelper';
import { renderGraphic } from '../../component_helpers/ReactHelper';
import Launch from '@carbon/icons-react/lib/launch/20';
import { idePrefix } from '../../globals/js/settings';

export class IdeCard extends React.Component {
  state = {
    onHover: false,
  };

  mouseEnter = () => {
    if (this.props.cardDisabled) {
      this.setState({
        onHover: true,
      });
    }
  };

  mouseLeave = () => {
    if (this.props.cardDisabled) {
      this.setState({
        onHover: false,
      });
    }
  };

  render = () => {
    const {
      cardId,
      onInteract,
      cardSize,
      cardHref,
      cardLinkTarget,
      cardHeading,
      cardHeadingTitle,
      cardHeadingDescription,
      cardGraphic,
      cardType,
      cardContent,
      className,
      cardDisabled,
      disabledText,
      secondaryGraphic,
    } = this.props;

    const { prefix } = settings;

    let interactions = createInteractionHandler(
      (evt) => {
        if (!cardHref || cardDisabled) {
          evt.preventDefault();
        }
        if (onInteract && !cardDisabled) {
          onInteract(cardId);
        }
      },
      ['onKeyPress', 'onClick']
    );
    let tileClasses = className || '';

    return (
      <div
        key={cardId}
        className={`${cardDisabled ? `${idePrefix}-card--card-disabled` : ''}
        ${idePrefix}-card-container ${idePrefix}-card-container__${cardSize} ${idePrefix}-card-${cardType} ${prefix}--col-sm-${1} ${prefix}--col-md-${2} ${prefix}--col-lg-${4} ${prefix}--col-xlg-${4} ${prefix}--col-max-${4}`}
        {...idAttribute(`ide-card-${cardId}`)}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <div className={`${idePrefix}-card`}>
          <ClickableTile
            tabIndex={0}
            className={`${idePrefix}-card--card-overides ${tileClasses}`}
            href={cardHref ? cardHref : '#'} // add an href which does nothing so a click can be registered
            target={cardType === 'externalLink' ? cardLinkTarget : undefined}
            {...idAttribute(`ide-card-${cardId}-card`)}
            {...interactions}
          >
            {this.renderCardContent(
              cardId,
              cardType,
              cardHeading,
              cardHeadingTitle,
              cardHeadingDescription,
              cardGraphic,
              cardContent,
              cardDisabled,
              disabledText,
              secondaryGraphic
            )}
          </ClickableTile>
        </div>
      </div>
    );
  };

  renderCardContent = (
    cardId,
    cardType,
    cardHeading,
    cardHeadingTitle,
    cardHeadingDescription,
    cardGraphic,
    cardContent,
    cardDisabled,
    disabledText,
    secondaryGraphic
  ) => {
    let jsx = null;
    switch (cardType) {
      default:
      case 'text':
        jsx = this.renderCardHeader(
          cardId,
          cardType,
          cardHeading,
          cardHeadingTitle,
          cardHeadingDescription,
          cardGraphic,
          cardDisabled,
          disabledText,
          <p
            {...idAttribute(`ide-card-${cardId}-text`)}
            className={`${idePrefix}-card--tile-text`}
          ></p>,
          secondaryGraphic
        );
        break;
      case 'node':
        jsx = this.renderCardHeader(
          cardId,
          cardType,
          cardHeading,
          cardHeadingTitle,
          cardHeadingDescription,
          cardGraphic,
          cardDisabled,
          disabledText,
          cardContent ? cardContent.node : undefined,
          secondaryGraphic
        );
        break;
      case 'externalLink':
        jsx = this.renderCardHeader(
          cardId,
          cardType,
          cardHeading,
          cardHeadingTitle,
          cardHeadingDescription,
          cardGraphic,
          cardDisabled,
          disabledText,
          <p
            {...idAttribute(`ide-card-${cardId}-text`)}
            className={`${idePrefix}-card--tile-text`}
          ></p>,
          secondaryGraphic
        );
        break;
      case 'link':
        jsx = this.renderCardHeader(
          cardId,
          cardType,
          cardHeading,
          cardHeadingTitle,
          cardHeadingDescription,
          cardGraphic,
          cardDisabled,
          disabledText,
          <ul>
            {cardContent &&
              cardContent.links &&
              cardContent.links.map((link) => (
                <li key={link.href}>
                  <Link
                    {...idAttribute(`ide-card-${cardId}-${link.href}-Link`)}
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
          </ul>,
          secondaryGraphic
        );
        break;
      case 'custom':
        jsx =
          cardContent && cardContent.renderFunc
            ? cardContent.renderFunc()
            : null;
        break;
    }
    return jsx;
  };

  renderCardHeader = (
    cardId,
    cardType,
    cardHeading,
    cardHeadingTitle,
    cardHeadingDescription,
    cardGraphic,
    cardDisabled,
    disabledText,
    cardBody,
    secondaryGraphic
  ) => {
    return (
      <div
        {...idAttribute(`ide-card-${cardId}-Text-Tile`)}
        className={`${idePrefix}-card--tile`}
      >
        {this.renderCardGraphicHeader(
          cardId,
          cardType,
          cardGraphic,
          secondaryGraphic
        )}
        <div className={`${idePrefix}-card--text-container`}>
          <p
            {...idAttribute(`ide-card-${cardId}-HeadingTitle`)}
            className={`${idePrefix}-card--heading-title`}
          >
            {cardHeadingTitle}
          </p>

          <div className={`${idePrefix}-card-heading-container`}>
            <p
              {...idAttribute(`ide-card-${cardId}-Heading`)}
              className={`${idePrefix}-card--heading`}
            >
              {cardHeading}
            </p>
            {cardDisabled && disabledText && this.state.onHover && (
              <Tooltip
                open={this.state.onHover}
                showIcon
                direction="bottom"
                className={`${idePrefix}-card--card-tooltip`}
              >
                {disabledText}
              </Tooltip>
            )}
          </div>
          <p
            {...idAttribute(`ide-card-${cardId}-HeadingDescription`)}
            className={`${idePrefix}-card--heading-description`}
          >
            {cardHeadingDescription}
          </p>
          {cardBody}
        </div>
      </div>
    );
  };

  renderCardGraphicHeader = (
    cardId,
    cardType,
    cardGraphic,
    secondaryGraphic
  ) => {
    return (
      (cardGraphic || cardType === 'externalLink') && (
        <div
          className={
            `${idePrefix}-card--tile-img-group` +
            (!cardGraphic ? ` ${idePrefix}-card--tile-img-group-right` : '')
          }
          {...idAttribute(`ide-card-${cardId}-Image-Group`)}
        >
          {cardGraphic && (
            <div
              className={`${idePrefix}-card--tile-img`}
              {...idAttribute(`ide-card-${cardId}-Image`)}
            >
              {cardGraphic && renderGraphic(cardGraphic)}
            </div>
          )}
          {(cardType === 'externalLink' || secondaryGraphic === 'external') && (
            <div
              className={`${idePrefix}-card--tile-img`}
              {...idAttribute(`ide-card-${cardId}-launch-Image`)}
            >
              {renderGraphic(Launch)}
            </div>
          )}
        </div>
      )
    );
  };
}

IdeCard.propTypes = {
  /** Optional prop - custom render function can be provided to overwrite the whole content of the card or just the content beneath the heading */
  cardContent: PropTypes.object,
  /** Optional prop - display a disabled card with a tooltip on hover*/
  cardDisabled: PropTypes.bool,
  /** Optional property - icon to be displayed on the card */
  cardGraphic: PropTypes.object,
  /** Required property - card main text */
  cardHeading: PropTypes.string.isRequired,
  /** Optional prop - small text displayed at the bottom of the card*/
  cardHeadingDescription: PropTypes.string,
  /** Optional prop - small text on top of the main card heading*/
  cardHeadingTitle: PropTypes.string,
  /** Optional property - Link to be used for the underlying anchor */
  cardHref: PropTypes.string,
  /** The unique id of the card */
  cardId: PropTypes.string,
  /** Card href target - if the task represents an external link then whether to specify a target */
  cardLinkTarget: PropTypes.string,
  /** Card cardLinkType - if the task represents a link, whether the url should open in a new tab */
  cardLinkType: PropTypes.oneOf(['internal', 'external']),
  /** The size of the card - standard by default */
  cardSize: PropTypes.oneOf(['standard', 'large']),
  /** The type of the card (link, node, text, or custom) - text by default */
  cardType: PropTypes.oneOf(['externalLink', 'node', 'link', 'text', 'custom']),
  /** Optional prop - custom class names to be used for a card */
  className: PropTypes.string,
  /** Optional prop - needed in case cardDisabled: true is provided to display the tooltip text */
  disabledText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** OnClick handler - callback function to model the onClick behaviour of a card*/
  onInteract: PropTypes.func,
  /** Optional prop - set this to "external" to always display the launch out icon */
  secondaryGraphic: PropTypes.oneOf(['external']),
};

IdeCard.defaultProps = {
  cardHeading: 'Test heading - CHANGE ME',
  cardSize: 'standard',
  cardType: 'text',
  cardDisabled: false,
  cardLinkTarget: '_blank',
  disabledText: '',
};
