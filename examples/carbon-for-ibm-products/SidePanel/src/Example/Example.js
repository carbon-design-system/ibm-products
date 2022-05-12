import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';
import { Button } from 'carbon-components-react';
import ChildrenContent from './ChildrenContent';
import { SidePanel } from '@carbon/ibm-products';

import './_example.scss';

export const Example = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderContainer
        render={() => (
          <Header aria-label="IBM [Product]">
            <HeaderName href="/" prefix="IBM">
              [Product]
            </HeaderName>
          </Header>
        )}
      />
      <div className="main--content">
        <Button onClick={() => setOpen((prev) => !prev)}>
          Open side panel
        </Button>
        <SidePanel
          includeOverlay
          className="test"
          open={open}
          onRequestClose={() => setOpen(false)}
          title="Incident management"
          subtitle="Testing subtitle text."
          actions={[
            {
              label: 'Submit',
              onClick: () => setOpen(false),
              kind: 'primary',
            },
            {
              label: 'Cancel',
              onClick: () => setOpen(false),
              kind: 'secondary',
            },
          ]}
        >
          <ChildrenContent />
        </SidePanel>
      </div>
    </>
  );
};
