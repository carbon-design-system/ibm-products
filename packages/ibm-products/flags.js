const { pkg } = require('./lib/settings.js');
const { component, feature } = pkg;

console.log('Components enabled by default\n', { component });

console.log('\n\nDefault feature flag values\n', { feature });
