import * as React from 'react';
import { createLink, LinkComponent } from '@tanstack/react-router';
import { Link } from '@carbon/react';
import cx from 'classnames';

type BasicLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const BasicLinkComponent = React.forwardRef<HTMLAnchorElement, BasicLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <Link ref={ref} className={cx(className, 'carbon-router-link-element')} {...rest}>
        {children}
      </Link>
    );
  }
);

const CreatedLinkComponent = createLink(BasicLinkComponent);

export const CarbonRouterLink: LinkComponent<typeof BasicLinkComponent> = (
  props
) => {
  return <CreatedLinkComponent preload={'intent'} {...props} />;
};
