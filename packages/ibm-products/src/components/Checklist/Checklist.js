/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * TODO: Breakdown titles, icons, clickable items into sub-components
 * See
 *   ModifiedTabs (ModifiedTabLabelNew, ModifiedTabLabelWithClose)
 *   PageHeader (PageHeaderTitle, PageHeaderUtils)
 */

// Import portions of React that are needed.
import React, { useEffect, useState } from 'react';

// Other standard imports.
import PropTypes from 'prop-types';
import cx from 'classnames';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg /*, carbon */ } from '../../settings';

// Carbon and package components we use.
/* TODO: @import(s) of carbon components and other package components. */
import { Button } from 'carbon-components-react';
import { ChevronUp16 } from '@carbon/icons-react';

import { ChecklistIcon } from './ChecklistIcon';
import { ChecklistChart } from './ChecklistChart';

// The block part of our conventional BEM class names (blockClass__E--M).
const blockClass = `${pkg.prefix}--checklist`;
const componentName = 'Checklist';

// NOTE: the component SCSS is not imported here: it is rolled up separately.

// Default values can be included here and then assigned to the prop params,
// e.g. prop = defaults.prop,
// This gathers default values together neatly and ensures non-primitive
// values are initialized early to avoid react making unnecessary re-renders.
// Note that default values are not required for props that are 'required',
// nor for props where the component can apply undefined values reasonably.
// Default values should be provided when the component needs to make a choice
// or assumption when a prop is not supplied.

// Default values for props
const defaults = {
  onClickViewAll: () => {},
  onToggle: () => {},
  open: true,
  showToggle: true,
  taskLists: [],
  theme: 'light',
};

/**
 * TODO: A description of the component.
 */
export let Checklist = React.forwardRef(
  (
    {
      className,
      onClickViewAll = defaults.onClickViewAll,
      onToggle = defaults.onToggle,
      open = defaults.open,
      chartValue,
      chartLabel,
      showToggle = defaults.showToggle,
      taskLists = defaults.taskLists,
      theme = defaults.theme,
      title,
      viewAllLabel,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(open);

    // Don't use this test: {chartValue && chartLabel && (render...)}.
    // If `chartValue` is 0 (zero) - a valid value - then it will render 0 and skip the remaining statement.
    // Use this test instead: {chartLabelAndValue && (render...)}.
    // The ChecklistChart component will validate `chartValue`.
    const chartLabelAndValue = typeof chartValue === 'number' && chartLabel;

    const handleClickToggle = () => {
      setIsOpen((prevOpen) => !prevOpen);
    };

    const handleClickViewAll = () => {
      onClickViewAll();
    };

    // If state changes, then trigger callback.
    useEffect(() => {
      onToggle(isOpen);
    }, [isOpen, onToggle]);

    // If the "open" prop is changed after initialization,
    // then update internal state.
    useEffect(() => {
      setIsOpen(open);
    }, [open]);

    return (
      <aside
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(
          blockClass, // Apply the block class to the main HTML element
          className, // Apply any supplied class names to the main HTML element.
          // example: `${blockClass}__template-string-class-${kind}-n-${size}`,
          {
            [`${blockClass}__closed`]: !isOpen,
          }
        )}
        ref={ref}
        role="main"
        {...getDevtoolsProps(componentName)}
      >
        {(title || chartLabelAndValue) && (
          <header className={`${blockClass}__header`}>
            {chartLabelAndValue && (
              <ChecklistChart value={chartValue} theme={theme} />
            )}

            <div className={`${blockClass}__titles`}>
              {title && <h2 className={`${blockClass}__title`}>{title}</h2>}

              {chartLabelAndValue && (
                <h3 className={`${blockClass}__chart-label`}>{chartLabel}</h3>
              )}
            </div>

            {showToggle && (
              <Button
                aria-expanded={isOpen}
                className={`${blockClass}__toggle`}
                kind="ghost"
                onClick={handleClickToggle}
                role="switch"
                size="small"
              >
                <ChevronUp16 className={cx(`${blockClass}__chevron`)} />
              </Button>
            )}
          </header>
        )}

        <div className={`${blockClass}__content-outer`}>
          <div className={`${blockClass}__content-inner`}>
            <section className={cx(`${blockClass}__body`)}>
              {taskLists.map((list, index) => {
                return (
                  <div
                    className={`${blockClass}__list-group`}
                    key={`${list.title}-${index}`}
                  >
                    {list.title && (
                      <h3
                        title={list.title}
                        className={`${blockClass}__list-title`}
                      >
                        {list.title}
                      </h3>
                    )}
                    <ol className={`${blockClass}__list`}>
                      {list.tasks.map((item, index) => {
                        return (
                          <li
                            className={`${blockClass}__list-item`}
                            key={`${item.label}-${index}`}
                          >
                            <ChecklistIcon kind={item.kind} />

                            {typeof item.onClick === 'function' ? (
                              <Button
                                className={cx(`${blockClass}__button`, {
                                  [`${blockClass}__button--error`]:
                                    item.kind === 'error',
                                })}
                                onClick={() => {
                                  item.onClick(item);
                                }}
                                size="small"
                              >
                                <div title={item.label}>{item.label}</div>
                              </Button>
                            ) : (
                              <span
                                className={cx(
                                  `${blockClass}__label`,
                                  `${blockClass}__label--${item.kind}`
                                )}
                                title={item.label}
                              >
                                {item.label}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              })}
            </section>

            {viewAllLabel && (
              <footer className={`${blockClass}__footer`}>
                <Button
                  className={cx(
                    `${blockClass}__button`,
                    `${blockClass}__view-all`
                  )}
                  onClick={handleClickViewAll}
                  size="small"
                >
                  <div>{viewAllLabel}</div>
                </Button>
              </footer>
            )}
          </div>
        </div>
      </aside>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
Checklist = pkg.checkComponentEnabled(Checklist, componentName);

// The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.
Checklist.displayName = componentName;

// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.
Checklist.propTypes = {
  /**
   * Define both `chartLabel` and `chartValue` to show the chart and its label together.
   */
  chartLabel: PropTypes.string,
  /**
   * A number between 0 and 1.
   *
   * Define both `chartLabel` and `chartValue` to show the chart and its label together.
   */
  chartValue: PropTypes.number,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * Callback for the "View all" button. See also `viewAllLabel`.
   */
  onClickViewAll: PropTypes.func,
  /**
   * Optional callback for when the list is opened/closed.
   */
  onToggle: PropTypes.func,
  /**
   * Specifies whether the component is opened or closed.
   * This can be set during initialization, or changed after being rendered.
   */
  open: PropTypes.bool,
  /**
   * Whether or not to show the open/close toggle.
   */
  showToggle: PropTypes.bool,
  /**
   * The task list can be broken down into sub-lists.
   *
   * Each sub-list can include an optional `title`.
   *
   * Each task must specify the appropriate icon (`kind`) and `label`.
   *
   * If any task has an `onClick` callback function defined,
   * then the `label` will be rendered as a button,
   * else the `label` will be rendered as plain text.
   */
  taskLists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          kind: PropTypes.oneOf([
            'unchecked',
            'indeterminate',
            'checked',
            'disabled',
            'error',
          ]).isRequired,
          label: PropTypes.string.isRequired,
          onClick: PropTypes.func,
        })
      ).isRequired,
    })
  ).isRequired,
  /**
   * Determines the theme of the component.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * The title of the component.
   */
  title: PropTypes.string,
  /**
   * If defined, will show and enable the "View all (#)" button at the bottom of the list.
   */
  viewAllLabel: PropTypes.string,
};
