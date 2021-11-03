/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { resolve } = require('path');
const { execFileSync } = require('child_process');
const { sync: glob } = require('glob');
import fs from 'fs-extra';

const r = (file) => resolve(__dirname, file);
const loadPath1 = r('../../node_modules');
const loadPath2 = r('../../../../node_modules');
const scssGenerate = r('../global/styles/_generate-carbon-modules.scss');
const scssCarbonModules = r('../global/styles/_imported-carbon-modules.scss');
const scssIndexReleased = r('../index-without-carbon-released-only.scss');
const scssProjectSettings = r('../global/styles/_project-settings.scss');

const g = (globString) =>
  glob(r(globString), {
    nodir: true, // cspell:disable-line
    nosort: true, // cspell:disable-line
    ignore: [scssIndexReleased, scssProjectSettings],
  });
const scssAll = [
  ...g('../*.scss'),
  ...g('../components/*.scss'),
  ...g('../components/**/_index.scss'),
];

const compile = (file, compressed, collect) =>
  execFileSync(
    'sass',
    [
      compressed ? '--style=compressed' : '--style=expanded',
      '--no-source-map',
      '--load-path',
      loadPath1,
      '--load-path',
      loadPath2,
      file,
    ],
    {
      stdio: ['ignore', collect ? 'pipe' : 'ignore', 'pipe'],
    }
  )?.toString();

describe('imported-carbon-modules', () => {
  it('presents a complete and correct list of module names', async () => {
    const normalize = (str) => str.replace(/"/g, "'").replace(/\s+/g, ' ');
    const generated = compile(scssGenerate, false, true);
    const current = await fs.readFile(scssCarbonModules, 'utf8');

    expect(
      normalize(
        generated.match(/\.___imported-modules-output {\s*content: (.*?);/s)[1]
      )
    ).toEqual(normalize(current.match(/imported-carbon-modules: (.*?);/s)[1]));
  });
});

describe('CSS export checks', () => {
  // This test will fail for any of our SCSS entry points that does not compile,
  // ignoring scssIndexReleased and scssProjectSettings which we test separately.
  scssAll.forEach((file) =>
    it(`${file.match(/\/src\/(.*)/)[1]} compiles as valid SCSS`, () => {
      expect(() => compile(file)).not.toThrow();
    })
  );

  // This test will fail if the generated CSS changes and no longer matches
  // the snapshot. If a change to the exported CSS for released components is
  // intended, re-run the tests with -u to update the snapshot, and check the
  // fresh snapshot in as part of the PR.
  it("doesn't change the exported CSS for released components", () => {
    const css = compile(scssIndexReleased, false, true);
    expect(css).toMatchSnapshot();
  });

  // This test will fail if the project settings generates any CSS, as this
  // file should be including definitions and variables only.
  it("doesn't generate any CSS from the project settings", () => {
    const css = compile(scssProjectSettings, true, true);
    expect(css).toHaveLength(0);
  });
});
