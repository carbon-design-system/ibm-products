/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';

import { Cascade } from '../../../cloud-cognitive/src';
import {
  ProductiveCard,
  GlobalHeader,
  MultiStepTearsheetWide,
  PageHeader,
  SidePanel,
  TearsheetNarrow,
  TearsheetWide,
} from './components';
import { usePrefix } from '@carbon/react';
//import { CardData } from './data';

const App = () => {
  const carbonPrefix = usePrefix();
  const [cards, setCards] = useState([]);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [cardToEdit, setCardToEdit] = useState();
  const [narrowTearsheetOpen, setNarrowTearsheetOpen] = useState(false);
  const [wideTearsheetOpen, setWideTearsheetOpen] = useState(false);
  const [multiStepTearsheetOpen, setMultiStepTearsheetOpen] = useState(false);
  const [componentConfig, setComponentConfig] = useState({
    cards: {},
    loadBar: {},
    sidePanel: {},
    tagSet: {},
    tearSheet: {},
    createTearsheet: {
      title: 'Create task',
      label: 'This is the label of the multi step tearsheet',
      nextButtonText: 'Next step',
      description: 'Specify details for the new task you want to create',
      submitButtonText: 'Create',
      cancelButtonText: 'Cancel',
      backButtonText: 'Back',
    },
    modifiedTabs: {},
    pageHeader: {},
  });

  const actions = {
    setSidePanelOpen,
    setNarrowTearsheetOpen,
    setWideTearsheetOpen,
    setComponentConfig,
    setCards,
    setCardToEdit,
  };
  const initialCardsToDisplay = 21;

  // useEffect(() => {
  //   console.log('updated', cardToEdit)
  // }, [cardToEdit]);

  useEffect(() => {
    let tmpCards = [];
    for (let i = 0; i < initialCardsToDisplay; i++) {
      tmpCards.push({
        partitions: 1,
        replicas: 'Factor 1',
        retention: 'A month',
        topic: {
          name: 'Example ' + i,
          description: 'Some description here ' + i,
          author: 'Jane Doe',
          date: new Date(),
        },
      });
    }

    setCards(tmpCards);
  }, []);

  return (
    <div className="component-playground">
      <GlobalHeader />
      <div
        style={{
          // stylelint-disable-next-line carbon/layout-token-use
          marginTop: '48px',
        }}
      ></div>
      <PageHeader setIsOpen={setMultiStepTearsheetOpen} />
      <MultiStepTearsheetWide
        cards={cards}
        isOpen={multiStepTearsheetOpen}
        setIsOpen={setMultiStepTearsheetOpen}
        componentConfig={componentConfig.createTearsheet}
        actions={actions}
      />
      {cardToEdit !== undefined && (
        <SidePanel
          data={cards[cardToEdit]}
          actions={actions}
          index={cardToEdit}
          cards={cards}
          isOpen={sidePanelOpen}
          setIsOpen={setSidePanelOpen}
          componentConfig={componentConfig}
        />
      )}

      <TearsheetNarrow
        isOpen={narrowTearsheetOpen}
        setIsOpen={setNarrowTearsheetOpen}
      />
      <TearsheetWide
        isOpen={wideTearsheetOpen}
        setIsOpen={setWideTearsheetOpen}
      />

      <div className={`${carbonPrefix}--grid card-story`}>
        <Cascade>
          {cards.map((card, index) => {
            // console.log('card info', card);
            return (
              <div
                key={card.topic.name}
                className={`${carbonPrefix}--col-lg-4`}
                style={{
                  // stylelint-disable-next-line carbon/layout-token-use
                  marginTop: '36px',
                }}
              >
                {/* <Card data={CardData} actions={actions} config={componentConfig} index={index + 1} /> */}
                <ProductiveCard
                  data={cards[index]}
                  index={index}
                  cards={cards}
                  actions={actions}
                  config={componentConfig}
                />
              </div>
            );
          })}
        </Cascade>
      </div>
    </div>
  );
};

export default App;
