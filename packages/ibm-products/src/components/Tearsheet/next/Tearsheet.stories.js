/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';
import {
  AILabel,
  AILabelContent,
  Button,
  Form,
  FormGroup,
  Heading,
  IconButton,
  NumberInput,
  ProgressIndicator,
  ProgressStep,
  Section,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TextInput,
  Toggletip,
} from '@carbon/react';

import { Tearsheet } from '.';
import styles from './_storybook-styles.scss?inline';
import { Bee, RightPanelClose } from '@carbon/react/icons';
import { TearsheetWithSteps } from './_story-assets/StepTearsheet';
import { StepProvider } from '../../StepFlow';
const storyClass = 'tearsheet-next-stories';

export default {
  title: 'Preview/Tearsheet',
  component: Tearsheet,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return <div className={`${storyClass}__viewport`}>{Story()}</div>;
    },
  ],
  subcomponents: {
    Header: Tearsheet.Header,
    HeaderContent: Tearsheet.HeaderContent,
    HeaderActions: Tearsheet.HeaderActions,
    HeaderActionItem: Tearsheet.HeaderActionItem,
    NavigationBar: Tearsheet.NavigationBar,
    ScrollButton: Tearsheet.ScrollButton,
    Influencer: Tearsheet.Influencer,
    Body: Tearsheet.Body,
    MainContent: Tearsheet.MainContent,
    SummaryContent: Tearsheet.SummaryContent,
    Footer: Tearsheet.Footer,
  },

  parameters: {
    styles,
    // docs: {
    //   page: MDXContent,
    // },
  },
};

const sampleDecorator = (decorator) => {
  switch (decorator) {
    case 1:
      return (
        <AILabel className="decorator-container" size="xs">
          <AILabelContent>
            <div>
              <p className="secondary">AI Explained</p>
              <h1>84%</h1>
              <p className="secondary bold">Confidence score</p>
              <p className="secondary">
                This is not really Lorem Ipsum but the spell checker did not
                like the previous text with it&apos;s non-words which is why
                this unwieldy sentence, should one choose to call it that, here.
              </p>
              <hr />
              <p className="secondary">Model type</p>
              <p className="bold">Foundation model</p>
            </div>
          </AILabelContent>
        </AILabel>
      );
    case 2:
      return (
        <Toggletip>
          <ToggletipButton label="Additional information">
            <Information />
          </ToggletipButton>
          <ToggletipContent>
            <p>Custom content here</p>
          </ToggletipContent>
        </Toggletip>
      );
    default:
      return;
  }
};

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * | STORIES | * * * * * * * * * * * * * * */
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// const defaultProps = {
//   headerTitle: 'Use case-specific title',
//   headerSubTitle: 'Use case-specific sub title',
//   ariaLabel: 'Interstitial Screen',
// };
export const Default = () => {
  const [open, setOpen] = useState(true);
  const launcherButtonRef = useRef(null);
  const currentStep = 1;
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [influencerPanelOpen, setInfluencerPanelOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        ref={launcherButtonRef}
      >
        Show Interstitial modal
      </Button>

      <Tearsheet
        open={open}
        variant={'wide'}
        decorator={sampleDecorator(1)}
        onClose={() => setOpen(false)}
        preventCloseOnClickOutside={true}
      >
        <Tearsheet.Header>
          <Tearsheet.HeaderContent
            open
            label="Customer data"
            title="Customer account uniqueness SLA "
            description="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text."
            titleIcon={Bee}
            titleIconPosition={'leading'}
            headerActions={
              <Tearsheet.HeaderActions
                menuButtonProps={{ label: 'Actions', kind: 'tertiary' }}
              >
                <Tearsheet.HeaderActionItem overflowItemLabel="Action 1">
                  <Button kind="tertiary" size="sm">
                    Action 1
                  </Button>
                </Tearsheet.HeaderActionItem>
                <Tearsheet.HeaderActionItem overflowItemLabel="Action 2">
                  <Button kind="tertiary" size="sm">
                    Action 2
                  </Button>
                </Tearsheet.HeaderActionItem>
                <Tearsheet.HeaderActionItem overflowItemLabel="Action 3">
                  <Button kind="tertiary" size="sm">
                    Action 3
                  </Button>
                </Tearsheet.HeaderActionItem>
              </Tearsheet.HeaderActions>
            }
          ></Tearsheet.HeaderContent>

          <ProgressIndicator>
            <ProgressStep
              complete={currentStep > 1}
              current={currentStep === 1}
              label="Step 1"
              secondaryLabel="Optional label"
            />
            <ProgressStep
              complete={currentStep > 2}
              current={currentStep === 2}
              label="Step 2"
            />
            <ProgressStep
              current={currentStep === 3}
              label="Step 3"
              complete={currentStep > 3}
            />
          </ProgressIndicator>
          <Tearsheet.NavigationBar scroller={<Tearsheet.ScrollButton />}>
            <TabList aria-label="Tab list">
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
          </Tearsheet.NavigationBar>
        </Tearsheet.Header>
        <Tearsheet.Influencer
          influencerPanelOpen={influencerPanelOpen}
          onInfluencerPanelClose={() => setInfluencerPanelOpen(false)}
        >
          <ProgressIndicator vertical>
            <ProgressStep
              complete={currentStep > 1}
              current={currentStep === 1}
              label="Step 1"
              secondaryLabel="Optional label"
            />
            <ProgressStep
              complete={currentStep > 2}
              current={currentStep === 2}
              label="Step 2"
            />
            <ProgressStep
              current={currentStep === 3}
              label="Step 3"
              complete={currentStep > 3}
            />
          </ProgressIndicator>
        </Tearsheet.Influencer>
        <Tearsheet.Body>
          <Tearsheet.MainContent>
            <div className="influencerPanelTrigger">
              <IconButton
                kind="ghost"
                label="Open influencer"
                onClick={() => setInfluencerPanelOpen(true)}
              >
                <RightPanelClose />
              </IconButton>
            </div>
            <div className="rightPanelTrigger">
              <IconButton
                kind="ghost"
                label="Open right panel"
                onClick={() => setRightPanelOpen(true)}
              >
                <RightPanelClose />
              </IconButton>
            </div>

            <Section className="main-content">
              <Heading>Main content heading</Heading>

              <Form>
                <FormGroup
                  legendId="tearsheet-form-group"
                  legendText="FormGroup Legend"
                >
                  <TextInput
                    id="tss-ft1"
                    labelText="Enter an important value here"
                  />
                  <TextInput id="tss-ft2" labelText="Here is an entry field:" />
                  <NumberInput
                    className="some-class"
                    id="number-input-1"
                    label="Number Input"
                    min={0}
                    max={100}
                    value={50}
                    step={10}
                    iconDescription="Add/decrement number"
                  />
                </FormGroup>
                <FormGroup
                  legendId="tearsheet-form-group"
                  legendText="FormGroup Legend"
                >
                  <TextInput
                    id="tss-ft1"
                    labelText="Enter an important value here"
                  />
                  <TextInput id="tss-ft2" labelText="Here is an entry field:" />
                  <NumberInput
                    className="some-class"
                    id="number-input-1"
                    label="Number Input"
                    min={0}
                    max={100}
                    value={50}
                    step={10}
                    iconDescription="Add/decrement number"
                  />
                </FormGroup>
                <FormGroup
                  legendId="tearsheet-form-group"
                  legendText="FormGroup Legend"
                >
                  <TextInput
                    id="tss-ft1"
                    labelText="Enter an important value here"
                  />
                  <TextInput id="tss-ft2" labelText="Here is an entry field:" />
                  <NumberInput
                    className="some-class"
                    id="number-input-1"
                    label="Number Input"
                    min={0}
                    max={100}
                    value={50}
                    step={10}
                    iconDescription="Add/decrement number"
                  />
                </FormGroup>
                <FormGroup
                  legendId="tearsheet-form-group"
                  legendText="FormGroup Legend"
                >
                  <TextInput
                    id="tss-ft1"
                    labelText="Enter an important value here"
                  />
                  <TextInput id="tss-ft2" labelText="Here is an entry field:" />
                  <NumberInput
                    className="some-class"
                    id="number-input-1"
                    label="Number Input"
                    min={0}
                    max={100}
                    value={50}
                    step={10}
                    iconDescription="Add/decrement number"
                  />
                </FormGroup>
              </Form>
            </Section>
          </Tearsheet.MainContent>

          <Tearsheet.SummaryContent
            rightPanelOpen={rightPanelOpen}
            onRightPanelClose={() => setRightPanelOpen(false)}
          >
            <Heading className="rightPanelHeading">Panel heading</Heading>
            <div className="rightDetailsBody">
              <div>
                <label>item 1</label>
                <p>item description</p>
              </div>
              <div>
                <label>item 2</label>
                <p>item description</p>
              </div>
              <div>
                <label>item 3</label>
                <p>item description</p>
              </div>
              <div>
                <label>item 4</label>
                <p>item description</p>
              </div>
              <div>
                <label>item 5</label>
                <p>item description</p>
              </div>
            </div>
          </Tearsheet.SummaryContent>
        </Tearsheet.Body>
        <Tearsheet.Footer>
          <div className="default__action-buttons">
            <Button
              className="step-action-button step-action-button__cancel"
              kind="ghost"
              onClick={() => console.log('clicked')}
              size="xl"
            >
              Cancel
            </Button>
            <Button
              className="step-action-button"
              kind="secondary"
              onClick={() => {
                handlePrevious();
              }}
              // disabled={handleBackDisabledState(currentStep)}
              size="xl"
            >
              Back
            </Button>
            <Button
              // disabled={handleNextDisabledState(formState, currentStep)}
              size="xl"
              className="step-action-button"
            >
              {'Submit'}
            </Button>
          </div>
        </Tearsheet.Footer>
      </Tearsheet>
    </>
  );
};
export const WithTabs = () => {
  const [open, setOpen] = useState(true);
  const launcherButtonRef = useRef(null);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        ref={launcherButtonRef}
      >
        Show Interstitial modal
      </Button>
      <Tabs>
        <Tearsheet
          open={open}
          variant={'wide'}
          decorator={sampleDecorator(1)}
          onClose={() => setOpen(false)}
        >
          <Tearsheet.Header>
            <Tearsheet.HeaderContent
              open
              label="Customer data"
              title="Customer account uniqueness SLA "
              description="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text."
              titleIcon={Bee}
              titleIconPosition={'leading'}
              headerActions={
                <Tearsheet.HeaderActions
                  menuButtonProps={{ label: 'Actions', kind: 'tertiary' }}
                >
                  <Tearsheet.HeaderActionItem overflowItemLabel="Action 1">
                    <Button kind="tertiary" size="sm">
                      Action 1
                    </Button>
                  </Tearsheet.HeaderActionItem>
                  <Tearsheet.HeaderActionItem overflowItemLabel="Action 2">
                    <Button kind="tertiary" size="sm">
                      Action 2
                    </Button>
                  </Tearsheet.HeaderActionItem>
                  <Tearsheet.HeaderActionItem overflowItemLabel="Action 3">
                    <Button kind="tertiary" size="sm">
                      Action 3
                    </Button>
                  </Tearsheet.HeaderActionItem>
                </Tearsheet.HeaderActions>
              }
            ></Tearsheet.HeaderContent>

            <Tearsheet.NavigationBar scroller={<Tearsheet.ScrollButton />}>
              <TabList aria-label="Tab list">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
                <Tab>Tab 4</Tab>
                <Tab>Tab 5</Tab>
                <Tab>Tab 6</Tab>
                <Tab>Tab 7</Tab>
              </TabList>
            </Tearsheet.NavigationBar>
          </Tearsheet.Header>
          <Tearsheet.Body>
            <Tearsheet.MainContent>
              <div className="rightPanelTrigger">
                <IconButton
                  kind="ghost"
                  label="Open right panel"
                  onClick={() => setRightPanelOpen(true)}
                >
                  <RightPanelClose />
                </IconButton>
              </div>
              <TabPanels>
                <TabPanel className="page-header-story--tall-tab-panel">
                  Tab Panel 1
                </TabPanel>
                <TabPanel className="page-header-story--tall-tab-panel">
                  Tab Panel 2
                </TabPanel>
                <TabPanel className="page-header-story--tall-tab-panel">
                  Tab Panel 3
                </TabPanel>
                <TabPanel className="page-header-story--tall-tab-panel">
                  Tab Panel 4
                </TabPanel>
                <TabPanel className="page-header-story--tall-tab-panel">
                  Tab Panel 5
                </TabPanel>
                <TabPanel className="page-header-story--tall-tab-panel">
                  Tab Panel 6
                </TabPanel>
                <TabPanel className="page-header-story--tall-tab-panel">
                  Tab Panel 7
                </TabPanel>
              </TabPanels>
            </Tearsheet.MainContent>
          </Tearsheet.Body>
          <Tearsheet.Footer>
            <div className="default__action-buttons">
              <Button
                className="step-action-button step-action-button__cancel"
                kind="ghost"
                onClick={() => console.log('clicked')}
                size="xl"
              >
                Cancel
              </Button>
              <Button
                className="step-action-button"
                kind="secondary"
                onClick={() => {
                  handlePrevious();
                }}
                size="xl"
              >
                Back
              </Button>
              <Button size="xl" className="step-action-button">
                {'Submit'}
              </Button>
            </div>
          </Tearsheet.Footer>
        </Tearsheet>
      </Tabs>
    </>
  );
};

export const withSteps = () => {
  const [open, setOpen] = useState(true);
  const launcherButtonRef = useRef(null);
  return (
    <StepProvider>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        ref={launcherButtonRef}
      >
        Show Interstitial modal
      </Button>

      <TearsheetWithSteps open={open} setOpen={setOpen} />
    </StepProvider>
  );
};

export const withStepsAndHorizontalProgressIndicator = () => {
  const [open, setOpen] = useState(true);
  const launcherButtonRef = useRef(null);
  const currentStep = 1;
  const [text, setText] = useState('');
  return (
    <StepProvider>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        ref={launcherButtonRef}
      >
        Show Interstitial modal
      </Button>

      <TearsheetWithSteps
        open={open}
        setOpen={setOpen}
        progressIndicator={'horizontal'}
      />
    </StepProvider>
  );
};
