/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const getTitle = (category) =>
  ((category, title) => `${category}/${title}`).bind(this, category);

const automation = getTitle('Automation');
const cdai = getTitle('CD&AI');
const commonServices = getTitle('Common Services');
const security = getTitle('Security');

export { automation, cdai, commonServices, security };
