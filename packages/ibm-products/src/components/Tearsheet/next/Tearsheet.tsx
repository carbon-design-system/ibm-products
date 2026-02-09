/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
  useState,
  useRef,
  RefObject,
  forwardRef,
  ReactNode,
  ForwardedRef,
  FC,
  useEffect,
} from 'react';
import { useIsomorphicEffect } from '../../../global/js/hooks';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  ComposedModal,
  ComposedModalProps,
  unstable_FeatureFlags as FeatureFlags,
  Layer,
  ModalBody,
  usePrefix,
} from '@carbon/react';
import { blockClass, TearsheetContext } from './context';
import TearsheetHeader, {
  TearsheetHeaderProps,
  TearsheetNavigationBar,
  TearsheetNavigationBarProps,
  TearsheetScrollButton,
  TearsheetScrollButtonProps,
} from './TearsheetHeader';
import TearsheetHeaderContent, {
  TearsheetHeaderContentProps,
} from './TearsheetHeaderContent';
import TearsheetBody, {
  Influencer,
  InfluencerProps,
  MainContent,
  MainContentProps,
  SummaryContent,
  SummaryContentProps,
  TearsheetBodyProps,
} from './TearsheetBody';

import {
  TearsheetHeaderActionItem,
  TearsheetHeaderActionItemProps,
  TearsheetHeaderActions,
  TearsheetHeaderActionsProps,
} from './TearsheetHeaderActions';
import { breakpoints } from '@carbon/layout';
import { usePortalTarget } from '../../../global/js/hooks/usePortalTarget';
import { useStackContext } from './StackContext';
import { useMatchMedia } from '../../../global/js/hooks/useMatchMedia';
import { useId } from '../../../global/js/utils/useId';

/**
 * ----------
 * Tearsheet
 * ----------
 */

export interface TearsheetProps extends ComposedModalProps {
  children?: React.ReactNode;

  /**
   * Specifies whether the tearsheet is currently open.
   */
  open?: boolean;

  /**
   * User can pass any class names to add to the modal wrapper
   */
  className?: string;
  /**
   * User can pass any class names that will added to the modal container, rather than the wrapper
   */
  containerClassName?: string;
  /**
   * the defines the gap from top of the view port. Defaulted to 3rem
   */
  verticalGap?: string;
  /**
   * Default influencer takes 256px, this allow to override eg: 300px , 20rem
   */
  influencerWidth?: string;
  /**
   * Default rightContent takes 256px, this allow to override eg: 300px , 20rem
   */
  summaryContentWidth?: string;
  /**
   * Default to wide variant. Pass in narrow for narrow tearsheet
   */
  variant?: 'wide' | 'narrow';
  /**
   * Optional prop that allows you to pass any component.
   */
  decorator?: ReactNode;

  /**
   * Specify the CSS selectors that match the floating menus.
   *
   * See https://react.carbondesignsystem.com/?path=/docs/components-composedmodal--overview#focus-management
   */
  selectorsFloatingMenus?: string[];

  /**
   * The aria label applied to the tearsheet
   */
  ariaLabel?: string;

  /**
   * An optional handler that is called when the user closes the tearsheet (by
   * clicking the close button, if enabled, or clicking outside, if enabled).
   * Returning `false` here prevents the modal from closing.
   */
  onClose?: () => void;
  /**
   * Specify a CSS selector that matches the DOM element that should be
   * focused when the Modal opens.
   */
  selectorPrimaryFocus?: PropTypes.string;
  /**
   * The DOM element that the tearsheet should be rendered within. Defaults to document.body.
   */
  portalTarget?: HTMLElement;
}

export type TearsheetComponentType = React.ForwardRefExoticComponent<
  TearsheetProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: FC<TearsheetHeaderProps>;
  HeaderContent: FC<TearsheetHeaderContentProps>;
  Influencer: FC<InfluencerProps>;
  NavigationBar: FC<TearsheetNavigationBarProps>;
  ScrollButton: FC<TearsheetScrollButtonProps>;
  HeaderActions: FC<TearsheetHeaderActionsProps>;
  HeaderActionItem: FC<TearsheetHeaderActionItemProps>;
  MainContent: FC<MainContentProps>;
  SummaryContent: FC<SummaryContentProps>;
  Body: FC<TearsheetBodyProps>;
  Footer: FC<FooterProps>;
};

export const Tearsheet = forwardRef<HTMLDivElement, TearsheetProps>(
  (
    {
      children,
      variant = 'wide',
      selectorsFloatingMenus = [],
      className,
      influencerWidth,
      summaryContentWidth,
      ariaLabel,
      onClose,
      selectorPrimaryFocus,
      open = false,
      portalTarget,
      verticalGap,
      containerClassName,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const carbonPrefix = usePrefix();
    const localRef = useRef(undefined);
    const bodyRef = useRef<HTMLDivElement>(null);
    const modalRef = (ref || localRef) as RefObject<HTMLDivElement>;
    const smMediaQuery = `(max-width: ${breakpoints.md.width})`;
    const isSm = useMatchMedia(smMediaQuery) || variant === 'narrow';

    const [hasCloseIcon, setHasCloseIcon] = useState(true);
    const [fullyCollapsed, setFullyCollapsed] = useState(false);
    const [disableHeaderCollapse, setDisableHeaderCollapse] = useState(false);

    const arr = React.Children.toArray(children);
    const header = arr.find((child: any) => child.type === TearsheetHeader);
    const influencer = arr.find((child: any) => child.type === Influencer);
    const body = arr.find((child: any) => child.type === TearsheetBody);
    const footer = arr.find((child: any) => child.type === Footer);

    const uniqueId = useRef(useId());
    const { notifyStack, stack, getDepth, getScaleFactor, getBlockSizeChange } =
      useStackContext();

    const [depth, setDepth] = useState(0);

    const renderPortalUse = usePortalTarget(portalTarget);

    useIsomorphicEffect(() => {
      const AILabelWidth =
        modalRef.current?.querySelector(`.${carbonPrefix}--ai-label`)
          ?.clientWidth ?? 0;
      const headerActionMarginRight = AILabelWidth + 24 + (isSm ? 8 : 0); // 24 is to compeNsate for close button
      document.documentElement.style.setProperty(
        '--tearsheet-header-action-offset',
        `${headerActionMarginRight}px`
      );

      if (influencerWidth) {
        document.documentElement.style.setProperty(
          '--tearsheet-influencer-width',
          `${influencerWidth}`
        );
      }
      if (summaryContentWidth) {
        document.documentElement.style.setProperty(
          '--tearsheet-summary-content-width',
          `${summaryContentWidth}`
        );
      }
      if (verticalGap) {
        document.documentElement.style.setProperty(
          '--tearsheet-vertical-gap',
          `${verticalGap}`
        );
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      isSm,
      rest.decorator,
      influencerWidth,
      summaryContentWidth,
      verticalGap,
    ]);

    useIsomorphicEffect(() => {
      if (bodyRef.current) {
        notifyStack?.(uniqueId.current, open, bodyRef.current);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => {
      if (stack?.length > 0) {
        const stackDepth = getDepth?.(uniqueId.current),
          blockSizeChange = getBlockSizeChange?.(uniqueId.current),
          scaleFactor = getScaleFactor?.(uniqueId.current);

        setDepth(stackDepth as number);

        modalRef.current.style.setProperty('--stack-depth', stackDepth + '');
        modalRef.current.style.setProperty(
          '--block-size-change',
          blockSizeChange
        );
        modalRef.current.style.setProperty('--scale-factor', scaleFactor + '');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stack]);

    return renderPortalUse(
      <TearsheetContext.Provider
        value={{
          hasCloseIcon,
          setHasCloseIcon,
          fullyCollapsed,
          setFullyCollapsed,
          onClose,
          disableHeaderCollapse,
          setDisableHeaderCollapse,
          variant,
          isSm,
        }}
      >
        <FeatureFlags enableExperimentalFocusWrapWithoutSentinels>
          <ComposedModal
            {...rest}
            aria-label={ariaLabel}
            className={cx(blockClass, className, {
              [`${blockClass}--wide`]: variant === 'wide',
              [`${blockClass}--narrow`]: variant === 'narrow',
              [`${blockClass}--stacked`]: depth > 0,
              [`${blockClass}--stack-activated`]: stack.length > 1,
              [`${blockClass}--has-ai-label`]:
                !!rest.decorator &&
                rest.decorator['type']?.displayName === 'AILabel',
              [`${blockClass}--has-decorator`]:
                !!rest.decorator &&
                rest.decorator['type']?.displayName !== 'AILabel',
              [`${blockClass}--has-close`]: hasCloseIcon,
            })}
            containerClassName={cx(
              `${blockClass}__container`,
              containerClassName
            )}
            {...{ onClose, open, selectorPrimaryFocus }}
            ref={modalRef}
            selectorsFloatingMenus={[
              `.${carbonPrefix}--overflow-menu-options`,
              `.${carbonPrefix}--tooltip`,
              '.flatpickr-calendar',
              `.${blockClass}__container`,
              `.${carbonPrefix}--menu`,
              ...selectorsFloatingMenus,
            ]}
            isFullWidth={true}
            size={variant === 'narrow' ? 'sm' : ''}
          >
            {header}
            <ModalBody className={`${blockClass}__body-layout`} ref={bodyRef}>
              {influencer}

              {body}

              {footer}
            </ModalBody>
          </ComposedModal>
        </FeatureFlags>
      </TearsheetContext.Provider>
    );
  }
) as TearsheetComponentType;

export interface FooterProps {
  children: ReactNode;
  className?: string;
}
const Footer = forwardRef<HTMLDivElement, FooterProps>(({ children }, ref) => {
  return (
    <footer className={`${blockClass}__footer`} ref={ref}>
      {children}
    </footer>
  );
});

Tearsheet.Header = TearsheetHeader;
Tearsheet.HeaderContent = TearsheetHeaderContent;
Tearsheet.Body = TearsheetBody;
Tearsheet.Influencer = Influencer;
Tearsheet.MainContent = MainContent;
Tearsheet.SummaryContent = SummaryContent;
Tearsheet.Footer = Footer;
Tearsheet.NavigationBar = TearsheetNavigationBar;
Tearsheet.ScrollButton = TearsheetScrollButton;
Tearsheet.HeaderActions = TearsheetHeaderActions;
Tearsheet.HeaderActionItem = TearsheetHeaderActionItem;
