/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { preview__Card as Card } from '../..';
import {
  CardHeader,
  CardBody,
  CardFooter,
  CardHeaderMedia,
  CardMedia,
  CardLabel,
  CardTitle,
  CardTitleMedia,
  CardCaption,
  CardActions,
  CardAction,
} from './Card';
import {
  Button,
  IconButton,
  Grid,
  Column,
  Tag,
  preview__IconIndicator as IconIndicator,
  AILabel,
  AILabelContent,
} from '@carbon/react';
import { Edit, TrashCan, Analytics, Favorite } from '@carbon/icons-react';
import { Bee } from '@carbon/pictograms-react';
import { UserAvatar } from '../..';
import illustration1 from './_story-assets/illustration-img-1.png';
import placeholder16x9 from './_story-assets/placeholder-16x9.png';
import placeholder1x1 from './_story-assets/placeholder-1x1.png';
import rebusClassic from './_story-assets/classic-rebus.png';
import './_storybook-styles.scss';

export default {
  title: 'Preview/Card',
  component: Card,
  subcomponents: {
    CardHeader,
    CardBody,
    CardFooter,
    CardHeaderMedia,
    CardMedia,
    CardLabel,
    CardTitle,
    CardTitleMedia,
    CardCaption,
    CardActions,
    CardAction,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    density: {
      control: { type: 'select' },
      options: ['productive', 'expressive'],
      description:
        'Density variant: productive uses heading-compact-02, expressive uses heading-03',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'Makes the entire card clickable',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the card and all interactive elements',
    },
  },
};

const Template = (args) => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root {...args}>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            This is the card body content. It can contain any custom content you
            need.
          </p>
        </Card.Body>
        <Card.Footer>
          <Card.Action>
            <Button size="sm">Action</Button>
          </Card.Action>
        </Card.Footer>
      </Card.Root>
    </Column>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  clickable: false,
  disabled: false,
  density: 'productive',
};

export const Clickable = Template.bind({});
Clickable.args = {
  clickable: true,
  onClick: () => console.log('Card clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const MinimalCard = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Body>
          <p>A minimal card with just body content.</p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const ProductiveDensity = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root density="productive">
        <Card.Header>
          <Card.Label>Category</Card.Label>
          <Card.Title>Productive Card</Card.Title>
          <Card.Caption>Uses heading-compact-02</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>
            Productive density uses compact headings (heading-compact-02) for a
            more condensed layout.
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const ExpressiveDensity = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root density="expressive">
        <Card.Header>
          <Card.Label>Category</Card.Label>
          <Card.Title>Expressive Card</Card.Title>
          <Card.Caption>Uses heading-03</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>
            Expressive density uses larger headings (heading-03) for a more
            spacious layout.
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithHeaderPrimitives = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.Label>Category</Card.Label>
          <Card.Title>Dashboard Analytics Overview</Card.Title>
          <Card.Caption>Last updated 2 hours ago</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>
            This card demonstrates the use of Label, Title, and Caption
            primitives in the header.
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithIcon = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.HeaderMedia>
            <Analytics />
          </Card.HeaderMedia>
          <Card.Title>Analytics Dashboard</Card.Title>
          <Card.Caption>Real-time metrics</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>This card includes a small icon (16px) alongside the title.</p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithLargeIcon = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.HeaderMedia>
            <Favorite size="32" />
          </Card.HeaderMedia>
          <Card.Title>Favorite Items</Card.Title>
          <Card.Caption>Your saved content</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>This card includes a larger icon (32px) for more prominence.</p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithMedia = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.Media ratio="16x9">
            <img
              src={placeholder16x9}
              alt="Placeholder 16:9 ratio"
              width="100%"
            />
          </Card.Media>
          <Card.Label>Featured</Card.Label>
          <Card.Title>Product Launch Event</Card.Title>
          <Card.Caption>Join us for the big reveal</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>This card features a 16:9 aspect ratio media slot at the top.</p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithSquareMedia = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.Media ratio="1x1">
            <img
              src={placeholder1x1}
              alt="Placeholder 1:1 ratio"
              width="100%"
            />
          </Card.Media>
          <Card.Title>Square Format</Card.Title>
          <Card.Caption>Perfect for profile images</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>This card uses a 1:1 (square) aspect ratio for the media.</p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithHeaderActions = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root clickable onClick={() => console.log('Card clicked')}>
        <Card.Header>
          <Card.Label>Project</Card.Label>
          <Card.Title>Website Redesign</Card.Title>
          <Card.Caption>Due in 3 days</Card.Caption>
          <Card.Actions>
            <Card.Action>
              <IconButton
                label="Edit"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit clicked');
                }}
              >
                <Edit />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton
                label="Delete"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Delete clicked');
                }}
              >
                <TrashCan />
              </IconButton>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            This clickable card has action buttons in the header that prevent
            click propagation.
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithIconSlotAndActions = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.HeaderMedia>
            <Analytics />
          </Card.HeaderMedia>
          <Card.Actions>
            <Card.Action>
              <IconButton
                label="Edit"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit clicked');
                }}
              >
                <Edit />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton
                label="Delete"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Delete clicked');
                }}
              >
                <TrashCan />
              </IconButton>
            </Card.Action>
          </Card.Actions>
          <Card.Title>Analytics Dashboard</Card.Title>
          <Card.Caption>Real-time metrics</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>
            This card demonstrates the icon slot (first child) with action
            buttons on the right. The icon aligns with the title text below.
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithTruncatedTitle = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.Title truncate>
            This is a very long title that will be truncated with an ellipsis
            when it exceeds the maximum width
          </Card.Title>
          <Card.Caption>Single-line truncation example</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>The title is truncated to a single line with an ellipsis.</p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithMultiLineTruncatedTitle = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.Title truncate={3}>
            This is a very long title that will be truncated after three lines.
            It demonstrates the multi-line truncation feature using WebKit line
            clamp. Any content beyond three lines will be hidden with an
            ellipsis.
          </Card.Title>
          <Card.Caption>Multi-line truncation example</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>The title is truncated to three lines with an ellipsis.</p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

export const CompleteExample = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root clickable onClick={() => console.log('Card clicked')}>
        <Card.Header>
          <Card.Media ratio="16x9">
            <img
              src={placeholder16x9}
              alt="Placeholder 16:9 ratio"
              width="100%"
            />
          </Card.Media>
          <Card.HeaderMedia>
            <Analytics />
          </Card.HeaderMedia>
          <Card.Label>Analytics</Card.Label>
          <Card.Title truncate maxWidth="640px">
            Q4 Performance Dashboard
          </Card.Title>
          <Card.Caption>Updated 5 minutes ago</Card.Caption>
          <Card.Actions>
            <Card.Action>
              <IconButton
                label="Edit"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit clicked');
                }}
              >
                <Edit />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton
                label="Delete"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Delete clicked');
                }}
              >
                <TrashCan />
              </IconButton>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            This comprehensive example showcases all header primitives: Media,
            Icon, Label, Title, Caption, and Actions.
          </p>
        </Card.Body>
        <Card.Footer>
          <Card.Action>
            <Button kind="secondary" size="sm">
              Share
            </Button>
          </Card.Action>
          <Card.Action>
            <Button size="sm">View Details</Button>
          </Card.Action>
        </Card.Footer>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithAILabel = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root
        decorator={
          <AILabel align="bottom" size="xs">
            <AILabelContent>
              <div>
                <p className="secondary">AI Explained</p>
                <h1>84%</h1>
                <p className="secondary bold">Confidence score</p>
                <p className="secondary">
                  This content was generated using IBM AI services with high
                  confidence based on historical data patterns.
                </p>
                <hr />
                <p className="secondary">Model type</p>
                <p className="bold">Foundation model</p>
              </div>
            </AILabelContent>
          </AILabel>
        }
      >
        <Card.Header>
          <Card.Label>AI-powered</Card.Label>
          <Card.Title>Usage Analytics</Card.Title>
          <Card.Caption>Generated by AI</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>
            This card demonstrates the AI label feature with a blue gradient
            border indicating AI-generated content.
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root
        decorator={
          <AILabel align="bottom" size="xs">
            <AILabelContent>
              <div>
                <p className="secondary">AI Explained</p>
                <h1>92%</h1>
                <p className="secondary bold">Confidence score</p>
                <p className="secondary">
                  Performance insights generated by AI analysis of system
                  metrics and user behavior patterns.
                </p>
                <hr />
                <p className="secondary">Model type</p>
                <p className="bold">Analytics model</p>
              </div>
            </AILabelContent>
          </AILabel>
        }
      >
        <Card.Header>
          <Card.HeaderMedia>
            <Analytics />
          </Card.HeaderMedia>
          <Card.Title>Performance Insights</Card.Title>
          <Card.Caption>AI-generated summary</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>Card with AI label and header media slot (icon).</p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root
        decorator={
          <AILabel align="bottom" size="xs">
            <AILabelContent>
              <div>
                <p className="secondary">AI Explained</p>
                <h1>88%</h1>
                <p className="secondary bold">Confidence score</p>
                <p className="secondary">
                  Smart recommendations powered by AI learning from user
                  preferences and behavior.
                </p>
                <hr />
                <p className="secondary">Model type</p>
                <p className="bold">Recommendation engine</p>
              </div>
            </AILabelContent>
          </AILabel>
        }
      >
        <Card.Header>
          <Card.Title>Smart Recommendations Long title</Card.Title>
          <Card.Actions>
            <Card.Action>
              <IconButton
                label="Edit"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit clicked');
                }}
              >
                <Edit />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton
                label="Delete"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Delete clicked');
                }}
              >
                <TrashCan />
              </IconButton>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            Card with AI label and actions. Note how the actions are positioned
            to the left of the AI label with proper spacing.
          </p>
        </Card.Body>
        <Card.Footer>
          <Card.Action>
            <Button size="sm">View Details</Button>
          </Card.Action>
        </Card.Footer>
      </Card.Root>
    </Column>
  </Grid>
);

export const CompleteExampleWithAI = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root
        clickable
        decorator={
          <AILabel align="bottom" size="xs">
            <AILabelContent>
              <div>
                <p className="secondary">AI Explained</p>
                <h1>95%</h1>
                <p className="secondary bold">Confidence score</p>
                <p className="secondary">
                  This dashboard uses AI to provide comprehensive insights and
                  analytics based on real-time data processing and predictive
                  modeling.
                </p>
                <hr />
                <p className="secondary">Model type</p>
                <p className="bold">Dashboard intelligence</p>
              </div>
            </AILabelContent>
          </AILabel>
        }
        onClick={() => console.log('Card clicked')}
      >
        <Card.Header>
          <Card.Media ratio="16x9">
            <img
              src={placeholder16x9}
              alt="Placeholder 16:9 ratio"
              width="100%"
            />
          </Card.Media>
          <Card.HeaderMedia>
            <Analytics />
          </Card.HeaderMedia>
          <Card.Label>AI Analytics</Card.Label>
          <Card.Title truncate maxWidth="640px">
            Q4 AI-Powered Performance Dashboard
          </Card.Title>
          <Card.Caption>
            AI-generated insights • Updated 5 minutes ago
          </Card.Caption>
          <Card.Actions>
            <Card.Action>
              <IconButton
                label="Edit"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit clicked');
                }}
              >
                <Edit />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton
                label="Delete"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Delete clicked');
                }}
              >
                <TrashCan />
              </IconButton>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            This comprehensive example showcases all header primitives with AI
            label: Media, HeaderMedia, Label, Title, Caption, Actions, and the
            AI decorator with blue gradient border.
          </p>
        </Card.Body>
        <Card.Footer>
          <Card.Action>
            <Button kind="secondary" size="sm">
              Share
            </Button>
          </Card.Action>
          <Card.Action>
            <Button size="sm">View AI Insights</Button>
          </Card.Action>
        </Card.Footer>
      </Card.Root>
    </Column>
  </Grid>
);

export const WithFooterActions = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.Title>Card with Footer Actions</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            This card has multiple actions in the footer wrapped in CardAction.
          </p>
        </Card.Body>
        <Card.Footer>
          <Card.Action>
            <Button kind="secondary" size="sm">
              Cancel
            </Button>
          </Card.Action>
          <Card.Action>
            <Button size="sm">Confirm</Button>
          </Card.Action>
        </Card.Footer>
      </Card.Root>
    </Column>
  </Grid>
);

export const IconSlotVariants = () => (
  <Grid withRowGap>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.HeaderMedia>
            <img
              src={illustration1}
              alt="A sample illustration"
              style={{ width: '48px', height: '48px', borderRadius: '4px' }}
            />
          </Card.HeaderMedia>
          <Card.Title>Card with Image</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>The icon slot can contain an image element.</p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.HeaderMedia>
            <UserAvatar
              name="John Doe"
              backgroundColor="order-1-cyan"
              size="lg"
            />
          </Card.HeaderMedia>
          <Card.Title>Card with Avatar</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>The icon slot can contain a UserAvatar component.</p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.HeaderMedia>
            <Tag type="blue">New</Tag>
          </Card.HeaderMedia>
          <Card.Title>Card with Tag</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>The icon slot can contain a Tag component.</p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.HeaderMedia>
            <IconIndicator kind="succeeded" size={16} label="Succeeded" />
          </Card.HeaderMedia>
          <Card.Title>Card with Status</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>The icon slot can contain a IconIndicator component.</p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.HeaderMedia>
            <Bee className="icon-slot-pictogram" />
          </Card.HeaderMedia>
          <Card.Title>Card with Pictogram</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>The icon slot can contain a Carbon pictogram.</p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);

/**
 * Title Media Story
 * Demonstrates CardTitleMedia component for icons alongside label+title+caption block
 */
export const WithTitleMedia = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.TitleMedia>
            <img
              src={rebusClassic}
              alt="IBM Classic Rebus logo"
              width={48}
              height={48}
            />
          </Card.TitleMedia>
          <Card.Label>Label</Card.Label>
          <Card.Title>Card with title icon</Card.Title>
          <Card.Caption>
            The title media slot positions an icon to the left of the title text
          </Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>
            CardTitleMedia provides a media slot positioned to the left of the
            card title. The media adapts to the heading area height (min 48px,
            max 64px).
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.TitleMedia>
            <img
              src={rebusClassic}
              alt="IBM Classic Rebus logo"
              width={64}
              height={64}
            />
          </Card.TitleMedia>
          <Card.Label>Label</Card.Label>
          <Card.Title>Card with title icon</Card.Title>
          <Card.Caption>
            The title media slot positions an icon to the left of the title text
          </Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>
            CardTitleMedia provides a media slot positioned to the left of the
            card title. The media adapts to the heading area height (min 48px,
            max 64px).
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.TitleMedia>
            <img
              src={rebusClassic}
              alt="IBM Classic Rebus logo"
              width={48}
              height={48}
            />
          </Card.TitleMedia>
          <Card.Label>Label</Card.Label>
          <Card.Title>Card with title icon</Card.Title>
          <Card.Caption>
            The title media slot positions an icon to the left of the title text
          </Card.Caption>
          <Card.Actions>
            <Card.Action>
              <IconButton
                label="Edit"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit clicked');
                }}
              >
                <Edit />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton
                label="Delete"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Delete clicked');
                }}
              >
                <TrashCan />
              </IconButton>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            CardTitleMedia provides a media slot positioned to the left of the
            card title. The media adapts to the heading area height (min 48px,
            max 64px).
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card.Root>
        <Card.Header>
          <Card.Media ratio="16x9">
            <img
              src={placeholder16x9}
              alt="Placeholder 16:9 ratio"
              width="100%"
            />
          </Card.Media>
          <Card.TitleMedia>
            <img
              src={rebusClassic}
              alt="IBM Classic Rebus logo"
              width={48}
              height={48}
            />
          </Card.TitleMedia>
          <Card.Label>Label</Card.Label>
          <Card.Title>Card with title icon</Card.Title>
          <Card.Caption>
            The title media slot positions an icon to the left of the title text
          </Card.Caption>
          <Card.Actions>
            <Card.Action>
              <IconButton
                label="Edit"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Edit clicked');
                }}
              >
                <Edit />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton
                label="Delete"
                kind="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Delete clicked');
                }}
              >
                <TrashCan />
              </IconButton>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            CardTitleMedia provides a media slot positioned to the left of the
            card title. The media adapts to the heading area height (min 48px,
            max 64px).
          </p>
        </Card.Body>
      </Card.Root>
    </Column>
  </Grid>
);
