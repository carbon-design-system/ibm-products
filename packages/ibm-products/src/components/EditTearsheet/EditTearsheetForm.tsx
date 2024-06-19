/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ForwardedRef, ReactNode, forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, FormGroup, Grid } from '@carbon/react';
import {
  FormContext,
  FormContextType,
  FormNumberContext,
} from './EditTearsheet';
import { pkg } from '../../settings';
import pconsole from '../../global/js/utils/pconsole';
import { useRetrieveFormTitles } from '../../global/js/hooks/useRetrieveFormTitles';

const componentName = 'EditTearsheetForm';
const blockClass = `${pkg.prefix}--tearsheet-edit__form`;

// Default values for props
const defaults = {
  hasFieldset: true,
};

interface EditTearsheetFormBaseProps {
  /**
   * Content that shows in the tearsheet form
   */
  children?: ReactNode;

  /**
   * Sets an optional className to be added to the tearsheet form
   */
  className?: string;

  /**
   * Sets an optional description on the form component
   */
  description?: string;

  /**
   * This optional prop will render your form content inside of a fieldset html element
   * and is defaulted to true.
   * You can set this prop to `false` if you have multiple fieldset elements or want to control the children of your Full Page's form content.
   */
  hasFieldset?: boolean;

  /**
   * Sets an optional subtitle on the form component
   */
  subtitle?: string;

  /**
   * Sets the title text for a tearsheet form
   */
  title: ReactNode;
}

type EditTearsheetFormFieldsetTypes =
  | {
      hasFieldset?: false;
      fieldsetLegendText: string;
    }
  | {
      hasFieldset: true;
      fieldsetLegendText: string;
    };

type EditTearsheetFormProps = EditTearsheetFormBaseProps &
  EditTearsheetFormFieldsetTypes;

export let EditTearsheetForm = forwardRef(
  (
    {
      // The component props, in alphabetical order (for consistency).

      children,
      className,
      description,
      fieldsetLegendText,
      hasFieldset = defaults.hasFieldset,
      subtitle,
      title,

      // Collect any other property values passed in.
      ...rest
    }: EditTearsheetFormProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const formContext = useContext<FormContextType | null>(FormContext);
    const formNumber = useContext(FormNumberContext);
    useRetrieveFormTitles({ formContext, formNumber, title });

    return formContext ? (
      <div
        {
          // Pass through any other property values as HTML attributes.
          ...rest
        }
        className={cx(blockClass, className, {
          [`${blockClass}__form--hidden-form`]:
            formNumber !== formContext?.currentForm,
          [`${blockClass}__form--visible-form`]:
            formNumber === formContext?.currentForm,
        })}
        ref={ref}
      >
        <Grid>
          <Column xlg={12} lg={12} md={8} sm={4}>
            <h4 className={`${blockClass}--title`}>{title}</h4>
            {subtitle && (
              <h6 className={`${blockClass}--subtitle`}>{subtitle}</h6>
            )}
            {description && (
              <p className={`${blockClass}--description`}>{description}</p>
            )}
          </Column>
          <Column span={100}>
            {hasFieldset ? (
              <FormGroup
                legendText={fieldsetLegendText}
                className={`${blockClass}--fieldset`}
              >
                <Grid>{children}</Grid>
              </FormGroup>
            ) : (
              children
            )}
          </Column>
        </Grid>
      </div>
    ) : (
      pconsole.warn(
        `You have tried using a ${componentName} component outside of a EditTearsheet. This is not allowed. ${componentName}s should always be children of the EditTearsheet`
      )
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
EditTearsheetForm = pkg.checkComponentEnabled(EditTearsheetForm, componentName);

EditTearsheetForm.propTypes = {
  /**
   * Content that shows in the tearsheet form
   */
  children: PropTypes.node,

  /**
   * Sets an optional className to be added to the tearsheet form
   */
  className: PropTypes.string,

  /**
   * Sets an optional description on the form component
   */
  description: PropTypes.string,

  /**
   * This is the required legend text that appears above a fieldset html element for accessibility purposes.
   * You can set the `hasFieldset` prop to false if you have multiple fieldset elements or want to control the children of your Full Page's form content.
   * Otherwise, use CSS to hide/remove this label text.
   */
  /**@ts-ignore */
  fieldsetLegendText: PropTypes.string.isRequired.if(
    ({ hasFieldset }) => !!hasFieldset
  ),

  /**
   * This optional prop will render your form content inside of a fieldset html element
   * and is defaulted to true.
   * You can set this prop to `false` if you have multiple fieldset elements or want to control the children of your Full Page's form content.
   */
  /**@ts-ignore*/
  hasFieldset: PropTypes.bool,

  /**
   * Sets an optional subtitle on the form component
   */
  /**@ts-ignore*/
  subtitle: PropTypes.string,

  /**
   * Sets the title text for a tearsheet form
   */
  title: PropTypes.node.isRequired,
};
