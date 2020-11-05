//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

const attribute = 'data-ui-id';

export function idAttributeSelector(identifier) {
  let attr = `[${attribute}="${identifier}"]`;
  return attr;
}

export function fuzzyAttributeSelector(identifier) {
  let attr = `[${attribute}*="${identifier}"]`;
  return attr;
}

export function idAttribute(identifier) {
  let attr = { [attribute]: identifier };
  return attr;
}
