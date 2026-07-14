/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Card } from './Card';
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
import {
  Edit,
  TrashCan,
  Analytics,
  Favorite,
  Bee as BeeIcon,
  Share,
  Download,
  Settings,
  Notification,
  View,
  Copy,
  ArrowRight,
} from '@carbon/icons-react';
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
    CardHeader: Card.Header,
    CardBody: Card.Body,
    CardFooter: Card.Footer,
    CardHeaderMedia: Card.HeaderMedia,
    CardMedia: Card.Media,
    CardLabel: Card.Label,
    CardTitle: Card.Title,
    CardTitleMedia: Card.TitleMedia,
    CardCaption: Card.Caption,
    CardActions: Card.Actions,
    CardAction: Card.Action,
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
      <Card {...args}>
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
          <Button kind="tertiary" size="md">
            Action
          </Button>
        </Card.Footer>
      </Card>
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
      <Card>
        <Card.Body>
          <p>A minimal card with just body content.</p>
        </Card.Body>
      </Card>
    </Column>
  </Grid>
);

export const ProductiveDensity = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
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
        <Card.Footer>
          <Card.Action>
            <Button kind="ghost" size="md">
              View details
            </Button>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const ExpressiveDensity = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card density="expressive">
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
        <Card.Footer>
          <IconIndicator kind="succeeded" size={16} label="Succeeded" />
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithHeaderPrimitives = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
        <Card.Footer>
          <Card.Action>
            <Button kind="ghost" size="md">
              Button
            </Button>
          </Card.Action>
          <Card.Action>
            <Button kind="secondary" size="md">
              Button
            </Button>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithIcon = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
        <Card.Footer>
          <Card.Action>
            <Button kind="ghost" size="md">
              View report
            </Button>
          </Card.Action>
          <Card.Action>
            <Button
              kind="ghost"
              label="View report"
              size="md"
              renderIcon={Share}
              hasIconOnly
            ></Button>
          </Card.Action>
          <Card.Action>
            <IconButton
              label="View"
              kind="ghost"
              size="md"
              onClick={(e) => {
                e.stopPropagation();
                console.log('View clicked');
              }}
            >
              <View />
            </IconButton>
          </Card.Action>
          <Card.Action>
            <IconButton
              label="Download"
              kind="ghost"
              size="md"
              onClick={(e) => {
                e.stopPropagation();
                console.log('Download clicked');
              }}
            >
              <Download />
            </IconButton>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithLargeIcon = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
        <Card.Footer>
          <Button kind="tertiary" size="md">
            Learn more
          </Button>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithMedia = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
        <Card.Footer>
          {/* Custom slot content: adopter-managed padding per design guidelines */}
          <div
            style={{
              padding: '0 1rem',
            }}
          >
            <IconIndicator kind="in-progress" size={16} label="In progress" />
          </div>
          <Card.Action>
            <Button
              kind="ghost"
              label="View report"
              size="md"
              renderIcon={Share}
              hasIconOnly
            ></Button>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithSquareMedia = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
        <Card.Footer>
          <Card.Action>
            <Button kind="ghost" size="md">
              Cancel
            </Button>
          </Card.Action>
          <Card.Action>
            <Button kind="secondary" size="md" renderIcon={ArrowRight}>
              Confirm
            </Button>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithHeaderActions = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card onClick={() => console.log('Card clicked')}>
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
        <Card.Footer>
          <Card.Action>
            <Button kind="ghost" size="md">
              View report
            </Button>
          </Card.Action>
          <Card.Action>
            <IconButton label="Share" kind="ghost" size="md">
              <Share />
            </IconButton>
          </Card.Action>
          <Card.Action>
            <IconButton label="Download" kind="ghost" size="md">
              <Download />
            </IconButton>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithHeaderMedia = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
      </Card>
    </Column>
  </Grid>
);

export const WithTruncatedTitle = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
        <Card.Footer>
          <Card.Action>
            <IconButton label="Share" kind="ghost" size="md">
              <Share />
            </IconButton>
          </Card.Action>
          <Card.Action>
            <IconButton label="Download" kind="ghost" size="md">
              <Download />
            </IconButton>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithMultiLineTruncatedTitle = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
        <Card.Footer>
          <div
            style={{
              padding: '0 1rem',
            }}
          >
            <IconIndicator kind="failed" size={16} label="Failed" />
          </div>
          <Card.Action>
            <IconButton label="Retry" kind="ghost" size="md">
              <View />
            </IconButton>
          </Card.Action>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const WithAILabel = () => (
  <Grid>
    <Column lg={4} md={4} sm={4}>
      <Card
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
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card
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
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card
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
          <Button size="sm" kind="tertiary">
            View Details
          </Button>
        </Card.Footer>
      </Card>
    </Column>
  </Grid>
);

export const IconSlotVariants = () => (
  <Grid withRowGap>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card>
        <Card.Header>
          <Card.HeaderMedia>
            <Tag type="blue">New</Tag>
          </Card.HeaderMedia>
          <Card.Title>Card with Tag</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>The icon slot can contain a Tag component.</p>
        </Card.Body>
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card>
        <Card.Header>
          <Card.HeaderMedia>
            <IconIndicator kind="succeeded" size={16} label="Succeeded" />
          </Card.HeaderMedia>
          <Card.Title>Card with Status</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>The icon slot can contain a IconIndicator component.</p>
        </Card.Body>
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card>
        <Card.Header>
          <Card.HeaderMedia>
            <Bee className="icon-slot-pictogram" />
          </Card.HeaderMedia>
          <Card.Title>Card with Pictogram</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>The icon slot can contain a Carbon pictogram.</p>
        </Card.Body>
      </Card>
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
      <Card>
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
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card>
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
      </Card>
    </Column>
  </Grid>
);

/**
 * Title leading icon story demonstrating the titleStart prop
 * with both productive and expressive densities
 */
export const WithTitleLeadingIcon = () => (
  <Grid className="card-story-grid">
    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Header>
          <Card.Title titleStart={<BeeIcon size={16} />}>
            Analytics dashboard
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            The leading icon adapts to the title size. In productive density,
            use 16px icons.
          </p>
        </Card.Body>
      </Card>
    </Column>

    <Column lg={4} md={4} sm={4}>
      <Card density="expressive">
        <Card.Header>
          <Card.Title titleStart={<BeeIcon size={24} />}>
            Analytics dashboard
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            The leading icon adapts to the title size. In expressive density,
            use 24px icons.
          </p>
        </Card.Body>
      </Card>
    </Column>

    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Header>
          <Card.Title
            titleStart={<BeeIcon size={16} />}
            truncate={2}
            maxWidth="200px"
          >
            Example of long title text that wraps onto two lines
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            When the title wraps to multiple lines, the icon stays top-aligned
            with 2px padding to center with the first line.
          </p>
        </Card.Body>
      </Card>
    </Column>
  </Grid>
);

/**
 * Title trailing icon story demonstrating the titleEnd prop
 * with both productive and expressive densities
 */
export const WithTitleTrailingIcon = () => (
  <Grid className="card-story-grid">
    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Header>
          <Card.Title titleEnd={<BeeIcon size={16} />}>
            Analytics dashboard
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            The trailing icon adapts to the title size. In productive density,
            use 16px icons.
          </p>
        </Card.Body>
      </Card>
    </Column>

    <Column lg={4} md={4} sm={4}>
      <Card density="expressive">
        <Card.Header>
          <Card.Title titleEnd={<BeeIcon size={24} />}>
            Analytics dashboard
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            The trailing icon adapts to the title size. In expressive density,
            use 24px icons.
          </p>
        </Card.Body>
      </Card>
    </Column>

    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Header>
          <Card.Title
            titleEnd={<BeeIcon size={16} />}
            truncate={2}
            maxWidth="200px"
          >
            Example of long title text that wraps into three lines with icon
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            When the title wraps to multiple lines, the icon stays inline with
            the text on the last line with 8px gap.
          </p>
        </Card.Body>
      </Card>
    </Column>
  </Grid>
);

/**
 * Video card story demonstrating video content inside Card.Media
 * Uses a sample video to show how video elements work within cards
 */
export const WithVideo = () => (
  <Grid className="card-story-grid">
    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Header>
          <Card.Title>Product demo video</Card.Title>
          <Card.Caption>Watch our latest feature walkthrough</Card.Caption>
        </Card.Header>
        <Card.Media ratio="16x9">
          <video
            controls
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
            }}
          >
            <source
              src="https://www.youtube.com/watch?v=Veg7njIKUm4"
              type="video/mp4"
            />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </Card.Media>
        <Card.Body>
          <p style={{ marginBlockStart: 'revert' }}>
            Video content fills the AspectRatio container and maintains the 16:9
            aspect ratio.
          </p>
        </Card.Body>
      </Card>
    </Column>

    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Media ratio="16x9">
          <iframe
            width={'100%'}
            height={'100%'}
            style={{ position: 'absolute' }}
            src="https://www.youtube.com/embed/Veg7njIKUm4?si=B9yWeUzcFHI4ITD1&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </Card.Media>
        <Card.Header>
          <Card.Title>Tutorial series</Card.Title>
          <Card.Caption>Getting started guide</Card.Caption>
        </Card.Header>
        <Card.Body>
          <p>
            Videos can include a poster image that displays before playback
            starts.
          </p>
        </Card.Body>
      </Card>
    </Column>
  </Grid>
);

/**
 * Cards with many action items in the header.
 * Demonstrates how multiple actions are displayed alongside label, title, and caption.
 */
export const WithManyActions = () => (
  <Grid className="card-story-grid">
    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Header>
          <Card.Label>Category</Card.Label>
          <Card.Title>Project dashboard</Card.Title>
          <Card.Caption>Last updated 2 hours ago</Card.Caption>
          <Card.Actions>
            <Card.Action>
              <IconButton kind="ghost" label="Edit" size="sm">
                <Edit />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="Favorite" size="sm">
                <Favorite />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="Analytics" size="sm">
                <Analytics />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="Share" size="sm">
                <Share />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="Download" size="sm">
                <Download />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="Settings" size="sm">
                <Settings />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="Notification" size="sm">
                <Notification />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="View" size="sm">
                <View />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="Copy" size="sm">
                <Copy />
              </IconButton>
            </Card.Action>
            <Card.Action>
              <IconButton kind="ghost" label="Delete" size="sm">
                <TrashCan />
              </IconButton>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            Multiple action buttons can be placed in the header alongside label,
            title, and caption. Actions are right-aligned and maintain proper
            spacing.
          </p>
        </Card.Body>
      </Card>
    </Column>
  </Grid>
);

/**
 * Demonstrates text action using a Carbon small ghost button.
 * This shows how to use a text-based action button instead of icon-only buttons.
 */
export const WithTextAction = () => (
  <Grid className="card-story-grid">
    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Header>
          <Card.Title>Usage metrics</Card.Title>
          <Card.Actions>
            <Card.Action>
              <Button kind="tertiary" size="sm">
                Action
              </Button>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            Text actions use Carbon&apos;s small ghost button for actions that
            require text labels instead of icons. This is useful when the action
            needs to be more explicit or when an appropriate icon isn&apos;t
            available.
          </p>
        </Card.Body>
      </Card>
    </Column>
    <Column lg={4} md={4} sm={4}>
      <Card density="productive">
        <Card.Header>
          <Card.Title>Usage metrics</Card.Title>
          <Card.Actions>
            <Card.Action>
              <Button kind="tertiary" size="sm">
                Action
              </Button>
            </Card.Action>
            <Card.Action>
              <Button kind="tertiary" size="sm">
                Action
              </Button>
            </Card.Action>
            <Card.Action>
              <Button kind="tertiary" size="sm">
                Action
              </Button>
            </Card.Action>
          </Card.Actions>
        </Card.Header>
        <Card.Body>
          <p>
            Text actions use Carbon&apos;s small ghost button for actions that
            require text labels instead of icons. This is useful when the action
            needs to be more explicit or when an appropriate icon isn&apos;t
            available.
          </p>
        </Card.Body>
      </Card>
    </Column>
  </Grid>
);
