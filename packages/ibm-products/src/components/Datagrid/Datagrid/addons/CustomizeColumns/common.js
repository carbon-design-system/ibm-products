// @flow
/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2021
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */

import isBoolean from 'lodash/isBoolean';

export const isColumnVisible = (colDef) =>
  isBoolean(colDef.isVisible) ? colDef.isVisible : true;
