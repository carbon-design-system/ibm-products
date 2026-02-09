import React, { useRef, useState } from 'react';
import { InterstitialScreen } from '@carbon/ibm-products';
import {
  Button,
  Column,
  FlexGrid,
  Layer,
  RadioTile,
  Row,
  SelectableTag,
  TileGroup,
} from '@carbon/react';

import './_example.scss';

const HowACaseIsCreated1 = new URL(
  './SteppedAnimatedMedia/assets/illustrations/how-a-case-is-created-1.json',
  import.meta.url
).pathname;
const HowACaseIsCreated2 = new URL(
  './SteppedAnimatedMedia/assets/illustrations/how-a-case-is-created-2.json',
  import.meta.url
).pathname;
const HowACaseIsCreated3 = new URL(
  './SteppedAnimatedMedia/assets/illustrations/how-a-case-is-created-3.json',
  import.meta.url
).pathname;

import { Checkmark } from '@carbon/react/icons';
import { ContentWrapper } from './ContentWrapper';
import { SteppedAnimatedMedia } from './SteppedAnimatedMedia/SteppedAnimatedMedia';

export const Example = () => {
  const [showInterstitialModal, setShowInterstitialModal] = useState(true);

  const defaultProps = {
    headerTitle: 'Welcome, Jan!',
  };
  const getContent = ({ progStep }) => {
    return (
      <>
        <ContentWrapper stepTitle="Your role">
          <FlexGrid fullWidth className="flexContainer">
            <Row>
              <Column lg={8} className="contentColumn">
                <div className="interstitialTextContainer">
                  <h3>
                    <span>Let’s tailor your experience in 3 steps.</span>
                    <span className="blue-text">
                      What best describes your job role?
                    </span>
                  </h3>
                  <p>
                    We’ll use this information to show you templates, features,
                    and recommended items especially for you.
                  </p>
                </div>
                <div aria-label="Selectable tags" role="group">
                  <SelectableTag
                    renderIcon={Checkmark}
                    text="Developer"
                    size={'lg'}
                  />
                  <SelectableTag
                    renderIcon={Checkmark}
                    text="Product manager"
                    size={'lg'}
                  />
                </div>
              </Column>
              <Column lg={8} className="mediaColumn">
                <div className={`media__container`}>
                  {progStep == 0 && (
                    <SteppedAnimatedMedia
                      filePaths={[HowACaseIsCreated1]}
                      playStep={progStep}
                    />
                  )}
                </div>
              </Column>
            </Row>
          </FlexGrid>
        </ContentWrapper>
        <ContentWrapper stepTitle="Prioritize">
          <FlexGrid fullWidth className="flexContainer">
            <Row>
              <Column lg={8} className="contentColumn">
                <div className="interstitialTextContainer">
                  <h3>
                    <span>Prioritize your needs</span>
                  </h3>
                  <p>
                    We take the triage phase off your hands early on. We
                    automate investigations, and make sure you can see the
                    source of all your data. And we use AI to suggest findings
                    you might not catch on your own. With fewer blind spots for
                    the hackers to hide in, you can see the full picture, and
                    take your defense to the next level.
                  </p>
                </div>
              </Column>
              <Column lg={8} className="mediaColumn">
                <div className={`media__container`}>
                  {progStep == 1 && (
                    <SteppedAnimatedMedia
                      filePaths={[HowACaseIsCreated2]}
                      playStep={progStep}
                    />
                  )}
                </div>
              </Column>
            </Row>
          </FlexGrid>
        </ContentWrapper>
        <ContentWrapper stepTitle="Experience">
          <FlexGrid fullWidth className="flexContainer">
            <Row>
              <Column lg={8} className="contentColumn">
                <div className="interstitialTextContainer step-3">
                  <h3>
                    <span>Welcome to IBM Product!</span>
                  </h3>
                  <h4>Select size</h4>
                  <p>
                    This information is intended to serve as a general guide and
                    overview, providing context and setting the stage for what
                    is to come, please note that details are to help you.
                  </p>
                </div>
                <Layer>
                  <TileGroup
                    name="radio tile group"
                    className="tileWrapper"
                    defaultSelected="medium"
                  >
                    <RadioTile id="radio-tile-1" value="starter">
                      <p>Starter size</p>
                      <p>
                        Trial size in extra small. Includes 1 general purpose
                        node.
                      </p>
                    </RadioTile>
                    <RadioTile id="radio-tile-2" value="small">
                      <p>Small size</p>
                      <p>
                        Trial size in extra small. Includes 1 general purpose
                        node.
                      </p>
                    </RadioTile>
                    <RadioTile id="radio-tile-3" value="medium">
                      <p>Medium</p>
                      <p>
                        Trial size in extra small. Includes 1 general purpose
                        node.
                      </p>
                    </RadioTile>
                    <RadioTile id="radio-tile-4" value="large">
                      <p>Large</p>
                      <p>
                        Trial size in extra small. Includes 1 general purpose
                        node
                      </p>
                    </RadioTile>
                  </TileGroup>
                </Layer>
              </Column>
              <Column lg={8} className="mediaColumn">
                <div className={`media__container`}>
                  {progStep == 2 && (
                    <SteppedAnimatedMedia
                      filePaths={[HowACaseIsCreated3]}
                      playStep={progStep}
                    />
                  )}
                </div>
              </Column>
            </Row>
          </FlexGrid>
        </ContentWrapper>
      </>
    );
  };
  return (
    <>
      <Button
        onClick={() => {
          setShowInterstitialModal(true);
        }}
      >
        Show Interstitial modal
      </Button>
      <InterstitialScreen
        open={showInterstitialModal}
        onClose={() => {
          setShowInterstitialModal(false);
        }}
        isFullScreen={false}
      >
        <InterstitialScreen.Header
          headerTitle={defaultProps.headerTitle}
        ></InterstitialScreen.Header>
        <InterstitialScreen.Body
          contentRenderer={(internalConfig) => {
            return getContent({ progStep: internalConfig.progStep });
          }}
        />
        <InterstitialScreen.Footer />
      </InterstitialScreen>
    </>
  );
};

export default Example;
