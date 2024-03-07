/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

async function visitStory(page, options) {
  const { component, story, id, globals, args } = options;
  let url = getStoryUrl({
    component,
    story,
    id,
  });

  if (args) {
    const values = Object.entries(args)
      .map(([key, value]) => {
        return `${key}:${value}`;
      })
      .join(';');
    url = url + `&args=${values}`;
  }

  if (globals) {
    const values = Object.entries(globals)
      .map(([key, value]) => {
        return `${key}:${value}`;
      })
      .join(',');
    url = url + `&globals=${values}`;
  }

  await page.goto(url);
}

function getStoryUrl({ component, story, id }) {
  const normalized = id ? id : `ibm-products-components-${component}--${story}`; // TODO: refactor this because we have some story id's prefixed with `ibm-products-patterns-${component}--${story}`

  // Note: We serve a static storybook in CI that will trim .html extensions
  // from the URL
  if (process.env.CI) {
    return `/iframe?id=${normalized}&viewMode=story`;
  }
  return `/iframe.html?id=${normalized}&viewMode=story`;
}

module.exports = {
  visitStory,
};
