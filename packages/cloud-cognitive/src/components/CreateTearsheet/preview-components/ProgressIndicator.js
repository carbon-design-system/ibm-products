/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import { settings } from 'carbon-components';
import {
  CheckmarkOutline16,
  Warning16,
  RadioButton16,
  CircleFilled16,
} from '@carbon/icons-react';
import { keys, matches } from 'carbon-components-react';

const { prefix } = settings;

const defaultRenderLabel = (props) => <p {...props} />;

const defaultTranslations = {
  'carbon.progress-step.complete': 'Complete',
  'carbon.progress-step.incomplete': 'Incomplete',
  'carbon.progress-step.current': 'Current',
  'carbon.progress-step.invalid': 'Invalid',
};


export class ProgressStep extends React.PureComponent {
  constructor(props) {
    super(props);

      // should these be state or props??
    // this.state = {
    //   current: false,
    //   complete: false,
    //   invalid: false,
    //   disabled: false
    // };
   }

  render() {
    const {
      label,
      description,
      className,   
      secondaryLabel,   
      onClick,
      renderLabel: ProgressStepLabel,
      current,
      complete,
      invalid,
      disabled,
      // translateWithId,
      ...rest
    } = this.props

   const translateWithId = (messageId) => {
      return defaultTranslations[messageId];
    }

  const classes = classnames({
    [`${prefix}--progress-step`]: true,
    [`${prefix}--progress-step--current`]: current,
    [`${prefix}--progress-step--complete`]: complete,
    [`${prefix}--progress-step--incomplete`]: !complete && !current,
    [`${prefix}--progress-step--disabled`]: disabled,
    [className]: className,
  });

  const handleKeyDown = (e) => {
    if (matches(e, [keys.Enter, keys.Space])) {
      onClick();
    }
  };

  // eslint-disable-next-line react/prop-types
  const SVGIcon = ({ complete, current, description, invalid, prefix }) => {
    if (invalid) {
      return (
        <Warning16 className={`${prefix}--progress__warning`}>
          <title>{description}</title>
        </Warning16>
      );
    }
    if (current) {
      return (
        <CircleFilled16>
          <title>{description}</title>
        </CircleFilled16>
      );
    }
    if (complete) {
      return (
        <CheckmarkOutline16>
          <title>{description}</title>
        </CheckmarkOutline16>
      );
    }
    return (
      <RadioButton16>
        <title>{description}</title>
      </RadioButton16>
    );
  };

  let message = translateWithId('carbon.progress-step.incomplete');

  if (current) {
    message = translateWithId('carbon.progress-step.current');
  }

  if (complete) {
    message = translateWithId('carbon.progress-step.complete');
  }

  if (invalid) {
    message = translateWithId('carbon.progress-step.invalid');
  }

  return (
    <li className={classes}>
      <button
        type="button"
        className={classnames(`${prefix}--progress-step-button`, {
          [`${prefix}--progress-step-button--unclickable`]: !onClick || current,
        })}
        disabled={disabled}
        aria-disabled={disabled}
        tabIndex={!current && onClick && !disabled ? 0 : -1}
        onClick={!current ? onClick : undefined}
        onKeyDown={this.handleKeyDown}
        title={label}
        {...rest}>
        <span className={`${prefix}--assistive-text`}>{message}</span>
        <SVGIcon
          complete={complete}
          current={current}
          description={description}
          invalid={invalid}
          prefix={prefix}
        />
        <ProgressStepLabel className={`${prefix}--progress-label`}>
          {label}
        </ProgressStepLabel>
        {secondaryLabel !== null && secondaryLabel !== undefined ? (
          <p className={`${prefix}--progress-optional`}>{secondaryLabel}</p>
        ) : null}
        <span className={`${prefix}--progress-line`} />
      </button>
    </li>
  )


    ProgressStep.propTypes = {
      /**
       * Provide an optional className to be applied to the containing `<li>` node
       */
      className: PropTypes.string,

      /**
       * Specify whether the step has been completed
       */
      complete: PropTypes.bool,

      /**
       * Specify whether the step is the current step
       */
      current: PropTypes.bool,

      /**
       * Provide a description for the <ProgressStep>
       */
      description: PropTypes.string,

      /**
       * Specify whether the step is disabled
       */
      disabled: PropTypes.bool,

      /**
       * Index of the current step within the ProgressIndicator
       */
      index: PropTypes.number,

      /**
       * Specify whether the step is invalid
       */
      invalid: PropTypes.bool,

      /**
       * Provide the label for the <ProgressStep>
       */
      label: PropTypes.node.isRequired,

      /**
       * A callback called if the step is clicked or the enter key is pressed
       */
      onClick: PropTypes.func,

      /**
       * Provide the props that describe a progress step tooltip
       */
      overflowTooltipProps: PropTypes.object,

      /*
       * An optional parameter to allow for overflow content to be rendered in a
       * tooltip.
       */
      renderLabel: PropTypes.func,

      /**
       * Provide an optional secondary label
       */
      secondaryLabel: PropTypes.string,

      /**
       * The ID of the tooltip content.
       */
      tooltipId: PropTypes.string,

      /**
       * Optional method that takes in a message id and returns an
       * internationalized string.
       */
      translateWithId: PropTypes.func,
    };
  }
}
 

  ProgressStep.defaultProps = {
    renderLabel: defaultRenderLabel,
    // current: false,
    // complete: false,
    // translateWithId,
  }


export class ProgressIndicator extends Component {
  state = {};

  static propTypes = {
    /**
     * Provide <ProgressStep> components to be rendered in the
     * <ProgressIndicator>
     */
    // children: PropTypes.node,

    /**
     * Provide an optional className to be applied to the containing node
     */
    className: PropTypes.string,

    /**
     * Optionally specify the current step array index
     */
    currentIndex: PropTypes.number,

    /**
     * Optional callback called if a ProgressStep is clicked on.  Returns the index of the step.
     */
    onChange: PropTypes.func,

    /**
     * Specify whether the progress steps should be split equally in size in the div
     */
    spaceEqually: PropTypes.bool,
    /**
     * Determines whether or not the ProgressIndicator should be rendered vertically.
     */
    vertical: PropTypes.bool,

    // Pass in data needed to render the ProgressSteps
    stepData: PropTypes.array,
  };

  static defaultProps = {
    currentIndex: 0,
  };

  static getDerivedStateFromProps({ currentIndex }, state) {
    const { prevCurrentIndex } = state;
    return prevCurrentIndex === currentIndex
      ? null
      : {
          currentIndex,
          prevCurrentIndex: currentIndex,
        };
  }

  renderSteps = (stepData) => { 
    const { onChange } = this.props;

    return stepData.map((step, index) => {
      // only setup click handlers if onChange event is passed
      const onClick = onChange ? () => onChange(index) : undefined;

      let isCurrent
      let isComplete

      if (index === this.state.currentIndex) {
       isCurrent = true
      }

      if (index < this.state.currentIndex) {
        if (step.complete != true) {
          isComplete = true
        }
      }  

      if (index > this.state.currentIndex) {
          isComplete= step.complete || false
      }

      return <ProgressStep
          index={ index }
          onClick={ step.onClick}
          key={index} 
          label={ step.label }
          description={ step.description }
          secondaryLabel={ step.secondaryLabel }
          renderLabel={ step.renderLabel}
          current={ isCurrent }
          complete={ isComplete }
      />  
    })
  }


  render() {
    const {
      className,
      currentIndex, // eslint-disable-line no-unused-vars
      vertical,
      spaceEqually,
      stepData,
      ...other
    } = this.props;
    const classes = classnames({
      [`${prefix}--progress`]: true,
      [`${prefix}--progress--vertical`]: vertical,
      [`${prefix}--progress--space-equal`]: spaceEqually && !vertical,
      [className]: className,
    });
    return (
      <ul className={classes} {...other}>
        {this.renderSteps(stepData)}
      </ul>
    );
  }
}
