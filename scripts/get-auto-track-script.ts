/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

//cspell: disable
export const getAutoTrack = (source: string) => `
  <script>
    window._ibmAnalytics = {
      settings: {
        name: '${source}',
        isSpa: false,
        tealiumProfileName: 'in-app-usage-growth',
      },
      onLoad: [['ibmStats.pageview', []]],
    };

    window.digitalData = {
      page: {
        pageInfo: {
          ibm: {
            siteId: 'IBM_${source}',
          },
          segment: {
            enabled: true,
            env: 'test',
            key: 'aWg1ug3bDNcSTnde9iwvg1OcvVRzf0JC',
            coremetrics: false,
            commonProperties: {
              productCode: 'C4IP',
              productTitle: 'Carbon for IBM Products',
            },
            pageProperties: {
              productCode: 'C4IP',
              productTitle: 'Carbon for IBM Products',
            },
          },
        },
        category: {
          primaryCategory: 'PC110',
        },
      },
    };
  </script>
  <script
    src="//1.www.s81c.com/common/stats/ibm-common.js"
    type="text/javascript"
    async="async"></script>
  <script
    type="text/javascript"
    async="async"
    src="//1.www.s81c.com/common/carbon/autotrack.min.js"></script>`;
