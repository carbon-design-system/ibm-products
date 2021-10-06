//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tab, Tabs } from 'carbon-components-react';
import { settings } from 'carbon-components';
import { createInteractionHandler } from '../../component_helpers/A11yHelper';
import { idAttribute } from '../../component_helpers/IDHelper';
import { IdePageContent } from '../IdeNavigation';
import { IdeCard } from '../IdeCard';
import { renderGraphic } from '../../component_helpers/ReactHelper';
import { idePrefix } from '../../globals/js/settings';

const { prefix } = settings;
export default class IdeHome extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSetIndex: 0,
      lastSetIndex: undefined,
    };
    this.handleSetChange = this.handleSetChange.bind(this);
  }

  // required to encapsulate the carbon selected tab logic, but offer the ability to be controlled by a parent for selected tab
  static getDerivedStateFromProps(props, state) {
    let derivedState = null;
    // check which set to render, if startSelected provided in any set
    let selectedSetIndex = props.sets.findIndex((set) => {
      return set.startSelected === true;
    });

    if (selectedSetIndex !== -1 && selectedSetIndex !== state.lastSetIndex) {
      derivedState = {
        currentSetIndex: selectedSetIndex,
        lastSetIndex: state.lastSetIndex,
      };
    }

    return derivedState;
  }

  handleSetChange(setIndex) {
    this.setState({
      lastSetIndex: this.state.currentSetIndex,
      currentSetIndex: setIndex,
    });
  }

  // Input an array of tasks and returns an array of cards
  createCardsFromTasks(tasks) {
    return tasks.map((task) => {
      let ideCardProps = {
        key: task.taskId,
        cardId: task.taskId,
        onInteract: task.onInteract,
        cardSize: task.cardSize,
        cardHref: task.cardHref,
        cardLinkTarget: task.cardLinkTarget,
        cardHeading: task.taskHeading,
        cardHeadingTitle: task.taskHeadingTitle,
        cardHeadingDescription: task.taskHeadingDescription,
        cardGraphic: task.taskGraphic,
        cardType: task.cardType
          ? task.cardType
          : task.renderFunc
          ? 'custom'
          : task.taskLinks
          ? 'link'
          : task.cardHref && task.cardLinkType == 'external'
          ? 'externalLink'
          : 'text',
        cardDisabled: task.disabled,
        cardContent: task.taskContent,
        disabledText: task.tooltipText,
        secondaryGraphic: task.secondaryGraphic,
      };
      if (ideCardProps.cardType == 'custom') {
        ideCardProps.cardContent = { renderFunc: task.renderFunc };
      } else if (ideCardProps.cardType == 'link') {
        ideCardProps.cardContent = { links: task.taskLinks };
      }

      return <IdeCard {...ideCardProps} key={ideCardProps.key}></IdeCard>;
    });
  }

  renderSets(sets, currentSet, multipleSetType) {
    let setsToRender = [];

    // build each set with its tasks
    sets.forEach((set) => {
      const setToRender = {
        id: set.id,
        heading: set.setHeading,
      };
      if (set.tasks) {
        setToRender.tasks = this.createCardsFromTasks(set.tasks, set.id);
      } else {
        setToRender.renderFunc = () =>
          set.renderFunc ? set.renderFunc() : <div>Default Content</div>;
      }
      setsToRender.push(setToRender);
    });

    let setsJSX = null;

    if (setsToRender.length > 1) {
      if (multipleSetType === 'tab') {
        // tabs case
        setsJSX = (
          <Tabs
            selected={currentSet}
            className={`${prefix}--row`}
            tabContentClassName={`${idePrefix}-home-tab-content`}
            {...idAttribute(`IdeHome-Tabs`)}
          >
            {setsToRender.map((set, index) => {
              return (
                <Tab
                  id={`${idePrefix}-home-tab-content-${set.id}`}
                  key={set.id}
                  label={set.heading}
                  {...idAttribute(`IdeHome-Tab-${set.id}`)}
                  {...createInteractionHandler(() => {
                    // on tab click/press, update the selected index
                    this.handleSetChange(index);
                  })}
                >
                  <section
                    {...idAttribute('IdeHome-Task-Set')}
                    className={`${prefix}--row ${idePrefix}-home-full-width`}
                  >
                    {set.tasks ? set.tasks : set.renderFunc()}
                  </section>
                </Tab>
              );
            })}
          </Tabs>
        );
      }
      if (multipleSetType === 'section') {
        // sections case
        setsJSX = setsToRender.map((set) => {
          return (
            <section
              key={set.id}
              {...idAttribute(`IdeHome-Section-${set.id}`)}
              className={`${prefix}--row ${idePrefix}-home-full-width`}
            >
              {set.heading && (
                <h3
                  {...idAttribute(`IdeHome-Section-title-${set.id}`)}
                  className={`${idePrefix}-home--section-title`}
                >
                  {set.heading}
                </h3>
              )}
              {set.tasks ? set.tasks : set.renderFunc()}
            </section>
          );
        });
      }
    } else if (setsToRender.length === 1) {
      // one set case
      setsJSX = (
        <section
          {...idAttribute('IdeHome-Task-Set')}
          className={`${prefix}--row ${idePrefix}-home-full-width`}
        >
          {setsToRender[0].tasks
            ? setsToRender[0].tasks
            : setsToRender[0].renderFunc()}
        </section>
      );
    }

    return (
      <div
        {...idAttribute('IdeHome-Sets')}
        className={`${prefix}--row ${prefix}--grid ${prefix}--grid--condensed ${idePrefix}-home-table`}
      >
        {setsJSX}
      </div>
    );
  }

  render(
    {
      multipleSetType,
      headerCollapsed,
      headerCollapsible,
      headerButtonTextCollapse,
      headerButtonTextExpand,
      headerHandleCollapseFunc,
      headerOne,
      headerTwo,
      headerGraphic,
      sets,
      className,
      ...others
    } = this.props
  ) {
    return (
      <section
        {...idAttribute('IdeHome')}
        className={`${idePrefix}-home ${className}`}
        {...others}
      >
        <IdePageContent>
          <div
            {...idAttribute('IdeHome-Header')}
            className={`${
              headerCollapsed ? 'collapsed' : ''
            } ${idePrefix}-home-header ${prefix}--row`}
          >
            <div
              {...idAttribute('IdeHome-Header-Text')}
              className={`
                ${idePrefix}-home-heading-container
                ${prefix}--col-sm-${
                !headerCollapsible ? 1 : headerCollapsed ? 3 : 2
              }
                ${prefix}--col-md-${
                !headerCollapsible ? 2 : headerCollapsed ? 6 : 3
              }
                ${prefix}--col-lg-${
                !headerCollapsible ? 6 : headerCollapsed ? 14 : 6
              }
                ${prefix}--col-xlg-${
                !headerCollapsible ? 6 : headerCollapsed ? 14 : 6
              }
                ${prefix}--col-max-${
                !headerCollapsible ? 6 : headerCollapsed ? 14 : 6
              }
              `}
            >
              <div>
                <p className={`${idePrefix}-home-product-heading`}>
                  {headerOne}
                </p>
                {!headerCollapsed && (
                  <p className={`${idePrefix}-home-call-to-action`}>
                    {headerTwo}
                  </p>
                )}
              </div>
            </div>
            {!headerCollapsed && (
              <div
                {...idAttribute('IdeHome-Header-Image')}
                className={`
                  ${idePrefix}-home-image-container
                  ${prefix}--col-sm-${!headerCollapsible ? 3 : 2}
                  ${prefix}--col-md-${!headerCollapsible ? 6 : 3}
                  ${prefix}--col-lg-${!headerCollapsible ? 10 : 8}
                  ${prefix}--col-xlg-${!headerCollapsible ? 10 : 8}
                  ${prefix}--col-max-${!headerCollapsible ? 10 : 8}
                `}
              >
                {renderGraphic(headerGraphic)}
              </div>
            )}
            {/* Show collapsible toggle if headerCollapsed is defined */}
            {headerCollapsible && (
              <div
                {...idAttribute('IdeHome-header-toggle-container')}
                className={`
                  ${idePrefix}-home-header-toggle-container
                  ${prefix}--col-sm-${1}
                  ${prefix}--col-md-${2}
                  ${prefix}--col-lg-${2}
                  ${prefix}--col-xlg-${2}
                  ${prefix}--col-max-${2}
                `}
              >
                <Button
                  {...idAttribute('IdeHome-header-toggle')}
                  disabled={false}
                  kind="ghost"
                  onClick={headerHandleCollapseFunc}
                  renderIcon={undefined}
                  size="small"
                  type="button"
                >
                  {headerCollapsed
                    ? headerButtonTextExpand
                    : headerButtonTextCollapse}
                </Button>
              </div>
            )}
          </div>
          {this.renderSets(sets, this.state.currentSetIndex, multipleSetType)}
        </IdePageContent>
      </section>
    );
  }
}

IdeHome.propTypes = {
  /** An optional toggle text to use on the collapsible header button - for collapsing the header. */
  headerButtonTextCollapse: PropTypes.string,
  /** An optional toggle text to use on the collapsible header button - for expanding the header. */
  headerButtonTextExpand: PropTypes.string,
  /** An optional boolean flag which should be instantiated to false by the consumer so that the expanded banner is initially used. When this flag is provided the collapsible banner will be used by default. */
  headerCollapsed: PropTypes.bool,
  /** An optional boolean flag which should be instantiated to true by the consumer should they want the banner to be collapsible. */
  headerCollapsible: PropTypes.bool,
  /** Optional graphic properties. This graphic will be rendered alongside the header text. This can either be a react component, or the following shape*/
  headerGraphic: PropTypes.oneOfType([
    PropTypes.shape({
      /** link to the image to display */
      imgSrc: PropTypes.string.isRequired,
      /** Alt text for this image. Must be provided to be accessible, and must be pre translated */
      imgAlt: PropTypes.string.isRequired,
      /** Optional - css class to apply to this image */
      imgClassName: PropTypes.string,
    }),
    /** A react component, with all props etc defined */
    PropTypes.element,
    PropTypes.object,
  ]),
  /** An optional callback function to call when the toggle is activated. */
  headerHandleCollapseFunc: PropTypes.func,
  /** Main header text. Must be pre translated */
  headerOne: PropTypes.string.isRequired,
  /** Secondary header text. Optional. Must be pre translated */
  headerTwo: PropTypes.string,
  /** The initial set to render on mount. Should be the id of the set you want to render first. If undefined, will render the first set provide */
  initialSet: PropTypes.string,
  /** How multiple sets are to be displayed - tab is default. */
  multipleSetType: PropTypes.oneOf(['section', 'tab']),
  /** Set of grouped activities or tasks. If more than one is provided options appear as tabs. */
  sets: PropTypes.arrayOf(
    PropTypes.shape({
      /** Unique id for this set of tasks */
      id: PropTypes.string.isRequired,
      /** Heading for this set of tasks. Must be pre translated */
      setHeading: PropTypes.string.isRequired,
      /** Optional - provide this if this set is to start selected. If multiple are provided, the last one wins. */
      startSelected: PropTypes.bool,
      /** The set of tasks */
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          /** Unique id for this task */
          taskId: PropTypes.string.isRequired,
          /** Card href - if the task represents a link, the url the card should refer too */
          cardHref: PropTypes.string,
          /** Card cardLinkType - if the task represents a link, whether the url should open in a new tab */
          cardLinkType: PropTypes.oneOf(['internal', 'external']),
          /** Card href target - if the task represents an external link then whether to specify a target */
          cardLinkTarget: PropTypes.string,
          /** Card size - standard is default */
          cardSize: PropTypes.oneOf(['standard', 'large']),
          /** Card size - standard is default */
          cardType: PropTypes.oneOf([
            'externalLink',
            'node',
            'link',
            'text',
            'custom',
          ]),
          /** renderFunc - optional - provide this to insert your own JSX content into a card. If provided, taskHeading, taskSubtext and taskGrpahic are not rendered ignored */
          renderFunc: PropTypes.func,
          /** Task graphic for this task. This can either be a react component, or the following shape */
          taskGraphic: PropTypes.oneOfType([
            PropTypes.shape({
              /** link to the image to display */
              imgSrc: PropTypes.string.isRequired,
              /** Alt text for this image. Must be provided to be accessible, and must be pre translated */
              imgAlt: PropTypes.string.isRequired,
              /** Optional - css class to apply to this image */
              imgClassName: PropTypes.string,
            }),
            /** A react component, with all props etc defined */
            PropTypes.element,
          ]),
          /** Heading for this task. Used in aria markup for the tile, and as the heading if no render function is provided. Must be pre translated */
          taskHeading: PropTypes.string.isRequired,
          /** Heading title for this task. Used in aria markup for the tile, and as the heading if no render function is provided. Must be pre translated */
          taskHeadingTitle: PropTypes.string,
          /** Heading subtitle for this task. Used in aria markup for the tile, and as the heading if no render function is provided. Must be pre translated */
          taskHeadingDescription: PropTypes.string,
          /** Subtext for this task. Must be pre translated if provided */
          taskSubtext: PropTypes.string,
          /** Array of items to show as links */
          taskLinks: PropTypes.arrayOf(
            PropTypes.shape({
              /** translated text to show as link */
              text: PropTypes.string,
              /** href destination for the link */
              href: PropTypes.string,
            })
          ),
          /** Function which is fired on click/keypress of this tab */
          onInteract: PropTypes.func,
          /** Boolean flag to conditionally render a disabled card */
          disabled: PropTypes.bool,
          /** Tooltip to display on the link of a disabled card */
          tooltipText: PropTypes.string,
          /** Optional prop - set this to "external" to always display the launch out icon */
          secondaryGraphic: PropTypes.oneOf(['external']),
        })
      ),
      /** A callback function that should return user defined JSX content that will be displayed under the tabs */
      renderFunc: PropTypes.func,
    })
  ),
};

IdeHome.defaultProps = {
  multipleSetType: 'tab',
  headerCollapsible: false,
  headerButtonTextExpand: 'Show more - CHANGE ME',
  headerButtonTextCollapse: 'Show less - CHANGE ME',
  headerOne: 'Product text',
  headerTwo: 'Call to action',
  headerGraphic: {},
  sets: [],
};
