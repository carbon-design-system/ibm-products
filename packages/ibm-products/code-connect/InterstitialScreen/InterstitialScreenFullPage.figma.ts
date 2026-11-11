// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=16728-642995
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/InterstitialScreen/InterstitialScreen.tsx
// component=InterstitialScreen

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

const placeholderText =
  'We take the triage phase off your hands early on. We automate investigations, and make sure you can see the source of all your data. And we use AI to suggest findings you might not catch on your own. With fewer blind spots for the hackers to hide in, you can see the full picture, and take your defense to the next level.';

function textOf(layerName: string) {
  const layer = instance.findText(layerName);
  return layer.type !== 'ERROR' ? layer.textContent : undefined;
}

function createTemplate() {
  const type = instance.getEnum('Type', {
    'Title + steps': 'titleSteps',
    'No steps': 'noSteps',
    'Steps only': 'stepsOnly',
  });
  const hasSteps = instance.getBoolean('Steps');

  const importNames = ['InterstitialScreen'];
  let example;

  if (type === 'stepsOnly') {
    const contentRenderer = hasSteps
      ? figma.code`(internalConfig) => {
    return (
      <div>
        Your custom progress indicator and step contents markup here
      </div>
    );
  }`
      : undefined;

    example = figma.code`<InterstitialScreen open isFullScreen>
  <InterstitialScreen.Header hideProgressIndicator />
  <InterstitialScreen.Body${contentRenderer ? figma.code` contentRenderer={${contentRenderer}}` : ''} />
  <InterstitialScreen.Footer />
</InterstitialScreen>`;
  } else {
    importNames.push('InterstitialScreenView');
    const title = textOf('Use case-specific heading');
    const description = textOf(placeholderText);
    const image = figma.properties.children(['Aspect ratio']);
    const slot = instance.getBoolean('Slot')
      ? figma.properties.children(['Slot 1'])
      : [];

    let header;
    let steps = null;
    if (type === 'titleSteps') {
      const headerTitle = textOf('Personalize your experience');
      const headerSubTitle = instance.getBoolean('Subtitle')
        ? textOf('Subtitle')
        : undefined;
      const hideProgressIndicator = hasSteps ? undefined : true;
      header = figma.code`<InterstitialScreen.Header${figma.helpers.react.renderProp('headerTitle', headerTitle)}${figma.helpers.react.renderProp('headerSubTitle', headerSubTitle)}${figma.helpers.react.renderProp('hideProgressIndicator', hideProgressIndicator)} />`;
      steps = hasSteps
        ? figma.code`
    <InterstitialScreenView stepTitle="Step">
      <div>step content markup here</div>
    </InterstitialScreenView>`
        : null;
    } else {
      header = figma.code`<InterstitialScreen.Header hideProgressIndicator />`;
    }

    example = figma.code`<InterstitialScreen open isFullScreen>
  ${header}
  <InterstitialScreen.Body>
    <InterstitialScreenView>
      <h3>${title}</h3>
      <p>${description}</p>
      ${image}
      ${slot}
    </InterstitialScreenView>${steps}
  </InterstitialScreen.Body>
  <InterstitialScreen.Footer />
</InterstitialScreen>`;
  }

  return {
    id: 'InterstitialScreenFullPage',
    imports: [
      `import { ${importNames.join(', ')} } from '@carbon/ibm-products';`,
    ],
    example,
    metadata: { nestable: false },
  };
}

export default createTemplate();
