import React, { useState } from 'react';
import { Tearsheet } from '@carbon/ibm-products';
import { Button, Tabs, Tab } from '@carbon/react';

import './_example.scss';

export const Example = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenModalClick = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <style>{`.exp-tearsheet { opacity: 0 };`}</style>
      <Button onClick={handleOpenModalClick}>Reopen Tearsheet</Button>
      <Tearsheet
        actions={[
          { kind: 'secondary', label: 'Cancel', onClick: handleCloseModal },
          { kind: 'primary', label: 'Create', onClick: handleCloseModal },
        ]}
        closeIconDescription="Close the tearsheet"
        description={
          // cspell:disable
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <strong>incididunt ut labore</strong> et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </span>
          // cspell:enable
        }
        influencer={
          <div className="tearsheet-example__dummy-content-block">
            Influencer
          </div>
        }
        label="This is the label of the tearsheet"
        navigation={
          <div className="tearsheet-example__tabs">
            <Tabs onSelectionChange={() => {}}>
              <Tab label="Tab 1" />
              <Tab label="Tab 2" />
              <Tab label="Tab 3" />
              <Tab label="Tab 4" />
            </Tabs>
          </div>
        }
        onClose={handleCloseModal}
        open={isOpen}
        preventCloseOnClickOutside
        title="This is the title of the tearsheet"
      >
        <div className="tearsheet-example__dummy-content-block">
          The main content of the Tearsheet should be placed here.
        </div>
      </Tearsheet>
    </>
  );
};
