'use strict';

const cpx = require('cpx');
const { exec } = require('child_process');
const path = require('path');
const rimraf = require('rimraf');
const util = require('util');

const copy = util.promisify(cpx.copy);
const rimrafAsync = util.promisify(rimraf);
const execAsync = (commands, env) =>
  new Promise((resolve, reject) => {
    const options = {
      stdio: 'inherit',
      env: Object.assign({}, process.env, env),
    };
    exec(commands, options, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      if (stderr) {
        reject(stderr);
        return;
      }

      resolve(stdout);
    });
  });

async function build() {
  const ROOT_DIR = path.resolve(__dirname, '../');
  const ignoreGlobs = [
    '**/__tests__/*',
    '**/*-test.js',
    '**/*.stories.js',
  ].join(',');
  const buildDirectories = ['lib', 'es', 'scss'];

  // eslint-disable-next-line no-console
  console.log('Deleting old build folders...');
  await Promise.all(
    buildDirectories.map((dir) => rimrafAsync(`${ROOT_DIR}/${dir}`))
  );

  const buildSteps = [
    execAsync(`babel src -d es --ignore "${ignoreGlobs}"`, {
      BABEL_ENV: 'es',
    }),
    execAsync(`babel src -d lib --ignore "${ignoreGlobs}"`, {
      BABEL_ENV: 'cjs',
    }),
    copy(`${ROOT_DIR}/src/**/*.scss`, `${ROOT_DIR}/scss`),
    copy(
      `${ROOT_DIR}/src/components/**/assets/*`,
      `${ROOT_DIR}/es/components/`
    ),
    copy(
      `${ROOT_DIR}/src/components/**/assets/*`,
      `${ROOT_DIR}/lib/components/`
    ),
  ];

  // eslint-disable-next-line no-console
  console.log('Running build steps for JS and Sass...');
  await Promise.all(buildSteps);
}

build().catch((error) => {
  // eslint-disable-next-line no-console
  console.log(error);
  process.exit(1);
});
