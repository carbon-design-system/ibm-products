/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Card as CardComponent } from './Card';
import { CardHeader as CardHeaderComponent } from './CardHeader';
import { CardBody as CardBodyComponent } from './CardBody';
import { CardFooter as CardFooterComponent } from './CardFooter';

// Main component
export const Card = CardComponent;
Card.displayName = 'Card';

// Direct exports
export const CardHeader = CardHeaderComponent;
CardHeader.displayName = 'CardHeader';

export const CardBody = CardBodyComponent;
CardBody.displayName = 'CardBody';

export const CardFooter = CardFooterComponent;
CardFooter.displayName = 'CardFooter';

// Namespaced exports for use with Card.Header, Card.Body, Card.Footer
export const Header = CardHeaderComponent;
Header.displayName = 'Card.Header';

export const Body = CardBodyComponent;
Body.displayName = 'Card.Body';

export const Footer = CardFooterComponent;
Footer.displayName = 'Card.Footer';

// Export types
export type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardContextValue,
} from './Card.types';
