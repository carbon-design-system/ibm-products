import { preview__PageHeader as PageHeader, pkg } from '@carbon/ibm-products';
import { breakpoints } from '@carbon/layout';
import { Breadcrumb, BreadcrumbItem, Button, Column, Grid } from '@carbon/react';
import { Activity, Add, AiGenerate, Bee, CloudFoundry_1 } from '@carbon/react/icons';
import { createFileRoute } from '@tanstack/react-router'
import image1 from '../Example/assets/2x1.jpg';
import image2 from '../Example/assets/3x2.jpg';

pkg.component.TruncatedText = true;

const BreadcrumbBeeIcon = () => <Bee size={16} />;

const pageActionButtonItems = [
  {
    // props used for both collapse menu item and non-collapsed action form
    id: 'action1',
    onClick: () => console.log(`Action 1`),
    // component to render when non-collapsed
    body: (
      <Button
        renderIcon={AiGenerate}
        iconDescription="Icon Description 1"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    // props to pass to the corresponding collapsed menu item
    menuItem: {
      label: 'action 1',
    },
  },
  {
    id: 'action2',
    onClick: () => console.log(`Action 2`),
    body: (
      <Button
        renderIcon={Activity}
        iconDescription="Icon Description 2"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    menuItem: {
      label: 'action 2',
    },
  },
  {
    id: 'action3',
    onClick: () => console.log(`Action 3`),
    body: (
      <Button
        renderIcon={Activity}
        iconDescription="Icon Description 3"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    menuItem: {
      label: 'action 3',
    },
  },
  {
    id: 'action4',
    onClick: () => console.log(`Action 4`),
    body: (
      <Button
        renderIcon={Activity}
        iconDescription="Icon Description 4"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    menuItem: {
      label: 'action 4',
    },
  },
  {
    id: 'primary-action',
    onClick: () => console.log(`Primary action`),
    body: (
      <Button kind="primary" renderIcon={Add} size="md">
        Primary action
      </Button>
    ),
    menuItem: {
      label: 'Primary action',
    },
  },
];

const breadcrumbPageActions = (
  <>
    <Button
      renderIcon={Activity}
      iconDescription="Icon Description 1"
      hasIconOnly
      size="md"
      kind="ghost"
    />
    <Button
      renderIcon={AiGenerate}
      iconDescription="Icon Description 2"
      hasIconOnly
      size="md"
      kind="ghost"
    />
    <Button
      renderIcon={CloudFoundry_1}
      iconDescription="Icon Description 3"
      hasIconOnly
      size="md"
      kind="ghost"
    />
  </>
);

const WithHeroImage = () => {
  return <PageHeader.Root>
      <Grid>
        <Column lg={8} md={4} sm={4}>
          <PageHeader.BreadcrumbBar border={false} renderIcon={BreadcrumbBeeIcon}>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="/#">Breadcrumb 1</a>
              </BreadcrumbItem>
              <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
            </Breadcrumb>
          </PageHeader.BreadcrumbBar>
          <PageHeader.Content
            title="Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long"
          >
            <PageHeader.ContentText subtitle="Subtitle">
              Built for modern teams, our technology platform simplifies
              complexity with powerful APIs, real-time collaboration tools, and
              seamless integration. From deployment to monitoring, we help you
              ship faster, scale efficiently, and stay in control every step of
              the way.
            </PageHeader.ContentText>
          </PageHeader.Content>
        </Column>
        <Column lg={8} md={4} sm={0}>
          <PageHeader.HeroImage>
            <picture>
              <source
                srcset={image1}
                media={`(min-width: ${breakpoints.lg.width})`}
              />
              <source
                srcset={image2}
                media={`(max-width: ${breakpoints.lg.width})`}
              />
              <img
                src={image1}
                alt="a default image"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </picture>
          </PageHeader.HeroImage>
        </Column>
      </Grid>
    </PageHeader.Root>
}

export const Route = createFileRoute('/with-hero-image')({
  component: WithHeroImage,
});
