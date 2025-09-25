/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

//cspell: disable
export const getAutoTrack = (source: string) => {
  return `
<script>
  window._ibmAnalytics = window._ibmAnalytics || {};
  window.digitalData = window.digitalData || {};
  window._ibmAnalytics.settings.name = '${source}';
  window.digitalData.page.pageInfo.ibm.siteId = 'IBM_${source}';
</script>
<script type="text/javascript" async="async" src="//1.www.s81c.com/common/carbon/autotrack.min.js"></script>`;
};
